'use client';

import React, { useState, useEffect } from 'react';

const LOGOS = [
  { name: 'React', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/react.svg', color: '#61DAFB' },
  { name: 'Next.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nextdotjs.svg', color: '#FFFFFF' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/typescript.svg', color: '#3178C6' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/javascript.svg', color: '#F7DF1E' },
  { name: 'Vercel', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/vercel.svg', color: '#FFFFFF' },
  { name: 'Hostinger', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/hostinger.svg', color: '#673DE6' },
  { name: 'Supabase', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/supabase.svg', color: '#3FCF8E' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/nodedotjs.svg', color: '#5FA04E' },
  { name: 'MongoDB', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/mongodb.svg', color: '#47A248' },
  { name: 'Express.js', src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/express.svg', color: '#FFFFFF' },
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
                className="relative flex items-center justify-center min-w-[70px] sm:min-w-[90px] h-10 sm:h-12 md:h-14 transition-all duration-300 hover:scale-105 group cursor-pointer"
                title={logo.name}
              >
                {/* Fixed Constant White Glow Backdrop */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 dark:opacity-40 group-hover:dark:opacity-40 transition-opacity duration-300 pointer-events-none" />

                {/* Default State: Pure White Icon */}
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-full w-auto object-contain relative z-10 opacity-80 group-hover:opacity-0 brightness-0 invert transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                  loading="lazy"
                />

                {/* Hover State: Pure Brand Color Only */}
                <div
                  className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: logo.color,
                    WebkitMaskImage: `url(${logo.src})`,
                    maskImage: `url(${logo.src})`,
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskPosition: 'center',
                    maskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                  }}
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