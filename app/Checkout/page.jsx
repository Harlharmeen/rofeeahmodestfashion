"use client";

import { useEffect, useState } from "react";
import CartSummary from "@/components/sections/checkout/CartSummary";
import CheckoutForm from "@/components/sections/checkout/CheckoutForm";
import { getCart, saveCart } from "@/services/cartService";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCart().then((c) => setCart(c));
  }, []);

  const handleClearCart = async () => {
    await saveCart([]);
    setCart([]);
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-8">
      <CartSummary cart={cart} updateCart={setCart} />
      <CheckoutForm cart={cart} clearCart={handleClearCart} router={router} />
    </div>
  );
}
