'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const metricsData = [
  {
    question: "How many successful digital products have been deployed?",
    category: "PROJECTS DELIVERED",
    value: 10,
    suffix: "+",
    description: "Completed a wide range of successful projects.",
    type: "bar",
    accent: "text-amber-500 dark:text-amber-400",
    gradient: "from-amber-500 via-amber-400 to-amber-200",
    arcId: "arcGradient1",
    stopColor1: "#f59e0b",
    stopColor2: "#fbbf24",
    staggerClass: "lg:translate-y-0",
  },
  {
    question: "How broad is our reach across international borders?",
    category: "COUNTRIES SERVED",
    value: 4,
    suffix: "+",
    description: "Trusted by clients across multiple countries.",
    type: "arc",
    accent: "text-blue-500 dark:text-blue-400",
    gradient: "from-blue-500 via-blue-400 to-sky-300",
    arcId: "arcGradient2",
    stopColor1: "#3b82f6",
    stopColor2: "#60a5fa",
    staggerClass: "lg:translate-y-6",
  },
  {
    question: "How much refined industry experience do we bring?",
    category: "YEARS OF EXPERIENCE",
    value: 2,
    suffix: "+",
    description: "Years of industry expertise and knowledge.",
    type: "bar",
    accent: "text-emerald-500 dark:text-emerald-400",
    gradient: "from-emerald-500 via-emerald-400 to-teal-300",
    arcId: "arcGradient3",
    stopColor1: "#10b981",
    stopColor2: "#34d399",
    staggerClass: "lg:translate-y-12",
  },
  {
    question: "How well do our visual solutions satisfy client goals?",
    category: "CLIENT SATISFACTION",
    value: 95,
    suffix: "%",
    description: "Consistently delivering results that satisfy clients.",
    type: "arc",
    accent: "text-rose-500 dark:text-rose-400",
    gradient: "from-rose-500 via-rose-400 to-pink-300",
    arcId: "arcGradient4",
    stopColor1: "#f43f5e",
    stopColor2: "#fb7185",
    staggerClass: "lg:translate-y-18",
  },
];

export default function MetricsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // 1. Header Text Revealer Animation
      gsap.fromTo(
        '.metrics-header-text',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.metrics-header-text',
            start: 'top 85%',
          },
        }
      );

      // 2. CTA Button Pop Reveal
      gsap.fromTo(
        '.metrics-cta-btn',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.metrics-header-text',
            start: 'top 80%',
          },
        }
      );

      // 3. Staggered Grid Cards Reveal
      const cards = gsap.utils.toArray<HTMLElement>('.metric-card');

      gsap.fromTo(
        cards,
        { 
          opacity: 0, 
          y: 80, 
          scale: 0.94,
          rotateX: 10
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 0,
          duration: 1.2,
          stagger: 0.18,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: '.metrics-cards-grid',
            start: 'top 80%',
          },
        }
      );

      // 4. Counters, Progress Bars & Arcs
      cards.forEach((card) => {
        const counterEl = card.querySelector<HTMLElement>('.metric-counter');
        const targetVal = parseInt(counterEl?.getAttribute('data-target') || '0', 10);
        const progressFill = card.querySelector<HTMLElement>('.progress-fill');
        const arcCircle = card.querySelector<SVGCircleElement>('.arc-circle');

        if (counterEl) {
          const counterObj = { val: 0 };
          gsap.to(counterObj, {
            val: targetVal,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
            },
            onUpdate: () => {
              counterEl.textContent = Math.floor(counterObj.val).toString();
            },
          });
        }

        if (progressFill) {
          gsap.fromTo(
            progressFill,
            { width: '0%' },
            {
              width: `${targetVal}%`,
              duration: 1.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
              },
            }
          );
        }

        if (arcCircle) {
          const pathLength = arcCircle.getTotalLength();
          const targetOffset = pathLength - (pathLength * targetVal) / 100;

          gsap.fromTo(
            arcCircle,
            { strokeDashoffset: pathLength },
            {
              strokeDashoffset: targetOffset,
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 80%',
              },
            }
          );
        }
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-24 sm:py-32 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 border-b border-neutral-200 dark:border-neutral-900 overflow-hidden perspective-1000"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="metrics-header-text space-y-5 max-w-4xl">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight leading-[1.15] text-neutral-900 dark:text-white">
              We Turn Ideas into{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
                Visual Masterpieces
              </span>
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
              We transform your ideas into stunning visual experiences. From concept to creation, our designs combine creativity, strategy, and innovation to craft visuals that captivate, communicate, and leave a lasting impression.
            </p>
          </div>

          <div className="shrink-0 self-start lg:self-end">
            <a 
              href="#explore"
              className="metrics-cta-btn group relative inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-mono text-xs uppercase tracking-widest transition-transform duration-300 hover:scale-105 shadow-xl"
            >
              <span>Explore More</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="metrics-cards-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {metricsData.map((item, index) => (
            <div
              key={index}
              className={`metric-card rounded-3xl bg-neutral-100/80 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 p-7 sm:p-8 flex flex-col justify-between min-h-[400px] transition-all duration-300 shadow-sm hover:shadow-2xl hover:border-neutral-300 dark:hover:border-neutral-700 ${item.staggerClass}`}
            >
              {/* Question Headline */}
              <h3 className="text-lg sm:text-xl font-normal text-neutral-900 dark:text-white/90 leading-snug tracking-tight">
                {item.question}
              </h3>

              {/* Stats Block */}
              <div className="my-6 space-y-5">
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-1">
                    {item.category}
                  </span>
                  <div className="flex items-baseline gap-0.5">
                    <span 
                      className={`metric-counter text-5xl sm:text-6xl font-mono font-medium tracking-tight ${item.accent}`}
                      data-target={item.value}
                    >
                      0
                    </span>
                    <span className={`text-3xl sm:text-4xl font-mono font-medium ${item.accent}`}>
                      {item.suffix}
                    </span>
                  </div>
                </div>

                {/* Progress Visual */}
                {item.type === 'bar' ? (
                  <div className="w-full h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
                    <div className={`progress-fill absolute top-0 left-0 bottom-0 rounded-full bg-gradient-to-r ${item.gradient}`} />
                  </div>
                ) : (
                  <div className="w-full pt-2 flex justify-center">
                    <svg className="w-full max-w-[200px] h-[100px]" viewBox="0 0 100 50">
                      <path
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        fill="none"
                        className="stroke-neutral-200 dark:stroke-neutral-800"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        className="arc-circle"
                        d="M 10 50 A 40 40 0 0 1 90 50"
                        fill="none"
                        stroke={`url(#${item.arcId})`}
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeDasharray="126"
                        strokeDashoffset="126"
                      />
                      <defs>
                        <linearGradient id={item.arcId} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor={item.stopColor1} />
                          <stop offset="100%" stopColor={item.stopColor2} />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Grid Background Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </section>
  );
}