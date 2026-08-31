'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function WhatWeDo() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const leftImgRef = useRef<HTMLDivElement>(null);
  const rightImgRef = useRef<HTMLDivElement>(null);
  const largeImgRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const textContainer = textContainerRef.current;
    const leftImg = leftImgRef.current;
    const rightImg = rightImgRef.current;
    const largeImg = largeImgRef.current;

    if (!section || !textContainer || !leftImg || !rightImg || !largeImg) return;

    const ctx = gsap.context(() => {
      // Calculate dynamic stack offset for left image onto right image
      const getStackDistance = () => {
        const leftRect = leftImg.getBoundingClientRect();
        const rightRect = rightImg.getBoundingClientRect();
        return rightRect.left - leftRect.left;
      };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: '+=400%',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Initial Reveal (Centered Text + Flanking Corner Images)
      tl.fromTo(
        [leftImg, rightImg],
        { opacity: 0, scale: 0.88 },
        { opacity: 1, scale: 1, duration: 1.2, ease: 'power2.out' },
        'start'
      )
      .fromTo(
        [tagRef.current, titleRef.current, descRef.current, buttonRef.current],
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power2.out' },
        'start+=0.2'
      )

      // 2. Choreographed Separation: Text shifts to Left, Left Image glides to Right Stack
      .to(
        textContainer,
        {
          x: '-25vw', // Smoothly glides text to the left side
          ease: 'power2.inOut',
          duration: 2.5,
        },
        'split'
      )
      .to(
        leftImg,
        {
          x: () => getStackDistance(),
          rotate: -6,
          scale: 0.98,
          ease: 'power2.inOut',
          duration: 2.5,
        },
        'split'
      )
      .to(
        rightImg,
        {
          rotate: 3,
          scale: 0.95,
          ease: 'power2.inOut',
          duration: 2.5,
        },
        'split'
      )

      // 3. Merge & Blur: Dual Images dissolve into the Large Showcase Card
      .to(
        [leftImg, rightImg],
        {
          scale: 0.8,
          opacity: 0,
          filter: 'blur(16px)',
          duration: 1.2,
          ease: 'power3.in',
        },
        'synthesize'
      )
      .fromTo(
        largeImg,
        { opacity: 0, scale: 0.88, filter: 'blur(12px)' },
        { 
          opacity: 1, 
          scale: 1, 
          filter: 'blur(0px)', 
          duration: 1.6, 
          ease: 'power3.out' 
        },
        'synthesize+=0.3'
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300"
    >
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-12 flex items-center justify-center">
        
        {/* Centered Text Content (Glides Left on Scroll) */}
        <div 
          ref={textContainerRef}
          className="max-w-xl z-20 flex flex-col items-start pr-6 will-change-transform"
        >
          {/* Eyebrow Tag */}
          <div
            ref={tagRef}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm opacity-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>[ STRATEGIC CAPABILITY ]</span>
          </div>

          {/* Main Title */}
          <h2
            ref={titleRef}
            className="text-4xl sm:text-6xl font-normal tracking-tight leading-[1.05] mb-6 text-neutral-900 dark:text-white opacity-0"
          >
            Turning intent into{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
              impact.
            </span>
          </h2>

          {/* Description */}
          <p
            ref={descRef}
            className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-8 max-w-lg opacity-0"
          >
            We eliminate structural complexity to build low-latency, resilient digital systems engineered to scale alongside your strategic ambition.
          </p>

          {/* Action Button */}
          <a
            ref={buttonRef}
            href="#explore"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-black font-semibold text-xs tracking-wider uppercase rounded-2xl transition-all active:scale-95 shadow-xl opacity-0"
          >
            <span>Explore Architecture</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Far Left Flanking Image */}
        <div
          ref={leftImgRef}
          className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl z-20 bg-neutral-900 opacity-0 will-change-transform"
        >
          <img
            src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80"
            alt="Initial Strategy Spec"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Far Right Flanking Image (Stack Destination) */}
        <div
          ref={rightImgRef}
          className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 w-[220px] sm:w-[260px] aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl z-10 bg-neutral-900 opacity-0"
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
            alt="Execution Framework"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Large Primary Image Reveal */}
        <div
          ref={largeImgRef}
          className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] aspect-[16/11] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl z-30 bg-neutral-900 opacity-0 pointer-events-none"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Unified Architectural Platform"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 px-4 py-1.5 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full text-white font-mono text-xs uppercase tracking-widest">
            Axstar // Unified Architecture
          </div>
        </div>

      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </section>
  );
}