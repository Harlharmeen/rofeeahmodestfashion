"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  image: string;
  name: string;
  price: string;
  category?: string;
}

const ProductCard = ({ id, image, name, price, category }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-3">
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

        {/* Button */}
        <Link
          href={`/shop/${id}`}
          className="mt-3 block text-center border-1 text-white text-sm py-2 rounded-lg hover:bg-[#57351F] transition"
        >
          View Product
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
