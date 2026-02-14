"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SERVICE_LINKS = [
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif" },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-femme-enceinte", label: "Femme enceinte" },
  { href: "/osteopathe-dos", label: "Mal de dos" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
];

export default function NavBar() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
  };

  const linkClass = (scrolled: boolean) =>
    scrolled ? "text-gray-700 hover:text-sage" : "text-white/95 hover:text-white";

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
          <Link
            href="/"
            className={`text-xl font-semibold tracking-wide transition-colors ${
              navScrolled ? "text-sage" : "text-white"
            }`}
          >
            Ostéopathe Valence
          </Link>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/" className={`text-sm font-medium transition-colors ${linkClass(navScrolled)}`}>
              Accueil
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 text-sm font-medium transition-colors ${linkClass(navScrolled)}`}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <svg
                  className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-1">
                  <div className="card-shadow rounded-xl border border-bluegray/20 bg-white py-2 min-w-[220px]">
                    {SERVICE_LINKS.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cream/50 hover:text-sage transition"
                      >
                        {label}
                      </Link>
                    ))}
                    <div className="my-1 border-t border-bluegray/20" />
                    <Link
                      href="/tarifs"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cream/50 hover:text-sage transition"
                    >
                      Tarifs
                    </Link>
                    <Link
                      href="/blog"
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-cream/50 hover:text-sage transition"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/#tarifs" className={`text-sm font-medium transition-colors ${linkClass(navScrolled)}`}>
              Tarifs
            </Link>
            <Link href="/#faq" className={`text-sm font-medium transition-colors ${linkClass(navScrolled)}`}>
              FAQ
            </Link>
            <Link href="/#contact" className={`text-sm font-medium transition-colors ${linkClass(navScrolled)}`}>
              Contact
            </Link>
            <Link
              href="/#contact"
              className="rounded-full bg-sage px-5 py-2.5 text-sm font-medium text-white shadow-md transition hover:bg-sage/90"
            >
              Prendre RDV
            </Link>
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
          <div
            className="border-t border-gray-200 bg-offwhite/98 px-4 py-4 md:hidden"
            role="dialog"
            aria-label="Menu mobile"
          >
            <div className="flex flex-col gap-1">
              <Link href="/" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                Accueil
              </Link>
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex w-full items-center justify-between py-2 font-medium text-gray-700"
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <svg
                    className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 pb-2 flex flex-col gap-1">
                    {SERVICE_LINKS.map(({ href, label }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMobileMenu}
                        className="py-1.5 text-sm text-gray-600 hover:text-sage"
                      >
                        {label}
                      </Link>
                    ))}
                    <Link href="/tarifs" onClick={closeMobileMenu} className="py-1.5 text-sm text-gray-600 hover:text-sage">
                      Tarifs
                    </Link>
                    <Link href="/blog" onClick={closeMobileMenu} className="py-1.5 text-sm text-gray-600 hover:text-sage">
                      Blog
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/#tarifs" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                Tarifs
              </Link>
              <Link href="/#faq" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                FAQ
              </Link>
              <Link href="/#contact" onClick={closeMobileMenu} className="py-2 font-medium text-gray-700">
                Contact
              </Link>
              <Link
                href="/#contact"
                onClick={closeMobileMenu}
                className="mt-2 rounded-full bg-sage py-2.5 text-center font-medium text-white"
              >
                Prendre RDV
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
