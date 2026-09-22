'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles } from 'lucide-react';

const VALUES = [
  {
    letter: 'A',
    title: 'Agility',
    description: 'We move fast, adapt quickly, and respond to evolving business needs with rapid precision.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    letter: 'X',
    title: 'eXpertise',
    description: 'We combine deep technical skill with strategic insight to architect enterprise-grade solutions.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    letter: 'S',
    title: 'Scalability',
    description: 'Our solutions are engineered to grow effortlessly alongside your expanding business requirements.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    letter: 'T',
    title: 'Technology',
    description: 'We leverage cutting-edge tech frameworks to power high-performance digital transformations.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
  },
  {
    letter: 'A',
    title: 'Ambition',
    description: 'We push structural and design boundaries to deliver extraordinary digital experiences.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    letter: 'R',
    title: 'Results',
    description: 'We focus on measurable impact, operational efficiency, and long-term business success.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function CoreValues() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const textCardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const images = imagesRef.current.filter(Boolean);
      const textCards = textCardsRef.current.filter(Boolean);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: `+=${VALUES.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      VALUES.forEach((_, i) => {
        if (i === 0) return;

        const pos = i * 1;

        // Image Transition: Unveils top-to-bottom over previous
        tl.fromTo(
          images[i],
          { clipPath: 'inset(100% 0% 0% 0%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', ease: 'power2.inOut', duration: 1 },
          pos
        );

        // Text Out: Previous text moves up and fades out
        tl.to(
          textCards[i - 1],
          { y: -60, opacity: 0, filter: 'blur(10px)', duration: 0.8, ease: 'power2.in' },
          pos
        );

        // Text In: Current text slides up from bottom
        tl.fromTo(
          textCards[i],
          { y: 80, opacity: 0, filter: 'blur(10px)' },
          { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' },
          pos + 0.2
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-center px-6 sm:px-12 lg:px-20"
    >
      

   

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center z-10 pt-16">
        
        {/* LEFT COLUMN: STICKY IMAGE CONTAINER */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-black">
          {VALUES.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) imagesRef.current[index] = el;
              }}
              className="absolute inset-0 w-full h-full bg-black"
              style={{
                zIndex: index + 1,
                clipPath: index === 0 ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
              }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                className="object-cover object-center"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: SLIDING TEXT CARDS */}
        <div className="relative h-[320px] sm:h-[360px] flex items-center">
          {VALUES.map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) textCardsRef.current[index] = el;
              }}
              className="absolute inset-0 flex flex-col justify-center space-y-6"
              style={{
                opacity: index === 0 ? 1 : 0,
                transform: index === 0 ? 'translateY(0px)' : 'translateY(80px)',
                pointerEvents: index === 0 ? 'auto' : 'none',
              }}
            >
              {/* LETTER & NUMBER BADGE */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-6xl sm:text-8xl font-medium text-[#5dc192] tracking-tighter">
                  {item.letter}
                </span>
                <span className="font-mono text-sm text-[#5dc192] tracking-widest uppercase">
                 
                </span>
              </div>

              {/* TITLE */}
              <h3 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-white text-base sm:text-xl font-normal leading-relaxed max-w-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}