'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Rocket, Award, Trophy, HeartHandshake } from 'lucide-react';

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
          end: '+=400%',
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // --- INITIAL STATE SETUPS ---
      gsap.set(middleTextRef.current, { opacity: 0, scale: 0.95, y: 30 });

      gsap.set(leftTitleRef.current, { opacity: 0, x: -40 });
      gsap.set(leftDescRef.current, { opacity: 0, x: -40 });
      gsap.set(badgesRef.current, { opacity: 0, y: 20 });
      gsap.set(linkRef.current, { opacity: 0, y: 15 });

      gsap.set(statsRef.current, { opacity: 0, y: -20 });
      gsap.set(rightImageRef.current, { opacity: 0, scale: 0.92, y: 30 });

      // --- STEP 1: Center Text Appears ---
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
        scale: 0.9,
        y: -30,
        duration: 1.2,
        ease: 'power2.in',
      })

      // --- STEP 3: Left Content Appears ---
      .to(leftTitleRef.current, { opacity: 1, x: 0, duration: 1.2 }, '+=0.2')
      .to(leftDescRef.current, { opacity: 1, x: 0, duration: 1.2 }, '<+=0.2')
      .to(badgesRef.current, { opacity: 1, y: 0, duration: 1 }, '<+=0.2')
      .to(linkRef.current, { opacity: 1, y: 0, duration: 0.8 }, '<+=0.2')

      // --- STEP 4: Stats & Counter Animation ---
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

      // --- STEP 5: Right Image Appears ---
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

      // --- STEP 6: End Buffer ---
      .to({}, { duration: 1.5 });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="w-full bg-white dark:bg-black text-black dark:text-white relative overflow-hidden flex items-center justify-center border-y border-neutral-200 dark:border-neutral-900 transition-colors duration-300 min-h-screen"
    >
      {/* Container restricted to 7XL layout */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 relative flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12 lg:gap-16">
        
        {/* LEFT COLUMN: Main Info */}
        <div className="w-full lg:w-[58%] z-30 flex flex-col justify-start space-y-6">
          <h2
            ref={leftTitleRef}
            className="text-3xl sm:text-4xl lg:text-[48px] font-normal tracking-tight leading-[1.15] text-black dark:text-white transition-colors duration-300"
          >
            A Full-Service Technology & Marketing Partner
          </h2>

          <div
            ref={leftDescRef}
            className="space-y-4 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-normal max-w-xl transition-colors duration-300"
          >
            <p>
              Axstar is a technology and marketing partner helping SMEs and large enterprises grow through smart engineering and results-driven marketing. We combine digital product engineering with strategic marketing to deliver end-to-end solutions.
            </p>
            <p>
              We collaborate with a select group of partners, ensuring every project receives dedicated focus, leadership, and precision execution.
            </p>
          </div>

          {/* Rounded Feature Badges */}
          <div ref={badgesRef} className="flex flex-wrap gap-3 pt-2 max-w-xl">
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/50 w-fit transition-colors duration-300">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-[#5dc192] stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Innovation</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/50 w-fit transition-colors duration-300">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#5dc192] stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Excellence</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/50 w-fit transition-colors duration-300">
              <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#5dc192] stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Client-Centricity</span>
            </div>
            <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100/80 dark:bg-neutral-900/50 w-fit transition-colors duration-300">
              <HeartHandshake className="w-4 h-4 sm:w-5 sm:h-5 text-[#5dc192] stroke-[1.5]" />
              <span className="text-xs sm:text-sm font-normal text-neutral-800 dark:text-neutral-200">Integrity</span>
            </div>
          </div>

          <div ref={linkRef} className="pt-3">
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-[#5dc192] hover:opacity-80 font-normal text-sm transition-opacity duration-200 group"
            >
              <span className="underline underline-offset-4 decoration-[#5dc192]">
                Learn About Axstar
              </span>
              <span className="text-xs transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: Stats & Image */}
        <div className="flex flex-col items-center lg:items-end justify-start w-full lg:w-[42%] z-30 space-y-8 lg:pt-2">
          
          {/* Right-Aligned Counter Stats */}
          <div
            ref={statsRef}
            className="flex items-center justify-center lg:justify-end w-full lg:w-auto divide-x divide-neutral-200 dark:divide-neutral-800 transition-colors duration-300"
          >
            <div className="px-4 sm:px-6 lg:pl-0 lg:pr-6 text-center lg:text-right">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white transition-colors duration-300">
                {stat1}%
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 font-mono uppercase tracking-wider">
                Satisfaction
              </div>
            </div>
            <div className="px-4 sm:px-6 text-center lg:text-right">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white transition-colors duration-300">
                {stat2}+
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 font-mono uppercase tracking-wider">
                Projects
              </div>
            </div>
            <div className="px-4 sm:px-6 lg:pl-6 lg:pr-0 text-center lg:text-right">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-black dark:text-white transition-colors duration-300">
                {stat3}+
              </div>
              <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-2 font-mono uppercase tracking-wider">
                Years Exp.
              </div>
            </div>
          </div>

          {/* 1:1 Aspect Image with Smooth Rounded Corners */}
          <div
            ref={rightImageRef}
            className="w-full max-w-[360px] sm:max-w-[420px] aspect-square rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-2xl transition-colors duration-300 relative group"
          >
            <Image
              src={storyImage}
              alt="Axstar Brand Story"
              fill
              className="object-cover rounded-3xl transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 420px"
              priority
            />
          </div>

        </div>

        {/* CENTER VISION OVERLAY (Scroll Triggered) */}
        <div
          ref={middleTextRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-6 z-40 pointer-events-none"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#5dc192] mb-4">
            [ OUR VISION ]
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight mb-6 leading-[1.12] text-black dark:text-white transition-colors duration-300">
            A Strategic Partner for Digital Transformation.
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-xl transition-colors duration-300">
            At Axstar, we combine technology, digital marketing, strategy, and creative expertise to help businesses build stronger digital ecosystems and achieve sustainable growth.
          </p>
        </div>

      </div>
    </section>
  );
}