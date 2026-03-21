import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import FloatingCTA from "@/components/FloatingCTA";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/blog/`;

export const metadata: Metadata = {
  title: "Blog Ostéopathe Valence (26000) – Conseils & Questions | Cabinet D.O.",
  description:
    "Blog ostéopathie à Valence (26000). Acouphènes, sciatique, fatigue après séance. Conseils et réponses de votre ostéopathe D.O. ☎ Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Blog Ostéopathe Valence | Cabinet D.O.",
    description:
      "Blog ostéopathie à Valence (26000). Acouphènes, sciatique, fatigue après séance. Conseils et réponses de votre ostéopathe D.O.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Blog ostéopathe à Valence" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog – Ostéopathe Valence",
  description: "Articles et conseils en ostéopathie à Valence (26000).",
  url: canonical,
  publisher: {
    "@type": "MedicalBusiness",
    name: "Ostéopathe Valence",
    url: BASE,
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: canonical },
  ],
};

const ARTICLES = [
  {
    slug: "meilleur-osteopathe-valence",
    badge: "Sélection 2026",
    title: "Meilleur ostéopathe à Valence (26000) : notre sélection 2026",
    excerpt:
      "Découvrez les 10 meilleurs ostéopathes à Valence. Diplômes, spécialités, adresses et conseils pour bien choisir votre praticien.",
    icon: (
      <svg className="w-16 h-16 text-sage/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    slug: "combien-seances-osteopathie-sciatique",
    badge: "Sciatique",
    title: "Combien de séances d'ostéopathie pour une sciatique ?",
    excerpt:
      "La sciatique est l'un des motifs les plus fréquents en ostéopathie. Découvrez combien de séances prévoir selon votre cas.",
    icon: (
      <svg className="w-16 h-16 text-sage/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    slug: "osteopathe-acouphene",
    badge: "Acouphènes",
    title: "Ostéopathe et acouphènes : que peut faire l'ostéopathie ?",
    excerpt:
      "Les acouphènes peuvent avoir une composante mécanique. L'ostéopathe explique son approche cervicale et crânienne.",
    icon: (
      <svg className="w-16 h-16 text-sage/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    slug: "fatigue-apres-osteopathe",
    badge: "Après séance",
    title: "Fatigue après une séance d'ostéopathie : est-ce normal ?",
    excerpt:
      "Vous vous sentez fatigué après votre séance ? C'est une réaction fréquente et normale. On vous explique pourquoi.",
    icon: (
      <svg className="w-16 h-16 text-sage/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
  },
];

const ALL_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/osteopathe-dos", label: "Mal de dos" },
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif" },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-femme-enceinte", label: "Femme enceinte" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
  { href: "/tarifs", label: "Tarifs" },
];

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingCTA />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <ScrollAnimations>
          {/* Hero */}
          <SectionReveal className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-gray-500">
                <Link href="/" className="hover:text-sage">Accueil</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-medium">Blog</span>
              </nav>
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
                Blog – Ostéopathe à Valence (26000)
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Conseils, questions fréquentes et informations sur l&apos;ostéopathie.
              </p>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          {/* Grille articles */}
          <SectionReveal className="py-16 md:py-20 px-4 md:px-8 bg-offwhite" animate="fade-up">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {ARTICLES.map((article) => (
                  <article
                    key={article.slug}
                    className="rounded-2xl bg-white border border-bluegray/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden hover:shadow-lg hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                  >
                    <Link href={`/blog/${article.slug}`} className="block">
                      <div className="h-48 bg-sage/20 flex items-center justify-center">
                        {article.icon}
                      </div>
                      <div className="p-6">
                        <span className="inline-block rounded-full bg-sage/10 text-sage px-3 py-1 text-xs font-medium mb-3">
                          {article.badge}
                        </span>
                        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
                          {article.title}
                        </h2>
                        <p className="mt-3 text-sm text-gray-600 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <span className="mt-4 inline-block text-sm font-medium text-sage hover:underline">
                          Lire la suite →
                        </span>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Maillage */}
          <SectionReveal className="py-16 md:py-20 px-4 md:px-8 bg-offwhite border-t border-bluegray/20" animate="fade-up">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-xl font-light text-gray-800 md:text-2xl text-center mb-4">Nos autres soins et pages</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-8" aria-hidden />
              <div className="flex flex-wrap justify-center gap-4">
                {ALL_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="link-lire-la-suite rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage hover:scale-[1.02] hover:-translate-y-1"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </SectionReveal>
        </ScrollAnimations>
      </main>
    </>
  );
}
