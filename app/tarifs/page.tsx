import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionReveal from "@/components/SectionReveal";
import FloatingCTA from "@/components/FloatingCTA";
import AnimatedCounters from "@/components/AnimatedCounters";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/tarifs`;

export const metadata: Metadata = {
  title: "Tarifs Ostéopathe Valence (26000) | Consultations & Remboursement Mutuelle",
  description:
    "Tarifs ostéopathe Pauline Odeyer : consultation 60€ (1h), enfant -3 ans 45€, domicile 75-90€. Remboursement mutuelle. RDV sur Doctolib.",
  alternates: { canonical },
  openGraph: {
    title: "Tarifs Ostéopathe Valence (26000) | Cabinet D.O.",
    description: "Tarifs consultations ostéopathe Valence. Remboursement mutuelle. Prenez RDV.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "L'ostéopathie est-elle remboursée par la Sécu ?",
    a: "Non. L'ostéopathie n'est pas remboursée par l'Assurance Maladie (Sécurité Sociale). En revanche, la majorité des mutuelles et complémentaires santé prennent en charge les séances d'ostéopathie, en général à hauteur de 1 à 4 consultations par an selon votre contrat. Une facture vous est délivrée à chaque séance pour effectuer votre demande de remboursement.",
  },
  {
    q: "Comment savoir si ma mutuelle rembourse l'ostéopathie ?",
    a: "Consultez votre contrat ou votre espace adhérent en ligne, ou contactez directement votre mutuelle. La plupart des grandes mutuelles (Harmonie Mutuelle, MGEN, Malakoff Humanis, AG2R La Mondiale, AXA, Allianz, etc.) proposent un forfait ostéopathie. Le montant remboursé varie généralement entre 25€ et 80€ par séance selon le contrat.",
  },
  {
    q: "Faut-il une ordonnance pour être remboursé ?",
    a: "Cela dépend de votre mutuelle. Certaines exigent une prescription médicale pour rembourser l'ostéopathie, d'autres non. Renseignez-vous auprès de votre complémentaire santé. Dans tous les cas, aucune ordonnance n'est nécessaire pour consulter un ostéopathe : vous pouvez prendre rendez-vous librement.",
  },
  {
    q: "Le tarif est-il le même pour une première consultation ?",
    a: "Oui. Le tarif est identique pour une première consultation et pour les séances de suivi : 60€ pour toutes les séances (adultes, enfants de plus de 3 ans), 45€ pour les enfants jusqu'à 3 ans, 75€ à 90€ à domicile selon le déplacement. Chaque séance dure 1 heure.",
  },
  {
    q: "Peut-on payer en plusieurs fois ?",
    a: "Le règlement se fait en général à la fin de chaque séance (espèces, carte bancaire, chèque). Pour un règlement en plusieurs fois, merci de nous en faire la demande à l'avance ; nous étudions les cas au cas par cas.",
  },
  {
    q: "Y a-t-il un supplément le samedi ?",
    a: "Non. Les tarifs sont les mêmes tous les jours de la semaine (y compris le samedi) : 60€ pour toutes les séances, 45€ pour les enfants jusqu'à 3 ans. Les créneaux du samedi matin sont souvent pris rapidement ; réservez à l'avance via Doctolib si possible.",
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

const TARIFS = [
  { title: "Consultation — toutes séances", price: "60€", duration: "durée : 1h", note: "" },
  { title: "Enfant jusqu'à 3 ans", price: "45€", duration: "durée : 1h", note: "" },
  { title: "À domicile", price: "75€ – 90€", duration: "selon déplacement", note: "📞 RDV uniquement par téléphone" },
];

const ALL_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif" },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-femme-enceinte", label: "Femme enceinte" },
  { href: "/osteopathe-dos", label: "Mal de dos" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
  { href: "/blog", label: "Blog" },
];

export default function TarifsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FloatingCTA />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <ScrollAnimations>
          <SectionReveal className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">Tarifs Ostéopathe Valence (26000)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Consultations au cabinet et à domicile. Facture délivrée pour le remboursement par votre mutuelle.</p>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          <SectionReveal className="py-16 md:py-20 px-4 md:px-8" animate="fade-up">
            <AnimatedCounters />
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-offwhite overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Nos tarifs de consultation</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-10" aria-hidden />
              <div className="grid gap-6 md:grid-cols-3">
                {TARIFS.map(({ title, price, duration, note }) => (
                  <div key={title} className="card-shadow card-hover rounded-2xl border border-white/50 bg-white/70 backdrop-blur-sm p-8 text-center flex flex-col items-center hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="mt-4 text-5xl font-light text-gold">{price}</p>
                    <p className="mt-2 text-sm text-gray-600">{duration}</p>
                    {note && (
                      <p className="mt-3 text-xs font-medium text-sage bg-sage/10 rounded-full px-3 py-1">{note}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

        <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-cream/50 overflow-hidden" animate="fade-up">
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Remboursement par les mutuelles</h2>
            <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
            <p className="text-gray-600 leading-relaxed text-center mb-8">
              L&apos;ostéopathie n&apos;est pas remboursée par la Sécurité Sociale. Plus de 85 % des mutuelles prennent en charge les séances (1 à 4 par an selon votre contrat). Une facture vous est remise à chaque consultation ; envoyez-la à votre mutuelle pour obtenir votre remboursement. Vérifiez votre contrat pour connaître votre forfait.
            </p>
            <div className="rounded-xl border-2 border-gold/30 overflow-hidden bg-white/80">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-cream/80 border-b border-gold/30">
                    <th className="px-4 py-3 font-semibold text-gray-800">Mutuelle</th>
                    <th className="px-4 py-3 font-semibold text-gray-800">Remboursement moyen / séance</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="border-b border-bluegray/20"><td className="px-4 py-3">Harmonie Mutuelle</td><td className="px-4 py-3">40€ - 60€</td></tr>
                  <tr className="border-b border-bluegray/20"><td className="px-4 py-3">MGEN</td><td className="px-4 py-3">50€ - 70€</td></tr>
                  <tr className="border-b border-bluegray/20"><td className="px-4 py-3">Malakoff Humanis</td><td className="px-4 py-3">30€ - 60€</td></tr>
                  <tr className="border-b border-bluegray/20"><td className="px-4 py-3">AG2R La Mondiale</td><td className="px-4 py-3">40€ - 80€</td></tr>
                  <tr><td className="px-4 py-3">AXA / Allianz</td><td className="px-4 py-3">25€ - 50€</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <SectionWave fillClass="fill-offwhite" />
        </SectionReveal>

        <SectionReveal className="py-16 md:py-20 px-4 md:px-8 bg-offwhite" animate="fade-up">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Moyens de paiement</h2>
            <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
            <p className="text-gray-600 text-center">
              Carte bancaire, espèces et chèque acceptés. Le règlement s&apos;effectue à la fin de chaque séance. Une facture vous est délivrée systématiquement pour votre mutuelle.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-cream/50 overflow-hidden" animate="fade-up">
          <div className="absolute top-0 right-0 w-72 h-72 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Infos pratiques</h2>
            <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-8" aria-hidden />
            <div className="grid gap-6 md:grid-cols-2 text-gray-600">
              <div className="card-shadow rounded-2xl bg-white p-6 border border-bluegray/20">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Adresses</h3>
                <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Valence</p>
                <p>9 rue du Lycée, 26000 Valence</p>
                <p className="mt-2 text-sm font-medium text-gray-500 uppercase tracking-wide">Saint Lattier</p>
                <p>55 allée du Cultil, 38840 Saint Lattier</p>
              </div>
              <div className="card-shadow rounded-2xl bg-white p-6 border border-bluegray/20">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Horaires</h3>
                <p>Lundi – Vendredi : 8h – 20h<br />Samedi : 9h – 13h</p>
                <p className="mt-2 text-sm">Fermé dimanche et jours fériés.</p>
              </div>
            </div>
            <p className="text-center text-gray-600 mt-6">
              <strong>Urgences :</strong> en cas de blocage aigu, nous nous efforçons de vous proposer un créneau sous 24 à 48h. Contactez le cabinet pour signaler une urgence.
            </p>
          </div>
          <SectionWave fillClass="fill-offwhite" />
        </SectionReveal>

        <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-sage/10 overflow-hidden" animate="fade-up">
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Questions fréquentes – Tarifs et remboursement</h2>
            <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-10" aria-hidden />
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
          <SectionWave fillClass="fill-cream" />
        </SectionReveal>

        <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
          <div className="mx-auto max-w-2xl text-center">
            <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Prendre rendez-vous</Link>
          </div>
        </SectionReveal>

        <SectionReveal className="py-16 md:py-20 px-4 md:px-8 bg-offwhite border-t border-bluegray/20" animate="fade-up">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-light text-gray-800 md:text-2xl text-center mb-4">Nos soins et pages</h2>
            <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-8" aria-hidden />
            <div className="flex flex-wrap justify-center gap-4">
              {ALL_LINKS.map(({ href, label }) => (
                <Link key={href} href={href} className="link-lire-la-suite rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage hover:scale-[1.02] hover:-translate-y-1">{label}</Link>
              ))}
            </div>
          </div>
        </SectionReveal>
        </ScrollAnimations>
      </main>
    </>
  );
}
