"use client";
import { motion } from "framer-motion";

export default function CommunityCTA() {
  return (
    <section className="py-20 bg-[#6B4226] text-white text-center rounded-md">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Join Our Modest Fashion Family 👑
        </h2>
        <p className="text-[#F7EDE2] mb-8 max-w-2xl px-10">
          Follow us on Facebook and tag your looks with <b>#StyledByUs</b> to get featured in our next shout-out!
        </p>
        <a
          href="https://www.facebook.com/share/1BiDFJffLX/?mibextid=wwXlfr"
          target="_blank"
          className="inline-block bg-[#D4A5A5] text-[#6B4226] px-6 py-3 rounded-md font-semibold hover:bg-[#F7EDE2] transition"
        >
          Follow on Facebook
        </a>
      </motion.div>
    </section>
  );
}
