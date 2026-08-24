// components/HomeHero.tsx
import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-black text-white flex flex-col justify-center items-center px-6 py-24 overflow-hidden border-b border-neutral-900">
      {/* Background Micro-Gradients & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-neutral-800/20 to-transparent blur-3xl opacity-50 pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Rounded Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 bg-neutral-950 border border-neutral-800 text-neutral-400 text-xs uppercase tracking-widest rounded-full shadow-inner">
          <Terminal className="w-3.5 h-3.5 text-white" />
          <span>Next-Gen Infrastructure</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-6">
          Architecting the future of <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500">
            autonomous systems.
          </span>
        </h1>

        {/* Small Description */}
        <p className="max-w-2xl text-base sm:text-lg text-neutral-400 leading-relaxed font-normal mb-10">
          We engineer high-performance digital platforms and enterprise-grade software engines designed for scale, speed, and absolute reliability.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          {/* Primary CTA */}
          <a
            href="#explore"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold text-sm tracking-wide transition-all hover:bg-neutral-200 active:scale-95 rounded-xl shadow-lg shadow-white/5"
          >
            <span>Explore Platform</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#documentation"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neutral-950 border border-neutral-800 text-white font-medium text-sm tracking-wide transition-all hover:bg-neutral-900 hover:border-neutral-700 active:scale-95 rounded-xl"
          >
            Documentation
          </a>
        </div>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-40" 
      />
    </section>
  );
}