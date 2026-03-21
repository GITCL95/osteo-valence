import type { Metadata } from "next";
import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import SectionWave from "@/components/SectionWave";
import ScrollAnimations from "@/components/ScrollAnimations";
import FloatingCTA from "@/components/FloatingCTA";
import LatestArticlesBanner from "@/components/LatestArticlesBanner";

const BASE = "https://www.osteo-valence.fr";
const canonical = `${BASE}/blog/meilleur-osteopathe-drome/`;

export const metadata: Metadata = {
  title: "Meilleur ostéopathe Drôme (26) — Top 10 cabinets 2026",
  description:
    "Découvrez les 10 meilleurs ostéopathes de la Drôme : Valence, Montélimar, Romans-sur-Isère, Nyons, Pierrelatte… Avis, spécialités et conseils pour bien choisir.",
  alternates: { canonical },
  openGraph: {
    title: "Meilleur ostéopathe Drôme (26) — Top 10 cabinets 2026",
    description:
      "Découvrez les 10 meilleurs ostéopathes de la Drôme : Valence, Montélimar, Romans-sur-Isère, Nyons, Pierrelatte… Avis, spécialités et conseils pour bien choisir.",
    url: canonical,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "article",
    images: [{ url: `${BASE}/og-default.jpg`, width: 1200, height: 630, alt: "Meilleur ostéopathe Drôme 2026" }],
  },
  twitter: { card: "summary_large_image", images: [`${BASE}/og-default.jpg`] },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Meilleur ostéopathe dans la Drôme (26) : les 10 cabinets à connaître en 2026",
  description:
    "Découvrez les 10 meilleurs ostéopathes de la Drôme : Valence, Montélimar, Romans-sur-Isère, Nyons, Pierrelatte… Avis, spécialités et conseils pour bien choisir.",
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
      name: "Faut-il une ordonnance pour consulter un ostéopathe dans la Drôme ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. L'ostéopathie est en accès direct : vous pouvez consulter librement sans prescription médicale. Certaines mutuelles exigent toutefois une ordonnance pour rembourser les séances ; renseignez-vous auprès de votre complémentaire santé.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre un ostéopathe et un kiné ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Le kinésithérapeute intervient sur prescription médicale pour rééduquer une zone précise. L'ostéopathe adopte une approche globale du corps (articulations, muscles, viscères, crâne) pour rétablir la mobilité et l'équilibre général. Les deux approches sont complémentaires.",
      },
    },
    {
      "@type": "Question",
      name: "L'ostéopathie est-elle remboursée par la mutuelle dans la Drôme ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'ostéopathie n'est pas remboursée par la Sécurité Sociale, mais plus de 85 % des mutuelles prennent en charge les séances (1 à 4 par an selon votre contrat). Une facture conforme est délivrée à chaque consultation.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de séances d'ostéopathie faut-il en moyenne ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour un motif aigu (torticolis, lombalgie soudaine), 1 à 3 séances suffisent généralement. Pour une problématique chronique, le rythme est défini lors de la première consultation. La plupart des patients ressentent une amélioration dès la première séance.",
      },
    },
    {
      "@type": "Question",
      name: "Peut-on consulter un ostéopathe pour un bébé ou un nourrisson dans la Drôme ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, dès les premiers jours de vie. L'ostéopathie pédiatrique est indiquée pour les coliques, la plagiocéphalie, le torticolis congénital ou les troubles du sommeil. Les techniques sont extrêmement douces et adaptées à la fragilité du nourrisson.",
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
    { "@type": "ListItem", position: 3, name: "Meilleur ostéopathe Drôme", item: canonical },
  ],
};

const linkClass = "text-sage font-medium underline decoration-sage/40 underline-offset-2 hover:decoration-sage";

