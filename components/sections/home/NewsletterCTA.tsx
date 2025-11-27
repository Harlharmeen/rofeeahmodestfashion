"use client";
import { useState } from "react";
import axios from "axios";

const NewsletterCTA = () => {
  const [email, setEmail] = useState("");

  // 👇 FIX: Add proper event type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/newsletter/subscribe`, {
        email,
      });

      alert("Subscription successful! Check your email.");
      setEmail("");
    } catch (error) {
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <section className="bg-[#F7EDE2] py-16 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#6B4226] mb-4">
        Stay Connected
      </h2>

      <p className="text-[#6B4226]/80 mb-6">
        Join our modest fashion family — be the first to know about new
        collections, tutorials, and exclusive discounts.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center gap-3 max-w-md mx-auto"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-md border border-[#D4A5A5] focus:outline-none focus:ring-2 focus:ring-[#D4A5A5]"
          required
        />

        <button
          type="submit"
          className="bg-[#D4A5A5] text-[#6B4226] px-5 py-2 rounded-md font-medium hover:bg-[#c58d8d] transition-all"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default NewsletterCTA;
