// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

/**
 * @title ReferralManager
 * @dev Manages binary referral tree and matching bonuses (5%)
 */
contract ReferralManager is Ownable, ReentrancyGuard, Initializable, UUPSUpgradeable {
    
    address public NXM;

    // Binary tree node structure
    struct ReferralNode {
        address referrer;
        address leftChild;
        address rightChild;
        uint256 leftSubtreeSize;
        uint256 rightSubtreeSize;
        uint256 matchingBonus;
        uint256 pairsMatched;
        bool exists;
    }

    // User referral data
    struct UserReferral {
        address[] directReferrals;
        uint256 totalMatchingBonus;
        uint256 totalDirectBonus;
        uint256 pendingBonus;
    }

    mapping(address => ReferralNode) public referralTree;
    mapping(address => UserReferral) public userReferrals;
    mapping(address => uint256) public bonusBalance;

    uint256 public constant MATCHING_BONUS_PERCENT = 500; // 5% = 500/10000
    uint256 public constant DIRECT_BONUS_PERCENT = 1000;  // 10% = 1000/10000

    uint256 public totalBonusPaidOut;

    // Events
    event ReferralRegistered(address indexed referrer, address indexed referee);
    event MatchingBonusGenerated(address indexed user, uint256 amount);
    event DirectBonusGenerated(address indexed user, uint256 amount);
    event BonusWithdrawn(address indexed user, uint256 amount);
    event ContractInitialized(address indexed nxmToken);
    event BinaryTreeUpdated(address indexed parent, address indexed child, bool isLeftChild);

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Initialize referral manager
     */
    function initialize(address _nxm) public initializer onlyOwner {
        require(_nxm != address(0), "Invalid NXM token address");
        NXM = _nxm;
        emit ContractInitialized(_nxm);
    }

    /**
     * @dev Register a new referral (user joins with referrer)
     */
    function registerReferral(address _referrer, address _user) external onlyOwner {
        require(_referrer != address(0), "Invalid referrer");
        require(_user != address(0), "Invalid user");
        require(_referrer != _user, "Cannot refer yourself");
        require(!referralTree[_user].exists, "User already registered");
        require(referralTree[_referrer].exists || _referrer == owner(), "Referrer not registered");

        // Create referral node
        referralTree[_user].referrer = _referrer;
        referralTree[_user].exists = true;

        // Add to referrer's direct referrals
        userReferrals[_referrer].directReferrals.push(_user);

        // Place in binary tree
        _placeInBinaryTree(_referrer, _user);

        emit ReferralRegistered(_referrer, _user);
    }

    /**
     * @dev Place user in referrer's binary tree
     */
    function _placeInBinaryTree(address _referrer, address _user) private {
        ReferralNode storage referrerNode = referralTree[_referrer];

        // Place in left or right subtree based on size
        if (referrerNode.leftSubtreeSize <= referrerNode.rightSubtreeSize) {
            // Place in left
            if (referrerNode.leftChild == address(0)) {
                referrerNode.leftChild = _user;
                referrerNode.leftSubtreeSize = 1;
            } else {
                _placeInBinaryTree(referrerNode.leftChild, _user);
                referrerNode.leftSubtreeSize++;
            }
        } else {
            // Place in right
            if (referrerNode.rightChild == address(0)) {
                referrerNode.rightChild = _user;
                referrerNode.rightSubtreeSize = 1;
            } else {
                _placeInBinaryTree(referrerNode.rightChild, _user);
                referrerNode.rightSubtreeSize++;
            }
        }
    }

    /**
     * @dev Generate matching bonus (when both left and right have activity)
     */
    function generateMatchingBonus(address _user, uint256 _packageAmount) public onlyOwner {
        require(referralTree[_user].exists, "User not registered");

        ReferralNode storage node = referralTree[_user];

        // Check if both left and right children have activity
        if (node.leftChild != address(0) && node.rightChild != address(0)) {
            // Calculate 5% matching bonus
            uint256 bonusAmount = (_packageAmount * MATCHING_BONUS_PERCENT) / 10000;

            node.matchingBonus += bonusAmount;
            node.pairsMatched++;
            bonusBalance[_user] += bonusAmount;

            emit MatchingBonusGenerated(_user, bonusAmount);

            // Recursively give bonus to referrer
            if (node.referrer != address(0)) {
                generateMatchingBonus(node.referrer, _packageAmount);
            }
        }
    }

    /**
     * @dev Generate direct referral bonus (10%)
     */
    function generateDirectBonus(address _referrer, uint256 _packageAmount) external onlyOwner {
        require(referralTree[_referrer].exists, "Referrer not registered");

        // Calculate 10% direct bonus
        uint256 bonusAmount = (_packageAmount * DIRECT_BONUS_PERCENT) / 10000;

        userReferrals[_referrer].totalDirectBonus += bonusAmount;
        bonusBalance[_referrer] += bonusAmount;

        emit DirectBonusGenerated(_referrer, bonusAmount);
    }

    /**
     * @dev Withdraw bonus balance (automatic payout to wallet)
     */
    function withdrawBonus(uint256 _amount) external nonReentrant {
        require(_amount <= bonusBalance[msg.sender], "Insufficient bonus balance");

        bonusBalance[msg.sender] -= _amount;
        totalBonusPaidOut += _amount;

        // Transfer NXM to user wallet
        require(IERC20(NXM).transfer(msg.sender, _amount), "Transfer failed");

        emit BonusWithdrawn(msg.sender, _amount);
    }

    /**
     * @dev Get user's referral info
     */
    function getUserReferralInfo(address _user) external view returns (
        ReferralNode memory node,
        UserReferral memory referral,
        uint256 bonusBalance_
    ) {
        return (referralTree[_user], userReferrals[_user], bonusBalance[_user]);
    }

    /**
     * @dev Get direct referrals of a user
     */
    function getDirectReferrals(address _user) external view returns (address[] memory) {
        return userReferrals[_user].directReferrals;
    }

    /**
     * @dev Check if user is registered
     */
    function isRegistered(address _user) external view returns (bool) {
        return referralTree[_user].exists;
    }

    /**
     * @dev Get matching bonus info
     */
    function getMatchingBonusInfo(address _user) external view returns (uint256 total, uint256 pairs) {
        return (referralTree[_user].matchingBonus, referralTree[_user].pairsMatched);
    }

    /**
     * @dev Authorize upgrade
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
