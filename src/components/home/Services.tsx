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
import img9 from '@/assets/services-img/9.jpg';
import img10 from '@/assets/services-img/11.jpg';

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
    id: 'web-development',
    categoryName: 'Web Development',
    cardImage: img1,
    services: [
      { id: 'wd-1', title: 'Full-Stack Web Apps' },
      { id: 'wd-2', title: 'Frontend Engineering' },
      { id: 'wd-3', title: 'Performance Optimization' },
      { id: 'wd-4', title: 'CMS Development' },
      { id: 'wd-5', title: 'PWA Solutions' },
    
    ],
  },
  {
    id: 'mobile-app-development',
    categoryName: 'Mobile App Development',
    cardImage: img3,
    services: [
      { id: 'mad-1', title: 'iOS & Android Development' },
      { id: 'mad-2', title: 'Cross-Platform Apps' },
      { id: 'mad-3', title: 'Native Performance' },
      { id: 'mad-4', title: 'App Store Deployment' },
    
    ],
  },
  {
    id: 'product-mvp-development',
    categoryName: 'Product MVP Development',
    cardImage: img2,
    services: [
      { id: 'mvp-1', title: 'Rapid Prototyping' },
      { id: 'mvp-2', title: 'Core Architecture' },
      { id: 'mvp-3', title: 'Investor Pitch Readiness' },
      { id: 'mvp-4', title: 'Scalable Infrastructure' },

    ],
  },
  {
    id: 'ui-ux-design',
    categoryName: 'UI/UX Design',
    cardImage: img4,
    services: [
      { id: 'ui-1', title: 'User Research & Wireframing' },
      { id: 'ui-2', title: 'Design Systems' },
      { id: 'ui-3', title: 'Interactive Prototypes' },
      { id: 'ui-4', title: 'Product Interface Design' },
  
    ],
  },
  {
    id: 'custom-software-development',
    categoryName: 'Custom Software Development',
    cardImage: img5,
    services: [
      { id: 'csd-1', title: 'Enterprise Architecture' },
      { id: 'csd-2', title: 'Cloud-Native Solutions' },
      { id: 'csd-3', title: 'Microservices Design' },
      { id: 'csd-4', title: 'Legacy Modernization' },
      
    ],
  },
  {
    id: 'ai-automation-solutions',
    categoryName: 'AI & Automation Solutions',
    cardImage: img6,
    services: [
      { id: 'ai-1', title: 'Custom LLM Integration' },
      { id: 'ai-2', title: 'Workflow Automation' },
      { id: 'ai-3', title: 'Predictive Analytics' },
      { id: 'ai-4', title: 'AI Agent Workflows' },
     
    ],
  },
  {
    id: 'api-development-integration',
    categoryName: 'API Development & Integration',
    cardImage: img7,
    services: [
      { id: 'api-1', title: 'REST & GraphQL APIs' },
      { id: 'api-2', title: 'Third-Party Integrations' },
      { id: 'api-3', title: 'Secure Gateway Setup' },
      { id: 'api-4', title: 'Real-Time Webhooks' },
     
    ],
  },
  {
    id: 'ecommerce-platforms-solutions',
    categoryName: 'E-commerce Platforms & Solutions',
    cardImage: img8,
    services: [
      { id: 'ecom-1', title: 'Headless Commerce' },
      { id: 'ecom-2', title: 'Custom Payment Systems' },
      { id: 'ecom-3', title: 'Storefront Optimization' },
      { id: 'ecom-4', title: 'Inventory Integrations' },
      
    ],
  },
  {
    id: 'digital-growth-marketing',
    categoryName: 'Digital Growth & Marketing',
    cardImage: img9,
    services: [
      { id: 'dgm-1', title: 'Social Media Management' },
      { id: 'dgm-2', title: 'Search Engine Optimization (SEO)' },
      { id: 'dgm-3', title: 'Product Strategy & Digital Transformation' },
      { id: 'dgm-4', title: 'Data Analytics & Performance Optimization' },
      { id: 'dgm-5', title: 'Digital Presence Setup' },
    ],
  },
  {
    id: 'business-strategy-consulting',
    categoryName: 'Business Strategy & Consulting',
    cardImage: img10,
    services: [
      { id: 'bsc-1', title: 'Business Model & Growth Strategy' },
      { id: 'bsc-2', title: 'Digital Transformation Consulting' },
      { id: 'bsc-3', title: 'Go-To-Market (GTM) Strategy' },
      { id: 'bsc-4', title: 'Data & Technology Consulting' },
      { id: 'bsc-5', title: 'Startup Advisory' },
      { id: 'bsc-6', title: 'Business Process & Documentation' },
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
            Engineering, Product, AI & Business Consulting.
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
                className="relative flex-shrink-0 w-[300px] sm:w-[360px] h-[380px] sm:h-[430px] bg-neutral-900 border border-neutral-200 dark:border-neutral-800/80 rounded-2xl overflow-hidden flex flex-col justify-between p-6 group shadow-xl"
              >
                {/* Image Background */}
                <Image
                  src={category.cardImage}
                  alt={category.categoryName}
                  fill
                  sizes="(max-width: 640px) 300px, 360px"
                  className="object-cover transition-transform duration-700 group-hover:scale-100 opacity-100"
                  priority={category.id === 'web-development'}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/40 pointer-events-none" />

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
                      className="px-3 py-1 text-xs font-medium text-white/90 bg-black/60 backdrop-blur-md border border-white/20 rounded-full hover:border-white/50 transition-colors duration-200"
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