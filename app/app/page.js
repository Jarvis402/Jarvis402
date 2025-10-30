'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { Send, Eye, Loader2, Wallet } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function AppPage() {
  const { messages, sendMessage, status } = useChat();
  const { connected, publicKey } = useWallet();
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState('');
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [contractAddress, setContractAddress] = useState('');

  const isLoading = status === 'submitted' || status === 'streaming';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (cooldownRemaining > 0) {
      const timer = setInterval(() => {
        setCooldownRemaining((prev) => {
          const newValue = Math.max(0, prev - 1);
          // Clear localStorage when cooldown reaches 0
          if (newValue === 0) {
            localStorage.removeItem('lastSubmitTime');
          }
          return newValue;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldownRemaining]);

  // Check localStorage on mount to restore cooldown state
  useEffect(() => {
    const storedTime = localStorage.getItem('lastSubmitTime');
    if (storedTime) {
      const lastTime = parseInt(storedTime, 10);
      const now = Date.now();
      const timeSinceLastSubmit = (now - lastTime) / 1000;

      if (timeSinceLastSubmit < 50) {
        const remaining = Math.ceil(50 - timeSinceLastSubmit);
        setLastSubmitTime(lastTime);
        setCooldownRemaining(remaining);
      } else {
        // Clear old localStorage if cooldown has expired
        localStorage.removeItem('lastSubmitTime');
      }
    }
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const now = Date.now();
    const timeSinceLastSubmit = (now - lastSubmitTime) / 1000;

    if (timeSinceLastSubmit < 50 && lastSubmitTime > 0) {
      const remaining = Math.ceil(50 - timeSinceLastSubmit);
      setCooldownRemaining(remaining);
      return;
    }

    if (!input.trim()) return;

    // Prepare the message with contract address if provided
    let finalMessage = input;
    if (contractAddress.trim()) {
      finalMessage = `[Contract Address: ${contractAddress.trim()}]\n\n${input}`;
    }

    setLastSubmitTime(now);
    setCooldownRemaining(50);

    // Store the timestamp in localStorage to prevent bypass via refresh
    localStorage.setItem('lastSubmitTime', now.toString());

    // Send the message using sendMessage
    sendMessage({ text: finalMessage });

    // Clear both inputs
    setInput('');
    setContractAddress('');
  };

  return (
    <div className="relative min-h-screen bg-black">
      <div className="relative z-10">
        {/* Header - sticky */}
        <header className="sticky top-0 border-b border-[#D97642]/20 bg-black/80 backdrop-blur-lg shadow-[0_2px_20px_rgba(0,212,255,0.1)] z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo_black.png" alt="Logo" width={60} height={60} />
              </Link>
              <div className="flex items-center gap-4">
                {connected && publicKey && (
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-[#D97642] rounded-none animate-pulse shadow-[0_0_10px_rgba(0,212,255,0.8)]" />
                    <span className="hidden sm:inline">Connected</span>
                  </div>
                )}
                <WalletMultiButton className="!bg-gradient-to-r !from-[#D97642] !to-[#B8653A] hover:!shadow-lg hover:!shadow-[#D97642]/50 !rounded-none !transition-all" />
              </div>
            </div>
          </div>
        </header>

        {/* Chat Container */}
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Messages */}
          <div className="py-8 space-y-6 min-h-[600px]">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#D97642] to-[#B8653A] bg-clip-text text-transparent">
                    {connected ? 'Jarvis402 is ready to pay.' : 'Connect your wallet to get started'}
                  </h2>
                  <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                    {connected
                      ? 'Tell me what service or resource you need access to, and I\'ll handle the payment autonomously using the x402 protocol.'
                      : 'Connect your wallet to start using Jarvis402. Your wallet is required to authorize payments on your behalf.'}
                  </p>
                  {connected && (
                    <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                      <button
                        onClick={() => {
                          setInput('How does the x402 protocol work?');
                        }}
                        className="cursor-pointer p-4 bg-[#D97642]/10 border border-[#D97642]/20 rounded-none hover:bg-[#D97642]/10 hover:border-[#D97642]/40 transition-all text-left hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
                      >
                        <p className="text-sm text-gray-300">How does the x402 protocol work?</p>
                      </button>
                      <button
                        onClick={() => {
                          setInput('What services can you pay for?');
                        }}
                        className="cursor-pointer p-4 bg-[#D97642]/10 border border-[#D97642]/20 rounded-none hover:bg-[#D97642]/10 hover:border-[#D97642]/40 transition-all text-left hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
                      >
                        <p className="text-sm text-gray-300">What services can you pay for?</p>
                      </button>
                      <button
                        onClick={() => {
                          setInput('How do I set spending limits?');
                        }}
                        className="cursor-pointer p-4 bg-[#D97642]/10 border border-[#D97642]/20 rounded-none hover:bg-[#D97642]/10 hover:border-[#D97642]/40 transition-all text-left hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
                      >
                        <p className="text-sm text-gray-300">How do I set spending limits?</p>
                      </button>
                      <button
                        onClick={() => {
                          setInput('Show me a payment example');
                        }}
                        className="cursor-pointer p-4 bg-[#D97642]/10 border border-[#D97642]/20 rounded-none hover:bg-[#D97642]/10 hover:border-[#D97642]/40 transition-all text-left hover:shadow-[0_0_20px_rgba(0,212,255,0.1)]"
                      >
                        <p className="text-sm text-gray-300">Show me a payment example</p>
                      </button>
                    </div>
                  )}
                </motion.div>
              )}

              <AnimatePresence>
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-none px-6 py-4 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-r from-[#D97642] to-[#B8653A] text-white shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                          : 'bg-[#D97642]/10 border border-[#D97642]/20 text-gray-300'
                      }`}
                    >
                      {message.role === 'assistant' && (
                        <div className="flex items-center gap-2 mb-2 text-gray-300 text-sm font-medium">
                          <Eye className="w-4 h-4 drop-shadow-[0_0_8px_rgba(0,212,255,0.7)]" />
                          <span>Jarvis402</span>
                        </div>
                      )}
                      {message.parts?.map((part, partIndex) => (
                        <div key={`${message.id}-${partIndex}`}>
                          {part.type === 'text' && (
                            message.role === 'assistant' ? (
                              <div className="markdown-content">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                  {part.text}
                                </ReactMarkdown>
                              </div>
                            ) : (
                              <div className="whitespace-pre-wrap">{part.text}</div>
                            )
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#D97642]/10 border border-[#D97642]/20 rounded-none px-6 py-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Loader2 className="w-5 h-5 animate-spin drop-shadow-[0_0_8px_rgba(0,212,255,0.7)]" />
                      <span>Jarvis402 is thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

          {/* Input Form - sticky at bottom */}
          <div className="sticky bottom-0 bg-black/80 backdrop-blur-lg border-t border-[#D97642]/20 py-6">
            <form onSubmit={handleFormSubmit} className="relative space-y-3">
              {/* Contract Address Input */}
              <div className="relative bg-[#D97642]/10 border border-[#D97642]/20 rounded-none p-2 backdrop-blur-sm focus-within:border-[#D97642]/50 focus-within:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all">
                <input
                  type="text"
                  value={contractAddress}
                  onChange={(e) => setContractAddress(e.target.value)}
                  placeholder={connected ? "Service URL or x402 endpoint (optional)" : "Connect wallet to chat..."}
                  className="w-full bg-transparent px-4 py-2 text-gray-300 placeholder-[#D97642]/40 focus:outline-none text-sm font-mono"
                  disabled={!connected || isLoading || cooldownRemaining > 0}
                />
              </div>

              {/* Message Input */}
              <div className="relative flex items-center gap-2 bg-[#D97642]/10 border border-[#D97642]/20 rounded-none p-2 backdrop-blur-sm focus-within:border-[#D97642]/50 focus-within:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={connected ? "Tell me what you need..." : "Connect wallet to chat..."}
                  className="flex-1 bg-transparent px-4 py-3 text-gray-300 placeholder-[#D97642]/40 focus:outline-none"
                  disabled={!connected || isLoading || cooldownRemaining > 0}
                />
                <button
                  type="submit"
                  disabled={!connected || isLoading || !input.trim() || cooldownRemaining > 0}
                  className="px-6 py-3 bg-gradient-to-r from-[#D97642] to-[#B8653A] text-white rounded-none font-semibold hover:shadow-lg hover:shadow-[#D97642]/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 min-w-[100px] justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : cooldownRemaining > 0 ? (
                    <span>{cooldownRemaining}s</span>
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              <p className="text-xs text-gray-300/60 mt-2 text-center">
                {!connected ? (
                  <span className="text-[#D97642]">Please connect your wallet to start chatting with Jarvis402.</span>
                ) : cooldownRemaining > 0 ? (
                  <span className="text-[#D97642]">There is currently high traffic. Please wait {cooldownRemaining} seconds before sending another message.</span>
                ) : (
                  'Jarvis402 is an autonomous payment agent. Set spending limits and review transactions.'
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
