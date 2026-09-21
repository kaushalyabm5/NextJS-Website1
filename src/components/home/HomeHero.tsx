import Image from "next/image";
import Link from "next/link";
import heroImg from "@/assets/home-hero/hero-img.png";

export default function HomeHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-24 pb-10 px-4">
      {/* Background Image Layer */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        <Image
          src={heroImg}
          alt="CosmoQ Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark overlay gradient for contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-4xl mx-auto flex flex-col items-center z-10 space-y-6">
        {/* Top Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm text-white/90 font-normal shadow-inner">
          Jezzy AI Beta Version is launching on 23rd September
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white leading-[1.1] max-w-3xl">
          Next-gen enterprise <br className="hidden sm:inline" />
          with AI Agents
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed">
          Axstar turns ideas into scalable, high-performance digital solutions, <br className="hidden sm:inline" />
          driving business growth from strategy to full deployment.
        </p>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
          {/* Primary CTA Button */}
          <Link
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-black/80 hover:bg-black rounded-full border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
          >
            Get Started
          </Link>

          {/* Secondary CTA Button */}
          <Link
            href="#"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 rounded-full border border-white/15 backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95"
          >
            See Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}