export function Quote() {
  return (
    <section className="py-20 md:py-28 border-t border-rule">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_3fr_1fr] gap-6 md:gap-12 items-center">
          <div
            className="font-serif italic text-accent leading-[0.5] hidden md:block select-none"
            style={{ fontSize: "180px" }}
            aria-hidden
          >
            &ldquo;
          </div>
          <div>
            <div
              className="md:hidden font-serif italic text-accent leading-none mb-2 select-none"
              style={{ fontSize: "100px" }}
              aria-hidden
            >
              &ldquo;
            </div>
            <blockquote className="font-serif text-[clamp(28px,6vw,56px)] leading-[1.1] tracking-tightest">
              Strategy is useless if it does not ship.
              <br className="hidden md:block" />
              {" "}We build the{" "}
              <em className="italic text-accent">systems</em> that make good
              strategy actually <em className="italic">happen</em>.
            </blockquote>
            <div className="font-mono text-[11px] tracking-[0.14em] uppercase text-mute mt-6 md:mt-8">
              <span className="text-ink">The partners</span> · Primus Narrative · Dubai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
