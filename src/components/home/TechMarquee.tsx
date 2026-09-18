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
    return <div className="w-full h-24 bg-black" />;
  }

  return (
    <div className="w-full bg-black py-1 overflow-hidden relative cursor-pointer">
      {/* Dynamic Gradient Mask for Smooth Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-32 md:w-56 z-10 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 md:w-56 z-10 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex items-center gap-16 sm:gap-24 md:gap-32 pr-16 sm:pr-24 md:pr-32">
            {LOGOS.map((logo, index) => (
              <div
                key={`${setIndex}-${index}`}
                className="relative flex items-center justify-center h-8 sm:h-10 md:h-11 transition-all duration-300 hover:scale-110 cursor-pointer group"
                title={logo.name}
              >
                {/* Default State: Monochromatic White/Gray */}
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="h-full w-auto object-contain invert opacity-40 group-hover:opacity-0 transition-all duration-300 grayscale"
                  loading="lazy"
                />

                {/* Hover State: Original Brand Color Mask */}
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

      {/* Infinite Scroll Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}