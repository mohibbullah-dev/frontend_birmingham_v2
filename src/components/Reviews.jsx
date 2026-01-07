import { business } from "../data/business";

function Stars({ rating = 5 }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-amber-300">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section data-reveal="delay-2" className="px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Customer reviews</h2>
            <p className="mt-2 text-sm text-white/70">{business.reviewsNote}</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {business.reviews.map((r) => (
            <div key={r.name} className="glass rounded-2xl p-6">
              <Stars rating={r.rating} />
              <p className="mt-3 text-sm text-white/80">“{r.text}”</p>
              <div className="mt-4 text-sm font-semibold text-white/90">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
