'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';

interface BlogPost {
  id: number;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  featured?: boolean;
}

const CATEGORIES = ['All', 'Architecture', 'Engineering', 'AI & Data', 'Strategy'];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Architecting High-Frequency Real-Time Systems for Enterprise Fintech',
    category: 'Engineering',
    readTime: '6 min read',
    date: 'Sep 24, 2026',
    excerpt:
      'An in-depth analysis of low-latency data structures, microservices orchestration, and edge deployment strategies.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop',
    author: {
      name: 'Marcus Vance',
      role: 'Principal Architect',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    },
    featured: true,
  },
  {
    id: 2,
    title: 'The Minimalist Paradigm in Dark Luxury Digital Design',
    category: 'Architecture',
    readTime: '4 min read',
    date: 'Sep 21, 2026',
    excerpt:
      'Balancing dark aesthetic themes, high-contrast typography, and purposeful motion for modern interfaces.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Elena Rostova',
      role: 'Head of Product Design',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    },
  },
  {
    id: 3,
    title: 'Proprietary ML Orchestration at Enterprise Scale',
    category: 'AI & Data',
    readTime: '8 min read',
    date: 'Sep 18, 2026',
    excerpt:
      'How custom deep learning pipelines and real-time model evaluation transform predictive analytics.',
    image: 'https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'David Sterling',
      role: 'Lead AI Engineer',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop',
    },
  },
  {
    id: 4,
    title: 'Strategic Capital Allocation in Tech Investment Pipelines',
    category: 'Strategy',
    readTime: '5 min read',
    date: 'Sep 15, 2026',
    excerpt:
      'Key frameworks for risk mitigation and capital distribution across rapid innovation portfolios.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Alexander Wright',
      role: 'Chief Executive Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    },
  },
  {
    id: 5,
    title: 'Next-Gen Interactive 3D Interfaces for Modern Web Engines',
    category: 'Engineering',
    readTime: '7 min read',
    date: 'Sep 10, 2026',
    excerpt:
      'Combining Three.js, WebGL, and custom shader pipelines for hardware-accelerated visual storytelling.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Sophia Chen',
      role: 'VP of Engineering',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
    },
  },
  {
    id: 6,
    title: 'Building Unshakable Visual Identity in Ultra-Saturated Markets',
    category: 'Architecture',
    readTime: '5 min read',
    date: 'Sep 05, 2026',
    excerpt:
      'Why minimalist branding systems command higher market trust and long-term valuation.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    author: {
      name: 'Isabella Mercer',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    },
  },
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');

  // Count items per category dynamically
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: BLOG_POSTS.length };
    BLOG_POSTS.forEach((post) => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Dynamically filter all posts based on active category selection
  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  // Featured post matching category or fallback
  const featuredPost = useMemo(() => {
    return filteredPosts.find((post) => post.featured) || filteredPosts[0];
  }, [filteredPosts]);

  // Grid posts (excluding featured if available)
  const gridPosts = useMemo(() => {
    if (!featuredPost) return [];
    return filteredPosts.filter((post) => post.id !== featuredPost.id);
  }, [filteredPosts, featuredPost]);

  // Latest subset derived dynamically
  const latestPosts = useMemo(() => {
    return filteredPosts.slice(1, 4);
  }, [filteredPosts]);

  return (
    <section className="w-full bg-black text-white py-24 px-6 sm:px-12 lg:px-20 transition-all duration-500">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* HEADER & DYNAMIC CATEGORY BAR */}
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
              Perspectives & Intelligence
            </span>
            <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1] max-w-2xl mx-auto">
              Insights & Innovations
            </h2>
          </div>

          {/* DYNAMIC CATEGORY FILTER BUTTONS WITH CURSOR-POINTER */}
          <div className="p-1.5 bg-neutral-900/90 border border-neutral-800/90 rounded-full flex flex-wrap items-center justify-center gap-1 sm:gap-2 shadow-2xl backdrop-blur-xl">
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              const count = categoryCounts[category] || 0;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`group relative cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black font-semibold shadow-[0_0_25px_rgba(255,255,255,0.25)] scale-105'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full transition-all duration-300 font-mono cursor-pointer ${
                      isActive
                        ? 'bg-black text-white'
                        : 'bg-neutral-800 text-neutral-400 group-hover:bg-neutral-700 group-hover:text-white'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 1. TOP FOCUS / FEATURED ARTICLE */}
        {featuredPost && (
          <div className="space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                  Featured Focus ({activeCategory})
                </h3>
              </div>
            </div>

            <div className="relative w-full min-h-[480px] sm:min-h-[520px] rounded-3xl overflow-hidden border border-neutral-800/80 group cursor-pointer flex items-end p-6 sm:p-12">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                unoptimized
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 z-10 transition-opacity duration-300 group-hover:opacity-90" />

              <div className="relative z-20 max-w-3xl space-y-4 sm:space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-xs text-neutral-300">{featuredPost.date}</span>
                  <span className="text-xs text-neutral-400">•</span>
                  <span className="text-xs text-neutral-300">{featuredPost.readTime}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight leading-tight group-hover:text-neutral-200">
                  {featuredPost.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 line-clamp-2 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center gap-3 pt-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/20">
                    <Image
                      src={featuredPost.author.avatar}
                      alt={featuredPost.author.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{featuredPost.author.name}</h4>
                    <p className="text-xs text-neutral-400">{featuredPost.author.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. CURATED INSIGHTS */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
            <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">
              Curated Insights
            </h3>
            <span className="text-xs text-neutral-400">
              Showing {filteredPosts.length} Articles
            </span>
          </div>

          {gridPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {gridPosts.map((post) => (
                <div
                  key={post.id}
                  className="relative h-[420px] rounded-3xl overflow-hidden border border-neutral-800/80 group cursor-pointer flex items-end p-6 transition-all duration-500 hover:border-neutral-700 hover:shadow-2xl"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-95" />

                  <div className="relative z-20 space-y-3 w-full">
                    <div className="flex items-center justify-between">
                      <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-300">{post.readTime}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-neutral-200 line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-xs text-neutral-300/90 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-white/15">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-xs font-medium text-white">{post.author.name}</h5>
                        <p className="text-[10px] text-neutral-400">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-neutral-800 rounded-3xl">
              <p className="text-sm text-neutral-400">No additional articles in this category.</p>
            </div>
          )}
        </div>

        {/* 3. LATEST PUBLICATIONS */}
        {latestPosts.length > 0 && (
          <div className="space-y-6 pt-10">
            <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4">
              <h3 className="text-xs uppercase tracking-[0.2em] text-neutral-400 font-semibold">
                Latest Publications
              </h3>
              <span className="text-xs text-neutral-400 font-mono">Archive / 2026</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {latestPosts.map((post) => (
                <div
                  key={`latest-${post.id}`}
                  className="relative h-[420px] rounded-3xl overflow-hidden border border-neutral-800/80 group cursor-pointer flex items-end p-6 transition-all duration-500 hover:border-neutral-700 hover:shadow-2xl"
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-95" />

                  <div className="relative z-20 space-y-3 w-full">
                    <div className="flex items-center justify-between">
                      <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-xs text-neutral-300">{post.readTime}</span>
                    </div>

                    <h4 className="text-lg font-semibold text-white tracking-tight leading-snug group-hover:text-neutral-200 line-clamp-2">
                      {post.title}
                    </h4>

                    <p className="text-xs text-neutral-300/90 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-3 pt-3 border-t border-white/15">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          unoptimized
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h5 className="text-xs font-medium text-white">{post.author.name}</h5>
                        <p className="text-[10px] text-neutral-400">{post.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}