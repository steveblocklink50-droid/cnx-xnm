// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IPackageManager {
    struct UserPackage {
        uint256 packageId;
        uint256 amount;
        uint256 purchaseTime;
        uint256 earnings;
        uint256 maxEarnings;
        bool active;
        uint256 topUpCount;
    }
    
    function userPackages(address _user, uint256 _index) external view returns (UserPackage memory);
    function getUserPackages(address _user) external view returns (UserPackage[] memory);
}

/**
 * @title ROIManager
 * @dev Calculates and automatically pays daily ROI to users
 */
contract ROIManager is Ownable, ReentrancyGuard, Initializable, UUPSUpgradeable {
    
    IPackageManager public packageManager;
    address public NXM;
    
    // ROI tracking per user package
    struct ROIRecord {
        address user;
        uint256 packageIndex;
        uint256 lastClaimTime;
        uint256 totalPaidOut;
        bool active;
    }

    mapping(address => mapping(uint256 => ROIRecord)) public roiRecords;
    mapping(address => uint256) public pendingROI;

    // Daily ROI percentages based on package (from slides)
    mapping(uint256 => uint256) public dailyROIPercentages; // packageId => percentage (40 = 0.4%)

    uint256 public withdrawnROI;
    
    // Events
    event ROIPaidOut(address indexed user, uint256 amount, uint256 packageIndex);
    event ROIAccumulated(address indexed user, uint256 amount);
    event ROICalculated(address indexed user, uint256 dailyAmount, uint256 packageIndex);
    event ContractInitialized(address indexed packageManager, address indexed nxmToken);
    event ROIPercentageUpdated(uint256 indexed packageId, uint256 newPercentage);

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Initialize ROI manager
     */
    function initialize(address _packageManager, address _nxm) public initializer onlyOwner {
        require(_packageManager != address(0), "Invalid PackageManager address");
        require(_nxm != address(0), "Invalid NXM token address");
        
        packageManager = IPackageManager(_packageManager);
        NXM = _nxm;

        // Set daily ROI percentages
        dailyROIPercentages[0] = 40;   // Package 1: 0.4%
        dailyROIPercentages[1] = 60;   // Package 2: 0.6%
        dailyROIPercentages[2] = 75;   // Package 3: 0.75%
        dailyROIPercentages[3] = 100;  // Package 4: 1%
        
        emit ContractInitialized(_packageManager, _nxm);
    }

    /**
     * @dev Calculate pending ROI for a user's package
     */
    function calculatePendingROI(address _user, uint256 _packageIndex) public view returns (uint256) {
        IPackageManager.UserPackage[] memory packages = packageManager.getUserPackages(_user);
        require(_packageIndex < packages.length, "Invalid package index");

        IPackageManager.UserPackage memory pkg = packages[_packageIndex];
        require(pkg.active, "Package not active");

        // Package already earned 2x amount
        if (pkg.earnings >= pkg.maxEarnings) {
            return 0;
        }

        // Get time elapsed since last claim
        ROIRecord memory record = roiRecords[_user][_packageIndex];
        uint256 timeSinceLastClaim = record.lastClaimTime > 0 
            ? block.timestamp - record.lastClaimTime 
            : block.timestamp - pkg.purchaseTime;

        // Calculate ROI in days (1 day = 86400 seconds)
        uint256 daysElapsed = timeSinceLastClaim / 86400;
        
        if (daysElapsed == 0) {
            return 0;
        }

        // Get daily ROI percentage
        uint256 dailyPercent = dailyROIPercentages[pkg.packageId];
        
        // Calculate ROI: amount * (percentage / 10000) * days
        uint256 roiAmount = (pkg.amount * dailyPercent / 10000) * daysElapsed;

        // Check if ROI would exceed max earnings
        uint256 remainingEarnings = pkg.maxEarnings - pkg.earnings;
        
        return roiAmount > remainingEarnings ? remainingEarnings : roiAmount;
    }

    /**
     * @dev Claim pending ROI for a package (automatic payout to wallet)
     */
    function claimROI(uint256 _packageIndex) external nonReentrant {
        uint256 roiAmount = calculatePendingROI(msg.sender, _packageIndex);
        require(roiAmount > 0, "No pending ROI");

        // Update ROI record
        roiRecords[msg.sender][_packageIndex].lastClaimTime = block.timestamp;
        roiRecords[msg.sender][_packageIndex].totalPaidOut += roiAmount;
        
        // Add to pending withdrawal (will be paid automatically)
        pendingROI[msg.sender] += roiAmount;

        emit ROIAccumulated(msg.sender, roiAmount);
    }

    /**
     * @dev Withdraw accumulated ROI (automatic payout to wallet)
     */
    function withdrawROI(uint256 _amount) external nonReentrant {
        require(_amount <= pendingROI[msg.sender], "Insufficient ROI balance");
        
        pendingROI[msg.sender] -= _amount;
        withdrawnROI += _amount;

        // Transfer NXM tokens to user wallet
        require(IERC20(NXM).transfer(msg.sender, _amount), "Transfer failed");

        emit ROIPaidOut(msg.sender, _amount, 0);
    }

    /**
     * @dev Automatic daily ROI payout (can be called by backend service)
     */
    function automaticDailyROI(address _user, uint256[] calldata _packageIndexes) external onlyOwner {
        for (uint256 i = 0; i < _packageIndexes.length; i++) {
            uint256 roiAmount = calculatePendingROI(_user, _packageIndexes[i]);
            if (roiAmount > 0) {
                roiRecords[_user][_packageIndexes[i]].lastClaimTime = block.timestamp;
                roiRecords[_user][_packageIndexes[i]].totalPaidOut += roiAmount;
                pendingROI[_user] += roiAmount;

                // Emit event for tracking
                emit ROICalculated(_user, roiAmount, _packageIndexes[i]);
            }
        }

        // Auto-transfer to user wallet
        if (pendingROI[_user] > 0) {
            uint256 amount = pendingROI[_user];
            pendingROI[_user] = 0;
            require(IERC20(NXM).transfer(_user, amount), "Auto-transfer failed");
            withdrawnROI += amount;
        }
    }

    /**
     * @dev Get user's pending ROI balance
     */
    function getPendingROI(address _user) external view returns (uint256) {
        return pendingROI[_user];
    }

    /**
     * @dev Get ROI record for a package
     */
    function getROIRecord(address _user, uint256 _packageIndex) external view returns (ROIRecord memory) {
        return roiRecords[_user][_packageIndex];
    }

    /**
     * @dev Update daily ROI percentage (owner only)
     */
    function updateDailyROI(uint256 _packageId, uint256 _newPercentage) external onlyOwner {
        require(_packageId < 4, "Invalid package ID");
        require(_newPercentage > 0 && _newPercentage <= 1000, "Percentage must be between 0.01% and 10%");
        dailyROIPercentages[_packageId] = _newPercentage;
        emit ROIPercentageUpdated(_packageId, _newPercentage);
    }

    /**
     * @dev Authorize upgrade
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