const PRATICIENS = [
  {
    rank: 1,
    name: "Cabinet Ostéo Valence",
    ville: "Valence (26000)",
    site: "https://www.osteo-valence.fr/",
    siteLabel: "osteo-valence.fr",
    address: "1 avenue Victor Hugo, 26000 Valence",
    badge: "Référence Drôme",
    description: (
      <>
        Installé à Valence, préfecture de la Drôme, le Cabinet Ostéo Valence s&apos;impose comme la référence
        départementale en matière d&apos;<strong>ostéopathie dans la Drôme</strong>. Tenu par un ostéopathe D.O.
        diplômé, ce cabinet moderne propose une prise en charge complète pour toute la famille : du{" "}
        <Link href="/osteopathe-bebe" className={linkClass}>nourrisson</Link> au{" "}
        <Link href="/osteopathe-senior" className={linkClass}>senior</Link>, en passant par les{" "}
        <Link href="/osteopathe-sportif" className={linkClass}>sportifs</Link> et les{" "}
        <Link href="/osteopathe-femme-enceinte" className={linkClass}>femmes enceintes</Link>. Techniques
        douces, approche globale, disponibilité sous 24 à 48h pour les urgences. Cabinet accessible PMR,
        parking à proximité. Plus de 85 % des mutuelles remboursent les consultations ; une facture est
        délivrée systématiquement. Prise de{" "}
        <Link href="/#contact" className={linkClass}>rendez-vous en ligne</Link> disponible à toute heure.
      </>
    ),
  },
  {
    rank: 2,
    name: "David Guyard",
    ville: "Valence (26000)",
    site: "https://www.osteopathe-drome-valence.fr/",
    siteLabel: "osteopathe-drome-valence.fr",
    address: "Valence, proche Bourg-lès-Valence",
    badge: "Approche naturelle",
    description: (
      <>
        David Guyard est un ostéopathe D.O. valentinois dont le cabinet est facilement accessible depuis
        Bourg-lès-Valence. Sa pratique se distingue par une approche thérapeutique naturelle et une grande
        polyvalence : au-delà des classiques douleurs musculo-squelettiques, il intervient sur les troubles
        digestifs, cardiovasculaires et ORL. Chaque traitement est soigneusement adapté à la morphologie,
        à l&apos;âge et aux antécédents du patient. Un praticien idéal pour les familles de
        l&apos;agglomération valentinoise à la recherche d&apos;une prise en charge globale et individualisée.
      </>
    ),
  },
  {
    rank: 3,
    name: "Joseph Tambourgi",
    ville: "Montélimar (26200)",
    site: "https://www.osteopathe-tambourgi.fr/",
    siteLabel: "osteopathe-tambourgi.fr",
    address: "28 Avenue Jean Jaurès, 26200 Montélimar",
    badge: "Double compétence kiné/ostéo",
    description: (
      <>
        Installé à Montélimar depuis <strong>2012</strong>, Joseph Tambourgi bénéficie d&apos;une double
        formation de kinésithérapeute D.E. et d&apos;ostéopathe D.O. (école d&apos;ostéopathie d&apos;Aix-en-Provence).
        Cette double compétence lui permet d&apos;aborder les pathologies avec une précision et une richesse
        thérapeutique rares. Il prend en charge le nourrisson, l&apos;enfant, la femme enceinte, le senior et le
        sportif. Le cabinet est ouvert du lundi au samedi, avec des créneaux d&apos;urgence possibles. Tél :{" "}
        <a href="tel:0663165074" className={linkClass}>06 63 16 50 74</a>.
      </>
    ),
  },
  {
    rank: 4,
    name: "Alexandre Picard",
    ville: "Romans-sur-Isère (26100)",
    site: "https://www.osteopathe-romans26.com/",
    siteLabel: "osteopathe-romans26.com",
    address: "7 Rue Sidonie Gabrielle Colette, 26100 Romans-sur-Isère (Villa Gabriel)",
    badge: "Drôme des collines",
    description: (
      <>
        Diplômé du CIDO de Saint-Étienne (certification RNCP niveau 1), Alexandre Picard exerce à
        Romans-sur-Isère, dans la Drôme des collines. Son cabinet de la Villa Gabriel accueille nourrissons,
        femmes enceintes, sportifs et seniors, avec des horaires larges : lundi au vendredi de 8h30 à 19h30
        et le samedi matin. Des consultations à domicile sont également possibles dans les alentours de
        Romans, un atout précieux pour les patients à mobilité réduite ou en post-partum.
      </>
    ),
  },
  {
    rank: 5,
    name: "Sandrine Guidoni",
    ville: "Nyons (26110)",
    site: null,
    siteLabel: null,
    address: "Chemin des Blaches, 26110 Nyons",
    badge: "Drôme provençale",
    description: (
      <>
        Sandrine Guidoni représente l&apos;offre ostéopathique en <strong>Drôme provençale</strong>. Installée
        à Nyons, capitale mondiale de l&apos;olive et porte d&apos;entrée du pays des Baronnies, elle offre un
        accompagnement de proximité aux habitants du sud du département. Son exercice en milieu rural lui
        permet d&apos;établir une relation de confiance durable avec ses patients. Un atout pour ceux qui
        recherchent un <strong>ostéopathe dans la Drôme provençale</strong> sans avoir à se déplacer jusqu&apos;à
        Valence ou Montélimar.
      </>
    ),
  },
  {
    rank: 6,
    name: "Jérôme Trotoux",
    ville: "Pierrelatte (26700)",
    site: null,
    siteLabel: null,
    address: "2 Rue Madeleine Brès, Pôle de Santé, 1er étage, 26700 Pierrelatte",
    badge: "Sud Drôme",
    description: (
      <>
        Jérôme Trotoux exerce au sein du <strong>Pôle de Santé de Pierrelatte</strong>, dans le sud de la
        Drôme, à proximité de Bollène et Saint-Paul-Trois-Châteaux. Ce cadre pluridisciplinaire favorise
        une prise en charge coordonnée entre les différents professionnels de santé du cabinet. Idéal pour
        les patients du couloir rhodanien sud qui souhaitent consulter un <strong>ostéopathe dans la
        Drôme</strong> proche de leur domicile, sans se rendre jusqu&apos;à Valence ou Montélimar.
      </>
    ),
  },
  {
    rank: 7,
    name: "Marianne Montmartin",
    ville: "Montélimar (26200)",
    site: "http://www.osteopathe-montelimar.fr/",
    siteLabel: "osteopathe-montelimar.fr",
    address: "Montélimar (26200)",
    badge: "Drôme & Ardèche",
    description: (
      <>
        Marianne Montmartin dispose d&apos;une présence originale avec un double cabinet : l&apos;un à{" "}
        <strong>Montélimar (Drôme)</strong>, l&apos;autre à Aubenas (Ardèche). Elle traite le lumbago, les
        douleurs dorsales chroniques, les cervicalgies, la sciatique, ainsi que les troubles digestifs et
        viscéraux. Son panel de patients est large : nourrisson, enfant, femme enceinte, senior, sportif.
        Chaque séance d&apos;environ 30 minutes s&apos;articule autour d&apos;un diagnostic en trois étapes.
        Une praticienne reconnue à l&apos;échelle de la vallée du Rhône.
      </>
    ),
  },
  {
    rank: 8,
    name: "Sylvain Brun",
    ville: "Valence (26000)",
    site: null,
    siteLabel: null,
    address: "7 Allée Charles Baron, 26000 Valence",
    badge: "Douleur chronique",
    description: (
      <>
        Sylvain Brun se distingue par une approche résolument moderne : son modèle{" "}
        <strong>biopsychosocial</strong>, informé par les données probantes de la recherche, intègre les
        dimensions mécaniques, psychologiques et sociales de la douleur. Diplômé D.O. (RNCP niveau 7), il
        est particulièrement indiqué pour les <strong>douleurs chroniques</strong>, les troubles nerveux et
        le suivi sportif. Il exerce au sein d&apos;un centre pluridisciplinaire à Valence, en rez-de-chaussée
        avec parking gratuit, dans un cadre accessible à tous.
      </>
    ),
  },
  {
    rank: 9,
    name: "Marion Gougis",
    ville: "Montélier (26120)",
    site: null,
    siteLabel: null,
    address: "8 Rue des Tilleuls, 26120 Montélier",
    badge: "Plaine valentinoise",
    description: (
      <>
        Marion Gougis exerce à <strong>Montélier</strong>, commune de la plaine valentinoise à quelques
        kilomètres de Valence. Référencée sur le réseau Oostéo, elle propose une ostéopathie de proximité
        pour les habitants du secteur de Chabeuil, Montélier et Beaumont-lès-Valence. Son cabinet, situé
        dans un cadre calme en dehors de l&apos;agitation urbaine, est une alternative appréciée pour ceux qui
        souhaitent consulter un <strong>ostéopathe dans la Drôme</strong> loin de l&apos;affluence de la ville.
      </>
    ),
  },
  {
    rank: 10,
    name: "Yvori Pierre",
    ville: "Bourg-de-Péage (26300)",
    site: null,
    siteLabel: null,
    address: "127 Grand'Rue Jean Jaurès, 26300 Bourg-de-Péage",
    badge: "Drôme des collines",
    description: (
      <>
        Yvori Pierre exerce à <strong>Bourg-de-Péage</strong>, ville jumelle de Romans-sur-Isère, en plein
        cœur de la Drôme des collines. Son cabinet de la Grand&apos;Rue est facilement accessible depuis
        Romans, Chatuzange-le-Goubet et Saint-Donat-sur-l&apos;Herbasse. Il constitue un recours de proximité
        pour les habitants du nord de la Drôme qui recherchent un <strong>ostéopathe D.O.</strong> sans
        avoir à rejoindre Valence. Un maillage territorial important pour l&apos;offre ostéopathique
        drômoise.
      </>
    ),
  },
];

