'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SubService {
  id: string;
  title: string;
}

interface Category {
  id: string;
  categoryName: string;
  cardImage: string;
  services: SubService[];
}

const categoriesData: Category[] = [
  {
    id: 'brand-identity',
    categoryName: 'Brand Identity',
    cardImage: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80',
    services: [
      { id: 'bi-1', title: 'Logo Design' },
      { id: 'bi-2', title: 'Brand Guidelines' },
      { id: 'bi-3', title: 'Visual Brand Systems' },
      { id: 'bi-4', title: 'Rebranding' },
      { id: 'bi-5', title: 'Brand Collateral' },
      { id: 'bi-6', title: '+ More' },
    ],
  },
  {
    id: 'web-design-dev',
    categoryName: 'Web Design & Development',
    cardImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    services: [
      { id: 'wd-1', title: 'Framer Development' },
      { id: 'wd-2', title: 'Landing Page Design' },
      { id: 'wd-3', title: 'Full Website Design' },
      { id: 'wd-4', title: 'Web Animations' },
      { id: 'wd-5', title: '+ More' },
    ],
  },
  {
    id: 'ui-ux-design',
    categoryName: 'UI/ UX Design',
    cardImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    services: [
      { id: 'ui-1', title: 'Web & Mobile UI' },
      { id: 'ui-2', title: 'User Flows' },
      { id: 'ui-3', title: 'Wireframes' },
      { id: 'ui-4', title: 'Design Systems' },
      { id: 'ui-5', title: 'Prototyping' },
      { id: 'ui-6', title: '+ More' },
    ],
  },
  {
    id: 'deck-presentation',
    categoryName: 'Deck & Presentation',
    cardImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    services: [
      { id: 'dp-1', title: 'Fundraising Pitch Decks' },
      { id: 'dp-2', title: 'Business Presentations' },
      { id: 'dp-3', title: 'Slide Redesign' },
      { id: 'dp-4', title: '+ More' },
    ],
  },
  {
    id: 'product-engineering',
    categoryName: 'Product Engineering',
    cardImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    services: [
      { id: 'pe-1', title: 'Product Strategy' },
      { id: 'pe-2', title: 'Full-Stack Build' },
      { id: 'pe-3', title: 'Cloud Deployment' },
      { id: 'pe-4', title: '+ More' },
    ],
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pinElement = triggerRef.current;
      const scrollElement = sectionRef.current;

      if (!pinElement || !scrollElement) return;

      const getScrollAmount = () => {
        return scrollElement.scrollWidth - window.innerWidth + 64;
      };

      gsap.to(scrollElement, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinElement,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 1,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
        },
      });
    });

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={triggerRef} className="relative overflow-hidden bg-white dark:bg-black">
      <section className="min-h-screen w-full flex flex-col justify-between py-12 text-black dark:text-white font-sans">
        
        {/* Header Title */}
        <div className="w-full px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 flex-shrink-0">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            We Cover Them All!
          </h2>
          <p className="text-base sm:text-xl text-neutral-500 dark:text-neutral-400 font-medium">
            Graphics, Videos, Web & Marketing.
          </p>
        </div>

        {/* Horizontal Track Container */}
        <div className="w-full overflow-hidden flex-grow flex items-center py-6">
          <div
            ref={sectionRef}
            className="flex gap-6 px-6 sm:px-12 lg:px-16 w-max will-change-transform"
          >
            {categoriesData.map((category) => (
              <div
                key={category.id}
                className="relative flex-shrink-0 w-[300px] sm:w-[360px] h-[380px] sm:h-[430px] rounded-2xl sm:rounded-3xl bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 overflow-hidden flex flex-col justify-between p-6 group shadow-xl"
              >
                {/* Image Background */}
                <img
                  src={category.cardImage}
                  alt={category.categoryName}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                  onLoad={() => ScrollTrigger.refresh()}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/95 pointer-events-none" />

                {/* Card Title */}
                <div className="relative z-10">
                  <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight leading-tight">
                    {category.categoryName}
                  </h3>
                </div>

                {/* Service Tags */}
                <div className="relative z-10 flex flex-wrap gap-1.5 sm:gap-2 pt-3">
                  {category.services.map((service) => (
                    <span
                      key={service.id}
                      className="px-2.5 py-1 rounded-full text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md border border-white/20 hover:border-white/50 transition-colors duration-200"
                    >
                      {service.title}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
}