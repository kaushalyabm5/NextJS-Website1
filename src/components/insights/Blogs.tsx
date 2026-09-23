'use client';

import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { 
  ArrowUpRight, 
  Clock, 
  Calendar, 
  User, 
  Tag
} from 'lucide-react';

// Static Imports - Replace with your actual blog image assets
import blog1 from '@/assets/sector-img/ITTechnology1.jpeg';
import blog2 from '@/assets/sector-img/BankingFinance1.jpeg';
import blog3 from '@/assets/sector-img/RealEstate1.jpeg';
import blog4 from '@/assets/sector-img/Industrial1.jpeg';
import blog5 from '@/assets/sector-img/Healthcare1.jpeg';

interface BlogPost {
  id: string;
  badgeId: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
  bgImage: StaticImageData;
  tags: string[];
}

const blogsData: BlogPost[] = [
  {
    id: 'architectural-engineering-saas',
    badgeId: '01',
    category: 'Engineering',
    title: 'Architectural Systems in Modern SaaS Development',
    excerpt: 'How high-performance systems and dark luxury UI frameworks are redefining enterprise web applications for global scale.',
    author: 'Alexander Vance',
    date: 'Sep 18, 2026',
    readTime: '6 min read',
    featured: true,
    bgImage: blog1,
    tags: ['Architecture', 'SaaS', 'UI/UX'],
  },
  {
    id: 'fintech-security-ux',
    badgeId: '02',
    category: 'Fintech',
    title: 'Designing Ultra-Secure Portals for Institutional Capital',
    excerpt: 'Balancing zero-trust security architecture with fluid, high-converting digital financial portals.',
    author: 'Elena Rostova',
    date: 'Sep 12, 2026',
    readTime: '4 min read',
    featured: false,
    bgImage: blog2,
    tags: ['Fintech', 'Security', 'Banking'],
  },
  {
    id: '3d-real-estate-visualizers',
    badgeId: '03',
    category: 'Real Estate',
    title: 'The Next Generation of 3D Property Web Experience',
    excerpt: 'Leveraging WebGL and Three.js to craft high-prestige architectural property engines for ultra-luxury developments.',
    author: 'Marcus Chen',
    date: 'Aug 29, 2026',
    readTime: '8 min read',
    featured: false,
    bgImage: blog3,
    tags: ['3D Web', 'Real Estate', 'WebGL'],
  },
  {
    id: 'industry-40-dashboards',
    badgeId: '04',
    category: 'Industrial',
    title: 'Industry 4.0: Modernizing Legacy IoT Control Hubs',
    excerpt: 'Bridging physical manufacturing hardware with real-time responsive analytics and minimal dark aesthetics.',
    author: 'David Wright',
    date: 'Aug 15, 2026',
    readTime: '5 min read',
    featured: false,
    bgImage: blog4,
    tags: ['IoT', 'Industrial', 'Dashboards'],
  },
  {
    id: 'digital-health-privacy',
    badgeId: '05',
    category: 'Healthcare',
    title: 'HIPAA-Compliant Design Patterns in Digital Health',
    excerpt: 'Prioritizing data privacy and user trust through transparent, high-accessibility interface architectures.',
    author: 'Sarah Jenkins',
    date: 'Jul 22, 2026',
    readTime: '7 min read',
    featured: false,
    bgImage: blog5,
    tags: ['Healthcare', 'Compliance', 'Privacy'],
  },
];

const categories = ['All', 'Engineering', 'Fintech', 'Real Estate', 'Industrial', 'Healthcare'];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredBlogs = blogsData.filter((post) => {
    return activeCategory === 'All' || post.category === activeCategory;
  });

  const featuredPost = blogsData.find((p) => p.featured) || blogsData[0];
  const regularPosts = filteredBlogs.filter((p) => !p.featured || activeCategory !== 'All');

  return (
    <section className="relative w-full bg-black text-white pt-12 pb-24 transition-colors duration-300">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Categories Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-neutral-800/80 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-[.8rem] tracking-wider transition-all duration-300 whitespace-nowrap rounded-full cursor-pointer ${
                activeCategory === cat
                  ? 'bg-white text-black font-semibold'
                  : 'bg-black text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === 'All' && (
          <div className="relative w-full min-h-[480px] lg:min-h-[520px] rounded-[32px] overflow-hidden border border-neutral-800 bg-black p-8 sm:p-12 lg:p-16 flex flex-col justify-between shadow-2xl mb-16 group cursor-pointer">
            {/* Background Image with Zoom */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[32px]">
              <Image
                src={featuredPost.bgImage}
                alt={featuredPost.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-60"
                priority
              />
            </div>

            {/* Solid Left Black Fade Overlay */}
            <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none z-10" />

            {/* Featured Badge Header */}
            <div className="relative z-20 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#5dc192]/10 border border-[#5dc192]/30 text-[#5dc192] text-xs font-mono tracking-widest uppercase rounded-full">
                <Tag className="w-3 h-3" />
                Featured Publication
              </span>
              <span className="font-mono text-xs text-neutral-400">ARTICLE // {featuredPost.badgeId}</span>
            </div>

            {/* Main Content */}
            <div className="relative z-20 max-w-2xl flex flex-col gap-6 mt-12">
              <div className="flex items-center gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-[#5dc192]" />{featuredPost.date}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-[#5dc192]" />{featuredPost.readTime}</span>
                <span>•</span>
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-[#5dc192]" />{featuredPost.author}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-white group-hover:text-[#5dc192] transition-colors duration-300">
                {featuredPost.title}
              </h3>

              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                {featuredPost.excerpt}
              </p>

              <div className="pt-2">
                <button className="inline-flex items-center gap-2 px-7 py-3 text-xs font-mono tracking-wider uppercase text-black bg-white hover:bg-neutral-200 transition-all duration-300 font-semibold rounded-full cursor-pointer">
                  <span>Read Publication</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Blog Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <article
              key={post.id}
              className="relative min-h-[420px] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between group transition-all duration-300 hover:border-neutral-700 shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
                <Image
                  src={post.bgImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-40"
                />
              </div>

              {/* Black Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/30 pointer-events-none z-10" />

              {/* Card Top Info */}
              <div className="relative z-20 flex items-center justify-between">
                <span className="font-mono text-xs text-[#5dc192] uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="font-mono text-xs text-neutral-500">// {post.badgeId}</span>
              </div>

              {/* Card Middle/Bottom Content */}
              <div className="relative z-20 flex flex-col gap-4 mt-16">
                <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#5dc192]" />{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#5dc192]" />{post.readTime}</span>
                </div>

                <h4 className="text-xl font-normal text-white group-hover:text-[#5dc192] transition-colors duration-300 leading-snug">
                  {post.title}
                </h4>

                <p className="text-xs text-neutral-400 font-normal leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex items-center gap-2 pt-2">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read Link */}
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-400">By {post.author}</span>
                  <button className="inline-flex items-center text-xs font-mono text-white group-hover:text-[#5dc192] transition-colors gap-1 cursor-pointer">
                    <span>Read</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredBlogs.length === 0 && (
          <div className="w-full py-24 text-center border border-dashed border-neutral-800 rounded-2xl">
            <p className="text-neutral-500 font-mono text-sm">No publications matching your selected category.</p>
          </div>
        )}

      </div>
    </section>
  );
}