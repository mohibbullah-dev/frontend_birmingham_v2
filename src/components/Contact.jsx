import { business } from "../data/business";

export default function Contact() {
  return (
    <section data-reveal="delay-3" className="px-4 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Get a quick quote</h2>
          <p className="mt-2 text-sm text-white/70">
            Call now for emergencies, or message on WhatsApp for a fast reply.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${business.phoneTel}`}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 text-base font-semibold text-slate-950 hover:opacity-95"
            >
              📞 Call {business.phoneDisplay}
            </a>

            <a
              href={`https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
                business.whatsappPrefill
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 px-6 py-3 text-base font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              💬 WhatsApp
            </a>
          </div>

          <div className="mt-6 text-xs text-white/55">
            Demo website concept for local plumbing businesses in Birmingham, UK.
          </div>
        </div>
      </div>
    </section>
  );
}
