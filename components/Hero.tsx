export function Hero() {
  return (
    <header id="top" className="pt-12 md:pt-16 pb-16 md:pb-20 relative">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em] text-mute font-medium reveal">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 -translate-y-px align-middle"
            aria-hidden
          />
          Dubai · Meydan Free Zone — strategy, communications &amp; growth
        </div>

        <h1 className="font-serif font-normal text-[clamp(48px,11vw,148px)] leading-[0.9] tracking-[-0.025em] mt-5 md:mt-6 reveal">
          Strategy.<br />
          <em className="italic text-accent">Narrative.</em><br />
          <em className="italic">Growth.</em>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 md:gap-12 mt-10 md:mt-14 items-end reveal">
          <p className="text-[16px] md:text-[19px] leading-[1.45] text-ink-2 max-w-[42ch]">
            Primus Narrative is a Dubai consultancy for founders, boards and
            CMOs. We design and{" "}
            <em className="font-serif italic text-[20px] md:text-[22px] text-ink">
              operate
            </em>{" "}
            marketing strategy, public and corporate communications, and
            digital growth — senior-led, AI-augmented, measured in revenue.
          </p>
          <div className="grid grid-cols-2 md:contents gap-5">
            <div className="border-t border-ink pt-3">
              <div className="font-serif text-[40px] md:text-[56px] leading-none tracking-tightest">
                15<em className="italic text-accent">+</em>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.14em] text-mute mt-1">
                years at senior brand &amp; comms level
              </div>
            </div>
            <div className="border-t border-ink pt-3">
              <div className="font-serif text-[40px] md:text-[56px] leading-none tracking-tightest">
                32M<em className="italic text-accent">+</em>
              </div>
              <div className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.14em] text-mute mt-1">
                users on products we&rsquo;ve led
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 mt-8 md:mt-10 reveal">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-white border border-accent px-4 py-2.5 text-sm font-medium hover:bg-accent-ink hover:border-accent-ink transition-colors"
          >
            Start a conversation <span aria-hidden>→</span>
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 border border-ink text-ink px-4 py-2.5 text-sm font-medium hover:bg-ink hover:text-bone transition-colors"
          >
            Explore services <span aria-hidden>↓</span>
          </a>
          <span className="hidden sm:inline font-mono text-[11px] uppercase tracking-[0.12em] text-mute ml-2">
            Two senior partners. No layers between.
          </span>
        </div>
      </div>
    </header>
  );
}
