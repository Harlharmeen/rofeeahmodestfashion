import Link from "next/link";
import { Send, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-brand-text text-brand-base mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Rofee’ah Modest Fashion</h3>
          <p className="text-sm leading-relaxed">
            Elevating modesty with elegance — Hijabs, Abaya, Cooperate modest outfits, Couture, and Acessories
            crafted for confidence and grace.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold mb-3 text-brand-highlight">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-brand-highlight">Shop</Link></li>
            <li><Link href="/courses" className="hover:text-brand-highlight">Courses</Link></li>
            <li><Link href="/shoutout" className="hover:text-brand-highlight">Shout-Out</Link></li>
            <li><Link href="/about" className="hover:text-brand-highlight">About</Link></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div >
          <h4 className="font-semibold mb-3 text-brand-highlight">Connect</h4>
          <p className="text-sm">Follow our modest fashion journey:</p>
          <div className="flex gap-4 mt-3">
            <Link href="https://www.instagram.com/rofeeah_modest_fashion_" aria-label="Instagram" className="hover:text-brand-highlight"> <Instagram size={20} /> </Link>
            <Link href="https://www.facebook.com/share/1BiDFJffLX/?mibextid=wwXlfr" aria-label="Facebook" className="hover:text-brand-highlight"> <Facebook size={20} /> </Link>
            <Link href="https://m.youtube.com/@rofeeahmodestfashion" aria-label="Youtube" className="hover:text-brand-highlight"> <Youtube size={20} /> </Link>
            </div>
        </div>
      </div>

      <div className="text-center py-3 border-t border-brand-highlight text-xs">
        © {new Date().getFullYear()} Rofee’ah Modest Fashion. All rights reserved <br /> [Developed by:  <a href="https://wa.me/2347080482661" className="hover:underline">Al-ameen Aderibigbe</a>].
      </div>
    </footer>
  );
};

export default Footer;
