'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, LogIn, Mail, Cpu, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/Services' },
    { name: 'About Us', href: '/About' },
    { name: 'Careers', href: '#careers' },
    { name: 'Portfolio', href: '#portfolio' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800 shadow-md py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2.5 group z-10">
          <div className="w-9 h-9 bg-black dark:bg-white text-white dark:text-black flex items-center justify-center rounded-xl font-bold shadow-md transition-transform group-hover:scale-105">
            <Cpu className="w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-tight text-neutral-900 dark:text-white">
            NEXUS<span className="text-neutral-400 dark:text-neutral-500">.AI</span>
          </span>
        </a>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-neutral-100/80 dark:bg-black/90 px-4 py-1.5 rounded-full backdrop-blur-sm z-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white hover:bg-neutral-200/60 dark:hover:bg-neutral-900 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3 z-10">
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle Theme"
              className="cursor-pointer p-2 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-xl transition-all"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          )}

          {/* Login Button */}
          <a
            href="#login"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 rounded-xl transition-all"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Login</span>
          </a>

          {/* Contact Us Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white dark:text-black bg-black dark:bg-white hover:opacity-90 rounded-xl shadow-sm transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white rounded-lg focus:outline-none z-10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}