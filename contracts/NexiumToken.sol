// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/proxy/utils/UUPSUpgradeable.sol";

/**
 * @title NexiumToken
 * @dev BEP-20 Token for Nexium ecosystem with upgradeable functionality
 */
contract NexiumToken is ERC20, ERC20Burnable, Ownable, Initializable, UUPSUpgradeable {
    // Total supply: 100 million tokens
    uint256 public constant INITIAL_SUPPLY = 100_000_000 * 10 ** 18;

    // Allocation percentages (from slides)
    mapping(bytes32 => uint256) public allocations;
    mapping(address => bool) public isMinted;

    event TokenAllocated(address indexed to, uint256 amount, string category);

    constructor() ERC20("Nexium", "NXM") Ownable(msg.sender) {}

    /**
     * @dev Initializer function for upgradeable contract
     */
    function initialize() public initializer onlyOwner {
        // Ecosystem Rewards - 35%
        allocations[keccak256(abi.encodePacked("ECOSYSTEM_REWARDS"))] = INITIAL_SUPPLY * 35 / 100;
        
        // Liquidity & Market Support - 20%
        allocations[keccak256(abi.encodePacked("LIQUIDITY_MARKET"))] = INITIAL_SUPPLY * 20 / 100;
        
        // Community & Network Growth - 15%
        allocations[keccak256(abi.encodePacked("COMMUNITY_GROWTH"))] = INITIAL_SUPPLY * 15 / 100;
        
        // Development & Operations - 15%
        allocations[keccak256(abi.encodePacked("DEV_OPERATIONS"))] = INITIAL_SUPPLY * 15 / 100;
        
        // Founders & Core Team - 10%
        allocations[keccak256(abi.encodePacked("FOUNDERS_TEAM"))] = INITIAL_SUPPLY * 10 / 100;
        
        // Reserve & Contingency - 5%
        allocations[keccak256(abi.encodePacked("RESERVE_CONTINGENCY"))] = INITIAL_SUPPLY * 5 / 100;
    }

    /**
     * @dev Mint tokens for ecosystem
     */
    function mintAllocation(address _to, string memory _category) external onlyOwner {
        bytes32 categoryKey = keccak256(abi.encodePacked(_category));
        require(allocations[categoryKey] > 0, "Invalid category or already minted");
        require(!isMinted[_to], "Address already received allocation");

        uint256 amount = allocations[categoryKey];
        isMinted[_to] = true;
        
        _mint(_to, amount);
        emit TokenAllocated(_to, amount, _category);
    }

    /**
     * @dev Mint tokens (only owner, for platform rewards)
     */
    function mint(address _to, uint256 _amount) external onlyOwner {
        _mint(_to, _amount);
    }

    /**
     * @dev Authorize an upgrade to a new implementation
     */
    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    /**
     * @dev Get contract version
     */
    function version() public pure returns (string memory) {
        return "1.0.0";
    }

    // BEP-20 standard name and symbol
    // Constructor handled above
}
