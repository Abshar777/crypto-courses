"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FlipWords } from '@/components/flip-words';
import CryptoCanvas from '@/components/crypto-canvas';
import TypewriterCode from '@/components/typeWriter';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const parallaxValue = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const isMobile = typeof window !== 'undefined' && window?.innerWidth < 768 ;

  return (
    <section
      ref={heroRef}
      className="relative z-10 pt-32 pb-20 min-h-screen flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <CryptoCanvas />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#030014]"
        style={{ opacity: Math.min(scrollY / 500, 1) }}
      ></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <Badge className="bg-white/5 text-cyan-400 hover:bg-white/10 transition-colors px-3 py-1 backdrop-blur-sm border border-white/10">
              <span className="animate-pulse mr-2">•</span> Crypto Education
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Master the{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 animate-gradient">
                  Crypto
                </span>
              </span>{" "}
              <FlipWords className="text-white" words={['Revolution', 'Uprising', 'Transformation']} />
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Unlock the secrets of cryptocurrency, trading strategies, and
              blockchain fundamentals with our award-winning courses designed
              for beginners and intermediate learners.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="relative overflow-hidden group h-14 px-8">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-cyan-400"></span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-fuchsia-600 to-cyan-400 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></span>
                <span className="relative z-10 text-lg">Start Learning</span>
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 relative"
            style={{
              transform: isMobile
                ? "none"
                : `translateY(${-parallaxValue.get() * 0.2}px)`,
            }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-600 to-cyan-400 rounded-2xl blur-md opacity-70 animate-pulse-slow"></div>
              <div className="relative min-h-[530px]  bg-[#0D0D25]/80 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 p-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-600 to-cyan-400"></div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-white/50">
                    crypto-basics.md
                  </div>
                </div>
                <TypewriterCode className="text-xs md:text-sm overflow-x-auto text-white/90 font-mono">
                  {`# Cryptocurrency Fundamentals

## What is Cryptocurrency?
A digital or virtual currency that uses 
cryptography for security and operates on 
a technology called blockchain.

## Key Concepts:
- Decentralization
- Blockchain Technology
- Public & Private Keys
- Mining & Consensus Mechanisms
- Wallets & Security

## Popular Cryptocurrencies:
- Bitcoin (BTC): Digital gold, store of value
- Ethereum (ETH): Smart contract platform
- Solana (SOL): High-performance blockchain
- Cardano (ADA): Research-driven approach`}
                </TypewriterCode>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-[#0D0D25]/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">BTC Price</div>
                    <div className="text-lg font-bold">$62,842.21</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-[#0D0D25]/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-white/70">Market Cap</div>
                    <div className="text-lg font-bold">$2.3T</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;