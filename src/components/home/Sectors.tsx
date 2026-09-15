'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Cpu, Stethoscope, Landmark, ShoppingBag, ShieldCheck, Factory, ArrowUpRight } from 'lucide-react';

// Static Imports from src/assets/sector-img/
import img1 from '@/assets/sector-img/1.png';
import img2 from '@/assets/sector-img/2.png';
import img3 from '@/assets/sector-img/3.png';
import img4 from '@/assets/sector-img/4.png';

gsap.registerPlugin(ScrollTrigger);

interface SectorItem {
  id: string;
  title: string;
  icon: React.ElementType;
  description: string;
  bulletTitle: string;
  bullets: string[];
  bgImage: StaticImageData;
}

const sectorsData: SectorItem[] = [
  {
    id: 'it-technology',
    title: 'IT & Technology',
    icon: Cpu,
    description:
      'Tech moves fast – but not every digital presence keeps up. We help IT and technology companies turn complex solutions into clear, user-focused digital experiences. From scalable platforms to performance-driven campaigns, we make sure your innovations stand out and drive real results.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['SaaS & Cloud Platforms', 'Cybersecurity Firms', 'AI & Machine Learning Startups', 'IT Infrastructure Providers'],
    bgImage: img1,
  },
  {
    id: 'healthcare-medtech',
    title: 'Healthcare & Life Sciences',
    icon: Stethoscope,
    description:
      'In digital healthcare, trust, compliance, and clarity are non-negotiable. We craft HIPAA-compliant, user-friendly digital systems that connect providers, patients, and researchers smoothly while ensuring high reliability.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['Digital Health Apps', 'Medical Device Vendors', 'Pharma & Biotech Consultancies', 'Clinical Research Organizations'],
    bgImage: img2,
  },
  {
    id: 'finance-fintech',
    title: 'Finance & Banking',
    icon: Landmark,
    description:
      'Modern financial solutions require ironclad security paired with effortless user experience. We build robust fintech dashboards, secure portals, and high-converting marketing platforms designed for growth.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['Fintech & Neo-Banks', 'Asset Management Firms', 'Payment Gateways', 'Insurance Providers'],
    bgImage: img3,
  },
  {
    id: 'ecommerce-retail',
    title: 'E-commerce & Retail',
    icon: ShoppingBag,
    description:
      'Capture market share with ultra-fast, conversion-focused headless store fronts. We design bespoke shopping experiences that streamline checkout, increase basket size, and scale globally.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['D2C Luxury Brands', 'B2B Wholesale Platforms', 'Omnichannel Retailers', 'Subscription Marketplaces'],
    bgImage: img4,
  },
  {
    id: 'legal-cybersecurity',
    title: 'Legal & Professional Services',
    icon: ShieldCheck,
    description:
      'Authority and prestige must be felt in every digital touchpoint. We craft sophisticated web ecosystems and client portals tailored for corporate advisory, law firms, and consultancy leaders.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['Corporate Law Practice Groups', 'Management Consultancies', 'Audit & Tax Advisory', 'Risk Management Agencies'],
    bgImage: img1,
  },
  {
    id: 'manufacturing-industrial',
    title: 'Manufacturing & Industrial',
    icon: Factory,
    description:
      'Bridge traditional legacy operations with high-impact digital tools. We build intuitive product catalogs, partner portals, and interactive supply chain visualizers for industrial pioneers.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['Industrial Automation Experts', 'Supply Chain & Logistics', 'Aerospace Engineering', 'Energy & Utility Firms'],
    bgImage: img2,
  },
];

export default function Sectors() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-white dark:bg-black text-black dark:text-white pt-40 px-4 transition-colors duration-300">
      {/* Header Section */}
      <div className="w-full max-w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-8 mb-16 lg:mb-24">
        <h2 className="text-3xl sm:text-4xl lg:text-[3rem] font-normal tracking-tight md:max-w-2xl text-left">
          Specialist Digital Expertise in Key UK Industries
        </h2>
        <p className="text-[.9rem] text-[black] dark:text-[white] font-thin md:max-w-xl text-left">
          As an industry leader, we know no two sectors are alike and each demands exclusive focus. That’s why we work
          only within six core industries — allowing us to speak your language, understand your business, and deliver
          the right solutions.
        </p>
      </div>

      {/* Stacked Cards Container - Expanded Max Width */}
      <div className="relative w-full max-w-full mx-auto flex flex-col items-center">
        {sectorsData.map((sector, index) => {
          const IconComponent = sector.icon;

          return (
            <div
              key={sector.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              style={{
                top: '12vh',
              }}
              className="sticky w-full min-h-[480px] lg:min-h-[520px] rounded-[32px] overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-8 sm:p-14 lg:p-20 flex flex-col justify-between shadow-xl transition-colors duration-300 mb-12"
            >
              {/* Card Image Background */}
              <Image
                src={sector.bgImage}
                alt={sector.title}
                fill
                priority={index === 0}
                className="object-cover opacity-100 pointer-events-none"
              />
              
              {/* Deeper, Focused Left-Side Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 via-40% to-transparent dark:from-black dark:via-black/90 dark:via-40% dark:to-transparent pointer-events-none w-full lg:w-[75%]" />

              {/* Card Content Container - Expanded Max Width */}
              <div className="relative z-10 w-full max-w-4xl flex flex-col gap-6 text-left">
                {/* Title & Icon Header */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-thin tracking-tight text-neutral-900 dark:text-white">
                      {sector.title}
                    </h3>
                    <span className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">Sector</span>
                  </div>

                  <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-700/60 backdrop-blur-md text-neutral-900 dark:text-white shadow-sm">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-[.9rem] max-w-xl text-neutral-700 dark:text-neutral-300 font-thin leading-relaxed">
                  {sector.description}
                </p>

                {/* Bullets Sub-section */}
                <div className="flex flex-col gap-3 pt-2">
                  <span className="text-xs sm:text-sm font-thin uppercase tracking-wider text-[#5dc192] dark:text-[#5dc192]">
                    {sector.bulletTitle}
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                    {sector.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#5dc192] dark:bg-[#5dc192] flex-shrink-0" />
                        <span className='font-thin text-black dark:text-white'>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore More Button with Background & Rounded Corners */}
                <div className="pt-4">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5dc192] dark:bg-[#5dc192] hover:bg-[#5dc192] dark:hover:bg-[#5dc192] border border-neutral-300 dark:border-neutral-800 text-sm font-medium text-white dark:text-black transition-all duration-300 group shadow-sm">
                    Explore More
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-white dark:text-black group-hover:text-neutral-900 dark:group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}