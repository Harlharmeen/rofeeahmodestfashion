"use client";
import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/contact/send`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  }
);


      const data = await res.json();

      alert(data.message);

      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-[#fffaf7]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left - Form */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">
            Send Review and Feedback 💌
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              className="p-3 rounded-md border border-[#D4A5A5]/50 outline-none"
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 rounded-md border border-[#D4A5A5]/50 outline-none"
            />

            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="p-3 rounded-md border border-[#D4A5A5]/50 outline-none"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              className="p-3 rounded-md border border-[#D4A5A5]/50 outline-none"
            />

            <button
              disabled={loading}
              className="bg-[#6B4226] text-white px-5 py-2 rounded-md hover:bg-[#57361f]"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-4 text-[#6B4226]/80">
          <p>
            <strong>📞 WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/2349033957023"
              className="hover:underline"
            >
              +2349033957023
            </a>
          </p>
          <p>
            <strong>📧 Email:</strong>{" "}
            <a
              href="mailto:hamzatadejoke2001@.com"
              className="hover:underline"
            >
              hamzatadejoke2001@gmail.com
            </a>
          </p>
          <p>
            <strong>📍 Location:</strong>{" "}
            <a
              href="https://maps.app.goo.gl/AhHyFcSJxLncvBKS6"
              className="hover:underline"
            >
              Ibadan, Nigeria (Worldwide Delivery)
            </a>
          </p>
          <p>
            <strong>🌐 Socials:</strong>{" "}
            <a
              href="https://www.instagram.com/rofeeah_modest_fashion_"
              className="hover:underline"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://www.tiktok.com/@Rofeeahmodestfashion"
              className="hover:underline"
            >
              TikTok
            </a>{" "}
            |{" "}
            <a
              href="https://m.youtube.com/@rofeeahmodestfashion"
              className="hover:underline"
            >
              YouTube
            </a>{" "}
            |{" "}
            <a
              href="https://www.facebook.com/share/1BiDFJffLX/?mibextid=wwXlfr"
              className="hover:underline"
            >
              Facebook
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
