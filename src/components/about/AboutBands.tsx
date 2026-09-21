'use client';

import React from 'react';

// Import local brand PNG logos from src -> assets -> home-brands -> 1.png to 10.png
import brand1 from '@/assets/home-brands/1.png';
import brand2 from '@/assets/home-brands/2.png';
import brand3 from '@/assets/home-brands/3.png';
import brand4 from '@/assets/home-brands/4.png';
import brand5 from '@/assets/home-brands/5.png';
import brand6 from '@/assets/home-brands/6.jpg';
import brand7 from '@/assets/home-brands/7.png';
import brand8 from '@/assets/home-brands/8.png';
import brand9 from '@/assets/home-brands/12.webp';
import brand10 from '@/assets/home-brands/11.png';

const BRAND_LOGOS = [
  { id: 1, name: 'Brand 1', src: brand1.src || brand1 },
  { id: 2, name: 'Brand 2', src: brand2.src || brand2 },
  { id: 3, name: 'Brand 3', src: brand3.src || brand3 },
  { id: 4, name: 'Brand 4', src: brand4.src || brand4 },
  { id: 5, name: 'Brand 5', src: brand5.src || brand5 },
  { id: 6, name: 'Brand 6', src: brand6.src || brand6 },
  { id: 7, name: 'Brand 7', src: brand7.src || brand7 },
  { id: 8, name: 'Brand 8', src: brand8.src || brand8 },
  { id: 9, name: 'Brand 9', src: brand9.src || brand9 },
  { id: 10, name: 'Brand 10', src: brand10.src || brand10 },
];

export default function AboutBrands() {
  return (
    <section className="w-full bg-black text-white py-24 sm:py-32 px-6 sm:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* SECTION HEADER */}
        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-white text-center mb-16 sm:mb-24">
          Brands That Have Placed Their Trust in Us
        </h2>

        {/* LOGO GRID */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 md:gap-16 items-center justify-items-center">
          {BRAND_LOGOS.map((brand) => (
            <div
              key={brand.id}
              className="relative w-full h-20 sm:h-24 md:h-28 flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <img
                src={typeof brand.src === 'string' ? brand.src : brand.src}
                alt={`${brand.name} logo`}
                className="max-h-full max-w-full w-auto h-auto object-contain opacity-70 grayscale brightness-200 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}