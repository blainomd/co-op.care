"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Category =
  | "all"
  | "founding_family"
  | "founding_investor"
  | "caregiver"
  | "medical_advisor"
  | "community_supporter"
  | "partner_org";

type Signatory = {
  name: string;
  title?: string;
  org?: string;
  category: Exclude<Category, "all">;
  city?: string;
};

// Seed data — replace/augment with live Supabase query once `public.coop_signatories` lands.
// Only names the person has authorized for public display should appear here.
const SEED: Signatory[] = [
  // Medical advisors
  { name: "Josh Emdur, DO", title: "Chief Medical Officer", org: "Altru.care", category: "medical_advisor", city: "Boulder, CO" },
  // Founding Families
  { name: "Jess Dion", title: "First Founding Family · Conductor", category: "founding_family", city: "Boulder, CO" },
  // Caregivers (worker-owners, only names on record)
  // Community supporters and partners populated from Supabase
];

const CATEGORIES: { key: Category; label: string; tagline?: string }[] = [
  { key: "all", label: "All" },
  { key: "founding_family", label: "Founding Families", tagline: "$499/yr · 200 spots · locked 3 years" },
  { key: "founding_investor", label: "Founding Investors", tagline: "$10K · 0.5% equity · 20 spots" },
  { key: "caregiver", label: "Caregivers", tagline: "Worker-owners · W-2 · equity" },
  { key: "medical_advisor", label: "Medical Advisors" },
  { key: "community_supporter", label: "Community Supporters" },
  { key: "partner_org", label: "Partner Organizations" },
];

const CATEGORY_META: Record<Exclude<Category, "all">, { label: string; chip: string }> = {
  founding_family: { label: "Founding Family", chip: "bg-[#E8EFDF] text-[#4A6741]" },
  founding_investor: { label: "Founding Investor", chip: "bg-[#F1E7D3] text-[#8A6B2F]" },
  caregiver: { label: "Caregiver · Worker-Owner", chip: "bg-[#DCE8F0] text-[#2E5976]" },
  medical_advisor: { label: "Medical Advisor", chip: "bg-[#E0D7E6] text-[#5B3E75]" },
  community_supporter: { label: "Community Supporter", chip: "bg-[#EFE4DB] text-[#6B4B33]" },
  partner_org: { label: "Partner Organization", chip: "bg-[#D4E4D9] text-[#3A5D45]" },
};

