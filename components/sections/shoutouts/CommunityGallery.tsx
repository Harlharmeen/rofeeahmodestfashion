"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const shoutouts = [
  { name: "Zainab", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762856160/IMG-20251111-WA0000_fwpyqi.jpg" },
  { name: "Maryam", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762856160/IMG-20251111-WA0000_fwpyqi.jpg" },
  { name: "Hafsa", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762856160/IMG-20251111-WA0000_fwpyqi.jpg" },
  { name: "Fatima", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762856160/IMG-20251111-WA0000_fwpyqi.jpg" },
  { name: "Fatima", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762856160/IMG-20251111-WA0000_fwpyqi.jpg" },
  
  ];

export default function CommunityGallery() {
  return (
    <section className="py-20 bg-[#F7EDE2] align-item: center">
      <h2 className="text-center text-3xl md:text-4xl font-semibold text-[#6B4226] mb-10">
        Our Community Gallery 💕
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6 md:px-12">
        {shoutouts.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-lg overflow-hidden shadow-md group"
          >
            <Image
              src={item.img}
              alt={item.name}
              width={300}
              height={300}
              className="object-cover w-full h-64 group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 w-full bg-[#6B4226]/70 text-white py-2 text-center">
              {item.name}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
