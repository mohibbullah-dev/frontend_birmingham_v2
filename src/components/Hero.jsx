import { business } from "../data/business";

export default function Hero() {
  const waLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappPrefill
  )}`;

  return (
    <section id="top" className="relative overflow-hidden px-4 pt-12 pb-10">
      {/* background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-slate-950/30" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Top chip */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Serving {business.city} • Same-day slots when available
        </div>

        {/* Headline */}
        <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
          {business.tagline}
        </h1>

        {/* Subheadline */}
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
          Leaks, burst pipes, blocked drains, toilets, taps and installations. Friendly local service with
          clear pricing and fast response.
        </p>

        {/* CTAs */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`tel:${business.phoneTel}`}
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 shadow-sm hover:opacity-95"
          >
            <span>📞</span> Call Now
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
          >
            <span>💬</span> WhatsApp
          </a>

          <div className="text-sm text-white/70">{business.serviceHours}</div>
        </div>

        {/* Trust badges */}
        <div className="mt-8 grid gap-2 sm:grid-cols-4">
          {(business.trustBadges ?? []).map((b) => (
            <div key={b} className="glass rounded-2xl px-4 py-3 text-sm text-white/85">
              <span className="mr-2 text-emerald-300">✓</span>
              {b}
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {business.highlights.map((h) => (
            <div key={h.title} className="glass rounded-2xl p-5">
              <div className="text-base font-semibold">{h.title}</div>
              <div className="mt-2 text-sm text-white/70">{h.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
