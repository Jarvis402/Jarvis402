// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Jarvis402Token
 * @dev Native token for the Jarvis402 ecosystem
 * Can be used for payments, governance, and rewards
 */
contract Jarvis402Token is ERC20, ERC20Burnable, Ownable {

    uint256 public constant MAX_SUPPLY = 1_000_000_000 * 10**18; // 1 billion tokens

    // Reward multipliers for different actions
    uint256 public serviceProviderReward = 100 * 10**18; // 100 tokens for registering a service
    uint256 public paymentReward = 1 * 10**18; // 1 token per payment completed

    // Staking for AI agents
    mapping(address => uint256) public stakedBalance;
    mapping(address => uint256) public stakingTimestamp;

    // Reward tracking
    mapping(address => uint256) public totalRewardsEarned;

    // Authorized reward distributors
    mapping(address => bool) public rewardDistributors;

    // Events
    event RewardDistributed(address indexed recipient, uint256 amount, string reason);
    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event RewardDistributorAdded(address indexed distributor);
    event RewardDistributorRemoved(address indexed distributor);

    constructor() ERC20("Jarvis402", "J402") Ownable(msg.sender) {
        // Mint initial supply to deployer
        _mint(msg.sender, 100_000_000 * 10**18); // 100M initial supply
    }

    /**
     * @dev Mint new tokens (only owner, respects max supply)
     * @param to Address to mint to
     * @param amount Amount to mint
     */
    function mint(address to, uint256 amount) external onlyOwner {
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceeds max supply");
        _mint(to, amount);
    }

    /**
     * @dev Add a reward distributor
     * @param distributor Address authorized to distribute rewards
     */
    function addRewardDistributor(address distributor) external onlyOwner {
        rewardDistributors[distributor] = true;
        emit RewardDistributorAdded(distributor);
    }

    /**
     * @dev Remove a reward distributor
     * @param distributor Address to remove
     */
    function removeRewardDistributor(address distributor) external onlyOwner {
        rewardDistributors[distributor] = false;
        emit RewardDistributorRemoved(distributor);
    }

    /**
     * @dev Distribute rewards (only authorized distributors)
     * @param recipient Address to receive reward
     * @param amount Amount of reward
     * @param reason Reason for reward
     */
    function distributeReward(
        address recipient,
        uint256 amount,
        string memory reason
    ) external {
        require(
            rewardDistributors[msg.sender] || msg.sender == owner(),
            "Not authorized to distribute rewards"
        );
        require(totalSupply() + amount <= MAX_SUPPLY, "Exceeds max supply");

        _mint(recipient, amount);
        totalRewardsEarned[recipient] += amount;

        emit RewardDistributed(recipient, amount, reason);
    }

    /**
     * @dev Reward for service registration
     * @param provider Service provider address
     */
    function rewardServiceProvider(address provider) external {
        require(
            rewardDistributors[msg.sender],
            "Not authorized"
        );

        if (totalSupply() + serviceProviderReward <= MAX_SUPPLY) {
            _mint(provider, serviceProviderReward);
            totalRewardsEarned[provider] += serviceProviderReward;
            emit RewardDistributed(provider, serviceProviderReward, "Service Registration");
        }
    }

    /**
     * @dev Reward for completing a payment
     * @param payer Address that made the payment
     */
    function rewardPayment(address payer) external {
        require(
            rewardDistributors[msg.sender],
            "Not authorized"
        );

        if (totalSupply() + paymentReward <= MAX_SUPPLY) {
            _mint(payer, paymentReward);
            totalRewardsEarned[payer] += paymentReward;
            emit RewardDistributed(payer, paymentReward, "Payment Completion");
        }
    }

    /**
     * @dev Stake tokens for AI agent reputation
     * @param amount Amount to stake
     */
    function stake(uint256 amount) external {
        require(amount > 0, "Cannot stake 0");
        require(balanceOf(msg.sender) >= amount, "Insufficient balance");

        _transfer(msg.sender, address(this), amount);
        stakedBalance[msg.sender] += amount;

        if (stakingTimestamp[msg.sender] == 0) {
            stakingTimestamp[msg.sender] = block.timestamp;
        }

        emit Staked(msg.sender, amount);
    }

    /**
     * @dev Unstake tokens
     * @param amount Amount to unstake
     */
    function unstake(uint256 amount) external {
        require(amount > 0, "Cannot unstake 0");
        require(stakedBalance[msg.sender] >= amount, "Insufficient staked balance");

        stakedBalance[msg.sender] -= amount;
        _transfer(address(this), msg.sender, amount);

        emit Unstaked(msg.sender, amount);
    }

    /**
     * @dev Get staking info for an address
     * @param account Address to query
     */
    function getStakingInfo(address account)
        external
        view
        returns (uint256 staked, uint256 stakingTime, uint256 rewardsEarned)
    {
        return (
            stakedBalance[account],
            stakingTimestamp[account] > 0 ? block.timestamp - stakingTimestamp[account] : 0,
            totalRewardsEarned[account]
        );
    }

    /**
     * @dev Update reward amounts (only owner)
     * @param newServiceProviderReward New service provider reward
     * @param newPaymentReward New payment reward
     */
    function updateRewards(
        uint256 newServiceProviderReward,
        uint256 newPaymentReward
    ) external onlyOwner {
        serviceProviderReward = newServiceProviderReward;
        paymentReward = newPaymentReward;
    }
}
