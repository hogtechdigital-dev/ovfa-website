"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/church-service.jpg", title: "Sunday Service", category: "Worship" },
  { src: "/images/church-service-2.jpg", title: "Church Service", category: "Worship" },
  { src: "/images/worship-time.jpg", title: "Worship Time", category: "Worship" },
  { src: "/images/womens-programme.jpg", title: "Women's Programme", category: "Programmes" },
  { src: "/images/old-school-day.jpg", title: "Old School Day 2026", category: "Programmes" },
  { src: "/images/church-building.jpg", title: "Prayer Cathedral", category: "Building" },
  { src: "/images/church-building-2.jpg", title: "Church Building", category: "Building" },
  { src: "/images/bishop-new-1.jpg", title: "Bishop Albert Ame Asemota", category: "Leadership" },
  { src: "/images/bishop-new-2.jpg", title: "Bishop Asemota", category: "Leadership" },
  { src: "/images/watchword.jpg", title: "2026 Watchword", category: "Programmes" },
];

const cats = ["All", "Worship", "Programmes", "Leadership", "Building"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "All" ? photos : photos.filter(p => p.category === active);

  const prev = () => setLightbox(l => l === null ? null : (l - 1 + filtered.length) % filtered.length);
  const next = () => setLightbox(l => l === null ? null : (l + 1) % filtered.length);

  return (
    <>
      <section className="page-hero">
        <Image src="/images/church-service-2.jpg" alt="Gallery" fill className="ph-bg" />
        <div className="ph-overlay" />
        <div className="ph-content">
          <div className="ph-eyebrow">
            <span className="ph-line" />
            Memories & Moments
            <span className="ph-line" />
          </div>
          <h1 className="ph-title">Photo Gallery</h1>
        </div>
      </section>

      <section className="bg-cream py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {cats.map(c => (
              <button key={c} onClick={() => setActive(c)} className={`font-sans text-sm tracking-widest uppercase px-5 py-2 rounded-sm border transition-colors ${active === c ? "bg-forest text-cream border-forest" : "border-forest text-forest hover:bg-forest hover:text-cream"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((p, i) => (
              <div key={p.src} className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group" onClick={() => setLightbox(i)}>
                <Image src={p.src} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/50 transition-colors flex items-end p-3">
                  <p className="text-cream text-xs font-sans opacity-0 group-hover:opacity-100 transition-opacity">{p.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-forest py-16 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="text-gold text-xs tracking-widest uppercase font-sans mb-2">Watch & Be Blessed</p>
          <h2 className="font-display text-4xl font-bold text-cream mb-4">Video Gallery</h2>
          <div className="divider"></div>
          <p className="text-cream/80 font-sans mt-4 mb-8">Watch sermons, testimonies, and programme recordings on our YouTube channel.</p>
          <a href="https://youtube.com/overcomersfamilyassembly" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-[#FF0000] text-white font-sans font-bold px-8 py-4 rounded-sm tracking-widest uppercase text-sm hover:opacity-90 transition">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Visit Our YouTube Channel
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setLightbox(null)}>
          <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 text-white hover:text-gold z-10 bg-black/40 rounded-full p-2">
            <ChevronLeft size={32} />
          </button>
          <div className="relative max-w-4xl max-h-[85vh] w-full mx-12" onClick={e => e.stopPropagation()}>
            <Image src={filtered[lightbox].src} alt={filtered[lightbox].title} width={800} height={600} className="object-contain w-full max-h-[80vh] rounded-lg" />
            <p className="text-white text-center font-display text-lg mt-3">{filtered[lightbox].title}</p>
          </div>
          <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 text-white hover:text-gold z-10 bg-black/40 rounded-full p-2">
            <ChevronRight size={32} />
          </button>
          <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 text-white hover:text-gold z-10">
            <X size={28} />
          </button>
        </div>
      )}

      {/* VIDEO GALLERY */}
      <section className="section bg-dark">
        <div className="section-inner tc">
          <p className="label gl" style={{ justifyContent: "center" }}><span className="ln" />Watch &amp; Be Blessed</p>
          <h2 className="sec-title light tc">Video <em style={{ color: "var(--gold)" }}>Gallery</em></h2>
          <div className="divbar c gold" style={{ marginBottom: 26 }} />
          <p style={{ fontFamily: "'Oswald',sans-serif", fontSize: 15, color: "rgba(248,244,238,0.48)", maxWidth: 480, margin: "0 auto 38px", lineHeight: 1.8 }}>
            Watch sermons, testimonies, and programme recordings on our YouTube channel.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginTop: 8 }}>
            <a href="https://www.facebook.com/overcomersfamilyassembly" target="_blank" rel="noopener" className="btn" style={{ background: "#1877F2", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/prayer_cathedral" target="_blank" rel="noopener" className="btn" style={{ background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://www.youtube.com/@overcomersfamilyassembly2072" target="_blank" rel="noopener" className="btn" style={{ background: "#FF0000", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
