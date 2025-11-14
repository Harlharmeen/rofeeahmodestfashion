"use client";

import Image from "next/image";
import Link from "next/link";

const accessories = [
  {
    title: "Elegant Jewelry",
    // Removed the leading slash '/' for external URL
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762810547/jewelry_ho8wei.jpg",
    link: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762810547/jewelry_ho8wei.jpg",
  },
  {
    title: "Queen Scarves",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762840837/71nfIQsmfZL._AC_SL1500__s0cq3w.jpg", // This is fine for local public files
    link: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762840837/71nfIQsmfZL._AC_SL1500__s0cq3w.jpg",
  },
  {
    title: "Elite Bags",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762840805/bags_dopuhy.jpg", // This is fine for local public files
    link: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762840805/bags_dopuhy.jpg",
  },
];

const AccessorySpotlight = () => {
  return (
    <section className="py-20 bg-brand-base px-4 md:px-10">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-text mb-4">
          Accessory Spotlight
        </h2>
        <p className="text-brand-text/80 max-w-2xl mx-auto">
          Complete your modest look with the perfect finishing touches —
          accessories designed to complement grace with sophistication.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {accessories.map((item, index) => (
          <Link
            key={index} // Consider using a unique ID if data is dynamic
            href={item.link}
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
          >
            <div className="h-[350px] relative">
              <Image
                src={item.image}
                alt={item.title} // Alt text is crucial for accessibility
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold ">
                {item.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default AccessorySpotlight;
