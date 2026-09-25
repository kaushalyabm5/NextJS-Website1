'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  experience: string;
  image: string | StaticImageData;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Alexander Wright',
    role: 'Chief Executive Officer',
    bio: 'Pioneering global digital transformation and strategic growth across enterprise markets.',
    experience: '12+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'Head of Product Design',
    bio: 'Crafting ultra-luxurious, user-centric interfaces for high-value fintech platforms.',
    experience: '9+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Marcus Vance',
    role: 'Principal Architect',
    bio: 'Specializing in resilient cloud infrastructure and high-frequency real-time systems.',
    experience: '10+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Sophia Chen',
    role: 'VP of Engineering',
    bio: 'Leading high-performance cross-functional teams to build next-generation AI platforms.',
    experience: '11+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'David Sterling',
    role: 'Lead AI Engineer',
    bio: 'Architecting proprietary ML models and deep learning engines for enterprise clients.',
    experience: '8+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Isabella Mercer',
    role: 'Creative Director',
    bio: 'Defining high-contrast visual branding and immersive digital interactive aesthetics.',
    experience: '7+ Yrs Exp',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section className="w-full bg-black text-white pt-5 pb-25 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 mb-16">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1] max-w-2xl">
            Meet the Visionaries Behind Our Success
          </h2>
        </div>
      </div>

      {/* AUTO SCROLLING CAROUSEL */}
      <div className="relative w-full">
        {/* Left & Right Side Gradient Edge Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-20" />

        <div className="flex overflow-hidden select-none">
          <div className="flex shrink-0 items-center gap-6 sm:gap-8 animate-marquee-left-to-right hover:[animation-play-state:paused]">
            {[...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS].map((member, index) => (
              <div
                key={`team-${member.id}-${index}`}
                className="w-[280px] sm:w-[320px] shrink-0 bg-black border border-neutral-800/80 rounded-2xl p-3 sm:p-4 flex flex-col justify-between transition-transform duration-300 cursor-pointer group"
              >
                {/* IMAGE CONTAINER WITH PADDING & ROUNDED CORNERS */}
                <div className="relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-neutral-950 mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    unoptimized
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-100"
                  />
                  {/* Experience Badge */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[11px] font-medium text-neutral-300">
                    {member.experience}
                  </div>
                </div>

                {/* DETAILS SECTION */}
                <div className="space-y-2 px-1 pb-1">
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight group-hover:text-neutral-200">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-neutral-400 mt-0.5">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-400/90 leading-relaxed line-clamp-2 pt-1 border-t border-neutral-800/60">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* MARQUEE ANIMATION STYLES */}
      <style jsx>{`
        @keyframes marquee-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee-left-to-right {
          animation: marquee-left-to-right 55s linear infinite;
        }
      `}</style>
    </section>
  );
}