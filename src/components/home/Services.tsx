'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Grid } from 'lucide-react';

interface SubService {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Category {
  id: string;
  categoryName: string;
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  services: SubService[];
}

const categoriesData: Category[] = [
  {
    id: 'product-engineering',
    categoryName: 'Product Engineering',
    cardTitle: 'Product Strategy & Build',
    cardDescription: 'Custom-designed, scalable platforms and digital products built to solve real business challenges and support long-term growth.',
    cardImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    services: [
      {
        id: 'pe-1',
        title: 'Product Strategy',
        description: 'Defining technical milestones, value propositions, and architecture models to bring digital products from concept to execution.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'pe-2',
        title: 'Innovation Sprints',
        description: 'Rapid, cross-functional sprints designed to test prototype hypotheses and validate core features with telemetry data.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'pe-3',
        title: 'UX Architecture',
        description: 'Architecting seamless user flows, spatial UI components, and modern interactive elements tailored for enterprise scale.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'pe-4',
        title: 'Full-Stack Build',
        description: 'Engineering robust frontend and backend solutions powered by modern frameworks like Next.js, React, and Node.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'pe-5',
        title: 'Cloud Deployment',
        description: 'Automated CI/CD pipelines, containerized environments, and seamless multi-region deployment configurations.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'pe-6',
        title: 'Code Optimization',
        description: 'Continuous performance tracking, code auditing, bottleneck elimination, and core web vitals enhancement.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'web-design',
    categoryName: 'Web Design',
    cardTitle: 'Web Design & Systems',
    cardDescription: 'High-performing websites, dynamic design systems, and WebGL experiences crafted for luxury digital presence.',
    cardImage: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1200&q=80',
    services: [
      {
        id: 'wd-1',
        title: 'Web Strategy',
        description: 'Comprehensive brand mapping and user behavior analysis to guide high-converting web architecture.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'wd-2',
        title: 'UI/UX Design',
        description: 'Clean visual hierarchies, luxury aesthetics, and responsive layout systems tailored for brand impact.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'wd-3',
        title: 'Custom Development',
        description: 'Custom React & WebGL builds with GSAP animations, fluid transitions, and fast page speeds.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'wd-4',
        title: '3D & Motion',
        description: 'Immersive Three.js micro-interactions, custom shaders, and dynamic canvas rendering for elevated engagement.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'wd-5',
        title: 'Design Systems',
        description: 'Scalable UI libraries, tokenized design systems, and component documentation built for cross-team efficiency.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'wd-6',
        title: 'Speed Tuning',
        description: 'Optimizing rendering pathways, asset delivery, and code-splitting to guarantee sub-second initial load times.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'ecommerce',
    categoryName: 'eCommerce',
    cardTitle: 'Headless Commerce Engine',
    cardDescription: 'Decoupled storefronts engineered for fast page loads, high flash-sale concurrency, and seamless international checkout.',
    cardImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    services: [
      {
        id: 'ec-1',
        title: 'Headless Setup',
        description: 'Separating frontend design from backend logic to achieve sub-second page loads and custom checkout flows.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'ec-2',
        title: 'Shopify Plus',
        description: 'Enterprise Shopify integrations featuring tailored API extensions, custom apps, and automated workflows.',
        image: 'https://images.unsplash.com/photo-1556742049-0a674735c093?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'ec-3',
        title: 'Custom Checkout',
        description: 'Optimized payment gateway setups, localized currency conversions, and frictionless multi-currency options.',
        image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'ec-4',
        title: 'ERP Integration',
        description: 'Real-time multi-warehouse data bridges connecting stock management, order tracking, and enterprise logistics.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'ec-5',
        title: 'CRO Optimization',
        description: 'A/B testing, heatmapping analytics, and checkout step minimization to maximize customer purchase velocity.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'ec-6',
        title: 'Global Scale',
        description: 'Deploying edge-cached international storefronts complete with multi-language and automated tax routing capabilities.',
        image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'martech',
    categoryName: 'MarTech & AI',
    cardTitle: 'AI & Data Platforms',
    cardDescription: 'Automated data pipelines, LLM interfaces, and telemetry platforms connecting marketing insight to core business operations.',
    cardImage: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    services: [
      {
        id: 'mt-1',
        title: 'AI Workflows',
        description: 'Custom RAG pipelines, internal automation bots, and intelligent lead classification tools.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'mt-2',
        title: 'Analytics Funnel',
        description: 'End-to-end data funnel architecture tracking user activity across multiple channels in real-time.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'mt-3',
        title: 'CRM Pipelines',
        description: 'Integrating Salesforce, HubSpot, or custom CRM architectures directly with production databases.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'mt-4',
        title: 'Lead Scoring',
        description: 'Algorithmic lead qualification pipelines built to prioritize high-value client opportunities automatically.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'mt-5',
        title: 'Personalization',
        description: 'Delivering real-time tailored web content and product recommendations based on user behavioral telemetry.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'mt-6',
        title: 'API Gateways',
        description: 'Custom middleware enabling secure data pass-through between disparate marketing tools and core servers.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'digital-marketing',
    categoryName: 'Growth & SEO',
    cardTitle: 'Data & Acquisition',
    cardDescription: 'Targeted performance campaigns, search engine positioning, and funnel optimization built for scalable acquisition.',
    cardImage: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80',
    services: [
      {
        id: 'dm-1',
        title: 'SEO & Organic',
        description: 'Technical SEO audits, semantic content architecture, and core web vitals speed optimization.',
        image: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'dm-2',
        title: 'Paid Ads',
        description: 'High-ROI multi-platform ad campaign strategies driven by real-time conversion feedback loops.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'dm-3',
        title: 'Funnel Optimization',
        description: 'Engineering bespoke conversion-focused micro-sites designed to minimize drop-off rates.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'dm-4',
        title: 'Content Strategy',
        description: 'Structured technical content pipelines designed to build brand authority and rank organically for high-intent keywords.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'dm-5',
        title: 'Email Automation',
        description: 'Lifecycle email architecture, sequence automation, and re-engagement messaging frameworks.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'dm-6',
        title: 'Growth Analytics',
        description: 'Custom dashboard setup aggregating metrics across all channels into a clear executive view.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  },
  {
    id: 'creative-designing',
    categoryName: 'Creative Design',
    cardTitle: 'Brand Identity & Visuals',
    cardDescription: 'Bespoke brand identities, motion design graphics, and visual design assets engineered to elevate market positioning.',
    cardImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    services: [
      {
        id: 'cd-1',
        title: 'Brand Identity',
        description: 'Comprehensive brand identity, typography, design tokens, and luxury visual direction.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'cd-2',
        title: '3D Renders',
        description: 'Custom 3D renders, spatial animations, and high-framerate motion graphics engineered for modern digital touchpoints.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'cd-3',
        title: 'Design Assets',
        description: 'Comprehensive brand guidelines, media kits, vector illustration sets, and reusable visual primitives.',
        image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'cd-4',
        title: 'Interactive Prototypes',
        description: 'High-fidelity clickable Figma & Framer prototypes replicating real application motion and micro-interactions.',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'cd-5',
        title: 'UI Kits',
        description: 'Pixel-perfect UI kits built with strict architectural guidelines and clean design-to-code mapping.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80'
      },
      {
        id: 'cd-6',
        title: 'Visual Direction',
        description: 'Directing visual storytelling, key visuals, and aesthetic identity across high-profile digital campaigns.',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80'
      }
    ]
  }
];

export default function Services() {
  const [selectedSubServices, setSelectedSubServices] = useState<Record<string, SubService>>({});

  const handleSelectSubService = (categoryId: string, service: SubService) => {
    setSelectedSubServices((prev) => ({
      ...prev,
      [categoryId]: service,
    }));
  };

  return (
    <section className="relative w-full py-24 bg-white dark:bg-black text-black dark:text-white font-sans selection:bg-[#00c29e] selection:text-white dark:selection:text-black transition-colors duration-300">
      {/* Full-width container across the screen with responsive horizontal padding */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {/* Short Hero Heading */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-5xl sm:text-7xl font-normal tracking-tight leading-tight mb-6">
            Digital Systems for <span className="font-normal text-black dark:text-white">High Growth</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            End-to-end engineering, UI systems, and AI infrastructure designed to scale your enterprise.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="flex flex-col gap-24">
          {categoriesData.map((category) => {
            const activeSubService = selectedSubServices[category.id] || category.services[0];

            return (
              <div
                key={category.id}
                id={`cat-${category.categoryName.toLowerCase().replace(/\s+/g, '-')}`}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch pt-10 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300"
              >
                
                {/* LEFT COLUMN: Larger Edge-to-Edge Feature Card */}
                <div className="bg-neutral-50 dark:bg-black border border-neutral-200 dark:border-neutral-800/80 rounded-3xl overflow-hidden flex flex-col justify-between min-h-[640px] transition-colors duration-300 shadow-sm">
                  
                  {/* Taller Edge-to-Edge Image */}
                  <div className="relative w-full h-80 sm:h-96 bg-neutral-100 dark:bg-neutral-900 overflow-hidden transition-colors duration-300">
                    <img
                      src={activeSubService ? activeSubService.image : category.cardImage}
                      alt={activeSubService ? activeSubService.title : category.cardTitle}
                      className="w-full h-full object-cover opacity-90 dark:opacity-85 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-50 via-transparent to-transparent dark:from-neutral-950 transition-colors duration-300" />
                  </div>

                  {/* Card Content with Generous Spacing */}
                  <div className="p-8 sm:p-12 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 flex items-center justify-center text-[#00c29e] transition-colors duration-300">
                          <Grid className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-black dark:text-white transition-colors duration-300">
                          {activeSubService ? activeSubService.title : category.cardTitle}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8 transition-colors duration-300 max-w-2xl">
                        {activeSubService ? activeSubService.description : category.cardDescription}
                      </p>
                    </div>

                    {/* CTA Button */}
                    <div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#00c29e] hover:bg-[#00a889] text-white dark:text-black font-semibold text-sm tracking-wide transition-all hover:scale-105"
                      >
                        <span>Explore</span>
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                </div>

                {/* RIGHT COLUMN: Service Items Grid */}
                <div className="flex flex-col justify-center">
                  {category.services.map((service) => {
                    const isSelected = activeSubService?.id === service.id;

                    return (
                      <div
                        key={service.id}
                        onClick={() => handleSelectSubService(category.id, service)}
                        className={`group cursor-pointer border-b py-6 sm:py-7 transition-all duration-200 ${
                          isSelected
                            ? 'border-[#00c29e]'
                            : 'border-neutral-200 dark:border-neutral-800/80 hover:border-neutral-400 dark:hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <h4
                            className={`text-xl sm:text-3xl font-normal tracking-tight transition-all duration-200 ${
                              isSelected
                                ? 'text-[#00c29e] font-medium translate-x-1'
                                : 'text-neutral-700 dark:text-neutral-300 group-hover:text-black dark:group-hover:text-white'
                            }`}
                          >
                            {service.title}
                          </h4>
                          
                          <ArrowUpRight
                            className={`w-6 h-6 transition-all duration-200 ${
                              isSelected
                                ? 'text-[#00c29e] opacity-100 translate-x-0'
                                : 'text-neutral-400 dark:text-neutral-600 opacity-0 group-hover:opacity-100 group-hover:text-neutral-600 dark:group-hover:text-neutral-400'
                            }`}
                          />
                        </div>

                        {isSelected && (
                          <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed pl-1 transition-colors duration-300 max-w-2xl">
                            {service.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}