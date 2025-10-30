# Understanding Risk Scores

Jarvis402 provides quantified risk assessments to help you make informed decisions. This guide explains how to interpret risk scores and what they mean for your investment strategy.

## Risk Score Levels

### 🟢 LOW RISK

**What it means:**
- Token shows strong positive indicators
- Minimal red flags detected
- Generally safer for investment
- Lower probability of rugpull or scam

**Typical characteristics:**
- Decentralized holder distribution (top 10 < 20%)
- Locked liquidity >10% of market cap
- Contract ownership renounced
- Verified, audited contract
- Active, transparent community
- Consistent trading patterns
- No suspicious wallet activity

**Investment considerations:**
- Suitable for most risk tolerances
- Still requires due diligence
- Monitor for changes
- No guarantee of profits

### 🟡 MEDIUM RISK

**What it means:**
- Mixed signals detected
- Some concerns present
- Requires careful evaluation
- Moderate investment caution advised

**Typical characteristics:**
- Moderate concentration (top 10 = 20-40%)
- Liquidity 5-10% of market cap
- Some contract concerns
- New token (<7 days old)
- Limited social validation
- Recent volatility
- Unclear team information

**Investment considerations:**
- Acceptable for experienced traders
- Smaller position sizes recommended
- Close monitoring required
- Have exit strategy ready

### 🔴 HIGH RISK

**What it means:**
- Significant red flags present
- High probability of problems
- Danger of loss
- Extreme caution or avoidance advised

**Typical characteristics:**
- Highly concentrated (top 10 > 50%)
- Low/unlocked liquidity (<5%)
- Dangerous contract permissions
- Honeypot indicators
- Anonymous or absent team
- Suspicious trading patterns
- Known scam indicators

**Investment considerations:**
- Avoid unless expert with tiny allocation
- Assume high loss probability
- Exit quickly if entering
- Not suitable for most investors

## Risk Factors Analyzed

### Holder Distribution (Weight: 25%)

**What's analyzed:**
- Percentage held by top 10 wallets
- Percentage held by top 20 wallets
- Number of unique holders
- Holder growth trends

**Why it matters:**
- High concentration = dump risk
- Few holders = manipulation potential
- Declining holders = red flag
- Growing holders = positive sign

**Scoring:**
- 🟢 Top 10 < 20%, growing holders
- 🟡 Top 10 = 20-40%
- 🔴 Top 10 > 50%, declining holders

### Liquidity Analysis (Weight: 20%)

**What's analyzed:**
- Total liquidity in USD
- Liquidity-to-market-cap ratio
- Lock status and duration
- LP provider count

**Why it matters:**
- Low liquidity = hard to sell
- Unlocked = rug pull risk
- Concentrated LP = control concerns
- Declining liquidity = warning

**Scoring:**
- 🟢 >10% market cap, locked 6+ months
- 🟡 5-10% market cap, short lock
- 🔴 <5% market cap, unlocked

### Contract Security (Weight: 20%)

**What's analyzed:**
- Ownership status (renounced?)
- Mint authority (disabled?)
- Freeze functions
- Hidden functions
- Upgrade mechanisms

**Why it matters:**
- Unrenounced = dev control
- Mint authority = inflation risk
- Freeze = honeypot potential
- Hidden functions = unknown risks

**Scoring:**
- 🟢 Renounced, verified, safe
- 🟡 Some permissions, verified
- 🔴 Dangerous permissions, honeypot

### Trading Patterns (Weight: 15%)

**What's analyzed:**
- Volume consistency
- Buy/sell pressure
- Transaction frequency
- Whale activity
- Bot detection

**Why it matters:**
- Manipulation indicators
- Artificial volume
- Coordinated dumps
- Bot trading patterns

**Scoring:**
- 🟢 Organic, consistent patterns
- 🟡 Some irregularities
- 🔴 Clear manipulation signs

### Social & Community (Weight: 10%)

**What's analyzed:**
- Social media presence
- Community engagement
- Team transparency
- Development activity

**Why it matters:**
- Anonymous teams = risk
- Inactive community = abandonment
- No social = potential scam
- Engagement = legitimacy indicator

**Scoring:**
- 🟢 Active, transparent, engaged
- 🟡 Limited but present
- 🔴 Absent or suspicious

### Token Age & History (Weight: 10%)

**What's analyzed:**
- Time since launch
- Price history
- Holder retention
- Previous incidents

**Why it matters:**
- New = higher risk
- History = track record
- Retention = satisfaction
- Incidents = warning signs

**Scoring:**
- 🟢 >30 days, clean history
- 🟡 7-30 days
- 🔴 <7 days or incidents

## Interpreting Risk Assessments

### Reading the Full Report

**Risk Score Section**
```
Risk Level: MEDIUM 🟡
Confidence: High
Based on: 12 factors analyzed
```

- **Risk Level**: Overall assessment
- **Confidence**: Data quality/completeness
- **Factors**: Number of metrics evaluated

**Red Flags**
Specific concerns listed:
- 🚩 Critical issues (immediate concern)
- ⚠️ Warning signs (caution advised)
- 👀 Watch items (monitor closely)

**Green Flags**
Positive indicators:
- ✅ Strong positives
- 👍 Good signs
- 📈 Improving metrics

### Context Matters

Same risk score, different scenarios:

**Scenario 1: MEDIUM Risk - Acceptable**
- 30-day old memecoin
- Growing community
- Moderate whale concentration
- Good liquidity, locked
- → Manageable risks for experienced trader

