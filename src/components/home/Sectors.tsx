'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Cpu, 
  Plane, 
  ShoppingBag, 
  Building2, 
  Factory, 
  Landmark, 
  Trophy, 
  Truck, 
  GraduationCap, 
  HeartPulse, 
  Sprout, 
  Briefcase,
  ArrowUpRight,
  LandmarkIcon
} from 'lucide-react';

// Static Imports for All 12 Sectors (3 Images Each - JPEG format)
import it1 from '@/assets/sector-img/ITTechnology1.jpeg';
import it2 from '@/assets/sector-img/ITTechnology2.jpeg';
import it3 from '@/assets/sector-img/ITTechnology3.jpeg';

import hosp1 from '@/assets/sector-img/Hospitality1.jpeg';
import hosp2 from '@/assets/sector-img/Hospitality2.jpeg';
import hosp3 from '@/assets/sector-img/Hospitality3.jpeg';

import retail1 from '@/assets/sector-img/Retail1.jpeg';
import retail2 from '@/assets/sector-img/Retail2.jpeg';
import retail3 from '@/assets/sector-img/Retail3.jpeg';

import realEstate1 from '@/assets/sector-img/RealEstate1.jpeg';
import realEstate2 from '@/assets/sector-img/RealEstate2.jpeg';
import realEstate3 from '@/assets/sector-img/RealEstate3.jpeg';

import industrial1 from '@/assets/sector-img/Industrial1.jpeg';
import industrial2 from '@/assets/sector-img/Industrial2.jpeg';
import industrial3 from '@/assets/sector-img/Industrial3.jpeg';

import banking1 from '@/assets/sector-img/BankingFinance1.jpeg';
import banking2 from '@/assets/sector-img/BankingFinance2.jpeg';
import banking3 from '@/assets/sector-img/BankingFinance3.jpeg';

import sports1 from '@/assets/sector-img/Sports1.jpeg';
import sports2 from '@/assets/sector-img/Sports2.jpeg';
import sports3 from '@/assets/sector-img/Sports3.jpeg';

import transport1 from '@/assets/sector-img/Transport1.jpeg';
import transport2 from '@/assets/sector-img/Transport2.jpeg';
import transport3 from '@/assets/sector-img/Transport3.jpeg';

import edu1 from '@/assets/sector-img/Education1.jpeg';
import edu2 from '@/assets/sector-img/Education2.jpeg';
import edu3 from '@/assets/sector-img/Education3.jpeg';

import health1 from '@/assets/sector-img/Healthcare1.jpeg';
import health2 from '@/assets/sector-img/Healthcare2.jpeg';
import health3 from '@/assets/sector-img/Healthcare3.jpeg';

import agri1 from '@/assets/sector-img/Agriculture1.jpeg';
import agri2 from '@/assets/sector-img/Agriculture2.jpeg';
import agri3 from '@/assets/sector-img/Agriculture3.jpeg';

import prof1 from '@/assets/sector-img/Professional1.jpeg';
import prof2 from '@/assets/sector-img/Professional2.jpeg';
import prof3 from '@/assets/sector-img/Professional3.jpeg';

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
  bgImages: StaticImageData[];
}

