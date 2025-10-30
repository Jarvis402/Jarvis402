'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { Send, Eye, Loader2, Lock, Activity, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

// Generate particle configurations outside component to avoid Math.random() during render
const particleConfigs = [...Array(20)].map(() => ({
  initialX: `${Math.random() * 100}%`,
  initialY: `${Math.random() * 100}%`,
  animateY1: `${Math.random() * 100}%`,
  animateY2: `${Math.random() * 100}%`,
  duration: Math.random() * 10 + 10,
}));

export default function AppPage() {
  const { messages, sendMessage, status } = useChat();
  const { connected, publicKey } = useWallet();
  const messagesEndRef = useRef(null);
  const [input, setInput] = useState('');

  // Initialize cooldown state from localStorage
  const [cooldownRemaining, setCooldownRemaining] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const storedTime = localStorage.getItem('lastSubmitTime');
    if (storedTime) {
      const lastTime = parseInt(storedTime, 10);
      const now = Date.now();
      const timeSinceLastSubmit = (now - lastTime) / 1000;
      if (timeSinceLastSubmit < 50) {
        return Math.ceil(50 - timeSinceLastSubmit);
      } else {
        localStorage.removeItem('lastSubmitTime');
      }
    }
    return 0;
  });

  const [lastSubmitTime, setLastSubmitTime] = useState(() => {
    if (typeof window === 'undefined') return 0;
    const storedTime = localStorage.getItem('lastSubmitTime');
    return storedTime ? parseInt(storedTime, 10) : 0;
  });

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
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(217,118,66,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(217,118,66,0.03)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000,transparent)] bg-[size:50px_50px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#D97642]/5 via-transparent to-[#D97642]/5" />
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
        {particleConfigs.map((config, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#D97642]"
            initial={{
              x: config.initialX,
              y: config.initialY,
              opacity: 0,
            }}
            animate={{
              y: [config.animateY1, config.animateY2],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: config.duration,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header - Enhanced Futuristic */}
        <header className="sticky top-0 z-50 border-b border-[#D97642]/30 bg-black/90 shadow-[0_0_30px_rgba(217,118,66,0.15)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D97642]/5 to-transparent" />
          <div className="relative container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="group flex items-center gap-3">
                <div className="relative">
                  <img
                    src="/logo_black.png"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="relative z-10"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-orbitron bg-gradient-to-r from-[#D97642] to-[#B8653A] bg-clip-text text-xl font-bold text-transparent">
                    Jarvis402
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#D97642]/60">
                    AUTONOMOUS AGENT
                  </span>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                {connected && publicKey && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-3 border border-[#D97642]/30 bg-[#D97642]/10 px-4 py-2 backdrop-blur-sm"
                  >
                    <div className="relative">
                      <Activity className="h-4 w-4 animate-pulse text-[#D97642]" />
                    </div>
                    <span className="hidden font-mono text-xs text-gray-300 sm:inline">
                      SYSTEM ACTIVE
                    </span>
                  </motion.div>
                )}
                <WalletMultiButton className="!bg-gradient-to-r !from-[#D97642] !to-[#B8653A] !font-mono !text-xs !tracking-wider !transition-all hover:!shadow-[0_0_20px_rgba(217,118,66,0.5)]" />
              </div>
            </div>
          </div>
          {/* Bottom glow line */}
          <div className="absolute right-0 bottom-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#D97642] to-transparent" />
        </header>

        {/* Chat Container */}
        <div className="container mx-auto max-w-6xl px-6">
          {/* Messages */}
          <div className="min-h-[600px] space-y-6 py-8">
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="py-20 text-center"
              >
                {/* Holographic Title Effect */}
                <div className="relative mb-8 inline-block">
                  <div className="animate- absolute inset-0 bg-gradient-to-r from-[#D97642] to-[#B8653A] opacity-10 blur-2xl" />
                  <h2 className="relative mb-2 bg-gradient-to-r from-[#F4A460] via-[#D97642] to-[#B8653A] bg-clip-text font-mono text-4xl font-black tracking-tight text-transparent md:text-5xl">
                    {connected ? '[ SYSTEM INITIALIZED ]' : '[ AUTHENTICATION REQUIRED ]'}
                  </h2>
                  <div className="mt-4 flex items-center justify-center gap-2">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="h-2 w-2 bg-[#D97642]"
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </div>
                </div>

                <div className="mx-auto mb-12 max-w-2xl text-center font-mono text-sm leading-relaxed text-gray-400">
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
                    className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2"
                  >
                    {[
                      {
                        text: 'How does the x402 protocol work?',
                        icon: <Zap className="h-4 w-4" />,
                      },
                      { text: 'What services can you pay for?', icon: <Eye className="h-4 w-4" /> },
                      { text: 'How do I set spending limits?', icon: <Lock className="h-4 w-4" /> },
                      { text: 'Show me a payment example', icon: <Activity className="h-4 w-4" /> },
                    ].map((item, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setInput(item.text)}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + idx * 0.1 }}
                        className="group relative cursor-pointer overflow-hidden border border-[#D97642]/20 bg-black/40 p-5 text-left backdrop-blur-sm transition-all hover:border-[#D97642]/60"
                      >
                        <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-[#D97642]/0 via-[#D97642]/10 to-[#D97642]/0 transition-transform duration-700 group-hover:translate-x-[100%]" />
                        <div className="relative flex items-start gap-3">
                          <div className="mt-1 text-[#D97642] transition-transform group-hover:scale-110">
                            {item.icon}
                          </div>
                          <p className="font-mono text-sm leading-relaxed text-gray-300">
                            {item.text}
                          </p>
                        </div>
                        {/* Corner accents */}
                        <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-[#D97642]/40 transition-colors group-hover:border-[#D97642]" />
                        <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-[#D97642]/40 transition-colors group-hover:border-[#D97642]" />
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
                        : 'border border-[#D97642]/30 bg-black/60 text-gray-300 backdrop-blur-sm'
                    }`}
                  >
                    {/* Message glow effect */}
                    {message.role === 'user' && (
                      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#D97642] to-[#B8653A] opacity-30 blur-xl" />
                    )}

                    {/* Corner accents */}
                    <div
                      className={`absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 ${message.role === 'user' ? 'border-white/50' : 'border-[#D97642]/50'}`}
                    />
                    <div
                      className={`absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 ${message.role === 'user' ? 'border-white/50' : 'border-[#D97642]/50'}`}
                    />

                    {message.role === 'assistant' && (
                      <div className="mb-3 flex items-center gap-3 border-b border-[#D97642]/20 pb-2">
                        <div className="relative">
                          <Eye className="h-5 w-5 text-[#D97642]" />
                          <motion.div
                            className="absolute inset-0 bg-[#D97642] opacity-50 blur-md"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        </div>
                        <span className="font-mono text-sm tracking-wider text-[#D97642]">
                          JARVIS402
                        </span>
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-[#D97642]/50 to-transparent" />
                      </div>
                    )}

                    {message.parts?.map((part, partIndex) => (
                      <div key={`${message.id}-${partIndex}`}>
                        {part.type === 'text' &&
                          (message.role === 'assistant' ? (
                            <div className="markdown-content font-mono text-sm leading-relaxed">
                              <ReactMarkdown remarkPlugins={[remarkGfm]}>{part.text}</ReactMarkdown>
                            </div>
                          ) : (
                            <div className="font-mono text-sm whitespace-pre-wrap">{part.text}</div>
                          ))}
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
                <div className="relative border border-[#D97642]/30 bg-black/60 px-6 py-4 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 h-3 w-3 border-t-2 border-l-2 border-[#D97642]/50" />
                  <div className="absolute right-0 bottom-0 h-3 w-3 border-r-2 border-b-2 border-[#D97642]/50" />

                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Loader2 className="h-5 w-5 animate-spin text-[#D97642]" />
                      <motion.div
                        className="absolute inset-0 bg-[#D97642] opacity-50 blur-md"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    </div>
                    <span className="font-mono text-sm text-gray-300">
                      PROCESSING<span className="animate-pulse">...</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form - Enhanced Futuristic */}
          <div className="sticky bottom-0 border-t border-[#D97642]/30 bg-black/95 py-6 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl">
            <div className="absolute top-0 right-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-[#D97642] to-transparent" />

            <form onSubmit={handleFormSubmit} className="relative space-y-3">
              {/* Service Input */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D97642]/20 to-[#B8653A]/20 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                <div className="relative border border-[#D97642]/30 bg-black/60 p-3 backdrop-blur-sm transition-all group-focus-within:border-[#D97642]/60">
                  <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-[#D97642]/40" />
                  <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-[#D97642]/40" />

                  <div className="flex items-center gap-2">
                    <Zap className="h-4 w-4 text-[#D97642]" />
                    <input
                      type="text"
                      value={contractAddress}
                      onChange={(e) => setContractAddress(e.target.value)}
                      placeholder={
                        connected ? '[ SERVICE ENDPOINT ]' : '[ AUTHENTICATION REQUIRED ]'
                      }
                      className="flex-1 bg-transparent px-2 py-1 font-mono text-sm tracking-wide text-gray-300 placeholder-[#D97642]/40 focus:outline-none"
                      disabled={!connected || isLoading || cooldownRemaining > 0}
                    />
                  </div>
                </div>
              </div>

              {/* Message Input */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#D97642]/20 to-[#B8653A]/20 opacity-0 blur-xl transition-opacity group-focus-within:opacity-100" />
                <div className="relative flex items-center gap-3 border border-[#D97642]/30 bg-black/60 p-3 backdrop-blur-sm transition-all group-focus-within:border-[#D97642]/60">
                  <div className="absolute top-0 left-0 h-2 w-2 border-t border-l border-[#D97642]/40" />
                  <div className="absolute right-0 bottom-0 h-2 w-2 border-r border-b border-[#D97642]/40" />

                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={connected ? '[ ENTER COMMAND ]' : '[ SYSTEM LOCKED ]'}
                    className="flex-1 bg-transparent px-2 py-3 font-mono tracking-wide text-gray-300 placeholder-[#D97642]/40 focus:outline-none"
                    disabled={!connected || isLoading || cooldownRemaining > 0}
                  />

                  <motion.button
                    type="submit"
                    disabled={!connected || isLoading || !input.trim() || cooldownRemaining > 0}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn relative overflow-hidden bg-gradient-to-r from-[#D97642] to-[#B8653A] px-8 py-3 font-mono text-sm font-bold tracking-wider text-white transition-all hover:shadow-[0_0_30px_rgba(217,118,66,0.5)] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover/btn:translate-x-[100%]" />
                    <span className="relative flex items-center gap-2">
                      {isLoading ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                        </>
                      ) : cooldownRemaining > 0 ? (
                        <span className="text-lg">{cooldownRemaining}</span>
                      ) : (
                        <>
                          <span>SEND</span>
                          <Send className="h-4 w-4" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </div>
              </div>

              {/* Status Text */}
              <p className="mt-3 text-center font-mono text-xs tracking-wider text-gray-400">
                {!connected ? (
                  <span className="text-[#D97642]">
                    {'>'} WALLET AUTHENTICATION REQUIRED TO INITIALIZE SYSTEM
                  </span>
                ) : cooldownRemaining > 0 ? (
                  <span className="flex items-center justify-center gap-2 text-[#D97642]">
                    RATE LIMIT ACTIVE - COOLDOWN: {cooldownRemaining}s
                  </span>
                ) : (
                  <span className="text-[#D97642]/60">
                    {'>'} AUTONOMOUS PAYMENT SYSTEM ONLINE - CONFIGURE LIMITS FOR SECURE OPERATION
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .markdown-content h1,
        .markdown-content h2,
        .markdown-content h3 {
          color: #d97642;
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
          color: #d97642;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
