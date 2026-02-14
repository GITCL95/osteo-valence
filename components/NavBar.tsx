"use client";

import { useState, useEffect } from "react";

export default function NavBar() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          navScrolled
            ? "bg-offwhite/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            : "bg-black/40 backdrop-blur-sm"
        }`}
        aria-label="Navigation principale"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
          <a
            href="#accueil"
            className={`text-xl font-semibold tracking-wide transition-colors ${
              navScrolled ? "text-sage" : "text-white"
            }`}
          >
            Ostéopathe Valence
          </a>
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#accueil"
              className={`text-sm font-medium transition-colors ${
                navScrolled ? "text-gray-700 hover:text-sage" : "text-white/95 hover:text-white"
              }`}
            >
              Accueil
            </a>
            <a
              href="#services"
              className={`text-sm font-medium transition-colors ${
                navScrolled ? "text-gray-700 hover:text-sage" : "text-white/95 hover:text-white"
              }`}
            >
              Services
            </a>
            <a
              href="#tarifs"
              className={`text-sm font-medium transition-colors ${
                navScrolled ? "text-gray-700 hover:text-sage" : "text-white/95 hover:text-white"
              }`}
            >
              Tarifs
            </a>
            <a
              href="#faq"
              className={`text-sm font-medium transition-colors ${
                navScrolled ? "text-gray-700 hover:text-sage" : "text-white/95 hover:text-white"
              }`}
            >
              FAQ
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors ${
                navScrolled ? "text-gray-700 hover:text-sage" : "text-white/95 hover:text-white"
              }`}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-sage/90"
            >
              Prendre RDV
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`rounded-lg p-2 transition-colors md:hidden ${
              navScrolled ? "text-gray-700 hover:bg-cream" : "text-white hover:bg-white/20"
            }`}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-gray-200 bg-offwhite/98 px-4 py-4 md:hidden" role="dialog" aria-label="Menu mobile">
            <div className="flex flex-col gap-2">
              <a href="#accueil" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                Accueil
              </a>
              <a href="#services" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                Services
              </a>
              <a href="#tarifs" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                Tarifs
              </a>
              <a href="#faq" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                FAQ
              </a>
              <a href="#contact" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                Contact
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-2 rounded-full bg-sage py-2.5 text-center font-medium text-white"
              >
                Prendre RDV
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