const cardsData: CardItem[] = [
  {
    id: 'it-technology',
    badgeId: '01',
    title: 'IT Technology & Digital Businesses',
    subtitle: 'SaaS & Modern Engineering',
    icon: Cpu,
    description: 'Transforming complex technological products into sleek, accessible, high-performance digital platforms built for rapid scale.',
    bulletTitle: 'Key Specializations',
    bullets: ['SaaS & Cloud Platforms', 'AI & ML Infrastructure', 'Cybersecurity Portals', 'Enterprise Software'],
    bgImages: [it1, it2, it3],
  },
  {
    id: 'hospitality-tourism',
    badgeId: '02',
    title: 'Hospitality & Tourism',
    subtitle: 'Immersive Luxury Experiences',
    icon: Plane,
    description: 'Crafting high-touch booking ecosystems and digital brand narratives for luxury resorts, travel networks, and global hospitality leaders.',
    bulletTitle: 'Key Specializations',
    bullets: ['Luxury Hotel Booking Systems', 'Eco-Tourism Destinations', 'Travel Management Apps', 'VIP Concierge Portals'],
    bgImages: [hosp1, hosp2, hosp3],
  },
  {
    id: 'retail-ecommerce',
    badgeId: '03',
    title: 'Retail & E-Commerce',
    subtitle: 'Conversion Commerce',
    icon: ShoppingBag,
    description: 'Ultra-fast storefronts and seamless checkout workflows engineered to maximize conversion rates and scale global operations.',
    bulletTitle: 'Key Specializations',
    bullets: ['Direct-to-Consumer Marketplaces', 'Headless Commerce Systems', 'Omnichannel Platforms', 'B2B Wholesale Hubs'],
    bgImages: [retail1, retail2, retail3],
  },
  {
    id: 'real-estate-property',
    badgeId: '04',
    title: 'Real Estate & Property',
    subtitle: 'Architectural Presentation',
    icon: Building2,
    description: 'Interactive property visualizers, tenant portals, and luxury real estate platforms designed for premium investment showcase.',
    bulletTitle: 'Key Specializations',
    bullets: ['Property Development Websites', 'Tenant Management Hubs', '3D Architectural Engines', 'Commercial Leasing Portals'],
    bgImages: [realEstate1, realEstate2, realEstate3],
  },
  {
    id: 'manufacturing-industrial',
    badgeId: '05',
    title: 'Manufacturing & Industrial',
    subtitle: 'Industry 4.0 Systems',
    icon: Factory,
    description: 'Bridging industrial hardware and legacy operations with intuitive, real-time digital dashboards and supply chain platforms.',
    bulletTitle: 'Key Specializations',
    bullets: ['Smart Factory Dashboards', 'B2B Equipment Catalogs', 'Supply Chain Analytics', 'Industrial IoT Control'],
    bgImages: [industrial1, industrial2, industrial3],
  },
  {
    id: 'banking-finance-insurance',
    badgeId: '06',
    title: 'Banking, Finance & Insurance',
    subtitle: 'Fintech Security & Growth',
    icon: Landmark,
    description: 'Secure, compliant financial technology platforms, neobank portals, and wealth management UI engineered for maximum trust.',
    bulletTitle: 'Key Specializations',
    bullets: ['Fintech & Neo-Banking', 'Wealth & Asset Dashboards', 'Insurance Tech Applications', 'Payment Gateway Integration'],
    bgImages: [banking1, banking2, banking3],
  },
  {
    id: 'sports-fitness',
    badgeId: '07',
    title: 'Sports & Fitness',
    subtitle: 'Performance & Engagement',
    icon: Trophy,
    description: 'Dynamic fitness portals, athlete analytics platforms, and sports management ecosystems built for high-energy user engagement.',
    bulletTitle: 'Key Specializations',
    bullets: ['Fitness App Infrastructure', 'Athlete Performance Engines', 'Sports Club Portals', 'Interactive Wellness Hubs'],
    bgImages: [sports1, sports2, sports3],
  },
  {
    id: 'transport-logistics-supply-chain',
    badgeId: '08',
    title: 'Transport, Logistics & Supply Chain',
    subtitle: 'Real-Time Fleet & Freight',
    icon: Truck,
    description: 'End-to-end logistics tracking, automated dispatch software, and high-velocity freight management solutions.',
    bulletTitle: 'Key Specializations',
    bullets: ['Fleet Management Systems', 'Freight Tracking Interfaces', 'Warehouse Automation UI', 'Global Route Optimizers'],
    bgImages: [transport1, transport2, transport3],
  },
  {
    id: 'education',
    badgeId: '09',
    title: 'Education & EdTech',
    subtitle: 'Scalable Learning Ecosystems',
    icon: GraduationCap,
    description: 'Modernizing learning experiences with high-engagement student portals, interactive LMS platforms, and institutional websites.',
    bulletTitle: 'Key Specializations',
    bullets: ['Learning Management Systems', 'University Portals', 'Virtual Classroom Tech', 'Skill Assessment Engines'],
    bgImages: [edu1, edu2, edu3],
  },
  {
    id: 'healthcare-lifesciences-wellness',
    badgeId: '10',
    title: 'Healthcare, Life Sciences & Wellness',
    subtitle: 'Compliant Digital Health',
    icon: HeartPulse,
    description: 'HIPAA-compliant healthcare portals, clinical trial management, and digital wellness applications built on absolute data privacy.',
    bulletTitle: 'Key Specializations',
    bullets: ['Telehealth Ecosystems', 'Medical Device UI', 'Clinical Trial Analytics', 'Wellness Platform Design'],
    bgImages: [health1, health2, health3],
  },
  {
    id: 'agriculture-food-production',
    badgeId: '11',
    title: 'Agriculture & Food Production',
    subtitle: 'Smart AgTech Solutions',
    icon: Sprout,
    description: 'Smart farming platforms, crop yield analytics, and food production supply chain trackers for modern agricultural enterprises.',
    bulletTitle: 'Key Specializations',
    bullets: ['AgTech IoT Dashboards', 'Crop Yield Analytics', 'Food Safety Tracking', 'B2B Produce Marketplaces'],
    bgImages: [agri1, agri2, agri3],
  },
  {
    id: 'professional-corporate-services',
    badgeId: '12',
    title: 'Professional & Corporate Services',
    subtitle: 'Executive Authority & Advisory',
    icon: Briefcase,
    description: 'Refined, high-prestige web portals and client workspaces designed for global legal, accounting, and advisory firms.',
    bulletTitle: 'Key Specializations',
    bullets: ['Corporate Advisory Portals', 'Legal Practice Management', 'Audit & Tax Platforms', 'Executive Client Workspaces'],
    bgImages: [prof1, prof2, prof3],
  },
];

