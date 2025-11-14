"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ShoutoutHero() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-gradient-to-b from-[#F7EDE2] to-[#E9D5CA] overflow-hidden">
      {/* Background Collage */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/Beige Aesthetic Handmade Accessories Etsy Shop Cover_20251112_144939_0000.png"
          alt="Community collage"
          fill
          className="object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#6B4226]/60" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Styled by You ✨
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#F7EDE2]">
          Real customers, real elegance — see how our modest fashion inspires confidence worldwide.
        </p>
      </motion.div>
    </section>
  );
}
