import Image from "next/image";
import Link from "next/link";
import { Calendar, Heart, BookOpen, MapPin, Phone, ArrowRight, CloudRain, Church, BookMarked } from "lucide-react";

const events = [
  { title: "Prayer Rain", date: "1st Saturday of Every Month", time: "7:00am", venue: "Prayer Cathedral, HQ", icon: <CloudRain size={34} /> },
  { title: "Sunday Service", date: "Every Sunday", time: "7:00am – 9:30am", venue: "All Branches", icon: <Church size={34} /> },
  { title: "Bible Study", date: "Every Wednesday", time: "5:00pm – 6:00pm", venue: "All Branches", icon: <BookMarked size={34} /> },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Image src="/images/church-building.jpg" alt="Prayer Cathedral" fill className="hero-bg" style={{ position: "absolute" }} priority />
        <div className="hero-overlay" />
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
      <section className="bg-forest-dark border-b border-gold/10 py-9 px-4 md:px-10 lg:px-20">
        <div className="max-w-md mx-auto grid grid-cols-2 gap-6 text-center">
          {[
            ["8", "Active Branches"],
            ["25+", "Years of Ministry"],
          ].map(([num, label]) => (
            <div key={label} className="px-4 border-r border-gold/10 last:border-r-0">
              <p className="font-bebas text-4xl text-gold-light stat-glow leading-none mb-1">{num}</p>
              <p className="text-cream/40 font-sans text-[10px] tracking-[0.24em] uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WATCHWORD BANNER */}
      <section className="bg-forest py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
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
      <section className="bg-cream-light py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
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
      <section className="bg-forest py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: <Calendar size={32}/>, title: "Upcoming Events", desc: "See what God has in store this season", href: "/events", btn: "View Events" },
              { icon: <Heart size={32}/>, title: "Give Online", desc: "Support the work of God's Kingdom", href: "/giving", btn: "Give Now" },
              { icon: <BookOpen size={32}/>, title: "Members Portal", desc: "Access resources and your dashboard", href: "/members", btn: "Sign In" },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="bg-forest-muted hover:bg-forest-dark card-hover rounded-lg p-8 text-center group transition-colors">
                <div className="text-gold mb-4 flex justify-center">{c.icon}</div>
                <h3 className="font-display text-xl font-bold text-cream mb-2">{c.title}</h3>
                <p className="text-cream/70 text-sm font-sans mb-5">{c.desc}</p>
                <span className="text-gold border border-gold text-sm font-sans font-bold px-5 py-2 rounded-sm tracking-wide group-hover:bg-gold group-hover:text-forest transition-colors">{c.btn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* UPCOMING EVENTS */}
      <section className="bg-cream py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Be Part of Something Greater</p>
            <h2 className="font-display text-4xl font-bold text-forest">Upcoming Events</h2>
            <div className="divider"></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto max-w-4xl mx-auto">
            {events.map((e) => (
              <div key={e.title} className="bg-cream-light border border-cream-dark rounded-lg p-6 card-hover reveal">
                <div className="text-gold mb-4 icon-hover-rotate">{e.icon}</div>
                <h3 className="font-display text-xl font-bold text-forest mb-2">{e.title}</h3>
                <p className="text-crimson font-sans text-sm font-semibold mb-1">{e.date}</p>
                <p className="text-gray-600 font-sans text-sm mb-1">{e.time}</p>
                <p className="flex items-center gap-1 text-gray-500 text-sm font-sans mt-3"><MapPin size={13}/>{e.venue}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/events" className="inline-flex items-center gap-2 bg-forest text-cream font-sans font-bold px-8 py-3 rounded-sm tracking-widest uppercase text-sm hover:bg-forest-dark transition-colors">
              See All Events <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-cream-dark py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Life at Prayer Cathedral</p>
            <h2 className="font-display text-4xl font-bold text-forest">Gallery</h2>
            <div className="divider"></div>
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
              <div key={img.src} className="relative h-48 md:h-56 overflow-hidden rounded-lg group">
                <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-forest/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-cream font-sans text-sm">{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/gallery" className="inline-flex items-center gap-2 border-2 border-forest text-forest font-sans font-bold px-8 py-3 rounded-sm tracking-widest uppercase text-sm hover:bg-forest hover:text-cream transition-colors">
              View Full Gallery <ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP */}
      <section className="bg-crimson py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="font-display text-2xl font-bold text-cream">Need to Reach Us?</h3>
            <p className="text-cream/80 font-sans text-sm mt-1 flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="flex items-center gap-1"><Phone size={13}/> 08023397352</span>
              <span className="flex items-center gap-1"><Phone size={13}/> 08053147106</span>
              <span className="flex items-center gap-1"><Phone size={13}/> 08165424706</span>
            </p>
          </div>
          <Link href="/contact" className="bg-cream text-crimson font-sans font-bold px-8 py-3 rounded-sm tracking-widest uppercase text-sm hover:bg-cream-dark transition-colors whitespace-nowrap">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
