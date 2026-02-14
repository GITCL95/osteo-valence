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

export const metadata: Metadata = {
  title: "Ostéopathe Valence (26000) | Cabinet d'Ostéopathie – Adultes, Bébés, Sportifs",
  description:
    "Votre ostéopathe D.O. à Valence (26000). Consultations adultes, nourrissons, femmes enceintes et sportifs. Techniques douces, remboursé par les mutuelles. Prenez RDV en ligne.",
  alternates: {
    canonical: "https://www.osteo-valence.fr",
  },
  openGraph: {
    title: "Ostéopathe Valence (26000) | Cabinet d'Ostéopathie D.O.",
    description:
      "Cabinet d'ostéopathie D.O. à Valence. Consultations adultes, nourrissons, femmes enceintes et sportifs. Prenez RDV.",
    url: "https://www.osteo-valence.fr",
    siteName: "Ostéopathe Valence",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ostéopathe Valence (26000)",
    description: "Cabinet d'ostéopathie D.O. à Valence. Prenez RDV en ligne.",
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Ostéopathe Valence",
  description:
    "Cabinet d'ostéopathie D.O. à Valence (26000). Consultations adultes, nourrissons, femmes enceintes, sportifs et seniors.",
  url: "https://www.osteo-valence.fr",
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
    {
      "@type": "Question",
      name: "L'ostéopathie est-elle remboursée ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'ostéopathie n'est pas remboursée par l'Assurance Maladie. En revanche, plus de 85 % des mutuelles proposent une prise en charge des séances (forfait annuel variable). Une facture vous est délivrée à chaque consultation pour effectuer votre demande de remboursement auprès de votre mutuelle.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de séances sont nécessaires ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cela dépend du motif de consultation et de votre historique. Souvent, 1 à 3 séances suffisent pour un motif aigu. Pour un suivi plus long (chronique, prévention), nous en discutons ensemble lors du premier rendez-vous.",
      },
    },
    {
      "@type": "Question",
      name: "Faut-il une ordonnance pour consulter un ostéopathe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non. Vous pouvez consulter un ostéopathe en direct, sans ordonnance médicale. En cas de pathologie connue ou de traitement en cours, il est toutefois conseillé d'en informer votre ostéopathe et éventuellement votre médecin.",
      },
    },
    {
      "@type": "Question",
      name: "L'ostéopathie est-elle douloureuse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les techniques utilisées sont adaptées à chaque patient et généralement douces. Certaines manipulations peuvent provoquer un inconfort passager. Votre ressenti est toujours pris en compte et les techniques sont ajustées si besoin.",
      },
    },
    {
      "@type": "Question",
      name: "À partir de quel âge peut-on consulter un ostéopathe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dès la naissance. L'ostéopathie pour nourrissons est courante (accouchement, coliques, torticolis, plagiocéphalie). Les techniques sont adaptées à l'âge, du bébé au senior.",
      },
    },
    {
      "@type": "Question",
      name: "Comment se déroule une première séance ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La première séance comprend un interrogatoire (motif, antécédents, mode de vie), un examen clinique puis un traitement adapté. Prévoyez environ 45 minutes pour un adulte. Pensez à apporter vos examens médicaux pertinents si vous en avez.",
      },
    },
    {
      "@type": "Question",
      name: "Quand consulter un ostéopathe ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En cas de douleurs vertébrales ou articulaires, après un choc ou une chute, pour un suivi de grossesse, pour un nourrisson (coliques, torticolis, sommeil), en prévention (sport, stress, travail sédentaire) ou après un accouchement. En cas de doute, n'hésitez pas à nous contacter.",
      },
    },
    {
      "@type": "Question",
      name: "Quelle est la différence entre un ostéopathe et un kinésithérapeute ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "L'ostéopathe travaille sur l'ensemble du corps avec une approche globale (articulations, muscles, viscères, crâne) et vise à rétablir la mobilité et l'équilibre. Le kinésithérapeute se concentre davantage sur la rééducation motrice et fonctionnelle, souvent sur prescription médicale. Les deux approches peuvent être complémentaires.",
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ostéopathe Valence",
  url: "https://www.osteo-valence.fr",
  inLanguage: "fr-FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </body>
    </html>
  );
}