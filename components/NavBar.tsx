"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

/* Icônes 20x20 pour le mega menu (couleur sage) */
const IconSport = () => (
  <svg className="h-5 w-5 shrink-0 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const IconBebe = () => (
  <svg className="h-5 w-5 shrink-0 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconFemmeEnceinte = () => (
  <svg className="h-5 w-5 shrink-0 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconDos = () => (
  <svg className="h-5 w-5 shrink-0 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const IconSenior = () => (
  <svg className="h-5 w-5 shrink-0 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);

const SERVICE_LINKS = [
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif", description: "Blessures, récupération, performance", Icon: IconSport },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé", description: "Coliques, torticolis, plagiocéphalie", Icon: IconBebe },
  { href: "/osteopathe-femme-enceinte", label: "Femme enceinte", description: "Grossesse, préparation, post-partum", Icon: IconFemmeEnceinte },
  { href: "/osteopathe-dos", label: "Mal de dos", description: "Lombalgie, sciatique, hernie discale", Icon: IconDos },
  { href: "/osteopathe-senior", label: "Ostéopathe senior", description: "Mobilité, arthrose, prévention chutes", Icon: IconSenior },
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
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/logo.png"
              alt="Pauline Odeyer – Ostéopathe D.O."
              width={48}
              height={48}
              className="h-12 w-12 rounded-full object-cover"
              priority
            />
            <span
              className={`hidden sm:block text-lg font-semibold tracking-wide transition-colors ${
                navScrolled ? "text-sage" : "text-white"
              }`}
            >
              Pauline Odeyer
            </span>
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
                <div className="absolute left-0 top-full pt-2">
                  <div
                    className="animate-mega-menu-in w-[500px] rounded-2xl border border-white/50 bg-white/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)] backdrop-blur-xl"
                    role="menu"
                  >
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICE_LINKS.map(({ href, label, description, Icon }) => (
                        <Link
                          key={href}
                          href={href}
                          role="menuitem"
                          className="flex items-start gap-3 rounded-xl p-3 transition-all hover:bg-sage/5"
                        >
                          <Icon />
                          <div className="min-w-0">
                            <span className="block font-semibold text-gray-800">{label}</span>
                            <span className="block text-xs text-gray-500">{description}</span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 border-t border-gray-100 pt-3">
                      <Link
                        href="/tarifs"
                        className="inline-flex items-center gap-1 text-sm font-medium text-sage transition-colors hover:text-sage/80"
                      >
                        Voir tous les tarifs
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
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
            <Link href="/blog" className={`text-sm font-medium transition-colors ${linkClass(navScrolled)}`}>
              Blog
            </Link>
            <Link href="/#contact" className={`text-sm font-medium transition-colors ${linkClass(navScrolled)}`}>
              Contact
            </Link>
            <a
              href="https://www.doctolib.fr/osteopathe/saint-lattier/pauline-odeyer"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#5d2ca8] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#4a2388] hover:scale-105 active:scale-95"
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
                    {SERVICE_LINKS.map(({ href, label, Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        onClick={closeMobileMenu}
                        className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-sage"
                      >
                        <Icon />
                        <span>{label}</span>
                      </Link>
                    ))}
                    <Link href="/tarifs" onClick={closeMobileMenu} className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-sage">
                      <svg className="h-5 w-5 shrink-0 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      Tarifs
                    </Link>
                    <Link href="/blog" onClick={closeMobileMenu} className="flex items-center gap-3 py-2.5 text-sm text-gray-600 hover:text-sage">
                      <svg className="h-5 w-5 shrink-0 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
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
              <a
                href="https://www.doctolib.fr/osteopathe/saint-lattier/pauline-odeyer"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="mt-2 rounded-full bg-sage py-2.5 text-center font-medium text-white block"
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
