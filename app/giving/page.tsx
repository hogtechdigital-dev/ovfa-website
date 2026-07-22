"use client";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Heart } from "lucide-react";

const categories = ["Tithe", "Offering", "Building Fund", "Missions", "Partnership", "Thanksgiving", "Others"];

export default function GivingPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", category: "Tithe", amount: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error: err } = await supabase.from("giving_records").insert([{
      full_name: form.name, email: form.email, phone: form.phone,
      category: form.category, amount: parseFloat(form.amount), message: form.message,
    }]);
    setLoading(false);
    if (err) { setError("Something went wrong. Please try again."); return; }
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero">
        <Image src="/images/worship-time.jpg" alt="Giving" fill className="ph-bg" />
        <div className="ph-overlay" />
        <div className="ph-content">
          <div className="ph-eyebrow">
            <span className="ph-line" />
            Kingdom Financing
            <span className="ph-line" />
          </div>
          <h1 className="ph-title">Give Online</h1>
        </div>
      </section>

      {/* Scripture */}
      <section className="py-10 px-4 sm:px-8 md:px-12 lg:px-20" style={{ background: "linear-gradient(135deg, var(--forest) 0%, var(--forest3) 100%)" }}>
        <div className="text-center text-cream reveal" style={{ maxWidth: 768, margin: "0 auto" }}>
          <p className="font-display text-2xl italic">"Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over..."</p>
          <p className="text-gold text-sm font-sans mt-3">— Luke 6:38</p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-8 md:px-12 lg:px-20" style={{ background: "linear-gradient(160deg, #F8F4EE 0%, #EFE9DC 100%)" }}>
        <div className="grid lg:grid-cols-2 gap-14" style={{ maxWidth: 1152, margin: "0 auto" }}>
          {/* Form */}
          <div className="reveal">
            <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Online Giving</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">Make a Donation</h2>
            <div className="divider" style={{margin:"0 0 2rem"}}></div>

            {submitted ? (
              <div className="bg-forest/10 border border-forest rounded-lg p-8 text-center">
                <Heart size={48} className="text-crimson mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-forest mb-2">Thank You for Giving!</h3>
                <p className="text-gray-700 font-sans">Your record has been submitted. Kindly complete the transfer to the account details provided, and may God bless your giving beyond measure.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && <p className="text-crimson text-sm font-sans bg-crimson/10 px-4 py-3 rounded">{error}</p>}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Full Name *</label>
                    <input required className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Phone</label>
                    <input className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="08XXXXXXXXX" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Email</label>
                  <input type="email" className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Giving Category *</label>
                    <select required className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.category} onChange={e => setForm({...form, category: e.target.value})}>
                      {categories.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Amount (₦) *</label>
                    <input required type="number" min="100" className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest" value={form.amount} onChange={e => setForm({...form, amount: e.target.value})} placeholder="e.g. 5000" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Message / Prayer Request (optional)</label>
                  <textarea rows={3} className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream-light focus:outline-none focus:ring-2 focus:ring-forest resize-none" value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Share a testimony or prayer point..." />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-crimson hover:bg-crimson-light text-cream font-sans font-bold py-4 rounded tracking-widest uppercase text-sm transition-colors disabled:opacity-60">
                  {loading ? "Submitting..." : "Submit Giving Record"}
                </button>
                <p className="text-xs text-gray-500 font-sans text-center">After submitting, complete your transfer to one of the bank accounts below.</p>
              </form>
            )}
          </div>

          {/* Bank Details */}
          <div className="space-y-8 reveal">
            <div>
              <p className="text-crimson text-xs tracking-widest uppercase font-sans mb-2">Alternative</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-forest mb-6">Bank Transfer</h2>
              <div className="divider" style={{margin:"0 0 2rem"}}></div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                { bank: "Above Only Microfinance Bank", acct: "110 003 6579", name: "OVERCOMERS FAMILY ASSEMBLY" },
                { bank: "First Bank Nigeria", acct: "2014292387", name: "OVERCOMERS FAMILY ASSEMBLY INT'L" },
                { bank: "Zenith Bank", acct: "1010499965", name: "OVERCOMERS FAMILY ASSEMBLY" },
              ].map((a) => (
                <div key={a.acct} className="bg-forest rounded-lg p-6 text-cream">
                  <p className="text-gold text-xs tracking-widest uppercase font-sans mb-3">{a.bank}</p>
                  <p className="font-display text-3xl font-bold tracking-widest mb-1">{a.acct}</p>
                  <p className="text-cream/80 font-sans text-sm">{a.name}</p>
                </div>
              ))}
            </div>

            <div className="bg-cream-dark rounded-lg p-6" style={{ marginTop: 32 }}>
              <h4 className="font-display text-xl font-bold text-forest mb-3">Giving Categories</h4>
              <div className="flex flex-wrap gap-2">
                {categories.map(c => (
                  <span key={c} className="bg-gold text-forest-dark text-xs font-sans font-bold px-3 py-1.5 rounded-full">{c}</span>
                ))}
              </div>
            </div>

            <div className="border border-gold rounded-lg p-6 text-center">
              <p className="font-display text-xl italic text-forest">"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."</p>
              <p className="text-gold text-sm font-sans mt-2">— 2 Corinthians 9:7</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

