"use client";
import Image from "next/image";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { User, Lock, UserPlus, BookOpen, Megaphone, Wallet, Calendar } from "lucide-react";

type Mode = "login" | "register";

export default function MembersPage() {
  const [mode, setMode] = useState<Mode>("login");
  const [form, setForm] = useState({ name: "", email: "", password: "", phone: "", branch: "" });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [memberData, setMemberData] = useState<{name: string; status: string} | null>(null);

  const branches = ["HQ – Prayer Cathedral","City of Truth","Dominion Centre","House of Favour","Potter's House","Mount Zion","Power House","Germany Branch 1","Germany Branch 2"];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setError("");
    const { data, error: err } = await supabase.auth.signInWithPassword({ email: form.email, password: form.password });
    if (err) { setError(err.message); setLoading(false); return; }
    const { data: profile } = await supabase.from("members").select("full_name, status").eq("user_id", data.user?.id).single();
    if (profile?.status !== "approved") {
      setError("Your account is pending admin approval. Please check back soon."); 
      await supabase.auth.signOut(); setLoading(false); return;
    }
    setMemberData({ name: profile.full_name, status: profile.status });
    setLoggedIn(true); setLoading(false);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setError("");
    const { data, error: err } = await supabase.auth.signUp({ email: form.email, password: form.password });
    if (err) { setError(err.message); setLoading(false); return; }
    await supabase.from("members").insert([{
      user_id: data.user?.id, full_name: form.name, email: form.email, phone: form.phone, branch: form.branch, status: "pending"
    }]);
    setMsg("Registration successful! Your account is pending admin approval. We'll notify you by email once approved.");
    setLoading(false);
  };

  const handleLogout = async () => { await supabase.auth.signOut(); setLoggedIn(false); setMemberData(null); };

  return (
    <>
      <section className="page-hero">
        <Image src="/images/church-service.jpg" alt="Members" fill className="ph-bg" />
        <div className="ph-overlay" />
        <div className="ph-content">
          <div className="ph-eyebrow">
            <span className="ph-line" />
            For Members
            <span className="ph-line" />
          </div>
          <h1 className="ph-title">Members Portal</h1>
        </div>
      </section>

      <section className="bg-cream py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-lg mx-auto">
          {/* How it works info box */}
          <div className="bg-cream-dark border-l-4 border-gold rounded-r-lg p-6 mb-8 reveal">
            <h4 className="font-display text-lg font-bold text-forest mb-2">ℹ️ How the Members Portal Works</h4>
            <p className="text-sm font-sans text-gray-700 leading-relaxed">
              <strong>New members:</strong> Click <em>Register</em>, fill in your details and submit. Your account will show as <em>pending</em> until the admin approves it — you&apos;ll be notified by email once approved.
            </p>
            <p className="text-sm font-sans text-gray-700 leading-relaxed mt-2">
              <strong>Existing members:</strong> Once approved, use <em>Sign In</em> to access your dashboard — giving history, announcements, and resources.
            </p>
            <p className="text-sm font-sans text-gray-700 leading-relaxed mt-2">
              <strong>Admin approval:</strong> All accounts require manual approval before access is granted, keeping the portal a safe members-only space.
            </p>
          </div>
          {loggedIn && memberData ? (
            <div className="bg-cream-light border border-cream-dark rounded-lg p-8 text-center reveal">
              <div className="w-20 h-20 bg-forest rounded-full flex items-center justify-center mx-auto mb-4">
                <User size={36} className="text-cream" />
              </div>
              <h2 className="font-display text-3xl font-bold text-forest mb-1">Welcome, {memberData.name}!</h2>
              <p className="text-gold font-sans text-sm mb-6">Approved Member · Overcomers Family Assembly</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { label: "Devotionals", href: "/", icon: <BookOpen size={18} /> },
                  { label: "Announcements", href: "/", icon: <Megaphone size={18} /> },
                  { label: "Giving History", href: "/giving", icon: <Wallet size={18} /> },
                  { label: "Events", href: "/events", icon: <Calendar size={18} /> },
                ].map((l) => (
                  <a key={l.label} href={l.href} className="bg-cream rounded-lg p-4 text-forest font-sans text-sm font-semibold hover:bg-forest hover:text-cream transition-colors border border-cream-dark flex items-center justify-center gap-2">
                    {l.icon} {l.label}
                  </a>
                ))}
              </div>
              <button onClick={handleLogout} className="text-crimson font-sans text-sm hover:underline">Sign Out</button>
            </div>
          ) : msg ? (
            <div className="bg-forest/10 border border-forest rounded-lg p-8 text-center reveal">
              <UserPlus size={48} className="text-forest mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-forest mb-3">Registration Submitted!</h3>
              <p className="text-gray-700 font-sans">{msg}</p>
              <button onClick={() => { setMsg(""); setMode("login"); }} className="mt-6 text-forest font-sans font-bold border-b border-forest hover:text-crimson transition-colors">
                Back to Login
              </button>
            </div>
          ) : (
            <div className="bg-cream-light border border-cream-dark rounded-lg p-8 reveal">
              {/* Tabs */}
              <div className="flex border-b border-cream-dark mb-8">
                {(["login","register"] as Mode[]).map(m => (
                  <button key={m} onClick={() => { setMode(m); setError(""); }} className={`flex-1 py-3 font-sans text-sm font-bold tracking-widest uppercase transition-colors ${mode === m ? "text-forest border-b-2 border-forest -mb-px" : "text-gray-400"}`}>
                    {m === "login" ? "Sign In" : "Register"}
                  </button>
                ))}
              </div>
              {error && <p className="text-crimson text-sm font-sans bg-crimson/10 px-4 py-3 rounded mb-5">{error}</p>}

              {mode === "login" ? (
                <form onSubmit={handleLogin} className="space-y-5">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Email</label>
                    <div className="relative"><Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required type="email" className="w-full border border-cream-dark rounded pl-9 pr-4 py-3 font-sans text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-forest" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Password</label>
                    <div className="relative"><Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input required type="password" className="w-full border border-cream-dark rounded pl-9 pr-4 py-3 font-sans text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-forest" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="••••••••" />
                    </div>
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-forest text-cream font-sans font-bold py-3 rounded tracking-widest uppercase text-sm hover:bg-forest-dark transition-colors disabled:opacity-60">
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleRegister} className="space-y-4">
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Full Name *</label>
                    <input required className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-forest" value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Email *</label>
                    <input required type="email" className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-forest" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Phone</label>
                    <input className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-forest" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="08XXXXXXXXX" />
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Home Branch</label>
                    <select className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-forest" value={form.branch} onChange={e => setForm({...form, branch: e.target.value})}>
                      <option value="">Select your branch</option>
                      {branches.map(b => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-sans uppercase tracking-widest text-gray-500 mb-1">Password *</label>
                    <input required type="password" minLength={6} className="w-full border border-cream-dark rounded px-4 py-3 font-sans text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-forest" value={form.password} onChange={e => setForm({...form, password: e.target.value})} placeholder="Min. 6 characters" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-crimson text-cream font-sans font-bold py-3 rounded tracking-widest uppercase text-sm hover:bg-crimson-light transition-colors disabled:opacity-60">
                    {loading ? "Registering..." : "Register"}
                  </button>
                  <p className="text-xs text-gray-500 text-center font-sans">Registration requires admin approval before access is granted.</p>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

