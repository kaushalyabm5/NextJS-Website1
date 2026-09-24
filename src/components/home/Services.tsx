'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Static Imports from src/assets/services-img/
import img1 from '@/assets/services-img/web-dev.png';
import img2 from '@/assets/services-img/mvp1.png';
import img3 from '@/assets/services-img/mobile-app.png';
import img4 from '@/assets/services-img/ui-ux.png';
import img5 from '@/assets/services-img/software-dev.png';
import img6 from '@/assets/services-img/6.jpg';
import img7 from '@/assets/services-img/7.jpg';
import img8 from '@/assets/services-img/8.jpg';
import img9 from '@/assets/services-img/9.jpg';
import img10 from '@/assets/services-img/11.jpg';
import { Zap } from 'lucide-react';

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
      { id: 'dgm-3', title: 'Product Strategy & Transformation' },
      { id: 'dgm-4', title: 'Data Analytics & Optimization' },
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
    <div ref={containerRef} className="relative overflow-hidden bg-black text-white">
      <section className="h-screen w-full flex flex-col justify-between pt-2 pb-10">
        
        {/* Header Title Section - Max Width 7xl */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row md:items-end justify-between gap-3 flex-shrink-0">
          <div>
          

              {/* PILL BADGE WITH ICON */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full bg-white/[0.06] border border-white/15 text-neutral-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md shadow-2xl">
          <Zap className="w-3.5 h-3.5 text-neutral-300" />
          <span>Capabilities</span>
        </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] max-w-2xl text-white">
              We Cover Them All
            </h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal">
            Engineering, Product, AI & Business Consulting built for scale.
          </p>
        </div>

        {/* Horizontal Track Container */}
        <div className="w-full overflow-hidden flex-grow flex items-center my-auto">
          <div
            ref={trackRef}
            className="flex gap-5 px-6 sm:px-12 lg:px-16 w-max will-change-transform"
          >
            {categoriesData.map((category) => (
              <div
                key={category.id}
                className="relative flex-shrink-0 w-[350px] h-[460px] bg-neutral-950 border border-neutral-800 hover:border-neutral-700 transition-all duration-500 rounded-2xl overflow-hidden flex flex-col justify-between p-6 group cursor-pointer backdrop-blur-md shadow-xl"
              >
                {/* Image Background with Dark Overlay */}
                <Image
                  src={category.cardImage}
                  alt={category.categoryName}
                  fill
                  sizes="(max-width: 640px) 280px, 320px"
                  className="object-cover group-hover:scale-100 transition-all duration-700"
                  priority={category.id === 'web-development'}
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" />

                {/* Card Title Header */}
                <div className="relative z-10 flex items-start justify-between">
                  <h3 className="text-lg sm:text-xl font-medium text-white tracking-tight leading-snug transition-colors duration-300">
                    {category.categoryName}
                  </h3>
                </div>

                {/* Service Tags */}
                <div className="relative z-10 flex flex-wrap gap-1.5 pt-3">
                  {category.services.map((service) => (
                    <span
                      key={service.id}
                      className="px-2.5 py-1 text-[11px] font-normal text-neutral-300 bg-black/10 border border-neutral-800 backdrop-blur-sm rounded-full hover:border-[#5dc192]/50 hover:text-white transition-all duration-300"
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