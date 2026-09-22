'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const STORIES = [
  {
    category: 'Architecture',
    date: 'March 20, 2026',
    title: 'A New Standard in Digital Excellence',
    description:
      'Engineered with micro-interactions and high-velocity rendering pipelines for dark luxury design systems.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'Innovation',
    date: 'February 14, 2026',
    title: 'From Strategy to High-Velocity Execution',
    description:
      'How we partnered with global financial entities to scale enterprise AI automation with absolute security.',
    image:
      'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'Design Systems',
    date: 'January 28, 2026',
    title: 'Minimalist Aesthetics & Precision Engineering',
    description:
      'Exploring high-contrast typography, matte-black layouts, and fluid 60fps animations for executive portals.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    category: 'AI & Automation',
    date: 'January 05, 2026',
    title: 'Real-Time Neural Visibility Engine',
    description:
      'Unifying unstructured customer feedback and LLM sentiment data into real-time decision analytics.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function StandsOut() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const track = trackRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !track || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Total scrollable width of the track minus the visible viewport width
      const totalTrackWidth = track.scrollWidth;
      const viewportWidth = window.innerWidth;
      
      // Amount to translate so the 4th (last) card stops nicely on the right edge
      const maxTranslateX = -(totalTrackWidth - viewportWidth + 48);

      gsap.to(track, {
        x: maxTranslateX,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=150%', // Controlled scroll distance before unpinning
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-between py-6 sm:py-8"
    >
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] h-[400px] bg-[#5dc192]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* SECTION HEADER */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-20 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 shrink-0">
        <div className="space-y-2">
          
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            What makes us stand out.
          </h2>
        </div>

     
      </div>

      {/* HORIZONTAL CARDS TRACK CONTAINER */}
      <div className="w-full overflow-hidden py-2 z-10">
        <div
          ref={trackRef}
          className="flex gap-3 px-6 sm:px-12 lg:px-20 w-max transition-transform ease-linear"
        >
          {STORIES.map((story, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="aspect-square h-[320px] sm:h-[380px] lg:h-[350px] shrink-0 rounded-3xl border border-white/15 p-6 sm:p-8 lg:p-10 flex flex-col justify-between relative shadow-2xl overflow-hidden group transition-all duration-300 hover:border-[#5dc192]/50"
            >
              {/* BACKGROUND IMAGE WITH DARK GRADIENT OVERLAY */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover object-center scale-105 transition-transform duration-700 group-hover:scale-110 opacity-35"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
              </div>

             

              {/* CARD MAIN CONTENT */}
              <div className="relative z-10 space-y-2.5 my-auto">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-light tracking-tight text-white leading-tight">
                  {story.title}
                </h3>
                <p className="text-neutral-300 text-xs sm:text-sm font-normal leading-relaxed line-clamp-3">
                  {story.description}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM PROGRESS LINE */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-20 z-10 flex justify-between items-center text-[11px] font-mono text-neutral-500 shrink-0">
        <span>01 / 0{STORIES.length}</span>
        <span>HORIZONTAL GALLERY ARCHITECTURE</span>
      </div>
    </section>
  );
}