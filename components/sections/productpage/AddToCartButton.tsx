"use client";

interface Product {
  id: string;
  name: string;
  price: number;
  images: string[]; // array of images
  category: string;
}

export default function AddToCartButton({ product }: { product: Product }) {
  const addToCart = () => {
    try {
      const existing: (Product & { qty: number })[] = JSON.parse(
        localStorage.getItem("cart") || "[]"
      );

      const productExists = existing.find((p) => p.id === product.id);

      let updated;
      if (productExists) {
        // Increment qty if already in cart
        updated = existing.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        // Add new product with qty and ensure images array exists
        updated = [
          ...existing,
          { ...product, qty: 1, images: product.images || [product.images[0]] },
        ];
      }

      localStorage.setItem("cart", JSON.stringify(updated));
      alert(`Added "${product.name}" to cart!`);
    } catch (error) {
      console.error("Failed to add to cart:", error);
      alert("Failed to add product to cart.");
    }
  };

  return (
    <button
      onClick={addToCart}
      className="bg-[#6B4226] text-white px-6 py-3 rounded-xl hover:bg-[#57351F] transition text-sm"
    >
      Add to Cart
    </button>
  );
}
