import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import FloatingCTA from "@/components/FloatingCTA";
import LatestArticlesBanner from "@/components/LatestArticlesBanner";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/blog/meilleur-osteopathe-valence/`;

export const metadata: Metadata = {
  title: "Meilleur ostéopathe Valence (26000) — Top 10 cabinets 2026",
  description:
    "Découvrez les 10 meilleurs ostéopathes à Valence (Drôme). Avis, spécialités, adresses et conseils pour bien choisir votre praticien en 2026.",
  alternates: { canonical },
  openGraph: {
    title: "Meilleur ostéopathe Valence (26000) — Top 10 cabinets 2026",
    description:
      "Découvrez les 10 meilleurs ostéopathes à Valence (Drôme). Avis, spécialités, adresses et conseils pour bien choisir votre praticien en 2026.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "article",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Meilleur ostéopathe Valence 2026" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meilleur ostéopathe à Valence (26000) : notre sélection 2026",
  description:
    "Découvrez les 10 meilleurs ostéopathes à Valence (Drôme). Avis, spécialités, adresses et conseils pour bien choisir votre praticien en 2026.",
  author: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE },
  publisher: { "@type": "MedicalBusiness", name: "Ostéopathe Valence", url: BASE },
  datePublished: "2026-03-21",
  dateModified: "2026-03-21",
  mainEntityOfPage: canonical,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Faut-il une ordonnance pour consulter un ostéopathe à Valence ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. L'ostéopathie est une profession de santé en accès direct : vous pouvez prendre rendez-vous librement, sans prescription médicale. Certaines mutuelles exigent toutefois une ordonnance pour procéder au remboursement ; renseignez-vous auprès de votre complémentaire santé.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre un ostéopathe et un kinésithérapeute ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le kinésithérapeute intervient principalement sur prescription médicale, dans le cadre d'une rééducation motrice ciblée. L'ostéopathe adopte une approche globale du corps (articulations, muscles, viscères, crâne) et travaille à restaurer la mobilité et l'équilibre de l'ensemble des structures. Les deux approches sont complémentaires.",
      },
    },
    {
      "@type": "Question",
      name: "L'ostéopathie est-elle remboursée à Valence ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elle n'est pas prise en charge par la Sécurité Sociale, mais plus de 85 % des mutuelles remboursent les séances d'ostéopathie (généralement 1 à 4 par an). Une facture est délivrée à chaque consultation pour faciliter votre demande de remboursement.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de séances d'ostéopathie faut-il en moyenne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un motif aigu (torticolis, lombalgie soudaine), 1 à 3 séances suffisent généralement. Pour une problématique chronique ou un suivi préventif, le rythme est adapté au cas par cas lors de la première consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on consulter un ostéopathe pour un bébé ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, et même dès les premiers jours de vie. L'ostéopathie pédiatrique est indiquée pour les nourrissons présentant des coliques, un torticolis, une plagiocéphalie, des difficultés à téter ou des troubles du sommeil. Les techniques sont extrêmement douces et adaptées à la fragilité du nourrisson.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: `${BASE}/` },
    { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog/` },
    { "@type": "ListItem", position: 3, name: "Meilleur ostéopathe Valence", item: canonical },
  ],
};

const linkClass = "text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage";

