import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import FloatingCTA from "@/components/FloatingCTA";
import LatestArticlesBanner from "@/components/LatestArticlesBanner";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/blog/combien-seances-osteopathie-sciatique/`;

export const metadata: Metadata = {
  title: "Combien de Séances d'Ostéopathie pour une Sciatique ? | Ostéopathe Valence",
  description:
    "Combien de séances d'ostéopathie pour soigner une sciatique ? 1 à 3 en moyenne. Explication, facteurs et conseils. Ostéopathe à Valence (26000). ☎ RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Combien de Séances d'Ostéopathie pour une Sciatique ? | Ostéopathe Valence",
    description:
      "Combien de séances d'ostéopathie pour soigner une sciatique ? 1 à 3 en moyenne. Explication, facteurs et conseils.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "article",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Ostéopathie sciatique Valence" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Combien de séances d'ostéopathie pour une sciatique ?",
  description:
    "Guide complet : nombre de séances, facteurs, et conseils pour soigner une sciatique par l'ostéopathie à Valence.",
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
      name: "L'ostéopathie peut-elle guérir une sciatique en une seule séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dans certains cas de sciatique aiguë récente, une seule séance à Valence peut suffire à soulager significativement la douleur. Cependant, une deuxième séance de contrôle est souvent recommandée pour consolider le résultat et prévenir la récidive.",
      },
    },
    {
      "@type": "Question",
      name: "Quel est le tarif d'une séance pour une sciatique à Valence ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La consultation adulte est au tarif de 55€ au cabinet avenue Victor Hugo à Valence (26000). Une facture est délivrée pour le remboursement par votre mutuelle.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il faire une IRM avant de consulter l'ostéopathe pour une sciatique ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ce n'est pas obligatoire pour une première consultation. L'ostéopathe à Valence réalise un examen clinique complet. Si une imagerie est nécessaire, l'ostéopathe vous orientera vers votre médecin. En cas de sciatique persistante au-delà de 6 semaines, une IRM est souvent recommandée.",
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
      name: "Combien de séances pour une sciatique",
      item: canonical,
    },
  ],
};

const linkClass = "text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage";

export default function ArticleSciatiquePage() {
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
                <span className="text-gray-800 font-medium">Combien de séances pour une sciatique</span>
              </nav>
              <span className="inline-block rounded-full bg-sage/10 text-sage px-3 py-1 text-xs font-medium mb-4">Sciatique</span>
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
                Combien de Séances d&apos;Ostéopathie pour une Sciatique ?
              </h1>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          {/* Contenu */}
          <SectionReveal className="py-12 md:py-16 px-4 md:px-8 bg-offwhite" animate="fade-up">
            <article className="mx-auto max-w-3xl prose-sm space-y-8">
              <p className="text-gray-600 leading-relaxed">
                La sciatique est l&apos;un des motifs de consultation les plus fréquents chez votre{" "}
                <Link href="/" className={linkClass}>ostéopathe à Valence</Link>.
                {" "}Cette douleur qui irradie le long du nerf sciatique — de la fesse jusqu&apos;au pied — peut être invalidante. La bonne nouvelle : l&apos;ostéopathie obtient de bons résultats dans la majorité des cas d&apos;origine mécanique. Mais combien de séances faut-il prévoir ?
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">En moyenne : 1 à 3 séances</h2>
              <p className="text-gray-600 leading-relaxed">
                Pour une sciatique aiguë d&apos;origine mécanique (compression musculaire, blocage du bassin ou des lombaires), 1 à 3 séances suffisent généralement. La première séance vise à identifier l&apos;origine de la compression et à libérer les structures concernées. Un soulagement est souvent ressenti dès la première consultation. L&apos;
                <Link href="/osteopathe-dos" className={linkClass}>ostéopathe du dos</Link>
                {" "}travaille sur l&apos;ensemble de la chaîne : bassin, vertèbres lombaires, muscles piriformes et ischio-jambiers.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Les facteurs qui influencent le nombre de séances</h2>
              <p className="text-gray-600 leading-relaxed">
                Plusieurs éléments déterminent la durée du traitement : l&apos;ancienneté de la douleur (aiguë vs chronique), la cause sous-jacente (hernie discale, syndrome piriforme, blocage sacro-iliaque), l&apos;âge du patient et son mode de vie. Une sciatique chronique installée depuis plusieurs mois nécessitera davantage de séances (3 à 5) avec un espacement progressif. Chez les{" "}
                <Link href="/osteopathe-senior" className={linkClass}>seniors</Link>
                , le traitement est adapté avec des techniques plus douces.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Sciatique du sportif : un cas particulier</h2>
              <p className="text-gray-600 leading-relaxed">
                Les sportifs sont particulièrement exposés à la sciatique, notamment les coureurs et les footballeurs. L&apos;
                <Link href="/osteopathe-sportif" className={linkClass}>ostéopathe sportif</Link>
                {" "}associe le traitement de la sciatique à un travail sur les déséquilibres posturaux et musculaires liés à la pratique. Le nombre de séances est souvent de 2 à 3, avec des conseils d&apos;étirements et de reprise progressive.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Sciatique pendant la grossesse</h2>
              <p className="text-gray-600 leading-relaxed">
                La grossesse modifie la posture et augmente la pression sur le nerf sciatique. L&apos;
                <Link href="/osteopathe-femme-enceinte" className={linkClass}>ostéopathe femme enceinte</Link>
                {" "}utilise des techniques adaptées (positions latérales, mobilisations douces du bassin) pour soulager la sciatique sans risque. En général, 1 à 2 séances apportent un soulagement notable.
              </p>

              <h2 className="text-xl font-semibold text-gray-800 mt-8">Quand la sciatique nécessite un avis médical</h2>
              <p className="text-gray-600 leading-relaxed">
                Si la douleur s&apos;accompagne de perte de force dans la jambe, de troubles urinaires ou d&apos;un engourdissement permanent, il est impératif de consulter un médecin avant ou en parallèle de l&apos;ostéopathie. L&apos;ostéopathe oriente systématiquement vers un médecin en cas de signes neurologiques.
              </p>

              {/* FAQ */}
              <div className="mt-10 space-y-6 rounded-2xl bg-cream/50 border border-bluegray/20 p-6 md:p-8">
                <h2 className="text-xl font-semibold text-gray-800">Questions fréquentes</h2>
                <div className="space-y-5">
                  <div>
                    <p className="font-medium text-gray-800">L&apos;ostéopathie peut-elle guérir une sciatique en une seule séance ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">Dans certains cas de sciatique aiguë récente, une seule séance à Valence peut suffire à soulager significativement la douleur. Cependant, une deuxième séance de contrôle est souvent recommandée pour consolider le résultat et prévenir la récidive.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Quel est le tarif d&apos;une séance pour une sciatique à Valence ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">La consultation adulte est au tarif de 55€ au cabinet 1 avenue Victor Hugo à Valence (26000). Une facture est délivrée pour le remboursement par votre mutuelle.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Faut-il faire une IRM avant de consulter l&apos;ostéopathe pour une sciatique ?</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">Ce n&apos;est pas obligatoire pour une première consultation. L&apos;ostéopathe à Valence réalise un examen clinique complet. Si une imagerie est nécessaire, l&apos;ostéopathe vous orientera vers votre médecin. En cas de sciatique persistante au-delà de 6 semaines, une IRM est souvent recommandée.</p>
                  </div>
                </div>
              </div>
            </article>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous pour votre sciatique à Valence</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">Consultation adulte : <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.</p>
              <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Demander un rendez-vous</Link>
              <p className="mt-3 text-sm text-gray-600">
                ou appelez le <a href="tel:+33757905188" className="text-sage font-medium underline">+33 7 57 90 51 88</a>
              </p>
            </div>
          </SectionReveal>

          {/* Autres articles */}
          <LatestArticlesBanner exclude="combien-seances-osteopathie-sciatique" />

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
