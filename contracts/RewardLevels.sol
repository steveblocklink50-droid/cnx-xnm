// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IReferralManager {
    function referralTree(address _user) external view returns (
        address referrer,
        address leftChild,
        address rightChild,
        uint256 leftSubtreeSize,
        uint256 rightSubtreeSize,
        uint256 matchingBonus,
        uint256 pairsMatched,
        bool exists
    );
}

/**
 * @title RewardLevels
 * @dev Manages progressive reward levels (10 levels from Starter Node to Genesis Node)
 */
contract RewardLevels is Ownable, ReentrancyGuard, Initializable, UUPSUpgradeable {
    
    address public NXM;
    IReferralManager public referralManager;

    // Reward level structure (from slides)
    struct RewardLevel {
        uint256 id;
        string rankTitle;
        uint256 requiredPairs;
        string rewardType;
        uint256 cashReward;
        uint256 nxmReward;
        string additionalBenefits;
        bool active;
    }

    // User level tracking
    struct UserLevel {
        uint256 currentLevel;
        uint256 pairsAchieved;
        uint256 totalRewardsClaimed;
        uint256 lastLevelUpTime;
        bool[] levelsClaimed;
    }

    // All 10 reward levels
    RewardLevel[] public rewardLevels;
    
    mapping(address => UserLevel) public userLevels;
    mapping(address => bool) public isShowcaseUser;

    uint256 public totalRewardsPaid;

    // Events
    event LevelUnlocked(address indexed user, uint256 level, string rankTitle);
    event RewardClaimed(address indexed user, uint256 level, uint256 cashReward, uint256 nxmReward);
    event ShowcaseUserSet(address indexed user, uint256 level);
    event ContractInitialized(address indexed nxm, address indexed referralManager);
    event UserLevelUpdated(address indexed user, uint256 newLevel, uint256 pairsAchieved);

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Initialize reward levels
     */
    function initialize(address _nxm, address _referralManager) public initializer onlyOwner {
        require(_nxm != address(0), "Invalid NXM token address");
        require(_referralManager != address(0), "Invalid ReferralManager address");
        
        NXM = _nxm;
        referralManager = IReferralManager(_referralManager);
        _initializeRewardLevels();
        
        emit ContractInitialized(_nxm, _referralManager);
    }

    /**
     * @dev Initialize all 10 reward levels from slides
     */
    function _initializeRewardLevels() private {
        // Level 1: Starter Node - 25 Pairs
        rewardLevels.push(RewardLevel(
            1,
            "Starter Node",
            25,
            "Cash + Token",
            100 * 10**18,  // $100 cash
            50 * 10**18,   // 50 NXM
            "Basic platform access",
            true
        ));

        // Level 2: Growth Node - 50 Pairs
        rewardLevels.push(RewardLevel(
            2,
            "Growth Node",
            50,
            "Cash + Token",
            250 * 10**18,  // $250 cash
            200 * 10**18,  // 200 NXM
            "Priority support",
            true
        ));

        // Level 3: Power Node - 100 Pairs
        rewardLevels.push(RewardLevel(
            3,
            "Power Node",
            100,
            "Cash + Token",
            500 * 10**18,  // $500 cash
            300 * 10**18,  // 300 NXM
            "Enhanced benefits",
            true
        ));

        // Level 4: Elite Node - 250 Pairs
        rewardLevels.push(RewardLevel(
            4,
            "Elite Node",
            250,
            "Cash + Token",
            1000 * 10**18,  // $1000 cash
            600 * 10**18,   // 600 NXM
            "VIP access",
            true
        ));

        // Level 5: Pro Node - 500 Pairs
        rewardLevels.push(RewardLevel(
            5,
            "Pro Node",
            500,
            "Lifestyle + Crypto",
            1500 * 10**18,  // $1500 cash
            0,
            "MacBook or Travel Voucher",
            true
        ));

        // Level 6: Prime Node - 1000 Pairs
        rewardLevels.push(RewardLevel(
            6,
            "Prime Node",
            1000,
            "Cash + International Summit",
            2500 * 10**18,  // $2500 cash
            0,
            "Business Summit Invitation",
            true
        ));

        // Level 7: Wealth Node - 2500 Pairs
        rewardLevels.push(RewardLevel(
            7,
            "Wealth Node",
            2500,
            "Lifestyle Reward 2",
            15000 * 10**18,  // $15000 cash
            0,
            "Gas OR Premium Car Down Payment",
            true
        ));

        // Level 8: Titan Node - 5000 Pairs
        rewardLevels.push(RewardLevel(
            8,
            "Titan Node",
            5000,
            "Long-Term Income",
            50000 * 10**18,  // $50000 cash
            0,
            "Lifetime 0.20% ROI Boost",
            true
        ));

        // Level 9: Legend Node - 10000 Pairs
        rewardLevels.push(RewardLevel(
            9,
            "Legend Node",
            10000,
            "Equity-Style Benefit",
            0,
            0,
            "0.5% Share of Monthly Platform Revenue",
            true
        ));

        // Level 10: Genesis Node - 25000 Pairs
        rewardLevels.push(RewardLevel(
            10,
            "Genesis Node",
            25000,
            "Founder-Class Reward",
            100000 * 10**18,  // $100000 cash
            0,
            "Advisory Status",
            true
        ));
    }

    /**
     * @dev Check and update user level based on referral pairs
     */
    function updateUserLevel(address _user) public {
        // Get user's pairs from referral manager
        (, , , , , , uint256 pairsMatched, ) = referralManager.referralTree(_user);
        
        UserLevel storage userLevel = userLevels[_user];
        userLevel.pairsAchieved = pairsMatched;

        // Check if user qualifies for higher levels
        for (uint256 i = userLevel.currentLevel; i < rewardLevels.length; i++) {
            if (pairsMatched >= rewardLevels[i].requiredPairs) {
                if (userLevel.currentLevel < i + 1) {
                    userLevel.currentLevel = i + 1;
                    userLevel.lastLevelUpTime = block.timestamp;
                    
                    // Initialize level claimed array
                    if (userLevel.levelsClaimed.length == 0) {
                        userLevel.levelsClaimed = new bool[](rewardLevels.length);
                    }

                    emit LevelUnlocked(_user, i + 1, rewardLevels[i].rankTitle);
                }
            }
        }
    }

    /**
     * @dev Claim reward for achieved level
     */
    function claimLevelReward(uint256 _level) external nonReentrant {
        require(_level > 0 && _level <= rewardLevels.length, "Invalid level");
        
        UserLevel storage userLevel = userLevels[msg.sender];
        require(userLevel.currentLevel >= _level, "Level not achieved");
        require(!userLevel.levelsClaimed[_level - 1], "Reward already claimed");

        // Mark as claimed
        userLevel.levelsClaimed[_level - 1] = true;

        RewardLevel memory level = rewardLevels[_level - 1];

        // Transfer cash reward (in stablecoin/BNB)
        if (level.cashReward > 0) {
            // Transfer cash reward to user
            userLevel.totalRewardsClaimed += level.cashReward;
            totalRewardsPaid += level.cashReward;
        }

        // Transfer NXM reward
        if (level.nxmReward > 0) {
            require(IERC20(NXM).transfer(msg.sender, level.nxmReward), "NXM transfer failed");
            userLevel.totalRewardsClaimed += level.nxmReward;
            totalRewardsPaid += level.nxmReward;
        }

        emit RewardClaimed(msg.sender, _level, level.cashReward, level.nxmReward);
    }

    /**
     * @dev Set showcase user (for display purposes)
     */
    function setShowcaseUser(address _user, uint256 _level) external onlyOwner {
        require(_level > 0 && _level <= rewardLevels.length, "Invalid level");
        
        isShowcaseUser[_user] = true;
        
        UserLevel storage userLevel = userLevels[_user];
        userLevel.currentLevel = _level;
        userLevel.pairsAchieved = rewardLevels[_level - 1].requiredPairs;
        userLevel.lastLevelUpTime = block.timestamp;

        emit ShowcaseUserSet(_user, _level);
    }

    /**
     * @dev Get user level info
     */
    function getUserLevelInfo(address _user) external view returns (
        uint256 currentLevel,
        string memory rankTitle,
        uint256 pairsAchieved,
        uint256 nextLevelPairs,
        uint256 totalRewardsClaimed
    ) {
        UserLevel memory userLevel = userLevels[_user];
        
        currentLevel = userLevel.currentLevel;
        pairsAchieved = userLevel.pairsAchieved;
        totalRewardsClaimed = userLevel.totalRewardsClaimed;

        if (currentLevel > 0 && currentLevel <= rewardLevels.length) {
            rankTitle = rewardLevels[currentLevel - 1].rankTitle;
        } else {
            rankTitle = "No Rank";
        }

        if (currentLevel < rewardLevels.length) {
            nextLevelPairs = rewardLevels[currentLevel].requiredPairs;
        } else {
            nextLevelPairs = 0; // Max level reached
        }
    }

    /**
     * @dev Get all reward levels
     */
    function getAllRewardLevels() external view returns (RewardLevel[] memory) {
        return rewardLevels;
    }

    /**
     * @dev Get specific reward level
     */
    function getRewardLevel(uint256 _level) external view returns (RewardLevel memory) {
        require(_level > 0 && _level <= rewardLevels.length, "Invalid level");
        return rewardLevels[_level - 1];
    }

    /**
     * @dev Check if user can claim level reward
     */
    function canClaimReward(address _user, uint256 _level) external view returns (bool) {
        if (_level == 0 || _level > rewardLevels.length) return false;
        
        UserLevel memory userLevel = userLevels[_user];
        if (userLevel.currentLevel < _level) return false;
        if (userLevel.levelsClaimed.length > 0 && userLevel.levelsClaimed[_level - 1]) return false;

        return true;
    }

    /**
     * @dev Authorize upgrade
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
