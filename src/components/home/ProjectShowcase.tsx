'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const projects = [
  {
    id: 'sixnity',
    title: 'Sixnity Platform',
    category: 'FINTECH & WEALTH',
    description: 'Next-generation institutional wealth engine built with high-frequency UI interactions.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    link: '/projects/sixnity',
    featured: true,
  },
  {
    id: 'confluence-capital',
    title: 'Confluence Capital',
    category: 'ASSET MANAGEMENT',
    description: 'Dark luxury digital brand presence for private equity venture portfolios.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    link: '/projects/confluence-capital',
    featured: false,
  },
  {
    id: 'aether-suite',
    title: 'Aether 3D Studio',
    category: 'CREATIVE TECH',
    description: 'Immersive WebGL canvas showcase featuring real-time interactive asset rendering.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    link: '/projects/aether-suite',
    featured: false,
  },
  {
    id: 'apex-pulse',
    title: 'Apex Pulse',
    category: 'SAAS ENGINE',
    description: 'Scalable cloud telemetry dashboard managing millions of concurrent data streams.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    link: '/projects/apex-pulse',
    featured: false,
  },
];

export default function ProjectShowcase() {
  return (
    <section className="relative w-full py-24 sm:py-32 bg-white dark:bg-black text-neutral-900 dark:text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>[ SELECTED WORKS ]</span>
            </div>

            <h2 className="text-4xl sm:text-7xl font-normal tracking-tight leading-tight text-neutral-900 dark:text-white">
              Project{' '}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-600 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500">
                Showcase
              </span>
            </h2>

            <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-xl font-normal tracking-wide">
              Architectural precision meets digital elegance.
            </p>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative w-full aspect-[4/3] sm:aspect-[16/10] rounded-3xl overflow-hidden border border-neutral-200/80 dark:border-neutral-800/80 bg-neutral-900 shadow-2xl transition-all duration-500 hover:shadow-neutral-500/10 dark:hover:shadow-white/5"
            >
              {/* FULL BACKDROP IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* GRADIENT OVERLAY FOR TEXT READABILITY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 group-hover:opacity-95" />

              {/* TOP LEFT CATEGORY BADGE */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-black/40 border border-white/10 backdrop-blur-md font-mono text-[10px] sm:text-xs text-white/80 uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              {/* TOP RIGHT ARROW ICON BUTTON */}
              <div className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              {/* BOTTOM RIGHT TITLE & DESCRIPTION CONTAINER */}
              <div className="absolute bottom-0 right-0 left-0 p-6 sm:p-10 z-10 flex flex-col items-end text-right justify-end max-w-lg ml-auto">
                <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight mb-2 transition-transform duration-300 group-hover:-translate-y-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed max-w-sm line-clamp-2 transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                  {project.description}
                </p>
              </div>

              {/* AMBIENT ACCENT HOVER BORDER */}
              <div className="absolute inset-0 rounded-3xl border border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* BOTTOM ACTION BUTTON */}
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black font-semibold text-sm sm:text-base tracking-wide shadow-xl transition-all duration-300 hover:scale-105 hover:bg-neutral-800 dark:hover:bg-neutral-100"
          >
            <span>See All Projects</span>
            <div className="w-7 h-7 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

      </div>

      {/* BACKGROUND GRID OVERLAY */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />
    </section>
  );
}