import { Sparkles, Scissors, Globe2, Heart } from "lucide-react";

const values = [
  { icon: <Heart className="w-6 h-6" />, title: "Modesty", text: "Our fashion respects faith and femininity." },
  { icon: <Scissors className="w-6 h-6" />, title: "Craftsmanship", text: "Each design is sewn with precision and passion." },
  { icon: <Globe2 className="w-6 h-6" />, title: "Culture", text: "Rooted in heritage, styled for modern queens." },
  { icon: <Sparkles className="w-6 h-6" />, title: "Empowerment", text: "We dress confidence, not just bodies." },
];

export default function ValuesMission() {
  return (
    <section className="bg-[#fffaf7] py-16 px-6 md:px-12 text-center">
      <h2 className="text-3xl font-semibold mb-8">Our Core Values</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {values.map((val, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 border border-[#D4A5A5]/40 hover:shadow-lg transition"
          >
            <div className="flex justify-center text-[#6B4226] mb-3">{val.icon}</div>
            <h3 className="font-semibold mb-2">{val.title}</h3>
            <p className="text-sm text-[#6B4226]/80">{val.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
