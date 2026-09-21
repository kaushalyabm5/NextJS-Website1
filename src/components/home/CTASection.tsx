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
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'top top',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      tl.fromTo(
        card,
        {
          yPercent: 25,
          scale: 0.94,
          borderRadius: '32px',
          filter: 'brightness(0.5)',
        },
        {
          yPercent: 0,
          scale: 1,
          borderRadius: '0px',
          filter: 'brightness(1)',
          ease: 'power2.out',
        }
      );

      tl.fromTo(
        content,
        {
          opacity: 0,
          y: 50,
          filter: 'blur(12px)',
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
        className="relative w-full bg-black text-white flex items-center justify-center overflow-hidden"
      >
        

        {/* CENTERED OPEN CONTENT (Clean Full Bleed without Container Box) */}
        <div
          ref={contentRef}
          className="relative z-20 max-w-5xl mx-auto px-6 py-12 sm:px-12 text-center flex flex-col items-center justify-center space-y-8"
        >
          {/* TAG BADGE */}
         

          {/* MAIN TITLE */}
          <h2 className="text-[5rem] font-medium tracking-tight leading-[1.1] text-white">
            Ready to Sync Your{' '}
            <span className="">
              Success?
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="text-neutral-100 text-base sm:text-xl font-normal tracking-wide max-w-2xl leading-relaxed">
            We transform ambitious vision into high-precision digital architecture. Let’s collaborate and build something exceptional.
          </p>

          {/* GLOWING BORDER ACTION BUTTON (Matching Reference Style) */}
          <div className="pt-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center p-0.5 rounded-full bg-gradient-to-r from-[#5dc192]/80 via-white/40 to-[#5dc192]/80 hover:from-[#5dc192] hover:to-[#5dc192] transition-all duration-500 shadow-[0_0_35px_rgba(93,193,146,0.25)] hover:shadow-[0_0_50px_rgba(93,193,146,0.5)] hover:scale-105"
            >
              <div className="px-8 py-3.5 rounded-full bg-black flex items-center gap-3 transition-colors duration-300 group-hover:bg-black/90">
                <span className="text-sm sm:text-base font-semibold tracking-wide text-white">
                  Let's Talk
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#5dc192] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}