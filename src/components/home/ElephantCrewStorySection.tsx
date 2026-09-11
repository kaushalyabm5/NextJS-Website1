'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Rocket, Award, Trophy, HeartHandshake } from 'lucide-react';

// Import your local image here:
import storyImage from '@/assets/third-section/1.png';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function ElephantCrewStorySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation Refs
  const middleTextRef = useRef<HTMLDivElement>(null);
  const leftTitleRef = useRef<HTMLHeadingElement>(null);
  const leftDescRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const rightImageRef = useRef<HTMLDivElement>(null);

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
          end: '+=450%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // --- INITIAL STATE SETUPS ---
      gsap.set(middleTextRef.current, { opacity: 0, scale: 0.9, y: 20 });

      gsap.set(leftTitleRef.current, { opacity: 0, x: -30 });
      gsap.set(leftDescRef.current, { opacity: 0, x: -30 });
      gsap.set(badgesRef.current, { opacity: 0, y: 20 });
      gsap.set(linkRef.current, { opacity: 0, y: 15 });

      gsap.set(statsRef.current, { opacity: 0, y: -20 });
      gsap.set(rightImageRef.current, { opacity: 0, scale: 0.9, y: 30 });

      // --- STEP 1: Center Text Appears on Scroll ---
      tl.to(middleTextRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
      })
      .to(middleTextRef.current, { opacity: 1, duration: 1 })

      // --- STEP 2: Center Text Disappears ---
      .to(middleTextRef.current, {
        opacity: 0,
        scale: 0.85,
        y: -20,
        duration: 1.2,
        ease: 'power2.in',
      })

      // --- STEP 3: Left Content Appears ---
      .to(leftTitleRef.current, { opacity: 1, x: 0, duration: 1.2 }, '+=0.2')
      .to(leftDescRef.current, { opacity: 1, x: 0, duration: 1.2 }, '<+=0.2')
      .to(badgesRef.current, { opacity: 1, y: 0, duration: 1 }, '<+=0.2')
      .to(linkRef.current, { opacity: 1, y: 0, duration: 0.8 }, '<+=0.2')

      // --- STEP 4: Stats & Counter ---
      .to(
        statsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
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
        '+=0.3'
      )

      // --- STEP 5: Image Appears ---
      .to(
        rightImageRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: 'power2.out',
        },
        '<+=0.3'
      )

      // --- STEP 6: Scroll Buffer ---
      .to({}, { duration: 1.5 });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-white dark:bg-black text-black dark:text-white relative overflow-hidden flex items-center justify-center border-y border-neutral-200 dark:border-neutral-900 transition-colors duration-300 min-h-screen"
    >
      <div className="max-w-full w-full mx-auto px-3 lg:px-4 py-16 sm:py-20 relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-12">
        
        {/* LEFT COLUMN: Main Info */}
        <div className="w-full lg:w-[65%] z-30 flex flex-col justify-start space-y-6">
          <h2
            ref={leftTitleRef}
            className="text-3xl sm:text-5xl lg:text-[52px] font-normal tracking-tight leading-[1.1] text-black dark:text-white transition-colors duration-300"
          >
            The Premier Full-Service Digital Agency in North England & the UK
          </h2>

          <div
            ref={leftDescRef}
            className="space-y-4 text-neutral-600 dark:text-neutral-400 text-sm sm:text-[15px] leading-relaxed font-normal max-w-2xl transition-colors duration-300"
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
          <div ref={badgesRef} className="flex flex-wrap gap-3 pt-2 max-w-2xl">
            <div className="flex items-center rounded-[1rem] gap-2.5 px-4 sm:px-5 py-2.5 border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <Rocket className="w-4 sm:w-5 h-4 sm:h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Innovation</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-[1rem] border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <Award className="w-4 sm:w-5 h-4 sm:h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Excellence</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-[1rem] border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <Trophy className="w-4 sm:w-5 h-4 sm:h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Client-Centricity</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-[1rem] border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <HeartHandshake className="w-4 sm:w-5 h-4 sm:h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Integrity</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-[1rem] border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <HeartHandshake className="w-4 sm:w-5 h-4 sm:h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Integrity</span>
            </div>
            <div className="flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-[1rem] border border-neutral-300 dark:border-neutral-800 bg-neutral-100/80 dark:bg-black/50 w-fit transition-colors duration-300">
              <HeartHandshake className="w-4 sm:w-5 h-4 sm:h-5 text-neutral-700 dark:text-neutral-300 stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Integrity</span>
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

        {/* RIGHT COLUMN: Stats & Image */}
        <div className="flex flex-col items-center lg:items-end justify-start w-full lg:w-[44%] z-30 space-y-6 sm:space-y-8 lg:pt-1">
          
          {/* Right-Aligned Stats Block on Desktop */}
          <div
            ref={statsRef}
            className="flex items-center justify-center lg:justify-end w-full lg:w-auto divide-x divide-neutral-300 dark:divide-neutral-800 transition-colors duration-300"
          >
            <div className="px-3 sm:px-5 lg:pl-0 lg:pr-5 text-center lg:text-right">
              <div className="text-3xl sm:text-5xl font-light tracking-tight text-black dark:text-white font-sans transition-colors duration-300">
                {stat1}%
              </div>
              <div className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 mt-1 sm:mt-2 font-normal">
                Satisfaction
              </div>
            </div>
            <div className="px-3 sm:px-5 text-center lg:text-right">
              <div className="text-3xl sm:text-5xl font-light tracking-tight text-black dark:text-white font-sans transition-colors duration-300">
                {stat2}+
              </div>
              <div className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 mt-1 sm:mt-2 font-normal">
                Projects
              </div>
            </div>
            <div className="px-3 sm:px-5 lg:pl-5 lg:pr-0 text-center lg:text-right">
              <div className="text-3xl sm:text-5xl font-light tracking-tight text-black dark:text-white font-sans transition-colors duration-300">
                {stat3}+
              </div>
              <div className="text-[11px] sm:text-xs text-neutral-600 dark:text-neutral-400 mt-1 sm:mt-2 font-normal">
                Years Exp.
              </div>
            </div>
          </div>

          {/* 1:1 Aspect Image */}
          <div
            ref={rightImageRef}
            className="w-full max-w-[340px] sm:max-w-[440px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl transition-colors duration-300 relative group"
          >
            <Image
              src={storyImage}
              alt="Elephant Crew Story"
              fill
              className="object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-100"
              sizes="(max-width: 1024px) 100vw, 440px"
              priority
            />
          </div>

        </div>

        {/* CENTER VISION OVERLAY */}
        <div
          ref={middleTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 z-40 pointer-events-none"
        >
          <h1 className="text-3xl sm:text-6xl font-medium tracking-tight mb-4 sm:mb-6 leading-[1.12] text-black dark:text-white transition-colors duration-300">
            A Single Partner for a Unified Digital Vision.
          </h1>
          <p className="text-sm sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl transition-colors duration-300">
            At Elephant Crew, we bring insights, creativity, strategy,
            innovation and technical expertise to help brands transform their
            digital ecosystem into a connected and seamless experience.
          </p>
        </div>

      </div>
    </section>
  );
}