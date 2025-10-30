# Jarvis402 Smart Contracts

This directory contains the smart contracts for the Jarvis402 autonomous payment system built on the x402 protocol.

## Contracts Overview

### 1. PaymentGateway.sol

The core payment processing contract that handles x402 protocol payments.

**Features:**

- Support for both native tokens and ERC20 payments
- Payment initiation, completion, and refund mechanisms
- Request hash tracking for resource access
- Payment status tracking and verification
- Reentrancy protection

**Key Functions:**

- `payNative()` - Initiate payment with native blockchain token
- `payToken()` - Initiate payment with ERC20 token
- `completePayment()` - Complete payment and transfer funds to service provider
- `refundPayment()` - Refund a payment (admin only)
- `getPayment()` - Get payment details
- `isPaymentCompleted()` - Check payment status

### 2. SpendingLimits.sol

Manages autonomous spending limits for AI agents to prevent overspending.

**Features:**

- Daily, weekly, and monthly spending limits
- Automatic limit reset based on time periods
- Approved spender management (AI agents/contracts)
- Real-time spending tracking
- Remaining allowance queries

**Key Functions:**

- `setLimits()` - Configure spending limits
- `approveSpender()` - Authorize an AI agent to spend on your behalf
- `revokeSpender()` - Remove spending authorization
- `recordSpending()` - Record a spending transaction (called by approved spenders)
- `getRemainingAllowance()` - Check remaining spend capacity
- `activateLimits()` / `deactivateLimits()` - Toggle limit enforcement

### 3. X402Registry.sol

Registry for x402-compatible services and APIs.

**Features:**

- Service registration and discovery
- Multi-tier pricing support
- Service verification system
- Provider statistics tracking
- Service activation/deactivation

**Key Functions:**

- `registerService()` - Register a new x402-compatible service
- `addPricingTier()` - Add pricing tiers (basic, premium, enterprise, etc.)
- `updateService()` - Update service details
- `verifyService()` - Mark service as verified (admin only)
- `getService()` - Get service information
- `getAllServices()` - List all registered services
- `getPricingTiers()` - Get pricing options for a service

### 4. Jarvis402Token.sol

Native ERC20 token for the Jarvis402 ecosystem.

**Features:**

- Fixed maximum supply (1 billion tokens)
- Reward distribution system
- Staking mechanism for AI agent reputation
- Burnable tokens
- Authorized reward distributors

**Key Functions:**

- `mint()` - Mint new tokens (owner only, respects max supply)
- `distributeReward()` - Distribute rewards to users
- `rewardServiceProvider()` - Automatic reward for service registration
- `rewardPayment()` - Automatic reward for completing payments
- `stake()` / `unstake()` - Stake tokens for AI agent reputation
- `getStakingInfo()` - Get staking details for an address

## Token Economics

### Initial Supply

- 100M tokens minted at deployment
- 1B maximum supply cap

### Rewards

- **Service Provider Reward**: 100 J402 tokens for registering a service
- **Payment Reward**: 1 J402 token per completed payment
- Rewards are minted up to the max supply cap

### Staking

- Stake tokens to build AI agent reputation
- Staked tokens remain in the contract
- Can be unstaked at any time

## Deployment Order

1. Deploy `Jarvis402Token.sol`
2. Deploy `PaymentGateway.sol`
3. Deploy `SpendingLimits.sol`
4. Deploy `X402Registry.sol`
5. Configure reward distributors in Jarvis402Token
6. Connect contracts (set addresses for cross-contract calls)

## Integration with Jarvis402

The contracts integrate with the Jarvis402 Next.js application through:

1. **Payment Flow**: Web3 wallet integration for initiating payments
2. **Service Discovery**: Query X402Registry for available services
3. **Limit Management**: Users configure spending limits through the UI
4. **Rewards**: Automatic token rewards for platform activity

## Security Features

- OpenZeppelin battle-tested contract imports
- Reentrancy protection on payment functions
- Access control with Ownable pattern
- Input validation on all public functions
- Event emission for transparency and tracking

## Testing

Before deploying to mainnet:

1. Deploy to testnet (Sepolia, Mumbai, etc.)
2. Test all payment flows
3. Verify spending limits work correctly
4. Test service registration and discovery
5. Verify token rewards are distributed correctly
6. Audit contracts for security vulnerabilities

## License

MIT License - See individual contract files for details
