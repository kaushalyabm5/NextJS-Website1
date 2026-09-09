'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { projects } from '@/data/projects';

interface ProjectDetailPageProps {
  id: string;
}

export default function ProjectDetailPage({ id }: ProjectDetailPageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectIndex = projects.findIndex((p) => p.id === id);
  const project = projects[projectIndex];

  // Next / Previous Project Navigation
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  if (!project) {
    return (
      <div className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-semibold mb-4 tracking-tight">Project Not Found</h1>
        <p className="text-neutral-500 mb-6">The requested project details could not be found.</p>
        <Link
          href="/Portfolio"
          className="px-5 py-2.5 rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-black text-sm font-medium cursor-pointer hover:opacity-90 transition-opacity"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Combine primary image with gallery items for the carousel without duplicates
  const carouselImages = Array.from(
    new Set([project.image, ...(project.gallery || [])])
  );

  const handlePrevSlide = () => {
    setActiveImageIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveImageIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="min-h-screen bg-white dark:bg-black text-neutral-900 dark:text-white transition-colors duration-300 py-12 sm:py-20 px-4 sm:px-8 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Back Link */}
        <Link
          href="/Portfolio"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors mb-12 cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Portfolio</span>
        </Link>

        {/* Hero Title Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-neutral-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-neutral-950 dark:text-white leading-[1.08]">
              {project.title}
            </h1>
          </div>

          {/* Key Metrics */}
          {project.metrics && (
            <div className="flex flex-wrap items-center gap-8 lg:gap-12 pt-4 lg:pt-0">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl sm:text-3xl font-semibold text-neutral-950 dark:text-white tracking-tight">
                    {metric.value}
                  </span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Interactive Image Carousel Section */}
        <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 mb-16 group">
          
          {/* Active Carousel Image */}
          <div className="relative w-full h-full">
            <Image
              src={carouselImages[activeImageIndex]}
              alt={`${project.title} slide ${activeImageIndex + 1}`}
              fill
              unoptimized
              priority
              className="object-cover object-top transition-all duration-500 ease-out"
            />
          </div>

          {/* Left Navigation Button */}
          {carouselImages.length > 1 && (
            <button
              onClick={handlePrevSlide}
              aria-label="Previous Image"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white transition-all cursor-pointer border border-white/20 hover:scale-105 active:scale-95 shadow-lg z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          )}

          {/* Right Navigation Button */}
          {carouselImages.length > 1 && (
            <button
              onClick={handleNextSlide}
              aria-label="Next Image"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white transition-all cursor-pointer border border-white/20 hover:scale-105 active:scale-95 shadow-lg z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          )}

          {/* Lightbox Trigger Button */}
          <button
            onClick={() => setSelectedImage(carouselImages[activeImageIndex])}
            aria-label="Zoom Image"
            className="absolute top-4 right-4 p-3 rounded-full bg-black/60 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer border border-white/20 z-10"
          >
            <Maximize2 className="w-5 h-5" />
          </button>

          {/* Carousel Slide Indicators & Counter */}
          {carouselImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 z-10">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeImageIndex === idx
                      ? 'w-6 bg-white'
                      : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
              <span className="text-xs text-white/80 font-mono ml-2">
                {activeImageIndex + 1} / {carouselImages.length}
              </span>
            </div>
          )}
        </div>

        {/* Project Metadata & Brief Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Metadata Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6 p-8 rounded-2xl bg-neutral-50/80 dark:bg-neutral-900/40 border border-neutral-200/80 dark:border-neutral-800/80 h-fit">
            <div>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Client</p>
              <p className="text-base font-medium text-neutral-900 dark:text-white">{project.client}</p>
            </div>

            <div className="h-px bg-neutral-200/60 dark:bg-neutral-800/60" />

            <div>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-1">Year</p>
              <p className="text-base font-medium text-neutral-900 dark:text-white">{project.year}</p>
            </div>

            <div className="h-px bg-neutral-200/60 dark:bg-neutral-800/60" />

            <div>
              <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Deliverables</p>
              <ul className="flex flex-col gap-2">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 dark:text-neutral-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Summary, Challenge & Solution */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 text-neutral-950 dark:text-white">
                Overview
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-normal leading-relaxed">
                {project.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">The Challenge</h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white mb-2">The Solution</h3>
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Project Footer Navigation */}
        <div className="pt-12 border-t border-neutral-200 dark:border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            href={`/Portfolio/${prevProject.id}`}
            className="flex flex-col items-start gap-1 group cursor-pointer"
          >
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Previous Project</span>
            <span className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-neutral-500 transition-colors">
              ← {prevProject.title}
            </span>
          </Link>

          <Link
            href={`/Portfolio/${nextProject.id}`}
            className="flex flex-col items-end gap-1 group cursor-pointer text-right"
          >
            <span className="text-xs text-neutral-400 uppercase tracking-wider">Next Project</span>
            <span className="text-lg font-medium text-neutral-900 dark:text-white group-hover:text-neutral-500 transition-colors">
              {nextProject.title} →
            </span>
          </Link>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out animate-fadeIn"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="relative max-w-6xl w-full max-h-[90vh] aspect-[16/10] rounded-xl overflow-hidden">
            <Image
              src={selectedImage}
              alt="Fullscreen Preview"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}