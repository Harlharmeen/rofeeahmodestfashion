"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Courses", href: "/courses" },
    { name: "Shout-Out", href: "/shoutout" },
    { name: "About", href: "/about" },
    ];

  return (
    <header className="sticky top-0 z-50 bg-brand-base/80 backdrop-blur border-b border-brand-highlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link href="/" className="font-semibold text-lg text-brand-text gap-4 flex items-center">
        <img
          src="/remontada.jpg"
          alt="Designer portrait"
          className="w-10 h-10 mx-auto rounded-full object-cover"
        />
          Rofee’ah Modest
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-brand-highlight transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/cart"
            className="ml-4 text-brand-text hover:text-brand-highlight transition-colors"
          >
            <ShoppingBag size={20} />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-text"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <nav className="md:hidden bg-brand-base border-t border-brand-highlight">
          <div className="flex flex-col px-6 py-3 space-y-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-brand-highlight transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/cart"
              className="flex items-center gap-2 pt-2 border-t border-brand-highlight text-brand-text hover:text-brand-highlight"
              onClick={() => setOpen(false)}
            >
              <ShoppingBag size={18} /> Cart
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
