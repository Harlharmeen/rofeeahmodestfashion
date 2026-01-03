"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import sampleProducts from "@/data/sampleProducts";
import ProductGallery from "@/components/sections/productpage/ProductGallery";

export default function ProductDetailPage() {
  const params = useParams();
  const product = sampleProducts.find((p) => p.id === params.id);
  const [showToast, setShowToast] = useState(false);

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">
        Product not found
      </div>
    );
  }

  const addToCart = () => {
    const existing = JSON.parse(localStorage.getItem("cart") || "[]");

    const productExists = existing.find((p: any) => p.id === product.id);

    let updated;

    if (productExists) {
      updated = existing.map((p: any) =>
        p.id === product.id ? { ...p, qty: p.qty + 1 } : p
      );
    } else {
      updated = [...existing, { ...product, qty: 1 }];
    }

    localStorage.setItem("cart", JSON.stringify(updated));

    // ✅ Show toast
    setShowToast(true);

    // ⏱ Auto-hide
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <>
      {/* Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#6B4226] text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in">
          ✅ Item added to cart
        </div>
      )}

      <div className="max-w-6xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-10">
        {/* Image Gallery */}
        <ProductGallery images={product.images} />

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-[#6B4226] mb-2">
              {product.name}
            </h1>
            <p className="text-[#6B4226]/70 mb-4">{product.category}</p>
            <p className="text-[#D4A5A5] font-bold text-3xl mb-6">
              ₦{product.price.toLocaleString()}
            </p>
            <p className="text-gray-700 mb-6">
              {product.description}
            </p>
          </div>

          <button
            onClick={addToCart}
            className="bg-[#6B4226] text-white px-6 py-3 rounded-lg hover:bg-[#57351F] transition text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}
