'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Send, Droplets } from 'lucide-react';

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
  return (
    <footer className="relative w-full bg-white dark:bg-black text-neutral-900 dark:text-white border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300 py-16 sm:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
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
                  <li key={idx}>
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
                  <li key={idx}>
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
                  <li key={idx}>
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