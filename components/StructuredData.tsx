import { services, founders } from "@/app/data";

const SITE_URL = "https://primusnarrative.com";

export function StructuredData() {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does Primus Narrative do?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Primus Narrative is a Dubai-based consultancy offering marketing strategy, public and corporate communications, and digital growth services. The firm advises founders, boards and CMOs across the GCC, EU, UK and US markets.",
        },
      },
      {
        "@type": "Question",
        name: "Where is Primus Narrative located?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Primus Narrative is registered and operates from the Meydan Free Zone in Dubai, United Arab Emirates. The office is at Meydan Grandstand, Nad Al Sheba, Dubai.",
        },
      },
      {
        "@type": "Question",
        name: "Who are the founders of Primus Narrative?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Primus Narrative was co-founded by Slava Baranskyi (Founding Partner, Marketing & Growth — FCIM, Executive MBA candidate at IE Business School, 15+ years leading marketing for companies reaching tens of millions of users) and Anna Pavlova (Founding Partner, Strategic Communications — former advisor to the Ministry of Culture and the Cabinet of Ministers of Ukraine, former PR & Marketing Lead EMEA at FINN Partners London).",
        },
      },
      {
        "@type": "Question",
        name: "What industries does Primus Narrative serve?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Primus Narrative works with founders, boards and CMOs across technology, consumer, health and fitness, financial services, media, and public-sector-adjacent organisations. Engagements typically include market entry, positioning, reputation strategy, and digital growth.",
        },
      },
      {
        "@type": "Question",
        name: "What languages does Primus Narrative work in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "English, Russian and Ukrainian. The firm operates on GCC, EU and UK business hours and serves clients across the United Arab Emirates, Saudi Arabia, Qatar, the United Kingdom, the European Union and the United States.",
        },
      },
      {
        "@type": "Question",
        name: "How is Primus Narrative different from a traditional agency?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Primus Narrative operates as a senior partnership rather than a layered agency. The two founding partners lead every engagement directly, supported by a curated team of specialists and AI-augmented operations. Strategy is measured in commercial outcomes, not slide decks.",
        },
      },
      {
        "@type": "Question",
        name: "Does Primus Narrative build AI-powered marketing systems?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. One of the firm's core practices is AI-powered marketing operations — designing and operating agentic AI workflows for research, content, campaign operations and analytics inside client marketing teams, with governance, brand safety and ethics built in.",
        },
      },
    ],
  };

  const servicesLd = {
    "@context": "https://schema.org",
    "@graph": services.map((s) => ({
      "@type": "Service",
      "@id": `${SITE_URL}#service-${s.id}`,
      name: s.title,
      serviceType: s.title,
      description: s.description,
      provider: { "@id": `${SITE_URL}#organization` },
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${s.title} deliverables`,
        itemListElement: s.deliverables.map((d, i) => ({
          "@type": "Offer",
          position: i + 1,
          itemOffered: { "@type": "Service", name: d },
        })),
      },
    })),
  };

  const peopleLd = {
    "@context": "https://schema.org",
    "@graph": founders.map((f) => ({
      "@type": "Person",
      "@id": `${SITE_URL}#${f.id}`,
      name: f.name,
      jobTitle: f.role,
      image: `${SITE_URL}${f.photo}`,
      description: f.short,
      url: f.linkedin,
      sameAs: [f.linkedin],
      worksFor: { "@id": `${SITE_URL}#organization` },
      workLocation: {
        "@type": "Place",
        name: "Dubai, United Arab Emirates",
      },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}#services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Partners",
        item: `${SITE_URL}#partners`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${SITE_URL}#contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
    </>
  );
}
