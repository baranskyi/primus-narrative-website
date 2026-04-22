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

export const metadata: Metadata = {
  title: "Primus Narrative — Strategy · Communications · Growth | Dubai",
  description:
    "Primus Narrative is a Dubai consultancy for marketing strategy, public and corporate communications, and digital growth. Registered in the Meydan Free Zone.",
  openGraph: {
    title: "Primus Narrative",
    description:
      "Strategic marketing, public & corporate communications, and digital growth. Dubai · Meydan Free Zone.",
    type: "website",
  },
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
      <body className="font-sans bg-bone text-ink">{children}</body>
    </html>
  );
}
