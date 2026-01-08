"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function OrderPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const [order, setOrder] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const fetchOrder = async () => {
      try {
        const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${orderId}`,
  { cache: "no-store" }
);


        if (!res.ok) throw new Error("Failed to fetch order");

        const data = await res.json();
        setOrder(data);
        setLoading(false);

        if (data?.status === "paid" && interval) {
          clearInterval(interval);
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchOrder();
    interval = setInterval(fetchOrder, 5000);

    return () => clearInterval(interval);
  }, [orderId]);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading order…
      </div>
    );
  }

  if (!order) {
    return (
      <div className="p-10 text-center text-red-500">
        Order not found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold text-[#6B4226]">
          Order Received
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Order ID: <span className="font-medium">{order.orderId}</span>
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="font-semibold text-[#6B4226] mb-4">
          Order Summary
        </h2>

        <div className="space-y-3 text-sm">
          {order.items.map((item: any, i: number) => (
            <div key={i} className="flex justify-between">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                ₦{(item.price * item.qty).toLocaleString()}
              </span>
            </div>
          ))}
        </div>

        <div className="flex justify-between font-bold mt-4 pt-4 border-t">
          <span>Total</span>
          <span>₦{order.total.toLocaleString()}</span>
        </div>
      </div>

      <Link
        href="/"
        className="block text-center border border-[#6B4226] text-[#6B4226] py-3 rounded-lg hover:bg-[#6B4226] hover:text-white transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
