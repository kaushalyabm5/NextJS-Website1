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
    mono: true,
  },
  {
    name: 'Hostinger',
    src: 'https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/hostinger.svg',
    mono: true,
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
    mono: true,
  },
];

export default function TechMarquee() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-24 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800" />
    );
  }

  return (
    <div className="w-full bg-white dark:bg-black py-8 border-y border-neutral-200 dark:border-neutral-800 overflow-hidden relative transition-colors duration-300">
      {/* Edge Blur / Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none" />

      {/* Marquee Track Container */}
      <div className="flex w-max items-center animate-marquee-left-to-right hover:[animation-play-state:paused]">
        {/* Render duplicate sets to create an infinite seamless loop */}
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-16 sm:gap-24 pr-16 sm:pr-24">
            {LOGOS.map((logo, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="flex items-center justify-center min-w-[50px] opacity-80 hover:opacity-100 transition-opacity duration-200 grayscale hover:grayscale-0"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className={`h-7 sm:h-8 w-auto object-contain ${
                    logo.mono ? 'dark:invert' : ''
                  } ${
                    logo.invertInDark ? 'dark:invert' : ''
                  }`}
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
          animation: marquee-ltr 30s linear infinite;
        }
      `}</style>
    </div>
  );
}