export type Service = {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    id: "strategy",
    number: "01",
    title: "Marketing Strategy",
    tagline: "From positioning to growth architecture.",
    description:
      "We design marketing strategies that survive contact with reality — built on category insight, behavioural research, and commercial math, not slogans. Suited for founders, boards and CMOs who need clarity before they invest in media.",
    deliverables: [
      "Positioning & messaging framework",
      "ICP and jobs-to-be-done mapping",
      "Go-to-market plan & channel mix",
      "Marketing P&L and KPI model",
    ],
  },
  {
    id: "comms",
    number: "02",
    title: "Public & Corporate Communications",
    tagline: "Reputation, narrative, influence.",
    description:
      "Strategic communications for executives, boards and high-stakes initiatives — from brand governance to crisis response. EU, UK, US and MENA track record, with direct experience advising ministries, platforms and enterprise brands.",
    deliverables: [
      "Corporate narrative & brand governance",
      "Executive positioning and thought leadership",
      "Crisis communications and issue management",
      "Public affairs and stakeholder engagement",
    ],
  },
  {
    id: "digital",
    number: "03",
    title: "Digital Growth & Performance",
    tagline: "Paid, organic, and everything in between.",
    description:
      "Full-stack digital promotion of products and services online — performance marketing, SEO, content engines, conversion optimisation and lifecycle automation. Operated by a team that actually ships the code behind the systems.",
    deliverables: [
      "Paid media (Meta, Google, LinkedIn, X)",
      "SEO, programmatic content, AI search (AEO/GEO)",
      "Landing pages and CRO",
      "Lifecycle, CRM & marketing automation",
    ],
  },
  {
    id: "ai",
    number: "04",
    title: "AI-Powered Marketing Operations",
    tagline: "Agentic systems, in production.",
    description:
      "We build and operate AI systems inside marketing teams — not demos. Agentic workflows for research, content, campaign ops and analytics that compress cycle time and raise the quality bar. Governed, measurable, and aligned with brand.",
    deliverables: [
      "AI workflow design & implementation",
      "Custom agents for content, research, ops",
      "Data pipelines and analytics automation",
      "AI governance, brand safety and ethics",
    ],
  },
  {
    id: "brand",
    number: "05",
    title: "Brand & Editorial",
    tagline: "A voice that compounds.",
    description:
      "Brand identity, editorial systems, and executive voice. We help companies build a verbal and visual language that is unmistakable across a press release, a pitch deck, a landing page, and a LinkedIn post — for years, not launches.",
    deliverables: [
      "Verbal identity and tone of voice",
      "Editorial guidelines and content systems",
      "Executive ghostwriting",
      "Brand book and governance",
    ],
  },
  {
    id: "advisory",
    number: "06",
    title: "Board & Founder Advisory",
    tagline: "A thinking partner on call.",
    description:
      "Fractional and advisory engagements for founders, CEOs and boards entering new markets, raising capital, or rebuilding the marketing function. Confidential, senior, and commercially literate.",
    deliverables: [
      "Market entry (GCC, EU, UK, US)",
      "Due diligence and investor narrative",
      "Marketing org design and hiring",
      "Board-level reporting and review",
    ],
  },
];

export type Founder = {
  id: string;
  name: string;
  role: string;
  short: string;
  bio: string;
  credentials: string[];
  linkedin: string;
  linkedinLabel: string;
  initials: string;
  photo: string | null;
  photoPosition?: string;
  accent: "pink" | "ink";
  location: string;
};

export const founders: Founder[] = [
  {
    id: "slava",
    name: "Slava Baranskyi",
    role: "Founding Partner · Marketing & Growth",
    short:
      "Growth-focused CMO, FCIM, and serial founder. 15+ years leading marketing strategy, brand building and automation across media, tech and fitness.",
    bio:
      "Slava is a Chartered Marketer (Fellow of the Chartered Institute of Marketing) and Executive MBA candidate at IE Business School. He has led projects that attracted millions of users, generated 8-figure revenues, and built viral communities — including LIFEHACKER.RU (32M+ monthly users), Ukraine's first fully automated fitness club ecosystem, and the premium corporate media agency Palindrome. He is a CMO who actually ships code: he builds agentic marketing systems in production, not slideware.",
    credentials: [
      "FCIM — Chartered Institute of Marketing (Fellow)",
      "Executive MBA candidate, IE Business School",
      "IMD Leaders Program",
      "Author, \"Doubt Challenge\" (Mann, Ivanov & Ferber)",
    ],
    linkedin: "https://www.linkedin.com/in/baranskiy/",
    linkedinLabel: "linkedin.com/in/baranskiy",
    initials: "SB",
    photo: "/founders/slava.jpg",
    photoPosition: "center 25%",
    accent: "ink",
    location: "Dubai · Kyiv",
  },
  {
    id: "anna",
    name: "Anna Pavlova",
    role: "Founding Partner · Strategic Communications",
    short:
      "Senior communications strategist, 10+ years driving strategic narratives for high-stakes government and corporate initiatives across EU, UK and US markets.",
    bio:
      "Anna specialises in strategic communications, international relations, reputation and brand strategy, with additional focus on AI ethics. She has served as Strategic Communications Advisor to the Minister of Culture and Information Policy of Ukraine, Communications Expert to the Cabinet of Ministers, and PR & Marketing Lead for EMEA at FINN Partners (London). She now leads Strategy & Behavioural Intelligence at Co.Actor and advises clients on brand governance, crisis communications and stakeholder management.",
    credentials: [
      "Master's, Social Psychology — Taras Shevchenko National University of Kyiv",
      "Ethics of AI — LSE Online",
      "IMD Leaders Program",
      "Former advisor to the Ministry of Culture & Cabinet of Ministers of Ukraine",
    ],
    linkedin: "https://www.linkedin.com/in/anna-pavlova-08001731/",
    linkedinLabel: "linkedin.com/in/anna-pavlova-08001731",
    initials: "AP",
    photo: "/founders/anna.jpg",
    photoPosition: "58% 30%",
    accent: "pink",
    location: "Dubai · London",
  },
];

export const clientMarquee = [
  "Strategy",
  "Communications",
  "Brand",
  "Growth",
  "AI Operations",
  "Public Affairs",
  "Crisis",
  "Narrative",
  "Reputation",
  "Performance",
];
