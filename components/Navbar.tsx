"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/giving", label: "Giving" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-forest shadow-lg py-2" : "bg-forest/95 py-3"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/church-logo.jpg" alt="OVFA Logo" width={52} height={52} className="rounded-full border-2 border-gold object-cover" />
          <div className="hidden sm:block">
            <p className="text-gold font-display font-bold text-sm leading-tight tracking-wide">OVERCOMERS FAMILY</p>
            <p className="text-cream text-xs tracking-widest uppercase font-sans">ASSEMBLY INT&apos;L INC.</p>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-cream/90 hover:text-gold text-sm font-sans font-medium px-3 py-2 rounded transition-colors tracking-wide uppercase">
              {l.label}
            </Link>
          ))}
          <Link href="/giving" className="ml-3 bg-crimson hover:bg-crimson-light text-cream text-sm font-sans font-bold px-4 py-2 rounded transition-colors tracking-wide">
            Give Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden text-cream">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-forest-dark border-t border-gold/30 px-4 py-4 space-y-1">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-cream/90 hover:text-gold font-sans py-2 px-3 rounded hover:bg-forest transition-colors tracking-wide uppercase text-sm">
              {l.label}
            </Link>
          ))}
          <Link href="/giving" onClick={() => setOpen(false)} className="block bg-crimson text-cream text-center font-bold py-2 px-3 rounded mt-3 tracking-wide">
            Give Now
          </Link>
        </div>
      )}
    </nav>
  );
}
