import { business } from "../data/business";

export default function Areas() {
  return (
    <section data-reveal="delay-1" className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Areas we cover</h2>
          <p className="mt-2 text-sm text-white/70">
            Serving Birmingham and nearby areas — ask if you’re not listed.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {business.areas.map((a) => (
              <div key={a} className="rounded-xl bg-white/5 px-4 py-3 text-sm text-white/80 ring-1 ring-white/10">
                {a}
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10">
            <iframe
              title="Map"
              src={business.mapEmbedUrl}
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