**Scenario 2: MEDIUM Risk - Concerning**
- 2-day old token
- Declining holders
- Unlocked liquidity
- Anonymous team
- → Too many unknowns, avoid

**Always read the full analysis!**

## Risk Score Changes

### Improving Scores

Factors that can improve risk:
- Time passing (token aging)
- Liquidity additions/locking
- Holder distribution improving
- Positive developments
- Community growth

### Worsening Scores

Factors that increase risk:
- Liquidity removal
- Whale accumulation
- Holder departures
- Negative news
- Contract changes

### Monitoring

Ask Jarvis402:
```
"How has the risk score for [address] changed
over the past week?"
```

Track changes to spot trends.

## Using Risk Scores in Decisions

### For Conservative Investors

**Strategy:**
- Focus on 🟢 LOW risk only
- Require locked liquidity
- Prefer established tokens (>30 days)
- Small position sizes
- Exit on risk increases

**Acceptable profile:**
- LOW risk score
- All green flags present
- No critical red flags
- Growing metrics
- Transparent team

### For Moderate Risk Takers

**Strategy:**
- Accept 🟡 MEDIUM risk
- Evaluate specific concerns
- Diversify across multiple tokens
- Set stop losses
- Monitor regularly

**Acceptable profile:**
- MEDIUM risk acceptable
- Understand specific risks
- Have mitigation plan
- Can handle volatility
- Quick exit capability

### For Aggressive Traders

**Strategy:**
- May take 🔴 HIGH risk
- Very small allocations only
- Quick entry/exit
- Constant monitoring
- Accept high loss probability

**Acceptable profile:**
- Fully understand risks
- Micro positions only
- Expert knowledge
- Can afford total loss
- Trading not investing

## Red Flags Hierarchy

### Critical (Never Ignore)

🚩 **Honeypot detected** - Cannot sell
🚩 **Single wallet >50%** - Massive dump risk
🚩 **Unlocked liquidity + withdraw function** - Instant rug
🚩 **Hidden mint function** - Inflation attack
🚩 **Known scam pattern** - Proven fraud

**Action: AVOID**

### Major (High Concern)

⚠️ **Top 10 hold >40%** - Concentration risk
⚠️ **Liquidity <5% market cap** - Exit problems
⚠️ **Unrenounced ownership** - Dev control
⚠️ **Declining holder count** - Abandonment
⚠️ **Zero social presence** - Likely scam

**Action: Extreme caution or avoid**

### Minor (Watch Closely)

👀 **New token (<48h)** - Insufficient data
👀 **Moderate concentration** - Monitor
👀 **Short liquidity lock** - May unlock soon
👀 **Limited social** - Early stage
👀 **High volatility** - Risky trades

**Action: Acceptable with awareness**

## Limitations of Risk Scores

### What Scores DO

✅ Quantify observable risk factors
✅ Identify red/green flags
✅ Compare tokens objectively
✅ Provide data-driven assessment
✅ Alert to danger signs

### What Scores DON'T DO

❌ Predict future prices
❌ Guarantee safety
❌ Detect novel scams
❌ Account for black swans
❌ Replace your judgment

### Always Remember

- Low risk ≠ guaranteed profit
- High risk ≠ certain loss
- Markets are unpredictable
- Scores based on current data
- Can change rapidly
- Do your own research (DYOR)

## Practical Examples

### Example 1: Token A

**Risk Score: LOW 🟢**

Factors:
- ✅ Top 10 hold 15%
- ✅ Liquidity 12% MC, locked 6 months
- ✅ Contract renounced, verified
- ✅ 2,500 holders, growing
- ✅ Active community
- ✅ 45 days old, stable

**Interpretation**: Relatively safe for moderate allocation

### Example 2: Token B

**Risk Score: MEDIUM 🟡**

Factors:
- ⚠️ Top 10 hold 35%
- ✅ Liquidity 8% MC, locked 1 month
- ✅ Contract verified
- ⚠️ 450 holders
- ⚠️ 5 days old
- 👀 Limited social

**Interpretation**: Acceptable for small position with monitoring

### Example 3: Token C

**Risk Score: HIGH 🔴**

Factors:
- 🚩 Top wallet holds 55%
- 🚩 Liquidity 3% MC, unlocked
- ⚠️ Ownership not renounced
- ⚠️ 85 holders, declining
- 🚩 No social media
- ⚠️ 18 hours old

**Interpretation**: AVOID - multiple critical issues

## Best Practices

1. **Always Check Risk Score**: Before any investment
2. **Read Full Analysis**: Not just the score
3. **Understand Why**: Know which factors matter
4. **Monitor Changes**: Risk evolves over time
5. **Combine with Research**: Use as one data point
6. **Match Risk Tolerance**: Align with your comfort
7. **Size Accordingly**: Higher risk = smaller position
8. **Have Exit Plan**: Especially for medium/high risk
9. **Cross-Reference**: Verify with other tools
10. **Trust Your Gut**: If something feels off, it probably is

## Next Steps

- **Learn Analysis Techniques**: [Analyzing Tokens](analyzing-tokens.md)
- **Master the Chat**: [Using the Chat Interface](using-chat.md)
- **Review Best Practices**: [Tips and Best Practices](best-practices.md)
- **Understand AI Training**: [AI Model Training](../getting-started/ai-model-training.md)

---

**Get your first risk assessment**: Visit [jarvis402.xyz](https://jarvis402.xyz) and analyze a token!
