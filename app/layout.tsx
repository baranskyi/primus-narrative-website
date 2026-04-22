import type { Metadata } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const SITE_URL = "https://primusnarrative.com";
const SITE_NAME = "Primus Narrative";
const TAGLINE =
  "Strategy, communications and growth. A Dubai consultancy for founders, boards and CMOs.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Strategy · Communications · Growth | Dubai`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Primus Narrative is a Dubai consultancy for marketing strategy, public and corporate communications, and digital growth. Registered in the Meydan Free Zone. Serving GCC, EU, UK and US clients.",
  keywords: [
    "Primus Narrative",
    "marketing consultancy Dubai",
    "strategic communications Dubai",
    "public relations UAE",
    "corporate communications GCC",
    "digital growth Dubai",
    "Meydan Free Zone",
    "AI marketing operations",
    "CMO advisory",
    "crisis communications Dubai",
    "brand strategy Dubai",
    "public affairs UAE",
    "Slava Baranskyi",
    "Anna Pavlova",
  ],
  authors: [
    { name: "Slava Baranskyi", url: "https://www.linkedin.com/in/baranskiy/" },
    {
      name: "Anna Pavlova",
      url: "https://www.linkedin.com/in/anna-pavlova-08001731/",
    },
  ],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Business Consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Strategy · Communications · Growth`,
    description: TAGLINE,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Strategy · Communications · Growth`,
    description: TAGLINE,
    creator: "@primusnarrative",
    site: "@primusnarrative",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
  },
  other: {
    "geo.region": "AE-DU",
    "geo.placename": "Dubai, Meydan Free Zone",
    "geo.position": "25.1577;55.3020",
    ICBM: "25.1577, 55.3020",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}#organization`,
  name: SITE_NAME,
  alternateName: "Primus Narrative FZ-LLC",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Dubai consultancy for marketing strategy, public and corporate communications, and digital growth.",
  priceRange: "$$$",
  slogan: "Strategy. Narrative. Growth.",
  areaServed: [
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Saudi Arabia" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United States" },
    { "@type": "Place", name: "European Union" },
  ],
  knowsAbout: [
    "Marketing strategy",
    "Public relations",
    "Corporate communications",
    "Crisis communications",
    "Brand governance",
    "Digital marketing",
    "Performance marketing",
    "Search engine optimization",
    "AI-powered marketing operations",
    "Agentic marketing systems",
    "Board advisory",
    "Public affairs",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Meydan Grandstand, Nad Al Sheba",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1577,
    longitude: 55.302,
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "hello@primusnarrative.com",
    areaServed: ["AE", "SA", "QA", "GB", "US", "EU"],
    availableLanguage: ["en", "ru", "uk"],
  },
  founder: [
    {
      "@type": "Person",
      name: "Slava Baranskyi",
      jobTitle: "Founding Partner — Marketing & Growth",
      url: "https://www.linkedin.com/in/baranskiy/",
      sameAs: ["https://www.linkedin.com/in/baranskiy/"],
    },
    {
      "@type": "Person",
      name: "Anna Pavlova",
      jobTitle: "Founding Partner — Strategic Communications",
      url: "https://www.linkedin.com/in/anna-pavlova-08001731/",
      sameAs: ["https://www.linkedin.com/in/anna-pavlova-08001731/"],
    },
  ],
  sameAs: [
    "https://www.linkedin.com/in/baranskiy/",
    "https://www.linkedin.com/in/anna-pavlova-08001731/",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}#organization` },
  inLanguage: "en",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${serif.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
      </head>
      <body className="font-sans bg-bone text-ink">{children}</body>
    </html>
  );
}
