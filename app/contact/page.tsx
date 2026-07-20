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
      <section className="relative h-[360px] flex items-center justify-center overflow-hidden">
        <Image src="/images/church-building.jpg" alt="Contact" fill className="object-cover" />
        <div className="absolute inset-0 page-hero-overlay" />
        <div className="relative z-10 text-center text-cream px-4">
          <div className="page-hero-eyebrow mb-4">
            <span className="page-hero-eyebrow-line" />
            <p className="text-gold text-xs tracking-widest uppercase font-sans">Get in Touch</p>
            <span className="page-hero-eyebrow-line" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-wide">Contact Us</h1>
        </div>
      </section>

      <section className="bg-cream py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14">
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
      <section className="bg-forest-dark py-12 px-4">
        <div className="max-w-4xl mx-auto text-center reveal">
          <h3 className="font-display text-2xl font-bold text-cream mb-4">Follow Us Online</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.facebook.com/overcomersfamilyassembly" target="_blank" rel="noopener" className="text-cream hover:text-gold font-sans text-sm transition-colors">📘 Facebook</a>
            <span className="text-cream/30">|</span>
            <a href="https://instagram.com/ovfa.prayerpalace" target="_blank" rel="noopener" className="text-cream hover:text-gold font-sans text-sm transition-colors">📸 @ovfa.prayerpalace</a>
            <span className="text-cream/30">|</span>
            <a href="https://youtube.com/overcomersfamilyassembly" target="_blank" rel="noopener" className="text-cream hover:text-gold font-sans text-sm transition-colors">▶️ YouTube</a>
          </div>
        </div>
      </section>
    </>
  );
}

