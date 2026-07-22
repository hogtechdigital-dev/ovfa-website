import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const FBIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const IGIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);
const YTIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="text-white grain" style={{ background: "linear-gradient(160deg, #0E2410 0%, #173D1A 100%)", position: "relative" }}>
      <div style={{ height: 4, background: "linear-gradient(90deg, var(--gold2), var(--crimson2), var(--gold2))" }} />
      <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10" style={{ maxWidth: 1280, margin: "0 auto" }}>

        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Image src="/images/church-logo.jpg" alt="Logo" width={50} height={50} className="rounded-full border-2 border-gold object-cover" />
            <div>
              <p className="text-gold font-display font-bold text-sm">OVERCOMERS FAMILY</p>
              <p className="text-white/70 text-xs tracking-widest">ASSEMBLY INT&apos;L INC.</p>
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed font-sans italic">&ldquo;Reaching the world with the Gospel of the Kingdom&rdquo; — Matt. 24:14</p>
          <div className="flex gap-3 mt-5">
            {[
              { href: "https://www.facebook.com/overcomersfamilyassembly", icon: <FBIcon />, cls: "social-fb" },
              { href: "https://www.instagram.com/prayer_cathedral", icon: <IGIcon />, cls: "social-ig" },
              { href: "https://www.youtube.com/@overcomersfamilyassembly2072", icon: <YTIcon />, cls: "social-yt" },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full bg-forest flex items-center justify-center text-gold transition-colors ${s.cls}`}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="text-gold font-display font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {([["Home","/"],["About","/about"],["Events","/events"],["Giving","/giving"],["Gallery","/gallery"],["Contact","/contact"]] as [string,string][]).map(([l,h]) => (
              <li key={h}><Link href={h} className="text-white hover:text-gold text-sm font-sans transition-colors">→ {l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Service Times */}
        <div>
          <h4 className="text-gold font-display font-semibold text-lg mb-4">Service Times</h4>
          <ul className="space-y-3 text-sm font-sans">
            {([
              ["Wednesday","Bible Study","5:00pm – 6:00pm"],
              ["Friday","Prayer Meeting","5:00pm – 6:00pm"],
              ["Sunday","Main Service","7:00am – 9:30am"],
            ] as [string,string,string][]).map(([day,name,time]) => (
              <li key={day} className="flex gap-3">
                <Clock size={15} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white font-semibold">{day} – {name}</p>
                  <p className="text-white/70">{time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-gold font-display font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm font-sans">
            <li className="flex gap-2 text-white/80">
              <MapPin size={15} className="text-gold mt-1 shrink-0" />
              <span>540, Upper Sakponba Road, Opposite ConOil Filling Station, Benin City, Edo State</span>
            </li>
            <li className="flex gap-2 text-white/80">
              <Phone size={15} className="text-gold mt-0.5 shrink-0" />
              <span>08023397352 / 08053147106 / 07033287556 / 08165424706</span>
            </li>
            <li className="flex gap-2 text-white/80">
              <Mail size={15} className="text-gold mt-0.5 shrink-0" />
              <a href="mailto:overcomersfamilyassembly@rocketmail.com" className="hover:text-gold transition-colors break-all">
                overcomersfamilyassembly@rocketmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gold/20 py-5 text-center text-white/60 text-xs font-sans">
        © {new Date().getFullYear()} Overcomers Family Assembly Int&apos;l Inc. · All Rights Reserved · Designed by{" "}
        <a href="https://hogtech.digital" className="text-gold hover:underline">Hogtech Digital</a>
      </div>
    </footer>
  );
}
