'use client';

import React, { useState, useEffect } from 'react';
import { Mail, LogIn, Cpu, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
          ? 'bg-black/90 backdrop-blur-md border-b border-neutral-800 shadow-lg shadow-black/50 py-3.5'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2.5 group z-10">
          <div className="w-9 h-9 bg-white text-black flex items-center justify-center rounded-xl font-bold shadow-md transition-transform group-hover:scale-105">
            <Cpu className="w-5 h-5 text-black" />
          </div>
          <span className="text-lg font-bold tracking-tight text-white group-hover:text-neutral-300 transition-colors">
            NEXUS<span className="text-neutral-500">.AI</span>
          </span>
        </a>

        {/* Center: Nav Links (Absolute Centered to Entire Page) */}
        <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-neutral-950/60 border border-neutral-800/80 px-4 py-1.5 rounded-full backdrop-blur-sm z-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-3 z-10">
          {/* Login Button */}
          <a
            href="#login"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 hover:border-neutral-700 rounded-xl transition-all"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>Login</span>
          </a>

          {/* Contact Us Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-black bg-white hover:bg-neutral-200 rounded-xl shadow-sm transition-all active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Us</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-400 hover:text-white rounded-lg focus:outline-none z-10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 text-sm font-medium text-neutral-300 hover:text-white hover:bg-neutral-900 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-neutral-900 flex flex-col gap-2.5">
            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-neutral-300 bg-neutral-950 border border-neutral-800 rounded-xl"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-black bg-white rounded-xl"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}