'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { FolderX } from 'lucide-react';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';

type Category = 'All' | 'Branding' | 'Web Design' | 'Product Design' | 'Launch Videos' | 'Pitch/Sales Decks';

interface Project {
  id: string;
  title: string;
  category: Category[];
  tags: string[];
  image: string;
}

const filterCategories: Category[] = [
  'All',
  'Branding',
  'Web Design',
  'Product Design',
  'Launch Videos',
  'Pitch/Sales Decks',
];

const projects: Project[] = [
  {
    id: '01',
    title: 'Ground - Landing page',
    category: ['Web Design', 'Product Design'],
    tags: ['AI', 'SaaS', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Intrepid Labs - Web Design',
    category: ['Web Design'],
    tags: ['Biotech', 'AI', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Metal - Website Design',
    category: ['Web Design', 'Product Design'],
    tags: ['B2B', 'SaaS', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Archil - Branding',
    category: ['Branding'],
    tags: ['Dev Tools', 'AI', 'Branding'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'Hemut - Landing Page',
    category: ['Web Design'],
    tags: ['Logistics & Transportation', 'AI', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '06',
    title: 'Remedy - Landing Page',
    category: ['Web Design', 'Product Design'],
    tags: ['Healthcare', 'AI', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '07',
    title: 'Hemut Diesel',
    category: ['Web Design', 'Branding'],
    tags: ['Logistics', 'B2B', 'Web Design'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: '08',
    title: 'LineSight - AI Platform',
    category: ['Web Design', 'Product Design'],
    tags: ['Industrial AI', 'Product Design'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<Category>('All');
  const [isMounted, setIsMounted] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);
  const emptyStateRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProjects = projects.filter((project) =>
    activeTab === 'All' ? true : project.category.includes(activeTab)
  );

  useLayoutEffect(() => {
    if (!isMounted) return;

    gsap.registerPlugin(Flip);

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
  }, [activeTab, isMounted]);

  if (!isMounted) return null;

  return (
    <section className="w-full bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 py-12 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Badge */}
        <div className="mb-6">
          <span className="px-3 py-1 text-xs font-normal rounded-md bg-neutral-100 dark:bg-black text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-800">
            Portfolio
          </span>
        </div>

        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-14">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white">
            Work we're proud of
          </h1>
          <p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 font-normal">
            Some of the work we're proud of
          </p>
        </div>

        {/* Centered Filter Tab Container */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex items-center gap-1.5 p-1.5 rounded-lg bg-neutral-100/80 dark:bg-black border border-neutral-200/80 dark:border-neutral-800/80 max-w-full overflow-x-auto no-scrollbar">
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

        {/* Large Full-Bleed Grid Layout */}
        {filteredProjects.length > 0 ? (
          <div
            ref={gridRef}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
          >
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="portfolio-card group cursor-pointer flex flex-col rounded-2xl overflow-hidden bg-neutral-50/60 dark:bg-neutral-900/30 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300"
              >
                {/* Zero Padding Full-Bleed Image Preview */}
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
              </div>
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
              There are currently no listed items under "{activeTab}". Select another filter option above.
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