'use client';

import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: '01',
    quote: "Axstar transformed our enterprise platform architecture completely. The performance gain was immediate.",
    author: 'Elena Rostova',
    role: 'VP of Product',
    company: 'Apex Tech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '02',
    quote: "Their eye for minimalist dark luxury aesthetics matched with sub-second performance is exceptionally rare.",
    author: 'Marcus Vance',
    role: 'Founder & CEO',
    company: 'Vance Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '03',
    quote: "From discovery to global deployment, every deadline was met with architectural and visual perfection.",
    author: 'Sarah Jenkins',
    role: 'Head of Design',
    company: 'Lumina Digital',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '04',
    quote: "The scalable API integration and ultra-smooth interface design elevated our product value instantly.",
    author: 'David Chen',
    role: 'Co-Founder',
    company: 'Synapse AI',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '05',
    quote: "The cleanest UI execution we have ever integrated into our fintech pipeline. Exceptional delivery.",
    author: 'Liam Thorne',
    role: 'CTO',
    company: 'Quantum Pay',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '06',
    quote: "A true masterclass in high-contrast digital elegance. Our clients loved the new dashboard.",
    author: 'Sophia Althaus',
    role: 'Managing Director',
    company: 'Horizon',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: '07',
    quote: "Seamless execution across all viewports. Their work exceeded our entire executive board's expectations.",
    author: 'Chloe Dupont',
    role: 'Director of Marketing',
    company: 'Stellar',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // 3-Second Auto-play Timer Fix
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative w-full pt-2 bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden transition-colors duration-300">
      
      {/* AMBIENT SPOTLIGHT BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#5dc192]/10 dark:bg-[#5dc192]/5 blur-[140px] rounded-full pointer-events-none" />

      {/* HEADER SECTION 
      <div className="relative z-10 max-w-full mx-auto px-6 mb-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          
          
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.15] text-black dark:text-white">
              Trusted by leaders shaping the <span className="font-normal text-black dark:text-white">future of digital platforms.</span>
            </h2>
          </div>

        
          <div className="lg:col-span-5 text-right">
            <p className="text-[.9rem] text-neutral-600 dark:text-white leading-relaxed font-thin text-right">
              We partner with forward-thinking enterprises and fast-growing platforms to design, engineer, and deploy digital products that deliver high business impact.
            </p>
          </div>

        </div>
      </div>*/}

      {/* 3D SPOTLIGHT CAROUSEL CONTAINER */}
      <div 
        className="relative w-full max-w-7xl mx-auto px-4 h-[460px] sm:h-[500px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* CAROUSEL CARDS WITH ROUNDED CORNERS */}
        <div className="relative w-full h-full flex items-center justify-center">
          {testimonials.map((item, index) => {
            const total = testimonials.length;
            let offset = index - currentIndex;
            
            if (offset > Math.floor(total / 2)) offset -= total;
            if (offset < -Math.floor(total / 2)) offset += total;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            return (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                style={{
                  transform: `translateX(${offset * 65}%) scale(${isCenter ? 1 : 0.82 - Math.abs(offset) * 0.05})`,
                  zIndex: 20 - Math.abs(offset) * 5,
                  opacity: isCenter ? 1 : 0.45 - Math.abs(offset) * 0.15,
                  filter: isCenter ? 'blur(0px)' : 'blur(4px)',
                }}
                className={`absolute w-[90%] sm:w-[500px] lg:w-[580px] p-8 sm:p-12 rounded-3xl border transition-all duration-700 ease-out cursor-pointer flex flex-col justify-between ${
                  isCenter
                    ? 'bg-neutral-50/95 dark:bg-black border-neutral-300 dark:border-neutral-700 shadow-2xl backdrop-blur-2xl'
                    : 'bg-neutral-100/60 dark:bg-black border-neutral-200 dark:border-neutral-800 pointer-events-auto'
                }`}
              >
                {/* WATERMARK QUOTE ICON */}
                <Quote className="absolute top-6 right-8 w-20 h-20 text-neutral-200 dark:text-neutral-900 pointer-events-none" />

                <div>
                  {/* RATING & CARD INDEX */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#5dc192] text-[#5dc192]" />
                      ))}
                    </div>
                  </div>

                  {/* QUOTE */}
                  <p className="text-base sm:text-xl lg:text-2xl font-light leading-relaxed text-neutral-900 dark:text-white tracking-tight mb-8 relative z-10 text-left">
                    "{item.quote}"
                  </p>
                </div>

                {/* AUTHOR & COMPANY */}
                <div className="flex items-center gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800/80 text-left">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="w-12 h-12 rounded-full object-cover border border-[#5dc192]"
                  />
                  <div>
                    <h4 className="text-sm sm:text-base font-normal text-neutral-900 dark:text-white tracking-tight">
                      {item.author}
                    </h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-light">
                      {item.role} <span className="text-[#5dc192]">@</span> {item.company}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* LEFT / RIGHT NAVIGATION ARROWS */}
        <button
          onClick={handlePrev}
          className="absolute cursor-pointer left-2 sm:left-6 z-30 p-4 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md text-neutral-900 dark:text-white hover:border-[#5dc192] dark:hover:border-[#5dc192] hover:scale-105 transition-all duration-300 group shadow-xl"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5 text-neutral-800 dark:text-white" />
        </button>

        <button
          onClick={handleNext}
          className="absolute cursor-pointer right-2 sm:right-6 z-30 p-4 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md text-neutral-900 dark:text-white hover:border-[#5dc192] dark:hover:border-[#5dc192] hover:scale-105 transition-all duration-300 group shadow-xl"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5 text-neutral-800 dark:text-white" />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="flex items-center justify-center gap-2 mt-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === currentIndex
                ? 'w-8 bg-[#5dc192]'
                : 'w-2 bg-neutral-300 dark:bg-neutral-800 hover:bg-neutral-400'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}