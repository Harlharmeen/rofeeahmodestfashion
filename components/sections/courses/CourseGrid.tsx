import CourseCard from "@/components/cards/CourseCard";

interface Course {
  image: string;
  title: string;
  duration: string;
  level: string;
  category: string;
}

interface CourseGridProps {
  courses: Course[];
}

const CourseGrid = ({ courses }: CourseGridProps) => {
  if (!courses.length) {
    return (
      <div className="text-center text-[#6B4226] py-20">
        No courses found in this category.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {courses.map((course, i) => (
        <CourseCard key={i} {...course} />
      ))}
    </div>
  );
};

export default CourseGrid;
