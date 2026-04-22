import { services } from "@/app/data";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-20 border-t border-rule">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 pt-6 md:pt-8 pb-8 md:pb-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute md:pt-2">
            § 01 · Services
          </div>
          <div>
            <h2 className="font-serif text-hero tracking-tightest">
              Six practices, <em className="italic text-accent">one partnership.</em>
            </h2>
            <p className="text-[16px] md:text-[18px] text-ink-2 leading-[1.5] max-w-[62ch] mt-5 md:mt-6">
              We operate as a small senior partnership — no juniors billed as
              strategists, no decks made for the sake of decks. Each engagement
              is led directly by a founding partner and delivered by a curated
              team of operators.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-ink">
          {services.map((s, i) => {
            const isLeft = i % 2 === 0;
            const isNotLastRow = i < services.length - 2;
            return (
              <article
                key={s.id}
                className={`md:col-span-6 py-7 md:py-8 border-b border-rule md:border-b ${
                  i === services.length - 1 ? "border-b-0 md:border-b-0" : ""
                } ${
                  isLeft
                    ? "md:pr-10 md:border-r md:border-rule"
                    : "md:pl-10"
                } ${isNotLastRow ? "" : ""}`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-mute mb-4 md:mb-5">
                  {s.number} · {s.tagline}
                </div>
                <h3 className="font-serif text-[28px] md:text-[34px] leading-[1.05] tracking-tightest">
                  {s.title.split(" ").map((w, idx, arr) =>
                    idx === arr.length - 1 ? (
                      <em key={idx} className="italic text-accent">
                        {w}
                      </em>
                    ) : (
                      <span key={idx}>{w} </span>
                    )
                  )}
                </h3>
                <p className="text-ink-2 text-[15px] leading-[1.6] mt-3 max-w-[52ch]">
                  {s.description}
                </p>
                <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[13px]">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex gap-2 text-ink-2">
                      <span aria-hidden className="font-mono text-accent shrink-0">
                        →
                      </span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
