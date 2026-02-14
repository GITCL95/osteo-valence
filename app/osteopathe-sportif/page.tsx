import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-sportif`;

export const metadata: Metadata = {
  title: "Ostéopathe du Sport à Valence (26000) | Blessures & Performance",
  description:
    "Ostéopathe du sport à Valence 26000. Traitement entorses, tendinites, pubalgies. Préparation et récupération. Prenez RDV en ligne.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe du Sport à Valence (26000) | Cabinet D.O.",
    description: "Ostéopathe du sport à Valence. Blessures, récupération, prévention. Prenez RDV.",
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
  description: "Cabinet d'ostéopathie D.O. à Valence (26000). Ostéopathe du sport : blessures, récupération, performance.",
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
  medicalSpecialty: "SportsMedicine",
  priceRange: "55€",
};

const FAQ_ITEMS = [
  {
    q: "L'ostéopathe peut-il m'aider à améliorer mes performances ?",
    a: "Oui. En libérant les restrictions de mobilité et en optimisant l'équilibre du corps, l'ostéopathe contribue à une meilleure récupération, une posture plus efficace et une diminution des tensions qui peuvent freiner la performance. De nombreux sportifs consultent en entretien avant une compétition.",
  },
  {
    q: "Combien de temps après une blessure puis-je consulter ?",
    a: "Dès que la phase aiguë (œdème, inflammation majeure) est passée, en général après 48 à 72 h. En cas de doute (entorse grave, fracture suspectée), un avis médical est indispensable. L'ostéopathe intervient ensuite pour restaurer la mobilité et limiter les récidives.",
  },
  {
    q: "Faut-il attendre d'avoir mal pour consulter un ostéopathe du sport ?",
    a: "Non. La prévention est l'un des piliers de l'ostéopathie du sport. Des séances régulières (par exemple avant/après une saison ou un objectif) permettent de corriger les petits déséquilibres avant qu'ils ne deviennent douloureux ou provoquent une blessure.",
  },
  {
    q: "Quels sports provoquent le plus de blessures traitées en ostéopathie ?",
    a: "Course à pied, football, tennis, rugby et cyclisme figurent parmi les sports les plus fréquents. Les motifs courants sont les tendinites, entorses, douleurs lombaires, pubalgies et cervicalgies. L'ostéopathe adapte son approche au geste sportif et à la discipline.",
  },
  {
    q: "L'ostéopathe peut-il intervenir pendant une compétition ?",
    a: "Oui, dans le cadre d'équipes ou d'événements. Il peut réaliser des bilans pré-compétition, des soins de récupération et des traitements légers en bord de terrain (contractures, blocages mineurs), en complément du staff médical et sans se substituer au médecin en cas de traumatisme.",
  },
  {
    q: "Quelle différence entre ostéopathe du sport et kinésithérapeute du sport ?",
    a: "L'ostéopathe travaille sur l'ensemble du corps avec une approche globale (articulations, fascias, viscères) pour rétablir la mobilité et l'équilibre. Le kiné du sport se concentre davantage sur la rééducation ciblée (renforcement, étirements, protocoles post-blessure). Les deux sont complémentaires.",
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
  { title: "Entorses (cheville, genou)", desc: "Traitement des séquelles d'entorses et rééquilibrage des structures pour limiter les récidives." },
  { title: "Tendinites et tendinopathies", desc: "Traitement des tendinites (épaule, coude, tendon d'Achille, genou) par approche globale." },
  { title: "Pubalgie et douleurs inguinales", desc: "Soulagement des tensions du bassin et des adducteurs fréquentes chez les sportifs." },
  { title: "Lombalgies et dorsalgies", desc: "Prévention et traitement des douleurs du dos liées à la pratique sportive ou au surmenage." },
  { title: "Syndrome de l'essuie-glace", desc: "Prise en charge des douleurs de la face latérale du genou en course à pied." },
  { title: "Douleurs cervicales et épaules", desc: "Libération des tensions du cou et des épaules (natation, musculation, sports de raquette)." },
];

const OTHER_SERVICES = [
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-femme-enceinte", label: "Ostéopathe femme enceinte" },
  { href: "/osteopathe-dos", label: "Ostéopathe mal de dos" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
];

export default function OsteopatheSportifPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <section className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
              Ostéopathe du Sport à Valence (26000)
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Accompagnement des sportifs : blessures, récupération et prévention. Consultations au cabinet à Valence.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Pourquoi consulter un ostéopathe du sport à Valence ?
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Que vous soyez coureur, footballeur, tennisman ou pratiquant de musculation, l'ostéopathie du sport à Valence (26000) vous accompagne à chaque étape : prévention avant la saison, traitement des blessures (entorses, tendinites, pubalgies) et optimisation de la récupération après l'effort. L'ostéopathe D.O. travaille sur l'ensemble du corps pour identifier les déséquilibres qui favorisent les douleurs ou les blessures à répétition. Les techniques utilisées sont adaptées au sportif et à son objectif, sans contre-indiquer la reprise du sport lorsque celle-ci est possible.
              </p>
              <p>
                Le cabinet situé avenue Victor Hugo à Valence reçoit de nombreux sportifs de la Drôme et des environs. Chaque consultation comprend un interrogatoire (type de sport, fréquence, antécédents de blessures), un examen clinique puis un traitement personnalisé. Nous pouvons également vous conseiller sur les étirements, l'hydratation et la progressivité de la reprise. Une consultation adulte est au tarif de 55€ ; une facture est remise pour le remboursement par votre mutuelle. Prenez rendez-vous en ligne pour une séance d'ostéopathie du sport à Valence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Motifs de consultation en ostéopathie du sport
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <div className="grid gap-6 sm:grid-cols-2">
              {PATHOLOGIES.map(({ title, desc }) => (
                <div
                  key={title}
                  className="card-shadow card-hover rounded-2xl bg-white p-6 border border-bluegray/20"
                >
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
              Questions fréquentes – Ostéopathe du sport
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">
              Prendre rendez-vous avec votre ostéopathe du sport à Valence
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full" aria-hidden />
            <p className="text-gray-600 mb-6">
              Consultation adulte : <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.
            </p>
            <Link
              href="/#contact"
              className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90"
            >
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
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage"
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/tarifs"
                className="rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage"
              >
                Tarifs
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage"
              >
                Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
