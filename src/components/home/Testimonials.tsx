'use client';

import React from 'react';
import { Star, Quote } from 'lucide-react';

const row1Testimonials = [
  {
    quote: "Axstar transformed our enterprise platform architecture completely. The performance gain was immediate.",
    author: 'Elena Rostova',
    role: 'VP of Product, Apex Tech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: "Their eye for minimalist dark luxury aesthetics matched with sub-second performance is rare.",
    author: 'Marcus Vance',
    role: 'Founder & CEO, Vance Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: "From discovery to global deployment, every deadline was met with architectural perfection.",
    author: 'Sarah Jenkins',
    role: 'Head of Design, Lumina Digital',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: "The scalable API integration and ultra-smooth interface design elevated our product value instantly.",
    author: 'David Chen',
    role: 'Co-Founder, Synapse AI',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
];

const row2Testimonials = [
  {
    quote: "The cleanest UI execution we have ever integrated into our fintech pipeline. Exceptional delivery.",
    author: 'Liam Thorne',
    role: 'CTO, Quantum Pay',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: "A true masterclass in high-contrast digital elegance. Our clients loved the new dashboard.",
    author: 'Sophia Althaus',
    role: 'Managing Director, Horizon',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: "Reliable engineering, transparent progress updates, and impeccable attention to detail.",
    author: 'Alexander Wright',
    role: 'Lead Architect, Aether Digital',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote: "Seamless execution across all viewports. Their work exceeded our leadership team's expectations.",
    author: 'Chloe Dupont',
    role: 'Director of Marketing, Stellar',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden">
      
      {/* HEADER SECTION */}
      <div className="text-center max-w-3xl mx-auto space-y-4 px-6 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
          <span>[ TESTIMONIALS ]</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-normal tracking-tight leading-tight text-neutral-900 dark:text-white">
          What Our{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
            Clients Say
          </span>
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-xl font-normal tracking-wide">
          Where client success meets trust
        </p>
      </div>

      {/* MARQUEE CAROUSEL CONTAINER */}
      <div className="relative w-full flex flex-col gap-6 overflow-hidden">
        
        {/* ROW 1: LEFT TO RIGHT */}
        <div className="flex w-max animate-marquee-left-to-right hover:[animation-play-state:paused]">
          {[...row1Testimonials, ...row1Testimonials, ...row1Testimonials].map((item, idx) => (
            <TestimonialCard key={`r1-${idx}`} item={item} />
          ))}
        </div>

        {/* ROW 2: RIGHT TO LEFT */}
        <div className="flex w-max animate-marquee-right-to-left hover:[animation-play-state:paused]">
          {[...row2Testimonials, ...row2Testimonials, ...row2Testimonials].map((item, idx) => (
            <TestimonialCard key={`r2-${idx}`} item={item} />
          ))}
        </div>

      
      </div>

      {/* Keyframes for opposite direction scrolling */}
      <style jsx global>{`
        @keyframes marquee-left-to-right {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marquee-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-marquee-left-to-right {
          animation: marquee-left-to-right 35s linear infinite;
        }

        .animate-marquee-right-to-left {
          animation: marquee-right-to-left 35s linear infinite;
        }
      `}</style>
    </section>
  );
}

// SINGLE TESTIMONIAL CARD
function TestimonialCard({ item }: { item: typeof row1Testimonials[0] }) {
  return (
    <div className="w-[320px] sm:w-[400px] mx-3 shrink-0 rounded-2xl bg-neutral-100/90 dark:bg-neutral-900/80 border border-neutral-200 dark:border-neutral-800 p-6 flex flex-col justify-between shadow-lg backdrop-blur-md transition-all duration-300 hover:border-neutral-400 dark:hover:border-neutral-700">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="w-5 h-5 text-neutral-300 dark:text-neutral-700" />
        </div>

        <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed font-normal mb-6">
          "{item.quote}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/60 dark:border-neutral-800/60">
        <img
          src={item.avatar}
          alt={item.author}
          className="w-10 h-10 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
        />
        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-neutral-900 dark:text-white">
            {item.author}
          </h4>
          <p className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
            {item.role}
          </p>
        </div>
      </div>
    </div>
  );
}