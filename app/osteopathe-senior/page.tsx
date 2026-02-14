import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-senior`;

export const metadata: Metadata = {
  title: "Ostéopathe Senior à Valence (26000) | Mobilité, Arthrose, Prévention des Chutes",
  description:
    "Ostéopathe senior à Valence 26000. Mobilité, arthrose, équilibre, prévention des chutes. Techniques douces. Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe Senior à Valence (26000) | Cabinet D.O.",
    description: "Ostéopathe senior à Valence. Confort, mobilité, prévention. Prenez RDV.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
  },
};

const medicalSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Ostéopathe Valence",
  description: "Cabinet d'ostéopathie D.O. à Valence (26000). Ostéopathe senior : mobilité, arthrose, prévention des chutes.",
  url: canonical,
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 avenue Victor Hugo",
    addressLocality: "Valence",
    postalCode: "26000",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: { "@type": "GeoCoordinates", latitude: 44.9334, longitude: 4.8924 },
  medicalSpecialty: "GeriatricMedicine",
  priceRange: "55€",
};

const FAQ_ITEMS = [
  {
    q: "Les manipulations sont-elles adaptées aux personnes âgées ?",
    a: "Oui. L'ostéopathe adapte toujours ses techniques à l'âge et à l'état de santé. Chez les seniors, on privilégie des techniques douces (musculaires, fasciales, mobilisations) et on évite les manipulations à fort impact lorsqu'il existe de l'ostéoporose ou des antécédents. Votre confort et votre sécurité sont prioritaires.",
  },
  {
    q: "L'ostéopathie peut-elle soulager l'arthrose ?",
    a: "L'ostéopathie ne guérit pas l'arthrose, mais elle peut soulager les douleurs et améliorer la mobilité en travaillant sur les tissus autour de l'articulation, la posture et les compensations. Beaucoup de seniors constatent une réduction de la gêne au quotidien. Un avis médical est recommandé en cas d'arthrose sévère ou de prothèse.",
  },
  {
    q: "Peut-on consulter après la pose d'une prothèse de hanche ?",
    a: "Oui, après la période de consolidation indiquée par le chirurgien (souvent quelques semaines à quelques mois). L'ostéopathe travaille alors en douceur sur le bassin, le dos et les membres pour rééquilibrer la posture et favoriser une bonne récupération. Les techniques sont adaptées et il n'y a pas de manipulation directe sur la prothèse.",
  },
  {
    q: "L'ostéopathe se déplace-t-il à domicile pour les seniors ?",
    a: "Oui. Des consultations à domicile sont possibles à Valence et dans les environs pour les personnes qui ne peuvent pas se déplacer. Le tarif à domicile est de 75€ (déplacement inclus). Contactez le cabinet pour organiser une séance à domicile.",
  },
  {
    q: "À quelle fréquence consulter quand on est senior ?",
    a: "Cela dépend de votre état. Pour un suivi préventif, 2 à 3 séances par an sont souvent suffisantes. En cas de douleur ou de pathologie chronique, nous pouvons proposer un rythme plus rapproché au début puis un espacement. L'ostéopathe vous conseille en fonction de votre situation.",
  },
  {
    q: "L'ostéopathie aide-t-elle à prévenir les chutes ?",
    a: "En partie. En améliorant la mobilité, l'équilibre et la perception du corps, l'ostéopathie peut contribuer à une meilleure stabilité à la marche et à une réduction du risque de chute. Elle ne remplace pas la rééducation ni les exercices d'équilibre prescrits par le médecin ou le kiné, mais elle les complète.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const PATHOLOGIES = [
  { title: "Arthrose et douleurs articulaires", desc: "Soulagement des tensions et amélioration de la mobilité autour des articulations." },
  { title: "Douleurs du dos et du cou", desc: "Techniques douces pour les lombalgies et cervicalgies du senior." },
  { title: "Raideur et perte de mobilité", desc: "Mobilisations et étirements doux pour retrouver de l'amplitude." },
  { title: "Troubles de l'équilibre", desc: "Travail postural et proprioceptif pour une meilleure stabilité." },
  { title: "Douleurs après prothèse", desc: "Rééquilibrage du corps après pose de prothèse de hanche ou de genou." },
  { title: "Céphalées et vertiges", desc: "Approche crânienne et cervicale pour les maux de tête et vertiges d'origine mécanique." },
];

const OTHER_SERVICES = [
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif" },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-femme-enceinte", label: "Ostéopathe femme enceinte" },
  { href: "/osteopathe-dos", label: "Ostéopathe mal de dos" },
];

export default function OsteopatheSeniorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <section className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
              Ostéopathe Senior à Valence (26000)
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Mobilité, arthrose, équilibre et prévention des chutes. Techniques douces adaptées aux seniors.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Ostéopathie pour les seniors à Valence : confort et mobilité
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Avec l'âge, les articulations peuvent se raidir, l'arthrose apparaître et les douleurs du dos ou des membres devenir plus fréquentes. L'ostéopathe senior à Valence (26000) accompagne les personnes âgées avec des techniques adaptées : pas de manipulations brutales, mais des mobilisations douces, des techniques musculaires et fasciales et un travail sur la posture et l'équilibre. L'objectif est de maintenir ou retrouver une bonne mobilité, de soulager les douleurs et de contribuer à la prévention des chutes. Le cabinet est accessible et nous proposons également des consultations à domicile pour les personnes qui ne peuvent pas se déplacer.
              </p>
              <p>
                Chaque séance au cabinet avenue Victor Hugo à Valence commence par un interrogatoire (antécédents, traitements, prothèses éventuelles) pour adapter au mieux le traitement. La consultation adulte est au tarif de 55€ ; la consultation à domicile à 75€. Une facture est remise pour le remboursement par votre mutuelle. Prenez rendez-vous en ligne ou par téléphone pour une séance d'ostéopathie pour senior à Valence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Motifs de consultation – Ostéopathe senior
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <div className="grid gap-6 sm:grid-cols-2">
              {PATHOLOGIES.map(({ title, desc }) => (
                <div key={title} className="card-shadow card-hover rounded-2xl bg-white p-6 border border-bluegray/20">
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Questions fréquentes – Ostéopathe senior
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">
              Prendre rendez-vous – Ostéopathe senior à Valence
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full" aria-hidden />
            <p className="text-gray-600 mb-6">
              Consultation adulte : <strong className="text-gold text-2xl">55€</strong>. À domicile : <strong className="text-gold text-2xl">75€</strong>. Facture pour mutuelle.
            </p>
            <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">
              Demander un rendez-vous
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite border-t border-bluegray/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-light text-gray-800 md:text-2xl text-center mb-4">
              Nos autres soins en ostéopathie à Valence
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-8 rounded-full" aria-hidden />
            <div className="flex flex-wrap justify-center gap-4">
              {OTHER_SERVICES.map(({ href, label }) => (
                <Link key={href} href={href} className="rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage">{label}</Link>
              ))}
              <Link href="/tarifs" className="rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage">Tarifs</Link>
              <Link href="/blog" className="rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage">Blog</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
