'use client';

import React from 'react';

// AXSTAR Core Value Words
const AXSTAR_WORDS = [
  'Agility',
  'Xpertise',
  'Scalability',
  'Technology',
  'Ambition',
  'Results',
];

export default function CoreValues() {
  return (
    <section className="w-full bg-black text-white pt-5 pb-25 overflow-hidden relative">
      
      {/* Side Fade Gradient Overlays */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-1 select-none">
        
        {/* ROW 1: Left to Right Scroll (Muted Grey Text) */}
        <div className="relative flex overflow-hidden w-full">
          <div className="flex whitespace-nowrap animate-marquee-left-to-right">
            {[...AXSTAR_WORDS, ...AXSTAR_WORDS, ...AXSTAR_WORDS, ...AXSTAR_WORDS].map((word, idx) => (
              <div key={`row1-${idx}`} className="flex items-center">
                <span className="text-[7rem] font-medium tracking-tight text-neutral-500 transition-colors duration-300">
                  {word}
                </span>
                <span className="text-[7rem] text-neutral-600 mx-4 select-none">
                  .
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Right to Left Scroll (Bright White Text) */}
        <div className="relative flex overflow-hidden w-full">
          <div className="flex whitespace-nowrap animate-marquee-right-to-left">
            {[...AXSTAR_WORDS, ...AXSTAR_WORDS, ...AXSTAR_WORDS, ...AXSTAR_WORDS].map((word, idx) => (
              <div key={`row2-${idx}`} className="flex items-center">
                <span className="text-[7rem] font-medium tracking-tight text-white transition-colors duration-300">
                  {word}
                </span>
                <span className="text-[7rem] text-white/80 mx-4 select-none">
                  .
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Embedded Styles for Infinite Marquee Animations */}
      <style jsx global>{`
        @keyframes marqueeLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marqueeRightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left-to-right {
          animation: marqueeLeftToRight 50s linear infinite;
        }

        .animate-marquee-right-to-left {
          animation: marqueeRightToLeft 50s linear infinite;
        }

        
      `}</style>
    </section>
  );
}