import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import FloatingCTA from "@/components/FloatingCTA";
import LatestArticlesBanner from "@/components/LatestArticlesBanner";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/blog/fatigue-apres-osteopathe/`;

export const metadata: Metadata = {
  title: "Fatigue Après Ostéopathe : Est-Ce Normal ? Combien de Temps ? | Valence",
  description:
    "Fatigue après une séance d'ostéopathie : causes, durée, conseils. Réaction normale du corps. Ostéopathe à Valence (26000). ☎ Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Fatigue Après Ostéopathe : Est-Ce Normal ? Combien de Temps ? | Valence",
    description:
      "Fatigue après une séance d'ostéopathie : causes, durée, conseils. Réaction normale du corps. Ostéopathe à Valence (26000).",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "article",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Fatigue après ostéopathe Valence" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fatigue après une séance d'ostéopathie : est-ce normal ?",
  description:
    "Fatigue après une séance d'ostéopathie : causes, durée et conseils pour bien récupérer. Réaction normale du corps.",
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
      name: "Est-ce normal d'avoir plus mal après une séance d'ostéopathie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, une légère augmentation de la douleur pendant 24 à 48 heures est possible. C'est la phase de réajustement du corps. Si la douleur augmente fortement ou dure plus de 3 jours, contactez votre ostéopathe à Valence.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on faire du sport après l'ostéopathe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il est recommandé d'éviter les efforts intenses pendant 24 à 48 heures après la séance. La marche et les activités légères sont en revanche bénéfiques pour aider le corps à intégrer le traitement.",
      },
    },
    {
      "@type": "Question",
      name: "La fatigue après l'ostéo signifie-t-elle que le traitement fonctionne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pas nécessairement, mais c'est un signe que le corps réagit au traitement. L'absence de fatigue ne signifie pas que la séance a été inefficace. Chaque personne réagit différemment.",
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
      name: "Fatigue après ostéopathe",
      item: canonical,
    },
  ],
};

const linkClass = "text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage";

export default function ArticleFatiguePage() {
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
                <span className="text-gray-800 font-medium">Fatigue après ostéopathe</span>
              </nav>
              <span className="inline-block rounded-full bg-sage/10 text-sage px-3 py-1 text-xs font-medium mb-4">Après séance</span>
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
                Fatigue Après une Séance d&apos;Ostéopathie : Est-Ce Normal ?
              </h1>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          {/* Contenu */}
          <SectionReveal className="py-12 md:py-16 px-4 md:px-8 bg-offwhite" animate="fade-up">
            <article className="mx-auto max-w-3xl prose-sm space-y-8">
              <p className="text-gray-600 leading-relaxed">
                Vous sortez de chez votre{" "}
                <Link href="/" className={linkClass}>ostéopathe à Valence</Link>
                {" "}et vous vous sentez fatigué, un peu courbaturé, parfois même plus douloureux qu&apos;avant ? Pas de panique. C&apos;est une réaction fréquente et normale du corps après une séance d&apos;ostéopathie. On vous explique pourquoi et combien de temps cela dure.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Pourquoi est-on fatigué après l&apos;ostéo ?</h2>
              <p className="text-gray-600 leading-relaxed">
                L&apos;ostéopathe travaille sur les tissus, les articulations et les tensions profondes du corps. Ce travail déclenche une réponse du système nerveux et du métabolisme : le corps se &ldquo;réajuste&rdquo;. Cette réorganisation consomme de l&apos;énergie, d&apos;où la sensation de fatigue. C&apos;est comparable à la fatigue après un effort physique modéré. Que la séance concerne le{" "}
                <Link href="/osteopathe-dos" className={linkClass}>dos</Link>
                , le bassin ou les cervicales, la réaction est la même.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Combien de temps dure la fatigue ?</h2>
              <p className="text-gray-600 leading-relaxed">
                En général, la fatigue post-ostéo dure 24 à 48 heures. Certains patients ressentent des courbatures légères le lendemain, qui disparaissent en 1 à 2 jours. Dans de rares cas, la fatigue peut durer 3 jours. Si elle persiste au-delà de 72 heures ou s&apos;accompagne de symptômes inhabituels, contactez votre ostéopathe ou votre médecin.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Les autres réactions possibles après une séance</h2>
              <p className="text-gray-600 leading-relaxed">
                Outre la fatigue, d&apos;autres réactions transitoires sont possibles : sensation de légèreté ou de &ldquo;flottement&rdquo;, courbatures localisées, maux de tête légers, transit modifié (plus fréquent après un travail viscéral), sommeil plus profond la nuit suivante. Toutes ces réactions sont le signe que le corps intègre le traitement.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Conseils pour bien récupérer après l&apos;ostéo</h2>
              <p className="text-gray-600 leading-relaxed">
                L&apos;ostéopathe recommande de bien s&apos;hydrater après la séance, d&apos;éviter les efforts physiques intenses dans les 24-48 heures, de marcher un peu pour favoriser la circulation, et de dormir suffisamment. Les{" "}
                <Link href="/osteopathe-sportif" className={linkClass}>sportifs</Link>
                {" "}doivent prévoir un jour de repos après la séance avant de reprendre l&apos;entraînement. Les{" "}
                <Link href="/osteopathe-femme-enceinte" className={linkClass}>femmes enceintes</Link>
                {" "}peuvent ressentir une fatigue plus marquée : c&apos;est normal, le corps travaille déjà beaucoup.
              </p>

              {/* FAQ */}
              <div className="mt-10 space-y-6 rounded-2xl bg-cream/50 border border-bluegray/20 p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800">Questions fréquentes</h2>
                <div className="space-y-5">
                  <div>
                    <p className="font-medium text-gray-800">Est-ce normal d&apos;avoir plus mal après une séance d&apos;ostéopathie ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">Oui, une légère augmentation de la douleur pendant 24 à 48 heures est possible. C&apos;est la phase de réajustement du corps. Si la douleur augmente fortement ou dure plus de 3 jours, contactez votre ostéopathe à Valence.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Peut-on faire du sport après l&apos;ostéopathe ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">Il est recommandé d&apos;éviter les efforts intenses pendant 24 à 48 heures après la séance. La marche et les activités légères sont en revanche bénéfiques pour aider le corps à intégrer le traitement.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">La fatigue après l&apos;ostéo signifie-t-elle que le traitement fonctionne ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">Pas nécessairement, mais c&apos;est un signe que le corps réagit au traitement. L&apos;absence de fatigue ne signifie pas que la séance a été inefficace. Chaque personne réagit différemment.</p>
                  </div>
                </div>
              </div>
            </article>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous avec votre ostéopathe à Valence</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">Consultation adulte : <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.</p>
              <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Demander un rendez-vous</Link>
              <p className="mt-3 text-sm text-gray-600">
                ou appelez le <a href="tel:+33757905188" className="text-sage font-medium underline">+33 7 57 90 51 88</a>
              </p>
            </div>
          </SectionReveal>

          {/* Autres articles */}
          <LatestArticlesBanner exclude="fatigue-apres-osteopathe" />

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
