// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IPancakeRouter {
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
}

/**
 * @title PackageManager
 * @dev Handles package purchases, multi-token support, and pool management
 */
contract PackageManager is Ownable, ReentrancyGuard, Initializable, UUPSUpgradeable {
    
    // Accepted payment tokens
    address public BUSD;
    address public USDT;
    address public USDC;
    address public NXM;
    address public WBNB;
    address public pancakeRouter;

    // Package structure
    struct Package {
        uint256 id;
        uint256 amount;
        uint256 dailyROI; // percentage (e.g., 40 = 0.4%)
        bool active;
    }

    // User package purchase
    struct UserPackage {
        uint256 packageId;
        uint256 amount;
        uint256 purchaseTime;
        uint256 earnings;
        uint256 maxEarnings; // 2x the amount
        bool active;
        uint256 topUpCount;
    }

    // Packages: I=$50, II=$100, III=$500, IV=$1000+
    Package[] public packages;
    
    // User purchases
    mapping(address => UserPackage[]) public userPackages;
    
    // Pool for owner withdrawals
    uint256 public totalPool;
    mapping(address => uint256) public poolContributions;

    // Events
    event PackagePurchased(address indexed user, uint256 packageId, uint256 amount, address paymentToken);
    event ROIEarned(address indexed user, uint256 amount);
    event PoolContributed(uint256 amount, address token);
    event ContractInitialized(address indexed busd, address indexed usdt, address indexed usdc);
    event PoolUpdated(uint256 totalPool, address token, uint256 amount);

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Initialize contract with token addresses and packages
     */
    function initialize(
        address _busd,
        address _usdt,
        address _usdc,
        address _nxm,
        address _wbnb,
        address _pancakeRouter
    ) public initializer onlyOwner {
        require(_busd != address(0), "Invalid BUSD address");
        require(_usdt != address(0), "Invalid USDT address");
        require(_usdc != address(0), "Invalid USDC address");
        require(_nxm != address(0), "Invalid NXM address");
        require(_wbnb != address(0), "Invalid WBNB address");
        require(_pancakeRouter != address(0), "Invalid PancakeRouter address");

        BUSD = _busd;
        USDT = _usdt;
        USDC = _usdc;
        NXM = _nxm;
        WBNB = _wbnb;
        pancakeRouter = _pancakeRouter;

        // Initialize packages
        _initializePackages();
        
        emit ContractInitialized(_busd, _usdt, _usdc);
    }

    /**
     * @dev Initialize package tiers
     */
    function _initializePackages() private {
        packages.push(Package(0, 50 * 10**18, 40, true));      // $50, 0.4% daily
        packages.push(Package(1, 100 * 10**18, 60, true));     // $100, 0.6% daily
        packages.push(Package(2, 500 * 10**18, 75, true));     // $500, 0.75% daily
        packages.push(Package(3, 1000 * 10**18, 100, true));   // $1000+, 1% daily
    }

    /**
     * @dev Purchase package with BNB (main payment method)
     */
    function purchasePackageWithBNB(uint256 _packageId) external payable nonReentrant {
        require(_packageId < packages.length, "Invalid package");
        require(packages[_packageId].active, "Package not active");
        
        Package memory pkg = packages[_packageId];
        require(msg.value >= pkg.amount, "Insufficient BNB");

        // Record user package
        UserPackage memory userPkg = UserPackage(
            _packageId,
            msg.value,
            block.timestamp,
            0,
            msg.value * 2,  // max earnings = 2x
            true,
            0
        );

        userPackages[msg.sender].push(userPkg);
        
        // Add to pool (platform fee - 5% goes to pool)
        uint256 poolAmount = msg.value * 5 / 100;
        totalPool += poolAmount;
        poolContributions[address(0)] += poolAmount;

        emit PackagePurchased(msg.sender, _packageId, msg.value, address(0));
    }

    /**
     * @dev Purchase package with BUSD/USDT/USDC
     */
    function purchasePackageWithStableCoin(
        uint256 _packageId,
        uint256 _amount,
        address _token
    ) external nonReentrant {
        require(_packageId < packages.length, "Invalid package");
        require(packages[_packageId].active, "Package not active");
        require(_token == BUSD || _token == USDT || _token == USDC, "Token not supported");

        Package memory pkg = packages[_packageId];
        require(_amount >= pkg.amount, "Insufficient amount");

        // Transfer tokens from user to contract
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);

        // Record user package
        UserPackage memory userPkg = UserPackage(
            _packageId,
            _amount,
            block.timestamp,
            0,
            _amount * 2,  // max earnings = 2x
            true,
            0
        );

        userPackages[msg.sender].push(userPkg);
        
        // Add to pool (5%)
        uint256 poolAmount = _amount * 5 / 100;
        totalPool += poolAmount;
        poolContributions[_token] += poolAmount;

        emit PackagePurchased(msg.sender, _packageId, _amount, _token);
    }

    /**
     * @dev Purchase package with NXM token
     */
    function purchasePackageWithNXM(uint256 _packageId, uint256 _amount) external nonReentrant {
        require(_packageId < packages.length, "Invalid package");
        require(packages[_packageId].active, "Package not active");

        Package memory pkg = packages[_packageId];
        require(_amount >= pkg.amount, "Insufficient amount");

        // Transfer NXM from user
        IERC20(NXM).transferFrom(msg.sender, address(this), _amount);

        // Record user package
        UserPackage memory userPkg = UserPackage(
            _packageId,
            _amount,
            block.timestamp,
            0,
            _amount * 2,
            true,
            0
        );

        userPackages[msg.sender].push(userPkg);
        
        // Add to pool (5%)
        uint256 poolAmount = _amount * 5 / 100;
        totalPool += poolAmount;
        poolContributions[NXM] += poolAmount;

        emit PackagePurchased(msg.sender, _packageId, _amount, NXM);
    }

    /**
     * @dev Get user's active packages
     */
    function getUserPackages(address _user) external view returns (UserPackage[] memory) {
        return userPackages[_user];
    }

    /**
     * @dev Get package details
     */
    function getPackage(uint256 _packageId) external view returns (Package memory) {
        require(_packageId < packages.length, "Invalid package");
        return packages[_packageId];
    }

    /**
     * @dev Owner withdraw from pool
     */
    function withdrawFromPool(address _token, uint256 _amount) external onlyOwner nonReentrant {
        require(_amount <= poolContributions[_token], "Insufficient pool balance");
        
        poolContributions[_token] -= _amount;
        totalPool -= _amount;

        if (_token == address(0)) {
            (bool success, ) = owner().call{value: _amount}("");
            require(success, "Transfer failed");
        } else {
            IERC20(_token).transfer(owner(), _amount);
        }
    }

    /**
     * @dev Authorize upgrade
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
