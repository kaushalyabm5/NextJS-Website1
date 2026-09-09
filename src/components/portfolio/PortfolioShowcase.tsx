'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FolderX } from 'lucide-react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { projects, Category } from '@/data/projects';

const filterCategories: Category[] = [
  'All',
  'Branding',
  'Web Design',
  'Product Design',
  'Launch Videos',
  'Pitch/Sales Decks',
];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [isMounted, setIsMounted] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const emptyStateRef = useRef<HTMLDivElement>(null);

  // Set mounted state on initial client load
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProjects = projects.filter((project) =>
    activeTab === 'All' ? true : project.category.includes(activeTab)
  );

  // Handle GSAP Flip animations smoothly inside a context
  useLayoutEffect(() => {
    if (!isMounted) return;

    gsap.registerPlugin(Flip);

    const ctx = gsap.context(() => {
      if (gridRef.current && filteredProjects.length > 0) {
        const cards = gsap.utils.toArray<HTMLElement>('.portfolio-card');
        const state = Flip.getState(cards);

        Flip.from(state, {
          duration: 0.45,
          ease: 'power3.inOut',
          stagger: 0.03,
          scale: true,
          absoluteOnLeave: true,
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { opacity: 0, scale: 0.96, y: 15 },
              { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power2.out' }
            ),
          onLeave: (elements) =>
            gsap.to(elements, { opacity: 0, scale: 0.96, duration: 0.25 }),
        });
      }

      if (filteredProjects.length === 0 && emptyStateRef.current) {
        gsap.fromTo(
          emptyStateRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab, isMounted, filteredProjects.length]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 py-12 sm:py-20 px-4 sm:px-8 lg:px-12 min-h-screen"
    >
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Badge */}
        <div className="mb-6">
          <span className="px-3 py-1 text-xs font-normal rounded-md bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800">
            Portfolio
          </span>
        </div>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Work we&apos;re proud of
          </h1>
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 font-normal">
            Some of the work we&apos;re proud of
          </p>
        </div>

        {/* Filter Tab Container */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-900/80 border border-neutral-200/80 dark:border-neutral-800/80 max-w-full overflow-x-auto no-scrollbar">
            {filterCategories.map((category) => {
              const isActive = activeTab === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`cursor-pointer px-4 py-1.5 text-xs sm:text-sm font-medium transition-all duration-200 rounded-md whitespace-nowrap outline-none focus:outline-none focus:ring-0 select-none ${
                    isActive
                      ? 'bg-white text-neutral-950 dark:bg-black dark:text-white shadow-xs border border-neutral-200 dark:border-neutral-700'
                      : 'border border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Portfolio Grid Layout */}
        {filteredProjects.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
          >
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/Portfolio/${project.id}`}
                scroll={true}
                className="portfolio-card group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-neutral-50/60 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
              >
                {/* Full-Bleed Image Preview */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                {/* Bottom Details Section */}
                <div className="p-6 sm:p-8 flex flex-col gap-3 bg-white dark:bg-black border-t border-neutral-100 dark:border-neutral-900">
                  <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-normal rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Empty State Display */
          <div
            ref={emptyStateRef}
            className="w-full py-28 px-6 rounded-2xl border border-dashed border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/10 flex flex-col items-center justify-center text-center"
          >
            <div className="p-4 rounded-full bg-neutral-100 dark:bg-neutral-900 mb-4 text-neutral-400">
              <FolderX className="w-8 h-8" />
            </div>

            <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-1">
              No projects in this category
            </h3>

            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm mb-6">
              There are currently no listed items under &quot;{activeTab}&quot;. Select another filter option above.
            </p>

            <button
              onClick={() => setActiveTab('All')}
              className="cursor-pointer px-4 py-2 text-xs font-medium rounded-md bg-neutral-900 text-white dark:bg-white dark:text-black hover:opacity-90 transition-opacity"
            >
              Show All Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
}