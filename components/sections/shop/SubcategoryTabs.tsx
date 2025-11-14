"use client";

import { useState } from "react";

const SubcategoryTabs = () => {
  const tabs = ["All", "Hijabs", "Jilbabs & Abayas", "Jewelry", "Native / Owambe"];
  const [active, setActive] = useState("All");

  return (
    <div className="w-full flex justify-center md:justify-start overflow-x-auto scrollbar-hide border-b border-[#D4A5A5]/30 mb-6">
      <div className="flex gap-3 md:gap-6 px-4 md:px-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`whitespace-nowrap text-sm md:text-base font-medium pb-2 transition-all ${
              active === tab
                ? "text-[#6B4226] border-b-2 border-[#D4A5A5]"
                : "text-[#6B4226]/60 hover:text-[#6B4226]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubcategoryTabs;
