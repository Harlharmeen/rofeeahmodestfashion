"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedShoutout() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#6B4226] mb-6">
        Face of the Week 🌸
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-[#F7EDE2] rounded-xl shadow-md overflow-hidden"
      >
        <Image
          src="https://res.cloudinary.com/dfqh2niw3/image/upload/v1762856160/IMG-20251111-WA0000_fwpyqi.jpg"
          alt="Featured customer"
          width={800}
          height={500}
          className="w-full object-cover h-80"
        />
        <div className="p-6 bg-transparent ">
          <h3 className="text-xl font-bold text-[#6B4226] mb-2">Aisha Bello</h3>
          <p className="text-[#6B4226]/80">
            “Wearing pieces from this brand makes me feel elegant yet comfortable — I get compliments every time.”
          </p>
        </div>
      </motion.div>
    </section>
  );
}
