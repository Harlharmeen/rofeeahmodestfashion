"use client";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <img
        src="/Beige Aesthetic Handmade Accessories Etsy Shop Cover_20251112_144939_0000.png"
        alt="Sewing fabric background"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>

      <motion.div
        className="relative z-10 text-white px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Where Modesty Meets Elegance ✨
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-6">
          We design with purpose — empowering women to express grace, culture,
          and confidence.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#D4A5A5] hover:bg-[#c78c8c] text-white px-5 py-2 rounded-md font-medium">
            Shop Now
          </button>
          <button className="border border-white hover:bg-white hover:text-[#6B4226] px-5 py-2 rounded-md font-medium">
            Meet the Designer
          </button>
        </div>
      </motion.div>
    </section>
  );
}
