'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Expanded high-density tech list (18 items positioned tighter around center)
const techList = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', pos: 'top-[22%] left-[28%]', initialX: -90, initialY: -60, rotate: -12, scale: 1.1 },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', pos: 'top-[20%] right-[30%]', initialX: 100, initialY: -50, rotate: 10, scale: 1.2 },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', pos: 'top-[38%] left-[20%]', initialX: -130, initialY: -10, rotate: -18, scale: 1.0 },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', pos: 'bottom-[35%] left-[22%]', initialX: -110, initialY: 40, rotate: 15, scale: 1.0 },
  { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', pos: 'top-[36%] right-[22%]', initialX: 120, initialY: -20, rotate: 14, scale: 1.05 },
  { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', pos: 'bottom-[32%] right-[25%]', initialX: 110, initialY: 60, rotate: -10, scale: 1.0 },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', pos: 'bottom-[20%] left-[32%]', initialX: -60, initialY: 90, rotate: -8, scale: 1.15 },
  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', pos: 'bottom-[18%] right-[32%]', initialX: 70, initialY: 95, rotate: 12, scale: 1.1 },
  { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', pos: 'top-[15%] left-[48%]', initialX: 0, initialY: -110, rotate: -5, scale: 1.1 },
  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', pos: 'bottom-[26%] right-[16%]', initialX: 140, initialY: 30, rotate: 18, scale: 1.05 },
  { name: 'GSAP', logo: 'https://svgshare.com/i/10_x.svg', pos: 'top-[28%] left-[16%]', initialX: -150, initialY: -40, rotate: -22, scale: 1.0 },
  { name: 'TailwindCSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', pos: 'top-[26%] right-[16%]', initialX: 140, initialY: -40, rotate: 12, scale: 1.1 },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', pos: 'bottom-[42%] left-[14%]', initialX: -160, initialY: 20, rotate: -15, scale: 0.95 },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', pos: 'bottom-[16%] left-[45%]', initialX: -20, initialY: 110, rotate: 6, scale: 1.05 },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', pos: 'top-[44%] right-[14%]', initialX: 150, initialY: 10, rotate: -8, scale: 1.0 },
  { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', pos: 'top-[16%] left-[38%]', initialX: -40, initialY: -100, rotate: 15, scale: 1.0 },
  { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', pos: 'top-[18%] right-[40%]', initialX: 50, initialY: -95, rotate: -10, scale: 1.0 },
  { name: 'Redux', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', pos: 'bottom-[22%] right-[42%]', initialX: 30, initialY: 100, rotate: 14, scale: 0.95 },
];

export default function TechStack() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const text = textRef.current;

    if (!section || !text) return;

    const ctx = gsap.context(() => {
      const logoNodes = gsap.utils.toArray<HTMLElement>('.tech-logo-item');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: 'top top',
          end: '+=450%',
          scrub: 1.8,
          invalidateOnRefresh: true,
        },
      });

      // 1. Center Title Smooth Pulse
      tl.fromTo(
        text,
        { scale: 0.9, opacity: 0.5 },
        { scale: 1.04, opacity: 1, duration: 2, ease: 'power1.out' }
      );

      // 2. Tightly Converging Logos (Fly directly around title)
      logoNodes.forEach((node, i) => {
        const item = techList[i];

        tl.fromTo(
          node,
          {
            opacity: 0,
            scale: 0.2,
            x: item.initialX * 2.2,
            y: item.initialY * 2.2,
            rotate: item.rotate * 2.5,
            filter: 'blur(8px)',
          },
          {
            opacity: 1,
            scale: item.scale,
            x: item.initialX * 0.35, // Pulls tight close to the text
            y: item.initialY * 0.35,
            rotate: item.rotate,
            filter: 'blur(0px)',
            duration: 2.2,
            ease: 'power2.out',
          },
          `<+=${i * 0.05}`
        );
      });

      // 3. Dispersion Burst (Wisireela outward exit)
      tl.to(
        logoNodes,
        {
          opacity: 0,
          scale: 1.3,
          x: (i) => techList[i].initialX * 2.8,
          y: (i) => techList[i].initialY * 2.8,
          filter: 'blur(10px)',
          duration: 2,
          ease: 'power1.in',
        },
        '>+=1.2'
      ).to(
        text,
        {
          opacity: 0,
          scale: 0.9,
          filter: 'blur(6px)',
          duration: 1.5,
          ease: 'power1.in',
        },
        '<'
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden flex items-center justify-center perspective-1000"
    >
      {/* CENTERED MAIN TITLE & DESCRIPTION */}
      <div
        ref={textRef}
        className="relative z-30 text-center max-w-xl px-6 pointer-events-none"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
          <span>[ TECH STACK ]</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-normal tracking-tight leading-tight text-neutral-900 dark:text-white mb-4">
          Cutting-Edge{' '}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
            Tech
          </span>
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-xl font-normal tracking-wide">
          Empowered by Global Standards
        </p>
      </div>

      {/* DENSE ORBIT LOGOS (No background cards, no text labels) */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none max-w-6xl mx-auto">
        {techList.map((tech, idx) => (
          <div
            key={idx}
            className={`tech-logo-item absolute ${tech.pos} flex items-center justify-center p-2 rounded-2xl pointer-events-auto group cursor-pointer transition-transform duration-300 hover:scale-125`}
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain filter drop-shadow-md transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]"
            />
          </div>
        ))}
      </div>

      {/* Ambient Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </section>
  );
}