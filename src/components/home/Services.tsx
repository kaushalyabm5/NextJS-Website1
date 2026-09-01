'use client';

import React from 'react';
import { 
  Globe, 
  Smartphone, 
  Rocket, 
  Palette, 
  Code2, 
  Bot, 
  Network, 
  ShoppingBag,
  ArrowUpRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const services = [
  {
    id: '01',
    title: 'Web Development',
    description: 'Ultra-fast digital experiences engineered with Next.js, WebGL, and modern headless architectures for scalable global deployment.',
    icon: Globe,
    tag: 'Core Focus',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Next.js & React Frameworks',
      'Headless CMS Integrations',
      'WebGL & 3D Web Experiences',
      'Performance Optimization (<100ms)'
    ],
    accent: 'text-blue-500',
    bgGlow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    id: '02',
    title: 'Mobile App Development',
    description: 'Native iOS & Android applications built for smooth fluid motion, high-framerate performance, and offline-first functionality.',
    icon: Smartphone,
    tag: 'Mobile First',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'React Native & Swift / Kotlin',
      'Fluid Micro-Animations',
      'Biometric & Local Security',
      'Cross-Platform Synchronization'
    ],
    accent: 'text-emerald-500',
    bgGlow: 'rgba(16, 185, 129, 0.15)',
  },
  {
    id: '03',
    title: 'Product MVP Development',
    description: 'Production-ready prototypes designed to validate concepts fast, acquire early users, and secure high-value venture capital.',
    icon: Rocket,
    tag: 'Speed & Scale',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Rapid 4-Week Delivery',
      'Scalable System Architecture',
      'Analytics & User Telemetry',
      'Investor-Ready Demo Builds'
    ],
    accent: 'text-amber-500',
    bgGlow: 'rgba(245, 158, 11, 0.15)',
  },
  {
    id: '04',
    title: 'UI/UX Design',
    description: 'Architectural interface design, spatial systems, and high-end visual direction designed specifically for engagement and retention.',
    icon: Palette,
    tag: 'Design System',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Design System Architecture',
      'Interactive Motion Prototypes',
      'User Research & Heatmapping',
      'Accessible & Responsive UI'
    ],
    accent: 'text-fuchsia-500',
    bgGlow: 'rgba(217, 70, 239, 0.15)',
  },
  {
    id: '05',
    title: 'Custom Software',
    description: 'Bespoke backend systems, distributed cloud infrastructure, and mission-critical enterprise platforms engineered for maximum uptime.',
    icon: Code2,
    tag: 'Engineering',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Distributed Cloud Systems',
      'Microservices & Event Bus',
      'Automated CI/CD Pipelines',
      'Zero-Trust Security Models'
    ],
    accent: 'text-cyan-500',
    bgGlow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    id: '06',
    title: 'AI & Automation Solutions',
    description: 'Custom LLM integrations, automated operational workflows, and predictive intelligence models tailored to enterprise workflows.',
    icon: Bot,
    tag: 'Next-Gen Intelligence',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Custom LLM Fine-Tuning & RAG',
      'Automated Workflow Pipelines',
      'Predictive Analytics Engines',
      'Intelligent Agent Workflows'
    ],
    accent: 'text-purple-500',
    bgGlow: 'rgba(168, 85, 247, 0.15)',
  },
  {
    id: '07',
    title: 'API & Microservices',
    description: 'Robust RESTful and GraphQL endpoints engineered for low latency, secure data transport, and seamless enterprise connectivity.',
    icon: Network,
    tag: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'High-Throughput GraphQL / REST',
      'Rate Limiting & Token Auth',
      'Real-Time WebSockets',
      'Third-Party Integrations'
    ],
    accent: 'text-green-500',
    bgGlow: 'rgba(34, 197, 94, 0.15)',
  },
  {
    id: '08',
    title: 'E-commerce Platforms',
    description: 'Headless commerce engines built for global expansion, high-concurrency flash sales, and frictionless checkout flows.',
    icon: ShoppingBag,
    tag: 'Global Commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    capabilities: [
      'Headless Shopify & Commerce Layer',
      'Global Currency & Tax Calculation',
      'Sub-Second Checkout Speeds',
      'Custom ERP & Inventory Sync'
    ],
    accent: 'text-rose-500',
    bgGlow: 'rgba(244, 63, 94, 0.15)',
  },
];

export default function Services() {
  return (
    <section className="relative w-full py-24 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-white" />
            <span>[ CORE CAPABILITIES ]</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight leading-[1.05] mb-6 text-neutral-900 dark:text-white">
            Architectural Solutions for{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
              Modern Scale.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            Explore our specialized engineering capabilities and tailored digital solutions.
          </p>
        </div>

        {/* Stacked Cards Layout */}
        <div className="flex flex-col gap-10">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="w-full rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-white dark:bg-neutral-950 shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* LEFT SIDE: Image Container */}
                  <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[400px] overflow-hidden bg-neutral-900 flex items-center justify-center">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/80" />

                    {/* Ambient Glow */}
                    <div 
                      className="absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl pointer-events-none"
                      style={{ backgroundColor: service.bgGlow }}
                    />

                    {/* Left Bottom Overlay */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-white font-mono text-[11px] uppercase tracking-wider">
                        <Icon className={`w-3.5 h-3.5 ${service.accent}`} />
                        <span>{service.id}</span>
                      </div>
                      <span className="font-mono text-xs text-white/70">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* RIGHT SIDE: Content */}
                  <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-white dark:bg-neutral-950">
                    <div>
                      {/* Top Meta Bar */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
                       
                        </span>
                        <a 
                          href="#contact"
                          className="p-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:scale-105 transition-transform"
                        >
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Main Title */}
                      <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Capabilities Grid */}
                      <div className="pt-6 border-t border-neutral-100 dark:border-neutral-900">
                        <h4 className="font-mono text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-4">
                          Capabilities & Specs:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.capabilities.map((item, i) => (
                            <div key={i} className="flex items-center gap-2.5">
                              <CheckCircle2 className={`w-4 h-4 shrink-0 ${service.accent}`} />
                              <span className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </section>
  );
}