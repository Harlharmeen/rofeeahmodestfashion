"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { motion } from "framer-motion";

export default function SubmissionForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setForm({ ...form, file: selectedFile });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message || !form.file) {
      alert("Please fill all fields and upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("file", form.file);

    try {
      const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/submission/submit`,
  {
    method: "POST",
    body: formData, // keep as is for FormData
  }
);


      const data = await res.json();
      alert(data.message);

      // Reset form
      setForm({ name: "", email: "", message: "", file: null });
    } catch (error) {
      console.error(error);
      alert("Something went wrong submitting your entry.");
    }
  };

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#6B4226] mb-6">
        Want to Be Featured? 🌟
      </h2>
      <p className="text-[#6B4226]/70 mb-10 max-w-xl mx-auto">
        Upload your photo rocking our collection and share your experience.
      </p>

      <motion.form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto bg-[#F7EDE2] rounded-lg shadow-md p-6 flex flex-col gap-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="p-3 rounded-md outline-none border border-[#D4A5A5]/50 bg-white text-[#6B4226]"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="p-3 rounded-md outline-none border border-[#D4A5A5]/50 bg-white text-[#6B4226]"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="p-3 rounded-md outline-none border border-[#D4A5A5]/50 bg-white text-[#6B4226]"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="p-2 text-[#6B4226]"
        />

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
