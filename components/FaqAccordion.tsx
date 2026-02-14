"use client";

import { useState } from "react";

export type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="rounded-xl bg-white border border-bluegray/20 shadow-sm overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-800 hover:bg-cream/30 transition"
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
            id={`faq-trigger-${i}`}
          >
            <span>{item.q}</span>
            <span
              className={`ml-2 shrink-0 text-sage transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              aria-hidden
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          <div
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-trigger-${i}`}
            hidden={openIndex !== i}
            className="border-t border-bluegray/20 px-6 py-4 text-gray-600 text-sm leading-relaxed"
          >
            {item.a}
          </div>
        </div>
      ))}
    </div>
  );
}
