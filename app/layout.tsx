import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const BASE = "https://www.osteo-valence.fr";

export const metadata: Metadata = {
  title: {
    default: "Pauline Odeyer – Ostéopathe D.O. à Valence (26) et Saint Lattier (38)",
    template: "%s | Pauline Odeyer Ostéopathe",
  },
  description:
    "Pauline Odeyer, ostéopathe D.O. à Valence (9 rue du Lycée) et Saint Lattier (55 allée du Cultil). Consultations adultes, bébés, femmes enceintes, sportifs. RDV sur Doctolib.",
  alternates: {
    canonical: BASE,
  },
  openGraph: {
    title: "Pauline Odeyer – Ostéopathe D.O. à Valence et Saint Lattier",
    description:
      "Pauline Odeyer, ostéopathe D.O. à Valence (26) et Saint Lattier (38). Techniques douces, prise en charge mutuelles. RDV disponibles sur Doctolib.",
    url: BASE,
    siteName: "Pauline Odeyer Ostéopathe",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: `${BASE}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "Pauline Odeyer – Ostéopathe D.O. à Valence et Saint Lattier",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pauline Odeyer – Ostéopathe D.O. Valence & Saint Lattier",
    description: "Ostéopathe D.O. à Valence et Saint Lattier. Consultations adultes, bébés, sportifs. RDV sur Doctolib.",
    images: [`${BASE}/og-default.jpg`],
  },
  verification: {
    google: "NrP56tL_z6NcoCJenY84uW4M_sWA0ve2KFnpx3f0bgc",
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Pauline Odeyer – Ostéopathe D.O.",
  description:
    "Pauline Odeyer, ostéopathe D.O. à Valence (26000) et Saint Lattier (38840). Consultations adultes, nourrissons, femmes enceintes, sportifs et seniors.",
  url: BASE,
  telephone: "+33769341945",
  image: `${BASE}/osteopathe-valence-cabinet.webp`,
  sameAs: [
    "https://www.doctolib.fr/osteopathe/saint-lattier/pauline-odeyer",
  ],
  areaServed: [
    {
      "@type": "City",
      name: "Valence",
      sameAs: "https://fr.wikipedia.org/wiki/Valence_(Dr%C3%B4me)",
    },
    {
      "@type": "City",
      name: "Saint Lattier",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consultations d'ostéopathie",
    itemListElement: [
      { "@type": "Offer", name: "Consultation ostéopathie (1h)", price: "60", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Consultation enfant jusqu'à 3 ans (1h)", price: "45", priceCurrency: "EUR" },
      { "@type": "Offer", name: "Consultation à domicile", price: "75", priceCurrency: "EUR" },
    ],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "9 rue du Lycée",
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
  priceRange: "45€ - 90€",
  medicalSpecialty: "Osteopathic",
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pauline Odeyer Ostéopathe",
  url: BASE,
  inLanguage: "fr-FR",
  publisher: {
    "@type": "Person",
    name: "Pauline Odeyer",
    jobTitle: "Ostéopathe D.O.",
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
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <NavBar />
        <Breadcrumbs />
        {children}
        <Footer />
        <CookieBanner />
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speculationRules) }}
        />
      </body>
    </html>
  );
}