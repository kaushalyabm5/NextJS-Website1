'use client';

import React, { useState, useEffect } from 'react';

// Swapped to Simple Icons for clean, monochrome SVG paths
const LOGOS = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nextdotjs.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/typescript.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/javascript.svg' },
  { name: 'Vercel', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/vercel.svg' },
  { name: 'Hostinger', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/hostinger.svg' },
  { name: 'Supabase', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/supabase.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nodedotjs.svg' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mongodb.svg' },
  { name: 'Express.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/express.svg' },
];

export default function TechMarquee() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-32 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800" />
    );
  }

  return (
    <div className="w-full bg-white dark:bg-black py-8 border-y border-neutral-200 dark:border-neutral-800 overflow-hidden relative transition-colors duration-300">
      
      {/* Edge Blur / Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-28 sm:w-48 z-10 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 sm:w-48 z-10 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />

      {/* Marquee Track Container */}
      <div className="flex w-max items-center animate-marquee-left-to-right hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-20 sm:gap-32 pr-20 sm:pr-32">
            {LOGOS.map((logo, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="relative flex items-center justify-center min-w-[70px] sm:min-w-[90px] transition-all duration-300 hover:scale-105 group cursor-pointer"
                title={logo.name}
              >
                {/* Glow Backdrop Effect (Dark Mode) */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 dark:opacity-40 group-hover:dark:opacity-80 transition-opacity duration-300 pointer-events-none" />

                {/* 
                  Color transformation:
                  1. grayscale brightness-0 turns all icon paths pure black in light mode.
                  2. dark:invert flips black to pure white in dark mode.
                */}
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain relative z-10 opacity-80 group-hover:opacity-100 grayscale brightness-0 dark:invert transition-all duration-300 dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Keyframe animation styling */}
      <style jsx>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee-left-to-right {
          animation: marquee-ltr 35s linear infinite;
        }
      `}</style>
    </div>
  );
}