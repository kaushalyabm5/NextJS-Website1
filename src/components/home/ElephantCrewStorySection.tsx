'use client';

import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Rocket, Award, Trophy, HeartHandshake } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ElephantCrewStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation Refs
  const middleTextRef = useRef<HTMLDivElement>(null);
  const leftBarRef = useRef<HTMLDivElement>(null);
  const rightBarRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const leftTitleRef = useRef<HTMLHeadingElement>(null);
  const leftDescRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);

  // Counter States
  const [stat1, setStat1] = useState(0);
  const [stat2, setStat2] = useState(0);
  const [stat3, setStat3] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=500%',
          pin: true,
          pinReparent: true, // Prevents DOM shaking during position transitions
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // --- INITIAL STATE SETUPS ---
      gsap.set(middleTextRef.current, { opacity: 0, scale: 0.9 });

      // Hide both bars in their native left and right corner positions
      gsap.set(leftBarRef.current, { opacity: 0, scale: 0.9 });
      gsap.set(rightBarRef.current, { opacity: 0, scale: 0.9 });

      gsap.set(statsRef.current, { opacity: 0, y: -20 });
      gsap.set(leftTitleRef.current, { opacity: 0, x: -30 });
      gsap.set(leftDescRef.current, { opacity: 0, x: -30 });
      gsap.set(badgesRef.current, { opacity: 0, y: 20 });
      gsap.set(linkRef.current, { opacity: 0, y: 15 });

      // --- STEP 1: Center Title & Description Appear ---
      tl.to(middleTextRef.current, { opacity: 1, scale: 1, duration: 1 })

      // --- STEP 2: Left Image in Left Corner & Right Image in Right Corner Appear ---
        .to(leftBarRef.current, { opacity: 1, scale: 1, duration: 1 })
        .to(rightBarRef.current, { opacity: 1, scale: 1, duration: 1 }, '<')

      // --- STEP 3: Middle Text Moves Back & Disappears ---
        .to(middleTextRef.current, { opacity: 0, scale: 0.8, duration: 1 }, '+=0.5')

      // --- STEP 4: Left Corner Image Bar Moves Across to Sit Beside Right Bar with Space ---
        .to(leftBarRef.current, {
          left: 'calc(100% - 20rem)',
          duration: 2,
          ease: 'power2.inOut',
        })

      // --- STEP 5: Both Image Bars Move Down Slightly to Give Space for Stats ---
        .to([leftBarRef.current, rightBarRef.current], {
          y: '15%',
          duration: 1.2,
          ease: 'power2.out',
        })

      // --- STEP 6: Top Right Stats Fade In & Numbers Count Up ---
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            onStart: () => {
              const obj = { val1: 0, val2: 0, val3: 0 };
              gsap.to(obj, {
                val1: 100,
                val2: 50,
                val3: 10,
                duration: 1.5,
                ease: 'power1.out',
                onUpdate: () => {
                  setStat1(Math.floor(obj.val1));
                  setStat2(Math.floor(obj.val2));
                  setStat3(Math.floor(obj.val3));
                },
              });
            },
          },
          '<'
        )

      // --- STEP 7: Left Content Sequence ---
        .to(leftTitleRef.current, { opacity: 1, x: 0, duration: 1 })
        .to(leftDescRef.current, { opacity: 1, x: 0, duration: 1 })
        .to(badgesRef.current, { opacity: 1, y: 0, duration: 1 })
        .to(linkRef.current, { opacity: 1, y: 0, duration: 0.8 })

      // --- STEP 8: Smooth Scroll-Out Buffer (Holds final state before unpinning) ---
        .to({}, { duration: 1.5 });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full h-screen bg-white dark:bg-black text-black dark:text-white relative overflow-hidden flex items-center justify-center font-sans border-y border-neutral-200 dark:border-neutral-900 transition-colors duration-300"
    >
      <div className="max-w-[1340px] w-full h-full mx-auto px-6 lg:px-12 pt-20 pb-12 relative flex items-center justify-between">
        
        {/* Left Side Content Container */}
        <div className="w-full lg:w-[50%] z-30 flex flex-col justify-center space-y-6">
          <h2
            ref={leftTitleRef}
            className="text-4xl sm:text-5xl lg:text-[52px] font-medium tracking-tight leading-[1.08] text-black dark:text-white transition-colors duration-300"
          >
            The Premier Full-Service Digital Agency in North England & the UK
          </h2>

          <div
            ref={leftDescRef}
            className="space-y-4 text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed font-normal max-w-xl transition-colors duration-300"
          >
            <p>
              Elephant Crew is a leading Digital Experience Partner based in
              Newcastle, with over 10 years&apos; experience supporting SMEs
              and large enterprises. We specialise in Digital Product
              Engineering.
            </p>
            <p>
              We work with a select number of clients, giving every project
              focused attention, hands-on leadership, and exceptional quality.
            </p>
          </div>

          {/* Feature Badges */}
          <div ref={badgesRef} className="flex flex-wrap gap-3 pt-2 max-w-md">
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <Rocket className="w-5 h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">Innovation</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <Award className="w-5 h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">Excellence</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <Trophy className="w-5 h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">Client-Centricity</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <HeartHandshake className="w-5 h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-sm font-normal text-neutral-800 dark:text-neutral-200">Integrity</span>
            </div>
          </div>

          <div ref={linkRef} className="pt-2">
            <a
              href="#about"
              className="inline-flex items-center gap-1.5 text-[#5dc192] hover:text-[#5dc192] font-normal text-sm transition-colors duration-200 group"
            >
              <span className="underline underline-offset-4 decoration-[#5dc192] group-hover:decoration-[#5dc192]">
                Learn About Elephant Crew
              </span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Top Right Stats Section */}
        <div
          ref={statsRef}
          className="absolute top-20 right-6 lg:right-12 z-30 flex items-center divide-x divide-neutral-300 dark:divide-neutral-800 transition-colors duration-300"
        >
          <div className="pr-8 sm:pr-10 text-center">
            <div className="text-5xl sm:text-6xl font-light tracking-tight text-black dark:text-white font-sans transition-colors duration-300">
              {stat1}%
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 font-normal">
              Client Satisfaction Rate
            </div>
          </div>
          <div className="px-8 sm:px-10 text-center">
            <div className="text-5xl sm:text-6xl font-light tracking-tight text-black dark:text-white font-sans transition-colors duration-300">
              {stat2}+
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 font-normal">
              Projects Delivered
            </div>
          </div>
          <div className="pl-8 sm:pl-10 text-center">
            <div className="text-5xl sm:text-6xl font-light tracking-tight text-black dark:text-white font-sans transition-colors duration-300">
              {stat3}+
            </div>
            <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-2 font-normal">
              Years&apos; Experience
            </div>
          </div>
        </div>

        {/* Vertically Centered Image Bars */}
        <div
          ref={leftBarRef}
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 pointer-events-none z-20 hidden lg:block w-28 lg:w-32 h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 transition-colors duration-300"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80')`,
            }}
          />
        </div>

        <div
          ref={rightBarRef}
          className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 pointer-events-none z-20 hidden lg:block w-28 lg:w-32 h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/10 transition-colors duration-300"
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80')`,
            }}
          />
        </div>

        {/* Initial Center Vision Overlay */}
        <div
          ref={middleTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 z-10 pointer-events-none"
        >
          <h1 className="text-4xl sm:text-6xl font-medium tracking-tight mb-6 leading-[1.12] text-black dark:text-white transition-colors duration-300">
            A Single Partner for a Unified Digital Vision.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl transition-colors duration-300">
            At Elephant Crew, we bring insights, creativity, strategy,
            innovation and technical expertise to help brands transform their
            digital ecosystem into a connected and seamless experience.
          </p>
        </div>

      </div>
    </section>
  );
}