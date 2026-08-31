'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Stage 1 Elements (Splitting Left and Right)
  const titleRef = useRef<HTMLHeadingElement>(null);
  const initialSubTextRef = useRef<HTMLParagraphElement>(null);

  // Stage 2 Elements (Main Content & Single Left Image)
  const leftImageRef = useRef<HTMLDivElement>(null);
  const rightDescriptionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // MASTER PINNED SCROLL TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: 'top top',
          end: '+=180%', // Pinned scroll distance to reveal Stage 2 and rest on screen
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // -------------------------------------------------------------
      // STAGE 1 -> STAGE 2: SPLIT TITLE & INITIAL SUB-TEXT
      // -------------------------------------------------------------
      tl.to(
        titleRef.current,
        {
          xPercent: -150,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.inOut',
        },
        0
      )
      .to(
        initialSubTextRef.current,
        {
          xPercent: 150,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.inOut',
        },
        0
      )

      // -------------------------------------------------------------
      // STAGE 2 ENTRANCE: LEFT 1:1 IMAGE & RIGHT DESCRIPTION REVEAL
      // -------------------------------------------------------------
      .fromTo(
        leftImageRef.current,
        {
          xPercent: -100,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=0.5'
      )
      .fromTo(
        rightDescriptionRef.current,
        {
          xPercent: 80,
          opacity: 0,
        },
        {
          xPercent: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'power3.out',
        },
        '<'
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300 flex items-center justify-center"
    >
      {/* ------------------------------------------------------------------- */}
      {/* STAGE 1: INITIAL CENTERED LAYOUT (SPLITS ON SCROLL) */}
      {/* ------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center max-w-6xl mx-auto space-y-6 pointer-events-none">
        
        {/* LARGER AND BOLDER CENTER TITLE */}
        <h2
          ref={titleRef}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] font-extrabold tracking-tighter text-neutral-900 dark:text-white uppercase leading-none"
        >
          Who We Are
        </h2>

        {/* SMALL CENTER SUB-DESCRIPTION */}
        <p
          ref={initialSubTextRef}
          className="text-base sm:text-xl text-neutral-600 dark:text-neutral-400 font-normal max-w-xl leading-relaxed"
        >
          Architecting high-performance digital foundations and intelligent software ecosystems for high-scale enterprise operations.
        </p>

      </div>

      {/* ------------------------------------------------------------------- */}
      {/* STAGE 2: 1:1 ROUNDED LEFT IMAGE & RIGHT DESCRIPTION */}
      {/* ------------------------------------------------------------------- */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full gap-12 lg:gap-20">
        
        {/* SINGLE 1:1 SQUARE IMAGE WITH ROUNDED CORNERS */}
        <div
          ref={leftImageRef}
          className="w-full md:w-1/2 max-w-md aspect-square rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl shrink-0 hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
            alt="Axstar Engineering & Innovation"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT DESCRIPTION BLOCK */}
        <div
          ref={rightDescriptionRef}
          className="w-full md:w-1/2 text-left space-y-6"
        >
          <h3 className="text-2xl sm:text-4xl font-normal tracking-tight leading-snug text-neutral-900 dark:text-white">
            Axstar is a modern software and technology company dedicated to building{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
              smart, scalable digital solutions.
            </span>
          </h3>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            We combine expert engineering, innovative technology, and strategic insight to transform complex business challenges into high-performance software that drives measurable growth.
          </p>

          <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-500 leading-relaxed font-normal">
            From custom applications and AI-driven automation to seamless digital experiences, we empower businesses to innovate, optimize, and scale with confidence. At Axstar, we don’t just develop software—we create the digital foundation for your future success.
          </p>
        </div>

      </div>

      {/* BACKGROUND ARCHITECTURAL GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </div>
  );
}