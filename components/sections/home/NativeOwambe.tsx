"use client";

import Image from "next/image";
import Link from "next/link";

const NativeOwambe = () => {
  return (
    <section className="py-20 bg-brand-base px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Image */}
        <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-md">
          <Image
            src="https://res.cloudinary.com/dfqh2niw3/image/upload/v1762847855/hq720_xyfmhb.jpg" // replace with your couture image
            alt="Native & Owambe Couture"
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Right: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-text mb-4">
            Native & Owambe Styles
          </h2>
          <p className="text-brand-text/80 leading-relaxed mb-8">
            Where tradition meets elegance. Our Owambe couture celebrates
            modesty with a glamorous edge — perfect for weddings, celebrations,
            and every grand event. Each piece tells a story of culture,
            confidence, and grace.
          </p>
          <Link
            href="/shop?category=owambe"
            className="inline-block bg-brand-highlight text-brand-text px-6 py-3 rounded-full font-medium hover:bg-brand-text hover:text-brand-base transition-colors"
          >
            View Couture Looks →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NativeOwambe;
