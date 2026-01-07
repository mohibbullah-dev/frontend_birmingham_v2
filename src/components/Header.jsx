import { useState } from "react";
import { business } from "../data/business";

export default function Header() {
  const [open, setOpen] = useState(false);

  const waLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
    business.whatsappPrefill
  )}`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/40 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-sm" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">{business.name}</div>
            <div className="text-xs text-white/70">Birmingham • 24/7 Emergency</div>
          </div>
        </a>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={`tel:${business.phoneTel}`}
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/15"
          >
            Call
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:opacity-90"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 p-2 text-white sm:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className="text-lg">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950/50 sm:hidden">
          <div className="mx-auto max-w-5xl px-4 py-3">
            <div className="flex gap-2">
              <a
                href={`tel:${business.phoneTel}`}
                className="flex-1 rounded-xl bg-white/10 px-4 py-2 text-center text-sm font-medium text-white"
              >
                Call
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="flex-1 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 px-4 py-2 text-center text-sm font-semibold text-slate-950"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
