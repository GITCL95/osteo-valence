import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-bebe`;

export const metadata: Metadata = {
  title: "Ostéopathe Bébé & Nourrisson à Valence (26000) | Coliques, Torticolis, Plagiocéphalie",
  description:
    "Ostéopathe bébé et nourrisson à Valence 26000. Coliques, torticolis, plagiocéphalie, sommeil. Techniques douces. Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe Bébé & Nourrisson à Valence (26000) | Cabinet D.O.",
    description: "Ostéopathe bébé à Valence. Coliques, torticolis, tête plate. Prenez RDV.",
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
  description: "Cabinet d'ostéopathie D.O. à Valence (26000). Ostéopathe bébé et nourrisson : coliques, torticolis, plagiocéphalie.",
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
  medicalSpecialty: "PediatricOsteopathicMedicine",
  priceRange: "50€",
};

const FAQ_ITEMS = [
  { q: "À partir de quel âge peut-on amener un bébé chez l'ostéopathe ?", a: "Dès les premiers jours de vie. De nombreux parents consultent après l'accouchement pour un bilan, surtout en cas d'accouchement difficile, de césarienne ou de ventouse. L'ostéopathe utilise des techniques très douces et adaptées au nourrisson." },
  { q: "Est-ce que ça fait mal au bébé ?", a: "Non. Les techniques utilisées pour les bébés sont extrêmement douces (pressions légères, mobilisations très progressives). Le bébé peut pleurer pendant la séance pour d'autres raisons (fatigue, faim, inconfort passager), mais les manipulations en elles-mêmes ne sont pas douloureuses." },
  { q: "Combien de séances sont nécessaires pour les coliques ?", a: "En général 1 à 3 séances suffisent pour observer une nette amélioration. Chaque bébé réagit différemment. L'ostéopathe évalue en début de séance l'évolution depuis la dernière fois et vous conseille sur la suite à donner." },
  { q: "Faut-il une ordonnance du pédiatre ?", a: "Non. Vous pouvez consulter un ostéopathe pour votre bébé sans ordonnance. Il est toutefois recommandé d'informer votre pédiatre et de s'assurer qu'il n'y a pas de contre-indication médicale (fièvre, infection, etc.)." },
  { q: "L'ostéopathe peut-il traiter une plagiocéphalie avancée ?", a: "L'ostéopathie peut aider à améliorer la mobilité du crâne et du cou et à réduire les tensions qui aggravent la déformation. En cas de plagiocéphalie marquée, un suivi pluridisciplinaire (ostéo + conseils de positionnement, parfois kiné ou orthèse) est souvent recommandé. L'ostéopathe vous oriente si besoin." },
  { q: "Mon bébé pleure beaucoup, est-ce que l'ostéopathie peut aider ?", a: "Les pleurs peuvent avoir plusieurs causes (coliques, reflux, tensions liées à l'accouchement, sommeil). L'ostéopathe examine le bébé pour repérer des tensions (crâne, bassin, abdomen) et les libérer. Beaucoup de parents constatent une amélioration du confort et du sommeil après une ou quelques séances." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const PATHOLOGIES = [
  { title: "Coliques du nourrisson", desc: "Soulagement des tensions abdominales et du bassin souvent liées à l'accouchement." },
  { title: "Torticolis congénital", desc: "Mobilisation douce du cou et du crâne pour retrouver une bonne rotation de tête." },
  { title: "Plagiocéphalie (tête plate)", desc: "Travail crânien et conseils de positionnement pour limiter la déformation." },
  { title: "Troubles du sommeil", desc: "Libération des tensions qui peuvent gêner l'endormissement et le repos." },
  { title: "Reflux et régurgitations", desc: "Approche viscérale et diaphragmatique pour améliorer le confort digestif." },
  { title: "Après accouchement difficile", desc: "Bilan et soins après césarienne, ventouse, forceps ou travail long." },
];

const OTHER_SERVICES = [
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif" },
  { href: "/osteopathe-femme-enceinte", label: "Ostéopathe femme enceinte" },
  { href: "/osteopathe-dos", label: "Ostéopathe mal de dos" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
];

export default function OsteopatheBebePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <section className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">Ostéopathe Bébé & Nourrisson à Valence (26000)</h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Coliques, torticolis, plagiocéphalie, sommeil. Techniques douces dès les premiers jours de vie.</p>
          </div>
        </section>
        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Ostéopathie pour bébé à Valence : un accompagnement doux et adapté</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
              <p>Consulter un ostéopathe pour son bébé à Valence (26000) est une démarche de plus en plus courante. L&apos;accouchement, même bien vécu, peut laisser des tensions au niveau du crâne, du bassin ou du cou du nourrisson. Ces tensions peuvent se manifester par des pleurs, des coliques, un torticolis, une tête qui se déforme (plagiocéphalie) ou des difficultés à s&apos;endormir. L&apos;ostéopathe D.O. utilise des techniques extrêmement douces, sans craquement, adaptées à la fragilité du bébé. Le cabinet avenue Victor Hugo à Valence est un lieu calme et rassurant pour les familles.</p>
              <p>La première séance comprend un interrogatoire avec les parents (déroulement de la grossesse et de l&apos;accouchement, comportement du bébé), un examen très délicat puis un traitement ciblé. La durée est en général de 30 à 40 minutes. Une consultation nourrisson est au tarif de 50€ ; une facture est délivrée pour le remboursement par votre mutuelle. Aucune ordonnance n&apos;est requise pour prendre rendez-vous. Si vous habitez Valence ou les environs, n&apos;hésitez pas à nous contacter pour planifier une séance.</p>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Motifs de consultation pour votre bébé</h2>
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
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Questions fréquentes – Ostéopathe bébé</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>
        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous pour votre bébé à Valence</h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full" aria-hidden />
            <p className="text-gray-600 mb-6">Consultation nourrisson / enfant : <strong className="text-gold text-2xl">50€</strong> (environ 30–40 min). Facture pour mutuelle.</p>
            <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Demander un rendez-vous</Link>
          </div>
        </section>
        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite border-t border-bluegray/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-light text-gray-800 md:text-2xl text-center mb-4">Nos autres soins en ostéopathie à Valence</h2>
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
