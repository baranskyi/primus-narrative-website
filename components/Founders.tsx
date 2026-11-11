import Image from "next/image";
import { founders } from "@/app/data";
import { SectionIntro } from "./SectionIntro";

export function Founders() {
  return (
    <section id="partners" className="py-section">
      <div className="wrap">
        <SectionIntro
          label="03 · Partners"
          title={
            <>
              The people you <b>actually hire.</b>
            </>
          }
        >
          Two senior operators with complementary craft: a growth-focused CMO
          with deep operational experience, and a communications strategist who
          has advised governments and international PR networks.
        </SectionIntro>

        <div className="grid gap-7 lg:grid-cols-2">
          {founders.map((f) => {
            const [first, ...rest] = f.name.split(" ");
            return (
              <article key={f.id} className="flex flex-col bg-white">
                {/* Partners' portraits are black and white (brand guidelines, imagery). */}
                <div className="relative aspect-[4/3] overflow-hidden bg-ice">
                  <Image
                    src={f.photo}
                    alt={`Portrait of ${f.name}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover grayscale"
                    style={{ objectPosition: f.photoPosition ?? "center" }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-[30px]">
                  <span className="label">
                    {f.role} · {f.location}
                  </span>
                  <h3 className="mt-2.5 mb-2.5 text-[40px]">
                    {first} <b>{rest.join(" ")}</b>
                  </h3>
                  <p className="mb-4 text-[16px]">{f.short}</p>
                  <p className="mb-4 text-[16px] text-taupe">{f.bio}</p>
                  <ul className="my-[18px] border-t border-line">
                    {f.credentials.map((c) => (
                      <li key={c} className="border-b border-line py-2 text-small">
                        {c}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto self-start text-[13px] font-medium uppercase tracking-[0.14em] text-burgundy hover:underline underline-offset-4"
                  >
                    LinkedIn <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
