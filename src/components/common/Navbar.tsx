'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import {
  Sun,
  Moon,
  ChevronDown,
  Globe,
  TrendingUp,
  Smartphone,
  Palette,
  Cpu,
  LineChart,
  Bot,
  Sparkles,
  Zap,
  Menu,
  X,
} from 'lucide-react';

import logo from '@/assets/logo/logo.webp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'services' | 'products' | null>(null);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Web Development',
      desc: 'Modern, performant web applications.',
      icon: Globe,
      color: 'bg-blue-500/15 text-blue-400',
    },
    {
      title: 'Digital Marketing',
      desc: 'Data-driven growth strategies.',
      icon: TrendingUp,
      color: 'bg-emerald-500/15 text-emerald-400',
    },
    {
      title: 'Mobile App Development',
      desc: 'Native and cross-platform mobile solutions.',
      icon: Smartphone,
      color: 'bg-indigo-500/15 text-indigo-400',
    },
    {
      title: 'UI/UX Design',
      desc: 'Intuitive and engaging user interfaces.',
      icon: Palette,
      color: 'bg-pink-500/15 text-pink-400',
    },
    {
      title: 'AI Automation Solutions',
      desc: 'Intelligent workflows and custom AI agents.',
      icon: Cpu,
      color: 'bg-purple-500/15 text-purple-400',
    },
    {
      title: 'Business Strategy & Consulting',
      desc: 'Scalable architecture and business growth.',
      icon: LineChart,
      color: 'bg-amber-500/15 text-amber-400',
    },
  ];

  const products = [
    {
      name: 'Jezzy AI',
      desc: 'Next-gen autonomous AI agent for enterprise.',
      icon: Bot,
      color: 'bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/20',
    },
    {
      name: 'Cosmo Engine',
      desc: 'High-speed data orchestration platform.',
      icon: Sparkles,
      color: 'bg-gradient-to-tr from-cyan-500 to-blue-500 text-white shadow-lg shadow-blue-500/20',
    },
    {
      name: 'PulseFlow',
      desc: 'Real-time analytics and predictive insights.',
      icon: Zap,
      color: 'bg-gradient-to-tr from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20',
    },
  ];

  return (
    <header className="fixed top-3 left-0 right-0 z-50 flex justify-center px-4">
      <div
        className={`w-full max-w-[85%] md:max-w-[80%] rounded-full transition-all duration-300 ease-in-out backdrop-blur-xl border ${
          isScrolled
            ? 'bg-white/85 dark:bg-black/80 border-neutral-300 dark:border-white/20 shadow-xl py-3 px-8'
            : 'bg-white/70 dark:bg-black/60 border-neutral-200 dark:border-white/15 shadow-lg py-3.5 px-8'
        }`}
      >
        <div className="relative flex items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 group z-10 cursor-pointer">
            <Image
              src={logo}
              alt="Logo"
              className="h-6 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </Link>

          {/* Center: Nav Links */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 z-10">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all cursor-pointer"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setActiveDropdown('services')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all cursor-pointer">
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[580px]">
                  <div className="bg-black border border-neutral-800 rounded-3xl p-4 shadow-2xl grid grid-cols-2 gap-2">
                    {services.map((item) => {
                      const IconComponent = item.icon;
                      return (
                        <Link
                          key={item.title}
                          href="#"
                          className="p-3 rounded-2xl hover:bg-neutral-900 transition-all flex items-start gap-3.5 group border border-transparent hover:border-neutral-800 cursor-pointer"
                        >
                          <div className={`p-2.5 rounded-xl ${item.color} group-hover:scale-110 transition-transform`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div className="space-y-0.5">
                            <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {item.title}
                            </p>
                            <p className="text-xs text-neutral-400 line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setActiveDropdown('products')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all cursor-pointer">
                <span>Products</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'products' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[360px]">
                  <div className="bg-black border border-neutral-800 rounded-3xl p-3 shadow-2xl flex flex-col gap-1.5">
                    {products.map((prod) => {
                      const ProdIcon = prod.icon;
                      return (
                        <Link
                          key={prod.name}
                          href="#"
                          className="p-3 rounded-2xl hover:bg-neutral-900 transition-all flex items-center gap-3.5 group border border-transparent hover:border-neutral-800 cursor-pointer"
                        >
                          <div className={`p-3 rounded-2xl ${prod.color} shrink-0 group-hover:scale-105 transition-transform`}>
                            <ProdIcon className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                              {prod.name}
                            </p>
                            <p className="text-xs text-neutral-400">
                              {prod.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/About"
              className="px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              href="/Portfolio"
              className="px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              href="/Insights"
              className="px-4 py-2 text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-all cursor-pointer"
            >
              Insights
            </Link>
          </nav>

          {/* Right: Actions */}
          <div className="hidden md:flex items-center gap-3 z-10">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="Toggle Theme"
                className="cursor-pointer p-2.5 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white bg-black/5 dark:bg-white/10 border border-neutral-300 dark:border-white/15 rounded-full transition-all hover:scale-105 active:scale-95"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            )}

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-black/90 hover:bg-black dark:bg-white/15 dark:hover:bg-white/25 border border-white/20 rounded-full shadow-md backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>Talk To Us</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white rounded-full focus:outline-none z-10 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
    </header>
  );
}