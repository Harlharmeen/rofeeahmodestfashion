"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SubmissionForm() {
  const [form, setForm] = useState({ name: "", message: "", file: null });

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#6B4226] mb-6">
        Want to Be Featured? 🌟
      </h2>
      <p className="text-[#6B4226]/70 mb-10 max-w-xl mx-auto">
        Upload your photo or video rocking our collection and share your experience.
      </p>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto bg-[#F7EDE2] rounded-lg shadow-md p-6 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-md outline-none border border-[#D4A5A5]/50 bg-white text-[#6B4226]"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-md outline-none border border-[#D4A5A5]/50 bg-white text-[#6B4226]"
        />
        <input type="file" className="p-2 text-[#6B4226]" />
        <button
          type="submit"
          className="bg-[#6B4226] text-white py-3 rounded-md font-medium hover:bg-[#D4A5A5] transition"
        >
          Submit Entry
        </button>
      </motion.form>
    </section>
  );
}
