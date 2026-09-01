'use client';

import React, { useState, useEffect } from 'react';

const LOGOS = [
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    invertInDark: true,
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Vercel',
    src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/vercel.svg',
    invertInDark: true,
  },
  {
    name: 'Hostinger',
    src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/hostinger.svg',
    invertInDark: true,
  },
  {
    name: 'Supabase',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  },
  {
    name: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Express.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    invertInDark: true,
  },
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
                className="relative flex items-center justify-center min-w-[70px] sm:min-w-[90px] transition-all duration-300 hover:scale-100 group cursor-pointer"
                title={logo.name}
              >
                {/* White Glow Backdrop Effect (Active in Dark Mode) */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-0 dark:opacity-40 group-hover:dark:opacity-80 transition-opacity duration-300 pointer-events-none" />

                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className={`h-10 sm:h-12 md:h-14 w-auto object-contain relative z-10 transition-all duration-300 opacity-90 group-hover:opacity-100 ${
                    logo.invertInDark ? 'dark:invert' : ''
                  } dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Keyframe animation styling for Left-to-Right scroll */}
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