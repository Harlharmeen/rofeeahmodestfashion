const CoursesHero = () => {
  return (
    <section className="relative h-72 md:h-96 w-full overflow-hidden">
      <img
        src="/Beige Aesthetic Handmade Accessories Etsy Shop Cover_20251112_144939_0000.png"
        alt="Learn Modest Fashion Design"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Learn Modest Fashion Design
        </h1>
        <p className="text-sm md:text-base text-white/90 max-w-2xl">
          Master sewing, styling, and accessorizing through guided tutorials.
        </p>
        <div className="flex gap-4 mt-5">
          <button className="bg-[#D4A5A5] px-5 py-2 rounded-full text-sm hover:bg-[#c07f7f]">
            Browse Courses
          </button>
          <button className="border border-white px-5 py-2 rounded-full text-sm hover:bg-white hover:text-[#6B4226] transition">
            Start Learning
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoursesHero;
