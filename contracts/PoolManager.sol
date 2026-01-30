// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title PoolManager
 * @dev Manages platform pool for owner withdrawals and fund management
 */
contract PoolManager is Ownable, ReentrancyGuard, Initializable, UUPSUpgradeable {
    
    // Supported tokens
    address public BUSD;
    address public USDT;
    address public USDC;
    address public NXM;

    // Pool balances by token
    mapping(address => uint256) public poolBalances;
    
    // BNB balance (address(0) represents BNB)
    uint256 public bnbBalance;

    // Withdrawal tracking
    struct Withdrawal {
        address token;
        uint256 amount;
        uint256 timestamp;
        address recipient;
    }

    Withdrawal[] public withdrawalHistory;

    // Events
    event FundsDeposited(address indexed token, uint256 amount);
    event FundsWithdrawn(address indexed token, uint256 amount, address indexed recipient);
    event EmergencyWithdrawal(address indexed token, uint256 amount);
    event ContractInitialized(address indexed busd, address indexed usdt, address indexed usdc);
    event PoolBalanceUpdated(address indexed token, uint256 newBalance);

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Initialize pool manager
     */
    function initialize(
        address _busd,
        address _usdt,
        address _usdc,
        address _nxm
    ) public initializer onlyOwner {
        require(_busd != address(0), "Invalid BUSD address");
        require(_usdt != address(0), "Invalid USDT address");
        require(_usdc != address(0), "Invalid USDC address");
        require(_nxm != address(0), "Invalid NXM address");
        
        BUSD = _busd;
        USDT = _usdt;
        USDC = _usdc;
        NXM = _nxm;
        
        emit ContractInitialized(_busd, _usdt, _usdc);
    }

    /**
     * @dev Deposit BNB to pool
     */
    receive() external payable {
        bnbBalance += msg.value;
        emit FundsDeposited(address(0), msg.value);
    }

    /**
     * @dev Deposit tokens to pool
     */
    function depositTokens(address _token, uint256 _amount) external onlyOwner {
        require(_token != address(0), "Invalid token");
        require(_amount > 0, "Invalid amount");

        IERC20(_token).transferFrom(msg.sender, address(this), _amount);
        poolBalances[_token] += _amount;

        emit FundsDeposited(_token, _amount);
        emit PoolBalanceUpdated(_token, poolBalances[_token]);
    }

    /**
     * @dev Owner withdraws BNB from pool
     */
    function withdrawBNB(uint256 _amount) external onlyOwner nonReentrant {
        require(_amount <= bnbBalance, "Insufficient BNB balance");
        
        bnbBalance -= _amount;

        // Record withdrawal
        withdrawalHistory.push(Withdrawal(
            address(0),
            _amount,
            block.timestamp,
            msg.sender
        ));

        (bool success, ) = owner().call{value: _amount}("");
        require(success, "BNB transfer failed");

        emit FundsWithdrawn(address(0), _amount, owner());
    }

    /**
     * @dev Owner withdraws tokens from pool
     */
    function withdrawTokens(address _token, uint256 _amount) external onlyOwner nonReentrant {
        require(_amount <= poolBalances[_token], "Insufficient token balance");
        
        poolBalances[_token] -= _amount;

        // Record withdrawal
        withdrawalHistory.push(Withdrawal(
            _token,
            _amount,
            block.timestamp,
            msg.sender
        ));

        require(IERC20(_token).transfer(owner(), _amount), "Token transfer failed");

        emit FundsWithdrawn(_token, _amount, owner());
    }

    /**
     * @dev Emergency withdrawal (owner only)
     */
    function emergencyWithdraw(address _token) external onlyOwner nonReentrant {
        if (_token == address(0)) {
            // Withdraw all BNB
            uint256 balance = address(this).balance;
            bnbBalance = 0;
            
            (bool success, ) = owner().call{value: balance}("");
            require(success, "Emergency BNB withdrawal failed");
            
            emit EmergencyWithdrawal(address(0), balance);
        } else {
            // Withdraw all tokens
            uint256 balance = IERC20(_token).balanceOf(address(this));
            poolBalances[_token] = 0;
            
            require(IERC20(_token).transfer(owner(), balance), "Emergency token withdrawal failed");
            
            emit EmergencyWithdrawal(_token, balance);
        }
    }

    /**
     * @dev Get pool balance for a token
     */
    function getPoolBalance(address _token) external view returns (uint256) {
        if (_token == address(0)) {
            return bnbBalance;
        }
        return poolBalances[_token];
    }

    /**
     * @dev Get withdrawal history
     */
    function getWithdrawalHistory() external view returns (Withdrawal[] memory) {
        return withdrawalHistory;
    }

    /**
     * @dev Get total pool value (in various tokens)
     */
    function getTotalPoolValue() external view returns (
        uint256 bnb,
        uint256 busd,
        uint256 usdt,
        uint256 usdc,
        uint256 nxm
    ) {
        return (
            bnbBalance,
            poolBalances[BUSD],
            poolBalances[USDT],
            poolBalances[USDC],
            poolBalances[NXM]
        );
    }

    /**
     * @dev Authorize upgrade
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
