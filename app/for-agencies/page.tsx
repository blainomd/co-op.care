"use client";

import { useState } from "react";
import Link from "next/link";

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-[#4A6741] inline-block" />;
}

const WHAT_CMS_WANTS = [
  {
    label: "Named supervising clinician",
    detail:
      "Every high-risk HCBS provider must demonstrate a verifiable, named licensed clinician overseeing care. Agencies without one will fail revalidation.",
  },
  {
    label: "Workforce integrity documentation",
    detail:
      "CMS is cross-checking employment classification. 1099 personal care attendants are an audit flag. W-2 employment with documented supervision chains is the clean answer.",
  },
  {
    label: "Provider revalidation strategy",
    detail:
      "State Medicaid Directors must submit 2-year revalidation plans by June 5. Agencies in targeted categories — home care, PCAs, case management — will be audited first.",
  },
];

const HOW_IT_WORKS = [
  {
    n: "01",
    title: "You onboard in a day",
    body: "Share your agency's care plan templates and supervising clinician requirement. We map your documentation to what CMS will look for during revalidation.",
  },
  {
    n: "02",
    title: "Josh reviews and signs",
    body: "Josh Emdur DO — 50-state licensed, board-certified family medicine — serves as your agency's clinical medical director of record. He reviews care plans and LMNs, signs within 48 hours.",
  },
  {
    n: "03",
    title: "You have a named clinician on record",
    body: "During revalidation, you can produce a named, licensed supervising physician for every care plan in your system. Your agency passes the audit. Others don't.",
  },
];

const PRICING = [
  {
    name: "LMN / Care Plan Review",
    price: "$199",
    unit: "per document",
    description:
      "Physician-signed LMN or care plan attestation. Josh reviews the clinical documentation, signs on letterhead. Returned within 48 hours. Valid for HSA/FSA and Medicaid revalidation.",
    cta: "Start with one document",
    highlight: false,
  },
  {
    name: "Clinical Medical Director Retainer",
    price: "$1,200",
    unit: "per month",
    description:
      "Josh serves as your agency's named supervising physician. Covers up to 15 care plan reviews/LMNs per month, your agency listed on his practice record, available for revalidation audits.",
    cta: "Discuss retainer terms",
    highlight: true,
  },
  {
    name: "Cooperative Employment Partnership",
    price: "Custom",
    unit: "per caregiver",
    description:
      "co-op.care employs your caregivers as W-2 worker-owners with documented clinical supervision. Solves both the workforce classification and supervising clinician requirements at once.",
    cta: "Schedule a conversation",
    highlight: false,
  },
];

