'use client';

import React from 'react';

export default function CoreValues() {
  const values = [
    {
      letter: 'A',
      title: 'Agility',
      description: 'We move fast, adapt quickly, and respond to evolving business needs.',
    },
    {
      letter: 'X',
      title: 'eXpertise',
      description: 'We combine deep technical skill with strategic insight.',
    },
    {
      letter: 'S',
      title: 'Scalability',
      description: 'Our solutions are built to grow with your business.',
    },
    {
      letter: 'T',
      title: 'Technology',
      description: 'We leverage cutting-edge technologies to drive innovation.',
    },
    {
      letter: 'A',
      title: 'Ambition',
      description: 'We push boundaries to achieve extraordinary outcomes.',
    },
    {
      letter: 'R',
      title: 'Results',
      description: 'We deliver measurable impact and long term success.',
    },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-black text-neutral-900 dark:text-white py-24 px-6 sm:px-12 lg:px-20 border-t border-neutral-200 dark:border-neutral-900 transition-colors duration-300">
      {/* BACKGROUND ARCHITECTURAL GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#121212_1px,transparent_1px),linear-gradient(to_bottom,#121212_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none opacity-30 dark:opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 font-mono text-xs uppercase tracking-widest rounded-full shadow-sm">
            <span>[ VALUES THAT GUIDE OUR VISION ]</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter text-neutral-900 dark:text-white uppercase">
            Axstar Core Values
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-normal leading-relaxed">
            The fundamental principles that shape our culture, guide our execution, and define our delivery.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-neutral-50 dark:bg-neutral-950/80 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-6">
                {/* LETTER & INDEX ROW */}
                <div className="flex items-center justify-between border-b border-neutral-200 dark:border-neutral-900 pb-4">
                  <span className="text-4xl font-black font-mono text-neutral-900 dark:text-white">
                    {item.letter}
                  </span>
                  <span className="font-mono text-xs text-neutral-400 dark:text-neutral-600">
                    0{index + 1} // VALUE
                  </span>
                </div>

                {/* TITLE & DESCRIPTION */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* CARD BOTTOM ACCENT LINE */}
              <div className="w-full h-1 bg-neutral-200 dark:bg-neutral-800 rounded-full overflow-hidden">
                <div className="w-0 group-hover:w-full h-full bg-neutral-900 dark:bg-white transition-all duration-500 ease-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}