'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { Send, Eye, Loader2, Wallet, Lock, Activity, Zap } from 'lucide-react';
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
          if (newValue === 0) {
            localStorage.removeItem('lastSubmitTime');
          }
          return newValue;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldownRemaining]);

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

    let finalMessage = input;
    if (contractAddress.trim()) {
      finalMessage = `[Service: ${contractAddress.trim()}]\n\n${input}`;
    }

    setLastSubmitTime(now);
    setCooldownRemaining(50);
    localStorage.setItem('lastSubmitTime', now.toString());

    sendMessage({ text: finalMessage });

    setInput('');
    setContractAddress('');
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,118,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,118,66,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#D97642]/5 via-transparent to-[#D97642]/5" />
      </div>

      {/* Floating Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D97642] rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
              opacity: 0
            }}
            animate={{
              y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header - Enhanced Futuristic */}
        <header className="sticky top-0 border-b border-[#D97642]/30 bg-black/90 backdrop-blur-xl shadow-[0_0_30px_rgba(217,118,66,0.15)] z-50">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D97642]/5 to-transparent" />
          <div className="container mx-auto px-6 py-4 relative">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative">
                  <img src="/logo_black.png" alt="Logo" width={60} height={60} className="relative z-10" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold font-orbitron bg-gradient-to-r from-[#D97642] to-[#B8653A] bg-clip-text text-transparent">
                    Jarvis402
                  </span>
                  <span className="text-[10px] text-[#D97642]/60 tracking-[0.2em] font-mono">
                    AUTONOMOUS AGENT
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                {connected && publicKey && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 px-4 py-2 bg-[#D97642]/10 border border-[#D97642]/30 backdrop-blur-sm"
                  >
                    <div className="relative">
                      <Activity className="w-4 h-4 text-[#D97642] animate-pulse" />
                    </div>
                    <span className="text-xs text-gray-300 font-mono hidden sm:inline">
                      SYSTEM ACTIVE
                    </span>
                  </motion.div>
                )}
                <WalletMultiButton className="!bg-gradient-to-r !from-[#D97642] !to-[#B8653A] hover:!shadow-[0_0_20px_rgba(217,118,66,0.5)] !transition-all !font-mono !text-xs !tracking-wider" />
              </div>
            </div>
          </div>
          {/* Bottom glow line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D97642] to-transparent" />
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
                  {/* Holographic Title Effect */}
                  <div className="relative inline-block mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#D97642] to-[#B8653A] blur-2xl opacity-10 animate-" />
                    <h2 className="relative text-4xl md:text-5xl font-black mb-2 bg-gradient-to-r from-[#F4A460] via-[#D97642] to-[#B8653A] bg-clip-text text-transparent font-mono tracking-tight">
                      {connected ? '[ SYSTEM INITIALIZED ]' : '[ AUTHENTICATION REQUIRED ]'}
                    </h2>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-[#D97642]"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="text-gray-400 max-w-2xl mx-auto mb-12 text-sm font-mono leading-relaxed text-center">
                    {connected ? (
                      <>
                        <div>&gt; READY TO PROCESS AUTONOMOUS PAYMENTS</div>
                        <div>&gt; AWAITING YOUR COMMAND...</div>
                      </>
                    ) : (
                      <>
                        <div>&gt; WALLET CONNECTION REQUIRED TO PROCEED</div>
                        <div>&gt; INITIATE SECURE AUTHENTICATION PROTOCOL...</div>
                      </>
                    )}
                  </div>

                  {connected && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto"
                    >
                      {[
                        { text: 'How does the x402 protocol work?', icon: <Zap className="w-4 h-4" /> },
                        { text: 'What services can you pay for?', icon: <Eye className="w-4 h-4" /> },
                        { text: 'How do I set spending limits?', icon: <Lock className="w-4 h-4" /> },
                        { text: 'Show me a payment example', icon: <Activity className="w-4 h-4" /> }
                      ].map((item, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setInput(item.text)}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="relative group cursor-pointer p-5 bg-black/40 border border-[#D97642]/20 backdrop-blur-sm hover:border-[#D97642]/60 transition-all text-left overflow-hidden"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-[#D97642]/0 via-[#D97642]/10 to-[#D97642]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                          <div className="relative flex items-start gap-3">
                            <div className="text-[#D97642] mt-1 group-hover:scale-110 transition-transform">
                              {item.icon}
                            </div>
                            <p className="text-sm text-gray-300 font-mono leading-relaxed">{item.text}</p>
                          </div>
                          {/* Corner accents */}
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D97642]/40 group-hover:border-[#D97642] transition-colors" />
                          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D97642]/40 group-hover:border-[#D97642] transition-colors" />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              )}

              <AnimatePresence mode="popLayout">
                {messages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, x: message.role === 'user' ? 20 : -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`relative max-w-[85%] px-6 py-5 ${
                        message.role === 'user'
                          ? 'bg-gradient-to-br from-[#D97642] to-[#B8653A] text-white'
                          : 'bg-black/60 border border-[#D97642]/30 text-gray-300 backdrop-blur-sm'
                      }`}
                    >
                      {/* Message glow effect */}
                      {message.role === 'user' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-[#D97642] to-[#B8653A] blur-xl opacity-30 -z-10" />
                      )}

                      {/* Corner accents */}
                      <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 ${message.role === 'user' ? 'border-white/50' : 'border-[#D97642]/50'}`} />
                      <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 ${message.role === 'user' ? 'border-white/50' : 'border-[#D97642]/50'}`} />

                      {message.role === 'assistant' && (
                        <div className="flex items-center gap-3 mb-3 pb-2 border-b border-[#D97642]/20">
                          <div className="relative">
                            <Eye className="w-5 h-5 text-[#D97642]" />
                            <motion.div
                              className="absolute inset-0 bg-[#D97642] blur-md opacity-50"
                              animate={{ scale: [1, 1.3, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          </div>
                          <span className="text-sm font-mono text-[#D97642] tracking-wider">JARVIS402</span>
                          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#D97642]/50 to-transparent" />
                        </div>
                      )}

                      {message.parts?.map((part, partIndex) => (
                        <div key={`${message.id}-${partIndex}`}>
                          {part.type === 'text' && (
                            message.role === 'assistant' ? (
                              <div className="markdown-content font-mono text-sm leading-relaxed">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                  {part.text}
                                </ReactMarkdown>
                              </div>
                            ) : (
                              <div className="whitespace-pre-wrap font-mono text-sm">{part.text}</div>
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="relative bg-black/60 border border-[#D97642]/30 backdrop-blur-sm px-6 py-4">
                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#D97642]/50" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#D97642]/50" />

                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Loader2 className="w-5 h-5 animate-spin text-[#D97642]" />
                        <motion.div
                          className="absolute inset-0 bg-[#D97642] blur-md opacity-50"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </div>
                      <span className="text-sm font-mono text-gray-300">PROCESSING<span className="animate-pulse">...</span></span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

          {/* Input Form - Enhanced Futuristic */}
          <div className="sticky bottom-0 bg-black/95 backdrop-blur-xl border-t border-[#D97642]/30 py-6 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D97642] to-transparent" />

            <form onSubmit={handleFormSubmit} className="relative space-y-3">
              {/* Service Input */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D97642]/20 to-[#B8653A]/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative bg-black/60 border border-[#D97642]/30 backdrop-blur-sm p-3 group-focus-within:border-[#D97642]/60 transition-all">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D97642]/40" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D97642]/40" />

                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#D97642]" />
                    <input
                      type="text"
                      value={contractAddress}
                      onChange={(e) => setContractAddress(e.target.value)}
                      placeholder={connected ? "[ SERVICE ENDPOINT ]" : "[ AUTHENTICATION REQUIRED ]"}
                      className="flex-1 bg-transparent px-2 py-1 text-gray-300 placeholder-[#D97642]/40 focus:outline-none text-sm font-mono tracking-wide"
                      disabled={!connected || isLoading || cooldownRemaining > 0}
                    />
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D97642]/20 to-[#B8653A]/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
                <div className="relative flex items-center gap-3 bg-black/60 border border-[#D97642]/30 backdrop-blur-sm p-3 group-focus-within:border-[#D97642]/60 transition-all">
                  <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#D97642]/40" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#D97642]/40" />

                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={connected ? "[ ENTER COMMAND ]" : "[ SYSTEM LOCKED ]"}
                    className="flex-1 bg-transparent px-2 py-3 text-gray-300 placeholder-[#D97642]/40 focus:outline-none font-mono tracking-wide"
                    disabled={!connected || isLoading || cooldownRemaining > 0}
                  />

                  <motion.button
                    type="submit"
                    disabled={!connected || isLoading || !input.trim() || cooldownRemaining > 0}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-8 py-3 bg-gradient-to-r from-[#D97642] to-[#B8653A] text-white font-bold font-mono text-sm tracking-wider hover:shadow-[0_0_30px_rgba(217,118,66,0.5)] transition-all disabled:opacity-40 disabled:cursor-not-allowed overflow-hidden group/btn"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500" />
                    <span className="relative flex items-center gap-2">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                        </>
                      ) : cooldownRemaining > 0 ? (
                        <span className="text-lg">{cooldownRemaining}</span>
                      ) : (
                        <>
                          <span>SEND</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Status Text */}
              <p className="text-xs text-gray-400 mt-3 text-center font-mono tracking-wider">
                {!connected ? (
                  <span className="text-[#D97642]">{'>'} WALLET AUTHENTICATION REQUIRED TO INITIALIZE SYSTEM</span>
                ) : cooldownRemaining > 0 ? (
                  <span className="text-[#D97642] flex items-center justify-center gap-2">
                    RATE LIMIT ACTIVE - COOLDOWN: {cooldownRemaining}s
                  </span>
                ) : (
                  <span className="text-[#D97642]/60">{'>'} AUTONOMOUS PAYMENT SYSTEM ONLINE - CONFIGURE LIMITS FOR SECURE OPERATION</span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(100%); }
        }

        .markdown-content h1,
        .markdown-content h2,
        .markdown-content h3 {
          color: #D97642;
          font-weight: bold;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }

        .markdown-content ul,
        .markdown-content ol {
          margin-left: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .markdown-content code {
          background: rgba(217, 118, 66, 0.1);
          padding: 0.2rem 0.4rem;
          border-radius: 0;
          border: 1px solid rgba(217, 118, 66, 0.2);
          font-size: 0.85em;
        }

        .markdown-content pre {
          background: rgba(0, 0, 0, 0.4);
          padding: 1rem;
          border: 1px solid rgba(217, 118, 66, 0.2);
          overflow-x: auto;
          margin: 0.5rem 0;
        }

        .markdown-content a {
          color: #D97642;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
