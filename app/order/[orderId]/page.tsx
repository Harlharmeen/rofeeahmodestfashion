"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function OrderPage() {
  const { orderId } = useParams();
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

      // 🛑 Stop polling once payment is confirmed
      if (data?.status === "paid" && interval) {
        clearInterval(interval);
      }
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  // Initial fetch
  fetchOrder();

  // 🔁 Poll every 5 seconds
  interval = setInterval(fetchOrder, 5000);

  // Cleanup on unmount
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
      {/* Header */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold text-[#6B4226]">
          Order Received
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          Order ID: <span className="font-medium">{order.orderId}</span>
        </p>

        <p className="mt-3 text-sm">
          Status:{" "}
          {order.status === "awaiting_payment" && (
            <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
              Awaiting Payment
            </span>
          )}
          {order.status === "pending_verification" && (
            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded">
              Payment Submitted – Awaiting Confirmation
            </span>
          )}
          {order.status === "paid" && (
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded">
              Paid
            </span>
          )}
        </p>
      </div>

      {/* Order Summary */}
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

      {/* Payment Instructions */}
      {order.status === "awaiting_payment" && (
        <div className="bg-white p-6 rounded-xl shadow-sm space-y-4">
          <h2 className="font-semibold text-[#6B4226]">
            Payment Instructions
          </h2>

          <p className="text-sm text-gray-700">
            Please make a bank transfer using the details below.
            Use your <strong>Order ID</strong> as narration.
          </p>

          <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-1">
            <p><strong>Bank:</strong> OPAY</p>
            <p><strong>Account Name:</strong> Hamzat Rofiat Adejoke</p>
            <p><strong>Account Number:</strong> 9033957023</p>
            <p><strong>Amount:</strong> ₦{order.total.toLocaleString()}</p>
            <p><strong>Narration:</strong> {order.orderId}</p>
          </div>

          <Link
            href={`/order/${order.orderId}/payment-proof`}
            className="block text-center border border-[#6B4226] text-[#6B4226] py-3 rounded-lg hover:bg-[#6B4226] hover:text-white transition"
          >
            I’ve Made Payment
          </Link>
        </div>
      )}

      {/* Pending Verification Message */}
      {order.status === "pending_verification" && (
        <div className="bg-blue-50 p-6 rounded-xl text-sm text-blue-700">
          Payment proof has been submitted.
          <br />
          Our team will verify and confirm your payment shortly.
        </div>
      )}

      {/* Paid Message */}
      {order.status === "paid" && (
        <div className="bg-green-50 p-6 rounded-xl text-sm text-green-700">
          Payment confirmed 🎉  
          We’ll contact you shortly on WhatsApp regarding delivery.
        </div>
      )}

      {/* WhatsApp CTA */}
      <a
        href={`https://wa.me/2349033957023?text=${encodeURIComponent(
          `Hello, I’m following up on my order.\n\nOrder ID: ${order.orderId}`
        )}`}
        target="_blank"
        className="block text-center bg-[#6B4226] text-white py-3 rounded-lg hover:bg-[#57351F] transition"
      >
        Contact us on WhatsApp
      </a>
    </div>
  );
}
