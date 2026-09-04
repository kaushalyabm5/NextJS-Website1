'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  tags: string[];
  link?: string;
}

const projects: ProjectCardProps[] = [
  {
    title: 'Metal',
    category: 'Website Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    tags: ['B2B', 'SaaS', 'Web Design'],
    link: '/projects/metal',
  },
  {
    title: 'Archil',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['Dev Tools', 'AI', 'Branding'],
    link: '/projects/archil',
  },
  {
    title: 'Sixnity',
    category: 'Platform Development',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    tags: ['Fintech', 'Dashboard', 'UI/UX'],
    link: '/projects/sixnity',
  },
  {
    title: 'Confluence',
    category: 'Asset Management',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    tags: ['Venture Capital', 'Dark Luxury', 'Brand'],
    link: '/projects/confluence',
  },
];

export default function ProjectGrid() {
  return (
    <section className="w-full px-6 bg-white dark:bg-black transition-colors duration-300">
      
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>[ SELECTED WORKS ]</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-neutral-900 dark:text-white">
            Project Showcase
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-xl font-normal tracking-wide">
            Architectural precision meets digital elegance.
          </p>
        </div>

        {/* TOP RIGHT VIEW ALL LINK */}
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm font-medium text-black dark:text-[#5dc192] hover:opacity-70 transition-opacity"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* PROJECTS GRID */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link || '#'}
            className="group block w-full p-3 sm:p-4 rounded-2xl sm:rounded-3xl bg-neutral-50 dark:bg-black border border-neutral-200/80 dark:border-neutral-800/80 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700"
          >
            {/* TOP IMAGE CONTAINER */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-200 dark:bg-neutral-800">
              <img
                src={project.image}
                alt={`${project.title} - ${project.category}`}
                className="w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                loading="lazy"
              />
            </div>

            {/* BOTTOM DETAILS SECTION */}
            <div className="pt-4 pb-1 px-1 flex flex-col gap-3">
              {/* TITLE & CATEGORY */}
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">
                {project.title} <span className="text-neutral-400 dark:text-neutral-500 font-normal">- {project.category}</span>
              </h3>

              {/* TAG PILLS */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3.5 py-1 text-xs font-medium rounded-full bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700/60 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}