// Inner Component for Slow Background Image Carousel
function CardBackgroundCarousel({ images, title }: { images: StaticImageData[]; title: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Exact 6-second rotation interval
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {images.map((img, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={idx}
            className="absolute inset-0 transition-opacity duration-[2500ms] ease-in-out"
            style={{
              opacity: isActive ? 1 : 0,
            }}
          >
            <Image
              src={img}
              alt={`${title} background ${idx + 1}`}
              fill
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                isActive ? 'scale-105' : 'scale-100'
              }`}
              priority={idx === 0}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function Sectors() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="relative w-full bg-white dark:bg-black text-black dark:text-white pt-12 pb-5 transition-colors duration-300">
      {/* Strict 7xl Wrapper */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div className="max-w-2xl">
           

            {/* PILL BADGE WITH ICON */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-2 rounded-full bg-white/[0.06] border border-white/15 text-neutral-300 text-xs font-mono tracking-widest uppercase backdrop-blur-md shadow-2xl">
                      <LandmarkIcon className="w-3.5 h-3.5 text-neutral-300" />
                      <span>ArchitecTural Capabilities</span>
                    </div>
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] max-w-2xl text-white">
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
                className="sticky w-full max-w-7xl min-h-[460px] lg:min-h-[500px] rounded-[32px] overflow-hidden border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 p-8 sm:p-12 lg:p-16 flex flex-col justify-between shadow-2xl transition-colors duration-300 mb-12"
              >
                {/* 6-Second Ultra-Smooth Rotating Background Carousel */}
                <CardBackgroundCarousel images={item.bgImages} title={item.title} />
                
                {/* Left-Side Focal Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-60% to-transparent dark:from-black dark:via-black/95 dark:via-60% dark:to-transparent pointer-events-none w-full lg:w-[85%]" />

                {/* Card Content Layout */}
                <div className="relative z-10 w-full max-w-3xl flex flex-col gap-6 text-left">
                  
                  {/* Badge & Title Block */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 backdrop-blur-md text-neutral-900 dark:text-white shadow-sm">
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-[#5dc192]" />
                    </div>

                    <div className="flex flex-col">
                      <span className="font-mono text-xs text-[#5dc192] uppercase tracking-wider">
                        SECTOR // {item.badgeId}
                      </span>
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