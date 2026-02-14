"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const STORAGE_KEY = "osteo-valence-cookies";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === null) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "accepted");
    } catch {}
    setVisible(false);
  };

  const refuse = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "refused");
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-bluegray/20 bg-white/90 backdrop-blur-lg shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      role="dialog"
      aria-label="Choix des cookies"
    >
      <div className="mx-auto max-w-6xl px-4 py-4 md:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Ce site utilise des cookies pour améliorer votre expérience. En continuant votre navigation, vous acceptez leur utilisation.{" "}
          <Link href="/politique-confidentialite" className="text-sage hover:underline">
            En savoir plus
          </Link>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={refuse}
            className="rounded-lg border-2 border-gray-300 bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-sage px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-sage/90"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
