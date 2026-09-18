'use client';

import React, { useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Compass, 
  Cpu, 
  Target, 
  Headphones, 
  Stethoscope, 
  Landmark, 
  ShoppingBag, 
  ShieldCheck, 
  Factory, 
  ArrowUpRight
} from 'lucide-react';

// Static Imports
import img1 from '@/assets/sector-img/1.png';
import img2 from '@/assets/sector-img/2.png';
import img3 from '@/assets/sector-img/3.png';
import img4 from '@/assets/sector-img/4.png';

gsap.registerPlugin(ScrollTrigger);

interface CardItem {
  id: string;
  badgeId: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  description: string;
  bulletTitle: string;
  bullets: string[];
  bgImage: StaticImageData;
}

const cardsData: CardItem[] = [
  {
    id: 'strategic-thinking',
    badgeId: '01',
    title: 'Strategic Thinking',
    subtitle: 'Growth-Focused Architecture',
    icon: Compass,
    description: 'Strategic planning and smart decision making to build solutions that support long term business growth.',
    bulletTitle: 'Key Focus Areas',
    bullets: ['Market Position Analysis', 'Scalable Growth Roadmaps', 'Architecture Design', 'ROI Optimization'],
    bgImage: img1,
  },
  {
    id: 'technology-expertise',
    badgeId: '02',
    title: 'Technology Expertise',
    subtitle: 'Modern Technical Stack',
    icon: Cpu,
    description: 'Deep technical knowledge and modern development tools used to create reliable and scalable digital solutions.',
    bulletTitle: 'Technical Capabilities',
    bullets: ['Next.js & WebGL Engines', 'Cloud System Architecture', 'Microservices & APIs', 'High-Performance UI/UX'],
    bgImage: img2,
  },
  {
    id: 'client-focus',
    badgeId: '03',
    title: 'Client Focus Approach',
    subtitle: 'Tailored Execution',
    icon: Target,
    description: 'We prioritize understanding client needs to deliver solutions that align perfectly with their goals.',
    bulletTitle: 'Client Engagement',
    bullets: ['Dedicated Strategy Leads', 'Agile Delivery Sprints', 'Custom Solution Alignment', 'Transparent Workflows'],
    bgImage: img3,
  },
  {
    id: 'customer-support',
    badgeId: '04',
    title: '24/7 Customer Support',
    subtitle: 'Always-On Assistance',
    icon: Headphones,
    description: 'Complete support throughout the entire process with reliable assistance available whenever you need it.',
    bulletTitle: 'Support Offerings',
    bullets: ['Real-Time System Monitoring', 'Rapid Incident Response', 'Continuous Upgrades', 'Dedicated Account Managers'],
    bgImage: img4,
  },
  {
    id: 'it-technology',
    badgeId: '05',
    title: 'IT & Technology',
    subtitle: 'SaaS & Infrastructure',
    icon: Cpu,
    description: 'Tech moves fast – but not every digital presence keeps up. We help IT and technology companies turn complex solutions into clear, user-focused digital experiences.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['SaaS & Cloud Platforms', 'Cybersecurity Firms', 'AI & Machine Learning Startups', 'IT Infrastructure Providers'],
    bgImage: img1,
  },
  {
    id: 'healthcare-medtech',
    badgeId: '06',
    title: 'Healthcare & Life Sciences',
    subtitle: 'Compliant & Secure Systems',
    icon: Stethoscope,
    description: 'In digital healthcare, trust, compliance, and clarity are non-negotiable. We craft HIPAA-compliant, user-friendly digital systems that connect providers smoothly.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['Digital Health Apps', 'Medical Device Vendors', 'Pharma & Biotech Consultancies', 'Clinical Research Orgs'],
    bgImage: img2,
  },
  {
    id: 'finance-fintech',
    badgeId: '07',
    title: 'Finance & Banking',
    subtitle: 'Fintech & Security',
    icon: Landmark,
    description: 'Modern financial solutions require ironclad security paired with effortless user experience. We build robust fintech dashboards and secure portals designed for growth.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['Fintech & Neo-Banks', 'Asset Management Firms', 'Payment Gateways', 'Insurance Providers'],
    bgImage: img3,
  },
  {
    id: 'ecommerce-retail',
    badgeId: '08',
    title: 'E-commerce & Retail',
    subtitle: 'Conversion Commerce',
    icon: ShoppingBag,
    description: 'Capture market share with ultra-fast, conversion-focused storefronts. We design bespoke shopping experiences that streamline checkout and scale globally.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['D2C Luxury Brands', 'B2B Wholesale Platforms', 'Omnichannel Retailers', 'Subscription Marketplaces'],
    bgImage: img4,
  },
  {
    id: 'legal-cybersecurity',
    badgeId: '09',
    title: 'Legal & Professional Services',
    subtitle: 'Corporate Advisory Ecosystems',
    icon: ShieldCheck,
    description: 'Authority and prestige must be felt in every digital touchpoint. We craft sophisticated web ecosystems and client portals tailored for corporate leaders.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['Corporate Law Practice Groups', 'Management Consultancies', 'Audit & Tax Advisory', 'Risk Management Agencies'],
    bgImage: img1,
  },
  {
    id: 'manufacturing-industrial',
    badgeId: '10',
    title: 'Manufacturing & Industrial',
    subtitle: 'Industry 4.0 Integration',
    icon: Factory,
    description: 'Bridge traditional legacy operations with high-impact digital tools. We build intuitive product catalogs, partner portals, and supply chain visualizers.',
    bulletTitle: 'Businesses We Work With',
    bullets: ['Industrial Automation Experts', 'Supply Chain & Logistics', 'Aerospace Engineering', 'Energy & Utility Firms'],
    bgImage: img2,
  },
];

