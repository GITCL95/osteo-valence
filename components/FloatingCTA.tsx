"use client";

import { useState, useEffect, useRef } from "react";

const TEL = "tel:+33475000000"; // À remplacer par le vrai numéro

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const contact = document.getElementById("contact");
    if (!contact) return;
    const obs = new IntersectionObserver(
      ([entry]) => setHidden(entry.isIntersecting),
      { threshold: 0.2 }
    );
    obs.observe(contact);
    return () => obs.disconnect();
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  if (hidden) return null;

  return (
    <div ref={ref} className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Sous-boutons (au-dessus du bouton principal) */}
      {open && (
        <>
          <a
            href={TEL}
            className="floating-cta-sub flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-lg transition-all duration-300 hover:bg-sage hover:text-white"
          >
            <span aria-hidden>📞</span>
            Appeler
          </a>
          <button
            type="button"
            onClick={scrollToContact}
            className="floating-cta-sub flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-gray-800 shadow-lg transition-all duration-300 hover:bg-sage hover:text-white"
            style={{ animationDelay: "0.05s" }}
          >
            <span aria-hidden>📅</span>
            Prendre RDV
          </button>
        </>
      )}
      {/* Bouton principal */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-full bg-sage text-white shadow-lg transition-all duration-300 hover:bg-sage/90 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
        aria-label={open ? "Fermer le menu contact" : "Options de contact"}
        aria-expanded={open}
      >
        <svg
          className="h-6 w-6 md:h-7 md:w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      </button>
    </div>
  );
}
