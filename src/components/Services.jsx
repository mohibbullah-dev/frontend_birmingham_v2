import { business } from "../data/business";

function DotIcon() {
  return <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-300" />;
}

export default function Services() {
  const waLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappPrefill
  )}`;

  return (
    <section data-reveal="delay-1" className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Plumbing services</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/70">
              Quick, clean work — with a clear quote before anything starts.
            </p>
          </div>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-2xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 sm:inline-flex"
          >
            Message on WhatsApp
          </a>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {business.services.map((s) => (
            <div key={s.title} className="glass rounded-2xl p-5">
              <div className="text-base font-semibold">{s.title}</div>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <DotIcon />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
