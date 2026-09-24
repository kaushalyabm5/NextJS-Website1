'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Import local brand assets (1.png through 42.png)
import brand1 from '@/assets/home-brands/1.png';
import brand2 from '@/assets/home-brands/2.png';
import brand3 from '@/assets/home-brands/3.png';
import brand4 from '@/assets/home-brands/4.png';
import brand5 from '@/assets/home-brands/5.png';
import brand6 from '@/assets/home-brands/6.png';
import brand7 from '@/assets/home-brands/7.png';
import brand8 from '@/assets/home-brands/8.png';
import brand9 from '@/assets/home-brands/9.png';
import brand10 from '@/assets/home-brands/10.png';
import brand11 from '@/assets/home-brands/11.png';
import brand12 from '@/assets/home-brands/12.png';
import brand13 from '@/assets/home-brands/13.png';
import brand14 from '@/assets/home-brands/14.png';
import brand15 from '@/assets/home-brands/15.png';
import brand16 from '@/assets/home-brands/16.png';
import brand17 from '@/assets/home-brands/17.png';
import brand18 from '@/assets/home-brands/18.png';
import brand19 from '@/assets/home-brands/19.png';
import brand20 from '@/assets/home-brands/20.png';
import brand21 from '@/assets/home-brands/21.png';
import brand22 from '@/assets/home-brands/22.png';
import brand23 from '@/assets/home-brands/23.png';
import brand24 from '@/assets/home-brands/24.png';
import brand25 from '@/assets/home-brands/25.png';
import brand26 from '@/assets/home-brands/26.png';
import brand27 from '@/assets/home-brands/27.png';
import brand28 from '@/assets/home-brands/28.png';
import brand29 from '@/assets/home-brands/29.png';
import brand30 from '@/assets/home-brands/30.png';
import brand31 from '@/assets/home-brands/31.png';
import brand32 from '@/assets/home-brands/32.png';
import brand33 from '@/assets/home-brands/33.png';
import brand34 from '@/assets/home-brands/34.png';
import brand35 from '@/assets/home-brands/35.png';
import brand36 from '@/assets/home-brands/36.png';
import brand37 from '@/assets/home-brands/37.png';
import brand38 from '@/assets/home-brands/38.png';
import brand39 from '@/assets/home-brands/39.png';
import brand40 from '@/assets/home-brands/40.png';
import brand41 from '@/assets/home-brands/41.png';
import brand42 from '@/assets/home-brands/42.png';

interface Brand {
  id: number;
  name: string;
  src: StaticImageData;
}

const BRANDS: Brand[] = [
  { id: 1, name: 'Partner Brand 1', src: brand1 },
  { id: 2, name: 'Partner Brand 2', src: brand2 },
  { id: 3, name: 'Partner Brand 3', src: brand3 },
  { id: 6, name: 'Partner Brand 6', src: brand6 },
  { id: 8, name: 'Partner Brand 8', src: brand8 },
  { id: 9, name: 'Partner Brand 9', src: brand9 },
  { id: 10, name: 'Partner Brand 10', src: brand10 },
  { id: 11, name: 'Partner Brand 11', src: brand11 },
  { id: 12, name: 'Partner Brand 12', src: brand12 },
  { id: 13, name: 'Partner Brand 13', src: brand13 },
  { id: 14, name: 'Partner Brand 14', src: brand14 },
  { id: 15, name: 'Partner Brand 15', src: brand15 },
  { id: 16, name: 'Partner Brand 16', src: brand16 },
  { id: 19, name: 'Partner Brand 19', src: brand19 },
  { id: 20, name: 'Partner Brand 20', src: brand20 },
  { id: 21, name: 'Partner Brand 21', src: brand21 },
  { id: 23, name: 'Partner Brand 23', src: brand23 },
  { id: 24, name: 'Partner Brand 24', src: brand24 },
  { id: 25, name: 'Partner Brand 25', src: brand25 },
  { id: 26, name: 'Partner Brand 26', src: brand26 },
  { id: 27, name: 'Partner Brand 27', src: brand27 },
  { id: 28, name: 'Partner Brand 28', src: brand28 },
  { id: 29, name: 'Partner Brand 29', src: brand29 },
  { id: 30, name: 'Partner Brand 30', src: brand30 },
  { id: 31, name: 'Partner Brand 31', src: brand31 },
  { id: 32, name: 'Partner Brand 32', src: brand32 },
  { id: 33, name: 'Partner Brand 33', src: brand33 },
  { id: 35, name: 'Partner Brand 35', src: brand35 },
  { id: 37, name: 'Partner Brand 37', src: brand37 },
  { id: 38, name: 'Partner Brand 38', src: brand38 },
  { id: 39, name: 'Partner Brand 39', src: brand39 },
  { id: 40, name: 'Partner Brand 40', src: brand40 },
  { id: 41, name: 'Partner Brand 41', src: brand41 },
  { id: 42, name: 'Partner Brand 42', src: brand42 },
];

