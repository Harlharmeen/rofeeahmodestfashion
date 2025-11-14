"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form); // later: send to /api/contact
    alert("Message sent! (Simulation)");
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-[#fffaf7]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left - Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Let’s Connect 💌</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="p-3 rounded-md border border-[#D4A5A5]/50 outline-none" />
            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded-md border border-[#D4A5A5]/50 outline-none" />
            <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" className="p-3 rounded-md border border-[#D4A5A5]/50 outline-none" />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={5} className="p-3 rounded-md border border-[#D4A5A5]/50 outline-none" />
            <button className="bg-[#6B4226] text-white px-5 py-2 rounded-md hover:bg-[#57361f]">
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-4 text-[#6B4226]/80">
          <p><strong>📞 WhatsApp:</strong> <a href="https://wa.me/2349033957023" className="hover:underline">+2349033957023</a></p>
          <p><strong>📧 Email:</strong> hamzatadejoke2001@.com</p>
          <p><strong>📍 Location:</strong> Ibadan, Nigeria (Worldwide Delivery)</p>
          <p><strong>🌐 Socials:</strong> Instagram | TikTok | YouTube | Facebook</p>
        </div>
      </div>
    </section>
  );
}
