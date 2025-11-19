"use client";

import Image from "next/image";

export default function CartItem({
  item,
  cart,
  updateCart,
}: {
  item: any;
  cart: any[];
  updateCart: (updated: any[]) => void;
}) {
  const increment = () => {
    const updated = cart.map((c) =>
      c.id === item.id ? { ...c, qty: c.qty + 1 } : c
    );
    updateCart(updated);
  };

  const decrement = () => {
    if (item.qty === 1) return;
    const updated = cart.map((c) =>
      c.id === item.id ? { ...c, qty: c.qty - 1 } : c
    );
    updateCart(updated);
  };

  const removeItem = () => {
    const updated = cart.filter((c) => c.id !== item.id);
    updateCart(updated);
  };

  return (
    <div className="flex gap-5 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition">
      {/* Product Image */}
      <div className="relative w-32 h-32 rounded-lg overflow-hidden">
        <Image
          src={item.images[0]}
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
            onClick={decrement}
            className="w-8 h-8 bg-gray-200 rounded-lg text-lg"
          >
            -
          </button>

          <span className="font-semibold">{item.qty}</span>

          <button
            onClick={increment}
            className="w-8 h-8 bg-gray-200 rounded-lg text-lg"
          >
            +
          </button>

          {/* Remove */}
          <button
            onClick={removeItem}
            className="ml-auto text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
