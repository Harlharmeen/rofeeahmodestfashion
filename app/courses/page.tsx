"use client";

import { useState } from "react";
import CoursesHero from "@/components/sections/courses/CoursesHero";
import CourseTabs from "@/components/sections/courses/CourseTabs";
import CourseGrid from "@/components/sections/courses/CourseGrid";
import FeaturedCourse from "@/components/sections/courses/FeaturedCourse";
import NewsletterCTA from "@/components/sections/home/NewsletterCTA";
import sampleCourses from "@/data/sampleCourses";

export default function CoursesPage() {
  const [category, setCategory] = useState("All");

  const filteredCourses =
    category === "All"
      ? sampleCourses
      : sampleCourses.filter((c) => c.category === category);

  return (
    <main className="bg-[#F7EDE2] min-h-screen">
      <CoursesHero />
      <section className="px-4 md:px-10 py-10">
        <CourseTabs category={category} setCategory={setCategory} />
        <CourseGrid courses={filteredCourses} />
      </section>
      <FeaturedCourse />
      <NewsletterCTA />
    </main>
  );
}
