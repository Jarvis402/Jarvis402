'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Brain, Zap, ArrowRight, Wallet, Globe, Lock } from 'lucide-react';

export default function Home() {
  return (
    <div className="overflow relative min-h-screen">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <img src="/background.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/65" />
      </div>
      <div className="relative z-10">
        {/* Header */}
        <header className="sticky top-0 z-50">
          <div className="container mx-auto px-6 py-5">
            <nav className="flex items-center justify-between">
              <div className="flex gap-16">
                <Link
                  href="/"
                  className="flex items-center gap-3 rounded-full bg-black p-2 transition-all duration-300 hover:brightness-110"
                >
                  <img
                    src="/logo_black.png"
                    className="rounded-full"
                    alt="Logo"
                    width={60}
                    height={60}
                  />
                </Link>

                <div className="hidden items-center gap-10 text-sm md:flex">
                  <a
                    href="#features"
                    className="font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-[#D97642]"
                  >
                    Features
                  </a>
                  <a
                    href="#how-it-works"
                    className="font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-[#D97642]"
                  >
                    How It Works
                  </a>
                  <a
                    href="https://docs.jarvis402.xyz"
                    className="font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-[#D97642]"
                  >
                    Docs
                  </a>
                  <a
                    href="https://github.com/Jarvis402/Jarvis402"
                    className="font-medium tracking-wider text-gray-400 uppercase transition-colors hover:text-[#D97642]"
                  >
                    Github
                  </a>
                </div>
              </div>
              <Link
                href="/app"
                className="rounded-lg bg-gradient-to-r from-[#D97642] to-[#B8653A] px-7 py-3 text-sm font-bold tracking-wide text-white uppercase transition-all duration-300 hover:scale-105 hover:shadow hover:shadow-[#D97642]/40"
              >
                Launch App
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-6 pt-10 pb-24">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#D97642]/40 bg-gradient-to-r from-[#D97642]/20 to-[#B8653A]/20 px-5 py-2.5 text-sm font-light tracking-wider text-[#D97642] uppercase backdrop-blur-sm">
                Powered by x402 protocol
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-orbitron mb-6 text-center text-6xl leading-tight font-black tracking-tight md:text-7xl"
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
              className="mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-gray-400 md:text-xl"
            >
              Jarvis402 autonomously handles payments for APIs, services, and digital resources
              using the x402 protocol.
              <span className="font-semibold text-[#D97642]"> Zero manual intervention.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-24 flex flex-col justify-center gap-5 sm:flex-row"
            >
              <Link
                href="/app"
                className="flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#D97642] to-[#B8653A] px-10 py-4 text-base font-bold tracking-wider text-white uppercase transition-all duration-300 hover:scale-105 hover:shadow hover:shadow-[#D97642]/50"
              >
                Get Started
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-[#D97642] bg-transparent px-10 py-4 text-base font-bold tracking-wider text-[#D97642] uppercase transition-all duration-300 hover:bg-[#D97642]/10"
              >
                Learn More
              </a>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4"
            >
              <div className="rounded-2xl border border-[#D97642]/30 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#D97642]/60">
                <div className="font-orbitron mb-3 text-4xl font-black text-[#D97642] md:text-5xl">
                  0%
                </div>
                <div className="text-xs font-semibold tracking-wider text-gray-400/90 uppercase">
                  Transaction Fees
                </div>
              </div>
              <div className="rounded-2xl border border-[#D97642]/30 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#D97642]/60">
                <div className="font-orbitron mb-3 text-4xl font-black text-[#D97642] md:text-5xl">
                  ~2s
                </div>
                <div className="text-xs font-semibold tracking-wider text-gray-400/90 uppercase">
                  Settlement Time
                </div>
              </div>
              <div className="rounded-2xl border border-[#D97642]/30 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#D97642]/60">
                <div className="font-orbitron mb-3 text-4xl font-black text-[#D97642] md:text-5xl">
                  x402
                </div>
                <div className="text-xs font-semibold tracking-wider text-gray-400/90 uppercase">
                  Protocol
                </div>
              </div>
              <div className="rounded-2xl border border-[#D97642]/30 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 p-8 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-[#D97642]/60">
                <div className="font-orbitron mb-3 text-4xl font-black text-[#D97642] md:text-5xl">
                  ∞
                </div>
                <div className="text-xs font-semibold tracking-wider text-gray-400/90 uppercase">
                  Blockchain Agnostic
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Sources Section */}
        <section className="mx-auto overflow-hidden bg-[#B8653A]/30 px-6 py-16 backdrop-blur-lg">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-50">
                Built on the x402 open protocol
              </h3>
              <p className="mx-auto mt-4 max-w-2xl text-gray-300">
                Access any x402-compatible API, service, or digital resource with zero fees and
                instant settlement
              </p>
            </motion.div>

            <div className="relative">
              <div className="logo-scroll-container">
                <div className="logo-scroll-track">
                  {/* First set of logos */}
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/heurist-mesh.png"
                      alt="Heurist Mesh"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/pinata.png"
                      alt="Pinata"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/thirdweb-logo.png"
                      alt="thirdweb"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/neynar.png"
                      alt="Neynar"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/zyte-api-x402.png"
                      alt="Zyte API"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/aurracloud.png"
                      alt="AurraCloud"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/x402scan.png"
                      alt="x402scan"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>

                  {/* Duplicate set for seamless loop */}
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/heurist-mesh.png"
                      alt="Heurist Mesh"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/pinata.png"
                      alt="Pinata"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/thirdweb-logo.png"
                      alt="thirdweb"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/neynar.png"
                      alt="Neynar"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/zyte-api-x402.png"
                      alt="Zyte API"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/aurracloud.png"
                      alt="AurraCloud"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                  <div className="logo-item">
                    <Image
                      src="https://www.x402.org/logos/x402scan.png"
                      alt="x402scan"
                      width={160}
                      height={160}
                      className="brightness-110 transition-all hover:brightness-120"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Diagonal Split Layout */}
        <section id="features" className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-7xl">
            {/* Main Feature - Full Width */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mb-8 overflow-hidden"
            >
              <div className="flex min-h-[250px] flex-col md:flex-row">
                {/* Left side - Icon & Title */}
                <div className="relative flex w-full flex-col items-start justify-center bg-gradient-to-br from-[#D97642] to-[#B8653A] p-12 md:w-2/5">
                  <div className="absolute top-0 right-0 -mt-20 -mr-20 h-40 w-40 rounded-full bg-white/5" />
                  <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-32 w-32 rounded-full bg-black/10" />
                  <Wallet className="relative z-10 mb-6 h-16 w-16 text-white" />
                  <h3 className="relative z-10 mb-3 text-3xl font-bold text-white">
                    Autonomous Payments
                  </h3>
                  <div className="relative z-10 h-1 w-20 bg-white/30" />
                </div>

                {/* Right side - Description */}
                <div className="flex w-full items-center border border-[#D97642]/20 bg-[#D97642]/5 p-12 backdrop-blur-sm md:w-3/5">
                  <p className="text-lg leading-relaxed text-gray-300/90">
                    Jarvis402 can autonomously pay for API requests, cloud services, and digital
                    resources using the x402 protocol without manual approval. Set spending limits
                    and let AI handle the rest.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Two Medium Features - Side by Side */}
            <div className="mb-8 grid gap-8 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden border border-[#D97642]/20 bg-[#D97642]/5 backdrop-blur transition-all duration-500 hover:border-[#D97642]/60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D97642]/0 to-[#D97642]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative p-10">
                  <div className="mb-6 flex items-center gap-6">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-gradient-to-br from-[#D97642] to-[#B8653A]">
                      <Zap className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex h-full flex-col justify-center">
                      <h3 className="mb-3 text-2xl font-semibold text-[#D97642]">
                        Instant Settlement
                      </h3>
                      <div className="h-0.5 w-36 bg-[#D97642]/40" />
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-300/90">
                    Payments settle at blockchain speed (~2 seconds) with zero fees, enabling
                    real-time access to paid services and content.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group relative overflow-hidden border border-[#D97642]/20 bg-[#D97642]/5 backdrop-blur transition-all duration-500 hover:border-[#D97642]/60"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D97642]/0 to-[#D97642]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative p-10">
                  <div className="mb-6 flex items-center gap-6">
                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center bg-gradient-to-br from-[#D97642] to-[#B8653A]">
                      <Globe className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex h-full flex-col justify-center">
                      <h3 className="mb-3 text-2xl font-semibold text-[#D97642]">
                        Blockchain Agnostic
                      </h3>
                      <div className="h-0.5 w-36 bg-[#D97642]/40" />
                    </div>
                  </div>
                  <p className="leading-relaxed text-gray-300/90">
                    Works with any blockchain network including Ethereum, Solana, and more. No
                    lock-in to specific tokens or chains.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Three Small Features - Asymmetric Layout */}
            <div className="grid gap-6 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group relative border-l-4 border-[#D97642] bg-gradient-to-br from-[#D97642]/10 to-[#D97642]/5 p-8 backdrop-blur transition-all duration-300 hover:translate-x-2 hover:from-[#D97642]/20 hover:to-[#D97642]/10"
              >
                <Lock className="mb-4 h-12 w-12 text-[#D97642]" />
                <h3 className="mb-3 text-xl font-semibold text-[#D97642]">No Registration</h3>
                <p className="text-sm leading-relaxed text-gray-300/90">
                  Access services without accounts or OAuth. Pay directly via HTTP 402.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="group relative border-l-4 border-[#D97642] bg-gradient-to-br from-[#D97642]/10 to-[#D97642]/5 p-8 backdrop-blur transition-all duration-300 hover:translate-x-2 hover:from-[#D97642]/20 hover:to-[#D97642]/10"
              >
                <Brain className="mb-4 h-12 w-12 text-[#D97642]" />
                <h3 className="mb-3 text-xl font-semibold text-[#D97642]">Smart Resource Access</h3>
                <p className="text-sm leading-relaxed text-gray-300/90">
                  AI-powered decisions to access the right services at optimal prices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group relative border-l-4 border-[#D97642] bg-gradient-to-br from-[#D97642]/10 to-[#D97642]/5 p-8 backdrop-blur transition-all duration-300 hover:translate-x-2 hover:from-[#D97642]/20 hover:to-[#D97642]/10"
              >
                <Shield className="mb-4 h-12 w-12 text-[#D97642]" />
                <h3 className="mb-3 text-xl font-semibold text-[#D97642]">Open Standard</h3>
                <p className="text-sm leading-relaxed text-gray-300/90">
                  Built on x402 protocol. No lock-in, no intermediaries, no hidden fees.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Vertical Timeline */}
        <section id="how-it-works" className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 text-center">
              <h2 className="mb-4 bg-gradient-to-r from-[#D97642] to-[#B8653A] bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                How Jarvis402 Works
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-300/90">
                Simple, transparent payment flow powered by the x402 protocol
              </p>
            </div>

            {/* Vertical Timeline Layout */}
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-[#D97642] via-[#D97642]/50 to-transparent md:block" />

              {/* Step 1 - Left Aligned */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mb-24"
              >
                <div className="grid items-center gap-8 md:grid-cols-2">
                  {/* Content - Left Side */}
                  <div className="md:text-right">
                    <div className="inline-block max-w-lg border-2 border-[#D97642]/30 bg-[#D97642]/5 p-8 backdrop-blur-sm md:float-right">
                      <div className="mb-6 flex items-center gap-4 md:flex-row-reverse">
                        <div className="flex-1 md:text-right">
                          <span className="font-orbitron text-6xl font-black text-[#D97642]/70">
                            01
                          </span>
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-[#D97642]">
                        You Request a Resource
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-300/90">
                        Simply tell Jarvis402 what you need—access to a paid API, premium data, or
                        any x402-compatible service.
                      </p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-start gap-2 md:flex-row-reverse">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642] md:rotate-180" />
                          <span className="flex-1">Natural language commands</span>
                        </div>
                        <div className="flex items-start gap-2 md:flex-row-reverse">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642] md:rotate-180" />
                          <span className="flex-1">No account creation needed</span>
                        </div>
                        <div className="flex items-start gap-2 md:flex-row-reverse">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642] md:rotate-180" />
                          <span className="flex-1">Works with any x402 service</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - Center */}
                  <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center justify-center md:flex">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#D97642] to-[#B8653A] shadow-[0_0_20px_rgba(217,118,66,0.6)]" />
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
                <div className="grid items-center gap-8 md:grid-cols-2">
                  {/* Empty space - Left Side */}
                  <div className="hidden md:block" />

                  {/* Timeline dot - Center */}
                  <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center justify-center md:flex">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#D97642] to-[#B8653A] shadow-[0_0_20px_rgba(217,118,66,0.6)]" />
                  </div>

                  {/* Content - Right Side */}
                  <div>
                    <div className="inline-block max-w-lg border-2 border-[#D97642]/30 bg-[#D97642]/5 p-8 backdrop-blur-sm">
                      <div className="mb-6 flex items-center gap-4">
                        <div className="flex-1">
                          <span className="font-orbitron text-6xl font-black text-[#D97642]/70">
                            02
                          </span>
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-[#D97642]">
                        Jarvis Handles Payment
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-300/90">
                        Jarvis402 automatically handles the x402 payment flow without any manual
                        intervention.
                      </p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-start gap-2">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642]" />
                          <span className="flex-1">Receives HTTP 402 response</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642]" />
                          <span className="flex-1">Submits payment via blockchain</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642]" />
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
                <div className="grid items-center gap-8 md:grid-cols-2">
                  {/* Content - Left Side */}
                  <div className="md:text-right">
                    <div className="inline-block max-w-lg border-2 border-[#D97642]/30 bg-[#D97642]/5 p-8 backdrop-blur-sm md:float-right">
                      <div className="mb-6 flex items-center gap-4 md:flex-row-reverse">
                        <div className="flex-1 md:text-right">
                          <span className="font-orbitron text-6xl font-black text-[#D97642]/70">
                            03
                          </span>
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-[#D97642]">
                        You Get Instant Access
                      </h3>
                      <p className="mb-4 leading-relaxed text-gray-300/90">
                        Once payment is verified, you receive immediate access to the requested
                        resource.
                      </p>
                      <div className="space-y-2 text-sm text-gray-400">
                        <div className="flex items-start gap-2 md:flex-row-reverse">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642] md:rotate-180" />
                          <span className="flex-1">Instant resource delivery</span>
                        </div>
                        <div className="flex items-start gap-2 md:flex-row-reverse">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642] md:rotate-180" />
                          <span className="flex-1">Clear, formatted presentation</span>
                        </div>
                        <div className="flex items-start gap-2 md:flex-row-reverse">
                          <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#D97642] md:rotate-180" />
                          <span className="flex-1">Full transaction transparency</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline dot - Center */}
                  <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center justify-center md:flex">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#D97642] to-[#B8653A] shadow-[0_0_20px_rgba(217,118,66,0.6)]" />
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
          <div className="mx-auto max-w-4xl text-center">
            <div className="rounded-none border border-[#D97642]/30 bg-gradient-to-br from-[#D97642]/10 to-[#B8653A]/5 px-12 py-10 backdrop-blur">
              <h2 className="mb-1 bg-gradient-to-r from-[#D97642] to-[#B8653A] bg-clip-text pb-5 text-4xl font-semibold text-transparent md:text-5xl">
                Ready for autonomous payments?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
                Let Jarvis402 handle payments for you. Access any x402-compatible service with zero
                manual intervention.
              </p>
              <Link
                href="/app"
                className="inline-flex transform items-center gap-3 rounded-lg bg-gradient-to-r from-[#D97642] to-[#B8653A] px-10 py-5 text-xl font-bold text-white transition-all duration-500 hover:scale-105 hover:shadow hover:shadow-[#D97642]/30"
              >
                Launch Jarvis402
                <ArrowRight className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#D97642]/20 bg-black/50">
          <div className="container mx-auto px-6 py-12">
            <div className="mb-12 grid gap-8 md:grid-cols-4">
              <div>
                <Link
                  href="/"
                  className="flex w-fit items-center gap-3 rounded-full bg-black p-2 transition-all duration-300 hover:brightness-110"
                >
                  <img
                    src="/logo_black.png"
                    className="rounded-full"
                    alt="Logo"
                    width={60}
                    height={60}
                  />
                </Link>
                <p className="pt-4 text-sm leading-relaxed text-gray-400">
                  An AI agent that pays for you
                  <br /> using the x402 protocol.
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-bold text-[#D97642]">Product</h4>
                <ul className="space-y-2 text-sm text-gray-300/70">
                  <li>
                    <a href="#features" className="transition-colors hover:text-[#D97642]">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#how-it-works" className="transition-colors hover:text-[#D97642]">
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a href="/app" className="transition-colors hover:text-[#D97642]">
                      App
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-bold text-[#D97642]">Resources</h4>
                <ul className="space-y-2 text-sm text-gray-300/70">
                  <li>
                    <a
                      href="https://docs.jarvis402.xyz"
                      className="transition-colors hover:text-[#D97642]"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/Jarvis402/Jarvis402"
                      className="transition-colors hover:text-[#D97642]"
                    >
                      Github
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-bold text-[#D97642]">Community</h4>
                <ul className="space-y-2 text-sm text-gray-300/70">
                  <li>
                    <a
                      href="https://x.com/jarvis402xyz"
                      className="transition-colors hover:text-[#D97642]"
                    >
                      X
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-[#D97642]">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="#" className="transition-colors hover:text-[#D97642]">
                      Telegram
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-[#D97642]/20 pt-8 md:flex-row">
              <p className="text-sm text-gray-300/60">
                &copy; 2025 Jarvis402. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
