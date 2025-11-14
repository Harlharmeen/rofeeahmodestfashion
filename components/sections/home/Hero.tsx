"use client";

import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-30"
        style={{
          backgroundImage:
            "url('/hero-banner.jpg')", // replace with your own image later
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 text-brand-base max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-semibold mb-4">
          Elegance in <span className="text-brand-highlight">Modesty</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-brand-base/90">
          Discover timeless modest styles crafted with grace and purpose.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            href="/shop"
            className="bg-brand-highlight text-brand-text px-6 py-3 rounded-full font-medium hover:bg-brand-text hover:text-brand-base transition-colors"
          >
            Explore Shop
          </Link>
          <Link
            href="/courses"
            className="border border-brand-highlight text-brand-base px-6 py-3 rounded-full font-medium hover:bg-brand-highlight hover:text-brand-text transition-colors"
          >
            Learn From Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
