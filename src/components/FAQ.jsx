import { business } from "../data/business";

export default function FAQ() {
  return (
    <section data-reveal="delay-3" className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">FAQs</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {business.faqs.map((f) => (
            <div key={f.q} className="glass rounded-2xl p-6">
              <div className="text-base font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-white/75">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
