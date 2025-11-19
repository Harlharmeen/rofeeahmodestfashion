"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ images }: { images: string[] }) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div>
      {/* Main Image */}
      <div className="relative w-full h-96 rounded-xl overflow-hidden">
        <Image src={selected} alt="Product image" fill className="object-cover" />
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border ${
              selected === img ? "border-[#6B4226]" : "border-transparent"
            }`}
            onClick={() => setSelected(img)}
          >
            <Image src={img} alt={`Thumb ${i}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
