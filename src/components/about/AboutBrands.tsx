'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Import local brand assets (1.png through 10.png)
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

interface Brand {
  id: number;
  name: string;
  src: StaticImageData;
}

const BRANDS: Brand[] = [
  { id: 1, name: 'Partner Brand 1', src: brand1 },
  { id: 2, name: 'Partner Brand 2', src: brand2 },
  { id: 3, name: 'Partner Brand 3', src: brand3 },
  { id: 4, name: 'Partner Brand 4', src: brand4 },
  { id: 5, name: 'Partner Brand 5', src: brand5 },
  { id: 6, name: 'Partner Brand 6', src: brand6 },
  { id: 7, name: 'Partner Brand 7', src: brand7 },
  { id: 8, name: 'Partner Brand 8', src: brand8 },
  { id: 9, name: 'Partner Brand 9', src: brand9 },
  { id: 10, name: 'Partner Brand 10', src: brand10 },
];

export default function AboutBrands() {
  return (
    <section className="w-full bg-black text-white py-20 sm:py-28 px-6 sm:px-12 lg:px-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* SECTION HEADER */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
            Brands That Have Placed Their Trust in Us
          </h2>
        </div>

        {/* BRANDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-center justify-items-center pt-6">
          {BRANDS.map((brand) => (
            <div
              key={brand.id}
              className="w-full h-16 sm:h-20 flex items-center justify-center p-2 group transition-all duration-300 hover:scale-105 cursor-pointer"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                className="max-h-full w-auto object-contain opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                priority={brand.id <= 5}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}