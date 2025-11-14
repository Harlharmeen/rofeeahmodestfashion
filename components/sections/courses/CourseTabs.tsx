interface CourseTabsProps {
  category: string;
  setCategory: (cat: string) => void;
}

const CourseTabs = ({ category, setCategory }: CourseTabsProps) => {
  const tabs = ["All", "Sewing", "Styling", "Accessories", "Masterclasses"];

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-[#6B4226] mb-8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setCategory(tab)}
          className={`px-4 py-2 text-sm md:text-base border border-[#D4A5A5]/60 rounded-full transition ${
            category === tab
              ? "bg-[#D4A5A5] text-white"
              : "hover:bg-[#D4A5A5]/20"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CourseTabs;