export default function Sectors() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-white dark:bg-black text-black dark:text-white pt-5 pb-5 transition-colors duration-300">
      {/* Strict 7xl Wrapper */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#5dc192] mb-3 block">
              [ ARCHITECTURAL CAPABILITIES ]
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-left">
              Architectural Solutions & Sector Expertise
            </h2>
          </div>
          <p className="text-[#999999] text-sm sm:text-base font-normal max-w-xl text-left leading-relaxed">
            Combining our core strategic edges with deep industry specialization to deliver high-performance digital solutions across specialized sectors.
          </p>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative w-full flex flex-col items-center">
          {cardsData.map((item, index) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                style={{
                  top: `${10 + index * 1.5}vh`,
                }}
                className="sticky w-full max-w-7xl min-h-[460px] lg:min-h-[500px] rounded-[32px] overflow-hidden border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 p-8 sm:p-12 lg:p-16 flex flex-col justify-between shadow-xl transition-colors duration-300 mb-12"
              >
                {/* Card Background Image */}
                <Image
                  src={item.bgImage}
                  alt={item.title}
                  fill
                  priority={index === 0}
                  className="object-cover opacity-100 pointer-events-none"
                />
                
                {/* Left-Side Focal Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-60% to-transparent dark:from-black dark:via-black/95 dark:via-60% dark:to-transparent pointer-events-none w-full lg:w-[85%]" />

                {/* Card Content Layout */}
                <div className="relative z-10 w-full max-w-3xl flex flex-col gap-6 text-left">
                  
                  {/* Badge & Title Block */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 backdrop-blur-md text-neutral-900 dark:text-white shadow-sm">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#5dc192]" />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 font-mono text-xs">
                       
                      </div>
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-neutral-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed max-w-2xl">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="flex flex-col gap-3 pt-2">
                    <span className="text-xs uppercase tracking-widest text-[#5dc192]">
                      {item.bulletTitle}
                    </span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      {item.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#5dc192] flex-shrink-0" />
                          <span className="font-normal text-black dark:text-neutral-200">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Primary CTA Button */}
                  <div className="pt-4">
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#5dc192] hover:bg-[#5dc192]/90 border border-neutral-300 dark:border-neutral-800 text-sm font-medium text-black transition-all duration-300 group shadow-sm">
                      <span>Explore Details</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-black" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}