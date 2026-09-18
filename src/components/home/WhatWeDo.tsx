'use client';

import React, { useState, useEffect } from 'react';
import { Layers, ShoppingBag, Cpu, ShieldCheck } from 'lucide-react';

export default function WhatWeDo() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    { label: 'Retail', icon: ShoppingBag, color: 'from-blue-600/40 via-purple-600/30 to-amber-500/40' },
    { label: 'Enterprise', icon: Layers, color: 'from-cyan-600/40 via-indigo-600/30 to-rose-500/40' },
    { label: 'AI Platform', icon: Cpu, color: 'from-emerald-600/40 via-blue-600/30 to-purple-500/40' },
    { label: 'Security', icon: ShieldCheck, color: 'from-violet-600/40 via-fuchsia-600/30 to-amber-500/40' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  const CurrentIcon = features[activeTab].icon;

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Exact Typography Matching Reference Image */}
        <div className="lg:col-span-8 space-y-3">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.3rem] font-normal tracking-tight leading-[1.3] text-neutral-100 max-w-2xl">
            We help enterprises reimagine business growth with our AI Platform, Work Solutions, and Intelligent Marketplace. Unlock efficiency, automation, and innovation across every workflow.
          </h2>
        </div>

        {/* Right Side: 3D Orb Graphic */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center cursor-pointer group">
            
            {/* Outer Soft Glow */}
            <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${features[activeTab].color} blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700`} />

            {/* Glass Orb Shell */}
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent backdrop-blur-3xl border border-white/20 shadow-2xl flex flex-col items-center justify-center overflow-hidden transition-all duration-700 group-hover:scale-105">
              
              {/* Inner Radial Highlight */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full pointer-events-none" />
              <div className={`absolute inset-0 bg-gradient-to-tr ${features[activeTab].color} opacity-40 mix-blend-screen transition-all duration-700`} />

              {/* Center Icon & Dynamic Label */}
              <div className="relative z-10 flex flex-col items-center gap-2 transition-all duration-500 transform group-hover:scale-110">
                <CurrentIcon className="w-10 h-10 md:w-12 md:h-12 text-white drop-shadow-md transition-all duration-500" />
                <span className="text-base md:text-lg font-normal tracking-wide text-white/90 drop-shadow-sm">
                  {features[activeTab].label}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}