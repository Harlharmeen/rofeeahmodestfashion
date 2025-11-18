"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "waliyah Adeshola",
    quote:
      "Good morning, I love this outfit and hijab you did the tutorial on TickTok",
    image:
      "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763466618/WhatsApp_Image_2025-11-16_at_20.40.48_mk6eis_880b52.jpg"
  },
  {
    name: "Mrs Fashola Azeezat",
    quote:
      "Asalamuhalaikumwarahmatullahi, wow! U a really creative and talanted. I just received my order and I really really love what I saw, more wisdom. ma sha Allah",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763466131/WhatsApp_Image_2025-11-16_at_20.44.57_dy1r7s.jpg",
  },
  {
    name: "Fatima Ibrahim",
    quote:
      "Salam sis, pls I want to learn to sew different types of hijab and how do I join your class and what's your you.tube name",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763466131/WhatsApp_Image_2025-11-16_at_20.44.57_dy1r7s.jpg",
  },
  {
    name: "Muhammad Biliqis",
    quote:
      "Am a tailor but I don't know how to make fancy hijabs Pls I need ur guide",
    image:
      "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763466131/WhatsApp_Image_2025-11-16_at_20.44.57_dy1r7s.jpg",
  },
  {
    name: "Barokah shittu",
    quote:
      "Assalamualaikumwaramatullahi wabarakatuhu Sister I have been seeing ur post on Facebook and I wish to learn from you I already have a basic knowledge of cutting and sewing hijabs like the popular umbrella style but I wish to move further. I will appreciate if you can reply me and let me know the requirements. Thank u",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763466131/WhatsApp_Image_2025-11-16_at_20.44.57_dy1r7s.jpg",
  },
  {
    name: "Zeeyat(from Ghana)",
    quote: 
      "I’m a fashion designer and I want to learn the modesty wears from you Please how do I make the payment",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763466131/WhatsApp_Image_2025-11-16_at_20.44.57_dy1r7s.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 px-6 bg-[#F7EDE2]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#6B4226] mb-12">
          What Our Customers/ Followers Say
        </h2>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="relative bg-white rounded-2xl shadow-md p-8 border border-[#D4A5A5]/20 transition-all">
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#D4A5A5]">
              <Image
                src={testimonials[index].image}
                alt={testimonials[index].name}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-[#6B4226]/80 italic leading-relaxed mb-4">
              “{testimonials[index].quote}”
            </p>

            <h4 className="font-semibold text-[#6B4226] tracking-wide mt-2">
              {testimonials[index].name}
            </h4>

            {/* Controls */}
            <div className="flex justify-center gap-6 mt-6">
              <button
                onClick={prev}
                className="p-3 rounded-full border border-[#D4A5A5]/40 text-[#6B4226] hover:bg-[#D4A5A5]/20 transition"
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={next}
                className="p-3 rounded-full border border-[#D4A5A5]/40 text-[#6B4226] hover:bg-[#D4A5A5]/20 transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-10">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center border border-[#D4A5A5]/20 hover:shadow-lg transition-all"
            >
              <div className="relative w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-[#D4A5A5]">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>

              <p className="text-[#6B4226]/80 italic leading-relaxed mb-4">
                “{item.quote}”
              </p>

              <h4 className="font-semibold text-[#6B4226] tracking-wide mt-2">
                {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
