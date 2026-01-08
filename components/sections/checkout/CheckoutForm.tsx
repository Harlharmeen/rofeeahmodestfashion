"use client";

import { useState } from "react";

interface CheckoutFormProps {
  cart: any[];
  clearCart: () => void;
  router: any;
}

export default function CheckoutForm({
  cart,
  clearCart,
  router,
}: CheckoutFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!cart.length) return;

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name,
    email,
    phone,
    address,
    items: cart.map((item) => ({
      name: item.name,
      price: item.price,
      qty: item.qty,
    })),
    total,
  }),
});


      const data = await res.json();

      if (!data.success) {
        alert("Failed to create order");
        return;
      }

      clearCart();

      // ✅ Redirect using backend-generated orderId
      router.push(`/order/${data.orderId}`);
    } catch (error) {
      console.error("Checkout error:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-xl shadow-sm"
    >
      <h2 className="text-xl font-semibold text-[#6B4226] mb-2">
        Checkout Details
      </h2>

      <div className="flex flex-col">
        <label className="mb-1 text-sm">Full Name</label>
        <input
          type="text"
          className="border px-3 py-2 rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm">Email Address</label>
        <input
          type="email"
          className="border px-3 py-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm">Phone / WhatsApp Number</label>
        <input
          type="tel"
          className="border px-3 py-2 rounded-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>

      <div className="flex flex-col">
        <label className="mb-1 text-sm">Shipping Address</label>
        <textarea
          className="border px-3 py-2 rounded-lg"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>

      <div className="flex justify-between font-bold text-[#6B4226]">
        <span>Total:</span>
        <span>₦{total.toLocaleString()}</span>
      </div>

      <button
        type="submit"
        disabled={loading || !cart.length}
        className="w-full bg-[#6B4226] text-white py-3 rounded-lg hover:bg-[#57351F] transition disabled:opacity-50"
      >
        {loading ? "Processing..." : "Proceed to Payment"}
      </button>
    </form>
  );
}
