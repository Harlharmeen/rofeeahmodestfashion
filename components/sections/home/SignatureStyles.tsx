"use client";

import Image from "next/image";
import Link from "next/link";

const styles = [
  { name: "Egyptian Khimar", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763469908/deff1549-5af0-4054-98d0-410a36a32131_nxr5b7_2bb547_655840.jpg" },
  { name: "Hijabs", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763470274/8b667175-10e0-4ae5-bd05-bd0eab4d6f6e_iayxev_99a05b.jpg" },
  { name: "Abayas", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763486374/f9079bc2-a162-4fc1-af0c-cf5f8a298d23_rmarfh_724cd4.jpg" },
  { name: "Corparate Wears", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763486911/IMG_4622_f4blma_9374e1.jpg" },
  { name: "Umbrella Jilbab", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763488475/f3b8e5833c51fa33401dbf537584db1e_b7aenv_794346.jpg" },
  { name: "Half Khimar", image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1763488077/ee097ce422a36b324670bbddd1d05d14_fibqnc_39c852.jpg" },

  
];

const SignatureStyles = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-brand-base">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-text mb-10">
          Muslimah Signature Styles
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {styles.map((style) => (
            <div
              key={style.name}
              className="relative group h-100 rounded-2xl overflow-hidden shadow-sm"
            >
              <Image
                src={style.image}
                alt={style.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all" />
              <h3 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-brand-base text-lg font-medium">
                {style.name}
              </h3>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-10">
          <Link
            href="/shop"
            className="inline-block bg-brand-highlight text-brand-text px-6 py-3 rounded-full font-medium hover:bg-brand-text hover:text-brand-base transition-colors"
          >
            View All Hijabs →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureStyles;
