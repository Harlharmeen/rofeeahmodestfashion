export default function BrandStory() {
  return (
    <section className="py-16 px-6 md:px-12 bg-[#F7EDE2]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://res.cloudinary.com/dfqh2niw3/image/upload/v1762868328/fc_islington_shop_2_large_vohfzx.jpg"
          alt="Designer workspace"
          className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Our Story in Style
          </h2>
          <p className="text-[#6B4226]/80 leading-relaxed">
            Born from a passion for modest fashion, our brand blends tradition
            with trend. Each Egyptian khimar, pleated hijab, and native couture
            is crafted to celebrate culture, class, and creativity.
          </p>
          <blockquote className="italic border-l-4 border-[#D4A5A5] pl-4 mt-6 text-[#6B4226]/70">
            “From fabric to faith, every stitch tells a story.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