// Helper to chunk array evenly for 4 rows
const chunkSize = Math.ceil(BRANDS.length / 4);
const firstRowBrands = BRANDS.slice(0, chunkSize);
const secondRowBrands = BRANDS.slice(chunkSize, chunkSize * 2);
const thirdRowBrands = BRANDS.slice(chunkSize * 2, chunkSize * 3);
const fourthRowBrands = BRANDS.slice(chunkSize * 3);

export default function AboutBrands() {
  return (
    <section className="w-full bg-black text-white pt-10 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 px-6 sm:px-12 lg:px-20 mb-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center justify-center text-center space-y-3">
          <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-white leading-[1.1] max-w-2xl mx-auto text-center">
            Brands That Have Placed Their Trust in Us
          </h2>
        </div>
      </div>

      {/* MARQUEE CONTAINER WITH SIDE FADES */}
      <div className="relative w-full space-y-3 sm:space-y-4">
        {/* Left & Right Gradient Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-black to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-black to-transparent z-20" />

        {/* LINE 1: LEFT TO RIGHT */}
        <div className="flex overflow-hidden select-none">
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 animate-marquee-left-to-right hover:[animation-play-state:paused]">
            {[...firstRowBrands, ...firstRowBrands, ...firstRowBrands, ...firstRowBrands].map((brand, index) => (
              <div
                key={`row1-${brand.id}-${index}`}
                className="relative w-28 sm:w-36 lg:w-40 h-16 sm:h-20 shrink-0 flex items-center justify-center p-1.5 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  sizes="160px"
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LINE 2: RIGHT TO LEFT */}
        <div className="flex overflow-hidden select-none">
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 animate-marquee-right-to-left hover:[animation-play-state:paused]">
            {[...secondRowBrands, ...secondRowBrands, ...secondRowBrands, ...secondRowBrands].map((brand, index) => (
              <div
                key={`row2-${brand.id}-${index}`}
                className="relative w-28 sm:w-36 lg:w-40 h-16 sm:h-20 shrink-0 flex items-center justify-center p-1.5 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  sizes="160px"
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LINE 3: LEFT TO RIGHT */}
        <div className="flex overflow-hidden select-none">
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 animate-marquee-left-to-right hover:[animation-play-state:paused]">
            {[...thirdRowBrands, ...thirdRowBrands, ...thirdRowBrands, ...thirdRowBrands].map((brand, index) => (
              <div
                key={`row3-${brand.id}-${index}`}
                className="relative w-28 sm:w-36 lg:w-40 h-16 sm:h-20 shrink-0 flex items-center justify-center p-1.5 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  sizes="160px"
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* LINE 4: RIGHT TO LEFT */}
        <div className="flex overflow-hidden select-none">
          <div className="flex shrink-0 items-center gap-2 sm:gap-3 animate-marquee-right-to-left hover:[animation-play-state:paused]">
            {[...fourthRowBrands, ...fourthRowBrands, ...fourthRowBrands, ...fourthRowBrands].map((brand, index) => (
              <div
                key={`row4-${brand.id}-${index}`}
                className="relative w-28 sm:w-36 lg:w-40 h-16 sm:h-20 shrink-0 flex items-center justify-center p-1.5 transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  fill
                  sizes="160px"
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* UNIFIED SLOW ANIMATION STYLES */}
      <style jsx>{`
        @keyframes marquee-left-to-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes marquee-right-to-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee-left-to-right {
          animation: marquee-left-to-right 60s linear infinite;
        }

        .animate-marquee-right-to-left {
          animation: marquee-right-to-left 60s linear infinite;
        }
      `}</style>
    </section>
  );
}