export default function ForAgenciesPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "for-agencies-cms-revalidation" }),
      });
      setSubmitted(true);
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
            <Link href="/bch" className="hidden sm:block text-sm text-[#57534E] hover:text-[#4A6741] transition-colors">
              For health systems
            </Link>
            <a
              href="#contact"
              className="text-sm px-4 py-2 bg-[#4A6741] text-white rounded-full hover:bg-[#292524] transition-colors font-medium"
            >
              Talk to us
            </a>
          </div>
        </div>
      </nav>

      {/* Urgency banner */}
      <div className="bg-[#292524] text-[#C5D4B5] text-center px-6 py-3 text-xs tracking-[0.1em] uppercase font-semibold pt-14">
        CMS revalidation strategies due June 5 &nbsp;&middot;&nbsp; HCBS providers are the named high-risk category &nbsp;&middot;&nbsp; Named supervising clinician now required
      </div>

      {/* Hero */}
      <section className="pt-20 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-6">
            For HCBS Agencies &nbsp;&middot;&nbsp; CMS Revalidation
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#292524] leading-[1.08] mb-8">
            CMS is requiring a named supervising clinician.
            <br />
            <span className="text-[#4A6741]">We already have one.</span>
          </h1>
          <p className="text-xl text-[#57534E] leading-relaxed max-w-3xl mb-6">
            CMS Administrator Oz directed all 50 states to revalidate high-risk Medicaid providers
            by June 5. Personal care attendant agencies, home care providers, and case management
            organizations are the named targets. The agencies that pass will have a verifiable,
            named physician on record. Most won&rsquo;t.
          </p>
          <p className="text-lg text-[#57534E] leading-relaxed max-w-3xl mb-10">
            co-op.care built its own clinical infrastructure — Josh Emdur DO, 50-state licensed,
            serves as medical director. We&rsquo;re making that infrastructure available to other HCBS
            agencies before the revalidation window closes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <a
              href="#how-it-works"
              className="inline-block px-8 py-4 rounded-lg text-base font-semibold bg-[#4A6741] text-white hover:bg-[#292524] transition-colors shadow-sm text-center"
            >
              See how it works
            </a>
            <a
              href="#pricing"
              className="inline-block px-8 py-4 rounded-lg text-base font-semibold bg-white text-[#4A6741] border border-[#4A6741]/30 hover:border-[#4A6741] hover:bg-[#F0F5EE] transition-colors text-center"
            >
              See pricing &rarr;
            </a>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#57534E]/70">
            <span className="flex items-center gap-1.5"><Dot />50-state licensed physician</span>
            <span className="flex items-center gap-1.5"><Dot />Signed within 48 hours</span>
            <span className="flex items-center gap-1.5"><Dot />W-2 cooperative employment available</span>
            <span className="flex items-center gap-1.5"><Dot />No long-term contract required</span>
          </div>
        </div>
      </section>

      {/* What CMS wants */}
      <section className="py-20 px-6 bg-[#F0F5EE]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4">
            What changed
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-4 tracking-tight leading-tight">
            Three things CMS is auditing. Most agencies fail two of them.
          </h2>
          <p className="text-lg text-[#57534E] mb-12 max-w-2xl leading-relaxed">
            The April 23 Oz directive gave states 30 business days to submit revalidation strategies.
            Agencies in personal care, home care, case management, and non-medical transportation
            are named explicitly. Here is what the audit looks for.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {WHAT_CMS_WANTS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 border border-[#C5D4B5]/40 shadow-sm"
              >
                <p className="text-xs tracking-[0.2em] uppercase text-[#4A6741] font-bold mb-3">
                  0{i + 1}
                </p>
                <p className="text-base font-bold text-[#292524] mb-3 leading-snug">
                  {item.label}
                </p>
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-4 tracking-tight leading-tight">
            Three steps. Onboard in a day.
          </h2>
          <p className="text-lg text-[#57534E] mb-12 max-w-2xl leading-relaxed">
            We built this for our own agency first. Extending it to yours takes hours, not months.
          </p>
          <div className="flex flex-col gap-4">
            {HOW_IT_WORKS.map((step, i) => (
              <div
                key={i}
                className="flex gap-6 bg-[#F0F5EE] rounded-2xl p-7 border border-[#C5D4B5]/30"
              >
                <div className="flex-shrink-0">
                  <span className="text-xs tracking-[0.15em] uppercase text-[#4A6741] font-bold">
                    {step.n}
                  </span>
                </div>
                <div>
                  <p className="text-base font-bold text-[#292524] mb-2">{step.title}</p>
                  <p className="text-sm text-[#57534E] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Josh credential */}
      <section className="py-16 px-6 bg-[#292524]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-8 items-start">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#4A6741] flex items-center justify-center text-white font-bold text-xl">
            JE
          </div>
          <div>
            <p className="text-[#C5D4B5] text-xs tracking-[0.2em] uppercase font-bold mb-2">
              Your named supervising physician
            </p>
            <p className="text-white text-xl font-bold mb-2">
              Josh Emdur, DO
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-2xl mb-4">
              Board-certified family medicine. 50-state licensed. BCH hospitalist since 2008.
              Former CMO, SteadyMD. Co-founder and Chief Medical Officer, co-op.care.
              Josh reviews and attests every document that carries his name — no volume-signing,
              no rubber stamps.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/50">
              <span>Board-certified family medicine</span>
              <span>&middot;</span>
              <span>Active license all 50 states</span>
              <span>&middot;</span>
              <span>DEA registered</span>
              <span>&middot;</span>
              <span>Malpractice covered</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-4 tracking-tight leading-tight">
            Start with one document. Scale to full partnership.
          </h2>
          <p className="text-lg text-[#57534E] mb-12 max-w-2xl leading-relaxed">
            No long-term commitment required to start. Most agencies begin with a single
            care plan review to verify the process, then move to the retainer.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {PRICING.map((tier, i) => (
              <div
                key={i}
                className={`rounded-2xl p-7 border flex flex-col ${
                  tier.highlight
                    ? "bg-[#4A6741] border-[#4A6741] text-white"
                    : "bg-white border-[#C5D4B5]/40 shadow-sm"
                }`}
              >
                <p
                  className={`text-xs tracking-[0.2em] uppercase font-bold mb-4 ${
                    tier.highlight ? "text-[#C5D4B5]" : "text-[#4A6741]"
                  }`}
                >
                  {tier.name}
                </p>
                <p
                  className={`text-3xl font-bold mb-1 ${
                    tier.highlight ? "text-white" : "text-[#292524]"
                  }`}
                >
                  {tier.price}
                </p>
                <p
                  className={`text-xs mb-5 ${
                    tier.highlight ? "text-white/60" : "text-[#57534E]/70"
                  }`}
                >
                  {tier.unit}
                </p>
                <p
                  className={`text-sm leading-relaxed mb-6 flex-1 ${
                    tier.highlight ? "text-white/80" : "text-[#57534E]"
                  }`}
                >
                  {tier.description}
                </p>
                <a
                  href="#contact"
                  className={`inline-block text-center text-sm font-semibold px-5 py-3 rounded-lg transition-colors ${
                    tier.highlight
                      ? "bg-white text-[#4A6741] hover:bg-[#F0F5EE]"
                      : "bg-[#4A6741] text-white hover:bg-[#292524]"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#57534E]/60 mt-6 text-center">
            Medicaid HCBS waiver programs only. Medicare-certified HHA certifications
            require direct physician-patient relationship per 42 CFR §424.22.
          </p>
        </div>
      </section>

      {/* Contact / email capture */}
      <section id="contact" className="py-20 px-6 bg-[#F0F5EE]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4">
            Get started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-4 tracking-tight leading-tight">
            Your agency needs a named clinician before June 5.
          </h2>
          <p className="text-lg text-[#57534E] leading-relaxed mb-10">
            Drop your email. We&rsquo;ll send the onboarding checklist and schedule a
            20-minute call to map your documentation to revalidation requirements.
          </p>
          {submitted ? (
            <div className="bg-white rounded-2xl p-8 border border-[#C5D4B5]/40 shadow-sm">
              <p className="text-lg font-bold text-[#4A6741] mb-2">Done — expect a reply within one business day.</p>
              <p className="text-sm text-[#57534E]">
                While you wait, read the full{" "}
                <a
                  href="https://surgeonvalue.com/cms-revalidation"
                  className="text-[#4A6741] font-semibold hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CMS revalidation guide
                </a>{" "}
                for the clinical documentation side.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="agency@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-5 py-4 rounded-lg border border-[#C5D4B5]/60 bg-white text-[#292524] text-base placeholder:text-[#57534E]/50 focus:outline-none focus:border-[#4A6741] transition-colors"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-4 rounded-lg bg-[#4A6741] text-white font-semibold text-base hover:bg-[#292524] transition-colors disabled:opacity-60 whitespace-nowrap"
              >
                {submitting ? "Sending…" : "Talk to us →"}
              </button>
            </form>
          )}
          <p className="text-xs text-[#57534E]/50 mt-4">
            No sales automation. A person replies.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#C5D4B5]/40 px-6 py-10">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#57534E]/60">
          <Link href="/" className="font-semibold text-[#292524]">co-op.care</Link>
          <p>
            Clinical medical director services provided through Altru Care, PC — Josh Emdur DO.
            Medicaid HCBS waiver programs only. This page does not constitute legal or compliance advice.
          </p>
        </div>
      </footer>
    </div>
  );
}
