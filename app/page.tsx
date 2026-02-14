import Image from "next/image";
import NavBar from "@/components/NavBar";
import FaqAccordion from "@/components/FaqAccordion";
import ContactForm from "@/components/ContactForm";

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

const SERVICES = [
  {
    title: "Ostéopathie adultes",
    desc: "Traitement des douleurs dorsales, cervicalgies, lombalgies, sciatiques, névralgies et tensions musculaires. Soulagement des maux de dos chroniques ou aigus par des manipulations douces.",
    Icon: IconHand,
  },
  {
    title: "Ostéopathie nourrissons & bébés",
    desc: "Prise en charge des coliques du nourrisson, torticolis congénital, plagiocéphalie (tête plate) et troubles du sommeil. Techniques adaptées et très douces dès les premiers jours de vie.",
    Icon: IconBaby,
  },
  {
    title: "Ostéopathie femmes enceintes",
    desc: "Accompagnement ostéopathique pendant la grossesse : soulagement des douleurs lombaires, préparation du bassin à l'accouchement, rééducation post-partum. Séances adaptées à chaque trimestre.",
    Icon: IconPregnant,
  },
  {
    title: "Ostéopathie sportifs",
    desc: "Préparation physique, optimisation de la récupération musculaire, traitement des blessures (entorses, tendinites, pubalgies). Suivi régulier pour la prévention.",
    Icon: IconSport,
  },
  {
    title: "Ostéopathie seniors",
    desc: "Amélioration de la mobilité articulaire, soulagement de l'arthrose, travail sur l'équilibre et prévention des chutes. Techniques très douces adaptées aux fragilités.",
    Icon: IconSenior,
  },
  {
    title: "Ostéopathie viscérale",
    desc: "Traitement des troubles digestifs, ballonnements, reflux gastro-œsophagien, constipation. Approche complémentaire pour les troubles fonctionnels intestinaux.",
    Icon: IconStomach,
  },
];

const AVANTAGES = [
  { title: "Cabinet moderne et accessible", text: "Situé avenue Victor Hugo, avec accès facile et parking à proximité.", Icon: IconBuilding },
  { title: "Techniques douces et non invasives", text: "Approche adaptée à chaque patient, du nourrisson au senior.", Icon: IconHeart },
  { title: "Prise en charge rapide", text: "Urgences possibles sous 24h à 48h selon disponibilités.", Icon: IconClock },
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
  { q: "L'ostéopathie est-elle remboursée ?", a: "L'ostéopathie n'est pas remboursée par l'Assurance Maladie. En revanche, plus de 85 % des mutuelles proposent une prise en charge des séances (forfait annuel variable). Une facture vous est délivrée à chaque consultation pour effectuer votre demande de remboursement auprès de votre mutuelle." },
  { q: "Combien de séances sont nécessaires ?", a: "Cela dépend du motif de consultation et de votre historique. Souvent, 1 à 3 séances suffisent pour un motif aigu. Pour un suivi plus long (chronique, prévention), nous en discutons ensemble lors du premier rendez-vous." },
  { q: "Faut-il une ordonnance pour consulter un ostéopathe ?", a: "Non. Vous pouvez consulter un ostéopathe en direct, sans ordonnance médicale. En cas de pathologie connue ou de traitement en cours, il est toutefois conseillé d'en informer votre ostéopathe et éventuellement votre médecin." },
  { q: "L'ostéopathie est-elle douloureuse ?", a: "Les techniques utilisées sont adaptées à chaque patient et généralement douces. Certaines manipulations peuvent provoquer un inconfort passager. Votre ressenti est toujours pris en compte et les techniques sont ajustées si besoin." },
  { q: "À partir de quel âge peut-on consulter un ostéopathe ?", a: "Dès la naissance. L'ostéopathie pour nourrissons est courante (accouchement, coliques, torticolis, plagiocéphalie). Les techniques sont adaptées à l'âge, du bébé au senior." },
  { q: "Comment se déroule une première séance ?", a: "La première séance comprend un interrogatoire (motif, antécédents, mode de vie), un examen clinique puis un traitement adapté. Prévoyez environ 45 minutes pour un adulte. Pensez à apporter vos examens médicaux pertinents si vous en avez." },
  { q: "Quand consulter un ostéopathe ?", a: "En cas de douleurs vertébrales ou articulaires, après un choc ou une chute, pour un suivi de grossesse, pour un nourrisson (coliques, torticolis, sommeil), en prévention (sport, stress, travail sédentaire) ou après un accouchement. En cas de doute, n'hésitez pas à nous contacter." },
  { q: "Quelle est la différence entre un ostéopathe et un kinésithérapeute ?", a: "L'ostéopathe travaille sur l'ensemble du corps avec une approche globale (articulations, muscles, viscères, crâne) et vise à rétablir la mobilité et l'équilibre. Le kinésithérapeute se concentre davantage sur la rééducation motrice et fonctionnelle, souvent sur prescription médicale. Les deux approches peuvent être complémentaires." },
];

