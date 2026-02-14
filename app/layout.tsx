import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE = "https://www.osteo-valence.fr";

export const metadata: Metadata = {
  title: {
    default: "Ostéopathe Valence (26000) | Cabinet D.O. – RDV en Ligne",
    template: "%s | Ostéopathe Valence",
  },
  description:
    "Ostéopathe D.O. à Valence (26000). Consultations adultes, bébés, femmes enceintes, sportifs. Techniques douces, mutuelles. Prenez RDV en ligne au cabinet.",
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    title: "Ostéopathe Valence (26000) | Cabinet D.O. – RDV en Ligne",
    description:
      "Ostéopathe D.O. à Valence (26000). Consultations adultes, bébés, femmes enceintes, sportifs. Techniques douces, mutuelles. Prenez RDV en ligne au cabinet.",
    url: BASE,
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${BASE}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Cabinet d'ostéopathie à Valence – 45 avenue Victor Hugo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ostéopathe Valence (26000) | Cabinet D.O.",
    description: "Ostéopathe D.O. à Valence. Consultations adultes, bébés, sportifs. Prenez RDV en ligne.",
    images: [`${BASE}/og-default.jpg`],
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Ostéopathe Valence",
  description:
    "Cabinet d'ostéopathie D.O. à Valence (26000). Consultations adultes, nourrissons, femmes enceintes, sportifs et seniors.",
  url: BASE,
  telephone: "+33475000000",
  image: `${BASE}/osteopathe-valence-cabinet.webp`,
  sameAs: [
    "https://www.google.com/maps/place/45+Avenue+Victor+Hugo,+26000+Valence",
  ],
  areaServed: {
    "@type": "City",
    name: "Valence",
    sameAs: "https://fr.wikipedia.org/wiki/Valence_(Dr%C3%B4me)",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consultations d'ostéopathie",
    itemListElement: [
      { "@type": "Offer", name: "Consultation adulte", price: "55", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Consultation nourrisson / enfant", price: "50", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Consultation à domicile", price: "75", priceCurrency: "EUR" },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "45 avenue Victor Hugo",
    addressLocality: "Valence",
    postalCode: "26000",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 44.9334,
    longitude: 4.8924,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "13:00",
    },
  ],
  priceRange: "50€ - 75€",
  medicalSpecialty: "Osteopathic",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "127",
    reviewCount: "127",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "L'ostéopathie est-elle remboursée ?", acceptedAnswer: { "@type": "Answer", text: "L'ostéopathie n'est pas remboursée par l'Assurance Maladie. Plus de 85 % des mutuelles prennent en charge les séances (forfait variable). Une facture vous est délivrée à chaque consultation pour votre demande de remboursement." } },
    { "@type": "Question", name: "Combien de séances sont nécessaires ?", acceptedAnswer: { "@type": "Answer", text: "Cela dépend du motif et de votre historique. Souvent 1 à 3 séances suffisent pour un motif aigu. Pour un suivi chronique ou en prévention, nous en discutons au premier rendez-vous." } },
    { "@type": "Question", name: "Faut-il une ordonnance pour consulter un ostéopathe ?", acceptedAnswer: { "@type": "Answer", text: "Non. Vous pouvez consulter en direct, sans ordonnance. En cas de pathologie connue ou de traitement en cours, il est conseillé d'en informer votre ostéopathe et votre médecin." } },
    { "@type": "Question", name: "L'ostéopathie est-elle douloureuse ?", acceptedAnswer: { "@type": "Answer", text: "Les techniques sont adaptées à chaque patient et généralement douces. Certaines manipulations peuvent provoquer un inconfort passager. Votre ressenti est pris en compte et les techniques sont ajustées si besoin." } },
    { "@type": "Question", name: "À partir de quel âge peut-on consulter un ostéopathe ?", acceptedAnswer: { "@type": "Answer", text: "Dès la naissance. L'ostéopathie pour nourrissons est courante (coliques, torticolis, plagiocéphalie). Les techniques sont adaptées à l'âge, du bébé au senior." } },
    { "@type": "Question", name: "Comment se déroule une première séance ?", acceptedAnswer: { "@type": "Answer", text: "La première séance comprend un interrogatoire (motif, antécédents), un examen clinique puis un traitement adapté. Prévoyez environ 45 minutes pour un adulte. Apportez vos examens médicaux pertinents si vous en avez." } },
    { "@type": "Question", name: "Quand consulter un ostéopathe ?", acceptedAnswer: { "@type": "Answer", text: "Douleurs vertébrales ou articulaires, après un choc ou une chute, suivi de grossesse, nourrisson (coliques, torticolis, sommeil), prévention (sport, stress, travail sédentaire) ou après un accouchement. En cas de doute, contactez-nous." } },
    { "@type": "Question", name: "Quelle est la différence entre un ostéopathe et un kinésithérapeute ?", acceptedAnswer: { "@type": "Answer", text: "L'ostéopathe travaille sur l'ensemble du corps (articulations, muscles, viscères, crâne) pour rétablir la mobilité. Le kiné se concentre sur la rééducation motrice, souvent sur prescription. Les deux approches sont complémentaires." } },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ostéopathe Valence",
  url: BASE,
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Organization",
    name: "Cabinet d'Ostéopathie Valence",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const speculationRules = {
    prerender: [
      {
        where: { href_matches: ["/osteopathe-dos", "/osteopathe-bebe", "/osteopathe-femme-enceinte", "/osteopathe-sportif", "/osteopathe-senior"] },
        eagerness: "moderate",
      },
    ],
    prefetch: [
      {
        where: { href_matches: ["/blog/*"] },
        eagerness: "conservative",
      },
    ],
  };

  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <NavBar />
        <Breadcrumbs />
        {children}
        <CookieBanner />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
        />
      </body>
    </html>
  );
}