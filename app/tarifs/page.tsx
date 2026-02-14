import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/tarifs`;

export const metadata: Metadata = {
  title: "Tarifs Ostéopathe Valence (26000) | Consultations & Remboursement Mutuelle",
  description:
    "Tarifs ostéopathe Valence 26000 : adulte 55€, nourrisson 50€, domicile 75€. Remboursement mutuelle. Prenez RDV en ligne.",
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
    a: "Oui. Le tarif est identique pour une première consultation et pour les séances de suivi (55€ adulte, 50€ nourrisson/enfant, 75€ à domicile). La première séance est un peu plus longue (environ 45 min pour un adulte) car elle comprend un interrogatoire détaillé et un examen complet.",
  },
  {
    q: "Peut-on payer en plusieurs fois ?",
    a: "Le règlement se fait en général à la fin de chaque séance (espèces, carte bancaire, chèque). Pour un règlement en plusieurs fois, merci de nous en faire la demande à l'avance ; nous étudions les cas au cas par cas.",
  },
  {
    q: "Y a-t-il un supplément le samedi ?",
    a: "Non. Les tarifs sont les mêmes tous les jours de la semaine (y compris le samedi). Consultation adulte 55€, nourrisson/enfant 50€, à domicile 75€. Les créneaux du samedi matin sont souvent pris rapidement ; réservez à l'avance si possible.",
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
  { title: "Consultation adulte", price: "55€", duration: "environ 45 min" },
  { title: "Consultation nourrisson / enfant", price: "50€", duration: "environ 30-40 min" },
  { title: "Consultation à domicile", price: "75€", duration: "déplacement inclus (Valence et alentours)" },
];

const SERVICE_LINKS = [
  { href: "/osteopathe-sportif", label: "Ostéopathe sportif" },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-femme-enceinte", label: "Ostéopathe femme enceinte" },
  { href: "/osteopathe-dos", label: "Ostéopathe mal de dos" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
];

export default function TarifsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <section className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden">
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
              Tarifs Ostéopathe Valence (26000)
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Consultations au cabinet et à domicile. Facture délivrée pour le remboursement par votre mutuelle.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Nos tarifs de consultation
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <div className="grid gap-6 md:grid-cols-3">
              {TARIFS.map(({ title, price, duration }) => (
                <div
                  key={title}
                  className="card-shadow card-hover rounded-2xl border border-white/30 bg-white/70 backdrop-blur-xl p-8 text-center"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="mt-4 text-5xl font-light text-gold">{price}</p>
                  <p className="mt-2 text-sm text-gray-600">{duration}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Remboursement par les mutuelles
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full" aria-hidden />
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
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Moyens de paiement
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full" aria-hidden />
            <p className="text-gray-600 text-center">
              Carte bancaire, espèces et chèque acceptés. Le règlement s&apos;effectue à la fin de chaque séance. Une facture vous est délivrée systématiquement pour votre mutuelle.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Infos pratiques
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-8 rounded-full" aria-hidden />
            <div className="grid gap-6 md:grid-cols-2 text-gray-600">
              <div className="card-shadow rounded-2xl bg-white p-6 border border-bluegray/20">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Adresse</h3>
                <p>45 avenue Victor Hugo<br />26000 Valence</p>
                <p className="mt-2 text-sm">Parking à proximité. Cabinet accessible.</p>
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
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">
              Questions fréquentes – Tarifs et remboursement
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-2xl text-center">
            <Link
              href="/#contact"
              className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90"
            >
              Prendre rendez-vous
            </Link>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 md:px-8 bg-offwhite border-t border-bluegray/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-xl font-light text-gray-800 md:text-2xl text-center mb-4">
              Nos soins en ostéopathie à Valence
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-8 rounded-full" aria-hidden />
            <div className="flex flex-wrap justify-center gap-4">
              {SERVICE_LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage"
                >
                  {label}
                </Link>
              ))}
              <Link href="/blog" className="rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage">
                Blog
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
