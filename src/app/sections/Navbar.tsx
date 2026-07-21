"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#FFF9F0]/95 backdrop-blur-xl border-b-3 border-[#1B1B2F] py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-3 border-[#1B1B2F]">
            <Image src="/images/image.png" alt="Saijal Chauhan" width={40} height={40} className="object-cover w-full h-full" />
          </div>
          <span className="font-display text-2xl font-extrabold text-[#1B1B2F]">
            Saijal <span className="text-[#FF6B9D]">Chauhan</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-[#1B1B2F] hover:text-[#FF6B9D] transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="comic-btn px-5 py-2 bg-[#FFD23F] text-[#1B1B2F] text-sm">
            Hire Me
          </a>
        </div>

        <button className="md:hidden text-[#1B1B2F]" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#FFF9F0] border-t-3 border-[#1B1B2F] px-6 py-6 flex flex-col gap-5">
          {links.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="text-base font-semibold text-[#1B1B2F] hover:text-[#FF6B9D] transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="comic-btn px-5 py-3 bg-[#FFD23F] text-[#1B1B2F] text-sm text-center">
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}