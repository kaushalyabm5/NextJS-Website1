'use client';

import React from 'react';
import Image from 'next/image';
import { User } from 'lucide-react';
import aboutHeroImg from '@/assets/about-img/about-hero.png';

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      
      {/* BACKGROUND IMAGE WITH OVERLAY FADE */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={aboutHeroImg}
          alt="About Hero Background"
          fill
          priority
          className="object-cover object-center opacity-40"
        />
        {/* Top & Bottom Vignette Fades to Seamlessly Blend into Dark Page */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center space-y-6">
        
        {/* PILL BADGE WITH ICON */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-neutral-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md shadow-2xl">
          <User className="w-3.5 h-3.5 text-neutral-300" />
          <span>ABOUT</span>
        </div>

        {/* HERO TITLE */}
        <h1 className="text-5xl sm:text-7xl font-semibold tracking-tight text-white leading-[1.08] max-w-3xl">
          Driving Innovation with Expertise.
        </h1>

        {/* SUBTITLE */}
        <p className="text-neutral-300 text-[1.2rem] font-medium tracking-wide max-w-md leading-relaxed">
         
          Empowering businesses through technology, strategy, and growth.

        </p>
      </div>
    </section>
  );
}