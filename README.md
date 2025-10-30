# Jarvis402

An autonomous AI agent that makes payments on your behalf using the x402 protocol. Access paid APIs, services, and digital resources without manual intervention.

## Features

- **Autonomous Payments**: Jarvis402 automatically handles HTTP 402 payment flows
- **Zero Platform Fees**: Only pay blockchain gas fees and service costs
- **Instant Settlement**: Payments settle in ~2 seconds at blockchain speed
- **Blockchain Agnostic**: Works with Ethereum, Solana, and any x402-compatible chain
- **No Registration**: Access services without accounts, emails, or OAuth
- **Open Protocol**: Built on the open x402 standard

## What is x402?

x402 is an open protocol for internet-native payments built around the HTTP 402 status code. It enables:

- Programmatic payment for resources without accounts or sessions
- Direct blockchain transactions for service access
- Zero-fee transactions (no middlemen)
- Machine-to-machine commerce at scale

Learn more at [x402.org](https://x402.org) and [x402.gitbook.io](https://x402.gitbook.io/x402)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **AI**: Vercel AI SDK with Google Gemini
- **Icons**: Lucide React
- **Protocol**: x402 for autonomous payments

## Getting Started

### Prerequisites

- Node.js 18+ installed
- Google Gemini API key ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jarvis402.git
cd jarvis402
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory:
```bash
cp .env.example .env.local
```

4. Add your API key to `.env.local`:
```
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
jarvis402/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.js          # API endpoint for AI chat
│   ├── app/
│   │   └── page.js                # Chat interface page
│   ├── layout.js                  # Root layout with metadata
│   ├── page.js                    # Landing page
│   └── globals.css                # Global styles
├── public/                        # Static assets
├── .env.example                   # Environment variables template
└── package.json
```

## How It Works

1. **You Request a Resource**: Tell Jarvis402 what service or API you need access to
2. **Jarvis Handles Payment**: The agent automatically detects HTTP 402 responses and processes blockchain payments
3. **Instant Access**: Once payment is verified, you receive immediate access to the resource

## Use Cases

- **AI Developers**: Build autonomous agents that can pay for API access
- **API Providers**: Monetize your APIs instantly without auth infrastructure
- **Content Creators**: Enable micropayments for premium content
- **Web3 Builders**: Create decentralized services with built-in payments

## Deployment

### Deploy to Vercel

The easiest way to deploy Jarvis402 is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add your `GOOGLE_GENERATIVE_AI_API_KEY` environment variable
4. Deploy!

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `GOOGLE_GENERATIVE_AI_API_KEY`: Your Google Gemini API key

## x402 Protocol Integration

To make Jarvis402 actually process payments, you'll need to integrate with the x402 protocol:

1. Implement x402 facilitator endpoints for payment verification
2. Add blockchain wallet connectivity (e.g., WalletConnect, MetaMask)
3. Implement spending limits and transaction monitoring
4. Connect to x402-compatible services

See the [x402 documentation](https://x402.gitbook.io/x402) for technical details.

## Important Disclaimers

- **User Responsibility**: Users are responsible for setting appropriate spending limits and monitoring transactions
- **Blockchain Transactions**: All blockchain transactions are irreversible
- **Service Trust**: Always verify and trust the services you're accessing
- **Beta Software**: This is experimental software for demonstration purposes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Resources

- [x402 Protocol Website](https://x402.org)
- [x402 Documentation](https://x402.gitbook.io/x402)
- [x402 GitHub](https://github.com/x402)

## Support

For questions or issues, please open an issue on GitHub or contact the maintainers.

---

Built with the x402 protocol for autonomous, internet-native payments.
