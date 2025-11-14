"use client";

import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  category?: string;
}

const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3 cursor-pointer">
      <div className="relative w-full h-64 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover hover:scale-105 transition-transform"
        />
      </div>

      <div className="mt-3">
        <h3 className="text-[#6B4226] font-semibold text-sm">{name}</h3>
        <p className="text-[#6B4226]/70 text-xs mb-1">{category}</p>
        <p className="text-[#D4A5A5] font-bold">₦{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
