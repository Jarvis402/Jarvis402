import { Orbitron, Inter } from "next/font/google";
import "./globals.css";
import WalletProvider from "./components/WalletProvider";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jarvis402 - AI Agent That Pays For You",
  description: "Autonomous AI agent that makes payments on your behalf using the x402 protocol. Access paid APIs and services without manual intervention.",
  keywords: ["x402", "ai agent", "autonomous payments", "http 402", "blockchain payments", "crypto", "web3"],
  icons: {
    icon: '/logo_black.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${inter.variable} antialiased`}
      >
        <WalletProvider>
          {children}
        </WalletProvider>
      </body>
    </html>
  );
}
