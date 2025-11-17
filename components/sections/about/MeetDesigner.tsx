export default function MeetDesigner() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#F7EDE2] text-center " id="Meet-Designer">
      <div className="max-w-3xl mx-auto" id="Meet-Designer">
        <img
          src="https://res.cloudinary.com/dfqh2niw3/image/upload/v1762856160/IMG-20251111-WA0000_fwpyqi.jpg"
          alt="Designer portrait"
          className="w-40 h-40 mx-auto rounded-full object-cover shadow-lg mb-6"
        />
        <h2 className="text-2xl md:text-3xl font-semibold mb-3">Meet the Designer</h2>
        <p className="text-[#6B4226]/80 mb-6">
          Hi, I’m <strong>Hamzat Rofiat</strong>. I started this brand to make modest fashion
          accessible, expressive, and global. Every collection is a story of faith, art, and
          identity.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#D4A5A5] text-white px-5 py-2 rounded-md hover:bg-[#c78c8c]">
            <a href="https://www.instagram.com/rofeeah_modest_fashion_">Follow on Instagram </a>
          </button>
          <button className="border border-[#6B4226] text-[#6B4226] px-5 py-2 rounded-md hover:bg-[#6B4226] hover:text-white">
            <a href="https://www.facebook.com/share/1BiDFJffLX/?mibextid=wwXlfr">Join Facebook Community</a>
          </button>
        </div>
      </div>
    </section>
  );
}
