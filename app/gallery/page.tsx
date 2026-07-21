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

      <section className="bg-cream py-20 px-4 md:px-10 lg:px-20">
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
      <section className="bg-forest py-16 px-4 md:px-10 lg:px-20">
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
    </>
  );
}
