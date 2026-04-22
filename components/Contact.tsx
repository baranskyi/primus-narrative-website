import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-ink text-bone relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[4%] -bottom-[12%] font-serif italic leading-[0.8] tracking-tightest text-white/[0.05] select-none whitespace-nowrap"
        style={{ fontSize: "clamp(220px, 44vw, 640px)" }}
      >
        Primus
      </div>

      <div className="relative z-10 max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 pt-4 pb-8 md:pb-10 border-t border-white/10">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#bcb6a8] md:pt-2">
            § 05 · Contact
          </div>
          <div>
            <h2 className="font-serif text-hero tracking-tightest leading-[0.95] max-w-[16ch]">
              Tell us what <em className="italic text-accent">you&rsquo;re building.</em>
            </h2>
            <p className="text-[16px] md:text-[18px] text-[#bcb6a8] leading-[1.5] max-w-[52ch] mt-5 md:mt-6">
              Every enquiry is read by a founding partner. If there is a fit,
              we&rsquo;ll propose a 45-minute briefing call — no decks, no
              pitch, just a conversation about the work.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5 space-y-6 md:space-y-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#bcb6a8]">
                Email
              </div>
              <a
                href="mailto:hello@primusnarrative.com"
                className="block font-serif text-[22px] md:text-[28px] leading-tight tracking-tight mt-2 text-bone hover:text-accent transition-colors break-words"
              >
                hello@primusnarrative.com
              </a>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#bcb6a8]">
                Office
              </div>
              <p className="font-serif text-[20px] md:text-[22px] leading-[1.25] tracking-tight mt-2">
                Meydan Free Zone <br />
                Dubai, UAE
              </p>
            </div>

            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#bcb6a8]">
                Partners
              </div>
              <ul className="mt-2 space-y-1.5 text-[15px]">
                <li>
                  <a
                    href="https://www.linkedin.com/in/baranskiy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    Slava Baranskyi ↗
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/anna-pavlova-08001731/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-accent"
                  >
                    Anna Pavlova ↗
                  </a>
                </li>
              </ul>
            </div>

            <div className="inline-flex items-center gap-2 border border-white/25 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#bcb6a8]">
              <span className="w-1.5 h-1.5 rounded-full bg-accent pulse" />
              Currently accepting new engagements — Q3 2026
            </div>
          </div>

          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
