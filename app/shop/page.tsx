"use client";

import { useState } from "react";
import ShopHero from "@/components/sections/shop/ShopHero";
import ProductGrid from "@/components/sections/shop/ProductGrid";
import ShopCTA from "@/components/sections/shop/ShopCTA";
import sampleProducts from "@/data/sampleProducts";

export default function ShopPage() {
const [filters, setFilters] = useState({
search: "",
category: "All",
sort: "default",
});

// Filter and sort products
const filteredProducts = sampleProducts
.filter((p) =>
filters.category === "All" ? true : p.category === filters.category
)
.filter((p) =>
p.name.toLowerCase().includes(filters.search.toLowerCase())
)
.sort((a, b) => {
if (filters.sort === "price-asc") return a.price - b.price;
if (filters.sort === "price-desc") return b.price - a.price;
if (filters.sort === "name") return a.name.localeCompare(b.name);
return 0;
});

// Map products to include 'image' for ProductGrid (pick first image)
const mappedProducts = filteredProducts.map((p) => ({
...p,
image: p.images?.[0] || "", // use first image
}));

return ( <main className="bg-[#F7EDE7] min-h-screen"> <ShopHero filters={filters} setFilters={setFilters} /> <section className="px-4 md:px-10 py-10"> <ProductGrid products={mappedProducts} /> </section> <ShopCTA /> </main>
);
}
