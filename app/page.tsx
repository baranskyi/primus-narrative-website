import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Studio } from "@/components/Studio";
import { Quote } from "@/components/Quote";
import { Founders } from "@/components/Founders";
import { Location } from "@/components/Location";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { StructuredData } from "@/components/StructuredData";

export default function HomePage() {
  return (
    <main className="relative">
      <StructuredData />
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Studio />
      <Quote />
      <Founders />
      <Location />
      <Contact />
      <Footer />
    </main>
  );
}
