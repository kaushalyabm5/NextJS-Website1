'use client';

import React from 'react';

interface TechItem {
  name: string;
  logo: string;
  invert?: boolean;
}

const row1Items: TechItem[] = [
  { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
  { name: 'Azure', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg' },
  { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', invert: true },
  { name: 'GCP', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg' },
  { name: 'Next.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', invert: true },
  { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
  { name: 'JavaScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
];

const row2Items: TechItem[] = [
  { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
  { name: 'TailwindCSS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
  { name: 'Supabase', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg' },
  { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Figma', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
];

const row3Items: TechItem[] = [
  { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
  { name: 'GraphQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg' },
  { name: 'Redis', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg' },
  { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
  { name: 'Git', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
  { name: 'Flutter', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg' },
  { name: 'Vue.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
];

const row4Items: TechItem[] = [
  { name: 'Go', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original-wordmark.svg' },
  { name: 'Rust', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg', invert: true },
  { name: 'Firebase', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg' },
  { name: 'Sass', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg' },
  { name: 'Prisma', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg', invert: true },
  { name: 'Webpack', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/webpack/webpack-original.svg' },
  { name: 'Nginx', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg' },
];

export default function TechStack() {
  return (
    <section className="relative w-full bg-black text-white pt-20 overflow-hidden flex flex-col items-center justify-center">
      {/* CSS Keyframe Animations for Continuous Smooth Marquee */}
      <style jsx global>{`
        @keyframes scrollLeftToRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        @keyframes scrollRightToLeft {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll-ltr {
          display: flex;
          width: max-content;
          animation: scrollLeftToRight 65s linear infinite;
        }
        .animate-scroll-rtl {
          display: flex;
          width: max-content;
          animation: scrollRightToLeft 65s linear infinite;
        }
      `}</style>

      {/* Centered #5dc192 Glow Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-[#5dc192]/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Header */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-4 mb-14 px-6">
        <h2 className="text-5xl sm:text-7xl font-medium tracking-tight text-white leading-tight">
          Cutting Edge <br />
          <span className="text-white">
            Technology
          </span>
        </h2>

        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
          Seamlessly deploy the entire Axstar platform or separate best-in-class modules into your current environment with built-in integrations. No manual scripting or maintenance.
        </p>
      </div>

      {/* Marquee Wrapper with Uniform Gap */}
      <div className="relative z-10 w-full max-w-6xl mx-auto space-y-1.5 overflow-hidden marquee-container">
        {/* Left and Right Gradient Fades */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        {/* ROW 1: Left to Right */}
        <div className="flex overflow-hidden">
          <div className="animate-scroll-ltr flex gap-1">
            {[...row1Items, ...row1Items, ...row1Items].map((tech, idx) => (
              <div
                key={`r1-${idx}`}
                className="relative w-28 h-28 sm:w-36 sm:h-36 bg-black border border-white/10 rounded-2xl flex items-center justify-center p-4 flex-shrink-0 overflow-hidden"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] ${
                    tech.invert ? 'invert brightness-200' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Right to Left */}
        <div className="flex overflow-hidden">
          <div className="animate-scroll-rtl flex gap-1">
            {[...row2Items, ...row2Items, ...row2Items].map((tech, idx) => (
              <div
                key={`r2-${idx}`}
                className="relative w-28 h-28 sm:w-36 sm:h-36 bg-black border border-white/10 rounded-2xl flex items-center justify-center p-4 flex-shrink-0 overflow-hidden"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] ${
                    tech.invert ? 'invert brightness-200' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 3: Left to Right */}
        <div className="flex overflow-hidden">
          <div className="animate-scroll-ltr flex gap-1">
            {[...row3Items, ...row3Items, ...row3Items].map((tech, idx) => (
              <div
                key={`r3-${idx}`}
                className="relative w-28 h-28 sm:w-36 sm:h-36 bg-black border border-white/10 rounded-2xl flex items-center justify-center p-4 flex-shrink-0 overflow-hidden"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] ${
                    tech.invert ? 'invert brightness-200' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 4: Right to Left */}
        <div className="flex overflow-hidden">
          <div className="animate-scroll-rtl flex gap-1">
            {[...row4Items, ...row4Items, ...row4Items].map((tech, idx) => (
              <div
                key={`r4-${idx}`}
                className="relative w-28 h-28 sm:w-36 sm:h-36 bg-black border border-white/10 rounded-2xl flex items-center justify-center p-4 flex-shrink-0 overflow-hidden"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`w-16 h-16 sm:w-20 sm:h-20 object-contain opacity-90 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] ${
                    tech.invert ? 'invert brightness-200' : ''
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Link 
      <div className="relative z-10 mt-12">
        <a
          href="#resources"
          className="text-xs sm:text-sm font-medium text-[#5dc192] hover:text-[#5dc192]/80 flex items-center gap-1 transition-colors"
        >
          Developer resources &gt;
        </a>
      </div>*/}
    </section>
  );
}