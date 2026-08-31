'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Send, Droplets } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const footerLinks = {
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
  ],
  services: [
    { label: 'Web Development', href: '#' },
    { label: 'UI/UX Design', href: '#' },
    { label: '3D Animations', href: '#' },
    { label: 'Architecture & Optimization', href: '#' },
  ],
  socials: [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter / X', href: '#' },
    { label: 'Dribbble', href: '#' },
  ],
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);
  const ripple1Ref = useRef<HTMLDivElement>(null);
  const ripple2Ref = useRef<HTMLDivElement>(null);
  const ripple3Ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // GSAP Water Drop & Unfurl Animation
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footer = footerRef.current;
    const drop = dropRef.current;
    const ripple1 = ripple1Ref.current;
    const ripple2 = ripple2Ref.current;
    const ripple3 = ripple3Ref.current;
    const content = contentRef.current;

    if (!footer || !drop || !ripple1 || !ripple2 || !ripple3 || !content) return;

    const ctx = gsap.context(() => {
      const links = gsap.utils.toArray<HTMLElement>('.footer-anim-item');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: footer,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // 1. Water Drop Falls from Top
      tl.fromTo(
        drop,
        {
          y: -250,
          scaleY: 1.8,
          scaleX: 0.6,
          opacity: 0,
        },
        {
          y: 0,
          scaleY: 0.4,
          scaleX: 1.6,
          opacity: 1,
          duration: 0.7,
          ease: 'power4.in',
        }
      )
      // 2. Squash Drop into Impact Point
      .to(drop, {
        scale: 0,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.out',
      })
      // 3. Concentric Ripples Expand Outward
      .fromTo(
        [ripple1, ripple2, ripple3],
        {
          scale: 0,
          opacity: 0.8,
        },
        {
          scale: 3.5,
          opacity: 0,
          duration: 1.4,
          stagger: 0.18,
          ease: 'power2.out',
        },
        '-=0.1'
      )
      // 4. Content Unfurls from Impact Point
      .fromTo(
        content,
        {
          opacity: 0,
          scale: 0.94,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power3.out',
        },
        '-=1.2'
      )
      // 5. Staggered Link Items Float Up
      .fromTo(
        links,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power2.out',
        },
        '-=0.6'
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  // Interactive Click Canvas Ripple Effect
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    let radius = 0;
    const maxRadius = 180;

    const animateRipple = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255, 255, 255, ${1 - radius / maxRadius})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      radius += 4;
      if (radius < maxRadius) {
        requestAnimationFrame(animateRipple);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    animateRipple();
  };

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-white dark:bg-black text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-900 overflow-hidden py-20 sm:py-28"
    >
      {/* INTERACTIVE WATER RIPPLE CANVAS */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        width={1920}
        height={800}
        className="absolute inset-0 w-full h-full z-10 pointer-events-auto cursor-crosshair opacity-40"
      />

      {/* WATER DROPLET & IMPACT RIPPLE ANIMATION OBJECTS */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-20">
        {/* Falling Water Drop */}
        <div
          ref={dropRef}
          className="w-8 h-8 rounded-full bg-neutral-900 dark:bg-white shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        />

        {/* Concentric Water Impact Rings */}
        <div
          ref={ripple1Ref}
          className="absolute w-64 h-64 rounded-full border border-neutral-400 dark:border-neutral-600 opacity-0"
        />
        <div
          ref={ripple2Ref}
          className="absolute w-64 h-64 rounded-full border border-neutral-300 dark:border-neutral-700 opacity-0"
        />
        <div
          ref={ripple3Ref}
          className="absolute w-64 h-64 rounded-full border border-neutral-200 dark:border-neutral-800 opacity-0"
        />
      </div>

      {/* FOOTER MAIN CONTENT */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 pointer-events-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-neutral-200 dark:border-neutral-900">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-neutral-900 dark:text-white font-semibold text-2xl tracking-tight">
              <Droplets className="w-6 h-6 text-amber-500" />
              <span>AXSTAR</span>
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
              Architecting high-frequency digital experiences with refined aesthetics and minimalist precision.
            </p>

            {/* NEWSLETTER INPUT */}
            <div className="pt-2 max-w-sm">
              <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs sm:text-sm text-neutral-900 dark:text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-600 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 p-2 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black hover:scale-105 transition-transform"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Navigation
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.navigation.map((item, idx) => (
                  <li key={idx} className="footer-anim-item">
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Services
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.services.map((item, idx) => (
                  <li key={idx} className="footer-anim-item">
                    <Link
                      href={item.href}
                      className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Socials */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
                Socials
              </h4>
              <ul className="space-y-2.5">
                {footerLinks.socials.map((item, idx) => (
                  <li key={idx} className="footer-anim-item">
                    <a
                      href={item.href}
                      className="inline-flex items-center gap-1 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors group"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT ROW */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500 dark:text-neutral-400">
          <p>© {new Date().getFullYear()} Axstar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>

      {/* BACKGROUND GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </footer>
  );
}