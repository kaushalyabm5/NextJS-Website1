'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis with maximum slipperiness (ලෙස්සන ෆීලින්ග් එක)
    const lenis = new Lenis({
      duration: 3.2, // Long coasting time after scroll stops
      easing: (t) => 1 - Math.pow(1 - t, 5), // Quintic ease-out for zero-friction glide
      lerp: 0.03, // Ultra-low lerp for maximum slippery inertia
      smoothWheel: true,
      wheelMultiplier: 1.1, // Gives initial movement an effortless glide start
      touchMultiplier: 1.8,
      infinite: false,
    });

    // Synchronize Lenis scroll updates with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Run Lenis frame updates inside GSAP's ticker loop
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}