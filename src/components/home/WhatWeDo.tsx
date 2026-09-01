'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { Cpu, Layers } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageOneRef = useRef<HTMLDivElement>(null);
  const imageTwoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const img1 = imageOneRef.current;
    const img2 = imageTwoRef.current;

    if (!section || !img1 || !img2) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Image 1 animates in from off-screen bottom as you scroll
      tl.fromTo(
        img1,
        { opacity: 0, y: '120%', rotateX: 20, rotateZ: -6, scale: 0.85 },
        { opacity: 1, y: '0%', rotateX: 0, rotateZ: -2, scale: 1, duration: 2, ease: 'power2.out' },
        'enter'
      )
      // 2. Image 2 animates in simultaneously with counter-rotation
      .fromTo(
        img2,
        { opacity: 0, y: '-120%', rotateX: -20, rotateZ: 8, scale: 0.85 },
        { opacity: 1, y: '0%', rotateX: 0, rotateZ: 3, scale: 1, duration: 2, ease: 'power2.out' },
        'enter'
      )
      // 3. Deeper scroll phase offset
      .to(
        img1,
        { y: '-8%', rotateZ: 0, duration: 1.5, ease: 'power1.inOut' },
        'phase2'
      )
      .to(
        img2,
        { y: '8%', rotateZ: 0, duration: 1.5, ease: 'power1.inOut' },
        'phase2'
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300"
    >
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* ------------------------------------------------------------------- */}
        {/* LEFT COLUMN: MAIN TITLE & DESCRIPTION ONLY */}
        {/* ------------------------------------------------------------------- */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8 z-20">
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08] mb-6 text-neutral-900 dark:text-white">
            Turning intent into{' '}
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:text-[white]">
              impact.
            </span>
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-thin max-w-lg">
            We eliminate structural complexity to build low-latency, resilient digital systems engineered to scale alongside your strategic ambition.
          </p>
        </div>

        {/* ------------------------------------------------------------------- */}
        {/* RIGHT COLUMN: 2 SCROLL-ANIMATED SPEC IMAGES */}
        {/* ------------------------------------------------------------------- */}
        <div 
          className="lg:col-span-6 relative h-[500px] sm:h-[580px] w-full flex items-center justify-center gap-6"
          style={{ perspective: '1200px' }}
        >
          {/* IMAGE 1: FRONT/LEFT SPEC PANEL */}
          <div
            ref={imageOneRef}
            className="w-1/2 h-[380px] sm:h-[440px] relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden will-change-transform group"
          >
            <img
              src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80"
              alt="System Architecture"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
            
            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between">
        
              </div>
              <div>
              
              </div>
            </div>
          </div>

          {/* IMAGE 2: BACK/RIGHT SPEC PANEL */}
          <div
            ref={imageTwoRef}
            className="w-1/2 h-[380px] sm:h-[440px] relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden will-change-transform group"
          >
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
              alt="Execution Framework"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />

            <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
              <div className="flex items-center justify-between">
               
              
              </div>
              <div>
               
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}