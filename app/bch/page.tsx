import Link from "next/link";

export const metadata = {
  title: "Community Package for Boulder Community Health | co-op.care",
  description:
    "AI-native healthcare infrastructure for BCH. Two on-ramps — orthopedic revenue recovery or discharge-to-home — both costing less than one FTE, both using existing CMS codes.",
};

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-[#4A6741] inline-block" />;
}

export default function BCHPage() {
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
            <Link href="/boulder" className="hidden sm:block text-sm text-[#57534E] hover:text-[#4A7C59] transition-colors">
              Boulder Community
            </Link>
            <Link
              href="/bch#pilot"
              className="text-sm px-4 py-2 bg-[#4A6741] text-white rounded-full hover:bg-[#292524] transition-colors font-medium"
            >
              Request 30-min pilot review
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-6">
            For Boulder Community Health &nbsp;·&nbsp; Community Package Brief
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#292524] leading-[1.08] mb-8">
            AI-native healthcare infrastructure is being built in Boulder.
            <br />
            <span className="text-[#4A6741]">BCH can be the reference system, or license it retrofit in 2029.</span>
          </h1>
          <p className="text-xl text-[#57534E] leading-relaxed max-w-3xl mb-10">
            We built the rails for ourselves — physician-supervised, community-owned, CMS-aligned.
            They work today. The community is already asking BCH to partner.
            You choose the on-ramp. Both cost less than one FTE in year one.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="#on-ramps"
              className="inline-block px-8 py-4 rounded-full text-base font-semibold bg-[#4A6741] text-white hover:bg-[#292524] transition-colors shadow-sm text-center"
            >
              See the two on-ramps
            </a>
            <a
              href="#pilot"
              className="inline-block px-8 py-4 rounded-full text-base font-semibold bg-white text-[#4A6741] border border-[#4A6741]/30 hover:border-[#4A6741] hover:bg-[#F0F5EE] transition-colors text-center"
            >
              90-day pilot terms &rarr;
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#57534E]/70">
            <span className="flex items-center gap-1.5"><Dot />Less than one FTE cost</span>
            <span className="flex items-center gap-1.5"><Dot />Existing CMS codes</span>
            <span className="flex items-center gap-1.5"><Dot />No EMR integration year 1</span>
            <span className="flex items-center gap-1.5"><Dot />BCH-branded, white-label ready</span>
          </div>
        </div>
      </section>

      {/* The framing */}
      <section className="py-20 px-6 bg-[#F0F5EE]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-6 tracking-tight">
            This is not a vendor pitch.
          </h2>
          <p className="text-lg text-[#57534E] leading-relaxed mb-6">
            AI-native healthcare infrastructure is being built in Boulder at the community level and flowing up into
            the health system — not the other way around. Families are signing up to participate. Caregivers are
            pledging to work for equity and dignity instead of agency wages. Josh Emdur DO provides the 50-state
            medical oversight layer. The rails use existing CMS codes (G0019 CHI, TCM 99495/96, CCM, ACP) and HSA/FSA
            pre-tax dollars via ComfortCard.
          </p>
          <p className="text-lg text-[#57534E] leading-relaxed">
            BCH has two natural places to participate. Both demonstrate value inside a 90-day pilot. Neither asks BCH
            to rip out Epic, retrain staff, or carry risk. Both produce a weekly outcomes report your leadership
            can review.
          </p>
        </div>
      </section>

      {/* The two on-ramps */}
      <section id="on-ramps" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4 text-center">
            Pick your on-ramp
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-16 text-center tracking-tight">
            Two ways BCH joins the infrastructure.
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* On-ramp 1: Orthopedic Revenue Recovery */}
            <div className="bg-white rounded-2xl p-8 border border-[#C5D4B5]/50 shadow-sm">
              <p className="text-xs tracking-[0.2em] uppercase text-[#4A6741] font-semibold mb-3">
                On-ramp 1
              </p>
              <h3 className="text-2xl font-bold text-[#292524] mb-4 tracking-tight">
                Orthopedic revenue recovery
              </h3>
              <p className="text-[#57534E] leading-relaxed mb-5">
                BCH&apos;s employed orthopedic group leaves $80–140K per surgeon per year in documented-but-unbilled
                care. Wonder Bill, our 2026 Medicare-coded billing agent, reads an encounter note and returns a
                structured list of recoverable codes in under 20 seconds.
              </p>
              <ul className="space-y-3 text-sm text-[#57534E] mb-6">
                <li className="flex gap-3">
                  <span className="text-[#4A6741] font-bold">·</span>
                  <span>Paste a patient note in the meeting. Watch codes surface live.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A6741] font-bold">·</span>
                  <span>G2211, TCM 99495/96, CCM, BHI, RTM 98975–81, modifier-25 scans — all 2026 allowables.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A6741] font-bold">·</span>
                  <span>PHI stripped server-side before any inference. No note leaves BCH&apos;s network unprotected.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A6741] font-bold">·</span>
                  <span>Revenue attribution is clean: recovered dollars flow to BCH&apos;s P&amp;L, we take a flat per-encounter fee.</span>
                </li>
              </ul>
              <div className="pt-5 border-t border-[#C5D4B5]/40 text-sm text-[#57534E]/70">
                <strong className="text-[#292524]">Demo artifact:</strong> surgeonvalue.com/wonder-bill — bring an encounter note.
              </div>
            </div>

            {/* On-ramp 2: Discharge-to-Home */}
            <div className="bg-white rounded-2xl p-8 border border-[#C5D4B5]/50 shadow-sm">
              <p className="text-xs tracking-[0.2em] uppercase text-[#4A6741] font-semibold mb-3">
                On-ramp 2
              </p>
              <h3 className="text-2xl font-bold text-[#292524] mb-4 tracking-tight">
                Discharge-to-home
              </h3>
              <p className="text-[#57534E] leading-relaxed mb-5">
                BCH&apos;s discharge planners send aging patients home to a gap. We hold them in their own homes with
                our community caregiver network, Josh Emdur DO as the medical director of record, and family
                payment routed through HSA/FSA pre-tax rails.
              </p>
              <ul className="space-y-3 text-sm text-[#57534E] mb-6">
                <li className="flex gap-3">
                  <span className="text-[#4A6741] font-bold">·</span>
                  <span>20 discharges over 90 days. BCH-branded intake link for your case managers.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A6741] font-bold">·</span>
                  <span>Josh&apos;s 50-state licensure handles LMN attestation and incident-to billing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A6741] font-bold">·</span>
                  <span>CMS revenue streams: G0019 CHI, TCM 99495/96, CCM, ACP, RTM — stacked per patient.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#4A6741] font-bold">·</span>
                  <span>Weekly ER-avoidance and care-hours-delivered report back to BCH leadership.</span>
                </li>
              </ul>
              <div className="pt-5 border-t border-[#C5D4B5]/40 text-sm text-[#57534E]/70">
                <strong className="text-[#292524]">Proof points:</strong> first family live (Jess Dion&apos;s father, &lt;1 mile from BCH). Josh has the medical oversight agreement drafted.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry validation — ARCHANGELS data */}
      <section className="py-20 px-6 bg-white border-y border-[#C5D4B5]/30">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4">
            The vital sign most organizations aren&apos;t measuring
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-8 tracking-tight leading-tight">
            Your own discharge planners are already unpaid caregivers.
          </h2>
          <p className="text-lg text-[#57534E] leading-relaxed mb-10 max-w-3xl">
            ARCHANGELS&apos; national data on healthcare staff and patient-side caregiving converges
            on the same number our community package is built around: the family caregiver is the
            hinge that moves readmission rates. Documenting and supporting that person is a clinical,
            operational, and financial issue &mdash; not a wellness talking point.
          </p>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="bg-[#F0F5EE] rounded-2xl p-6 border border-[#C5D4B5]/40">
              <div className="text-4xl font-bold text-[#4A6741] mb-2">1 in 3</div>
              <p className="text-sm text-[#57534E] leading-relaxed">
                caregivers are experiencing extreme intensity, affecting attention, sleep, and the
                outcomes of the patient they&apos;re caring for.
              </p>
            </div>
            <div className="bg-[#F0F5EE] rounded-2xl p-6 border border-[#C5D4B5]/40">
              <div className="text-4xl font-bold text-[#4A6741] mb-2">70%</div>
              <p className="text-sm text-[#57534E] leading-relaxed">
                of healthcare staff &mdash; nurses, discharge planners, MAs, social workers &mdash;
                are also unpaid caregivers at home.
              </p>
            </div>
            <div className="bg-[#F0F5EE] rounded-2xl p-6 border border-[#C5D4B5]/40">
              <div className="text-4xl font-bold text-[#4A6741] mb-2">40%</div>
              <p className="text-sm text-[#57534E] leading-relaxed">
                of patient outcomes are shaped by unpaid caregivers &mdash; most health systems
                aren&apos;t accounting for it.
              </p>
            </div>
          </div>
          <p className="text-sm text-[#57534E]/70 italic">
            Data: ARCHANGELS, Alexandra Drane (co-founder/CEO), 10th Annual Patient Experience Symposium,
            Boston, September 28&ndash;30, 2026.
          </p>
        </div>
      </section>

      {/* What BCH Gets */}
      <section className="py-20 px-6 bg-[#292524]">
        <div className="max-w-4xl mx-auto text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-[#C5D4B5] font-semibold mb-4">
            What BCH gets — either on-ramp
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 tracking-tight">
            A weekly outcomes report your leadership can actually review.
          </h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-[#C5D4B5] mb-2">Ortho on-ramp</h3>
              <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                <li>· Dollars recovered per surgeon, per week</li>
                <li>· Encounters scanned, codes flagged, compliance risk score</li>
                <li>· Surgeon time saved (estimated minutes reclaimed per encounter)</li>
                <li>· 90-day year-over-year revenue delta</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#C5D4B5] mb-2">Discharge on-ramp</h3>
              <ul className="space-y-2 text-white/70 text-sm leading-relaxed">
                <li>· ER visits avoided (vs. discharge cohort baseline)</li>
                <li>· Readmission rate delta at 30 / 60 / 90 days</li>
                <li>· Care hours delivered by the community network</li>
                <li>· CMS-billable events captured per patient</li>
              </ul>
            </div>
          </div>
          <p className="mt-10 text-white/60 text-sm border-t border-white/10 pt-6">
            No EMR integration required in year one. All data flows through a BCH-branded intake URL. PHI stays
            inside the agreed BAA perimeter. Reports are white-label, printable, and defensible.
          </p>
        </div>
      </section>

      {/* Proof */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4">
            Proof
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-12 tracking-tight">
            Real people, real code, real oversight.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#F0F5EE] rounded-xl p-6">
              <h3 className="font-bold text-[#292524] mb-2">First family live</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Jess Dion&apos;s father moved home to Boulder, &lt;1 mile from BCH. Live-in caregiver model. First
                care session already delivered. Reporter-interviewable.
              </p>
            </div>
            <div className="bg-[#F0F5EE] rounded-xl p-6">
              <h3 className="font-bold text-[#292524] mb-2">Josh Emdur DO</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                50-state licensed physician. Co-founder and medical director of record. Oversight agreement drafted.
                Available for LMN review, incident-to billing, and regulatory defense.
              </p>
            </div>
            <div className="bg-[#F0F5EE] rounded-xl p-6">
              <h3 className="font-bold text-[#292524] mb-2">Wonder Bill in production</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Live at surgeonvalue.com/wonder-bill. 2026 Medicare codes, PHI strip, structured JSON output.
                Pasteable in the meeting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pilot ask */}
      <section id="pilot" className="py-24 px-6 bg-[#4A6741]">
        <div className="max-w-4xl mx-auto text-white">
          <p className="text-xs tracking-[0.25em] uppercase text-white/70 font-semibold mb-4">
            The 90-day pilot
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">
            Thirty minutes. Two on-ramps. One yes.
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-8 max-w-3xl">
            We&apos;re asking Boulder Community Health for a 30-minute review meeting. We&apos;ll walk both on-ramps,
            run Wonder Bill live on a BCH encounter note of your choosing, and leave you with a printable 90-day
            pilot spec. No commitment required to take the meeting. No EMR integration required for the pilot.
          </p>
          <div className="bg-white/10 rounded-xl p-6 mb-8 border border-white/20">
            <p className="text-sm text-white/70 mb-2 uppercase tracking-wider">Pilot commitment (either on-ramp)</p>
            <ul className="text-white/90 space-y-2">
              <li>· 90 days, starting within 30 days of signed MOU</li>
              <li>· Ortho: 1 surgeon, 20 encounters through Wonder Bill</li>
              <li>· Discharge: 20 discharges through co-op.care with Josh as MD of record</li>
              <li>· Weekly outcomes report to designated BCH leadership contact</li>
              <li>· Costed as less than one FTE for year one — details in the pilot spec</li>
            </ul>
          </div>
          <a
            href="mailto:blaine@co-op.care?subject=Community%20Package%20Pilot%20Review%20for%20BCH"
            className="inline-block px-9 py-4 rounded-full text-base font-semibold bg-white text-[#4A6741] hover:bg-[#F0F5EE] transition-colors"
          >
            Request the 30-minute pilot review
          </a>
        </div>
      </section>

      {/* Community pressure strip */}
      <section className="py-16 px-6 bg-[#FEFCF6] border-t border-[#C5D4B5]/40">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#57534E] mb-4">
            The Boulder community is already signing on.
          </p>
          <Link
            href="/boulder"
            className="text-[#4A6741] font-semibold hover:text-[#292524] transition-colors"
          >
            See the community petition &rarr;
          </Link>
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
