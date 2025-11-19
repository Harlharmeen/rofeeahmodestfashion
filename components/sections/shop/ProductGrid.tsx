"use client";

import ProductCard from "@/components/cards/ProductCard";

interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  category: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (!products.length) {
    return (
      <div className="text-center text-[#6B4226] py-20">
        No products found matching your search or filter.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          id={product.id}
          image={product.images[0]}
          name={product.name}
          price={product.price.toString()}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
