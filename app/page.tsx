import Image from "next/image";
import Link from "next/link";
import { Calendar, Heart, BookOpen, MapPin, Phone, Mail, ArrowRight, CloudRain, Church, BookMarked, HandHeart } from "lucide-react";
import StatCounter from "@/components/StatCounter";

const events = [
  { title: "Prayer Rain", date: "1st Saturday Monthly", time: "7:00am – 9:00am", venue: "All Branches", icon: <CloudRain size={34} />, accent: "red" },
  { title: "Sunday Service", date: "Every Sunday", time: "7:00am – 9:30am", venue: "HQ & All 8 Branches", icon: <Church size={34} />, accent: "gold" },
  { title: "Bible Study", date: "Every Wednesday", time: "5:00pm – 6:00pm", venue: "All Branches", icon: <BookMarked size={34} />, accent: "" },
  { title: "Friday Prayer Meeting", date: "Every Friday", time: "5:00pm – 6:00pm", venue: "All Branches", icon: <HandHeart size={34} />, accent: "red" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Image src="/images/church-building.jpg" alt="Prayer Cathedral" fill className="hero-bg" style={{ position: "absolute" }} priority />
        <div className="hero-overlay" />
        <div className="hero-blobs" />
        <div className="hero-stripes" />
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hel" />
            Prayer Cathedral · Founded in Faith
            <span className="hel" />
          </div>
          <div className="hero-logo-wrap">
            <div className="hero-logo-ring">
              <Image src="/images/church-logo.jpg" alt="OVFA Logo" width={110} height={110} />
            </div>
          </div>
          <h1 className="hero-h1">Overcomers</h1>
          <span className="hero-church-name">Family Assembly</span>
          <span className="hero-intl">International Inc.</span>
          <div className="hero-vline" />
          <p className="hero-tagline">
            Reaching the world with the Gospel of the Kingdom
            <br />
            <strong>2026 – Year of Shining Brighter</strong> · Proverbs 4:18
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="btn btn-red">Join Us This Sunday</Link>
            <Link href="/about" className="btn btn-ghost-gold">Discover Our Story</Link>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-forest-dark border-b border-gold/10 py-9 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 gap-6 text-center" style={{ maxWidth: 448, margin: "0 auto" }}>
          {[
            ["8", "Active Branches"],
            ["25+", "Years of Ministry"],
          ].map(([num, label]) => (
            <div key={label} className="px-4 border-r border-gold/10 last:border-r-0">
              <StatCounter value={num} label={label} />
              <p className="text-cream/40 font-sans text-[10px] tracking-[0.24em] uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WATCHWORD BANNER */}
      <section className="bg-forest py-10 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center gap-8" style={{ maxWidth: 1024, margin: "0 auto" }}>
          <Image src="/images/watchword.jpg" alt="2026 Watchword" width={260} height={200} className="rounded-lg border-4 border-gold object-cover shadow-xl" />
          <div className="text-cream text-center md:text-left">
            <p className="text-gold text-xs tracking-widest uppercase font-sans mb-2">Our Annual Theme</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-cream mb-3">2026 – Year of <span className="shimmer-text">Shining Brighter</span></h2>
            <p className="text-cream/80 font-sans leading-relaxed italic">"Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven."</p>
            <p className="text-gold font-sans text-sm mt-2">— Proverbs 4:18</p>
          </div>
        </div>
      </section>

      {/* WELCOME FROM PASTOR */}
      <section className="bg-cream-light py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div className="text-center mb-14 reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">A Word from Our Shepherd</p>
            <h2 className="font-display text-4xl font-bold text-forest">Welcome Message</h2>
            <div className="divider"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="reveal">
              <div className="relative">
                <Image src="/images/bishop-main.jpg" alt="Bishop Albert Ame Asemota" width={480} height={550} className="rounded-lg object-cover w-full shadow-2xl" style={{objectPosition:"top"}} />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-forest to-transparent p-6 rounded-b-lg">
                  <p className="text-gold font-display font-bold text-xl">Bishop Albert Ame Asemota</p>
                  <p className="text-cream/80 text-sm font-sans">Founder & Presiding Bishop</p>
                </div>
              </div>
            </div>
            <div className="reveal">
              <svg className="w-12 h-12 text-gold mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="font-display text-2xl text-forest font-semibold italic leading-relaxed mb-5">
                "Welcome to Overcomers Family Assembly — where ordinary lives encounter an extraordinary God."
              </p>
              <p className="text-gray-700 font-sans leading-relaxed mb-4">
                We are a Spirit-filled, Word-governed community of believers committed to raising an end-time prayer army for this generation. Our doors are open to all — big and small, rich and poor, humble and proud.
              </p>
              <p className="text-gray-700 font-sans leading-relaxed mb-6">
                God called us to be a light to the nations, and in this <strong>2026 Year of Shining Brighter</strong>, we invite you to join us as we advance the Kingdom together. You are not an accident — you are destined to overcome!
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-forest font-sans font-bold border-b-2 border-gold pb-1 hover:text-crimson transition-colors">
                Read Our Story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20" style={{ background: "linear-gradient(135deg, var(--forest) 0%, var(--forest3) 100%)", position: "relative" }}>
        <div className="hero-blobs" style={{ opacity: 0.5 }} />
        <div style={{ maxWidth: 1024, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Calendar size={32}/>, title: "Upcoming Events", desc: "See what God has in store this season", href: "/events", btn: "View Events" },
              { icon: <Heart size={32}/>, title: "Give Online", desc: "Support the work of God's Kingdom", href: "/giving", btn: "Give Now" },
              { icon: <BookOpen size={32}/>, title: "Members Portal", desc: "Access resources and your dashboard", href: "/members", btn: "Sign In" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="glass-card card-hover rounded-lg p-8 text-center group transition-colors">
                <div className="text-gold mb-4 flex justify-center icon-hover-rotate">{c.icon}</div>
                <h3 className="font-display text-xl font-bold text-cream mb-2">{c.title}</h3>
                <p className="text-cream/70 text-sm font-sans mb-5">{c.desc}</p>
                <span className="text-gold border border-gold text-sm font-sans font-bold px-5 py-2 rounded-sm tracking-wide group-hover:bg-gold group-hover:text-forest transition-colors">{c.btn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* OUR REGULAR PROGRAMMES */}
      <section className="section bg-cream2">
        <div className="section-inner">
          <div className="tc" style={{ marginBottom: 56 }}>
            <p className="label" style={{ justifyContent: "center" }}><span className="ln" />Be Part of Something Greater</p>
            <h2 className="sec-title tc">Our Regular <em>Programmes</em></h2>
            <div className="divbar c" />
          </div>
          <div className="evp-grid four">
            {events.map((e, i) => (
              <div key={e.title} className={`evp-card reveal${e.accent ? " " + e.accent : ""}`} style={{ transitionDelay: `${i * 100}ms` }}>
                <span className="evp-icon" style={{ color: "var(--gold)" }}>{e.icon}</span>
                <h3 className="evp-title">{e.title}</h3>
                <p className="evp-date">{e.date}</p>
                <p className="evp-time">{e.time}</p>
                <p className="evp-venue"><MapPin size={12} style={{ display: "inline", marginRight: 4 }} />{e.venue}</p>
              </div>
            ))}
          </div>
          <div className="tc" style={{ marginTop: 48 }}>
            <Link href="/events" className="btn btn-forest">See All Programmes →</Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="section bg-dark grain" style={{ position: "relative" }}>
        <div className="section-inner">
          <div className="tc" style={{ marginBottom: 52 }}>
            <p className="label gl" style={{ justifyContent: "center" }}><span className="ln" />Life at Prayer Cathedral</p>
            <h2 className="sec-title light tc">Photo <em style={{ color: "var(--gold)" }}>Gallery</em></h2>
            <div className="divbar c gold" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { src: "/images/church-service.jpg", alt: "Church Service" },
              { src: "/images/worship-time.jpg", alt: "Worship Time" },
              { src: "/images/womens-programme.jpg", alt: "Women's Programme" },
              { src: "/images/church-service-2.jpg", alt: "Church Service 2" },
              { src: "/images/old-school-day.jpg", alt: "Old School Day 2026" },
              { src: "/images/church-building-2.jpg", alt: "Church Building" },
            ].map((img) => (
              <div key={img.src} className="relative h-48 md:h-56 overflow-hidden rounded-lg group duotone">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-cream font-sans text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="tc" style={{ marginTop: 48 }}>
            <Link href="/gallery" className="btn btn-ghost-gold">View Full Gallery →</Link>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <div className="cs-strip">
        <div className="cs-inner">
          <div>
            <h3>We&apos;d Love to Hear from You</h3>
            <p><Phone size={13} style={{ display: "inline", marginRight: 4 }} />08023397352 · 08053147106 · 07033287556 · 08165424706 &nbsp;·&nbsp; <Mail size={13} style={{ display: "inline", marginRight: 4 }} /> overcomersfamilyassembly@rocketmail.com</p>
          </div>
          <Link href="/contact" className="btn btn-cream">Get in Touch →</Link>
        </div>
      </div>
    </>
  );
}
