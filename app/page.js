'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Brain, Database, Zap, BarChart3, Target, ArrowRight, Users, Wallet, Globe, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img
          src="/background.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50">
          <div className="container mx-auto px-6 py-5">
            <nav className="flex items-center justify-between">
              <div className='flex gap-16'>
                <Link href="/" className="flex items-center gap-3 p-2 rounded-full bg-black hover:brightness-110 transition-all duration-300">
                  <img src="/logo_black.png" className='rounded-full' alt="Logo" width={60} height={60} />
                </Link>

                <div className="hidden md:flex items-center gap-10 text-sm">
                  <a href="#features" className="text-gray-400 hover:text-[#D97642] transition-colors font-medium uppercase tracking-wider">Features</a>
                  <a href="#how-it-works" className="text-gray-400 hover:text-[#D97642] transition-colors font-medium uppercase tracking-wider">How It Works</a>
                  <a href="https://docs.jarvis402.xyz" className="text-gray-400 hover:text-[#D97642] transition-colors font-medium uppercase tracking-wider">Docs</a>
                </div>
              </div>
              <Link
                href="/app"
                className="px-7 py-3 bg-gradient-to-r from-[#D97642] to-[#B8653A] text-white rounded-lg font-bold text-sm tracking-wide hover:shadow hover:shadow-[#D97642]/40 transition-all duration-300 hover:scale-105 uppercase"
              >
                Launch App
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pb-24 pt-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#D97642]/20 to-[#B8653A]/20 border border-[#D97642]/40 rounded-full text-[#D97642] text-sm font-light uppercase tracking-wider backdrop-blur-sm">
                Powered by x402 protocol
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl font-black mb-6 text-center leading-tight font-orbitron tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#F4A460] via-[#D97642] to-[#B8653A] bg-clip-text text-transparent">
                AUTONOMOUS
              </span>
              <br />
              <span className="text-white">AI PAYMENTS</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-3xl mx-auto text-center"
            >
              Jarvis402 autonomously handles payments for APIs, services, and digital resources using the x402 protocol.
              <span className="text-[#D97642] font-semibold"> Zero manual intervention.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-5 mb-24 justify-center"
            >
              <Link
                href="/app"
                className="px-10 py-4 bg-gradient-to-r from-[#D97642] to-[#B8653A] text-white rounded-lg font-bold text-base hover:shadow hover:shadow-[#D97642]/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="#how-it-works"
                className="px-10 py-4 bg-transparent border-2 border-[#D97642] rounded-lg font-bold text-base text-[#D97642] hover:bg-[#D97642]/10 transition-all duration-300 flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto"
            >
              <div className="p-8 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 border border-[#D97642]/30 rounded-2xl backdrop-blur-sm text-center hover:border-[#D97642]/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-black text-[#D97642] mb-3 font-orbitron">0%</div>
                <div className="text-xs text-gray-400/90 uppercase tracking-wider font-semibold">Transaction Fees</div>
              </div>
              <div className="p-8 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 border border-[#D97642]/30 rounded-2xl backdrop-blur-sm text-center hover:border-[#D97642]/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-black text-[#D97642] mb-3 font-orbitron">~2s</div>
                <div className="text-xs text-gray-400/90 uppercase tracking-wider font-semibold">Settlement Time</div>
              </div>
              <div className="p-8 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 border border-[#D97642]/30 rounded-2xl backdrop-blur-sm text-center hover:border-[#D97642]/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-black text-[#D97642] mb-3 font-orbitron">x402</div>
                <div className="text-xs text-gray-400/90 uppercase tracking-wider font-semibold">Protocol</div>
              </div>
              <div className="p-8 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 border border-[#D97642]/30 rounded-2xl backdrop-blur-sm text-center hover:border-[#D97642]/60 transition-all duration-300 hover:scale-105">
                <div className="text-4xl md:text-5xl font-black text-[#D97642] mb-3 font-orbitron">∞</div>
                <div className="text-xs text-gray-400/90 uppercase tracking-wider font-semibold">Blockchain Agnostic</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="mx-auto px-6 py-16 overflow-hidden bg-[#B8653A]/30 backdrop-blur-lg">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-semibold text-gray-50">
                Built on the x402 open protocol
              </h3>
              <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                Access any x402-compatible API, service, or digital resource with zero fees and instant settlement
              </p>
            </motion.div>

            <div className="relative">
              <div className="logo-scroll-container">
                <div className="logo-scroll-track">
                  {/* First set of logos */}
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/heurist-mesh.png" alt="Heurist Mesh" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/pinata.png" alt="Pinata" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/thirdweb-logo.png" alt="thirdweb" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/neynar.png" alt="Neynar" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/zyte-api-x402.png" alt="Zyte API" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/aurracloud.png" alt="AurraCloud" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/x402scan.png" alt="x402scan" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/heurist-mesh.png" alt="Heurist Mesh" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/pinata.png" alt="Pinata" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/thirdweb-logo.png" alt="thirdweb" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/neynar.png" alt="Neynar" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/zyte-api-x402.png" alt="Zyte API" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/aurracloud.png" alt="AurraCloud" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                  <div className="logo-item">
                    <Image src="https://www.x402.org/logos/x402scan.png" alt="x402scan" width={160} height={160} className="brightness-110 hover:brightness-120 transition-all" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Diagonal Split Layout */}
        <section id="features" className="container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
            {/* Main Feature - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 overflow-hidden"
            >
              <div className="flex flex-col md:flex-row min-h-[250px]">
                {/* Left side - Icon & Title */}
                <div className="w-full md:w-2/5 bg-gradient-to-br from-[#D97642] to-[#B8653A] p-12 flex flex-col justify-center items-start relative">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-20 -mt-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full -ml-16 -mb-16" />
                  <Wallet className="w-16 h-16 text-white mb-6 relative z-10" />
                  <h3 className="text-3xl font-bold text-white mb-3 relative z-10">Autonomous Payments</h3>
                  <div className="w-20 h-1 bg-white/30 relative z-10" />
                </div>

                {/* Right side - Description */}
                <div className="w-full md:w-3/5 bg-[#D97642]/5 border border-[#D97642]/20 p-12 flex items-center backdrop-blur-sm">
                  <p className="text-gray-300/90 text-lg leading-relaxed">
                    Jarvis402 can autonomously pay for API requests, cloud services, and digital resources using the x402 protocol without manual approval. Set spending limits and let AI handle the rest.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Two Medium Features - Side by Side */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden bg-[#D97642]/5 backdrop-blur border border-[#D97642]/20 hover:border-[#D97642]/60 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D97642]/0 to-[#D97642]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D97642] to-[#B8653A] flex items-center justify-center flex-shrink-0">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex h-full flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-[#D97642] mb-3">Instant Settlement</h3>
                      <div className="w-36 h-0.5 bg-[#D97642]/40" />
                    </div>
                  </div>
                  <p className="text-gray-300/90 leading-relaxed">
                    Payments settle at blockchain speed (~2 seconds) with zero fees, enabling real-time access to paid services and content.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden bg-[#D97642]/5 backdrop-blur border border-[#D97642]/20 hover:border-[#D97642]/60 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D97642]/0 to-[#D97642]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-10">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#D97642] to-[#B8653A] flex items-center justify-center flex-shrink-0">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex h-full flex-col justify-center">
                      <h3 className="text-2xl font-semibold text-[#D97642] mb-3">Blockchain Agnostic</h3>
                      <div className="w-36 h-0.5 bg-[#D97642]/40" />
                    </div>
                  </div>
                  <p className="text-gray-300/90 leading-relaxed">
                    Works with any blockchain network including Ethereum, Solana, and more. No lock-in to specific tokens or chains.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Three Small Features - Asymmetric Layout */}
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative backdrop-blur bg-gradient-to-br from-[#D97642]/10 to-[#D97642]/5 border-l-4 border-[#D97642] p-8 hover:from-[#D97642]/20 hover:to-[#D97642]/10 transition-all duration-300 hover:translate-x-2"
              >
                <Lock className="w-12 h-12 text-[#D97642] mb-4" />
                <h3 className="text-xl font-semibold text-[#D97642] mb-3">No Registration</h3>
                <p className="text-gray-300/90 text-sm leading-relaxed">
                  Access services without accounts or OAuth. Pay directly via HTTP 402.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative backdrop-blur bg-gradient-to-br from-[#D97642]/10 to-[#D97642]/5 border-l-4 border-[#D97642] p-8 hover:from-[#D97642]/20 hover:to-[#D97642]/10 transition-all duration-300 hover:translate-x-2"
              >
                <Brain className="w-12 h-12 text-[#D97642] mb-4" />
                <h3 className="text-xl font-semibold text-[#D97642] mb-3">Smart Resource Access</h3>
                <p className="text-gray-300/90 text-sm leading-relaxed">
                  AI-powered decisions to access the right services at optimal prices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative backdrop-blur bg-gradient-to-br from-[#D97642]/10 to-[#D97642]/5 border-l-4 border-[#D97642] p-8 hover:from-[#D97642]/20 hover:to-[#D97642]/10 transition-all duration-300 hover:translate-x-2"
              >
                <Shield className="w-12 h-12 text-[#D97642] mb-4" />
                <h3 className="text-xl font-semibold text-[#D97642] mb-3">Open Standard</h3>
                <p className="text-gray-300/90 text-sm leading-relaxed">
                  Built on x402 protocol. No lock-in, no intermediaries, no hidden fees.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Vertical Timeline */}
        <section id="how-it-works" className="container mx-auto px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#D97642] to-[#B8653A] bg-clip-text text-transparent">
                How Jarvis402 Works
              </h2>
              <p className="text-lg text-gray-300/90 max-w-3xl mx-auto">
                Simple, transparent payment flow powered by the x402 protocol
              </p>
            </div>

            {/* Vertical Timeline Layout */}
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#D97642] via-[#D97642]/50 to-transparent transform -translate-x-1/2" />

              {/* Step 1 - Left Aligned */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-24"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content - Left Side */}
                  <div className="md:text-right">
                    <div className="inline-block md:float-right bg-[#D97642]/5 border-2 border-[#D97642]/30 p-8 max-w-lg backdrop-blur-sm">
                      <div className="flex md:flex-row-reverse items-center gap-4 mb-6">
                        <div className="md:text-right flex-1">
                          <span className="text-6xl font-black text-[#D97642]/70 font-orbitron">01</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#D97642] mb-4">You Request a Resource</h3>
                      <p className="text-gray-300/90 leading-relaxed mb-4">
                        Simply tell Jarvis402 what you need—access to a paid API, premium data, or any x402-compatible service.
                      </p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex md:flex-row-reverse items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5 md:rotate-180" />
                          <span className="flex-1">Natural language commands</span>
                        </div>
                        <div className="flex md:flex-row-reverse items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5 md:rotate-180" />
                          <span className="flex-1">No account creation needed</span>
                        </div>
                        <div className="flex md:flex-row-reverse items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5 md:rotate-180" />
                          <span className="flex-1">Works with any x402 service</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - Center */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#D97642] to-[#B8653A] rounded-full shadow-[0_0_20px_rgba(217,118,66,0.6)]" />
                  </div>

                  {/* Empty space - Right Side */}
                  <div className="hidden md:block" />
                </div>
              </motion.div>

              {/* Step 2 - Right Aligned */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mb-24"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Empty space - Left Side */}
                  <div className="hidden md:block" />

                  {/* Timeline dot - Center */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#D97642] to-[#B8653A] rounded-full shadow-[0_0_20px_rgba(217,118,66,0.6)]" />
                  </div>

                  {/* Content - Right Side */}
                  <div>
                    <div className="inline-block bg-[#D97642]/5 border-2 border-[#D97642]/30 p-8 max-w-lg backdrop-blur-sm">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-1">
                          <span className="text-6xl font-black text-[#D97642]/70 font-orbitron">02</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#D97642] mb-4">Jarvis Handles Payment</h3>
                      <p className="text-gray-300/90 leading-relaxed mb-4">
                        Jarvis402 automatically handles the x402 payment flow without any manual intervention.
                      </p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5" />
                          <span className="flex-1">Receives HTTP 402 response</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5" />
                          <span className="flex-1">Submits payment via blockchain</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5" />
                          <span className="flex-1">~2 second settlement time</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 - Left Aligned */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content - Left Side */}
                  <div className="md:text-right">
                    <div className="inline-block md:float-right bg-[#D97642]/5 border-2 border-[#D97642]/30 p-8 max-w-lg backdrop-blur-sm">
                      <div className="flex md:flex-row-reverse items-center gap-4 mb-6">
                        <div className="md:text-right flex-1">
                          <span className="text-6xl font-black text-[#D97642]/70 font-orbitron">03</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-[#D97642] mb-4">You Get Instant Access</h3>
                      <p className="text-gray-300/90 leading-relaxed mb-4">
                        Once payment is verified, you receive immediate access to the requested resource.
                      </p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex md:flex-row-reverse items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5 md:rotate-180" />
                          <span className="flex-1">Instant resource delivery</span>
                        </div>
                        <div className="flex md:flex-row-reverse items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5 md:rotate-180" />
                          <span className="flex-1">Clear, formatted presentation</span>
                        </div>
                        <div className="flex md:flex-row-reverse items-start gap-2">
                          <ArrowRight className="w-4 h-4 text-[#D97642] flex-shrink-0 mt-0.5 md:rotate-180" />
                          <span className="flex-1">Full transaction transparency</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - Center */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#D97642] to-[#B8653A] rounded-full shadow-[0_0_20px_rgba(217,118,66,0.6)]" />
                  </div>

                  {/* Empty space - Right Side */}
                  <div className="hidden md:block" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="px-12 py-10 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 border border-[#D97642]/30 rounded-none backdrop-blur">
              <h2 className="text-4xl md:text-5xl font-semibold pb-5 mb-1 bg-gradient-to-r from-[#D97642] to-[#B8653A] bg-clip-text text-transparent">
                Ready for autonomous payments?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let Jarvis402 handle payments for you. Access any x402-compatible service with zero manual intervention.
              </p>
              <Link
                href="/app"
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#D97642] to-[#B8653A] text-white rounded-lg font-bold text-xl hover:shadow hover:shadow-[#D97642]/30 transition-all duration-500 transform hover:scale-105"
              >
                Launch Jarvis402
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#D97642]/20 bg-black/50">
          <div className="container mx-auto px-6 py-12">
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <Link href="/" className="w-fit flex items-center gap-3 p-2 rounded-full bg-black hover:brightness-110 transition-all duration-300">
                  <img src="/logo_black.png" className='rounded-full' alt="Logo" width={60} height={60} />
                </Link>
                <p className="pt-4 text-gray-400 text-sm leading-relaxed">
                  An AI agent that pays for you<br/> using the x402 protocol.
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#D97642] mb-4">Product</h4>
                <ul className="space-y-2 text-gray-300/70 text-sm">
                  <li><a href="#features" className="hover:text-[#D97642] transition-colors">Features</a></li>
                  <li><a href="#how-it-works" className="hover:text-[#D97642] transition-colors">How It Works</a></li>
                  <li><a href="/app" className="hover:text-[#D97642] transition-colors">App</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#D97642] mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-300/70 text-sm">
                  <li><a href="https://docs.jarvis402.xyz" className="hover:text-[#D97642] transition-colors">Documentation</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-[#D97642] mb-4">Community</h4>
                <ul className="space-y-2 text-gray-300/70 text-sm">
                  <li><a href="https://x.com/jarvis402xyz" className="hover:text-[#D97642] transition-colors">X</a></li>
                  <li><a href="#" className="hover:text-[#D97642] transition-colors">Discord</a></li>
                  <li><a href="#" className="hover:text-[#D97642] transition-colors">Telegram</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#D97642]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300/60 text-sm">
                &copy; 2025 Jarvis402. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
