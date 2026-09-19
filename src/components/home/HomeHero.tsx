"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HomeHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => console.log("Autoplay error:", err));
    }
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-10 px-4">
      {/* Background Video Layer */}
      <div className="absolute inset-0 -z-10 w-full h-full bg-black">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center pointer-events-none"
        >
          <source src="/assets/home-hero/hero-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center z-10 space-y-6">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white/90 font-normal shadow-inner">
          Jezzy AI Beta Version is launching on 23rd September
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] max-w-3xl">
          Next-gen enterprise <br className="hidden sm:inline" />
          with AI Agents
        </h1>

        <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
          Axstar turns ideas into scalable, high-performance digital solutions, <br className="hidden sm:inline" />
          driving business growth from strategy to full deployment.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-black/80 hover:bg-black rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            Get Started
          </Link>

          <Link
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/15 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}