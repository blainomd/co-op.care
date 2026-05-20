"use client";

import Link from "next/link";
import { useState } from "react";

const SEED_COUNTS = {
  families: 23,
  caregivers: 4,
  employers: 2,
  bchStaff: 0,
};

export default function BoulderPetition() {
  const [form, setForm] = useState({
    email: "",
    role: "family",
    story: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, source: `boulder-petition:${form.role}` }),
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
    <div className="min-h-screen bg-[#FEFCF6]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFCF6]/95 backdrop-blur-md border-b border-[#C5D4B5]/40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/icon.svg" alt="co-op.care" className="w-8 h-8 rounded-lg" />
            <span className="text-base font-bold tracking-tight text-[#292524]">co-op.care</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/bch" className="hidden sm:block text-sm text-[#57534E] hover:text-[#4A7C59] transition-colors">
              For health systems
            </Link>
            <a
              href="#sign"
              className="text-sm px-4 py-2 bg-[#4A6741] text-white rounded-full hover:bg-[#292524] transition-colors font-medium"
            >
              Sign the letter
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-5">
            Boulder, Colorado &nbsp;·&nbsp; An Open Letter to BCH
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#292524] leading-[1.08] mb-8">
            Boulder, tell BCH you want this.
          </h1>
          <p className="text-xl text-[#57534E] leading-relaxed mb-8">
            We&apos;re building the home-care network Boulder Community Health&apos;s discharge planners wish they had.
            Worker-owned. Physician-supervised. Funded through families&apos; own HSA/FSA pre-tax dollars. Already
            serving Boulder families today.
          </p>
          <p className="text-lg text-[#57534E] leading-relaxed mb-8">
            We&apos;re asking BCH to partner — to send their discharges to our network, so aging neighbors don&apos;t
            bounce between the hospital door and nowhere. We&apos;re asking you, Boulder, to sign the letter.
          </p>
        </div>
      </section>

      {/* Live counter */}
      <section className="py-12 px-6 bg-[#F0F5EE]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-6 text-center">
            The community is signing
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Boulder families signed", value: SEED_COUNTS.families },
              { label: "Caregivers pledged", value: SEED_COUNTS.caregivers },
              { label: "Employers interested", value: SEED_COUNTS.employers },
              { label: "BCH staff supporters", value: SEED_COUNTS.bchStaff, subtext: "(anonymous)" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 text-center border border-[#C5D4B5]/40">
                <div className="text-4xl font-bold text-[#4A6741] tracking-tight">{stat.value}</div>
                <div className="text-xs text-[#57534E] mt-2 leading-tight">{stat.label}</div>
                {stat.subtext && (
                  <div className="text-[10px] text-[#57534E]/50 mt-0.5">{stat.subtext}</div>
                )}
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#57534E]/60 mt-6">
            Target: 200 signatures. At that number we deliver a printed letter to BCH leadership with every name.
          </p>
        </div>
      </section>

      {/* Why */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4">
            Why this matters
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-8 tracking-tight">
            The gap between the hospital door and home.
          </h2>
          <div className="space-y-6 text-lg text-[#57534E] leading-relaxed">
            <p>
              By 2030, more than 15,000 Boulder County residents will be 65+ and facing the demographic wall.
              Traditional home-care agencies charge families $55 an hour. The caregiver takes home $16.
              That middleman spread is why 77% of caregivers quit every year.
            </p>
            <p>
              We&apos;re replacing that spread with worker ownership, Josh Emdur DO&apos;s 50-state medical
              oversight, and HSA/FSA pre-tax funding routed through ComfortCard. Families pay less. Caregivers earn
              more. The hospital avoids the readmission.
            </p>
            <p>
              This works without BCH. It works <em>better</em> with BCH as the partner that sends us the
              discharges and gets the ER-avoidance data back.
            </p>
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 px-6 bg-[#292524]">
        <div className="max-w-4xl mx-auto text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-[#C5D4B5] font-semibold mb-4">
            Real people, this week
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">
            The network is already running.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-xs uppercase tracking-wider text-[#C5D4B5] mb-3">First family</p>
              <h3 className="font-bold text-white mb-3">Jess Dion&apos;s father</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Moved home to Boulder, less than one mile from BCH. Live-in caregiver model. Free room and board
                in exchange for companion care. First care session delivered. He&apos;s still home.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-xs uppercase tracking-wider text-[#C5D4B5] mb-3">First caregiver model</p>
              <h3 className="font-bold text-white mb-3">Housing-for-hours exchange</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Instead of a $16/hr agency wage, our caregivers earn $26/hr + equity in the cooperative. Live-in
                caregivers solve their own housing crisis in exchange for dedicated hours. Deep retention,
                not agency churn.
              </p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <p className="text-xs uppercase tracking-wider text-[#C5D4B5] mb-3">Medical oversight</p>
              <h3 className="font-bold text-white mb-3">Josh Emdur DO</h3>
              <p className="text-sm text-white/70 leading-relaxed">
                50-state licensed physician. Handles LMN attestation, incident-to billing, and clinical oversight.
                The answer to &quot;who&apos;s the MD of record&quot; is Josh.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign */}
      <section id="sign" className="py-24 px-6 bg-[#FEFCF6]">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4 text-center">
            Sign the letter
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-6 text-center tracking-tight">
            Add your name to the community ask.
          </h2>
          <p className="text-center text-[#57534E] mb-10">
            We&apos;ll include your name in the printed letter to BCH leadership at 200 signatures.
            Nothing else — no marketing, no sales calls.
          </p>

          {submitted ? (
            <div className="bg-[#F0F5EE] border border-[#4A6741]/30 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-[#292524] mb-2">Thank you.</h3>
              <p className="text-[#57534E]">
                You&apos;ve been added to the letter. We&apos;ll post a monthly update as the count grows.
                Share the page with one neighbor who&apos;d sign too.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#C5D4B5]/50 shadow-sm space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#292524] mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#C5D4B5]/60 focus:border-[#4A6741] focus:outline-none text-[#292524]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-[#292524] mb-2">
                  I&apos;m signing as…
                </label>
                <select
                  id="role"
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-[#C5D4B5]/60 focus:border-[#4A6741] focus:outline-none text-[#292524] bg-white"
                >
                  <option value="family">A Boulder family (or future family)</option>
                  <option value="caregiver">A caregiver who&apos;d work for the co-op</option>
                  <option value="employer">An employer interested in offering this</option>
                  <option value="bch">A BCH clinician or staff member (anonymous)</option>
                  <option value="neighbor">A Boulder neighbor who cares</option>
                </select>
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full px-6 py-4 rounded-full text-base font-semibold bg-[#4A6741] text-white hover:bg-[#292524] transition-colors disabled:opacity-60"
              >
                {submitting ? "Adding your name…" : "Add my name to the letter"}
              </button>
              <p className="text-xs text-[#57534E]/60 text-center pt-2">
                Your name appears in the printed letter delivered at 200 signatures. We never sell your contact
                information. One optional monthly update email.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Share */}
      <section className="py-16 px-6 bg-[#F0F5EE] border-t border-[#C5D4B5]/40">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-[#292524] mb-4">Forward this to one Boulder neighbor.</h3>
          <p className="text-[#57534E] mb-6">
            Every name on the letter makes it harder for BCH to say no. Every silence makes it easier.
          </p>
          <p className="text-sm text-[#57534E]/70">
            Share: <span className="font-mono text-[#4A6741]">co-op.care/boulder</span>
          </p>
        </div>
      </section>

      {/* Ecosystem footer */}
      <section className="py-10 px-6 bg-[#1a1715]">
        <div className="max-w-5xl mx-auto">
          <p className="text-white/20 text-xs text-center tracking-widest uppercase mb-5">
            Part of the SolvingHealth ecosystem
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {[
              { label: "solvinghealth.com", href: "https://solvinghealth.com" },
              { label: "surgeonvalue.com", href: "https://surgeonvalue.com" },
              { label: "comfortcard.org", href: "https://comfortcard.org" },
              { label: "altru.care", href: "https://altru.care" },
              { label: "harnesshealth.ai", href: "https://harnesshealth.ai" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/20 hover:text-white/50 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-center text-white/10 text-xs mt-6">
            co-op.care Technologies LLC — Boulder, Colorado. Worker-owned. Physician-supervised.
          </p>
        </div>
      </section>

    </div>
  );
}
