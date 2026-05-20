import Link from "next/link";

export const metadata = {
  title: "Sage, your DPC partner — co-op.care × Altru.care",
  description:
    "The first AI-native Direct Primary Care membership. Josh Emdur DO as the 50-state physician of record. Sage as your AI co-pilot. ComfortCard as the HSA rail. $129/month, HSA-eligible under DPCSA.",
};

function Dot() {
  return <span className="w-1.5 h-1.5 rounded-full bg-[#4A6741] inline-block" />;
}

export default function DPCPage() {
  return (
    <div className="min-h-screen bg-[#FEFCF6]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFCF6]/95 backdrop-blur-md border-b border-[#C5D4B5]/40">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/icon.svg" alt="co-op.care" className="w-8 h-8 rounded-lg" />
            <span className="text-base font-bold tracking-tight text-[#292524]">co-op.care</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/membership" className="hidden sm:block text-sm text-[#57534E] hover:text-[#4A7C59] transition-colors">
              Membership tiers
            </Link>
            <a
              href="/assess"
              className="text-sm px-4 py-2 bg-[#4A6741] text-white rounded-full hover:bg-[#292524] transition-colors font-medium"
            >
              Start with Sage
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-5">
            Direct Primary Care &middot; HSA-eligible under DPCSA
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#292524] leading-[1.06] mb-8">
            Not a signature factory.<br />
            <span className="text-[#4A6741]">The first AI-native DPC.</span>
          </h1>
          <p className="text-xl text-[#57534E] leading-relaxed max-w-3xl mb-4">
            Your DPC membership bundles a physician who owns his practice, an AI co-pilot that actually
            knows your family, a digital ComfortCard in your Apple Wallet, and access to the
            caregiver cooperative when you need hands on deck.
          </p>
          <p className="text-lg text-[#57534E] leading-relaxed max-w-3xl mb-10">
            One membership, $129/month. HSA-compatible. Same-day access. One clinical accountability &mdash;
            and it belongs to a physician, not a dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <a
              href="/assess"
              className="inline-block px-8 py-4 rounded-full text-base font-semibold bg-[#4A6741] text-white hover:bg-[#292524] transition-colors shadow-sm text-center"
            >
              Talk to Sage about DPC
            </a>
            <a
              href="https://altru.care"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full text-base font-semibold bg-white text-[#4A6741] border border-[#4A6741]/30 hover:border-[#4A6741] hover:bg-[#F0F5EE] transition-colors text-center"
            >
              Meet the practice &rarr;
            </a>
          </div>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#57534E]/70">
            <span className="flex items-center gap-1.5"><Dot />50-state physician of record</span>
            <span className="flex items-center gap-1.5"><Dot />Under $150/mo = HSA-eligible</span>
            <span className="flex items-center gap-1.5"><Dot />Sage + ComfortCard included</span>
            <span className="flex items-center gap-1.5"><Dot />Cancel any time</span>
          </div>
        </div>
      </section>

      {/* The bundle */}
      <section className="py-20 px-6 bg-white border-y border-[#C5D4B5]/30">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-3 text-center">
            One icon on your home screen
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-14 text-center tracking-tight">
            Four layers. One membership. One accountability.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="bg-[#FEFCF6] rounded-2xl p-6 border border-[#C5D4B5]/30">
              <p className="text-xs uppercase tracking-wider text-[#4A6741] font-semibold mb-3">Layer 1</p>
              <h3 className="font-bold text-[#292524] text-lg mb-2">Sage</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                24/7 AI co-pilot. Knows your family graph. Answers in seconds. Escalates to your
                physician when the moment calls for it.
              </p>
            </div>
            <div className="bg-[#FEFCF6] rounded-2xl p-6 border border-[#C5D4B5]/30">
              <p className="text-xs uppercase tracking-wider text-[#4A6741] font-semibold mb-3">Layer 2</p>
              <h3 className="font-bold text-[#292524] text-lg mb-2">Your DPC physician</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                Josh Emdur DO, 50-state licensed, signs every clinical document personally. Unlimited
                virtual visits. Same-day access.
              </p>
            </div>
            <div className="bg-[#FEFCF6] rounded-2xl p-6 border border-[#C5D4B5]/30">
              <p className="text-xs uppercase tracking-wider text-[#4A6741] font-semibold mb-3">Layer 3</p>
              <h3 className="font-bold text-[#292524] text-lg mb-2">ComfortCard</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                HSA/FSA-loaded, Apple Wallet-installable digital ID. Emergency QR/NFC for first
                responders. The payment rail that funds the whole stack.
              </p>
            </div>
            <div className="bg-[#FEFCF6] rounded-2xl p-6 border border-[#C5D4B5]/30">
              <p className="text-xs uppercase tracking-wider text-[#4A6741] font-semibold mb-3">Layer 4</p>
              <h3 className="font-bold text-[#292524] text-lg mb-2">Caregiver co-op</h3>
              <p className="text-sm text-[#57534E] leading-relaxed">
                W-2 neighbors earning $25-28/hr + cooperative equity. Matched by Sage. Paid through
                ComfortCard. For the hands-on hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What piecework looked like */}
      <section className="py-20 px-6 bg-[#F0F5EE]">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4">
            Why "not a signature factory"
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-6 tracking-tight leading-tight">
            Piecework healthcare makes doctors transactional. DPC makes them accountable.
          </h2>
          <p className="text-lg text-[#57534E] leading-relaxed mb-4">
            The legacy model pays physicians per signature, per click, per code. That creates a signature
            factory &mdash; fast volume, no relationship, no accountability for what happens next.
          </p>
          <p className="text-lg text-[#57534E] leading-relaxed mb-4">
            Direct Primary Care flips the math. Your physician is paid a flat monthly fee to actually
            know you. They answer the phone. They handle your LMN, your care plan, your prior auth.
            They own the clinical relationship.
          </p>
          <p className="text-lg text-[#57534E] leading-relaxed">
            Altru.care is that practice. Sage is the AI that scales it. ComfortCard is the rail. co-op.care
            is the caregiver layer for the hands-on work. One membership, one accountability.
          </p>
        </div>
      </section>

      {/* The math */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.25em] uppercase text-[#4A6741] font-semibold mb-4 text-center">
            The math
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#292524] mb-14 text-center tracking-tight">
            $129/month pays for itself in the first LMN.
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <div className="bg-white rounded-2xl p-7 border border-[#C5D4B5]/40 text-center">
              <div className="text-3xl font-bold text-[#4A6741] mb-2">$129/mo</div>
              <div className="text-sm font-semibold text-[#292524] mb-2">Membership fee</div>
              <div className="text-xs text-[#57534E] leading-relaxed">
                Flat monthly, HSA-eligible under DPCSA. Cancel any time.
              </div>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-[#C5D4B5]/40 text-center">
              <div className="text-3xl font-bold text-[#4A6741] mb-2">$199+</div>
              <div className="text-sm font-semibold text-[#292524] mb-2">LMN value, included</div>
              <div className="text-xs text-[#57534E] leading-relaxed">
                What piecework practices charge per letter. In DPC, it's a feature.
              </div>
            </div>
            <div className="bg-white rounded-2xl p-7 border border-[#C5D4B5]/40 text-center">
              <div className="text-3xl font-bold text-[#4A6741] mb-2">~32%</div>
              <div className="text-sm font-semibold text-[#292524] mb-2">Pre-tax savings</div>
              <div className="text-xs text-[#57534E] leading-relaxed">
                HSA/FSA pays with pre-tax dollars, at your marginal rate. You keep the difference.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#4A6741]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight">
            Start with a conversation, not a contract.
          </h2>
          <p className="text-lg text-white/85 leading-relaxed mb-10 max-w-2xl mx-auto">
            Talk to Sage about what your family needs. If DPC is the right fit, the physician reviews
            and confirms. No commitment to book the first call.
          </p>
          <a
            href="/assess"
            className="inline-block px-10 py-4 rounded-full text-base font-semibold bg-white text-[#4A6741] hover:bg-[#F0F5EE] transition-colors"
          >
            Talk to Sage about DPC
          </a>
        </div>
      </section>

      <footer className="py-10 px-6 bg-[#1a1715]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-white/40 text-xs">
            co-op.care Technologies LLC &middot; Boulder, Colorado &middot; Worker-owned.
          </p>
          <p className="text-white/30 text-xs mt-2">
            DPC services provided by <a href="https://altru.care" className="underline hover:text-white/60">Altru.care Professional Corporation</a> &middot; Josh Emdur DO, 50-state licensed.
          </p>
        </div>
      </footer>
    </div>
  );
}
