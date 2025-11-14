const FeaturedCourse = () => {
  return (
    <section className="relative bg-[#6B4226] text-white py-16 px-6 md:px-12 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src="/Black and White Minimalist Simple Comi.png"
          alt="Featured Course"
          className="w-full md:w-1/2 h-64 object-cover rounded-xl shadow-lg"
        />
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            Featured: Jewelry & Accessory Styling
          </h2>
          <p className="text-sm md:text-base text-white/90 mb-5">
            Discover how to elevate modest outfits with elegant accessories. A
            guided masterclass for fashion creators.
          </p>
          <button className="bg-[#D4A5A5] text-[#6B4226] px-6 py-2 rounded-full font-medium hover:bg-white transition">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourse;
