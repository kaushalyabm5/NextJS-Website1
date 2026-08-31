'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    id: 'sixnity',
    title: 'Sixnity Platform',
    category: 'FINTECH & WEALTH',
    description: 'Next-generation institutional wealth engine built with high-frequency UI interactions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    link: '/projects/sixnity',
  },
  {
    id: 'confluence-capital',
    title: 'Confluence Capital',
    category: 'ASSET MANAGEMENT',
    description: 'Dark luxury digital brand presence for private equity venture portfolios.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    link: '/projects/confluence-capital',
  },
  {
    id: 'aether-suite',
    title: 'Aether 3D Studio',
    category: 'CREATIVE TECH',
    description: 'Immersive WebGL canvas showcase featuring real-time interactive asset rendering.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    link: '/projects/aether-suite',
  },
  {
    id: 'apex-pulse',
    title: 'Apex Pulse',
    category: 'SAAS ENGINE',
    description: 'Scalable cloud telemetry dashboard managing millions of concurrent data streams.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    link: '/projects/apex-pulse',
  },
];

export default function ProjectsAndCTA() {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pinContainer = pinContainerRef.current;
    const track = trackRef.current;

    if (!pinContainer || !track) return;

    const ctx = gsap.context(() => {
      // Calculate total horizontal scroll distance (100vw = width of CTA Panel)
      const totalScrollWidth = track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: -totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: pinContainer,
          pin: true,
          start: 'top top',
          end: `+=${totalScrollWidth}`,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, pinContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={pinContainerRef}
      className="relative w-full h-screen overflow-hidden bg-white dark:bg-black text-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-900"
    >
      {/* HORIZONTAL TRACK (PROJECTS + CTA SIDE BY SIDE) */}
      <div
        ref={trackRef}
        className="flex w-max h-full items-center"
      >
        
        {/* PANEL 1: PROJECT SHOWCASE (Full Viewport Width) */}
        <section className="w-screen h-screen shrink-0 relative px-6 sm:px-12 py-12 flex flex-col justify-between">
          
          {/* HEADER */}
          <div className="max-w-2xl space-y-3 pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>[ SELECTED WORKS ]</span>
            </div>

            <h2 className="text-3xl sm:text-6xl font-normal tracking-tight text-neutral-900 dark:text-white">
              Project{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
                Showcase
              </span>
            </h2>
          </div>

          {/* HORIZONTAL CARDS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full my-auto">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={project.link}
                className="group relative w-full aspect-[3/4] rounded-3xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-neutral-900 shadow-xl transition-all duration-500 hover:shadow-2xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Top Right Arrow */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Text Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-right flex flex-col items-end">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-neutral-300 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* BOTTOM SCROLL INDICATOR */}
          <div className="flex items-center justify-between pb-4 font-mono text-xs text-neutral-400 uppercase tracking-widest">
            <span>Scroll Down to Slide horizontally →</span>
            <span>01 / 02</span>
          </div>
        </section>

        {/* PANEL 2: CTA SECTION (Slides seamlessly into view) */}
        <section className="w-screen h-screen shrink-0 relative flex items-center justify-center bg-white dark:bg-black border-l border-neutral-200 dark:border-neutral-900">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>[ START A PROJECT ]</span>
            </div>

            <h2 className="text-4xl sm:text-7xl font-normal tracking-tight leading-tight text-neutral-900 dark:text-white">
              Ready to Sync Your{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
                Success?
              </span>
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-xl font-normal tracking-wide max-w-xl mx-auto">
              We’re here to transform your ideas into high-performing digital experiences. Let’s make it happen.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold text-sm sm:text-base tracking-wide shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <span>Let's Talk</span>
                <div className="w-7 h-7 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </div>
          </div>

          {/* Ambient Accent Glow */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-neutral-300/20 to-neutral-500/10 dark:from-neutral-800/20 dark:to-neutral-900/10 blur-3xl pointer-events-none" />
        </section>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </div>
  );
}