import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionReveal from "@/components/SectionReveal";
import FloatingCTA from "@/components/FloatingCTA";
import LatestArticlesBanner from "@/components/LatestArticlesBanner";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-dos/`;

export const metadata: Metadata = {
  title: "Ostéopathe Mal de Dos Valence (26000) – Lombalgie, Sciatique & Hernie | Cabinet D.O.",
  description:
    "Ostéopathe mal de dos à Valence (26000) : lombalgie, sciatique, hernie discale, cervicalgie. 55€ la séance. ☎ Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe Mal de Dos Valence (26000) – Lombalgie, Sciatique & Hernie | Cabinet D.O.",
    description: "Ostéopathe mal de dos à Valence. Lombalgie, sciatique, cervicalgie. Techniques douces, RDV en ligne.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Cabinet d'ostéopathie à Valence – ostéopathe dos" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};


const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Ostéopathie adultes – mal de dos",
  description: "Traitement des douleurs dorsales, cervicalgies, lombalgies, sciatiques, hernie discale à Valence.",
  provider: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE },
  areaServed: { "@type": "City", name: "Valence" },
  offers: { "@type": "Offer", price: "55", priceCurrency: "EUR" },
  serviceType: "Ostéopathie mal de dos",
  audience: { "@type": "PeopleAudience", audienceType: "Adultes souffrant de douleurs dorsales" },
};

const FAQ_ITEMS = [
  {
    q: "Est-ce que l'ostéopathe fait craquer le dos ?",
    a: "Pas systématiquement. Les « craquements » (techniques de thrust) sont une possibilité parmi d'autres. L'ostéopathe à Valence utilise aussi des techniques douces (musculaires, fasciales, viscérales) qui ne font pas craquer. Le choix dépend de votre état, de votre âge et de votre préférence. Vous pouvez toujours indiquer que vous préférez des techniques sans craquement.",
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
    a: "Oui. En cas de blocage aigu (lumbago, torticolis), le cabinet s'efforce de proposer un créneau sous 24 à 48 h selon les disponibilités. Appelez le cabinet pour signaler une urgence. En parallèle, évitez les positions qui augmentent la douleur et consultez un médecin si la douleur est très intense ou s'accompagne de signes neurologiques (jambe qui lâche, perte de sensibilité).",
  },
  {
    q: "L'ostéopathie est-elle efficace contre la sciatique ?",
    a: "Oui, dans beaucoup de cas. L'ostéopathe à Valence cherche à libérer les structures qui compriment ou irritent le nerf sciatique (bassin, vertèbres, muscles). Les techniques sont adaptées à l'origine de la sciatique. Une à quelques séances peuvent suffire pour une sciatique d'origine mécanique. En cas de sciatique persistante ou sévère, un avis médical est important.",
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
const IconLombago = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const IconCervical = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const IconSciatique = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
const IconHernie = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const IconDorsal = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>;
const IconBlocage = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>;

const PATHOLOGIES = [
  { title: "Lombalgie et lumbago", desc: "Traitement des douleurs du bas du dos, aiguës ou chroniques.", Icon: IconLombago, badge: "Lombaires" },
  { title: "Cervicalgie et torticolis", desc: "Soulagement des douleurs et raideurs du cou.", Icon: IconCervical, badge: "Cou" },
  { title: "Sciatique et cruralgie", desc: "Libération des tensions à l'origine des névralgies.", Icon: IconSciatique, badge: "Névralgie" },
  { title: "Hernie discale et protrusion", desc: "Approche douce pour soulager sans aggraver la lésion.", Icon: IconHernie, badge: "Discale" },
  { title: "Douleurs entre les omoplates", desc: "Travail dorsal et costal pour les dorsalgies.", Icon: IconDorsal, badge: "Dorsal" },
  { title: "Blocage vertébral", desc: "Restaurer la mobilité après un faux mouvement ou un traumatisme.", Icon: IconBlocage, badge: "Urgence" },
];

const TEMOIGNAGE = { name: "Marie L.", motif: "Douleurs dorsales chroniques", text: "Après des mois de douleurs, j'ai retrouvé un vrai confort. L'approche est douce et professionnelle. Je recommande vivement.", stars: 5 };

const ALL_LINKS = [{ href: "/", label: "Accueil" }, { href: "/osteopathe-sportif", label: "Ostéopathe sportif" }, { href: "/osteopathe-bebe", label: "Ostéopathe bébé" }, { href: "/osteopathe-femme-enceinte", label: "Femme enceinte" }, { href: "/osteopathe-senior", label: "Ostéopathe senior" }, { href: "/tarifs", label: "Tarifs" }, { href: "/blog", label: "Blog" }];

export default function OsteopatheDosPage() {
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
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">Ostéopathe Mal de Dos à Valence (26000)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Lombalgie, lumbago, sciatique, hernie discale, cervicalgie. Soulagement durable au cabinet à Valence.</p>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-offwhite overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Mal de dos à Valence : quand consulter un ostéopathe ?</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto" aria-hidden />
              <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
                <p>Le mal de dos (lombalgie, cervicalgie, dorsalgie) est l&apos;un des motifs les plus fréquents de consultation en ostéopathie à Valence (26000). Que la douleur soit apparue après un faux mouvement, une position prolongée au travail, un stress ou une ancienne blessure, l&apos;ostéopathe D.O. réalise un bilan global pour identifier les zones de restriction et les compensations qui entretiennent la douleur. Comme pour l&apos;<Link href="/osteopathe-sportif" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe sportif</Link> ou l&apos;<Link href="/osteopathe-senior" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe senior</Link>, le traitement associe des techniques articulaires, musculaires et fasciales, adaptées à votre âge et à votre état de santé. Les femmes enceintes souffrant du dos peuvent bénéficier d&apos;un accompagnement spécifique avec l&apos;<Link href="/osteopathe-femme-enceinte" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe femme enceinte</Link>. L&apos;objectif de votre <Link href="/" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe à Valence</Link> est de restaurer la mobilité et de vous donner des conseils pour limiter les récidives.</p>
                <p>Le cabinet d&apos;ostéopathie avenue Victor Hugo à Valence reçoit de nombreux patients pour des douleurs du dos. La première séance dure environ 45 minutes (interrogatoire, examen, traitement). Une consultation adulte est au tarif de 55€ ; une facture est délivrée pour le remboursement par votre mutuelle. En cas de blocage aigu, le cabinet s&apos;efforce de proposer un rendez-vous rapide. Prenez rendez-vous avec votre <Link href="/" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe à Valence</Link> pour une séance adaptée à votre dos.</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-cream/50 overflow-hidden" animate="stagger">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-6xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Motifs de consultation – Mal de dos</h2>
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
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Témoignage – Ostéopathe Mal de Dos à Valence</h2>
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
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Questions fréquentes – Ostéopathe mal de dos</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-10" aria-hidden />
              <FaqAccordion items={FAQ_ITEMS} />
            </div>
            <SectionWave fillClass="fill-cream" />
          </SectionReveal>

          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous pour votre dos à Valence</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">Consultation adulte : <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.</p>
              <Link href="/#contact" className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90">Demander un rendez-vous</Link>
              <p className="mt-3 text-sm text-gray-600">
                ou appelez le <a href="tel:+33757905188" className="text-sage font-medium underline">+33 7 57 90 51 88</a>
              </p>
            </div>
          </SectionReveal>

          <LatestArticlesBanner />

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
