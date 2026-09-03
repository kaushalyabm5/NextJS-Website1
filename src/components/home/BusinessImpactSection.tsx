'use client';

import React, { useState, useEffect } from 'react';
import {
  Globe,
  Wifi,
  Smile,
  Coins,
  Funnel,
  Code2,
  Scale,
  Gauge,
  ChessKnight,
  GitMerge,
  PhoneCall,
  LucideIcon,
} from 'lucide-react';

interface TagItem {
  name: string;
  icon: LucideIcon;
}

// Row 1 items (Scrolls Left to Right)
const ROW_ONE_TAGS: TagItem[] = [
  { name: 'Unified Digital Ecosystem', icon: Globe },
  { name: 'Strong Online Presence', icon: Wifi },
  { name: 'Exceptional User Experience', icon: Smile },
  { name: 'Increased ROI', icon: Coins },
  { name: 'Higher Conversion Rates', icon: Funnel },
];

// Row 2 items (Scrolls Right to Left)
const ROW_TWO_TAGS: TagItem[] = [
  { name: 'Modernised Digital Platforms', icon: Code2 },
  { name: 'Consistent Brand Experience', icon: Scale },
  { name: 'Optimised Performance', icon: Gauge },
  { name: 'Future-Ready Strategy', icon: ChessKnight },
  { name: 'Data-Driven Decision', icon: GitMerge },
];

export default function BusinessImpactSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section className="w-full h-80 bg-white dark:bg-black border-y border-neutral-200 dark:border-neutral-800 transition-colors duration-300" />
    );
  }

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white pb-16 overflow-hidden relative border-b border-neutral-200 dark:border-neutral-800/80 transition-colors duration-300">
      
      {/* Edge Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none transition-colors duration-300" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 pointer-events-none transition-colors duration-300" />

      {/* Tags Container */}
      <div className="flex flex-col gap-4 sm:gap-5">
        
        {/* ROW 1: Scroll Left-to-Right */}
        <div className="flex w-max items-center animate-marquee-ltr hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, setIndex) => (
            <div key={`row1-${setIndex}`} className="flex items-center gap-3.5 pr-3.5">
              {ROW_ONE_TAGS.map((tag, index) => {
                const IconComponent = tag.icon;
                return (
                  <div
                    key={`row1-${setIndex}-${index}`}
                    className="flex items-center gap-3 pl-1 pr-5 py-1 rounded-full bg-gradient-to-r from-neutral-100 via-neutral-200/60 to-neutral-200 border border-neutral-300 dark:from-white/20 dark:via-[#1c1c20] dark:to-[#09090b] dark:border-neutral-600 transition-all duration-300 group cursor-default whitespace-nowrap shadow-sm dark:shadow-none"
                  >
                    {/* Circle Icon Badge: Black icon in Light Mode, White icon in Dark Mode */}
                    <div className="w-10 h-10 rounded-full bg-[#5dc192] flex items-center justify-center text-black dark:text-white shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[1rem] font-normal dark:font-thin text-neutral-800 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                      {tag.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* ROW 2: Scroll Right-to-Left */}
        <div className="flex w-max items-center animate-marquee-rtl hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, setIndex) => (
            <div key={`row2-${setIndex}`} className="flex items-center gap-3.5 pr-3.5">
              {ROW_TWO_TAGS.map((tag, index) => {
                const IconComponent = tag.icon;
                return (
                  <div
                    key={`row2-${setIndex}-${index}`}
                    className="flex items-center gap-3 pl-1 pr-5 py-1 rounded-full bg-gradient-to-r from-neutral-100 via-neutral-200/60 to-neutral-200 border border-neutral-300 dark:from-white/20 dark:via-[#1c1c20] dark:to-[#09090b] dark:border-neutral-600 transition-all duration-300 group cursor-default whitespace-nowrap shadow-sm dark:shadow-none"
                  >
                    {/* Circle Icon Badge: Black icon in Light Mode, White icon in Dark Mode */}
                    <div className="w-10 h-10 rounded-full bg-[#5dc192] flex items-center justify-center text-black dark:text-white shrink-0 shadow-md transition-transform duration-300 group-hover:scale-105">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="text-[1rem] font-normal dark:font-thin text-neutral-800 dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">
                      {tag.name}
                    </span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

      </div>

      {/* Call To Action Section */}
      <div className="mt-14 text-center flex flex-col items-center justify-center px-4 relative z-20">
        <p className="text-neutral-600 dark:text-neutral-300 text-base mb-6 font-normal transition-colors duration-300">
          We’re here to transform your ideas into high-performing digital experiences. Let’s make it happen.
        </p>

        {/* Dual Pill CTA Button */}
        <div className="inline-flex items-center bg-neutral-100 border border-neutral-200 dark:border-transparent dark:bg-[#f0f0f0] rounded-full p-1.5 pl-5 shadow-md transition-colors duration-300">
          <span className="text-neutral-700 dark:text-neutral-600 text-xs sm:text-sm font-medium mr-4">
            Limited Slots Available
          </span>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-[#5dc192] hover:bg-[#4eb384] text-black dark:text-white font-semibold text-xs sm:text-sm px-5 py-2.5 rounded-full transition-colors duration-300"
          >
            <span>Book Free Consultation</span>
            <PhoneCall className="w-4 h-4 stroke-[2.5]" />
          </a>
        </div>
      </div>

      {/* Inline Keyframes */}
      <style jsx>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes marquee-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee-ltr {
          animation: marquee-ltr 42s linear infinite;
        }
        .animate-marquee-rtl {
          animation: marquee-rtl 42s linear infinite;
        }
      `}</style>
    </section>
  );
}