# Analyzing Tokens

Learn how to get the most out of Jarvis402's token analysis capabilities.

## Overview

Jarvis402 can analyze any cryptocurrency token and provide comprehensive insights including price, market cap, risk assessment, holder distribution, and more.

## Basic Token Analysis

### Method 1: Using Contract Address

The most accurate method for token analysis is to provide the contract address.

**Step 1**: Copy the token's contract address from:
- DexScreener
- CoinGecko
- Blockchain explorer (Etherscan, Solscan, etc.)

**Step 2**: Paste in the "Token Contract Address" field

**Step 3**: Ask your question in the main input field:
```
Analyze this token for me
```

**Example**:
```
Contract Address: So11111111111111111111111111111111111111112
Question: What are the risks with this token?
```

### Method 2: Using Token Name

You can also ask about tokens by name:

```
Tell me about PEPE token
Analyze BONK on Solana
What's the current price of WIF?
```

**Note**: Names can be ambiguous. For accurate analysis, always use contract addresses when possible.

## What Jarvis402 Analyzes

### On-Chain Metrics

The AI searches for and analyzes:

#### Price & Market Data
- Current price
- Market capitalization
- 24h trading volume
- Price change (24h, 7d, 30d)
- All-time high/low

#### Liquidity Information
- Total liquidity
- Liquidity pool size
- DEX listings
- Liquidity locked or unlocked
- Lock duration (if applicable)

#### Holder Analysis
- Total number of holders
- Top holder concentration
- Holder distribution patterns
- Whale wallets
- Recent holder changes

#### Transaction Data
- Transaction count
- Buy/sell ratio
- Transaction patterns
- Large transactions
- Unusual activity

### Contract Analysis

#### Smart Contract Details
- Contract verification status
- Contract creation date
- Mint authority (for Solana)
- Freeze authority status
- Ownership renouncement

#### Tokenomics
- Total supply
- Circulating supply
- Token distribution
- Burn mechanisms
- Tax structure (buy/sell fees)

### Social & Community Metrics

The AI searches for:
- Twitter/X presence and engagement
- Telegram/Discord community size
- Reddit discussions
- Developer activity
- Recent news and updates
- Community sentiment

### Risk Assessment

Jarvis402 evaluates:

#### Red Flags 🚩
- High holder concentration (whales)
- Unlocked liquidity
- Unverified contract
- Low holder count
- Suspicious transaction patterns
- Recent dump events
- Anonymous team
- Unrealistic promises

#### Green Flags ✅
- Verified contract
- Locked liquidity
- Distributed holders
- Active development
- Transparent team
- Steady growth
- Healthy volume
- Community engagement

## Example Queries

### General Analysis

```
Analyze [contract address]
Give me a full report on [token name]
What do you think about [contract address]?
```

### Specific Questions

**Price & Market**:
```
What's the current price of [token]?
Show me the market cap and volume of [address]
Has [token] been growing in value?
```

**Risk Assessment**:
```
Is [address] a safe investment?
What are the risks with [token]?
Check [address] for rugpull indicators
Rate the risk level of [address]
```

**Holder Analysis**:
```
How many holders does [token] have?
Are there any whales holding [address]?
What's the holder distribution for [token]?
```

**Liquidity**:
```
Is the liquidity locked for [address]?
How much liquidity does [token] have?
Check if [address] has enough liquidity
```

**Comparison**:
```
Compare [address1] and [address2]
Which is safer: [token1] or [token2]?
How does [token] compare to similar tokens?
```

## Interpreting Results

### Price Analysis

**Example Response**:
```markdown
## Price & Market Data

**Current Price**: $0.000012
**Market Cap**: $1.2M
**24h Volume**: $450K
**24h Change**: +15%
```

**What to look for**:
- ✅ Steady growth (5-20% daily)
- ✅ High volume relative to market cap
- ⚠️ Extreme volatility (50%+ swings)
- 🚩 Very low volume (potential liquidity issues)

### Risk Score

The AI typically provides a risk rating:

**Low Risk** 🟢:
- Established token
- Locked liquidity
- Verified contract
- Distributed holders
- Active community

**Medium Risk** 🟡:
- Newer token
- Some concentration
- Partial liquidity lock
- Growing community
- Minor red flags

