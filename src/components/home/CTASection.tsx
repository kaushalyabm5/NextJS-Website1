'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CTASection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const card = cardRef.current;
    const content = contentRef.current;

    if (!container || !card || !content) return;

    const ctx = gsap.context(() => {
      // Overlap Curtain Animation Timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top bottom', // Begins when the top of CTA hits the bottom of viewport
          end: 'top top',     // Fully covers the previous section when top hits top
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // Slide up over previous section with scaling and depth expansion
      tl.fromTo(
        card,
        {
          yPercent: 30,
          scale: 0.92,
          borderRadius: '40px',
          filter: 'brightness(0.6)',
        },
        {
          yPercent: 0,
          scale: 1,
          borderRadius: '0px',
          filter: 'brightness(1)',
          ease: 'power2.out',
        }
      );

      // Inner text & button reveal
      tl.fromTo(
        content,
        {
          opacity: 0,
          y: 60,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=0.4'
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative z-30 w-full bg-transparent">
      <section
        ref={cardRef}
        className="relative w-full min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white flex items-center justify-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.3)] transition-colors duration-300"
      >
        {/* CENTERED CONTENT BOX */}
        <div
          ref={contentRef}
          className="relative z-20 max-w-4xl mx-auto px-6 sm:px-12 text-center flex flex-col items-center justify-center space-y-8"
        >
          {/* TAG BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>[ START A PROJECT ]</span>
          </div>

          {/* MAIN TITLE */}
          <h2 className="text-4xl sm:text-7xl font-normal tracking-tight leading-tight text-neutral-900 dark:text-white">
            Ready to Sync Your{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
              Success?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-xl font-normal tracking-wide max-w-2xl leading-relaxed">
            We’re here to transform your ideas into high-performing digital experiences. Let’s make it happen.
          </p>

          {/* CENTERED CTA BUTTON */}
          <div className="pt-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold text-sm sm:text-base tracking-wide shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-neutral-800 dark:hover:bg-neutral-100"
            >
              <span>Let's Talk</span>
              <div className="w-7 h-7 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* AMBIENT BACKGROUND GLOW ACCENTS */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-neutral-300/30 to-neutral-500/10 dark:from-neutral-800/30 dark:to-neutral-900/10 blur-3xl pointer-events-none" />
        
        {/* GRID OVERLAY MATCHING PREVIOUS SECTIONS */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
      </section>
    </div>
  );
}