"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const shoutouts = [
  { name: "Waliyah", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763466618/WhatsApp_Image_2025-11-16_at_20.40.48_mk6eis_880b52.jpg" },
  { name: "Islamiyah", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1764087217/IMG_4622_f4blma_9374e1_3aefde.jpg" },
  { name: "Saheedah", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1764087459/IMG_4625_ismy5r_ccffdf.jpg" },
  { name: "Simbiat", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1764087655/IMG_4624_bhtgjb_26c507.jpg" },
  { name: "Hawau", img: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1764087833/IMG_4604_l05pb2_8fa2ab.jpg" },
  
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
