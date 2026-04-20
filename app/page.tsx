import Image from "next/image";
import Script from "next/script";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { getLatestArticles } from "./blog/data";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimations from "@/components/ScrollAnimations";
import SectionWave from "@/components/SectionWave";

// Icônes minimalistes SVG
const IconHand = () => (
  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
);
const IconBaby = () => (
  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconPregnant = () => (
  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconSport = () => (
  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);
const IconSenior = () => (
  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>
);
const IconStomach = () => (
  <svg className="w-8 h-8 text-sage" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);
const IconBuilding = () => (
  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);
const IconHeart = () => (
  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);
const IconClock = () => (
  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconShield = () => (
  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);
const IconStar = () => (
  <svg className="w-5 h-5 text-gold fill-current" viewBox="0 0 20 20" aria-hidden><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);
const IconPin = () => (
  <svg className="w-4 h-4 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconBack = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h7" />
  </svg>
);
const IconCar = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);
const IconFunction = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);
const IconCalendar = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const IconClipboard = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);
const IconSearch = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);
const IconLocation = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconTime = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);
const IconParking = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
  </svg>
);
const IconWheelchair = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    <circle cx="12" cy="4" r="2" strokeWidth={1.5} />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 18l-4-4m0 0l-2-2" />
  </svg>
);
const IconBus = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7v8m8-8v8m-8-4h8M4 7h16M4 17h16" />
  </svg>
);
const IconLightbulb = () => (
  <svg className="w-8 h-8 text-sage shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
);
const IconShieldEuro = () => (
  <svg className="w-8 h-8 text-gold shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const SERVICES = [
  {
    title: "Ostéopathie adultes",
    desc: "Traitement des douleurs dorsales, cervicalgies, lombalgies, sciatiques, névralgies et tensions musculaires. Soulagement des maux de dos chroniques ou aigus par des manipulations douces.",
    Icon: IconHand,
    href: "/osteopathe-dos",
  },
  {
    title: "Ostéopathie nourrissons & bébés",
    desc: "Prise en charge des coliques du nourrisson, torticolis congénital, plagiocéphalie (tête plate) et troubles du sommeil. Techniques adaptées et très douces dès les premiers jours de vie.",
    Icon: IconBaby,
    href: "/osteopathe-bebe",
  },
  {
    title: "Ostéopathie femmes enceintes",
    desc: "Accompagnement ostéopathique pendant la grossesse : soulagement des douleurs lombaires, préparation du bassin à l'accouchement, rééducation post-partum. Séances adaptées à chaque trimestre.",
    Icon: IconPregnant,
    href: "/osteopathe-femme-enceinte",
  },
  {
    title: "Ostéopathie sportifs",
    desc: "Préparation physique, optimisation de la récupération musculaire, traitement des blessures (entorses, tendinites, pubalgies). Suivi régulier pour la prévention.",
    Icon: IconSport,
    href: "/osteopathe-sportif",
  },
  {
    title: "Ostéopathie seniors",
    desc: "Amélioration de la mobilité articulaire, soulagement de l'arthrose, travail sur l'équilibre et prévention des chutes. Techniques très douces adaptées aux fragilités.",
    Icon: IconSenior,
    href: "/osteopathe-senior",
  },
  {
    title: "Ostéopathie viscérale",
    desc: "Traitement des troubles digestifs, ballonnements, reflux gastro-œsophagien, constipation. Approche complémentaire pour les troubles fonctionnels intestinaux.",
    Icon: IconStomach,
  },
];

const QUARTIERS = [
  "Centre-ville Valence",
  "Victor Hugo",
  "Fontbarlettes",
  "Le Plan",
  "Chamberlière",
  "L'Épervière",
  "Briffaut",
  "Romans-sur-Isère",
  "Saint-Marcellin",
  "Vinay",
  "Beaurepaire",
  "Saint Lattier",
];

