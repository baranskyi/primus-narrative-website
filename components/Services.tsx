import { services } from "@/app/data";
import { SectionIntro } from "./SectionIntro";

export function Services() {
  return (
    <section id="services" className="py-section">
      <div className="wrap">
        <SectionIntro
          label="01 · Services"
          title={
            <>
              Six practices, <b>one partnership.</b>
            </>
          }
        >
          We operate as a small senior partnership — no juniors billed as
          strategists, no decks made for the sake of decks. Each engagement is
          led directly by a founding partner and delivered by a curated team of
          operators.
        </SectionIntro>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.id} className="flex flex-col bg-white px-[30px] pt-[34px] pb-[30px]">
              <span className="text-[13px] font-medium tracking-[0.2em] text-burgundy">
                {s.number}
              </span>
              <h3 className="mt-3.5 mb-2 text-h3">{s.title}</h3>
              <p className="mb-[18px] text-small text-taupe">{s.tagline}</p>
              <p className="mb-4">{s.description}</p>
              <ul className="mt-auto border-t border-line">
                {s.deliverables.map((d) => (
                  <li key={d} className="border-b border-line py-[9px] text-[14.5px]">
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
