'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MissionVision() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Stage 1: Mission
  const missionCardRef = useRef<HTMLDivElement>(null);
  const missionTextRef = useRef<HTMLDivElement>(null);
  const missionImageRef = useRef<HTMLDivElement>(null);

  // Stage 2: Vision
  const visionCardRef = useRef<HTMLDivElement>(null);
  const visionTextRef = useRef<HTMLDivElement>(null);
  const visionImageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // MASTER PINNED TIMELINE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          pin: true,
          start: 'top top',
          end: '+=250%', // Pinned distance for smooth multi-step scroll transition
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // -------------------------------------------------------------
      // TRANSITION: MISSION EXIT & VISION ENTRANCE
      // -------------------------------------------------------------

      // 1. Mission Text & Image split away with rotation & warp
      tl.to(
        missionTextRef.current,
        {
          xPercent: -120,
          scale: 0.8,
          opacity: 0,
          rotationY: -15,
          duration: 1.5,
          ease: 'power3.inOut',
        },
        0
      )
      .to(
        missionImageRef.current,
        {
          xPercent: 120,
          scale: 0.8,
          opacity: 0,
          rotationY: 15,
          duration: 1.5,
          ease: 'power3.inOut',
        },
        0
      )

      // 2. Vision Section enters from behind with inverse spatial warp
      .fromTo(
        visionCardRef.current,
        {
          pointerEvents: 'none',
        },
        {
          pointerEvents: 'auto',
          duration: 0.1,
        },
        0.5
      )
      .fromTo(
        visionImageRef.current,
        {
          xPercent: -120,
          scale: 0.8,
          opacity: 0,
          rotationY: -15,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        0.8
      )
      .fromTo(
        visionTextRef.current,
        {
          xPercent: 120,
          scale: 0.8,
          opacity: 0,
          rotationY: 15,
        },
        {
          xPercent: 0,
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        0.8
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300 [perspective:1200px]"
    >
      {/* ------------------------------------------------------------------- */}
      {/* STAGE 1: OUR MISSION (TEXT LEFT, IMAGE RIGHT) */}
      {/* ------------------------------------------------------------------- */}
      <div
        ref={missionCardRef}
        className="absolute inset-0 z-20 flex items-center justify-between px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full gap-12 lg:gap-20"
      >
        {/* LEFT SIDE: BOLD TITLE & THIN STATEMENT */}
        <div ref={missionTextRef} className="w-full md:w-1/2 text-left space-y-6">
          

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-neutral-900 dark:text-white uppercase leading-none">
            OUR MISSION
          </h2>

          <p className="text-base sm:text-xl md:text-2xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            To deliver high-performance software, digital solutions, and strategic consulting that simplify complexity, drive measurable results, and help our clients achieve sustainable growth.
          </p>
        </div>

        {/* RIGHT SIDE: 1:1 ROUNDED IMAGE */}
        <div
          ref={missionImageRef}
          className="w-full md:w-1/2 max-w-md aspect-square rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl shrink-0 hidden md:block"
        >
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80"
            alt="Our Mission"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* STAGE 2: OUR VISION (IMAGE LEFT, TEXT RIGHT) */}
      {/* ------------------------------------------------------------------- */}
      <div
        ref={visionCardRef}
        className="absolute inset-0 z-10 flex items-center justify-between px-8 sm:px-16 lg:px-24 max-w-7xl mx-auto w-full gap-12 lg:gap-20 pointer-events-none"
      >
        {/* LEFT SIDE: 1:1 ROUNDED IMAGE */}
        <div
          ref={visionImageRef}
          className="w-full md:w-1/2 max-w-md aspect-square rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl shrink-0 hidden md:block opacity-0"
        >
          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80"
            alt="Our Vision"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE: BOLD TITLE & THIN STATEMENT */}
        <div ref={visionTextRef} className="w-full md:w-1/2 text-left space-y-6 opacity-0">
        

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter text-neutral-900 dark:text-white uppercase leading-none">
            OUR VISION
          </h2>

          <p className="text-base sm:text-xl md:text-2xl font-light text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl">
            To empower businesses around the world with innovative technology and strategic insights, enabling them to grow, adapt, and succeed in an ever-evolving digital landscape.
          </p>
        </div>
      </div>

      {/* BACKGROUND ARCHITECTURAL GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </div>
  );
}