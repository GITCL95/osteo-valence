import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionReveal from "@/components/SectionReveal";
import FloatingCTA from "@/components/FloatingCTA";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-femme-enceinte`;

export const metadata: Metadata = {
  title: "Ostéopathe femme enceinte Valence | Cabinet D.O.",
  description:
    "Ostéopathe femme enceinte à Valence (26000). Douleurs grossesse, préparation accouchement, post-partum. Techniques douces. Prenez RDV au cabinet.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe femme enceinte Valence | Cabinet D.O.",
    description: "Ostéopathe grossesse à Valence. Confort, préparation accouchement. Techniques douces. Prenez RDV.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Ostéopathe grossesse à Valence" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ostéopathie grossesse",
  description: "Accompagnement ostéopathique pendant la grossesse : douleurs lombaires, préparation du bassin à l'accouchement, post-partum à Valence.",
  provider: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE },
  areaServed: { "@type": "City", name: "Valence" },
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

const IconStar = () => <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20" aria-hidden><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;
const IconDos = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const IconBassin = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const IconSciatique = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const IconAccouchement = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconDigestif = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const IconPostPartum = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

const PATHOLOGIES = [
  { title: "Lombalgies et douleurs du dos", desc: "Soulagement des tensions liées au poids du bébé et à la posture.", Icon: IconDos, badge: "Dos" },
  { title: "Douleurs du bassin et du coccyx", desc: "Mobilisation du bassin pour améliorer le confort et la mobilité.", Icon: IconBassin, badge: "Bassin" },
  { title: "Sciatique et névralgies", desc: "Traitement des compressions et tensions à l'origine des douleurs.", Icon: IconSciatique, badge: "Névralgie" },
  { title: "Préparation du bassin à l'accouchement", desc: "Travail sur la mobilité pelvienne pour favoriser un accouchement plus fluide.", Icon: IconAccouchement, badge: "Accouchement" },
  { title: "Troubles digestifs et reflux", desc: "Approche viscérale et diaphragmatique pour le confort digestif.", Icon: IconDigestif, badge: "Digestif" },
  { title: "Rééducation post-partum", desc: "Rééquilibrage après l'accouchement : bassin, dos, cicatrices.", Icon: IconPostPartum, badge: "Post-partum" },
];

const TEMOIGNAGE = { name: "Thomas D.", motif: "Suivi pendant la grossesse de ma compagne", text: "Accompagnement parfait pendant toute la grossesse. Elle a pu aborder l'accouchement plus sereinement. Merci !", stars: 5 };

const ALL_LINKS = [{ href: "/", label: "Accueil" }, { href: "/osteopathe-sportif", label: "Ostéopathe sportif" }, { href: "/osteopathe-bebe", label: "Ostéopathe bébé" }, { href: "/osteopathe-dos", label: "Mal de dos" }, { href: "/osteopathe-senior", label: "Ostéopathe senior" }, { href: "/tarifs", label: "Tarifs" }, { href: "/blog", label: "Blog" }];

export default function OsteopatheFemmeEnceintePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FloatingCTA />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <ScrollAnimations>
          <SectionReveal className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">Ostéopathe Femme Enceinte à Valence (26000)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Accompagnement pendant la grossesse et après l&apos;accouchement. Confort, préparation du bassin, post-partum.</p>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-offwhite overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Ostéopathie et grossesse à Valence : confort et préparation</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto" aria-hidden />
              <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
                <p>La grossesse modifie la posture, sollicite le bassin et le dos et peut provoquer des douleurs lombaires, des sciatiques ou des tensions ligamentaires. L&apos;ostéopathe femme enceinte à Valence (26000) accompagne les futures mamans avec des techniques douces et adaptées à chaque trimestre. En cas de lombalgie ou sciatique, l&apos;<Link href="/osteopathe-dos" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe du dos</Link> et l&apos;approche grossesse se complètent ; après l&apos;accouchement, un suivi <Link href="/osteopathe-bebe" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe bébé</Link> est souvent conseillé pour le nourrisson. Le travail porte sur la mobilité du bassin, la libération du diaphragme, le confort du dos et la préparation des tissus pour l&apos;accouchement. Les positions sur la table sont toujours adaptées (couchée sur le côté, semi-assise) pour éviter toute compression du ventre.</p>
                <p>Le cabinet situé avenue Victor Hugo à Valence reçoit de nombreuses femmes enceintes de Valence et des environs. Chaque séance comprend un interrogatoire (semaine de grossesse, antécédents, motifs de consultation), un examen en douceur puis un traitement personnalisé. Une consultation adulte est au tarif de 55€ ; une facture est remise pour le remboursement par votre mutuelle. Vous pouvez prendre rendez-vous en ligne pour une séance d&apos;ostéopathie pendant la grossesse ou en post-partum.</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-cream/50 overflow-hidden" animate="stagger">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-6xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Motifs de consultation pendant et après la grossesse</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-10" aria-hidden />
              <div className="grid gap-6 sm:grid-cols-2" data-animate="stagger">
                {PATHOLOGIES.map(({ title, desc, Icon, badge }) => (
                  <div key={title} className="card-3d card-shadow rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 p-6 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
                    <span className="inline-block rounded-full bg-sage/10 text-sage px-3 py-1 text-xs font-medium mb-3">{badge}</span>
                    <div className="mb-3"><Icon /></div>
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          <SectionReveal className="py-16 md:py-20 px-4 md:px-8 bg-offwhite" animate="fade-up">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Témoignage patient</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-8" aria-hidden />
              <div className="card-shadow card-hover rounded-2xl bg-white p-6 border border-bluegray/20 hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300">
                <div className="testimonial-stars flex gap-1 mb-3">
                  {Array.from({ length: TEMOIGNAGE.stars }).map((_, i) => <span key={i} className="testimonial-star inline-block"><IconStar /></span>)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{TEMOIGNAGE.text}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-gray-800">{TEMOIGNAGE.name}</p>
                <p className="text-xs text-sage">{TEMOIGNAGE.motif}</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-sage/10 overflow-hidden" animate="fade-up">
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Questions fréquentes – Ostéopathe femme enceinte</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-10" aria-hidden />
              <FaqAccordion items={FAQ_ITEMS} />
            </div>
            <SectionWave fillClass="fill-cream" />
          </SectionReveal>

          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous – Ostéopathe grossesse à Valence</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">Consultation adulte : <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.</p>
              <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Demander un rendez-vous</Link>
            </div>
          </SectionReveal>

          <SectionReveal className="py-16 md:py-20 px-4 md:px-8 bg-offwhite border-t border-bluegray/20" animate="fade-up">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-xl font-light text-gray-800 md:text-2xl text-center mb-4">Nos autres soins et pages</h2>
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