export default function SignatoriesPage() {
  const [filter, setFilter] = useState<Category>("all");
  const [form, setForm] = useState({
    name: "",
    email: "",
    role: "community_supporter" as Exclude<Category, "all">,
    org: "",
    city: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (filter === "all") return SEED;
    return SEED.filter((s) => s.category === filter);
  }, [filter]);

  const count = SEED.length;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email,
          source: `signatory:${form.role}`,
          role: form.role,
          metadata: { name: form.name, org: form.org, city: form.city },
        }),
      });
      if (!res.ok) throw new Error("signup failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FEFCF6] text-[#292524]">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#FEFCF6]/95 backdrop-blur-md border-b border-[#C5D4B5]/40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/icon.svg" alt="co-op.care" className="w-8 h-8 rounded-lg" />
            <span className="text-base font-bold tracking-tight">co-op.care</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/boulder" className="hidden sm:block text-sm text-[#57534E] hover:text-[#4A7C59] transition-colors">
              Boulder petition
            </Link>
            <Link href="/bch" className="hidden sm:block text-sm text-[#57534E] hover:text-[#4A7C59] transition-colors">
              For health systems
            </Link>
            <a
              href="#sign"
              className="text-sm px-4 py-2 bg-[#4A6741] text-white rounded-full hover:bg-[#292524] transition-colors font-medium"
            >
              Add your name
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-10 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#4A7C59] mb-4">
          Stand with co-op.care
        </span>
        <h1 className="text-5xl md:text-6xl font-serif italic leading-tight mb-6">
          Families, caregivers, and neighbors — <span className="text-[#4A6741]">building the worker-owned cooperative
          Boulder deserves.</span>
        </h1>
        <p className="text-lg text-[#57534E] max-w-2xl mx-auto leading-relaxed">
          A public list of the people stating — on the record — that they want companion care in Boulder to be delivered
          by caregivers who own the company that employs them. Every name published here has been reviewed and confirmed.
        </p>

        <div className="mt-10 flex items-center justify-center gap-8">
          <div>
            <div className="text-5xl font-bold tracking-tight text-[#4A6741]">{count}</div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#78716C] mt-1">Names on the record</div>
          </div>
          <div className="h-12 w-px bg-[#C5D4B5]/60" />
          <div>
            <div className="text-5xl font-bold tracking-tight text-[#4A6741]">200</div>
            <div className="text-xs tracking-[0.15em] uppercase text-[#78716C] mt-1">Letter delivered at</div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-6 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setFilter(c.key)}
              className={`px-4 py-2 text-sm rounded-full border transition-colors ${
                filter === c.key
                  ? "bg-[#4A6741] text-white border-[#4A6741]"
                  : "bg-white text-[#57534E] border-[#C5D4B5]/60 hover:border-[#4A6741] hover:text-[#4A6741]"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div className="text-center text-xs text-[#78716C] mt-3 italic min-h-[16px]">
          {CATEGORIES.find((c) => c.key === filter)?.tagline || " "}
        </div>
      </section>

      {/* Signatory grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-[#C5D4B5]/60 rounded-2xl bg-white">
            <p className="text-[#78716C]">Names in this category will appear here once submitted and reviewed.</p>
            <a
              href="#sign"
              className="inline-block mt-4 text-sm text-[#4A6741] font-medium underline decoration-dotted underline-offset-4"
            >
              Be the first →
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((s, i) => (
              <div
                key={`${s.name}-${i}`}
                className="bg-white border border-[#C5D4B5]/40 rounded-2xl p-5 hover:border-[#4A7C59] transition-colors"
              >
                <div
                  className={`inline-block text-[10px] font-bold tracking-[0.08em] uppercase px-2 py-1 rounded mb-3 ${CATEGORY_META[s.category].chip}`}
                >
                  {CATEGORY_META[s.category].label}
                </div>
                <div className="text-base font-semibold text-[#292524]">{s.name}</div>
                {s.title && <div className="text-sm text-[#57534E] mt-0.5">{s.title}</div>}
                {s.org && <div className="text-sm text-[#4A7C59] font-medium mt-0.5">{s.org}</div>}
                {s.city && <div className="text-xs text-[#78716C] tracking-wide mt-2">{s.city}</div>}
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 flex items-center justify-between text-xs text-[#78716C]">
          <span>All signatures reviewed before publication.</span>
          <span>Updated regularly. Last refresh: static seed.</span>
        </div>
      </section>

      {/* Sign form */}
      <section id="sign" className="bg-[#4A6741] text-white py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#C5D4B5] mb-4">
              Join the coalition
            </span>
            <h2 className="text-4xl md:text-5xl font-serif italic leading-tight mb-4">
              Add your name.
            </h2>
            <p className="text-[#E8EFDF] leading-relaxed">
              Submitting this form will publish your name on this page after review. Your email is used only to confirm
              you are the person signing — it is not published and not sold.
            </p>
          </div>

          {submitted ? (
            <div className="bg-[#C5D4B5]/20 border border-[#C5D4B5]/40 rounded-2xl p-8 text-center">
              <p className="text-lg font-semibold text-white mb-2">Thank you for standing with co-op.care.</p>
              <p className="text-[#E8EFDF] text-sm">
                A member of our team will review your submission and publish your name on this page. You will receive a
                confirmation email shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#C5D4B5] font-bold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name as you want it shown"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C5D4B5] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#C5D4B5] font-bold mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C5D4B5] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-[0.1em] uppercase text-[#C5D4B5] font-bold mb-1">
                  I am signing as a…
                </label>
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value as Exclude<Category, "all"> })}
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#C5D4B5] transition-colors"
                >
                  <option value="founding_family" className="text-[#292524]">Founding Family ($499/yr · 200 spots)</option>
                  <option value="founding_investor" className="text-[#292524]">Founding Investor ($10K · 0.5% · 20 spots)</option>
                  <option value="caregiver" className="text-[#292524]">Caregiver (worker-owner)</option>
                  <option value="medical_advisor" className="text-[#292524]">Medical advisor</option>
                  <option value="community_supporter" className="text-[#292524]">Community supporter</option>
                  <option value="partner_org" className="text-[#292524]">Partner organization</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#C5D4B5] font-bold mb-1">
                    Organization <span className="text-white/40 normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.org}
                    onChange={(e) => setForm({ ...form, org: e.target.value })}
                    placeholder="Company or group name"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C5D4B5] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-[0.1em] uppercase text-[#C5D4B5] font-bold mb-1">
                    City <span className="text-white/40 normal-case">(optional)</span>
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Boulder, CO"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#C5D4B5] transition-colors"
                  />
                </div>
              </div>

              {error && <p className="text-sm text-[#FCD7C5]">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-white text-[#4A6741] font-bold py-4 rounded-full hover:bg-[#E8EFDF] transition-colors disabled:opacity-50"
              >
                {submitting ? "Submitting…" : "Add my name"}
              </button>

              <p className="text-xs text-[#E8EFDF]/70 text-center">
                By submitting, you agree to have your name (not email) displayed publicly on this page after review.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Context block */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif italic mb-4 text-[#292524]">Why we publish this list</h2>
        <div className="text-[#57534E] leading-relaxed space-y-3">
          <p>
            co-op.care is a worker-owned home care cooperative headquartered in Boulder, Colorado. Every caregiver we
            employ will own a share of the company. Every family we serve pays a transparent $59/month membership and
            $400–12,000/month for companion care, with HSA/FSA eligibility via physician-signed Letters of Medical
            Necessity.
          </p>
          <p>
            This list exists because the market for home care is broken, and we cannot fix it alone. 77% caregiver
            turnover industry-wide. Families paying $32/hour so an agency can pay a worker $15. We are proposing a
            different model — and the faster Boulder Community Health, the Boulder Chamber, area employers, and the
            state of Colorado can see that the demand is real and public, the faster the model works.
          </p>
          <p>
            At 200 signatures we deliver a petition with every name on it to Boulder Community Health and to our state
            leaders. Then we keep going.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/boulder"
            className="inline-block text-sm px-5 py-2.5 bg-[#4A6741] text-white rounded-full hover:bg-[#292524] transition-colors font-medium"
          >
            Read the Boulder petition →
          </Link>
          <Link
            href="/bch"
            className="inline-block text-sm px-5 py-2.5 bg-white text-[#4A6741] border border-[#4A6741] rounded-full hover:bg-[#E8EFDF] transition-colors font-medium"
          >
            For health systems →
          </Link>
          <Link
            href="/membership"
            className="inline-block text-sm px-5 py-2.5 bg-white text-[#4A6741] border border-[#4A6741] rounded-full hover:bg-[#E8EFDF] transition-colors font-medium"
          >
            Founding Member details →
          </Link>
        </div>
      </section>

      <footer className="border-t border-[#C5D4B5]/40 py-10 text-center text-xs text-[#78716C]">
        <p className="font-serif italic text-[#4A6741] mb-2">co-op.care</p>
        <p>The app that comes with a caregiver.</p>
        <p className="mt-3 text-[#78716C]/70">All signatures reviewed before publication.</p>
      </footer>
    </div>
  );
}
