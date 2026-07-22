import Image from "next/image";
import { Calendar, Clock, MapPin, CloudRain, Church, BookMarked, HandHeart, Radio } from "lucide-react";

const events = [
  {
    id: 2,
    title: "Prayer Rain",
    category: "Monthly",
    date: "1st Saturday of Every Month",
    time: "7:00am – 9:00am",
    venue: "Prayer Cathedral HQ (All branches converge here)",
    description: "An intercessory prayer session coupled with Holy Communion and Anointing. All branches converge at the headquarters as believers gather to pray for the nation, families, and personal breakthroughs. The atmosphere is always electric with God's presence.",
    color: "border-forest",
    icon: <CloudRain size={34} />,
  },
  {
    id: 3,
    title: "Sunday Service",
    category: "Weekly",
    date: "Every Sunday",
    time: "7:00am – 9:30am",
    venue: "Prayer Cathedral HQ & All 8 Branches",
    description: "Our flagship Sunday celebration service featuring dynamic worship, anointed preaching of the Word, and the move of the Holy Spirit.",
    color: "border-gold",
    icon: <Church size={34} />,
  },
  {
    id: 4,
    title: "Bible Study",
    category: "Weekly",
    date: "Every Wednesday",
    time: "5:00pm – 6:00pm",
    venue: "All Branches",
    description: "Mid-week grounding in the Word of God. Practical, insightful, and life-transforming teachings to equip you for daily Kingdom living.",
    color: "border-crimson",
    icon: <BookMarked size={34} />,
  },
  {
    id: 5,
    title: "Prayer Meeting",
    category: "Weekly",
    date: "Every Friday",
    time: "5:00pm – 6:00pm",
    venue: "All Branches",
    description: "Friday corporate prayer — targeting the week's needs, personal requests, and national intercession for the body of Christ.",
    color: "border-forest",
    icon: <HandHeart size={34} />,
  },
  {
    id: 6,
    title: "Voice of Overcomers",
    category: "Radio",
    date: "Every Sunday Morning",
    time: "6:30am",
    venue: "KU FM / Independent Radio, Benin City (15 States Coverage)",
    description: "Tune in to our radio outreach broadcast by Bishop Albert Asemota — bringing the Word of God to homes across Nigeria every Sunday morning.",
    color: "border-gold",
    icon: <Radio size={34} />,
  },
];

export default function EventsPage() {
  return (
    <>
      <section className="page-hero">
        <Image src="/images/church-service.jpg" alt="Events" fill className="ph-bg" />
        <div className="ph-overlay" />
        <div className="ph-content">
          <div className="ph-eyebrow">
            <span className="ph-line" />
            What's Happening
            <span className="ph-line" />
          </div>
          <h1 className="ph-title">Events Calendar</h1>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20" style={{ background: "linear-gradient(160deg, #F8F4EE 0%, #EFE9DC 100%)" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div className="text-center mb-14 reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Join the Move</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest">Regular Programmes</h2>
            <div className="divider"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((e) => (
              <div key={e.id} className={`bg-cream-light border-t-4 ${e.color} rounded-2xl p-7 card-hover reveal`} style={{ boxShadow: "0 4px 20px rgba(23,61,26,0.08)" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 icon-hover-rotate" style={{ background: "rgba(184,146,42,0.12)" }}>
                  <span className="text-gold">{e.icon}</span>
                </div>
                <span className="text-xs font-sans tracking-widest uppercase text-gray-500 bg-cream-dark px-2 py-0.5 rounded-full">{e.category}</span>
                <h3 className="font-display text-2xl font-bold text-forest mt-3 mb-2">{e.title}</h3>
                <p className="text-gray-700 font-sans text-sm leading-relaxed mb-4">{e.description}</p>
                <div className="space-y-2 text-sm font-sans text-gray-600">
                  <p className="flex items-center gap-2"><Calendar size={14} className="text-gold shrink-0" />{e.date}</p>
                  <p className="flex items-center gap-2"><Clock size={14} className="text-gold shrink-0" />{e.time}</p>
                  <p className="flex items-start gap-2"><MapPin size={14} className="text-gold shrink-0 mt-0.5" />{e.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 md:px-12 lg:px-20" style={{ background: "linear-gradient(135deg, var(--forest) 0%, var(--forest3) 100%)" }}>
        <div className="text-center reveal" style={{ maxWidth: 768, margin: "0 auto" }}>
          <h3 className="font-display text-3xl font-bold text-cream mb-4">Can't Make It In Person?</h3>
          <p className="text-cream/80 font-sans mb-6">Follow us on our social media pages for live streams, messages, and updates from Prayer Cathedral.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/overcomersfamilyassembly" target="_blank" rel="noopener" className="bg-[#1877F2] text-white font-sans font-bold px-6 py-3 rounded-sm text-sm tracking-wide hover:opacity-90 transition">Facebook</a>
            <a href="https://www.instagram.com/prayer_cathedral" target="_blank" rel="noopener" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-sans font-bold px-6 py-3 rounded-sm text-sm tracking-wide hover:opacity-90 transition">Instagram</a>
            <a href="https://www.youtube.com/@overcomersfamilyassembly2072" target="_blank" rel="noopener" className="bg-[#FF0000] text-white font-sans font-bold px-6 py-3 rounded-sm text-sm tracking-wide hover:opacity-90 transition">YouTube</a>
          </div>
        </div>
      </section>
    </>
  );
}
