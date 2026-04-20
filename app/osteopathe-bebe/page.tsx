import type { Metadata } from "next";
import Link from "next/link";
import FaqAccordion from "@/components/FaqAccordion";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionReveal from "@/components/SectionReveal";
import FloatingCTA from "@/components/FloatingCTA";
import LatestArticlesBanner from "@/components/LatestArticlesBanner";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/osteopathe-bebe/`;

export const metadata: Metadata = {
  title: "Ostéopathe Bébé Valence (26000) – Coliques, Torticolis & Plagiocéphalie | Cabinet D.O.",
  description: "Ostéopathe bébé à Valence (26000) : coliques, torticolis, plagiocéphalie, sommeil. Techniques douces dès la naissance. 50€. ☎ Prenez RDV.",
  alternates: { canonical },
  openGraph: {
    title: "Ostéopathe Bébé Valence (26000) – Coliques, Torticolis & Plagiocéphalie | Cabinet D.O.",
    description: "Ostéopathe bébé à Valence. Coliques, torticolis, plagiocéphalie. Techniques douces. Prenez RDV.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Cabinet ostéopathe bébé à Valence" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};


const serviceSchema = { "@context": "https://schema.org", "@type": "Service", name: "Ostéopathie nourrissons", description: "Prise en charge des coliques, torticolis, plagiocéphalie et troubles du sommeil du nourrisson à Valence.", provider: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE }, areaServed: { "@type": "City", name: "Valence" }, offers: { "@type": "Offer", price: "50", priceCurrency: "EUR" }, serviceType: "Ostéopathie pédiatrique", audience: { "@type": "PeopleAudience", audienceType: "Nourrissons et bébés" } };

const FAQ_ITEMS = [
  { q: "À quel âge amener mon bébé chez l'ostéopathe ?", a: "Dès les premiers jours de vie. De nombreux parents à Valence consultent après l'accouchement pour un bilan, surtout en cas d'accouchement difficile, de césarienne ou de ventouse. L'ostéopathe utilise des techniques très douces et adaptées au nourrisson." },
  { q: "Est-ce douloureux pour le bébé ?", a: "Non. Les techniques utilisées pour les bébés sont extrêmement douces (pressions légères, mobilisations très progressives). Le bébé peut pleurer pendant la séance pour d'autres raisons (fatigue, faim, inconfort passager), mais les manipulations en elles-mêmes ne sont pas douloureuses." },
  { q: "Combien de séances pour les coliques ?", a: "En général 1 à 3 séances suffisent pour observer une nette amélioration. Chaque bébé réagit différemment. L'ostéopathe évalue en début de séance l'évolution depuis la dernière fois et vous conseille sur la suite à donner." },
  { q: "Faut-il une ordonnance du pédiatre ?", a: "Non. Vous pouvez consulter un ostéopathe pour votre bébé sans ordonnance. Il est toutefois recommandé d'informer votre pédiatre et de s'assurer qu'il n'y a pas de contre-indication médicale (fièvre, infection, etc.)." },
  { q: "L'ostéo peut-il traiter une plagiocéphalie avancée ?", a: "L'ostéopathie peut aider à améliorer la mobilité du crâne et du cou et à réduire les tensions qui aggravent la déformation. En cas de plagiocéphalie marquée, un suivi pluridisciplinaire (ostéo + conseils de positionnement, parfois kiné ou orthèse) est souvent recommandé. L'ostéopathe vous oriente si besoin." },
  { q: "Mon bébé pleure beaucoup, l'ostéo peut aider ?", a: "Les pleurs peuvent avoir plusieurs causes (coliques, reflux, tensions liées à l'accouchement, sommeil). L'ostéopathe examine le bébé pour repérer des tensions (crâne, bassin, abdomen) et les libérer. Beaucoup de parents à Valence constatent une amélioration du confort et du sommeil après une ou quelques séances." },
];

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ_ITEMS.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) };

const IconStar = () => <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20" aria-hidden><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>;

const IconColique = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const IconTorticolis = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" /></svg>;
const IconCrane = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const IconSommeil = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>;
const IconReflux = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
const IconAccouchement = () => <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const PATHOLOGIES = [
  { title: "Coliques du nourrisson", desc: "Soulagement des tensions abdominales et du bassin souvent liées à l'accouchement.", Icon: IconColique, badge: "Digestif" },
  { title: "Torticolis congénital", desc: "Mobilisation douce du cou et du crâne pour retrouver une bonne rotation de tête.", Icon: IconTorticolis, badge: "Cou" },
  { title: "Plagiocéphalie (tête plate)", desc: "Travail crânien et conseils de positionnement pour limiter la déformation.", Icon: IconCrane, badge: "Crâne" },
  { title: "Troubles du sommeil", desc: "Libération des tensions qui peuvent gêner l'endormissement et le repos.", Icon: IconSommeil, badge: "Sommeil" },
  { title: "Reflux et régurgitations", desc: "Approche viscérale et diaphragmatique pour améliorer le confort digestif.", Icon: IconReflux, badge: "Reflux" },
  { title: "Après accouchement difficile", desc: "Bilan et soins après césarienne, ventouse, forceps ou travail long.", Icon: IconAccouchement, badge: "Post-natal" },
];

const TEMOIGNAGE = { name: "Sophie M.", motif: "Coliques de bébé", text: "Notre petit avait des coliques difficiles. En quelques séances, nous avons vu une vraie amélioration. Ostéopathe à l'écoute et rassurant.", stars: 5 };

const ALL_LINKS = [{ href: "/", label: "Accueil" }, { href: "/osteopathe-sportif", label: "Ostéopathe sportif" }, { href: "/osteopathe-femme-enceinte", label: "Femme enceinte" }, { href: "/osteopathe-dos", label: "Mal de dos" }, { href: "/osteopathe-senior", label: "Ostéopathe senior" }, { href: "/tarifs", label: "Tarifs" }, { href: "/blog", label: "Blog" }];

export default function OsteopatheBebePage() {
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
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">Ostéopathe Bébé & Nourrisson à Valence (26000)</h1>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Coliques, torticolis, plagiocéphalie, sommeil. Techniques douces dès les premiers jours de vie.</p>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-offwhite overflow-hidden" animate="fade-up">
            <div className="absolute top-0 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-4xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Ostéopathie pour bébé à Valence : un accompagnement doux et adapté</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto" aria-hidden />
              <div className="mt-10 space-y-6 text-gray-600 leading-relaxed">
                <p>Consulter un ostéopathe pour son bébé à Valence (26000) est une démarche de plus en plus courante. L&apos;accouchement, même bien vécu, peut laisser des tensions au niveau du crâne, du bassin ou du cou du nourrisson. Ces tensions peuvent se manifester par des pleurs, des coliques, un torticolis, une tête qui se déforme (plagiocéphalie) ou des difficultés à s&apos;endormir. Souvent les parents viennent après un suivi <Link href="/osteopathe-femme-enceinte" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathie femme enceinte</Link> pendant la grossesse, ou pour des douleurs qui concernent aussi l&apos;<Link href="/osteopathe-dos" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe du dos</Link>. Votre <Link href="/" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe à Valence</Link> utilise des techniques extrêmement douces, sans craquement, adaptées à la fragilité du bébé. Le cabinet avenue Victor Hugo est un lieu calme et rassurant pour les familles. Les grands-parents qui accompagnent peuvent aussi consulter l&apos;<Link href="/osteopathe-senior" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe senior</Link> pour leurs propres douleurs.</p>
                <p>La première séance comprend un interrogatoire avec les parents (déroulement de la grossesse et de l&apos;accouchement, comportement du bébé), un examen très délicat puis un traitement ciblé. La durée est en général de 30 à 40 minutes. Une consultation nourrisson est au tarif de 50€ ; une facture est délivrée pour le remboursement par votre mutuelle. Aucune ordonnance n&apos;est requise. Prenez rendez-vous avec votre <Link href="/" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathe à Valence</Link> pour une consultation adaptée à votre bébé.</p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="relative py-16 md:py-20 px-4 md:px-8 bg-cream/50 overflow-hidden" animate="stagger">
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-6xl">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Motifs de consultation pour votre bébé</h2>
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
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Témoignage – Ostéopathe Bébé à Valence</h2>
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
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl text-center mb-4">Questions fréquentes – Ostéopathe bébé</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-10" aria-hidden />
              <FaqAccordion items={FAQ_ITEMS} />
            </div>
            <SectionWave fillClass="fill-cream" />
          </SectionReveal>

          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">Prendre rendez-vous pour votre bébé à Valence</h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">Consultation nourrisson / enfant : <strong className="text-gold text-2xl">50€</strong> (environ 30–40 min). Facture pour mutuelle.</p>
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