export default function ArticleMeilleurOsteopatheDromePage() {
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
                <span className="text-gray-800 font-medium">Meilleur ostéopathe Drôme</span>
              </nav>
              <span className="inline-block rounded-full bg-sage/10 text-sage px-3 py-1 text-xs font-medium mb-4">
                Sélection 2026
              </span>
              <h1 className="text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl">
                Meilleur ostéopathe dans la Drôme (26) : les 10 cabinets à connaître en 2026
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
                  La Drôme, département d&apos;Auvergne-Rhône-Alpes coincé entre le Vercors et la Provence,
                  compte plus de 500 000 habitants répartis entre grandes villes, bourgs ruraux et villages
                  perchés. De la vallée du Rhône à la Drôme provençale, en passant par la Drôme des collines
                  et le plateau du Diois, l&apos;offre en <strong>ostéopathie dans la Drôme (26)</strong>{" "}
                  est à la fois riche et géographiquement bien répartie.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Que vous soyez à Valence, Montélimar, Romans-sur-Isère, Nyons ou Pierrelatte, trouver
                  le bon praticien n&apos;est pas toujours simple. Pour vous aider, nous avons sélectionné les{" "}
                  <strong>10 meilleurs ostéopathes de la Drôme en 2026</strong>, choisis pour la qualité
                  de leurs diplômes, la diversité de leurs spécialités et leur accessibilité.
                </p>
              </div>

              {/* Comment choisir */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Comment choisir son ostéopathe dans la Drôme ?
                </h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>
                    <strong>Le diplôme D.O. agréé</strong> par le ministère de la Santé est la première
                    garantie de qualité. En France, le titre d&apos;ostéopathe est protégé et seuls les
                    praticiens titulaires d&apos;un diplôme reconnu (RNCP) sont autorisés à exercer.
                    Tous les praticiens de cette sélection sont diplômés D.O. et agréés.
                  </p>
                  <p>
                    <strong>Les spécialités</strong> sont déterminantes : un ostéopathe spécialisé en
                    pédiatrie ne travaillera pas de la même façon qu&apos;un praticien axé sur la douleur
                    chronique ou le suivi sportif. Identifiez votre besoin principal avant de choisir.
                  </p>
                  <p>
                    <strong>La proximité géographique</strong> compte dans un département aussi étendu
                    que la Drôme. Évitez de parcourir 60 km si un praticien compétent exerce à 10 minutes
                    de chez vous.
                  </p>
                  <p>
                    <strong>L&apos;accessibilité</strong> — parking, accès PMR, horaires larges — et la{" "}
                    <strong>prise en charge mutuelle</strong> sont des critères pratiques essentiels.
                    Plus de 85 % des complémentaires santé remboursent l&apos;ostéopathie. Consultez la{" "}
                    <Link href="/tarifs" className={linkClass}>page tarifs</Link> du Cabinet Ostéo Valence
                    pour plus de détails.
                  </p>
                </div>
              </div>

              {/* Top 10 */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                  Les 10 meilleurs ostéopathes de la Drôme en 2026
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
                            <span className="text-sm text-gray-400">{p.ville}</span>
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
                  Combien coûte une séance d&apos;ostéopathie dans la Drôme ?
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  Les tarifs sont globalement homogènes dans tout le département : une consultation chez
                  un <strong>ostéopathe dans la Drôme (26)</strong> coûte entre <strong>45 € et 70 €</strong>,
                  selon le praticien, la ville et le type de consultation. La majorité des cabinets pratiquent
                  un tarif autour de <strong>55 €</strong> pour une séance adulte d&apos;environ 45 minutes.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  L&apos;ostéopathie n&apos;est pas remboursée par l&apos;Assurance Maladie, mais{" "}
                  <strong>plus de 85 % des mutuelles</strong> prennent en charge les séances (de 1 à 4 par an
                  selon votre contrat), pour des montants allant de 25 € à 80 € par séance.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Une <strong>facture conforme</strong> est délivrée à chaque consultation pour faciliter
                  votre demande de remboursement. Pour les détails tarifaires :{" "}
                  <Link href="/tarifs" className={linkClass}>page tarifs du Cabinet Ostéo Valence</Link>.
                </p>
              </div>

              {/* Quand consulter */}
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Quand consulter un ostéopathe dans la Drôme ?
                </h2>
                <ul className="space-y-2 text-gray-600 leading-relaxed list-none">
                  {[
                    {
                      label: "Douleurs dorsales, cervicales ou lombaires",
                      detail: "persistant depuis plus de 3 jours ou récidivantes (lombalgies, torticolis, sciatique, hernie discale fonctionnelle).",
                    },
                    {
                      label: "Post-traumatisme",
                      detail: "après un accident de voiture, une chute, un faux mouvement ou une blessure sportive.",
                    },
                    {
                      label: "Grossesse et post-partum",
                      detail: "pour soulager les douleurs de dos, préparer le bassin à l'accouchement et accompagner la récupération.",
                    },
                    {
                      label: "Nourrisson",
                      detail: "en cas de coliques, plagiocéphalie, torticolis congénital, régurgitations ou troubles du sommeil.",
                    },
                    {
                      label: "Reprise d'activité sportive",
                      detail: "randonnée dans le Vercors ou les Baronnies, vélo, trail, sports outdoor très pratiqués dans la Drôme — une séance préventive optimise la récupération.",
                    },
                    {
                      label: "Prévention et entretien",
                      detail: "2 à 3 séances par an suffisent à maintenir un bon équilibre corporel, notamment pour les travailleurs sédentaires et les seniors.",
                    },
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
                  FAQ — Questions fréquentes sur l&apos;ostéopathie dans la Drôme
                </h2>
                {[
                  {
                    q: "Faut-il une ordonnance pour consulter un ostéopathe dans la Drôme ?",
                    a: "Non. L'ostéopathie est en accès direct : vous pouvez consulter librement, sans prescription médicale. Certaines mutuelles exigent toutefois une ordonnance pour rembourser les séances ; renseignez-vous auprès de votre complémentaire santé.",
                  },
                  {
                    q: "Quelle est la différence entre un ostéopathe et un kiné ?",
                    a: "Le kinésithérapeute intervient sur prescription pour rééduquer une zone précise. L'ostéopathe adopte une approche globale du corps (articulations, muscles, viscères, crâne) pour rétablir la mobilité et l'équilibre général. Les deux approches sont complémentaires.",
                  },
                  {
                    q: "L'ostéopathie est-elle remboursée par la mutuelle dans la Drôme ?",
                    a: "Elle n'est pas remboursée par la Sécurité Sociale, mais plus de 85 % des mutuelles prennent en charge les séances (1 à 4 par an). Une facture conforme est délivrée à chaque consultation pour faciliter votre remboursement.",
                  },
                  {
                    q: "Combien de séances d'ostéopathie faut-il en moyenne ?",
                    a: "Pour un motif aigu, 1 à 3 séances suffisent. Pour une problématique chronique, le rythme est défini lors de la première consultation. La plupart des patients ressentent une amélioration dès la première séance.",
                  },
                  {
                    q: "Peut-on consulter un ostéopathe pour un bébé ou un nourrisson dans la Drôme ?",
                    a: "Oui, dès les premiers jours de vie. L'ostéopathie pédiatrique est indiquée pour les coliques, la plagiocéphalie, le torticolis congénital ou les troubles du sommeil. Les techniques utilisées sont extrêmement douces.",
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
                  Conclusion : la Drôme, un département bien couvert en ostéopathie
                </h2>
                <p className="text-gray-600 leading-relaxed mb-3">
                  De Valence à Montélimar, de Romans-sur-Isère à Nyons, en passant par Pierrelatte et
                  Bourg-de-Péage, la Drôme dispose d&apos;une offre ostéopathique dense et de qualité. Que
                  vous soyez en vallée du Rhône, en Drôme provençale ou dans la Drôme des collines, un
                  praticien compétent se trouve à proximité.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Parmi les 10 cabinets référencés, le <strong>Cabinet Ostéo Valence</strong> figure en
                  tête de cette sélection grâce à sa prise en charge complète, sa modernité et sa
                  disponibilité. <strong>Prenez rendez-vous en ligne dès maintenant sur{" "}
                  <Link href="/#contact" className={linkClass}>osteo-valence.fr</Link></strong> — réponse
                  sous 24h.
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
          <LatestArticlesBanner exclude="meilleur-osteopathe-drome" />

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
