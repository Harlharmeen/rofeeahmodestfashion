"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FilterSidebar = () => {
  const [openCategory, setOpenCategory] = useState(true);
  const [openPrice, setOpenPrice] = useState(false);

  const categories = [
    "Hijabs & Khimars",
    "Jilbabs & Abayas",
    "Jewelry & Accessories",
    "Owambe / Native Wears",
    "Couture Collection",
    "Abayas",

  ];

  return (
    <aside className="bg-white border border-[#D4A5A5]/40 rounded-xl shadow-sm p-4 w-full md:w-64 space-y-4 text-[#6B4226]">
      {/* Category Filter */}
      <div>
        <button
          onClick={() => setOpenCategory(!openCategory)}
          className="flex items-center justify-between w-full text-sm font-semibold"
        >
          <span>Categories</span>
          {openCategory ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {openCategory && (
          <ul className="mt-2 space-y-1 text-sm">
            {categories.map((cat, i) => (
              <li
                key={i}
                className="cursor-pointer hover:text-[#D4A5A5] transition-colors"
              >
                {cat}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button
          onClick={() => setOpenPrice(!openPrice)}
          className="flex items-center justify-between w-full text-sm font-semibold"
        >
          <span>Price Range</span>
          {openPrice ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>

        {openPrice && (
          <div className="mt-2 space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Below ₦10,000
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> ₦10,000 - ₦25,000
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> ₦25,000 - ₦50,000
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Above ₦50,000
            </label>
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;
