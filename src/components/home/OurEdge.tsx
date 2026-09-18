'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { 
  Compass, 
  Cpu, 
  Target, 
  Headphones, 
  Sparkles,
  Zap,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Layers,
  Radio,
  ArrowRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const edges = [
  {
    id: '01',
    title: 'Strategic Thinking',
    subtitle: 'Growth-Focused Architecture',
    description: 'Strategic planning and smart decision making to build solutions that support long term business growth.',
    icon: Compass,
    accent: 'text-[#5dc192]',
    glowBg: 'bg-[#5dc192]',
    borderColor: 'border-[#5dc192]/30',
    widget: {
      metric: '+140%',
      label: 'Trajectory Growth',
      icon: TrendingUp,
      status: 'Strategic Plan Active',
    }
  },
  {
    id: '02',
    title: 'Technology Expertise',
    subtitle: 'Modern Technical Stack',
    description: 'Deep technical knowledge and modern development tools used to create reliable and scalable digital solutions.',
    icon: Cpu,
    accent: 'text-[#5dc192]',
    glowBg: 'bg-[#5dc192]',
    borderColor: 'border-[#5dc192]/30',
    widget: {
      metric: '99.99%',
      label: 'System Reliability',
      icon: Layers,
      status: 'Next.js + WebGL Engine',
    }
  },
  {
    id: '03',
    title: 'Client Focus Approach',
    subtitle: 'Tailored Execution',
    description: 'We prioritize understanding client needs to deliver solutions that align perfectly with their goals.',
    icon: Target,
    accent: 'text-[#5dc192]',
    glowBg: 'bg-[#5dc192]',
    borderColor: 'border-[#5dc192]/30',
    widget: {
      metric: '100%',
      label: 'Goal Alignment',
      icon: ShieldCheck,
      status: 'Precision Execution',
    }
  },
  {
    id: '04',
    title: '24/7 Customer Support',
    subtitle: 'Always-On Assistance',
    description: 'Complete support throughout the entire process with reliable assistance available whenever you need it.',
    icon: Headphones,
    accent: 'text-[#5dc192]',
    glowBg: 'bg-[#5dc192]',
    borderColor: 'border-[#5dc192]/30',
    widget: {
      metric: '24/7/365',
      label: 'Uptime & Response',
      icon: Radio,
      status: 'Live Response Team',
    }
  },
];

export default function OurEdge() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Staggered Bento Cards Animation
      const cards = gsap.utils.toArray<HTMLElement>('.bento-card');
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.bento-grid',
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
      className="relative w-full bg-black text-white pb-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 opacity-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-4 bg-neutral-900 border border-neutral-800 font-mono text-xs uppercase tracking-widest rounded-full text-[#5dc192]">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '6s' }} />
              <span>[ OUR EDGE ]</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.08] text-white">
              The Axstar{' '}
              <span className="text-[#5dc192] font-medium">Advantage</span>
            </h2>
          </div>

          <p className="text-base sm:text-lg text-neutral-400 max-w-sm font-normal leading-relaxed">
            An architectural breakdown of our core engineering methodology and client support strategy.
          </p>
        </div>

        {/* Dynamic Bento Grid Container */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Edge 01: Strategic Thinking (Wide Top Left Card) */}
          <div className="bento-card md:col-span-7 bg-black border border-neutral-800/80 rounded-2xl p-8 flex flex-col justify-between min-h-[340px] relative overflow-hidden group hover:border-[#5dc192]/40 transition-all duration-500 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#5dc192]">
                  {React.createElement(edges[0].icon, { className: 'w-6 h-6' })}
                </div>
                <div>
                 
                  
                </div>
              </div>

             
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2 group-hover:text-[#5dc192] transition-colors duration-300">
                {edges[0].title}
              </h3>
              <p className="text-sm text-neutral-400 font-normal leading-relaxed max-w-xl">
                {edges[0].description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800/60 flex items-center justify-between text-xs font-mono text-neutral-400">
              <span>{edges[0].widget.status}</span>
              
            </div>
          </div>

          {/* Edge 02: Technology Expertise (Top Right Card) */}
          <div className="bento-card md:col-span-5 bg-black border border-neutral-800/80 rounded-2xl p-8 flex flex-col justify-between min-h-[340px] relative overflow-hidden group hover:border-[#5dc192]/40 transition-all duration-500 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#5dc192]">
                {React.createElement(edges[1].icon, { className: 'w-6 h-6' })}
              </div>
              
            </div>

            <div className="my-4">
              <div className="text-4xl font-semibold text-[#5dc192] mb-1 font-mono">
                {edges[1].widget.metric}
              </div>
              <p className="text-xs text-neutral-500 font-mono uppercase tracking-wider">{edges[1].widget.label}</p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-white mb-1.5 group-hover:text-[#5dc192] transition-colors duration-300">
                {edges[1].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                {edges[1].description}
              </p>
            </div>
          </div>

          {/* Edge 03: Client Focus Approach (Bottom Row 1) */}
          <div className="bento-card md:col-span-4 bg-black border border-neutral-800/80 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:border-[#5dc192]/40 transition-all duration-500 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#5dc192]">
                {React.createElement(edges[2].icon, { className: 'w-6 h-6' })}
              </div>
             
            </div>

            <div className="relative z-10 my-4">
              <div className="text-3xl font-semibold text-[#5dc192] font-mono mb-1">{edges[2].widget.metric}</div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#5dc192] transition-colors duration-300">
                {edges[2].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                {edges[2].description}
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-800/60 font-mono text-xs text-neutral-500 flex justify-between">
              <span>{edges[2].widget.status}</span>
              
            </div>
          </div>

          {/* Edge 04: 24/7 Customer Support (Bottom Row 2) */}
          <div className="bento-card md:col-span-4 bg-black border border-neutral-800/80 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:border-[#5dc192]/40 transition-all duration-500 backdrop-blur-md">
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-[#5dc192]">
                {React.createElement(edges[3].icon, { className: 'w-6 h-6' })}
              </div>
             
            </div>

            <div className="relative z-10 my-4">
              <div className="text-3xl font-semibold text-[#5dc192] font-mono mb-1">{edges[3].widget.metric}</div>
              <h3 className="text-xl font-medium text-white mb-2 group-hover:text-[#5dc192] transition-colors duration-300">
                {edges[3].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 font-normal leading-relaxed">
                {edges[3].description}
              </p>
            </div>

            <div className="pt-3 border-t border-neutral-800/60 font-mono text-xs text-neutral-500 flex justify-between items-center">
              <span>{edges[3].widget.status}</span>
              
            </div>
          </div>

          {/* Call To Action Card (Bottom Row 3) */}
          <div className="bento-card md:col-span-4 bg-black border border-neutral-800/80 rounded-2xl p-8 flex flex-col justify-between min-h-[320px] relative overflow-hidden group hover:border-[#5dc192]/40 transition-all duration-500 backdrop-blur-md">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium text-white mb-3">
                Ready to get started?
              </h3>
              <p className="text-sm text-neutral-400 font-normal leading-relaxed">
                Let’s make this happen. We’re ready when you are.
              </p>
            </div>

            <div className="space-y-3 pt-6">
              <button className="w-full py-3 px-6 rounded-full bg-[#5dc192] hover:bg-[#5dc192]/90 text-black font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(93,193,146,0.3)]">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="w-full py-3 px-6 rounded-full bg-black/80 hover:bg-neutral-900 text-neutral-300 border border-neutral-800 hover:border-neutral-700 text-sm font-medium transition-all duration-300">
                Get in touch
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Subtle Background Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-20" />
    </section>
  );
}