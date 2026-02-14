import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-dos`;

export const metadata: Metadata = {
  title: "Ostéopathe Mal de Dos à Valence (26000) | Lombalgie, Sciatique, Hernie Discale",
  description:
    "Ostéopathe mal de dos à Valence 26000. Lombalgie, lumbago, sciatique, hernie discale, cervicalgie. Prenez RDV en ligne.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe Mal de Dos à Valence (26000) | Cabinet D.O.",
    description: "Ostéopathe dos à Valence. Lombalgie, sciatique, blocage. Prenez RDV.",
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
  description: "Cabinet d'ostéopathie D.O. à Valence (26000). Ostéopathe mal de dos : lombalgie, sciatique, hernie discale.",
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
  medicalSpecialty: "OsteopathicManipulativeMedicine",
  priceRange: "55€",
};

const FAQ_ITEMS = [
  {
    q: "Est-ce que l'ostéopathe fait craquer le dos ?",
    a: "Pas systématiquement. Les « craquements » (techniques de thrust) sont une possibilité parmi d'autres. L'ostéopathe utilise aussi des techniques douces (musculaires, fasciales, viscérales) qui ne font pas craquer. Le choix dépend de votre état, de votre âge et de votre préférence. Vous pouvez toujours indiquer que vous préférez des techniques sans craquement.",
  },
  {
    q: "Combien de séances pour un lumbago ?",
    a: "Souvent 1 à 3 séances suffisent pour un lumbago aigu. La première séance vise à soulager la douleur et à redonner de la mobilité. Un suivi peut être proposé pour consolider et éviter la récidive. En cas de lumbago chronique ou récurrent, un plan de suivi peut être discuté.",
  },
  {
    q: "L'ostéopathie peut-elle traiter une hernie discale ?",
    a: "L'ostéopathie ne « supprime » pas la hernie discale, mais elle peut soulager les tensions autour de la zone concernée, améliorer la mobilité et réduire la douleur. Le traitement est adapté (pas de manipulations à risque sur la zone herniée). Un avis médical et l'accord du médecin sont recommandés en cas de hernie connue.",
  },
  {
    q: "Quelle différence entre ostéopathe et chiropracteur pour le dos ?",
    a: "Les deux travaillent sur la colonne et les articulations. L'ostéopathe a une approche globale (corps entier, viscères, crâne) et utilise un large panel de techniques. Le chiropracteur se concentre davantage sur la colonne vertébrale et utilise souvent des ajustements vertébraux. Les deux peuvent soulager le mal de dos ; le choix dépend de votre préférence.",
  },
  {
    q: "Peut-on consulter en urgence pour un blocage de dos ?",
    a: "Oui. En cas de blocage aigu (lumbago, torticolis), nous essayons de vous proposer un créneau sous 24 à 48 h selon les disponibilités. Appelez le cabinet pour signaler une urgence. En parallèle, évitez les positions qui augmentent la douleur et consultez un médecin si la douleur est très intense ou s'accompagne de signes neurologiques (jambe qui lâche, perte de sensibilité).",
  },
  {
    q: "L'ostéopathie est-elle efficace contre la sciatique ?",
    a: "Oui, dans beaucoup de cas. L'ostéopathe cherche à libérer les structures qui compriment ou irritent le nerf sciatique (bassin, vertèbres, muscles). Les techniques sont adaptées à l'origine de la sciatique. Une à quelques séances peuvent suffire pour une sciatique d'origine mécanique. En cas de sciatique persistante ou sévère, un avis médical est important.",
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
  { title: "Lombalgie et lumbago", desc: "Traitement des douleurs du bas du dos, aiguës ou chroniques." },
  { title: "Cervicalgie et torticolis", desc: "Soulagement des douleurs et raideurs du cou." },
  { title: "Sciatique et cruralgie", desc: "Libération des tensions à l'origine des névralgies." },
  { title: "Hernie discale et protrusion", desc: "Approche douce pour soulager sans aggraver la lésion." },
  { title: "Douleurs entre les omoplates", desc: "Travail dorsal et costal pour les dorsalgies." },
  { title: "Blocage vertébral", desc: "Restaurer la mobilité après un faux mouvement ou un traumatisme." },
];

const OTHER_SERVICES = [
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif" },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-femme-enceinte", label: "Ostéopathe femme enceinte" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
];

export default function OsteopatheDosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <section className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
              Ostéopathe Mal de Dos à Valence (26000)
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Lombalgie, lumbago, sciatique, hernie discale, cervicalgie. Soulagement durable au cabinet à Valence.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Mal de dos à Valence : quand consulter un ostéopathe ?
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
              <p>
                Le mal de dos (lombalgie, cervicalgie, dorsalgie) est l'un des motifs les plus fréquents de consultation en ostéopathie à Valence (26000). Que la douleur soit apparue après un faux mouvement, une position prolongée au travail, un stress ou une ancienne blessure, l'ostéopathe D.O. réalise un bilan global pour identifier les zones de restriction et les compensations qui entretiennent la douleur. Le traitement associe des techniques articulaires, musculaires et fasciales, adaptées à votre âge et à votre état de santé. L'objectif est de restaurer la mobilité et de vous donner des conseils pour limiter les récidives.
              </p>
              <p>
                Le cabinet d'ostéopathie avenue Victor Hugo à Valence reçoit de nombreux patients pour des douleurs du dos. La première séance dure environ 45 minutes (interrogatoire, examen, traitement). Une consultation adulte est au tarif de 55€ ; une facture est délivrée pour le remboursement par votre mutuelle. En cas de blocage aigu, nous nous efforçons de vous proposer un rendez-vous rapide. Prenez rendez-vous en ligne pour une séance d'ostéopathie pour le mal de dos à Valence.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Motifs de consultation – Mal de dos
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
              Questions fréquentes – Ostéopathe mal de dos
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">
              Prendre rendez-vous pour votre dos à Valence
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
