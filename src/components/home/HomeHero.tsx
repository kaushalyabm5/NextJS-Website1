'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function HomeHero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="relative w-full min-h-[90vh] bg-white dark:bg-black text-neutral-900 dark:text-white flex flex-col justify-center items-center px-6 py-24 overflow-hidden transition-colors duration-300" />
    );
  }

  return (
    <section className="relative w-full min-h-[90vh] bg-white dark:bg-black text-neutral-900 dark:text-white flex flex-col justify-center items-center px-6 py-24 overflow-hidden transition-colors duration-300">
      
      {/* ------------------------------------------------------------------- */}
      {/* SINGLE COLOR (#00d9aa) AMBIENT GLOWS */}
      {/* ------------------------------------------------------------------- 
      <div 
        className="absolute top-10 left-10 w-80 h-80 blur-[120px] pointer-events-none rounded-full opacity-25 dark:opacity-30"
        style={{ backgroundColor: '#00d9aa' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-80 h-80 blur-[120px] pointer-events-none rounded-full opacity-25 dark:opacity-30"
        style={{ backgroundColor: '#00d9aa' }}
      />*/}

      {/* Grid Pattern Overlay 
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-60 dark:opacity-40" 
      />
*/}
      {/* ------------------------------------------------------------------- */}
      {/* FLOATING WIDGETS AROUND CONTENT (#00d9aa THEMED) */}
      {/* ------------------------------------------------------------------- */}

      {/* 1. TOP LEFT: SYSTEM STATUS 
      <div 
        className="hidden lg:flex absolute top-24 left-10 xl:left-20 z-20 items-center gap-3.5 bg-white/90 dark:bg-neutral-950/90 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md transition-all hover:scale-105 duration-300"
        style={{ border: '1px solid rgba(0, 217, 170, 0.3)' }}
      >
        <div 
          className="p-2 rounded-xl text-black font-bold shadow-md"
          style={{ backgroundColor: '#00d9aa' }}
        >
          <Activity className="w-4 h-4" />
        </div>
        <div className="text-left font-mono">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] uppercase text-neutral-500 dark:text-neutral-400">System Performance</span>
          </div>
          <p className="text-xs font-bold text-neutral-900 dark:text-neutral-100">
            <span style={{ color: '#00d9aa' }}>99.99%</span> Operational
          </p>
        </div>
      </div>*/}

      {/* 2. TOP RIGHT: LIVE NETWORK BADGE 
      <div 
        className="hidden lg:flex absolute top-20 right-10 xl:right-20 z-20 items-center gap-3 bg-white/90 dark:bg-neutral-950/90 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md transition-all hover:scale-105 duration-300"
        style={{ border: '1px solid rgba(0, 217, 170, 0.3)' }}
      >
        <div className="relative flex h-3 w-3 items-center justify-center">
          <span 
            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: '#00d9aa' }}
          />
          <span 
            className="relative inline-flex rounded-full h-2.5 w-2.5"
            style={{ backgroundColor: '#00d9aa' }}
          />
        </div>
        <div className="text-left">
          <p className="text-[10px] font-mono uppercase font-bold tracking-wider" style={{ color: '#00d9aa' }}>
            Live Node
          </p>
          <p className="text-xs font-semibold text-neutral-900 dark:text-white">Global Deployment</p>
        </div>
      </div>*/}

      {/* 3. BOTTOM LEFT: SPEED & LATENCY CHIP 
      <div 
        className="hidden xl:flex absolute bottom-24 left-12 z-20 items-center gap-3.5 bg-white/90 dark:bg-neutral-950/90 px-4.5 py-3 rounded-2xl shadow-xl backdrop-blur-md transition-all hover:scale-105 duration-300"
        style={{ border: '1px solid rgba(0, 217, 170, 0.3)' }}
      >
        <div 
          className="p-2 rounded-xl text-black shadow-md"
          style={{ backgroundColor: '#00d9aa' }}
        >
          <Zap className="w-4 h-4" />
        </div>
        <div className="text-left">
          <p className="text-xs font-bold text-neutral-900 dark:text-white">
            <span style={{ color: '#00d9aa' }}>&lt; 10ms</span> Latency
          </p>
          <p className="text-[10px] font-mono text-neutral-500 dark:text-neutral-400">High Speed Engine</p>
        </div>
      </div>*/}

      {/* 4. BOTTOM RIGHT: SECURITY BADGE 
      <div 
        className="hidden lg:flex absolute bottom-24 right-12 z-20 items-center gap-3 bg-white/90 dark:bg-neutral-950/90 px-4 py-3 rounded-2xl shadow-xl backdrop-blur-md transition-all hover:scale-105 duration-300"
        style={{ border: '1px solid rgba(0, 217, 170, 0.3)' }}
      >
        <div 
          className="p-2 rounded-xl text-black"
          style={{ backgroundColor: '#00d9aa' }}
        >
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="text-left font-mono">
          <p className="text-xs font-bold text-neutral-900 dark:text-white">Enterprise Ready</p>
          <p className="text-[10px]" style={{ color: '#00d9aa' }}>Zero-trust security</p>
        </div>
      </div>*/}

      {/* ------------------------------------------------------------------- */}
      {/* MAIN HERO CONTENT */}
      {/* ------------------------------------------------------------------- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* TRUSTED PARTNERS PILL (ABOVE TITLE) */}
        <div 
          className="mb-8 inline-flex items-center gap-3 bg-white/90 dark:bg-neutral-950/90 px-4 py-1.5 rounded-full shadow-lg backdrop-blur-md transition-all duration-300"
          style={{ border: '1px solid rgba(0, 217, 170, 0.3)' }}
        >
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800 border-2 border-white dark:border-black flex items-center justify-center text-[9px] font-bold text-neutral-900 dark:text-white">
              AX
            </div>
            <div className="w-6 h-6 rounded-full bg-neutral-300 dark:bg-neutral-700 border-2 border-white dark:border-black flex items-center justify-center text-[9px] font-bold text-neutral-900 dark:text-white">
              CC
            </div>
            <div 
              className="w-6 h-6 rounded-full text-black border-2 border-white dark:border-black flex items-center justify-center text-[8px] font-extrabold"
              style={{ backgroundColor: '#5dc192' }}
            >
              +50
            </div>
          </div>
          <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 tracking-wide pr-1">
            Trusted Partners
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
          Architecting the future of <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
            autonomous systems.
          </span>
        </h1>

        {/* Small Description */}
        <p className="max-w-2xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-10 transition-colors duration-300">
          We engineer high-performance digital platforms and enterprise-grade software engines designed for scale, speed, and absolute reliability.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="#explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#5dc192] hover:bg-neutral-800 dark:bg-[#5dc192] dark:hover:bg-neutral-200 text-white dark:text-black font-semibold text-sm tracking-wide transition-all active:scale-95 rounded-xl shadow-lg"
          >
            <span>Explore Platform</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#documentation"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white font-medium text-sm tracking-wide transition-all hover:bg-neutral-200 dark:hover:bg-neutral-900 hover:border-neutral-300 dark:hover:border-neutral-700 active:scale-95 rounded-xl"
          >
            Documentation
          </a>
        </div>

      </div>

    </section>
  );
}