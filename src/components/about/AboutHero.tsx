'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white flex flex-col justify-center items-center px-6 py-24 overflow-hidden transition-colors duration-300">
      {/* Background Micro-Gradients & Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.04)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-neutral-200/50 dark:from-neutral-800/20 to-transparent blur-3xl opacity-60 dark:opacity-50 pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Rounded Pill Badge */}
      

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-neutral-900 dark:text-white leading-[1.1] mb-6">
          Driving Innovation with <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500 font-semibold">
            Expertise.
          </span>
        </h1>

        {/* Small Description */}
        <p className="max-w-2xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal transition-colors duration-300">
          Axstar empowers businesses with cutting-edge tech and strategic consulting. We build the bridges between today's challenges and tomorrow's growth.
        </p>
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none opacity-60 dark:opacity-40" 
      />
    </section>
  );
}