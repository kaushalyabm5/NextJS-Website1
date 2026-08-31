'use client';

import React, { useLayoutEffect, useRef } from 'react';
import { 
  Compass, 
  Cpu, 
  Target, 
  Headphones, 
  Sparkles,
  Zap,
  Activity,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Layers,
  Radio
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
    accent: 'text-amber-500',
    glowBg: 'bg-amber-500',
    borderColor: 'border-amber-500/30',
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
    accent: 'text-blue-500',
    glowBg: 'bg-blue-500',
    borderColor: 'border-blue-500/30',
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
    accent: 'text-emerald-500',
    glowBg: 'bg-emerald-500',
    borderColor: 'border-emerald-500/30',
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
    accent: 'text-rose-500',
    glowBg: 'bg-rose-500',
    borderColor: 'border-rose-500/30',
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
  const progressBarRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Header Fade & Lift
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
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

      // Continuous Glowing Laser Progress Line Fill
      gsap.fromTo(
        progressBarRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: '.edge-timeline-wrapper',
            start: 'top 60%',
            end: 'bottom 70%',
            scrub: 0.5,
          },
        }
      );

      // Item Scroll Reveal & Glowing Node Triggering
      const items = gsap.utils.toArray<HTMLElement>('.edge-timeline-item');
      items.forEach((item) => {
        const node = item.querySelector('.edge-node');
        const content = item.querySelector('.edge-content');
        const widget = item.querySelector('.edge-widget');

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 70%',
            toggleActions: 'play reverse play reverse',
          },
        });

        tl.fromTo(
          node,
          { scale: 0.5, opacity: 0.3 },
          { scale: 1.25, opacity: 1, duration: 0.4, ease: 'back.out(2)' }
        )
        .to(node, { scale: 1, duration: 0.2 })
        .fromTo(
          content,
          { opacity: 0, x: -30 },
          { opacity: 1, x: 0, duration: 0.6, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(
          widget,
          { opacity: 0, x: 30, scale: 0.95 },
          { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: 'power3.out' },
          '-=0.6'
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-36 bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* Section Header */}
        <div ref={headerRef} className="max-w-3xl mb-24 opacity-0">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900 dark:text-white animate-spin" style={{ animationDuration: '6s' }} />
            <span>[ OUR EDGE ]</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight leading-[1.05] mb-6 text-neutral-900 dark:text-white">
            The Axstar{' '}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
              Advantage.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            An architectural breakdown of our core engineering methodology and client support strategy.
          </p>
        </div>

        {/* Card-Free Timeline Layout */}
        <div className="edge-timeline-wrapper relative pl-6 sm:pl-12">
          
          {/* Base Background Track Line */}
          <div className="absolute left-2.5 sm:left-4 top-4 bottom-4 w-0.5 bg-neutral-200 dark:bg-neutral-800/80 pointer-events-none" />

          {/* Animated Glowing Laser Fill Line */}
          <div 
            ref={progressBarRef}
            className="absolute left-2.5 sm:left-4 top-4 w-0.5 bg-gradient-to-b from-amber-500 via-blue-500 to-rose-500 shadow-[0_0_12px_rgba(59,130,246,0.8)] pointer-events-none origin-top"
          />

          {/* Timeline Items */}
          <div className="space-y-28 sm:space-y-36">
            {edges.map((edge) => {
              const Icon = edge.icon;
              const WidgetIcon = edge.widget.icon;

              return (
                <div 
                  key={edge.id}
                  className="edge-timeline-item relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  
                  {/* Glowing Node Dot on Timeline */}
                  <div className="edge-node absolute -left-[30px] sm:-left-[54px] top-1.5 z-20 flex items-center justify-center">
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${edge.glowBg}`} style={{ animationDuration: '3s' }} />
                      <span className={`relative inline-flex rounded-full h-3.5 w-3.5 ${edge.glowBg} ring-4 ring-white dark:ring-black shadow-[0_0_15px_rgba(255,255,255,0.6)]`} />
                    </span>
                  </div>

                  {/* Left Column: Number + Content */}
                  <div className="edge-content lg:col-span-7 space-y-4">
                    
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-sm tracking-widest uppercase ${edge.accent}`}>
                        // {edge.id}
                      </span>
                      <span className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
                      <span className="font-mono text-xs text-neutral-400 dark:text-neutral-500 uppercase tracking-wider">
                        {edge.subtitle}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white shadow-sm`}>
                        <Icon className={`w-6 h-6 ${edge.accent}`} />
                      </div>
                      <h3 className="text-2xl sm:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                        {edge.title}
                      </h3>
                    </div>

                    <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal max-w-2xl pt-1">
                      {edge.description}
                    </p>
                  </div>

                  {/* Right Column: Dynamic Glowing Micro-Widget */}
                  <div className="edge-widget lg:col-span-5">
                    <div className={`relative p-6 sm:p-8 rounded-2xl bg-neutral-50/60 dark:bg-neutral-950/60 backdrop-blur-md border ${edge.borderColor} space-y-4 overflow-hidden shadow-lg`}>
                      
                      {/* Corner Ambient Glow */}
                      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none ${edge.glowBg}`} />

                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-2 font-mono text-xs text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">
                          <WidgetIcon className={`w-4 h-4 ${edge.accent} animate-pulse`} />
                          {edge.widget.label}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full font-mono text-[10px] uppercase bg-neutral-200/50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400">
                          <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                          Verified
                        </span>
                      </div>

                      <div className="flex items-baseline gap-3">
                        <span className={`text-4xl sm:text-5xl font-semibold tracking-tight ${edge.accent}`}>
                          {edge.widget.metric}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-800/60 flex items-center justify-between font-mono text-xs text-neutral-600 dark:text-neutral-400">
                        <span>{edge.widget.status}</span>
                        <Zap className={`w-3.5 h-3.5 ${edge.accent} animate-bounce`} />
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* Background Architectural Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </section>
  );
}