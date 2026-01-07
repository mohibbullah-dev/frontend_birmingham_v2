import { business } from "../data/business";

export default function Pricing() {
  return (
    <section data-reveal="delay-2" className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Simple packages</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/70">
          Use these ranges when quoting your first clients. No contracts — just a clear one-time build.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {business.pricing.map((p, idx) => (
            <div
              key={p.name}
              className={
                idx === 1
                  ? "glass rounded-2xl p-6 ring-1 ring-cyan-300/40"
                  : "glass rounded-2xl p-6"
              }
            >
              <div className="flex items-baseline justify-between gap-3">
                <div className="text-base font-semibold">{p.name}</div>
                <div className="text-lg font-extrabold text-cyan-200">{p.price}</div>
              </div>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-emerald-300">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/55">
          *Pricing here is a demo guide for your outreach — adjust as needed per client.
        </p>
      </div>
    </section>
  );
}
