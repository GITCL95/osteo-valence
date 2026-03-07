import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionReveal from "@/components/SectionReveal";
import FloatingCTA from "@/components/FloatingCTA";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-senior/`;

export const metadata: Metadata = {
  title: "Ostéopathe Senior Valence (26000) – Arthrose, Mobilité & Domicile | Cabinet D.O.",
  description: "Ostéopathe senior à Valence (26000) : arthrose, mobilité, équilibre, prévention des chutes. 55€ au cabinet, 75€ à domicile. ☎ Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe Senior Valence (26000) – Arthrose, Mobilité & Domicile | Cabinet D.O.",
    description: "Ostéopathe senior à Valence. Confort, mobilité, prévention. Prenez RDV.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Ostéopathe senior à Valence" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};


const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Ostéopathie seniors", description: "Amélioration de la mobilité, soulagement de l'arthrose, travail sur l'équilibre et prévention des chutes à Valence.", provider: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE }, areaServed: { "@type": "City", name: "Valence" }, offers: [{ "@type": "Offer", name: "Consultation cabinet", price: "55", priceCurrency: "EUR" }, { "@type": "Offer", name: "Consultation domicile", price: "75", priceCurrency: "EUR" }], serviceType: "Ostéopathie gériatrique", audience: { "@type": "PeopleAudience", audienceType: "Seniors" } };

const FAQ_ITEMS = [
  { q: "Les manipulations sont-elles adaptées aux personnes âgées ?", a: "Oui. L'ostéopathe à Valence adapte toujours ses techniques à l'âge et à l'état de santé. Chez les seniors, on privilégie des techniques douces (musculaires, fasciales, mobilisations) et on évite les manipulations à fort impact lorsqu'il existe de l'ostéoporose ou des antécédents. Votre confort et votre sécurité sont prioritaires." },
  { q: "L'ostéo peut-elle soulager l'arthrose ?", a: "L'ostéopathie ne guérit pas l'arthrose, mais elle peut soulager les douleurs et améliorer la mobilité en travaillant sur les tissus autour de l'articulation, la posture et les compensations. Beaucoup de seniors à Valence constatent une réduction de la gêne au quotidien. Un avis médical est recommandé en cas d'arthrose sévère ou de prothèse." },
  { q: "Peut-on consulter après une prothèse de hanche ?", a: "Oui, après la période de consolidation indiquée par le chirurgien (souvent quelques semaines à quelques mois). L'ostéopathe travaille alors en douceur sur le bassin, le dos et les membres pour rééquilibrer la posture et favoriser une bonne récupération. Les techniques sont adaptées et il n'y a pas de manipulation directe sur la prothèse." },
  { q: "L'ostéo se déplace à domicile pour les seniors ?", a: "Oui. Des consultations à domicile sont possibles à Valence et dans les environs pour les personnes qui ne peuvent pas se déplacer. Le tarif à domicile est de 75€ (déplacement inclus). Contactez le cabinet pour organiser une séance à domicile." },
  { q: "À quelle fréquence consulter quand on est senior ?", a: "Cela dépend de votre état. Pour un suivi préventif, 2 à 3 séances par an sont souvent suffisantes. En cas de douleur ou de pathologie chronique, l'ostéopathe peut proposer un rythme plus rapproché au début puis un espacement. L'ostéopathe vous conseille en fonction de votre situation." },
  { q: "L'ostéo aide-t-elle à prévenir les chutes ?", a: "En partie. En améliorant la mobilité, l'équilibre et la perception du corps, l'ostéopathie peut contribuer à une meilleure stabilité à la marche et à une réduction du risque de chute. Elle ne remplace pas la rééducation ni les exercices d'équilibre prescrits par le médecin ou le kiné, mais elle les complète." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };

const IconStar = () => <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20" aria-hidden><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

const IconArthrose = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>;
const IconDos = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const IconMobilite = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;
const IconEquilibre = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>;
const IconProthese = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
const IconVertiges = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;

const PATHOLOGIES = [
  { title: "Arthrose et douleurs articulaires", desc: "Soulagement des tensions et amélioration de la mobilité autour des articulations.", Icon: IconArthrose, badge: "Articulations" },
  { title: "Douleurs du dos et du cou", desc: "Techniques douces pour les lombalgies et cervicalgies du senior.", Icon: IconDos, badge: "Dos" },
  { title: "Raideur et perte de mobilité", desc: "Mobilisations et étirements doux pour retrouver de l'amplitude.", Icon: IconMobilite, badge: "Mobilité" },
  { title: "Troubles de l'équilibre", desc: "Travail postural et proprioceptif pour une meilleure stabilité.", Icon: IconEquilibre, badge: "Équilibre" },
  { title: "Douleurs après prothèse", desc: "Rééquilibrage du corps après pose de prothèse de hanche ou de genou.", Icon: IconProthese, badge: "Post-op" },
  { title: "Céphalées et vertiges", desc: "Approche crânienne et cervicale pour les maux de tête et vertiges d'origine mécanique.", Icon: IconVertiges, badge: "Crâne" },
];

const TEMOIGNAGE = { name: "Jean M.", motif: "Arthrose et mobilité", text: "À 72 ans, je retrouve de la souplesse et moins de douleurs. L'ostéopathe est très à l'écoute et adapte les soins. Je recommande.", stars: 5 };

const ALL_LINKS = [{ href: "/", label: "Accueil" }, { href: "/osteopathe-sportif", label: "Ostéopathe sportif" }, { href: "/osteopathe-bebe", label: "Ostéopathe bébé" }, { href: "/osteopathe-femme-enceinte", label: "Femme enceinte" }, { href: "/osteopathe-dos", label: "Mal de dos" }, { href: "/tarifs", label: "Tarifs" }, { href: "/blog", label: "Blog" }];

export default function OsteopatheSeniorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FloatingCTA />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <ScrollAnimations>
          <SectionReveal className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">Ostéopathe Senior à Valence (26000)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Mobilité, arthrose, équilibre et prévention des chutes. Techniques douces adaptées aux seniors.</p>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-offwhite overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Ostéopathie pour les seniors à Valence : confort et mobilité</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto" aria-hidden />
              <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
                <p>Avec l&apos;âge, les articulations peuvent se raidir, l&apos;arthrose apparaître et les douleurs du dos ou des membres devenir plus fréquentes. Votre <Link href="/" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe à Valence</Link> accompagne les seniors avec des techniques adaptées : pas de manipulations brutales, mais des mobilisations douces, des techniques musculaires et fasciales et un travail sur la posture et l&apos;équilibre. Pour les douleurs dorsales, l&apos;<Link href="/osteopathe-dos" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe du dos</Link> et l&apos;<Link href="/osteopathe-sportif" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe sportif</Link> partagent la même approche globale. Les seniors peuvent aussi bénéficier d&apos;un suivi post-partum via l&apos;<Link href="/osteopathe-femme-enceinte" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe femme enceinte</Link> pour les grands-mamans récentes. L&apos;objectif est de maintenir ou retrouver une bonne mobilité, de soulager les douleurs et de contribuer à la prévention des chutes. Le cabinet est accessible et des consultations à domicile sont proposées pour les personnes qui ne peuvent pas se déplacer.</p>
                <p>Chaque séance au cabinet avenue Victor Hugo à Valence commence par un interrogatoire (antécédents, traitements, prothèses éventuelles) pour adapter au mieux le traitement. La consultation adulte est au tarif de 55€ ; la consultation à domicile à 75€. Une facture est remise pour le remboursement par votre mutuelle. Prenez rendez-vous avec votre <Link href="/" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe à Valence</Link> en ligne ou par téléphone pour une séance adaptée aux seniors.</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-cream/50 overflow-hidden" animate="stagger">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-6xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Motifs de consultation – Ostéopathe senior</h2>
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
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Témoignage – Ostéopathe Senior à Valence</h2>
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
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Questions fréquentes – Ostéopathe senior</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-10" aria-hidden />
              <FaqAccordion items={FAQ_ITEMS} />
            </div>
            <SectionWave fillClass="fill-cream" />
          </SectionReveal>

          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous – Ostéopathe senior à Valence</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">Consultation adulte : <strong className="text-gold text-2xl">55€</strong>. À domicile : <strong className="text-gold text-2xl">75€</strong>. Facture pour mutuelle.</p>
              <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Demander un rendez-vous</Link>
              <p className="mt-3 text-sm text-gray-600">
                ou appelez le <a href="tel:+33757905188" className="text-sage font-medium underline">+33 7 57 90 51 88</a>
              </p>
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
