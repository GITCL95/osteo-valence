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
    default: "Ostéopathe Valence (26000) | Cabinet D.O. – RDV en Ligne",
    template: "%s | Ostéopathe Valence",
  },
  description:
    "Ostéopathe D.O. à Valence (26000) : consultations adultes, bébés, sportifs, femmes enceintes. Techniques douces, remboursé par les mutuelles. ☎ Prenez RDV en ligne.",
  alternates: {
    canonical: BASE + "/",
  },
  openGraph: {
    title: "Ostéopathe Valence (26000) | Cabinet D.O. – RDV en Ligne",
    description:
      "Ostéopathe D.O. à Valence (26000) : consultations adultes, bébés, sportifs, femmes enceintes. Techniques douces, remboursé par les mutuelles. ☎ Prenez RDV en ligne.",
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
  verification: {
    google: "NrP56tL_z6NcoCJenY84uW4M_sWA0ve2KFnpx3f0bgc",
  },
};

const medicalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Ostéopathe Valence",
  description:
    "Cabinet d'ostéopathie D.O. à Valence (26000). Consultations adultes, nourrissons, femmes enceintes, sportifs et seniors.",
  url: BASE,
  telephone: "+33757905188",
  image: `${BASE}/osteopathe-valence-cabinet.webp`,
  sameAs: [
    "https://www.google.com/maps/place/45+Avenue+Victor+Hugo,+26000+Valence",
    "https://www.doctolib.fr/osteopathe/valence",
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
        where: { href_matches: ["/blog", "/blog/*"] },
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