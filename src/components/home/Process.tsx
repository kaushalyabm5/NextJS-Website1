'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight, Search, Compass, Code2, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const processSteps = [
  {
    stepNumber: '01',
    title: 'Understand, Analysis & Explore',
    category: 'DISCOVERY',
    description: 'We begin by thoroughly understanding your business, target audience, and project requirements. This ensures every decision aligns with your goals and sets a solid foundation for success.',
    icon: Search,
    side: 'left',
    accent: 'from-amber-500 to-amber-300',
    borderColor: 'border-amber-500/30',
  },
  {
    stepNumber: '02',
    title: 'Plan & Strategize',
    category: 'STRATEGY',
    description: 'Using insights from the discovery phase, we develop a clear roadmap and plan, focusing on the most effective approach to achieve your objectives efficiently.',
    icon: Compass,
    side: 'right',
    accent: 'from-blue-500 to-sky-300',
    borderColor: 'border-blue-500/30',
  },
  {
    stepNumber: '03',
    title: 'Development & Progress Updates',
    category: 'EXECUTION',
    description: 'Our team builds your solution using the latest technologies, while providing regular progress updates to keep you informed at every stage.',
    icon: Code2,
    side: 'left',
    accent: 'from-emerald-500 to-teal-300',
    borderColor: 'border-emerald-500/30',
  },
  {
    stepNumber: '04',
    title: 'Launch & Support 🚀',
    category: 'DEPLOYMENT',
    description: 'Your solution is ready to go live! We ensure a smooth launch and continued support for your long term success.',
    icon: Rocket,
    side: 'right',
    accent: 'from-rose-500 to-pink-300',
    borderColor: 'border-rose-500/30',
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const intro = introRef.current;
    const stepsContainer = stepsContainerRef.current;

    if (!section || !intro || !stepsContainer) return;

    const ctx = gsap.context(() => {
      const stepElements = gsap.utils.toArray<HTMLElement>('.process-step-item');

      const masterTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: '+=800%',
          scrub: 2, // Smooth, liquid scrub matching Lenis physics
          invalidateOnRefresh: true,
        },
      });

      // 1. INTRO STEP: Smooth fade out & scale away
      masterTl.to(intro, {
        opacity: 0,
        scale: 0.9,
        filter: 'blur(16px)',
        duration: 3,
        ease: 'power1.inOut',
      });

      // 2. STEP TIMELINE LOOP
      stepElements.forEach((stepEl, i) => {
        const card = stepEl.querySelector('.step-card');
        const textSide = stepEl.querySelector('.step-desc-side');
        const isLeft = processSteps[i].side === 'left';

        // Reveal container
        masterTl
          .fromTo(
            stepEl,
            { opacity: 0, pointerEvents: 'none' },
            { opacity: 1, pointerEvents: 'auto', duration: 0.5 },
            `step-${i}`
          )
          // CARD: Centered scale & blur reveal
          .fromTo(
            card,
            { 
              opacity: 0, 
              scale: 0.88, 
              filter: 'blur(12px)'
            },
            { 
              opacity: 1, 
              scale: 1, 
              filter: 'blur(0px)',
              duration: 3.5, 
              ease: 'power2.out' 
            },
            `step-${i}`
          )
          // TEXT: Glides in from its respective side (Left or Right)
          .fromTo(
            textSide,
            { 
              opacity: 0, 
              x: isLeft ? -70 : 70,
              filter: 'blur(8px)'
            },
            { 
              opacity: 1, 
              x: 0, 
              filter: 'blur(0px)',
              duration: 3.2, 
              ease: 'power2.out' 
            },
            `step-${i}+=0.3`
          );

        // Internal Graphic Pulse
        const pulseElement = card?.querySelector('.card-internal-pulse');
        if (pulseElement) {
          masterTl.fromTo(
            pulseElement,
            { scale: 0.85, opacity: 0.5 },
            { scale: 1.08, opacity: 1, duration: 2.5, ease: 'sine.inOut' },
            `step-${i}+=0.8`
          );
        }

        // STEP EXIT: Dissolve gracefully (except for final step)
        if (i < stepElements.length - 1) {
          masterTl
            .to(
              card,
              {
                opacity: 0,
                scale: 0.9,
                filter: 'blur(14px)',
                duration: 3,
                ease: 'power1.inOut',
              },
              `step-${i}-exit`
            )
            .to(
              textSide,
              {
                opacity: 0,
                x: isLeft ? -50 : 50,
                filter: 'blur(10px)',
                duration: 2.8,
                ease: 'power1.inOut',
              },
              `step-${i}-exit`
            )
            .to(
              stepEl,
              { opacity: 0, pointerEvents: 'none', duration: 0.5 },
              `step-${i}-exit+=2.5`
            );
        }
      });

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300 perspective-1000"
    >
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 sm:px-12 flex items-center justify-center">
        
        {/* CENTERED INTRO TITLE & DESCRIPTION */}
        <div
          ref={introRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 z-30 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
            <span>[ PROCESS ]</span>
          </div>

          <h2 className="text-4xl sm:text-7xl font-normal tracking-tight leading-tight text-neutral-900 dark:text-white mb-6">
            How We <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">Do It</span>
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-xl font-normal leading-relaxed max-w-2xl">
            A clear roadmap from concept to reality
          </p>
        </div>

        {/* STEP CARDS CONTAINER */}
        <div 
          ref={stepsContainerRef}
          className="relative w-full h-full flex items-center justify-center z-20"
        >
          {processSteps.map((step, idx) => {
            const Icon = step.icon;
            const isLeft = step.side === 'left';

            return (
              <div
                key={idx}
                className="process-step-item absolute inset-0 w-full h-full flex items-center justify-center opacity-0 pointer-events-none"
              >
                <div className="w-full relative flex items-center justify-center min-h-[500px]">
                  
                  {/* SIDE DESCRIPTION BLOCK (Alternates Left / Right in Absolute Position) */}
                  <div 
                    className={`step-desc-side absolute top-1/2 -translate-y-1/2 w-full max-w-xs sm:max-w-sm space-y-5 z-20 ${
                      isLeft 
                        ? 'left-0 sm:left-4 text-left' 
                        : 'right-0 sm:right-4 text-left sm:text-right'
                    }`}
                  >
                    <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border ${step.borderColor}`}>
                      <span className={`font-mono text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.accent}`}>
                        STEP {step.stepNumber}
                      </span>
                      <span className="text-neutral-400">•</span>
                      <span className="font-mono text-[11px] tracking-widest uppercase text-neutral-500 dark:text-neutral-400">
                        {step.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-4xl font-normal text-neutral-900 dark:text-white tracking-tight leading-tight">
                      {step.title}
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>

                  {/* CENTERED MAIN STEP ANIMATED CARD */}
                  <div className="step-card relative z-10 w-full max-w-md sm:max-w-lg aspect-[4/3] sm:aspect-[16/11] rounded-3xl bg-neutral-100/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 p-6 sm:p-8 flex flex-col justify-between shadow-2xl backdrop-blur-xl overflow-hidden group">
                    
                    {/* Top Header inside Card */}
                    <div className="flex items-center justify-between z-10">
                      <div className="p-3 rounded-2xl bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-900 dark:text-white" />
                      </div>
                      <span className="text-3xl sm:text-4xl font-mono font-light text-neutral-300 dark:text-neutral-700">
                        {step.stepNumber}
                      </span>
                    </div>

                    {/* Animated Inside Visual Showcase */}
                    <div className="relative my-auto py-4 flex items-center justify-center z-10">
                      <div className="card-internal-pulse relative flex items-center justify-center">
                        <div className={`absolute w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr ${step.accent} opacity-20 blur-2xl animate-pulse`} />
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-dashed border-neutral-400/40 dark:border-neutral-600/40 flex items-center justify-center animate-[spin_16s_linear_infinite]">
                          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-neutral-300 dark:border-neutral-700" />
                        </div>
                        <Icon className="absolute w-7 h-7 sm:w-8 sm:h-8 text-neutral-800 dark:text-neutral-100" />
                      </div>
                    </div>

                    {/* Card Footer Tag */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60 z-10">
                      <span className="font-mono text-[10px] sm:text-xs uppercase text-neutral-500 tracking-wider">
                        Axstar Execution Pipeline
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors" />
                    </div>

                    {/* Ambient Card Glow */}
                    <div className={`absolute -bottom-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${step.accent} opacity-10 blur-3xl pointer-events-none`} />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Subtle Grid Background Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </section>
  );
}