const AVANTAGES = [
  { title: "Deux cabinets à votre service", text: "Consultations à Valence (rue du Lycée) et à Saint Lattier (allée du Cultil), pour votre commodité.", Icon: IconBuilding },
  { title: "Techniques douces et non invasives", text: "Approche adaptée à chaque patient, du nourrisson au senior.", Icon: IconHeart },
  { title: "Prise de RDV facile", text: "Réservation en ligne 24h/24 via Doctolib, sans attente.", Icon: IconClock },
  { title: "Remboursé par les mutuelles", text: "Plus de 85 % des mutuelles prennent en charge l'ostéopathie.", Icon: IconShield },
];

const TARIFS = [
  { title: "Consultation adulte", price: "55€", duration: "environ 45 min" },
  { title: "Consultation nourrisson / enfant", price: "50€", duration: "environ 30-40 min" },
  { title: "Consultation à domicile", price: "75€", duration: "déplacement inclus (Valence et alentours)" },
];

const TEMOIGNAGES = [
  { name: "Marie L.", motif: "Douleurs dorsales chroniques", text: "Après des mois de douleurs, j'ai retrouvé un vrai confort. L'approche est douce et professionnelle. Je recommande vivement.", stars: 5 },
  { name: "Thomas D.", motif: "Suivi pendant la grossesse de ma compagne", text: "Accompagnement parfait pendant toute la grossesse. Elle a pu aborder l'accouchement plus sereinement. Merci !", stars: 5 },
  { name: "Sophie M.", motif: "Coliques de bébé", text: "Notre petit avait des coliques difficiles. En quelques séances, nous avons vu une vraie amélioration. Ostéopathe à l'écoute et rassurant.", stars: 5 },
  { name: "Pierre F.", motif: "Blessure au genou (sport)", text: "Reprise du running après une entorse. Bilan et soins adaptés, je suis revenu progressivement sans douleur. Top.", stars: 5 },
];

export const FAQ_ITEMS = [
  { q: "L'ostéopathie est-elle remboursée ?", a: "L'ostéopathie n'est pas remboursée par l'Assurance Maladie. Plus de 85 % des mutuelles prennent en charge les séances (forfait variable). Une facture vous est délivrée à chaque consultation pour votre demande de remboursement." },
  { q: "Combien de séances sont nécessaires ?", a: "Cela dépend du motif et de votre historique. Souvent 1 à 3 séances suffisent pour un motif aigu. Pour un suivi chronique ou en prévention, nous en discutons au premier rendez-vous." },
  { q: "Faut-il une ordonnance pour consulter un ostéopathe ?", a: "Non. Vous pouvez consulter en direct, sans ordonnance. En cas de pathologie connue ou de traitement en cours, il est conseillé d'en informer votre ostéopathe et votre médecin." },
  { q: "L'ostéopathie est-elle douloureuse ?", a: "Les techniques sont adaptées à chaque patient et généralement douces. Certaines manipulations peuvent provoquer un inconfort passager. Votre ressenti est pris en compte et les techniques sont ajustées si besoin." },
  { q: "À partir de quel âge peut-on consulter un ostéopathe ?", a: "Dès la naissance. L'ostéopathie pour nourrissons est courante (coliques, torticolis, plagiocéphalie). Les techniques sont adaptées à l'âge, du bébé au senior." },
  { q: "Comment se déroule une première séance ?", a: "La première séance comprend un interrogatoire (motif, antécédents), un examen clinique puis un traitement adapté. Prévoyez environ 45 minutes pour un adulte. Apportez vos examens médicaux pertinents si vous en avez." },
  { q: "Quand consulter un ostéopathe ?", a: "Douleurs vertébrales ou articulaires, après un choc ou une chute, suivi de grossesse, nourrisson (coliques, torticolis, sommeil), prévention (sport, stress, travail sédentaire) ou après un accouchement. En cas de doute, contactez-nous." },
  { q: "Quelle est la différence entre un ostéopathe et un kinésithérapeute ?", a: "L'ostéopathe travaille sur l'ensemble du corps (articulations, muscles, viscères, crâne) pour rétablir la mobilité. Le kiné se concentre sur la rééducation motrice, souvent sur prescription. Les deux approches sont complémentaires." },
];

