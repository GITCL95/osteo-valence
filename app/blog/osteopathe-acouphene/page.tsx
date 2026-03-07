import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import FloatingCTA from "@/components/FloatingCTA";
import LatestArticlesBanner from "@/components/LatestArticlesBanner";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/blog/osteopathe-acouphene/`;

export const metadata: Metadata = {
  title: "Ostéopathe et Acouphènes : L'Ostéopathie Peut-Elle Aider ? | Valence",
  description:
    "Acouphènes et ostéopathie à Valence (26000) : approche cervicale et crânienne, causes mécaniques, nombre de séances. ☎ Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe et Acouphènes : L'Ostéopathie Peut-Elle Aider ? | Valence",
    description:
      "Acouphènes et ostéopathie à Valence (26000) : approche cervicale et crânienne, causes mécaniques, nombre de séances.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "article",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Ostéopathe acouphènes Valence" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ostéopathe et acouphènes : que peut faire l'ostéopathie ?",
  description:
    "Les acouphènes peuvent avoir une composante mécanique. L'ostéopathe explique son approche cervicale et crânienne à Valence.",
  author: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE },
  publisher: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE },
  datePublished: "2026-03-01",
  dateModified: "2026-03-01",
  mainEntityOfPage: canonical,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "L'ostéopathe peut-il faire disparaître les acouphènes ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'ostéopathie ne guérit pas les acouphènes d'origine ORL pure. En revanche, lorsqu'une composante mécanique (cervicales, mâchoire, crâne) est présente, l'ostéopathe à Valence peut réduire l'intensité et améliorer le confort au quotidien.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte une séance pour les acouphènes à Valence ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La consultation adulte est à 55€ au cabinet avenue Victor Hugo, Valence (26000). Facture pour mutuelle.",
      },
    },
    {
      "@type": "Question",
      name: "Les acouphènes peuvent-ils venir des cervicales ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui. Les cervicales hautes (C1-C2) sont en lien direct avec l'oreille interne. Des tensions ou blocages à ce niveau peuvent provoquer ou aggraver des acouphènes. C'est ce qu'on appelle les acouphènes somato-sensoriels.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog/` },
    {
      "@type": "ListItem",
      position: 3,
      name: "Ostéopathe et acouphènes",
      item: canonical,
    },
  ],
};

const linkClass = "text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage";

