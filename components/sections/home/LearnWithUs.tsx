"use client";

import Image from "next/image";
import Link from "next/link";

const courses = [
  {
    title: "Egyptian Khimar Masterclass",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762859442/maxresdefault_clcgli.jpg",
    link: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762859442/maxresdefault_clcgli.jpg",
  },
  {
    title: "Umbrella Jilbab Cutting Course",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762859436/sddefault_pv2dje.jpg",
    link: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762859436/sddefault_pv2dje.jpg",
  },
  {
    title: "V-Shaped Hijab Styling",
    image: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762859436/maxresdefaulter_ovu1kf.jpg",
    link: "https://res.cloudinary.com/dfqh2niw3/image/upload/v1762859436/maxresdefaulter_ovu1kf.jpg",
  },
];

const LearnWithUs = () => {
  return (
    <section className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-text mb-4">
          Learn With Us
        </h2>
        <p className="text-brand-text/80 max-w-2xl mx-auto">
          Join our hands-on classes to learn the art of modest fashion —
          from precise cutting to elegant finishing. Empower yourself with
          creative sewing skills today.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {courses.map((course, i) => (
          <div
            key={i}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500"
          >
            <div className="h-[350px] relative">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 blur-md "
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 ">
              <h3 className="text-white text-2xl font-semibold mb-3">
                {course.title}
              </h3>
              <Link
                href="#"
                className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-brand-accent hover:text-white transition-all"
              >
                View Course
              </Link>
              <h3 className="text-black bg-white px-4 py-2 my-4 rounded-lg text-2xl font-semibold mb-3">
                Coming Soon
              </h3>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/courses"
          className="inline-block bg-brand-accent text-white px-8 py-3 rounded-full font-medium hover:bg-brand-accent/90 transition-all"
        >
          Explore All Courses
        </Link>
      </div>
    </section>
  );
};

export default LearnWithUs;
