'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projects';

export default function ProjectGrid() {
  // Select the latest 4 projects for the homepage
  const featuredProjects = projects.slice(0, 4);

  return (
    <section className="relative w-full px-6 py-16 sm:py-24 bg-white dark:bg-black transition-colors duration-300">
   

      {/* HEADER SECTION */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 max-w-[1400px] mx-auto">
        <div className="space-y-4 max-w-2xl">
         

          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-neutral-900 dark:text-white">
            Project Showcase
          </h2>

          <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-xl font-normal tracking-wide">
            Architectural precision meets digital elegance.
          </p>
        </div>

        {/* TOP RIGHT VIEW ALL LINK */}
        <Link
          href="/Portfolio"
          scroll={true}
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
            }
          }}
          className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-neutral-100 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800 text-sm font-medium text-neutral-900 dark:text-white hover:border-[#5dc192]/50 hover:text-[#5dc192] transition-all duration-300 backdrop-blur-sm"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* PROJECTS GRID */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {featuredProjects.map((project) => (
          <Link
            key={project.id}
            href={`/Portfolio/${project.id}`}
            scroll={true}
            className="group block w-full p-3.5 sm:p-5 rounded-3xl bg-neutral-50/90 dark:bg-black border border-neutral-200/80 dark:border-neutral-800/80 hover:border-neutral-300 dark:hover:border-neutral-700/80 hover:shadow-2xl hover:shadow-[#5dc192]/5 transition-all duration-300 cursor-pointer overflow-hidden backdrop-blur-sm"
          >
            {/* TOP IMAGE CONTAINER */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800">
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Floating Top-Right Action Arrow */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-[#5dc192]" />
              </div>
            </div>

            {/* BOTTOM DETAILS SECTION */}
            <div className="pt-5 pb-1 px-1 flex flex-col gap-3">
              {/* TITLE */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-white group-hover:text-[#5dc192] transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* TAG PILLS */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-3.5 py-1 text-xs font-medium rounded-full bg-white dark:bg-neutral-950 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800 shadow-2xs group-hover:border-[#5dc192]/30 transition-colors duration-300"
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