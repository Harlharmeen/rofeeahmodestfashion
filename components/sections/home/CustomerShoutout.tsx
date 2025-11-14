"use client";

import Image from "next/image";
import { useState } from "react";

const highlights = [
  {
    name: "Rofee'ah H.",
    quote:
      "Rofee'ah’s designs make me feel elegant yet comfortable. I wore her Egyptian Khimar to a wedding — all eyes were on me!",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762856160/IMG-20251111-WA0000_fwpyqi.jpg",
  },
  {
    name: "Barakat M.",
    quote:
      "I never thought modest wear could feel this luxurious. Her Umbrella Jilbab is perfection!",
    image: "/customers/aisha.jpg",
  },
  {
    name: "Balikis Y.",
    quote:
      "Her spiral hijabs are my go-to for every event — classy, neat, and easy to style.",
    image: "/customers/maryam.jpg",
  },
];

const CustomerShoutOut = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((prev) => (prev + 1) % highlights.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + highlights.length) % highlights.length);

  const { name, quote, image } = highlights[current];

  return (
    <section className="py-20 px-4 md:px-10 bg-[#F7EDE2]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-text mb-8">
          Face of the Week
        </h2>

        <div className="relative flex flex-col items-center gap-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-[#D4A5A5]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <blockquote className="text-brand-text/80 italic max-w-2xl">
            “{quote}”
          </blockquote>
          <p className="font-semibold text-lg text-brand-text mt-2">— {name}</p>

          {/* Controls */}
          <div className="flex gap-6 mt-6">
            <button
              onClick={prev}
              className="px-4 py-2 bg-brand-accent text-brand rounded-full hover:bg-brand-accent/80 transition-all"
            >
              ◀ Prev
            </button>
            <button
              onClick={next}
              className="px-4 py-2 bg-brand-accent text-brand rounded-full hover:bg-brand-accent/80 transition-all"
            >
              Next ▶
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerShoutOut;
