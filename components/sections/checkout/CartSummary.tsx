"use client";

import Image from "next/image";

interface CartSummaryProps {
  cart: any[];
  updateCart: (updated: any[]) => void;
}

export default function CartSummary({ cart, updateCart }: CartSummaryProps) {
  const increment = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    updateCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decrement = (id: string) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, qty: Math.max(item.qty - 1, 1) } : item
    );
    updateCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const removeItem = (id: string) => {
    const updated = cart.filter((item) => item.id !== id);
    updateCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2 className="text-xl font-semibold text-[#6B4226] mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <div className="text-gray-500 text-center py-10">Your cart is empty.</div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <Image src={item.image} alt={item.name} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-[#6B4226]">{item.name}</h3>
                  <p className="text-[#6B4226]/70 text-sm">{item.category}</p>
                  <p className="font-bold text-[#D4A5A5]">₦{item.price.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="w-8 h-8 bg-gray-200 rounded-lg"
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="w-8 h-8 bg-gray-200 rounded-lg"
                  >
                    +
                  </button>
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

          <div className="mt-6 text-right font-bold text-[#6B4226]">
            Total: ₦{total.toLocaleString()}
          </div>
        </div>
      )}
    </div>
  );
}
