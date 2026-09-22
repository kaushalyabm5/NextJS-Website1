'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import img1 from '@/assets/standout-img/1.png';
import img2 from '@/assets/standout-img/2.png';
import img3 from '@/assets/standout-img/3.png';
import img4 from '@/assets/standout-img/4.png';

const FEATURES = [
  {
    id: '01',
    title: 'Agile Tech Team',
    description:
      'Combining startup energy with seasoned expertise to deliver strategic, high impact solutions.',
    colSpan: 'lg:col-span-7',
    bgImage: img1.src,
  },
  {
    id: '02',
    title: 'Client-Centered',
    description:
      'Tailored technology built around your specific goals to ensure measurable, long term growth.',
    colSpan: 'lg:col-span-5',
    bgImage: img2.src,
  },
  {
    id: '03',
    title: 'Full Coverage',
    description:
      'From custom AI automation to data consulting, we handle complex digital challenges with precision.',
    colSpan: 'lg:col-span-5',
    bgImage: img3.src,
  },
  {
    id: '04',
    title: 'Future-Ready',
    description:
      'Creating scalable, high-performance solutions using the latest industry best practices.',
    colSpan: 'lg:col-span-7',
    bgImage: img4.src,
  },
];

export default function StandOut() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.querySelectorAll('.standout-card'),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full bg-black text-white pt-10 pb-15 px-6 sm:px-12 lg:px-20 relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
    


        {/* CENTERED HEADER SECTION */}
                <div className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
                  
        
                  <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
                    Why Axstar Stands Out
                  </h2>
        
                  <p className="text-white text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
                   Our methodology is built on speed, precision, and client-focused results.
                  </p>
        
                
                  
                </div>

        {/* 4 CARDS BENTO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              className={`${feature.colSpan} standout-card relative min-h-[280px] sm:min-h-[320px] bg-[#0c0c0e] border border-neutral-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden opacity-100`}
            >
              {/* Visible Background Image Layer */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-65 pointer-events-none"
                style={{ backgroundImage: `url(${feature.bgImage})` }}
              />

              {/* Lighter Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 pointer-events-none" />

              {/* Content */}
              <div className="relative z-10 space-y-2">
                <h3 className="text-xl sm:text-2xl font-medium text-white tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}