const faqSchemaGlobal = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

function SectionReveal({
  id,
  children,
  className = "",
  animate = "fade-up",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  animate?: "fade-up" | "fade-left" | "scale-in" | "stagger";
}) {
  return (
    <section
      id={id}
      data-animate={animate}
      className={`section-reveal scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-offwhite text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaGlobal) }} />
      <a href="#contenu-principal" className="skip-to-content focus:outline-none">
        Aller au contenu
      </a>

      <main id="contenu-principal">
        <ScrollAnimations>
        {/* Hero */}
        <section id="accueil" className="relative min-h-screen flex flex-col justify-center px-4 pt-24 pb-16 md:px-8 overflow-hidden">
          {/* Image de fond */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/cabinet-hero.png"
              alt="Cabinet d'ostéopathie de Pauline Odeyer – salle de consultation"
              fill
              className="object-cover object-center hero-parallax"
              priority
              quality={90}
              sizes="100vw"
            />
          </div>
          {/* Overlay dégradé pour lisibilité du texte */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/65 via-black/30 to-black/55"
            aria-hidden
          />
          {/* Contenu */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl [text-shadow:_0_2px_20px_rgba(0,0,0,0.3)]">
              Pauline Odeyer — Ostéopathe D.O.
            </h1>
            <p className="mt-4 text-lg md:text-xl text-white/90 font-light [text-shadow:_0_1px_8px_rgba(0,0,0,0.6)]">
              Valence (26) · Saint Lattier (38)
            </p>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-white leading-relaxed [text-shadow:_0_2px_8px_rgba(0,0,0,0.8),_0_0_1px_rgba(0,0,0,0.9)]">
              Retrouvez mobilité, confort et bien-être grâce à des soins ostéopathiques personnalisés
            </p>
            <div className="mt-10">
              <a
                href="https://www.doctolib.fr/osteopathe/saint-lattier/pauline-odeyer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Prendre rendez-vous sur Doctolib
              </a>
            </div>
          </div>
          <SectionWave fillClass="fill-offwhite" />
        </section>

        {/* Présentation */}
        <SectionReveal className="relative py-20 md:py-28 px-4 md:px-8 bg-offwhite overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sage/30 blur-3xl opacity-30 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none z-0" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center">
              Pauline Odeyer, Ostéopathe D.O. — Une Approche Globale de Votre Santé
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <div className="mt-10 space-y-6 text-gray-600 leading-relaxed text-center">
              <p>
                Ostéopathe D.O. diplômée, Pauline Odeyer exerce au <strong>9 rue du Lycée à Valence (26000)</strong> et au <strong>55 allée du Cultil à Saint Lattier (38840)</strong>. Elle propose des consultations d&apos;ostéopathie adaptées à chaque patient, reposant sur des techniques manuelles douces et non invasives, pour traiter les douleurs musculo-squelettiques, les troubles fonctionnels et accompagner toute la famille — du nourrisson au senior — vers un meilleur équilibre corporel.
              </p>
              <p>
                Chaque consultation débute par un bilan complet — écoute de vos antécédents, examen postural et palpation — avant un traitement personnalisé. L&apos;objectif : identifier l&apos;origine de vos douleurs et restaurer la mobilité de vos tissus pour un soulagement durable.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Avis Google (Elfsight) */}
        <section className="py-16 md:py-24 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Ce que disent mes patients
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-10 rounded-full" aria-hidden />
            <Script
              src="https://elfsightcdn.com/platform.js"
              strategy="lazyOnload"
            />
            <div
              className="elfsight-app-74fd3d13-f620-4aa2-b648-6bca1ea8a929"
              data-elfsight-app-lazy
            />
          </div>
        </section>

        {/* Services */}
        <SectionReveal id="services" className="relative py-20 md:py-28 px-4 md:px-8 bg-cream/50 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-cream blur-3xl opacity-40 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none z-0" aria-hidden />
          <div className="relative z-10 mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Soins en Ostéopathie — Pour Toute la Famille
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-6 rounded-full" aria-hidden />
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
              Des soins adaptés à chaque âge et chaque besoin : de l&apos;<Link href="/osteopathe-dos" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">ostéopathie pour adultes et douleurs du dos</Link> à la prise en charge du <Link href="/osteopathe-bebe" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">nourrisson</Link> et de la <Link href="/osteopathe-femme-enceinte" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">femme enceinte</Link>, en passant par le suivi du <Link href="/osteopathe-sportif" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">sportif</Link> et du <Link href="/osteopathe-senior" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">senior</Link>.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" data-animate="stagger">
              {SERVICES.map(({ title, desc, Icon, href }) => {
                const cardContent = (
                  <>
                    <div className="mb-4">
                      <Icon />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </>
                );
                const cardClass = "card-3d card-shadow rounded-2xl bg-white p-8 border border-bluegray/20";
                return href ? (
                  <Link key={title} href={href} className={`block ${cardClass} transition hover:no-underline`}>
                    {cardContent}
                  </Link>
                ) : (
                  <div key={title} className={cardClass}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
          <SectionWave fillClass="fill-offwhite" />
        </SectionReveal>

        {/* Avantages */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Pourquoi Consulter Pauline Odeyer ?
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-14 rounded-full" aria-hidden />
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {AVANTAGES.map(({ title, text, Icon }) => (
                <div key={title} className="flex flex-col items-center text-center">
                  <div className="avantage-icon-wrap mb-4"><Icon /></div>
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Quand consulter */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Quand Consulter Pauline Odeyer ?
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-12 rounded-full" aria-hidden />
            <div className="space-y-10 text-gray-600 leading-relaxed">
              <div className="flex gap-4">
                <div className="shrink-0 mt-1"><IconBack /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Douleurs du dos et du cou</h3>
                  <p>
                    Lombalgies, cervicalgies, torticolis, hernies discales ou douleurs entre les omoplates sont des motifs fréquents de consultation. Lorsque la douleur persiste plus de trois jours, revient régulièrement ou limite vos mouvements au quotidien, <Link href="/osteopathe-dos" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">consulter un ostéopathe pour le dos</Link> permet d&apos;en identifier l&apos;origine et de soulager les tensions par des techniques adaptées. Une prise en charge précoce évite souvent l&apos;installation de douleurs chroniques.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1"><IconCar /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Après un traumatisme ou un accident</h3>
                  <p>
                    Chutes, accidents de la route, faux mouvements ou whiplash (coup du lapin) peuvent créer des blocages et des déséquilibres dans tout le corps. L&apos;ostéopathe travaille à rééquilibrer les tensions post-traumatiques, à libérer les articulations et les tissus pour favoriser une récupération complète et limiter les séquelles à long terme.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1"><IconFunction /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Troubles fonctionnels récurrents</h3>
                  <p>
                    Migraines, vertiges, troubles digestifs, insomnies ou stress chronique ont souvent une composante mécanique ou posturale. L&apos;ostéopathie ne se contente pas de traiter les symptômes : elle cherche la cause (tensions crâniennes, blocages vertébraux, déséquilibres viscéraux) pour apporter un soulagement durable et améliorer votre qualité de vie.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 mt-1"><IconCalendar /></div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">En prévention</h3>
                  <p>
                    Une consultation préventive deux à trois fois par an est idéale pour maintenir un bon équilibre corporel. Elle est particulièrement recommandée aux <Link href="/osteopathe-sportif" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">sportifs</Link>, aux travailleurs sédentaires, aux <Link href="/osteopathe-senior" className="text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage">seniors</Link> ou à toute personne souhaitant prévenir l&apos;apparition de douleurs. L&apos;ostéopathe repère et corrige les petites dysfonctions avant qu&apos;elles ne deviennent gênantes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Déroulement séance */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Comment se Déroule une Séance d&apos;Ostéopathie à Valence ?
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <p className="text-center text-gray-600 mb-12 mt-6">Prévoyez environ 45 minutes pour une première consultation.</p>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-sage/40 md:left-1/2 md:-translate-x-px" aria-hidden />
              <div className="space-y-8 md:space-y-0">
                {[
                  { step: 1, title: "Anamnèse", Icon: IconClipboard, text: "Votre ostéopathe vous interroge sur vos antécédents, votre motif de consultation et votre mode de vie. Cette phase d'écoute est essentielle pour comprendre l'origine de vos douleurs." },
                  { step: 2, title: "Examen clinique", Icon: IconSearch, text: "Tests de mobilité, palpation et observation posturale permettent d'identifier les zones de restriction et de tension dans votre corps." },
                  { step: 3, title: "Traitement", Icon: IconHand, text: "Des techniques manuelles douces — articulaires, musculaires, crâniennes ou viscérales — sont appliquées pour restaurer la mobilité et soulager vos douleurs." },
                  { step: 4, title: "Conseils personnalisés", Icon: IconLightbulb, text: "En fin de séance, votre ostéopathe vous donne des recommandations : exercices, postures à adopter, délai avant la prochaine séance si nécessaire." },
                ].map((item) => (
                  <div key={item.step} className="relative flex gap-6 md:odd:flex-row md:even:flex-row-reverse md:mb-12 last:mb-0">
                    <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-sage text-white font-semibold text-lg z-10">{item.step}</div>
                    <div className="flex-1 pb-8 md:pb-0 md:w-[calc(50%-2rem)]">
                      <div className="rounded-2xl bg-white p-6 card-shadow border border-bluegray/20">
                        <div className="flex items-center gap-3 mb-2">
                          <item.Icon />
                          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Remboursement mutuelles */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Remboursement Ostéopathie : Quelle Prise en Charge par les Mutuelles ?
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <div className="flex justify-center mb-10 mt-6"><IconShieldEuro /></div>
            <p className="text-center text-gray-600 leading-relaxed mb-10">
              L&apos;ostéopathie n&apos;est pas remboursée par l&apos;Assurance Maladie (Sécurité Sociale). Cependant, plus de 85 % des complémentaires santé prennent en charge les consultations d&apos;ostéopathie, à hauteur de 1 à 4 séances par an selon votre contrat.
            </p>
            <div className="space-y-8 text-gray-600">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Comment se faire rembourser ?</h3>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Consultez votre ostéopathe et suivez votre séance.</li>
                  <li>Recevez votre facture à la fin de la séance (elle est délivrée systématiquement).</li>
                  <li>Envoyez la facture à votre mutuelle (en ligne ou par courrier) ; elle procède au remboursement selon votre forfait.</li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Quelles mutuelles remboursent l&apos;ostéopathie ?</h3>
                <p className="mb-4">
                  La plupart des grandes mutuelles françaises prennent en charge l&apos;ostéopathie : Harmonie Mutuelle, MGEN, Malakoff Humanis, AG2R La Mondiale, Allianz, AXA, Swiss Life, entre autres. Le montant du remboursement varie de 25€ à 80€ par séance selon votre contrat.
                </p>
                <div className="overflow-x-auto rounded-xl border-2 border-gold/30">
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
                <p className="mt-4 text-sm text-gray-600 italic">
                  Astuce : Vérifiez votre contrat ou appelez votre mutuelle pour connaître votre niveau de prise en charge. Nous délivrons une facture conforme à chaque consultation.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Tarifs */}
        <SectionReveal id="tarifs" className="relative py-20 md:py-28 px-4 md:px-8 bg-cream/50 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold/10 blur-3xl rounded-full -translate-x-1/2 pointer-events-none z-0" aria-hidden />
          <div className="relative z-10 mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Tarifs des Consultations
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto mt-6">
              Facture délivrée à chaque consultation pour le remboursement par votre mutuelle. Plus de 85 % des complémentaires santé prennent en charge les séances d&apos;ostéopathie (1 à 4 séances par an selon votre contrat).
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
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
        </SectionReveal>

        {/* Témoignages */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Avis Patients
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-14 rounded-full" aria-hidden />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEMOIGNAGES.map((t) => (
                <div key={t.name} className="card-shadow card-hover rounded-2xl bg-white p-6 border border-bluegray/20">
                  <div className="testimonial-stars flex gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => <span key={i} className="testimonial-star inline-block"><IconStar /></span>)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-gray-800">{t.name}</p>
                  <p className="text-xs text-sage">{t.motif}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Quartiers desservis */}
        <SectionReveal id="quartiers" className="py-20 md:py-28 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Votre Ostéopathe à Valence et en Isère
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-8 rounded-full" aria-hidden />
            <div className="flex flex-wrap justify-center gap-3 mb-8" data-animate="stagger">
              {QUARTIERS.map((quartier) => (
                <a
                  key={quartier}
                  href="https://www.doctolib.fr/osteopathe/saint-lattier/pauline-odeyer"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Prendre rendez-vous – cabinet accessible depuis ${quartier}`}
                  aria-label={`Prendre rendez-vous – cabinet accessible depuis ${quartier}`}
                  className="badge-quartier inline-flex items-center gap-2 rounded-full border-2 border-sage bg-white px-5 py-3 min-h-[44px] min-w-[44px] text-sm font-medium text-gray-800 card-shadow transition-all duration-300 hover:bg-sage hover:text-white hover:border-sage focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
                >
                  <IconPin />
                  {quartier}
                </a>
              ))}
            </div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
              Pauline Odeyer reçoit ses patients à Valence (Drôme) et à Saint Lattier (Isère). Que vous veniez de Valence, Romans-sur-Isère, Saint-Marcellin ou des environs, l&apos;un des deux cabinets est facilement accessible.
            </p>
          </div>
        </SectionReveal>

        {/* FAQ */}
        <SectionReveal id="faq" className="py-20 md:py-28 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Questions Fréquentes
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-14 rounded-full" aria-hidden />
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </SectionReveal>

        {/* Blog - derniers articles */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Nos Derniers Articles sur l&apos;Ostéopathie
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-12 rounded-full" aria-hidden />
            <div className="grid gap-6 lg:grid-cols-3">
              {getLatestArticles(3).map((article) => (
                <article
                  key={article.slug}
                  className="card-shadow card-hover rounded-2xl bg-white border border-bluegray/20 overflow-hidden"
                >
                  <Link href={`/blog/${article.slug}`} className="block">
                    <div className="h-36 bg-gradient-to-br from-sage/30 to-cream flex items-center justify-center">
                      <svg
                        className="w-14 h-14 text-sage/60"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                      </svg>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="mt-1 text-xs text-gray-500">
                        {new Date(article.date + "T12:00:00").toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
                      </p>
                      <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <span className="link-lire-la-suite mt-4 inline-block text-sm font-medium text-sage hover:underline">
                        Lire la suite →
                      </span>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="btn-cta inline-block rounded-full bg-sage px-6 py-3 text-base font-medium text-white shadow hover:bg-sage/90"
              >
                Voir tous nos articles
              </Link>
            </div>
          </div>
        </SectionReveal>

        {/* Formulaire Contact / RDV */}
        <SectionReveal id="contact" className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Prendre Rendez-vous avec Pauline Odeyer
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 rounded-full" aria-hidden />
            <p className="text-center text-gray-600 mb-6 mt-6">
              Réservez directement en ligne via Doctolib, ou utilisez le formulaire ci-dessous pour toute question.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="https://www.doctolib.fr/osteopathe/saint-lattier/pauline-odeyer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex items-center gap-2 rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Réserver sur Doctolib
              </a>
              <a
                href="tel:+33769341945"
                className="inline-flex items-center gap-2 rounded-full border-2 border-sage px-8 py-4 text-base font-medium text-sage hover:bg-sage hover:text-white transition focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                07 69 34 19 45
              </a>
            </div>
            <div className="text-center text-gray-500 text-sm mb-6">— ou envoyez un message —</div>
            <ContactForm />
          </div>
        </SectionReveal>

        {/* Accès & plan */}
        <section className="py-20 md:py-28 px-4 md:px-8 bg-bluegray/10" data-animate="fade-up">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Accès aux Cabinets
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto mt-4 mb-12 rounded-full" aria-hidden />

            {/* Cabinet Valence */}
            <div className="mb-14">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Cabinet de Valence (26000)
              </h3>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="rounded-2xl overflow-hidden card-shadow h-[360px] min-h-[260px]">
                  <iframe
                    title="Carte – Cabinet Pauline Odeyer, 9 rue du Lycée, Valence"
                    src="https://www.google.com/maps?q=9+rue+du+Lycée,+26000+Valence,+France&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[260px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl bg-white p-5 card-shadow border border-bluegray/20 flex items-start gap-4">
                    <IconLocation />
                    <div>
                      <p className="font-semibold text-gray-800">Adresse</p>
                      <p className="text-gray-600 text-sm mt-0.5">9 rue du Lycée, 26000 Valence</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-5 card-shadow border border-bluegray/20 flex items-start gap-4">
                    <IconTime />
                    <div>
                      <p className="font-semibold text-gray-800">Téléphone</p>
                      <p className="text-gray-600 text-sm mt-0.5">
                        <a href="tel:+33769341945" className="hover:text-sage transition">07 69 34 19 45</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cabinet Saint Lattier */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Cabinet de Saint Lattier (38840)
              </h3>
              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                <div className="rounded-2xl overflow-hidden card-shadow h-[360px] min-h-[260px]">
                  <iframe
                    title="Carte – Cabinet Pauline Odeyer, Saint Lattier"
                    src="https://www.google.com/maps?q=55+allée+du+Cultil,+38840+Saint-Lattier,+France&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full min-h-[260px]"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="rounded-xl bg-white p-5 card-shadow border border-bluegray/20 flex items-start gap-4">
                    <IconLocation />
                    <div>
                      <p className="font-semibold text-gray-800">Adresse</p>
                      <p className="text-gray-600 text-sm mt-0.5">55 allée du Cultil, 38840 Saint Lattier</p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-5 card-shadow border border-bluegray/20 flex items-start gap-4">
                    <IconTime />
                    <div>
                      <p className="font-semibold text-gray-800">Téléphone</p>
                      <p className="text-gray-600 text-sm mt-0.5">
                        <a href="tel:+33769341945" className="hover:text-sage transition">07 69 34 19 45</a>
                      </p>
                    </div>
                  </div>
                  <div className="rounded-xl bg-white p-5 card-shadow border border-bluegray/20 flex items-start gap-4">
                    <IconLocation />
                    <div>
                      <p className="font-semibold text-gray-800">RDV en ligne</p>
                      <a
                        href="https://www.doctolib.fr/osteopathe/saint-lattier/pauline-odeyer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sage text-sm mt-0.5 hover:underline font-medium"
                      >
                        Réserver sur Doctolib →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        </ScrollAnimations>
      </main>
      <FloatingCTA />
    </div>
  );
}
