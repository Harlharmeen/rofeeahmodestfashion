"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentProofPage() {
  const { orderId } = useParams();
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Please select a payment proof image");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("proof", file); // ✅ Must match backend field

      const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/api/payment-proof/${orderId}`,
  {
    method: "POST",
    body: formData, // ❌ keep as is for FormData
  }
);


      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Upload failed");
      }

      await res.json(); // Consume JSON response

      router.push(`/order/${orderId}`);
    } catch (err: any) {
      console.error("Payment Proof Upload Error:", err);
      setError(err.message || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold text-[#6B4226] mb-4">
        Upload Payment Proof
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow space-y-4"
      >
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="w-full border rounded p-2"
        />

        <p className="text-sm text-gray-500">
          Accepted formats: JPG, PNG, JPEG, WEBP
        </p>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6B4226] text-white py-3 rounded-lg hover:bg-[#57351F] transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Submit Payment Proof"}
        </button>
      </form>
    </div>
  );
}
