import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-femme-enceinte`;

export const metadata: Metadata = {
  title: "Ostéopathe Femme Enceinte à Valence (26000) | Grossesse & Post-Partum",
  description:
    "Ostéopathe femme enceinte à Valence 26000. Douleurs grossesse, préparation à l'accouchement, post-partum. Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe Femme Enceinte à Valence (26000) | Cabinet D.O.",
    description: "Ostéopathe grossesse à Valence. Confort, préparation accouchement, bébé siège. Prenez RDV.",
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
  description: "Cabinet d'ostéopathie D.O. à Valence (26000). Ostéopathe femme enceinte : grossesse, accouchement, post-partum.",
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
  medicalSpecialty: "ObstetricAndGynecologic",
  priceRange: "55€",
};

const FAQ_ITEMS = [
  {
    q: "L'ostéopathie est-elle sans danger pendant la grossesse ?",
    a: "Oui. Les techniques utilisées sont adaptées à la grossesse : pas de manipulations à risque, pas de pression sur l'abdomen. L'ostéopathe travaille sur le bassin, le dos, le diaphragme et les tissus pour soulager les douleurs et améliorer le confort. En cas de grossesse à risque, un avis de votre médecin ou sage-femme est recommandé.",
  },
  {
    q: "À quel mois de grossesse peut-on commencer ?",
    a: "Dès le premier trimestre si besoin (nausées, douleurs). Le deuxième et le troisième trimestre sont des périodes où les douleurs lombaires et pelviennes sont fréquentes ; l'ostéopathie peut alors être très utile. Chaque trimestre a ses spécificités et l'ostéopathe adapte les positions et les techniques.",
  },
  {
    q: "L'ostéopathe peut-il aider à retourner un bébé en siège ?",
    a: "Des techniques douces (approche par le bassin et les tissus) peuvent favoriser la mobilité du bébé et encourager un retournement en tête. Cela ne remplace pas le suivi obstétrical. Le moment idéal est souvent autour de 34–36 SA. Parlez-en à votre sage-femme ou gynécologue.",
  },
  {
    q: "Combien de séances prévoir pendant la grossesse ?",
    a: "Cela dépend de votre ressenti. Certaines femmes consultent une fois par trimestre, d'autres en cas de douleur (lombalgie, sciatique, douleurs ligamentaires). Un bilan en début de 3e trimestre et une séance en fin de grossesse pour préparer le bassin sont souvent appréciés.",
  },
  {
    q: "Peut-on consulter juste après l'accouchement ?",
    a: "Oui. Une séance post-partum permet de rééquilibrer le bassin et le périnée après l'accouchement, de soulager les tensions du dos et d'accompagner la récupération. Il est conseillé d'attendre la visite post-natale (ou l'accord de votre sage-femme) avant de consulter.",
  },
  {
    q: "L'ostéopathie remplace-t-elle la préparation à l'accouchement ?",
    a: "Non. L'ostéopathie complète la préparation à l'accouchement. Elle travaille sur la mobilité du bassin et des tissus pour favoriser le confort et une meilleure adaptation au jour J. La préparation classique (sage-femme) reste indispensable pour la respiration, la poussée et l'accompagnement global.",
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
  { title: "Lombalgies et douleurs du dos", desc: "Soulagement des tensions liées au poids du bébé et à la posture." },
  { title: "Douleurs du bassin et du coccyx", desc: "Mobilisation du bassin pour améliorer le confort et la mobilité." },
  { title: "Sciatique et névralgies", desc: "Traitement des compressions et tensions à l'origine des douleurs." },
  { title: "Préparation du bassin à l'accouchement", desc: "Travail sur la mobilité pelvienne pour favoriser un accouchement plus fluide." },
  { title: "Troubles digestifs et reflux", desc: "Approche viscérale et diaphragmatique pour le confort digestif." },
  { title: "Rééducation post-partum", desc: "Rééquilibrage après l'accouchement : bassin, dos, cicatrices." },
];

const OTHER_SERVICES = [
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif" },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-dos", label: "Ostéopathe mal de dos" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
];

export default function OsteopatheFemmeEnceintePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <section className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
              Ostéopathe Femme Enceinte à Valence (26000)
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Accompagnement pendant la grossesse et après l'accouchement. Confort, préparation du bassin, post-partum.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Ostéopathie et grossesse à Valence : confort et préparation
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
              <p>
                La grossesse modifie la posture, sollicite le bassin et le dos et peut provoquer des douleurs lombaires, des sciatiques ou des tensions ligamentaires. L'ostéopathe femme enceinte à Valence (26000) accompagne les futures mamans avec des techniques douces et adaptées à chaque trimestre. Le travail porte sur la mobilité du bassin, la libération du diaphragme, le confort du dos et la préparation des tissus pour l'accouchement. Les positions sur la table sont toujours adaptées (couchée sur le côté, semi-assise) pour éviter toute compression du ventre.
              </p>
              <p>
                Le cabinet situé avenue Victor Hugo à Valence reçoit de nombreuses femmes enceintes de Valence et des environs. Chaque séance comprend un interrogatoire (semaine de grossesse, antécédents, motifs de consultation), un examen en douceur puis un traitement personnalisé. Une consultation adulte est au tarif de 55€ ; une facture est remise pour le remboursement par votre mutuelle. Vous pouvez prendre rendez-vous en ligne pour une séance d'ostéopathie pendant la grossesse ou en post-partum.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Motifs de consultation pendant et après la grossesse
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
              Questions fréquentes – Ostéopathe femme enceinte
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">
              Prendre rendez-vous – Ostéopathe grossesse à Valence
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full" aria-hidden />
            <p className="text-gray-600 mb-6">
              Consultation adulte : <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.
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