**High Risk** 🔴:
- Very new
- High concentration
- No liquidity lock
- Anonymous team
- Multiple red flags

### Holder Distribution

**Example**:
```
Total Holders: 2,350
Top 10 Hold: 45%
Top 50 Hold: 68%
```

**Interpretation**:
- ✅ Top 10 < 30%: Well distributed
- ⚠️ Top 10 30-50%: Moderate concentration
- 🚩 Top 10 > 50%: High concentration risk

## Advanced Analysis Techniques

### Multi-Token Comparison

Analyze multiple tokens at once:

```
Compare these tokens:
1. [address1]
2. [address2]
3. [address3]

Which one has the lowest risk?
```

### Time-Based Analysis

Ask about historical performance:

```
How has [token] performed over the last week?
Show me the price history for [address]
What was [token]'s ATH and when?
```

### Trend Identification

Look for patterns:

```
What tokens are trending on Pump.fun today?
Show me new launches with high volume
Find tokens similar to [address]
```

### Deep Dive Questions

Get specific insights:

```
Explain the tokenomics of [address]
What makes [token] unique?
What are the use cases for [address]?
Who are the main competitors of [token]?
```

## Following Up

The chat maintains context, so you can ask follow-up questions:

```
User: Analyze 7xKXt...
AI: [Provides analysis]

User: What about the liquidity?
AI: [Detailed liquidity info]

User: Is it locked?
AI: [Lock status and duration]

User: What's your final verdict?
AI: [Summary recommendation]
```

## Best Practices

### DO ✅

1. **Provide contract addresses** for accuracy
2. **Ask specific questions** for detailed answers
3. **Cross-reference** with multiple sources
4. **Consider multiple factors** in your decision
5. **Use follow-ups** to dig deeper
6. **Check recent data** as markets change quickly

### DON'T ❌

1. **Don't rely solely on AI** - DYOR (Do Your Own Research)
2. **Don't ignore red flags** - Take warnings seriously
3. **Don't rush** - Take time to analyze thoroughly
4. **Don't invest blindly** - Understand what you're buying
5. **Don't chase pumps** - Avoid FOMO-driven decisions
6. **Don't skip verification** - Always verify contract addresses

## Understanding Sources

The AI cites sources for its data:

**Common sources**:
- **DexScreener**: DEX trading data
- **CoinGecko**: Market data and metrics
- **Solscan/Etherscan**: Blockchain data
- **Twitter/X**: Social sentiment
- **CoinMarketCap**: Price and market info

**Always verify**:
- Click through to sources
- Check multiple sources
- Look for recent data
- Verify contract addresses match

## Limitations

Jarvis402 cannot:
- ❌ Predict future prices with certainty
- ❌ Guarantee investment success
- ❌ Access private/unreleased information
- ❌ Analyze tokens without public data
- ❌ Provide personalized financial advice
- ❌ Time the market perfectly

## Red Flags to Watch For

Even after analysis, watch for:

1. **Developer sells large amounts**
2. **Sudden liquidity removal**
3. **Contract ownership changes**
4. **Community goes silent**
5. **Promises aren't kept**
6. **Website/socials disappear**

## Example Analysis Flow

**Complete analysis workflow**:

```
1. "Analyze [contract address]"
   → Get overview

2. "What are the holder statistics?"
   → Check distribution

3. "Is the liquidity locked?"
   → Verify safety

4. "What are the main risks?"
   → Understand concerns

5. "How does it compare to similar tokens?"
   → Get context

6. "What's your risk rating?"
   → Get final assessment
```

## Next Steps

After analysis:

1. **Verify the data** on blockchain explorers
2. **Check the community** on social media
3. **Read the whitepaper** if available
4. **Join the community** to gauge sentiment
5. **Start small** if you decide to invest
6. **Set stop losses** to manage risk
7. **Monitor regularly** for changes

## Related Documentation

- [Using the Chat Interface](using-chat.md)
- [Understanding Risk Scores](risk-scores.md)
- [Tips and Best Practices](best-practices.md)

---

**Remember**: Jarvis402 is a tool to assist your research, not replace it. Always do your own due diligence and never invest more than you can afford to lose.
