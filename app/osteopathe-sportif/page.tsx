import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionReveal from "@/components/SectionReveal";
import FloatingCTA from "@/components/FloatingCTA";
import LatestArticlesBanner from "@/components/LatestArticlesBanner";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-sportif/`;

export const metadata: Metadata = {
  title: "Ostéopathe Sportif Valence (26000) – Blessures & Récupération | Cabinet D.O.",
  description:
    "Ostéopathe du sport à Valence (26000) : entorses, tendinites, pubalgies. Préparation, récupération. 55€ la séance. ☎ Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe Sportif Valence (26000) – Blessures & Récupération | Cabinet D.O.",
    description: "Ostéopathe du sport à Valence. Blessures, récupération, prévention. Prenez RDV.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Ostéopathe sportif à Valence" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ostéopathie sportifs",
  description: "Traitement des blessures sportives (entorses, tendinites, pubalgies), récupération et prévention à Valence.",
  provider: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE },
  areaServed: { "@type": "City", name: "Valence" },
  offers: { "@type": "Offer", price: "55", priceCurrency: "EUR" },
  serviceType: "Ostéopathie du sport",
  audience: { "@type": "PeopleAudience", audienceType: "Sportifs" },
};

const FAQ_ITEMS = [
  { q: "L'ostéopathe peut-il améliorer mes performances sportives ?", a: "Oui. En libérant les restrictions de mobilité et en optimisant l'équilibre du corps, l'ostéopathe contribue à une meilleure récupération, une posture plus efficace et une diminution des tensions qui peuvent freiner la performance. De nombreux sportifs à Valence consultent en entretien avant une compétition." },
  { q: "Combien de temps après une blessure puis-je consulter ?", a: "Dès que la phase aiguë (œdème, inflammation majeure) est passée, en général après 48 à 72 h. En cas de doute (entorse grave, fracture suspectée), un avis médical est indispensable. L'ostéopathe intervient ensuite pour restaurer la mobilité et limiter les récidives." },
  { q: "Faut-il attendre d'avoir mal pour consulter ?", a: "Non. La prévention est l'un des piliers de l'ostéopathie du sport. Des séances régulières (avant/après une saison ou un objectif) permettent de corriger les petits déséquilibres avant qu'ils ne deviennent douloureux ou provoquent une blessure." },
  { q: "Quels sports causent le plus de blessures traitées en ostéo ?", a: "À Valence et dans la Drôme, course à pied, football, tennis, rugby et cyclisme figurent parmi les disciplines les plus fréquentes en consultation. Les motifs courants sont les tendinites, entorses, douleurs lombaires, pubalgies et cervicalgies. L'ostéopathe adapte son approche au geste sportif et à la discipline." },
  { q: "Différence entre ostéo du sport et kiné du sport ?", a: "L'ostéopathe travaille sur l'ensemble du corps avec une approche globale (articulations, fascias, viscères) pour rétablir la mobilité et l'équilibre. Le kiné du sport se concentre davantage sur la rééducation ciblée (renforcement, étirements, protocoles post-blessure). Les deux sont complémentaires." },
  { q: "Peut-on consulter pendant une saison de compétition ?", a: "Oui. Des séances d'entretien pendant la saison permettent de limiter les blessures et d'optimiser la récupération. L'ostéopathe peut aussi intervenir en bord de terrain (bilans pré-compétition, soins légers) en complément du staff médical." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
};

const IconStar = () => <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20" aria-hidden><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

const IconEntorse = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const IconTendinite = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
const IconPubalgie = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const IconLombalgie = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const IconGenou = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>;
const IconEpaule = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;

const PATHOLOGIES = [
  { title: "Entorses (cheville, genou)", desc: "Traitement des séquelles d'entorses et rééquilibrage des structures pour limiter les récidives.", Icon: IconEntorse, badge: "Blessure" },
  { title: "Tendinites et tendinopathies", desc: "Traitement des tendinites (épaule, coude, tendon d'Achille, genou) par approche globale.", Icon: IconTendinite, badge: "Surmenage" },
  { title: "Pubalgie et douleurs inguinales", desc: "Soulagement des tensions du bassin et des adducteurs fréquentes chez les sportifs.", Icon: IconPubalgie, badge: "Bassin" },
  { title: "Lombalgies et dorsalgies", desc: "Prévention et traitement des douleurs du dos liées à la pratique sportive ou au surmenage.", Icon: IconLombalgie, badge: "Dos" },
  { title: "Syndrome de l'essuie-glace", desc: "Prise en charge des douleurs de la face latérale du genou en course à pied.", Icon: IconGenou, badge: "Course" },
  { title: "Douleurs cervicales et épaules", desc: "Libération des tensions du cou et des épaules (natation, musculation, sports de raquette).", Icon: IconEpaule, badge: "Haut du corps" },
];

const TEMOIGNAGE = { name: "Pierre F.", motif: "Blessure au genou (sport)", text: "Reprise du running après une entorse. Bilan et soins adaptés, je suis revenu progressivement sans douleur. Top.", stars: 5 };

const ALL_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/osteopathe-bebe", label: "Ostéopathe bébé" },
  { href: "/osteopathe-femme-enceinte", label: "Femme enceinte" },
  { href: "/osteopathe-dos", label: "Mal de dos" },
  { href: "/osteopathe-senior", label: "Ostéopathe senior" },
  { href: "/tarifs", label: "Tarifs" },
  { href: "/blog", label: "Blog" },
];

export default function OsteopatheSportifPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FloatingCTA />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <ScrollAnimations>
          {/* Hero */}
          <SectionReveal className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">Ostéopathe du Sport à Valence (26000)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Accompagnement des sportifs : blessures, récupération et prévention. Consultations au cabinet à Valence.</p>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          {/* Intro */}
          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-offwhite overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Pourquoi consulter un ostéopathe du sport à Valence ?</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto" aria-hidden />
              <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
                <p>Que vous soyez coureur, footballeur, tennisman ou pratiquant de musculation, votre <Link href="/" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe à Valence</Link> vous accompagne dans votre pratique sportive à chaque étape : prévention avant la saison, traitement des blessures (entorses, tendinites, pubalgies) et optimisation de la récupération après l&apos;effort. Les douleurs de dos fréquentes chez le sportif peuvent être prises en charge par l&apos;<Link href="/osteopathe-dos" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe du dos</Link> ; pour un entretien à long terme, l&apos;<Link href="/osteopathe-senior" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe senior</Link> propose aussi des techniques douces adaptées. Les sportives enceintes bénéficient d&apos;un suivi adapté avec l&apos;<Link href="/osteopathe-femme-enceinte" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe spécialisé grossesse</Link>. L&apos;ostéopathe D.O. travaille sur l&apos;ensemble du corps pour identifier les déséquilibres qui favorisent les douleurs ou les blessures à répétition.</p>
                <p>Le cabinet situé avenue Victor Hugo à Valence reçoit de nombreux sportifs de la Drôme et des environs. Chaque consultation comprend un interrogatoire (type de sport, fréquence, antécédents de blessures), un examen clinique puis un traitement personnalisé. L&apos;ostéopathe vous conseille également sur les étirements, l&apos;hydratation et la progressivité de la reprise. Consultation adulte : 55€, facture délivrée pour votre mutuelle. Prenez rendez-vous avec votre <Link href="/" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe à Valence</Link> pour une séance adaptée à votre pratique sportive.</p>
              </div>
            </div>
          </SectionReveal>

          {/* Pathologies */}
          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-cream/50 overflow-hidden" animate="stagger">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-6xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Motifs de consultation en ostéopathie du sport</h2>
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

          {/* Témoignage */}
          <SectionReveal className="py-16 md:py-20 px-4 md:px-8 bg-offwhite" animate="fade-up">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Témoignage – Ostéopathe du Sport à Valence</h2>
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

          {/* FAQ */}
          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-sage/10 overflow-hidden" animate="fade-up">
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Questions fréquentes – Ostéopathe du sport</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-10" aria-hidden />
              <FaqAccordion items={FAQ_ITEMS} />
            </div>
            <SectionWave fillClass="fill-cream" />
          </SectionReveal>

          {/* CTA */}
          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous avec votre ostéopathe du sport à Valence</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">Consultation adulte : <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.</p>
              <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Demander un rendez-vous</Link>
              <p className="mt-3 text-sm text-gray-600">
                ou appelez le <a href="tel:+33757905188" className="text-sage font-medium underline">+33 7 57 90 51 88</a>
              </p>
            </div>
          </SectionReveal>

          <LatestArticlesBanner />

          {/* Maillage */}
          <SectionReveal className="py-16 md:py-20 px-4 md:px-8 bg-offwhite border-t border-bluegray/20" animate="fade-up">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-xl font-light text-gray-800 md:text-2xl text-center mb-4">Nos autres soins et pages</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-8" aria-hidden />
              <div className="flex flex-wrap justify-center gap-4">
                {ALL_LINKS.map(({ href, label }) => (
                  <Link key={href} href={href} className="link-lire-la-suite rounded-full border border-sage/50 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition hover:bg-cream/50 hover:text-sage hover:scale-[1.02] hover:-translate-y-1">
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </SectionReveal>
        </ScrollAnimations>
      </main>
    </>
  );
}