function SectionReveal({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`section-reveal scroll-mt-20 ${className}`}
    >
      {children}
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-offwhite text-foreground">
      <a href="#contenu-principal" className="skip-to-content focus:outline-none">
        Aller au contenu
      </a>
      <NavBar />

      <main id="contenu-principal">
        {/* Hero */}
        <section id="accueil" className="relative min-h-screen flex flex-col justify-center px-4 pt-24 pb-16 md:px-8 overflow-hidden">
          {/* Image de fond (desktop) */}
          <div className="absolute inset-0 z-0 hidden md:block">
            <Image
              src="/osteopathe-valence-cabinet.webp"
              alt="Ostéopathe à Valence réalisant une manipulation cervicale douce dans un cabinet lumineux et moderne"
              fill
              className="object-cover"
              priority
              quality={85}
              sizes="100vw"
            />
          </div>
          {/* Image de fond (mobile) */}
          <div className="absolute inset-0 z-0 md:hidden">
            <Image
              src="/osteopathe-valence-cabinet-mobile.webp"
              alt="Ostéopathe à Valence réalisant une manipulation cervicale douce dans un cabinet lumineux et moderne"
              fill
              className="object-cover"
              priority
              quality={85}
              sizes="100vw"
            />
          </div>
          {/* Overlay pour lisibilité du texte */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-black/70 via-black/60 to-black/70"
            aria-hidden
          />
          {/* Contenu */}
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.8),_0_0_1px_rgba(0,0,0,0.9)]">
              Ostéopathe à Valence – Cabinet d&apos;Ostéopathie D.O.
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white leading-relaxed [text-shadow:_0_2px_8px_rgba(0,0,0,0.8),_0_0_1px_rgba(0,0,0,0.9)]">
              Retrouvez mobilité, confort et bien-être grâce à des soins ostéopathiques personnalisés
            </p>
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg transition hover:bg-sage/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </section>

        {/* Présentation */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center">
              Ostéopathe D.O. à Valence : Une Approche Globale de Votre Santé
            </h2>
            <div className="mt-10 space-y-6 text-gray-600 leading-relaxed text-center">
              <p>
                Ostéopathe D.O. diplômé et installé au 45 avenue Victor Hugo à Valence (26000), je propose des consultations d&apos;ostéopathie adaptées à chaque patient. Ma pratique repose sur des techniques manuelles douces, non invasives, pour traiter les douleurs musculo-squelettiques, les troubles fonctionnels et accompagner toute la famille — du nourrisson au senior — vers un meilleur équilibre corporel.
              </p>
              <p>
                Chaque consultation débute par un bilan complet — écoute de vos antécédents, examen postural et palpation — avant un traitement personnalisé. Mon objectif : identifier l&apos;origine de vos douleurs et restaurer la mobilité de vos tissus pour un soulagement durable. Le cabinet est accessible aux personnes à mobilité réduite et dispose d&apos;un parking à proximité.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Services */}
        <SectionReveal id="services" className="py-20 md:py-28 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Nos Soins en Ostéopathie à Valence
            </h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto mb-14">
              Des soins adaptés à chaque âge et chaque besoin.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICES.map(({ title, desc, Icon }) => (
                <div
                  key={title}
                  className="rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md border border-bluegray/20"
                >
                  <div className="mb-4">
                    <Icon />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Avantages */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-14">
              Pourquoi Choisir Notre Cabinet d&apos;Ostéopathie à Valence
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {AVANTAGES.map(({ title, text, Icon }) => (
                <div key={title} className="flex flex-col items-center text-center">
                  <div className="mb-4"><Icon /></div>
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="mt-2 text-gray-600 text-sm">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Tarifs */}
        <SectionReveal id="tarifs" className="py-20 md:py-28 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Tarifs des Consultations d&apos;Ostéopathie à Valence
            </h2>
            <p className="text-center text-gray-600 mb-4 max-w-2xl mx-auto">
              Facture délivrée à chaque consultation pour le remboursement par votre mutuelle. Plus de 85 % des complémentaires santé prennent en charge les séances d&apos;ostéopathie (1 à 4 séances par an selon votre contrat).
            </p>
            <div className="grid gap-6 md:grid-cols-3 mt-8">
              {TARIFS.map(({ title, price, duration }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-gold/30 bg-white p-8 shadow-sm text-center transition hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                  <p className="mt-4 text-3xl font-light text-gold">{price}</p>
                  <p className="mt-2 text-sm text-gray-600">{duration}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Témoignages */}
        <SectionReveal className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-14">
              Avis Patients – Témoignages de Notre Cabinet à Valence
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {TEMOIGNAGES.map((t) => (
                <div key={t.name} className="rounded-2xl bg-white p-6 shadow-sm border border-bluegray/20">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => <IconStar key={i} />)}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                  <p className="mt-4 text-sm font-semibold text-gray-800">{t.name}</p>
                  <p className="text-xs text-sage">{t.motif}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* FAQ */}
        <SectionReveal id="faq" className="py-20 md:py-28 px-4 md:px-8 bg-cream/50">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-14">
              Questions Fréquentes sur l&apos;Ostéopathie à Valence
            </h2>
            <FaqAccordion items={FAQ_ITEMS} />
          </div>
        </SectionReveal>

        {/* Formulaire Contact / RDV */}
        <SectionReveal id="contact" className="py-20 md:py-28 px-4 md:px-8 bg-offwhite">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-light text-gray-800 md:text-4xl text-center mb-4">
              Prendre Rendez-vous avec Votre Ostéopathe à Valence
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Nous vous recontactons sous 24h pour confirmer votre créneau.
            </p>
            <ContactForm />
          </div>
        </SectionReveal>

        {/* Footer */}
        <footer className="bg-gray-800 text-gray-300 py-12 px-4 md:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <p className="text-lg font-semibold text-white">
                  Ostéopathe Valence — Cabinet d&apos;Ostéopathie D.O.
                </p>
                <p className="mt-1 text-sm">45 avenue Victor Hugo, 26000 Valence</p>
                <p className="text-sm">Drôme — Auvergne-Rhône-Alpes</p>
                <p className="mt-2 text-sm">Lundi au Vendredi : 8h – 20h | Samedi : 9h – 13h</p>
                <p className="mt-1 text-sm italic">Consultations sur rendez-vous uniquement</p>
              </div>
              <div className="flex flex-col items-center md:items-end gap-2">
                <a href="/mentions-legales" className="text-sm hover:text-gold transition">
                  Mentions légales
                </a>
                <a href="/politique-confidentialite" className="text-sm hover:text-gold transition">
                  Politique de confidentialité
                </a>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-600 text-center text-sm text-gray-500">
              <p>© 2026 Ostéopathe Valence — Cabinet d&apos;ostéopathie à Valence (26000)</p>
              <p className="mt-1">Dernière mise à jour : février 2026</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
