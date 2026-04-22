import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { founders, type Founder } from "@/app/data";

function photoExists(publicPath: string | null): publicPath is string {
  if (!publicPath) return false;
  const filePath = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  try {
    return fs.existsSync(filePath);
  } catch {
    return false;
  }
}

function Portrait({ founder }: { founder: Founder }) {
  const hasPhoto = photoExists(founder.photo);
  const isPink = founder.accent === "pink";

  return (
    <figure className="relative aspect-[4/5] w-full overflow-hidden border border-ink bg-ink">
      {hasPhoto ? (
        <Image
          src={founder.photo!}
          alt={`Portrait of ${founder.name}`}
          fill
          sizes="(max-width: 768px) 100vw, 520px"
          style={{ objectFit: "cover", objectPosition: founder.photoPosition ?? "center" }}
          priority
        />
      ) : (
        <FallbackMonogram founder={founder} isPink={isPink} />
      )}

      {/* top gradient + label */}
      <div
        aria-hidden
        className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/55 to-transparent pointer-events-none"
      />
      <figcaption className="absolute top-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-bone">
        <span>Founding partner</span>
        <span>{founder.location}</span>
      </figcaption>

      {/* bottom gradient + filename */}
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-black/65 to-transparent pointer-events-none"
      />
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-bone">
        <span className="truncate pr-2">
          / {founder.id}-{founder.name.toLowerCase().replace(" ", "-")}
        </span>
        <span className="inline-flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          Roll · 01
        </span>
      </div>
    </figure>
  );
}

function FallbackMonogram({
  founder,
  isPink,
}: {
  founder: Founder;
  isPink: boolean;
}) {
  return (
    <div
      className={`absolute inset-0 flex items-end p-5 ${
        isPink ? "bg-accent" : "bg-ink"
      }`}
    >
      <span
        className={`font-serif leading-[0.78] tracking-tightest ${
          isPink ? "text-ink" : "text-accent"
        }`}
        style={{ fontSize: "clamp(9rem, 22vw, 14rem)" }}
      >
        {founder.initials}
      </span>
    </div>
  );
}

export function Founders() {
  return (
    <section id="partners" className="py-16 md:py-20">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 pt-8 pb-10 border-t border-rule">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute pt-2">
            § 03 · Partners
          </div>
          <div>
            <h2 className="font-serif text-hero tracking-tightest">
              The people <em className="italic text-accent">you actually hire.</em>
            </h2>
            <p className="text-[17px] md:text-[18px] text-ink-2 leading-[1.5] max-w-[62ch] mt-5 md:mt-6">
              Two senior operators with complementary craft: a growth-focused
              CMO who ships systems, and a communications strategist who has
              advised governments and international PR networks.
            </p>
          </div>
        </div>

        <div className="space-y-16 md:space-y-20 mt-4">
          {founders.map((f, i) => (
            <article
              key={f.id}
              className="grid md:grid-cols-12 gap-8 md:gap-10 items-start"
            >
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <Portrait founder={f} />
              </div>

              <div
                className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  0{i + 1} · {f.role}
                </div>
                <h3 className="font-serif text-[clamp(34px,5.5vw,64px)] leading-[0.98] tracking-tightest mt-3">
                  {f.name.split(" ").map((part, idx, arr) =>
                    idx === arr.length - 1 ? (
                      <em key={idx} className="italic text-accent">
                        {part}
                      </em>
                    ) : (
                      <span key={idx}>{part} </span>
                    )
                  )}
                </h3>
                <p className="font-serif italic text-[19px] md:text-[22px] text-ink-2 leading-[1.4] mt-5 max-w-[48ch]">
                  {f.short}
                </p>
                <p className="text-ink-2 text-[15px] leading-[1.65] mt-5 max-w-[62ch]">
                  {f.bio}
                </p>
                <ul className="mt-6 space-y-1.5 text-[13px]">
                  {f.credentials.map((c) => (
                    <li key={c} className="flex gap-3 text-ink-2">
                      <span aria-hidden className="font-mono text-accent shrink-0">→</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={f.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-3 border border-ink pl-1.5 pr-3 sm:pr-4 py-1.5 text-[12px] sm:text-[13px] hover:bg-ink hover:text-bone transition-colors max-w-full"
                >
                  <span className="h-6 w-6 bg-[#0a66c2] text-white grid place-items-center text-[11px] font-bold shrink-0">
                    in
                  </span>
                  <span className="font-mono uppercase tracking-[0.12em] truncate">
                    {f.linkedinLabel}
                  </span>
                  <span aria-hidden className="shrink-0">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
