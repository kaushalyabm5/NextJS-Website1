'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import imgOne from '@/assets/what-to-do/1.png';
import imgTwo from '@/assets/what-to-do/2.png';

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const imageOneRef = useRef<HTMLDivElement>(null);
  const imageTwoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const leftContent = leftContentRef.current;
    const img1 = imageOneRef.current;
    const img2 = imageTwoRef.current;

    if (!section || !leftContent || !img1 || !img2) return;

    const mm = gsap.matchMedia();

    // DESKTOP ANIMATION (lg screens and above)
    mm.add('(min-width: 1024px)', () => {
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

      // 1. Left side content animates in
      tl.fromTo(
        leftContent.children,
        { opacity: 0, y: 60, filter: 'blur(10px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)', 
          duration: 1.5, 
          stagger: 0.3, 
          ease: 'power2.out' 
        },
        'enter'
      )
      // 2. Image 1 animates in from bottom
      .fromTo(
        img1,
        { opacity: 0, y: '120%', rotateX: 20, rotateZ: -6, scale: 0.85 },
        { opacity: 1, y: '0%', rotateX: 0, rotateZ: -2, scale: 1, duration: 2, ease: 'power2.out' },
        'enter'
      )
      // 3. Image 2 animates in simultaneously with counter-rotation
      .fromTo(
        img2,
        { opacity: 0, y: '-120%', rotateX: -20, rotateZ: 8, scale: 0.85 },
        { opacity: 1, y: '0%', rotateX: 0, rotateZ: 3, scale: 1, duration: 2, ease: 'power2.out' },
        'enter'
      )
      // 4. Deeper scroll phase offset
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
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen lg:h-screen bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300 flex items-center py-12 lg:py-0"
    >
      <div className="relative z-10 max-w-full w-full mx-auto h-full px-5 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center content-center">
        
        {/* LEFT COLUMN: MAIN TITLE & DESCRIPTION */}
        <div 
          ref={leftContentRef} 
          className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-8 z-20 will-change-transform"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-6 text-neutral-900 dark:text-white">
            The convergence of technology {' '}
            <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:text-white">
              and growth.
            </span>
          </h2>

          <p className="text-[1rem] text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal lg:font-thin max-w-lg">
           At Axstar, we bring engineering precision and marketing strategy under one roof. We
architect low-latency, resilient systems built to scale alongside your ambition, then amplify
them with data-driven campaigns that convert reach into results. The outcome is a digital
presence that performs technically and delivers commercially.

          </p>
        </div>

        {/* RIGHT COLUMN: SINGLE STATIC IMAGE ON MOBILE, DUAL ANIMATED IMAGES ON DESKTOP */}
        <div 
          className="lg:col-span-6 relative w-full flex items-center justify-center gap-6"
          style={{ perspective: '1200px' }}
        >
          {/* IMAGE 1 (STATIC UNDER TEXT ON MOBILE, ANIMATED ON DESKTOP) */}
          <div
            ref={imageOneRef}
            className="w-full lg:w-1/2 h-[320px] sm:h-[420px] lg:h-[440px] relative rounded-2xl lg:rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden will-change-transform group"
          >
            <Image
              src={imgOne}
              alt="System Architecture"
              fill
              priority
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
          </div>

          {/* IMAGE 2 (HIDDEN ON MOBILE) */}
          <div
            ref={imageTwoRef}
            className="hidden lg:block w-1/2 h-[440px] relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-2xl overflow-hidden will-change-transform group"
          >
            <Image
              src={imgTwo}
              alt="Execution Framework"
              fill
              priority
              className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}