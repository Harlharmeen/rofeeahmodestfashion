"use client";

import { Search, ChevronDown, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

interface ShopHeroProps {
  filters: {
    search: string;
    category: string;
    sort: string;
  };
  setFilters: (f: any) => void;
}

const ShopHero = ({ filters, setFilters }: ShopHeroProps) => {
  const [showFilter, setShowFilter] = useState(false);
  const [showSort, setShowSort] = useState(false);

  const tabs = ["All", "Hijabs", "Native & Owambe", "Accessories", "Jewelry"];

  return (
    <section className="relative bg-[#F7EDE2]">
      {/* 🔹 Hero Banner */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img
          src="/Beige Aesthetic Handmade Accessories Etsy Shop Cover_20251112_144939_0000.png"
          alt="Shop Our Collections"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Shop Our Collections
          </h1>
          <p className="text-sm md:text-base text-white/90">
            From Hijabs to Couture & Accessories
          </p>
        </div>
      </div>

      {/* 🔹 Filter / Search / Sort Bar */}
      <div className="relative z-20 bg-white shadow-md rounded-md mx-auto mb-10 w-[90%] md:w-4/5 max-w-4xl flex flex-col md:flex-row items-center justify-between p-3 md:p-4 gap-3 md:gap-6 translate-y-1/2">
        {/* Filter Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 text-[#6B4226] hover:text-[#D4A5A5]"
            onClick={() => setShowFilter(!showFilter)}
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="hidden md:inline text-sm font-medium">Filters</span>
          </button>
          {showFilter && (
            <div className="absolute left-0 top-10 bg-white shadow-lg border border-[#D4A5A5]/30 rounded-md w-40 py-2 z-30">
              {tabs.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setFilters({ ...filters, category: cat });
                    setShowFilter(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#F7EDE2] ${
                    filters.category === cat
                      ? "text-[#D4A5A5] font-semibold"
                      : "text-[#6B4226]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex items-center w-full md:w-1/2 bg-[#F7EDE2] rounded-md overflow-hidden border border-[#D4A5A5]/60">
          <Search className="ml-3 text-[#6B4226]/70" />
          <input
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="flex-1 px-3 py-2 bg-transparent outline-none text-[#6B4226]"
          />
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            className="flex items-center gap-2 text-[#6B4226] hover:text-[#D4A5A5]"
            onClick={() => setShowSort(!showSort)}
          >
            <span className="text-sm font-medium">Sort By</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {showSort && (
            <div className="absolute right-0 top-10 bg-white shadow-lg border border-[#D4A5A5]/30 rounded-md w-40 py-2 z-30">
              {[
                { label: "Default", value: "default" },
                { label: "Price: Low to High", value: "price-asc" },
                { label: "Price: High to Low", value: "price-desc" },
                { label: "Name A–Z", value: "name" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    setFilters({ ...filters, sort: opt.value });
                    setShowSort(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#F7EDE2] ${
                    filters.sort === opt.value
                      ? "text-[#D4A5A5] font-semibold"
                      : "text-[#6B4226]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

    
    </section>
  );
};

export default ShopHero;
