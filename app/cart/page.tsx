"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const updateCart = (updatedCart: any[]) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increment = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updated);
  };

  const decrement = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
    );
    updateCart(updated);
  };

  const removeItem = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold text-[#6B4226] mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20 text-gray-500 text-lg">
          Your cart is empty.
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex gap-5 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition"
            >
              {/* Product Image */}
              <div className="relative w-32 h-32 rounded-lg overflow-hidden">
                <Image
                  src={item.images[0]} // <-- use first image
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-[#6B4226] font-semibold">{item.name}</h3>
                  <p className="text-[#6B4226]/70 text-sm">{item.category}</p>
                  <p className="font-bold text-[#D4A5A5] mt-1">
                    ₦{item.price.toLocaleString()}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="w-8 h-8 bg-gray-200 rounded-lg text-lg"
                  >
                    -
                  </button>

                  <span className="font-semibold">{item.qty}</span>

                  <button
                    onClick={() => increment(item.id)}
                    className="w-8 h-8 bg-gray-200 rounded-lg text-lg"
                  >
                    +
                  </button>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-auto text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="text-lg font-bold text-[#6B4226]">
              Total: ₦{total.toLocaleString()}
            </p>
            <button className="mt-3 bg-[#6B4226] text-white px-6 py-3 rounded-xl hover:bg-[#57351F] transition">
             <Link href="/Checkout" className="w-full h-full block">
                Checkout
            </Link>
</button>
          </div>
        </div>
      )}
    </div>
  );
}
