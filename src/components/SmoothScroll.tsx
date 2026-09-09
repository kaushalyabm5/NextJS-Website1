'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // 1. Initialize Lenis once on mount
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 3.2,
      easing: (t) => 1 - Math.pow(1 - t, 5),
      lerp: 0.03,
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.8,
      infinite: false,
    });

    lenisRef.current = lenis;

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
      lenisRef.current = null;
    };
  }, []);

  // 2. Reset Lenis scroll position instantly whenever the route changes
  useEffect(() => {
    if (lenisRef.current) {
      // Force Lenis to scroll to top immediately without smooth animation
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return <>{children}</>;
}