"use client";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setError("");
    const { error: err } = await supabase.from("contact_messages").insert([{
      full_name: form.name, email: form.email, phone: form.phone, subject: form.subject, message: form.message,
    }]);
    setLoading(false);
    if (err) { setError("Something went wrong. Please try again."); return; }
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <Image src="/images/church-building.jpg" alt="Contact" fill className="ph-bg" />
        <div className="ph-overlay" />
        <div className="ph-content">
          <div className="ph-eyebrow">
            <span className="ph-line" />
            Get in Touch
            <span className="ph-line" />
          </div>
          <h1 className="ph-title">Contact Us</h1>
        </div>
      </section>

      <section className="bg-cream py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-14" style={{ maxWidth: 1152, margin: "0 auto" }}>
          {/* Form */}
          <div className="reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Send a Message</p>
            <h2 className="font-display text-4xl font-bold text-forest mb-6">We'd Love to Hear from You</h2>
            <div className="divider" style={{margin:"0 0 2rem"}}></div>
            {submitted ? (
              <div className="bg-forest/10 border border-forest rounded-lg p-8 text-center">
                <CheckCircle size={48} className="text-forest mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-forest mb-2">Message Received!</h3>
                <p className="text-gray-700 font-sans">Thank you for reaching out. We will respond to you within 24–48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && <p className="text-crimson text-sm bg-crimson/10 px-4 py-3 rounded font-sans">{error}</p>}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Full Name *</label>
                    <input required className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Phone</label>
                    <input className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="08XXXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Email *</label>
                  <input required type="email" className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Subject *</label>
                  <input required className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Message *</label>
                  <textarea required rows={5} className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest resize-none" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Write your message..." />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-forest text-cream font-sans font-bold py-4 rounded tracking-widest uppercase text-sm hover:bg-forest-dark transition-colors disabled:opacity-60">
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8 reveal">
            <div>
              <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Reach Us Directly</p>
              <h2 className="font-display text-4xl font-bold text-forest mb-6">Contact Information</h2>
              <div className="divider" style={{margin:"0 0 2rem"}}></div>
            </div>
            {[
              { icon: <MapPin size={20}/>, title: "Address", content: "540, Upper Sakponba Road, Opposite ConOil Filling Station, Benin City, Edo State." },
              { icon: <Phone size={20}/>, title: "Phone & WhatsApp", content: "08023397352 · 08053147106 · 07033287556 · 08165424706" },
              { icon: <Mail size={20}/>, title: "Email", content: "overcomersfamilyassembly@rocketmail.com" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 bg-forest rounded-full flex items-center justify-center text-gold shrink-0">{item.icon}</div>
                <div>
                  <p className="font-sans font-bold text-forest text-sm mb-1">{item.title}</p>
                  <p className="text-gray-600 font-sans text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}

            <div className="bg-forest rounded-lg p-5">
              <div className="flex gap-3 items-start">
                <Clock size={20} className="text-gold shrink-0 mt-0.5" />
                <div className="text-cream">
                  <p className="font-sans font-bold text-sm mb-2">Service Times</p>
                  {[["Wednesday","Bible Study","5:00pm – 6:00pm"],["Friday","Prayer Meeting","5:00pm – 6:00pm"],["Sunday","Main Service","7:00am – 9:30am"]].map(([d,n,t]) => (
                    <p key={d} className="text-cream/80 text-sm font-sans"><span className="text-gold font-semibold">{d}</span> – {n}: {t}</p>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="rounded-lg overflow-hidden border border-cream-dark h-56">
              <iframe
                title="Overcomers Family Assembly Location"
                src="https://maps.google.com/maps?q=Upper+Sokponba+Road+Benin+City&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social strip */}
      <section className="section bg-forest">
        <div className="section-inner tc">
          <p className="label gl" style={{ justifyContent: "center" }}><span className="ln" />Can&apos;t Make It In Person?</p>
          <h2 className="sec-title light tc">Follow Us <em style={{ color: "var(--gold)" }}>Online</em></h2>
          <div className="divbar c gold" style={{ marginBottom: 30 }} />
          <p style={{ fontFamily: "'Oswald',sans-serif", fontSize: 15, color: "rgba(255,255,255,0.6)", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.8 }}>
            Join our live streams on Facebook and YouTube, and follow us on Instagram for daily inspiration.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="https://www.facebook.com/overcomersfamilyassembly" target="_blank" rel="noopener" className="btn" style={{ background: "#1877F2", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Facebook
            </a>
            <a href="https://www.instagram.com/ovfa.prayerpalace" target="_blank" rel="noopener" className="btn" style={{ background: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              Instagram
            </a>
            <a href="https://youtube.com/overcomersfamilyassembly" target="_blank" rel="noopener" className="btn" style={{ background: "#FF0000", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

