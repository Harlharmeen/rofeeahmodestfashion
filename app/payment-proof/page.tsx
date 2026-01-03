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
      formData.append("proof", file); // MUST match backend

      const res = await fetch(
        `http://localhost:5000/api/payment-proof/${orderId}`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Upload failed");
      }

      router.push(`/order/${orderId}`);
    } catch (err: any) {
      setError(err.message || "Upload failed");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-xl font-semibold mb-4">Upload Payment Proof</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          required
        />

        {error && <p className="text-red-600">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6B4226] text-white py-3 rounded-lg disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Submit Proof"}
        </button>
      </form>
    </div>
  );
}
