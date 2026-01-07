import { business } from "../data/business";

export default function FloatingButtons() {
  const waLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappPrefill
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <a
        href={`tel:${business.phoneTel}`}
        className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:opacity-95"
      >
        📞 Call
      </a>
      <a
        href={waLink}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg hover:opacity-95"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
