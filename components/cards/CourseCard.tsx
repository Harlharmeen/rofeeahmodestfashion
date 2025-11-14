interface CourseCardProps {
  image: string;
  title: string;
  duration: string;
  level: string;
  category: string;
}

const CourseCard = ({ image, title, duration, level, category }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="text-xs text-[#D4A5A5] uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-[#6B4226] font-semibold mt-1 text-base md:text-lg">
          {title}
        </h3>
        <div className="flex justify-between items-center mt-3 text-sm text-[#6B4226]/80">
          <span>{duration}</span>
          <span>{level}</span>
        </div>
        <button className="mt-4 w-full bg-[#6B4226] text-white text-sm py-2 rounded-md hover:bg-[#D4A5A5] transition">
          View Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