const PRATICIENS = [
  {
    rank: 1,
    name: "Cabinet Ostéo Valence",
    site: "https://www.osteo-valence.fr/",
    siteLabel: "osteo-valence.fr",
    address: "1 avenue Victor Hugo, 26000 Valence",
    badge: "Référence Valence",
    description: (
      <>
        Lorsqu&apos;on parle d&apos;<strong>ostéopathie à Valence</strong>, le Cabinet Ostéo Valence s&apos;impose
        naturellement comme la référence incontournable. Tenu par un ostéopathe D.O. diplômé, ce cabinet moderne propose
        une prise en charge complète, du{" "}
        <Link href="/osteopathe-bebe" className={linkClass}>nourrisson</Link> au{" "}
        <Link href="/osteopathe-senior" className={linkClass}>senior</Link>, en passant par les{" "}
        <Link href="/osteopathe-sportif" className={linkClass}>sportifs</Link> et les{" "}
        <Link href="/osteopathe-femme-enceinte" className={linkClass}>femmes enceintes</Link>. Les techniques utilisées
        sont douces, non invasives et adaptées à chaque profil. La disponibilité est un atout majeur : les urgences sont
        traitées sous 24 à 48h et la prise de{" "}
        <Link href="/#contact" className={linkClass}>rendez-vous en ligne</Link> est disponible à toute heure. Cabinet
        accessible PMR, parking à proximité, arrêt de bus à 50 m. Plus de 85 % des mutuelles remboursent les
        consultations.
      </>
    ),
  },
  {
    rank: 2,
    name: "David Guyard",
    site: "https://www.osteopathe-drome-valence.fr/",
    siteLabel: "osteopathe-drome-valence.fr",
    address: "Valence, proche Bourg-lès-Valence",
    badge: "Polyvalent",
    description: (
      <>
        David Guyard est un ostéopathe D.O. établi dans l&apos;agglomération valentinoise, facilement accessible depuis
        Bourg-lès-Valence. Il se distingue par la diversité des troubles pris en charge : au-delà des classiques
        douleurs musculo-squelettiques, il intervient sur les troubles digestifs, cardiovasculaires et ORL. Son approche
        est centrée sur l&apos;adaptation : chaque traitement est modulé en fonction de la morphologie, de l&apos;âge et
        des antécédents du patient. Une pratique complète et polyvalente pour toute la famille.
      </>
    ),
  },
  {
    rank: 3,
    name: "Rémi Morel",
    site: "https://www.doctolib.fr/osteopathe/valence/remi-morel",
    siteLabel: "Doctolib – Prendre RDV",
    address: "41 Avenue Jean Clément, 26000 Valence",
    badge: "Ostéopathie du sport",
    description: (
      <>
        Rémi Morel bénéficie d&apos;un double cursus particulièrement solide : kinésithérapeute de formation, il a
        obtenu son diplôme d&apos;ostéopathie à l&apos;École de Béziers puis au CIDO de Saint-Étienne. Il est également
        titulaire d&apos;un Diplôme Universitaire d&apos;ostéopathie du sport (Université d&apos;Avignon). Cette
        expertise lui permet d&apos;aborder les pathologies sportives avec une précision reconnue. Tarif transparent :{" "}
        <strong>55 €</strong> la séance, facture délivrée pour mutuelle.
      </>
    ),
  },
  {
    rank: 4,
    name: "Baptiste Martin",
    site: null,
    siteLabel: null,
    address: "49 Avenue Jean Clément, 26000 Valence",
    badge: "Expérience depuis 2005",
    description: (
      <>
        Installé depuis <strong>2005</strong>, Baptiste Martin est l&apos;un des ostéopathes les plus expérimentés de
        Valence. Il partage ses locaux avec Rémi Morel dans le quartier Jean Clément. Sa pratique couvre l&apos;ensemble
        du cycle de vie : nourrisson, enfant, adulte, senior, sportif et femme enceinte. Près de vingt ans
        d&apos;expérience en font un praticien de confiance pour les familles valentinoise. Tarif :{" "}
        <strong>50 €</strong> par consultation.
      </>
    ),
  },
  {
    rank: 5,
    name: "Mathieu Fogarolo",
    site: "https://www.doctolib.fr/osteopathe/valence/mathieu-fogarolo",
    siteLabel: "Doctolib – Prendre RDV",
    address: "84 Route de Beauvallon, 26000 Valence",
    badge: "Méthode L.M.O. & pédiatrie",
    description: (
      <>
        Diplômé du CIDO, Mathieu Fogarolo est formé à la méthode{" "}
        <strong>L.M.O. (Lien Mécanique Ostéopathique)</strong>, développée par Chauffour et Prat. Cette approche
        globale est particulièrement adaptée aux patients fragiles ou sensibles. Spécialisé en ostéopathie pédiatrique,
        il accueille les nourrissons dès les premiers jours de vie. Cabinet en rez-de-chaussée avec parking gratuit,
        accessible à tous.
      </>
    ),
  },
  {
    rank: 6,
    name: "Sandy Papa",
    site: null,
    siteLabel: null,
    address: "68 Rue Georges Mandel, 26000 Valence",
    badge: "Techniques douces exclusives",
    description: (
      <>
        Sandy Papa a fait le choix d&apos;une pratique fondée sur les <strong>techniques douces exclusivement</strong>,
        en particulier l&apos;ostéopathie myofasciale. Cette approche, qui travaille sur les fascias, est
        particulièrement indiquée pour les patients hypersensibles, les personnes âgées ou celles qui appréhendent les
        manipulations structurelles. Cabinet en rez-de-chaussée avec parking gratuit. Contact direct :{" "}
        <a href="tel:0663704718" className={linkClass}>06 63 70 47 18</a>.
      </>
    ),
  },
  {
    rank: 7,
    name: "Maxime Tinseau",
    site: null,
    siteLabel: null,
    address: "80 Avenue Victor Hugo, 26000 Valence (Espace Sainbiose)",
    badge: "Suivi sportif",
    description: (
      <>
        Diplômé de l&apos;Institut Dauphine d&apos;Ostéopathie (IDO), Maxime Tinseau exerce au sein de l&apos;Espace
        Sainbiose, un cadre pluridisciplinaire favorable à une prise en charge globale. Ses spécialités principales sont
        le <strong>suivi du sportif</strong> et l&apos;ostéopathie myofasciale. Il accompagne sportifs amateurs et
        athlètes dans leur préparation, leur récupération et la prévention des blessures. Cabinet au 3e étage avec
        ascenseur.
      </>
    ),
  },
  {
    rank: 8,
    name: "Sylvain Brun",
    site: null,
    siteLabel: null,
    address: "7 Allée Charles Baron, 26000 Valence",
    badge: "Douleur chronique",
    description: (
      <>
        Sylvain Brun se distingue par une philosophie de soin résolument moderne : son approche{" "}
        <strong>biopsychosociale</strong>, informée par les données probantes, prend en compte les dimensions
        mécaniques, psychologiques et sociales de la douleur. Diplômé D.O. (RNCP niveau 7), il est particulièrement
        indiqué pour les <strong>douleurs chroniques</strong>, les troubles nerveux et le suivi sportif. Centre
        pluridisciplinaire, rez-de-chaussée, parking gratuit.
      </>
    ),
  },
  {
    rank: 9,
    name: "Claire Betriu",
    site: "https://www.osteobetriu.com/",
    siteLabel: "osteobetriu.com",
    address: "19 Avenue Victor Hugo, 26000 Valence",
    badge: "Périnatalité & MTC",
    description: (
      <>
        Claire Betriu propose une vision élargie de l&apos;ostéopathie, combinant la pratique traditionnelle avec des
        formations en <strong>Médecine Traditionnelle Chinoise</strong> et en Reïki. Spécialisée en ostéopathie
        pédiatrique et périnatale, elle accompagne les femmes enceintes, les jeunes mamans et les nourrissons. Elle
        organise également des <strong>cours collectifs d&apos;étirements thérapeutiques</strong>. RDV :{" "}
        <a href="tel:0475563784" className={linkClass}>04 75 56 37 84</a>.
      </>
    ),
  },
  {
    rank: 10,
    name: "Cabinet Pujol-Sorin",
    site: "https://osteo-valence-pujolsorin.fr/",
    siteLabel: "osteo-valence-pujolsorin.fr",
    address: "62 Rue Jean Jaurès, 26000 Valence",
    badge: "Horaires larges & duo",
    description: (
      <>
        Alexis Sorin et Kimberly Pujol sont tous deux diplômés D.O. de l&apos;ISOstéo Lyon (T.N.O.) et exercent
        ensemble dans le quartier du Grand Charran. Ce cabinet à deux ostéopathes offre une grande disponibilité avec
        des horaires larges : <strong>lundi au vendredi 8h-20h + samedi</strong>. Panel de spécialités complet :
        nourrisson, enfant, femme enceinte, personne âgée, sportif et situations de handicap. Tél :{" "}
        <a href="tel:0475257524" className={linkClass}>04 75 25 75 24</a>.
      </>
    ),
  },
];

export default function ArticleMeilleurOsteopathePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <FloatingCTA />
      <main className="min-h-screen bg-offwhite text-foreground pt-20">
        <ScrollAnimations>
          {/* Hero */}
          <SectionReveal
            className="relative bg-gradient-to-b from-sage/25 via-cream/40 to-offwhite py-20 px-4 md:px-8 overflow-hidden"
            animate="fade-up"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-sage/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" aria-hidden />
            <div className="relative z-10 mx-auto max-w-3xl">
              <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-gray-500">
                <Link href="/" className="hover:text-sage">Accueil</Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-sage">Blog</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-800 font-medium">Meilleur ostéopathe Valence</span>
              </nav>
              <span className="inline-block rounded-full bg-sage/10 text-sage px-3 py-1 text-xs font-medium mb-4">
                Sélection 2026
              </span>
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
                Meilleur ostéopathe à Valence (26000) : notre sélection 2026
              </h1>
              <p className="mt-4 text-gray-500 text-sm">21 mars 2026 — Cabinet Ostéo Valence</p>
            </div>
            <SectionWave fillClass="fill-offwhite" />
          </SectionReveal>

          {/* Contenu */}
          <SectionReveal className="py-12 md:py-16 px-4 md:px-8 bg-offwhite" animate="fade-up">
            <div className="mx-auto max-w-3xl space-y-10">

              {/* Introduction */}
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Valence, préfecture de la Drôme et ville de plus de 60 000 habitants, connaît depuis plusieurs
                  années un véritable essor dans le domaine de la santé préventive. Entre ses quartiers animés, ses
                  zones résidentielles et son tissu sportif dense, la demande en{" "}
                  <strong>ostéopathie à Valence</strong> n&apos;a jamais été aussi forte. Douleurs du dos, suivi de
                  grossesse, prise en charge des nourrissons, récupération sportive : les motifs se diversifient et
                  les patients cherchent un{" "}
                  <Link href="/" className={linkClass}>cabinet d&apos;ostéopathie à Valence (26000)</Link> adapté à
                  leurs besoins spécifiques.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Face à la multitude de praticiens disponibles, il n&apos;est pas toujours facile de s&apos;y
                  retrouver. C&apos;est pourquoi nous avons sélectionné les{" "}
                  <strong>10 meilleurs ostéopathes à Valence en 2026</strong>, en tenant compte de leurs diplômes,
                  spécialités, accessibilité et retours patients.
                </p>
              </div>

              {/* Comment choisir */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Comment choisir son ostéopathe à Valence ?
                </h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    <strong>Le diplôme D.O.</strong> est le premier filtre indispensable. En France, seuls les
                    ostéopathes titulaires d&apos;un diplôme reconnu par l&apos;État (RNCP niveau 7) sont autorisés
                    à exercer. Tous les praticiens de cette sélection sont diplômés et agréés.
                  </p>
                  <p>
                    <strong>Les spécialités</strong> jouent un rôle clé. Identifiez votre besoin principal : suivi
                    sportif, pédiatrie, périnatalité, douleur chronique… avant de choisir votre praticien.
                  </p>
                  <p>
                    <strong>Les avis patients</strong> et l&apos;<strong>accessibilité du cabinet</strong> (parking,
                    transports, PMR, horaires) sont des critères pratiques à ne pas négliger.
                  </p>
                  <p>
                    Enfin, renseignez-vous sur la{" "}
                    <Link href="/tarifs" className={linkClass}>prise en charge par votre mutuelle</Link>. Plus de
                    85 % des complémentaires santé remboursent l&apos;ostéopathie. Une facture conforme est délivrée
                    à chaque consultation.
                  </p>
                </div>
              </div>

              {/* Top 10 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Les 10 meilleurs ostéopathes à Valence en 2026
                </h2>
                <div className="space-y-6">
                  {PRATICIENS.map((p) => (
                    <div
                      key={p.rank}
                      className={`rounded-2xl border p-6 ${
                        p.rank === 1
                          ? "bg-sage/5 border-sage/30 shadow-[0_4px_24px_rgba(0,0,0,0.08)]"
                          : "bg-white border-bluegray/20 shadow-[0_2px_12px_rgba(0,0,0,0.04)]"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg ${
                            p.rank === 1 ? "bg-gold text-white" : "bg-sage/15 text-sage"
                          }`}
                        >
                          {p.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-800">{p.name}</h3>
                            <span className="inline-block rounded-full bg-sage/10 text-sage px-2 py-0.5 text-xs font-medium">
                              {p.badge}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mb-3">{p.address}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{p.description}</p>
                          {p.site && (
                            <a
                              href={p.site}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-block text-sm font-medium text-sage hover:underline"
                            >
                              {p.siteLabel} →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tarifs */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Combien coûte une séance d&apos;ostéopathie à Valence ?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Le tarif d&apos;une consultation chez un <strong>ostéopathe à Valence (26000)</strong> se situe
                  généralement entre <strong>45 € et 70 €</strong> selon le praticien et la spécialité. La majorité
                  des cabinets pratiquent un tarif autour de <strong>55 €</strong> pour une consultation adulte
                  d&apos;environ 45 minutes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  L&apos;ostéopathie n&apos;est pas remboursée par la Sécurité Sociale, mais{" "}
                  <strong>plus de 85 % des mutuelles</strong> prennent en charge les séances (1 à 4 par an selon
                  votre contrat), pour des montants allant de 25 € à 80 € par séance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Une <strong>facture conforme</strong> est délivrée systématiquement à chaque consultation. Pour
                  les détails tarifaires du Cabinet Ostéo Valence, consultez la{" "}
                  <Link href="/tarifs" className={linkClass}>page tarifs</Link>.
                </p>
              </div>

              {/* Quand consulter */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Quand consulter un ostéopathe à Valence ?
                </h2>
                <ul className="space-y-2 text-gray-600 leading-relaxed list-none">
                  {[
                    { label: "Douleurs dorsales, cervicales ou lombaires", detail: "persistant depuis plus de 3 jours ou récidivantes (lombalgies, cervicalgies, torticolis, sciatique)." },
                    { label: "Post-traumatisme", detail: "après un accident, une chute, un faux mouvement ou une blessure sportive." },
                    { label: "Grossesse et post-partum", detail: "pour soulager les douleurs de dos, préparer le bassin à l'accouchement et accompagner la récupération." },
                    { label: "Nourrisson", detail: "en cas de coliques, plagiocéphalie, torticolis congénital, régurgitations ou troubles du sommeil." },
                    { label: "Prévention et entretien", detail: "2 à 3 séances par an pour maintenir un bon équilibre corporel, notamment pour les sportifs et les seniors." },
                  ].map(({ label, detail }) => (
                    <li key={label} className="flex gap-3">
                      <span className="mt-1 shrink-0 w-2 h-2 rounded-full bg-sage" aria-hidden />
                      <span>
                        <strong className="text-gray-800">{label}</strong> — {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ */}
              <div className="rounded-2xl bg-cream/50 border border-bluegray/20 p-6 md:p-8 space-y-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  FAQ — Questions fréquentes sur l&apos;ostéopathie à Valence
                </h2>
                {[
                  {
                    q: "Faut-il une ordonnance pour consulter un ostéopathe à Valence ?",
                    a: "Non. L'ostéopathie est en accès direct : vous pouvez prendre rendez-vous librement, sans prescription médicale. Certaines mutuelles exigent toutefois une ordonnance pour le remboursement ; renseignez-vous auprès de votre complémentaire santé.",
                  },
                  {
                    q: "Quelle est la différence entre un ostéopathe et un kinésithérapeute ?",
                    a: "Le kiné intervient sur prescription, dans le cadre d'une rééducation ciblée. L'ostéopathe adopte une approche globale du corps (articulations, muscles, viscères, crâne) pour restaurer la mobilité et l'équilibre. Les deux approches sont complémentaires.",
                  },
                  {
                    q: "L'ostéopathie est-elle remboursée à Valence ?",
                    a: "Elle n'est pas prise en charge par la Sécurité Sociale, mais plus de 85 % des mutuelles remboursent les séances (1 à 4 par an). Une facture est délivrée à chaque consultation.",
                  },
                  {
                    q: "Combien de séances faut-il en moyenne ?",
                    a: "Pour un motif aigu, 1 à 3 séances suffisent généralement. Pour une problématique chronique ou préventive, le rythme est défini lors de la première consultation. La plupart des patients ressentent une amélioration dès la première séance.",
                  },
                  {
                    q: "Peut-on consulter un ostéopathe pour un bébé ?",
                    a: "Oui, dès les premiers jours de vie. L'ostéopathie pédiatrique est indiquée pour les coliques, la plagiocéphalie, le torticolis congénital ou les troubles du sommeil. Les techniques sont extrêmement douces.",
                  },
                ].map(({ q, a }) => (
                  <div key={q}>
                    <p className="font-medium text-gray-800">{q}</p>
                    <p className="mt-1 text-gray-600 text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Conclusion : une offre ostéopathique riche à Valence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  La ville de Valence offre une offre ostéopathique variée et de qualité, couvrant toutes les
                  spécialités et tous les âges de la vie. Parmi les 10 cabinets référencés, le{" "}
                  <strong>Cabinet Ostéo Valence</strong> se distingue par sa prise en charge complète, sa
                  disponibilité et son accessibilité.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Prenez rendez-vous en ligne dès maintenant sur{" "}
                  <Link href="/#contact" className={linkClass}>osteo-valence.fr</Link> — réponse sous 24h.
                </p>
              </div>

            </div>
          </SectionReveal>

          {/* CTA */}
          <SectionReveal id="contact" className="py-16 md:py-20 px-4 md:px-8 bg-cream/50" animate="scale-in">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-light text-gray-800 md:text-3xl mb-4">
                Prendre rendez-vous avec votre ostéopathe à Valence
              </h2>
              <span className="block w-16 h-1 bg-gold rounded-full mt-3 mx-auto mb-6" aria-hidden />
              <p className="text-gray-600 mb-6">
                Consultation adulte :{" "}
                <strong className="text-gold text-2xl">55€</strong> (environ 45 min). Facture pour mutuelle.
              </p>
              <Link
                href="/#contact"
                className="btn-cta inline-block rounded-full bg-sage px-8 py-4 text-base font-medium text-white shadow-lg hover:bg-sage/90"
              >
                Demander un rendez-vous
              </Link>
              <p className="mt-3 text-sm text-gray-600">
                ou appelez le{" "}
                <a href="tel:+33757905188" className="text-sage font-medium underline">
                  +33 7 57 90 51 88
                </a>
              </p>
            </div>
          </SectionReveal>

          {/* Autres articles */}
          <LatestArticlesBanner exclude="meilleur-osteopathe-valence" />

          {/* Retour blog */}
          <SectionReveal className="py-8 px-4 md:px-8 bg-offwhite border-t border-bluegray/20" animate="fade-up">
            <div className="mx-auto max-w-3xl text-center">
              <Link
                href="/blog"
                className="inline-block rounded-full border border-sage/50 bg-white px-6 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-cream/50 hover:text-sage"
              >
                ← Retour au blog
              </Link>
            </div>
          </SectionReveal>
        </ScrollAnimations>
      </main>
    </>
  );
}
