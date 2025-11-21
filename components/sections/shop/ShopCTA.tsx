"use client";

import { Instagram } from "lucide-react";

const ShopCTA = () => {
  return (
    <section className="bg-[#F7EDE2] text-center py-16 px-4 md:px-8 mt-20 rounded-t-3xl border">
      <h2 className="text-2xl md:text-3xl font-semibold text-[#6B4226] mb-4">
        Can’t find your style?
      </h2>
      <p className="text-[#6B4226]/70 mb-6">
        Book a <span className="font-semibold">custom sewing session</span> with our fashion team
        and get a design made just for you.
      </p>

      <div className="flex justify-center gap-4 mb-8">
        <a
          href="https://wa.me/+2349033957023"
          className="bg-[#D4A5A5] text-white font-medium px-6 py-3 rounded-xl hover:bg-[#6B4226] transition"
        >
          Book a Custom Sewing
        </a>
        <a
          href="https://www.instagram.com/rofeeah_modest_fashion_"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#6B4226] border border-[#6B4226]/20 px-6 py-3 rounded-xl hover:bg-[#6B4226]/10 transition"
        >
          <Instagram className="w-5 h-5" />
          Follow Us
        </a>
      </div>

      <p className="text-sm text-[#6B4226]/60">
        Stay connected for new drops and modest style inspirations 💫
      </p>
    </section>
  );
};

export default ShopCTA;
