'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Sparkles, 
  Code2, 
  Smartphone, 
  Bot, 
  TrendingUp, 
  Palette, 
  Briefcase, 
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  Cpu
} from 'lucide-react';

const SERVICES = [
  {
    title: 'Web Development',
    description: 'Engineering high-performance, scalable web platforms with ultra-fast responsiveness and cutting-edge interactive architecture.',
    previewType: 'web',
  },
  {
    title: 'Mobile App Development',
    description: 'Crafting intuitive, cross-platform native iOS and Android mobile experiences engineered for maximum user engagement.',
    previewType: 'mobile',
  },
  {
    title: 'AI Automation Solutions',
    description: 'Deploying custom LLM integrations and workflow automation systems to optimize operational speed and accuracy.',
    previewType: 'ai',
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven growth strategies, search visibility, and targeted performance marketing designed to scale brand reach.',
    previewType: 'marketing',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing dark luxury and minimalist digital interfaces with precise visual hierarchy and seamless user journeys.',
    previewType: 'design',
  },
  {
    title: 'Business Strategy & Consulting',
    description: 'Providing strategic roadmaps, digital architecture advice, and market execution plans for enterprise expansion.',
    previewType: 'strategy',
  },
];

export default function WhatWeDoAbout() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Centered Header Animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 85%',
          },
        }
      );

      // Staggered Bento Cards Animation
      if (gridRef.current) {
        const cards = gridRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black text-white pt-15 pb-15  px-6 sm:px-12 lg:px-20"
    >
      {/* AMBIENT GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#5dc192]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* CENTERED HEADER SECTION */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center space-y-6 flex flex-col items-center">
          

          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1]">
            Solutions we create
          </h2>

          <p className="text-white text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
           At Axstar, we help businesses innovate, grow, and scale through a combination of technology, digital expertise, and strategic guidance.
          </p>

          {/* CENTERED SMALL BUTTON */}
          <div className="pt-2">
            <button className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-black/80 hover:bg-black rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md cursor-pointer">
              <span>View All Services</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 6 CARD BENTO GRID */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((item, index) => (
            <div
              key={index}
              className="group relative bg-neutral-950/90 border border-white/10 rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-[#5dc192]/50 hover:shadow-[0_0_30px_rgba(93,193,146,0.1)] flex flex-col justify-between space-y-8 overflow-hidden cursor-pointer"
            >
              {/* UI PREVIEW CONTAINER */}
              <div className="w-full h-44 rounded-2xl bg-black/60 border border-white/10 p-4 flex items-center justify-center relative overflow-hidden group-hover:border-white/20 transition-colors">
                
                {/* PREVIEW: WEB DEVELOPMENT */}
                {item.previewType === 'web' && (
                  <div className="w-full space-y-2 text-xs font-mono">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-lg text-neutral-300">
                      <span className="flex items-center gap-2">
                        <Code2 className="w-3.5 h-3.5 text-[#5dc192]" /> Next.js 15 App
                      </span>
                      <span className="text-[10px] text-neutral-500">60 FPS</span>
                    </div>
                    <div className="p-2.5 bg-neutral-900/80 border border-white/5 rounded-lg space-y-1.5">
                      <div className="h-1.5 w-3/4 bg-white/20 rounded" />
                      <div className="h-1.5 w-1/2 bg-[#5dc192]/80 rounded" />
                    </div>
                  </div>
                )}

                {/* PREVIEW: MOBILE APP DEVELOPMENT */}
                {item.previewType === 'mobile' && (
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-28 border border-white/20 rounded-2xl p-2 bg-neutral-900 flex flex-col justify-between">
                      <div className="w-6 h-1 bg-white/20 rounded-full mx-auto" />
                      <div className="flex items-center justify-center">
                        <Smartphone className="w-6 h-6 text-[#5dc192]" />
                      </div>
                      <div className="w-3 h-3 border border-white/20 rounded-full mx-auto" />
                    </div>
                    <div className="text-[10px] font-mono text-neutral-400 space-y-1">
                      <div>iOS & Android</div>
                      <div className="text-white font-semibold">Native Swift / React Native</div>
                    </div>
                  </div>
                )}

                {/* PREVIEW: AI AUTOMATION */}
                {item.previewType === 'ai' && (
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between px-3 py-2 bg-neutral-900 border border-white/10 rounded-xl text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <Bot className="w-4 h-4 text-[#5dc192]" />
                        <span className="text-neutral-300">Agent Pipeline</span>
                      </div>
                      <span className="text-[10px] text-[#5dc192]">Active</span>
                    </div>
                    <div className="h-10 w-full bg-neutral-900/40 border border-white/5 rounded-xl p-2 flex items-center justify-around gap-1">
                      {[Cpu, Layers, Sparkles].map((Icon, i) => (
                        <div key={i} className="w-6 h-6 rounded bg-white/5 border border-white/10 flex items-center justify-center">
                          <Icon className="w-3 h-3 text-neutral-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* PREVIEW: DIGITAL MARKETING */}
                {item.previewType === 'marketing' && (
                  <div className="w-full space-y-2">
                    <div className="flex items-center justify-between px-3 py-1.5 bg-neutral-900 border border-white/10 rounded-lg text-xs font-mono">
                      <span className="flex items-center gap-1.5 text-neutral-300">
                        <TrendingUp className="w-3.5 h-3.5 text-[#5dc192]" /> Growth ROI
                      </span>
                      <span className="text-[#5dc192]">+240%</span>
                    </div>
                    <div className="h-14 w-full bg-neutral-900/50 border border-white/5 rounded-lg p-2 flex items-end gap-1.5">
                      {[30, 50, 45, 70, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-[#5dc192]/60 rounded-t" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                )}

                {/* PREVIEW: UI/UX DESIGN */}
                {item.previewType === 'design' && (
                  <div className="w-full space-y-2">
                    <div className="flex justify-between items-center px-3 py-2 bg-neutral-900 border border-white/10 rounded-lg text-xs font-mono text-neutral-300">
                      <span className="flex items-center gap-2">
                        <Palette className="w-3.5 h-3.5 text-[#5dc192]" /> Design System
                      </span>
                      <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                    </div>
                    <div className="flex gap-2 justify-center">
                      <div className="w-8 h-8 rounded-lg bg-black border border-white/20" />
                      <div className="w-8 h-8 rounded-lg bg-[#5dc192]" />
                      <div className="w-8 h-8 rounded-lg bg-neutral-800" />
                    </div>
                  </div>
                )}

                {/* PREVIEW: BUSINESS STRATEGY */}
                {item.previewType === 'strategy' && (
                  <div className="w-full space-y-2 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-900 border border-white/10 rounded-full text-xs font-mono text-[#5dc192]">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Enterprise Roadmap</span>
                    </div>
                    <div className="flex justify-around text-[10px] font-mono text-neutral-400 pt-2">
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#5dc192]" /> Scalability</span>
                      <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-[#5dc192]" /> Architecture</span>
                    </div>
                  </div>
                )}

              </div>

              {/* CARD TITLE & DESCRIPTION */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-[#5dc192] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}