export default function ArticleAcouphenesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingCTA />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <ScrollAnimations>
          {/* Hero */}
          <SectionReveal className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-3xl">
              <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-gray-500">
                <Link href="/" className="hover:text-sage">Accueil</Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-sage">Blog</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-medium">Ostéopathe et acouphènes</span>
              </nav>
              <span className="inline-block rounded-full bg-sage/10 text-sage px-3 py-1 text-xs font-medium mb-4">Acouphènes</span>
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
                Ostéopathe et Acouphènes : Que Peut Faire l&apos;Ostéopathie ?
              </h1>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          {/* Contenu */}
          <SectionReveal className="py-12 md:py-16 px-4 md:px-8 bg-offwhite" animate="fade-up">
            <article className="mx-auto max-w-3xl prose-sm space-y-8">
              <p className="text-gray-600 leading-relaxed">
                Les acouphènes — ces bourdonnements ou sifflements perçus sans source sonore extérieure — touchent environ 15 % de la population. Si la cause est souvent ORL, une composante mécanique (cervicales, mâchoire, crâne) peut entretenir ou aggraver les symptômes. Votre{" "}
                <Link href="/" className={linkClass}>ostéopathe à Valence</Link>
                {" "}peut intervenir sur ces composantes mécaniques pour réduire l&apos;intensité des acouphènes.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Les causes mécaniques des acouphènes</h2>
              <p className="text-gray-600 leading-relaxed">
                Les tensions au niveau des cervicales hautes (C0-C1-C2) peuvent perturber la vascularisation de l&apos;oreille interne et les informations nerveuses qui transitent vers le système auditif. Les tensions de la mâchoire (ATM) et du crâne (os temporal) sont également impliquées. L&apos;
                <Link href="/osteopathe-dos" className={linkClass}>ostéopathe du dos</Link>
                {" "}connaît bien les cervicalgies ; l&apos;approche des acouphènes prolonge ce travail vers le crâne et la mâchoire.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Comment l&apos;ostéopathe travaille sur les acouphènes</h2>
              <p className="text-gray-600 leading-relaxed">
                L&apos;ostéopathe D.O. réalise un bilan complet : cervicales, crâne, mâchoire (ATM), posture globale. Les techniques utilisées sont douces : mobilisations cervicales, techniques crâniennes (temporaux, sphénoïde), travail sur l&apos;ATM et les muscles masticateurs. Il ne s&apos;agit pas de &ldquo;guérir&rdquo; l&apos;acouphène mais de réduire les facteurs mécaniques qui l&apos;entretiennent.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Combien de séances pour les acouphènes ?</h2>
              <p className="text-gray-600 leading-relaxed">
                En général, 3 à 5 séances espacées de 2 à 3 semaines permettent d&apos;évaluer l&apos;effet de l&apos;ostéopathie sur les acouphènes. Si une amélioration est constatée (baisse de l&apos;intensité, meilleure tolérance), un suivi à plus long terme peut être proposé. Chez les{" "}
                <Link href="/osteopathe-senior" className={linkClass}>seniors</Link>
                , les acouphènes sont fréquents et l&apos;approche ostéopathique est adaptée à l&apos;âge.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Quand consulter un ORL en priorité</h2>
              <p className="text-gray-600 leading-relaxed">
                Si les acouphènes sont apparus brutalement, sont accompagnés d&apos;une perte d&apos;audition, de vertiges ou de douleurs intenses, un bilan ORL est prioritaire. L&apos;ostéopathie intervient en complément, pas en remplacement du suivi médical.
              </p>

              {/* FAQ */}
              <div className="mt-10 space-y-6 rounded-2xl bg-cream/50 border border-bluegray/20 p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800">Questions fréquentes</h2>
                <div className="space-y-5">
                  <div>
                    <p className="font-medium text-gray-800">L&apos;ostéopathe peut-il faire disparaître les acouphènes ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">L&apos;ostéopathie ne guérit pas les acouphènes d&apos;origine ORL pure. En revanche, lorsqu&apos;une composante mécanique (cervicales, mâchoire, crâne) est présente, l&apos;ostéopathe à Valence peut réduire l&apos;intensité et améliorer le confort au quotidien.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Combien coûte une séance pour les acouphènes à Valence ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">La consultation adulte est à 55€ au cabinet avenue Victor Hugo, Valence (26000). Facture pour mutuelle.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Les acouphènes peuvent-ils venir des cervicales ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">Oui. Les cervicales hautes (C1-C2) sont en lien direct avec l&apos;oreille interne. Des tensions ou blocages à ce niveau peuvent provoquer ou aggraver des acouphènes. C&apos;est ce qu&apos;on appelle les acouphènes somato-sensoriels.</p>
                  </div>
                </div>
              </div>
            </article>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous pour vos acouphènes à Valence</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">Consultation adulte : <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.</p>
              <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Demander un rendez-vous</Link>
              <p className="mt-3 text-sm text-gray-600">
                ou appelez le <a href="tel:+33757905188" className="text-sage font-medium underline">+33 7 57 90 51 88</a>
              </p>
            </div>
          </SectionReveal>

          {/* Autres articles */}
          <LatestArticlesBanner exclude="osteopathe-acouphene" />

          {/* Retour blog */}
          <SectionReveal className="py-8 px-4 md:px-8 bg-offwhite border-t border-bluegray/20" animate="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <Link href="/blog" className="inline-block rounded-full border border-sage/50 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-cream/50 hover:text-sage">
                ← Retour au blog
              </Link>
            </div>
          </SectionReveal>
        </ScrollAnimations>
      </main>
    </>
  );
}
