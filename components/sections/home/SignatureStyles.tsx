"use client";

import Image from "next/image";
import Link from "next/link";

const styles = [
  { name: "Egyptian Khimar", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762847864/jilbab-makkah-1-piece-manches-mitaines_n16mo2.webp" },
  { name: "Umbrella Jilbab", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762847863/f3b8e5833c51fa33401dbf537584db1e_b7aenv.jpg" },
  { name: "Half Khimar", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762847857/ee097ce422a36b324670bbddd1d05d14_fibqnc.jpg" },
  { name: "V-Shaped Hijabs", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762847856/d7d758b59f720d046430700b245664d2_ik3nt7.jpg" },
  { name: "Spiral Hijabs", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762847856/0eff5be9125a832633622620ecd0b3e6_bla4py.jpg" },
];

const SignatureStyles = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-brand-base">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-text mb-10">
          Signature Styles
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {styles.map((style) => (
            <div
              key={style.name}
              className="relative group h-64 rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src={style.image}
                alt={style.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-brand-base text-lg font-medium">
                {style.name}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Link
            href="/shop"
            className="inline-block bg-brand-highlight text-brand-text px-6 py-3 rounded-full font-medium hover:bg-brand-text hover:text-brand-base transition-colors"
          >
            View All Hijabs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureStyles;
