export function Location() {
  return (
    <section id="location" className="py-16 md:py-20 border-t border-rule bg-paper">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 pt-6 md:pt-8 pb-8 md:pb-10">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute md:pt-2">
            § 04 · Location
          </div>
          <div>
            <h2 className="font-serif text-hero tracking-tightest">
              Dubai. <em className="italic text-accent">Meydan Free Zone.</em>
            </h2>
            <p className="text-[16px] md:text-[18px] text-ink-2 leading-[1.5] max-w-[62ch] mt-5 md:mt-6">
              Primus Narrative is registered and operates from the Meydan Free
              Zone in Dubai — a jurisdiction designed for international
              professional services firms, with 100% foreign ownership and full
              repatriation of capital and profits.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-ink">
          <div className="p-6 md:p-8 border-b border-rule md:border-b-0 md:border-r md:border-rule">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              Office
            </div>
            <p className="font-serif text-[22px] md:text-[24px] leading-[1.25] tracking-tight mt-3 md:mt-4">
              Meydan Free Zone <br />
              Meydan Grandstand <br />
              Nad Al Sheba <br />
              Dubai, UAE
            </p>
          </div>

          <div className="p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
              Hours
            </div>
            <p className="font-serif text-[22px] md:text-[24px] leading-[1.25] tracking-tight mt-3 md:mt-4">
              Mon — Fri <br />
              10:00 — 18:00 GST
            </p>
            <p className="text-[13px] text-mute mt-3">
              By appointment on Saturday &amp; Sunday
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
