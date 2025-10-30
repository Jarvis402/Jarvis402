# Quick Start Guide

Get started with Jarvis402 in just minutes! This guide will walk you through your first interaction with the AI oracle.

## Step 1: Access Jarvis402

Open your web browser and navigate to:

```
https://jarvis402.xyz
```

You'll see the landing page featuring:
- Animated Matrix rain background
- Hero section with gradient text
- Feature cards showcasing our capabilities
- Call-to-action buttons

## Step 2: Launch the Chat Interface

Click the **"Launch App"** button to access the AI chat interface.

The chat interface features:
- Clean, futuristic design with green accents
- Message input area at the bottom
- Optional contract address field for token-specific analysis
- Pre-built conversation starters to help you get started

## Step 3: Your First Query

Let's try the built-in conversation starters. Click on:

**"What are the current trending memecoins?"**

The AI will:
1. Show a loading indicator ("Jarvis402 is thinking...")
2. Stream the response in real-time
3. Display formatted markdown with bullet points and structure

### Example Response

You'll receive something like:

> Based on current market data, here are the trending memecoins:
>
> 1. **PEPE** - $0.0000012 (+15% 24h)
> 2. **BONK** - $0.000018 (+8% 24h)
> 3. **WIF** - $2.45 (+12% 24h)
>
> [Source: DexScreener]

## Step 4: Analyze a Specific Token

Now let's analyze a specific token by contract address:

1. **Enter a contract address** in the "Token Contract Address" field:
   ```
   Example: So11111111111111111111111111111111111111112
   ```

2. **Type your question** in the main input:
   ```
   Analyze this token and tell me about its risks
   ```

3. **Click Send** (or press Enter)

The AI will:
- Search for the token on DexScreener
- Analyze on-chain metrics
- Assess risk factors
- Provide a comprehensive report

### Example Token Analysis

```markdown
## Token Analysis

**Name:** Example Token (EXMP)
**Blockchain:** Solana

### Current Metrics
- Price: $0.0012
- Market Cap: $1.2M
- 24h Volume: $450K
- Holders: 2,350

### Risk Assessment: MEDIUM

**Green Flags:**
✓ Liquidity locked
✓ Contract verified
✓ Growing holder base

**Red Flags:**
⚠️ Top 10 holders control 45% of supply
⚠️ Low trading volume

**Recommendation:** Exercise caution. High holder concentration poses risk.
```

## Step 5: Understanding Rate Limiting

After sending a message, you'll see a **50-second cooldown**:

- The send button shows a countdown timer
- The input fields are disabled
- A message appears: "Please wait X seconds before sending another message"

**Why?** This prevents API abuse and ensures fair usage.

### Cooldown Bypass Protection

Try refreshing the page during the cooldown. Notice that:
- The cooldown persists (doesn't reset)
- The timer continues counting down
- localStorage tracks the timeout

This ensures users can't bypass limits by refreshing.

## Step 6: Explore Other Features

### Ask About Market Trends

```
What metrics should I look at for new tokens?
```

The AI will explain:
- Liquidity depth
- Holder distribution
- Volume patterns
- Social metrics
- Red flags to watch

### Request Risk Assessments

```
How do you assess token risk?
```

Learn about Jarvis402's risk analysis methodology.

### Get Educational Content

```
Explain what a rugpull is and how to detect one
```

The AI provides educational insights about crypto concepts.

## Step 7: Reading Markdown Responses

The AI uses markdown formatting for better readability:

- **Headers** for section titles
- **Bullet points** for lists
- **Bold text** for emphasis
- **Code blocks** for addresses
- **Tables** for structured data
- **Links** to sources

All responses are rendered beautifully with proper formatting.

## Best Practices

### 1. Be Specific

❌ Bad: "Tell me about tokens"
✅ Good: "Analyze the token at address ABC123 for rugpull risks"

### 2. Provide Contract Addresses

When asking about specific tokens, always include the contract address for accurate data.

### 3. Verify Information

The AI provides data-driven insights, but always:
- Check the cited sources
- Do your own research (DYOR)
- Verify contract addresses on blockchain explorers

### 4. Ask Follow-Up Questions

The chat maintains context, so you can ask follow-ups:

```
User: What are the top pump.fun launches today?
AI: [Lists tokens]
User: Tell me more about the first one
AI: [Detailed analysis]
```

### 5. Use Natural Language

You don't need to use special commands or syntax. Talk naturally:

```
"Can you check if this token is safe?"
"What's the risk level of [address]?"
"Show me trending tokens under $1M market cap"
```

## Common First-Time Questions

### Q: Why is the AI taking so long to respond?

A: The AI is performing web searches to get real-time data. This can take 5-15 seconds.

### Q: Can I analyze multiple tokens at once?

A: Yes! List multiple contract addresses in your message.

### Q: What if I make a typo in the contract address?

A: The AI will notify you if it can't find the token. Double-check the address and try again.

### Q: Is my search history saved?

A: No. Conversations are not stored. Refresh the page to start fresh.

## What's Next?

Now that you're familiar with the basics:

- 📖 [Learn about all Features](../features/ai-chat.md)
- 🤖 [Understand our AI Model Training](ai-model-training.md)
- 📊 [Master Token Analysis](../user-guide/analyzing-tokens.md)
- 🎯 [Best Practices Guide](../user-guide/best-practices.md)

## Need Help?

- 📧 **Email Support**: [support@jarvis402.xyz](mailto:support@jarvis402.xyz)
- 📚 Check the [FAQ](../appendix/faq.md)
- 💬 Join the [Discord community](https://discord.gg/jarvis402)
- 🐦 Follow us on X: [@jarvis402ai](https://x.com/jarvis402ai)

---

**Ready to dive deeper?** Learn about our [AI Model Training](ai-model-training.md) and discover what makes Jarvis402 unique.
