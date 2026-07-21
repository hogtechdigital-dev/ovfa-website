"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        <div className="nav-logo-wrap">
          <Image src="/images/church-logo.jpg" alt="OVFA Logo" width={62} height={62} />
        </div>
        <div>
          <div className="nav-wordmark-top">Overcomers Family Assembly Int&apos;l Inc.</div>
          <div className="nav-wordmark-bot">Prayer Cathedral · Benin City, Nigeria</div>
        </div>
      </Link>

      <button
        className="nav-toggle"
        style={{ display: "none", background: "none", border: "none", color: "var(--gold2)", fontSize: 26, cursor: "pointer", padding: "4px 8px" }}
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`nav-links${open ? " open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={pathname === l.href ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <Link href="/giving" className="nav-give" onClick={() => setOpen(false)}>
          Give Now
        </Link>
      </div>
    </nav>
  );
}
