'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

import storyImg from '@/assets/about-story-img/1.png';

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header Entrance
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Card Entrance
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white pt-2 pb-10 px-6 sm:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10 relative z-10">
        
        {/* TOP HEADER ROW */}
        <div
          ref={headerRef}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] max-w-2xl text-white">
            How it all began
          </h2>

          <div>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-white bg-black/80 hover:bg-black rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md group">
              <span>Partner With Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* FEATURED STORY SPLIT CARD - DARK THEME WITH COMPACT HEIGHT & ROUNDED CORNERS */}
        <div
          ref={cardRef}
          className="w-full grid grid-cols-1 lg:grid-cols-2 bg-black border border-neutral-900 shadow-2xl rounded-3xl overflow-hidden p-3 sm:p-4 gap-4"
        >
          {/* LEFT SIDE CONTENT */}
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10 space-y-5">
            {/* TAG BADGE */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#5dc192]" />
              <span>Our Story</span>
            </div>

            {/* MAIN QUOTE */}
            <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white leading-[1.2]">
              At Axstar, innovation is more than a goal, it’s in our DNA. We build technology that empowers businesses to grow and thrive.
            </h3>

            {/* SUBTEXT DESCRIPTION */}
            <p className="text-neutral-400 text-sm sm:text-base font-normal leading-relaxed max-w-md">
              From a small team to a dynamic hub of digital innovation, we create intelligent, future ready solutions.
            </p>
          </div>

          {/* RIGHT SIDE FEATURED IMAGE */}
          <div className="relative w-full h-[260px] sm:h-[320px] lg:h-auto rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
            <Image
              src={storyImg}
              alt="Story Featured Image"
              fill
              className="object-cover object-center opacity-90"
            />
            {/* OVERLAY LOGO WATERMARK */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center p-6">
              <span className="text-3xl sm:text-5xl font-black font-mono tracking-tighter text-white opacity-90 drop-shadow-lg" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}