'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import bgImg from '../../assets/review-img/bg-img.png';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Nair',
    role: 'Head of Innovation',
    company: 'Altera Global',
    quote:
      "With Axstar's AI platform, our enterprise has gained speed, insight, and scalability. The intelligence behind their agents is unmatched — it's like having an expert team working 24/7 with consistency and accuracy. Axstar continues to push the boundaries.",
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'Marcus Vance',
    role: 'VP of Technology',
    company: 'Nexus Dynamics',
    quote:
      'Partnering with Axstar transformed our digital infrastructure overnight. Their execution precision and commitment to top-tier quality allowed us to scale seamlessly across global regions without operational hitches.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Chief Digital Officer',
    company: 'Vanguard Group',
    quote:
      'The sheer attention to detail and high-contrast design strategy brought our brand presence to a whole new tier. They don’t just build products; they craft elite digital experiences.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeSlide = (nextIndex: number, direction: 'next' | 'prev') => {
    if (isAnimating.current || !cardRef.current) return;
    isAnimating.current = true;

    const xOffset = direction === 'next' ? -25 : 25;

    gsap.to(cardRef.current, {
      opacity: 0,
      x: xOffset,
      duration: 0.35,
      ease: 'power2.in',
      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: -xOffset },
          {
            opacity: 1,
            x: 0,
            duration: 0.45,
            ease: 'power2.out',
            onComplete: () => {
              isAnimating.current = false;
            },
          }
        );
      },
    });
  };

  const handleNext = () => {
    const next = (currentIndex + 1) % testimonials.length;
    changeSlide(next, 'next');
  };

  const handlePrev = () => {
    const prev = (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeSlide(prev, 'prev');
  };

  // Auto move left to right every 2 seconds
  useEffect(() => {
    if (!isMounted) return;
    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer);
  }, [currentIndex, isMounted]);

  const current = testimonials[currentIndex];

  if (!isMounted) return null;

  return (
    <section className="w-full bg-black text-white pt-35 px-6 sm:px-8 lg:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Row 
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium tracking-tight text-white">
            Trusted by customers
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xs sm:text-right font-normal">
            Proven outcomes shared by industry leaders and innovators.
          </p>
        </div>*/}


        {/* HEADER SECTION */}
      <div className="relative z-10 max-w-full mx-auto px-6 mb-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          
          
          <div className="lg:col-span-7 text-left">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] max-w-2xl text-white">
              Trusted by leaders shaping the <span className="text-3xl sm:text-5xl font-medium tracking-tight leading-[1.15] max-w-2xl text-white">future of digital platforms.</span>
            </h2>
          </div>

        
          <div className="lg:col-span-5 text-right">
            <p className="text-sm sm:text-base text-neutral-400 max-w-md font-normal">
              We partner with forward-thinking enterprises and fast-growing platforms to design, engineer, and deploy digital products that deliver high business impact.
            </p>
          </div>

        </div>
      </div>

        {/* Outer Card Wrap (Allows Image Overlap) */}
        <div className="relative pt-6 pb-1">
          
          <div
            ref={cardRef}
            className="relative w-full rounded-3xl bg-neutral-950/80 border border-neutral-800/80 p-6 sm:p-10 lg:p-12 overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch gap-8 lg:gap-14"
          >
            {/* Card Background Image */}
            <img
              src={typeof bgImg === 'string' ? bgImg : bgImg.src}
              alt="Card Background"
              className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none z-0"
            />

            {/* Smooth Ambient Gradient Overlay with #5dc192 */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#5dc192]/20 via-slate-950/60 to-neutral-950/90 pointer-events-none z-0" />
            
            {/* Top Border Inner Glow Highlight */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#5dc192]/40 via-white/20 to-transparent pointer-events-none z-10" />

            {/* Overlapping Image Container */}
            <div className="relative w-full md:w-[320px] lg:w-[380px] aspect-[4/5] sm:aspect-square md:aspect-[4/5] md:-ml-16 md:-my-16 rounded-2xl overflow-hidden shrink-0 border border-neutral-700/60 shadow-2xl z-20">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Quote and Author Info */}
            <div className="relative z-10 flex flex-col justify-between flex-1 py-2 text-left space-y-8">
              <p className="text-base sm:text-lg lg:text-xl text-neutral-200 font-normal leading-relaxed tracking-tight max-w-3xl">
                {current.quote}
              </p>

              <div className="pt-6 border-t border-neutral-800/80">
                <h4 className="text-base sm:text-lg font-semibold text-white tracking-wide">
                  {current.name}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 mt-0.5">
                  {current.role}, <span className="text-[#5dc192]">{current.company}</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Rounded Navigation Controls */}
        <div className="flex items-center justify-center gap-3 pt-0">
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="w-11 h-11 border border-neutral-800 bg-black hover:bg-neutral-800 text-neutral-300 hover:text-[#5dc192] rounded-full flex cursor-pointer items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="w-11 h-11 cursor-pointer border border-neutral-800 bg-black hover:bg-neutral-800 text-neutral-300 hover:text-[#5dc192] rounded-full flex items-center justify-center transition-all duration-200 active:scale-95 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}