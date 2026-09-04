'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Static Imports from src/assets/services-img/
import img1 from '@/assets/services-img/1.jpg';
import img2 from '@/assets/services-img/2.jpg';
import img3 from '@/assets/services-img/3.jpg';
import img4 from '@/assets/services-img/4.jpg';
import img5 from '@/assets/services-img/5.jpg';
import img6 from '@/assets/services-img/6.jpg';
import img7 from '@/assets/services-img/7.jpg';
import img8 from '@/assets/services-img/8.jpg';

gsap.registerPlugin(ScrollTrigger);

interface SubService {
  id: string;
  title: string;
}

interface Category {
  id: string;
  categoryName: string;
  cardImage: StaticImageData;
  services: SubService[];
}

const categoriesData: Category[] = [
  {
    id: 'brand-identity',
    categoryName: 'Brand Identity',
    cardImage: img1,
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
    cardImage: img2,
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
    cardImage: img3,
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
    cardImage: img4,
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
    cardImage: img5,
    services: [
      { id: 'pe-1', title: 'Product Strategy' },
      { id: 'pe-2', title: 'Full-Stack Build' },
      { id: 'pe-3', title: 'Cloud Deployment' },
      { id: 'pe-4', title: '+ More' },
    ],
  },
  {
    id: 'product-engineering1',
    categoryName: 'Product Engineering 2',
    cardImage: img6,
    services: [
      { id: 'pe-1', title: 'Product Strategy' },
      { id: 'pe-2', title: 'Full-Stack Build' },
      { id: 'pe-3', title: 'Cloud Deployment' },
      { id: 'pe-4', title: '+ More' },
    ],
  },
  {
    id: 'product-engineering2',
    categoryName: 'Product Engineering 3',
    cardImage: img7,
    services: [
      { id: 'pe-1', title: 'Product Strategy' },
      { id: 'pe-2', title: 'Full-Stack Build' },
      { id: 'pe-3', title: 'Cloud Deployment' },
      { id: 'pe-4', title: '+ More' },
    ],
  },
  {
    id: 'product-engineering3',
    categoryName: 'Product Engineering 4',
    cardImage: img8,
    services: [
      { id: 'pe-1', title: 'Product Strategy' },
      { id: 'pe-2', title: 'Full-Stack Build' },
      { id: 'pe-3', title: 'Cloud Deployment' },
      { id: 'pe-4', title: '+ More' },
    ],
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const pinElement = containerRef.current;
      const scrollElement = trackRef.current;

      if (!pinElement || !scrollElement) return;

      const getScrollAmount = () => {
        return scrollElement.getBoundingClientRect().width - window.innerWidth;
      };

      gsap.to(scrollElement, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinElement,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-white dark:bg-black">
      <section className="min-h-screen w-full flex flex-col pt-5 justify-between text-black dark:text-white">
        
        {/* Header Title */}
        <div className="w-full px-6 sm:px-12 lg:px-16 flex flex-col md:flex-row md:items-end justify-between gap-4 flex-shrink-0">
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight">
            We Cover Them All!
          </h2>
          <p className="text-base sm:text-xl text-neutral-500 dark:text-neutral-400 font-medium">
            Graphics, Videos, Web & Marketing.
          </p>
        </div>

        {/* Horizontal Track Container */}
        <div className="w-full overflow-hidden flex-grow flex items-center">
          <div
            ref={trackRef}
            className="flex gap-6 px-6 sm:px-12 lg:px-16 w-max will-change-transform"
          >
            {categoriesData.map((category) => (
              <div
                key={category.id}
                className="relative flex-shrink-0 w-[300px] sm:w-[360px] h-[380px] sm:h-[430px] rounded-2xl sm:rounded-3xl bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 overflow-hidden flex flex-col justify-between p-6 group shadow-xl"
              >
                {/* Image Background */}
                <Image
                  src={category.cardImage}
                  alt={category.categoryName}
                  fill
                  sizes="(max-width: 640px) 300px, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-100 opacity-100"
                  priority={category.id === 'brand-identity'}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50 pointer-events-none" />

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
                      className="px-3 py-1 rounded-full text-xs font-medium text-white/90 bg-black/50 backdrop-blur-md border border-white/20 hover:border-white/50 transition-colors duration-200"
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