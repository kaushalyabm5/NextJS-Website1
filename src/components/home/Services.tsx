'use client';

import React, { useLayoutEffect, useRef } from 'react';
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
  Zap,
  Activity,
  Cpu
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const services = [
  {
    id: '01',
    title: 'Web Development',
    description: 'Ultra-fast digital experiences engineered with Next.js, WebGL, and modern headless architectures.',
    icon: Globe,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    tag: 'Core Focus',
    glowColor: 'rgba(59, 130, 246, 0.4)', // Blue
    borderGradient: 'from-blue-500 via-indigo-500 to-purple-500',
    accent: 'text-blue-500 dark:text-blue-400',
    type: 'web',
  },
  {
    id: '02',
    title: 'Mobile App Development',
    description: 'Native iOS & Android applications built for smooth fluid motion and high-framerate performance.',
    icon: Smartphone,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    tag: 'Mobile First',
    glowColor: 'rgba(16, 185, 129, 0.4)', // Emerald
    borderGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    accent: 'text-emerald-500 dark:text-emerald-400',
    type: 'mobile',
  },
  {
    id: '03',
    title: 'Product MVP Development',
    description: 'Production-ready prototypes designed to validate concepts fast and secure market traction.',
    icon: Rocket,
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    tag: 'Speed',
    glowColor: 'rgba(245, 158, 11, 0.4)', // Amber
    borderGradient: 'from-amber-500 via-orange-500 to-rose-500',
    accent: 'text-amber-500 dark:text-amber-400',
    type: 'mvp',
  },
  {
    id: '04',
    title: 'UI/UX Design',
    description: 'Architectural interface design, micro-interactions, and high-end visual direction focused on conversion.',
    icon: Palette,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    tag: 'Design System',
    glowColor: 'rgba(217, 70, 239, 0.4)', // Fuchsia
    borderGradient: 'from-fuchsia-500 via-pink-500 to-violet-500',
    accent: 'text-fuchsia-500 dark:text-fuchsia-400',
    type: 'design',
  },
  {
    id: '05',
    title: 'Custom Software',
    description: 'Bespoke backend systems, distributed cloud infrastructure, and mission-critical enterprise tools.',
    icon: Code2,
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    tag: 'Engineering',
    glowColor: 'rgba(6, 182, 212, 0.4)', // Cyan
    borderGradient: 'from-cyan-500 via-sky-500 to-blue-500',
    accent: 'text-cyan-500 dark:text-cyan-400',
    type: 'software',
  },
  {
    id: '06',
    title: 'AI & Automation Solutions',
    description: 'Custom LLM integrations, automated operational pipelines, and predictive intelligence models.',
    icon: Bot,
    span: 'col-span-1 md:col-span-2 lg:col-span-2',
    tag: 'Next-Gen',
    glowColor: 'rgba(168, 85, 247, 0.4)', // Purple
    borderGradient: 'from-purple-500 via-violet-500 to-indigo-500',
    accent: 'text-purple-500 dark:text-purple-400',
    type: 'ai',
  },
  {
    id: '07',
    title: 'API & Microservices',
    description: 'Robust RESTful & GraphQL services engineered for low latency and seamless connectivity.',
    icon: Network,
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    tag: 'Infrastructure',
    glowColor: 'rgba(34, 197, 94, 0.4)', // Green
    borderGradient: 'from-green-500 via-emerald-500 to-teal-500',
    accent: 'text-green-500 dark:text-green-400',
    type: 'api',
  },
  {
    id: '08',
    title: 'E-commerce Platforms',
    description: 'Headless commerce engines built for global scaling, high-volume transactions, and swift checkout flows.',
    icon: ShoppingBag,
    span: 'col-span-1 md:col-span-1 lg:col-span-1',
    tag: 'Commerce',
    glowColor: 'rgba(244, 63, 94, 0.4)', // Rose
    borderGradient: 'from-rose-500 via-pink-500 to-red-500',
    accent: 'text-rose-500 dark:text-rose-400',
    type: 'commerce',
  },
];

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>('.service-bento-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 75%',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-32 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 border-b border-neutral-200 dark:border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-16 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-white animate-spin" style={{ animationDuration: '6s' }} />
            <span>[ BUILT FOR GROWTH ]</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight leading-[1.05] mb-6 text-neutral-900 dark:text-white">
            Our Core{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
              Services.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            Precision engineering paired with modern architecture to deliver scalable, high-impact digital products.
          </p>
        </div>

        {/* Clean Bento Grid with Continuous Animations */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className={`service-bento-card group relative p-8 sm:p-9 rounded-3xl border border-neutral-200 dark:border-neutral-800/80 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-2xl ${service.span}`}
              >
                {/* 1. CONTINUOUS GLOWING AURA IN CORNER */}
                <div
                  className="absolute -top-12 -right-12 w-44 h-44 rounded-full blur-3xl opacity-40 animate-pulse pointer-events-none"
                  style={{
                    backgroundColor: service.glowColor,
                    animationDuration: '4s',
                  }}
                />

                {/* 2. ROTATING GLOW BORDER BEAM ON HOVER */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none rounded-3xl`} 
                />

                <div className="relative z-10 flex flex-col justify-between h-full min-h-[230px]">
                  
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative p-3 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className={`w-5 h-5 ${service.accent}`} />
                      </div>
                      
                      {/* Live Continuous Pulse Ring */}
                      <span className="relative flex h-2.5 w-2.5">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${service.accent}`} style={{ animationDuration: '2s' }} />
                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${service.accent}`} />
                      </span>
                    </div>

                    <span className="px-3 py-1 font-mono text-[10px] uppercase tracking-wider rounded-full bg-neutral-200/60 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                      {service.tag}
                    </span>
                  </div>

                  {/* CUSTOM REPEATING GRAPHICAL ANIMATED WIDGETS */}
                  <div className="my-3 py-2 border-y border-neutral-200/50 dark:border-neutral-800/50">
                    
                    {/* Web Dev Terminal Loop */}
                    {service.type === 'web' && (
                      <div className="flex items-center justify-between font-mono text-xs text-blue-500 dark:text-blue-400 bg-blue-500/5 px-3 py-2 rounded-xl border border-blue-500/10">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                          <span>render(&lt;App /&gt;)</span>
                        </span>
                        <span className="text-[10px] text-neutral-500">60 FPS</span>
                      </div>
                    )}

                    {/* Mobile Wave Bars */}
                    {service.type === 'mobile' && (
                      <div className="flex items-center justify-between px-1">
                        <div className="flex items-end gap-1.5 h-6">
                          {[40, 75, 30, 95, 60, 85, 50, 90].map((h, i) => (
                            <div
                              key={i}
                              className="w-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-pulse"
                              style={{ 
                                height: `${h}%`, 
                                animationDuration: `${1 + (i % 3) * 0.5}s` 
                              }}
                            />
                          ))}
                        </div>
                        <span className="font-mono text-[10px] text-emerald-500 uppercase tracking-widest">Active</span>
                      </div>
                    )}

                    {/* MVP Launch Radar Pulse */}
                    {service.type === 'mvp' && (
                      <div className="flex items-center gap-3 font-mono text-xs text-amber-500">
                        <Zap className="w-4 h-4 animate-bounce" />
                        <div className="h-1 flex-1 bg-amber-500/20 rounded-full overflow-hidden">
                          <div className="h-full w-1/2 bg-amber-500 rounded-full animate-pulse" />
                        </div>
                      </div>
                    )}

                    {/* UI/UX Color Swatch Pulse */}
                    {service.type === 'design' && (
                      <div className="flex items-center gap-2">
                        {['bg-fuchsia-500', 'bg-pink-500', 'bg-violet-500', 'bg-purple-500'].map((color, i) => (
                          <div
                            key={i}
                            className={`h-4 flex-1 rounded-lg ${color} opacity-80 animate-pulse`}
                            style={{ animationDelay: `${i * 200}ms` }}
                          />
                        ))}
                      </div>
                    )}

                    {/* Custom Software CPU Activity */}
                    {service.type === 'software' && (
                      <div className="flex items-center justify-between font-mono text-xs text-cyan-400">
                        <Cpu className="w-4 h-4 animate-spin" style={{ animationDuration: '8s' }} />
                        <span className="text-[10px] tracking-widest uppercase">System Operational</span>
                      </div>
                    )}

                    {/* AI Neural Node Pulsing */}
                    {service.type === 'ai' && (
                      <div className="flex items-center gap-2 font-mono text-xs text-purple-400">
                        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" />
                        <Activity className="w-4 h-4 text-purple-400 animate-pulse" />
                      </div>
                    )}

                    {/* API Microservices Flow */}
                    {service.type === 'api' && (
                      <div className="flex items-center justify-between font-mono text-[10px] text-green-400">
                        <span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20">GET 200 OK</span>
                        <span className="animate-pulse">12ms</span>
                      </div>
                    )}

                    {/* E-commerce Live Flow */}
                    {service.type === 'commerce' && (
                      <div className="flex items-center justify-between font-mono text-xs text-rose-400">
                        <span>Checkout Engine</span>
                        <div className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                      </div>
                    )}

                  </div>

                  {/* Bottom Content */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-white transition-colors">
                        {service.title}
                      </h3>
                      <div className="p-2 rounded-full bg-neutral-200/50 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
                      {service.description}
                    </p>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </section>
  );
}