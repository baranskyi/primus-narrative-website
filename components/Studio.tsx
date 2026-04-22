export function Studio() {
  const steps = [
    {
      num: "01",
      title: "Diagnose",
      title2: "listen.",
      body: "We start every engagement with a structured diagnosis — leadership interviews, commercial review, brand audit. No recommendations before we understand the business.",
    },
    {
      num: "02",
      title: "Design",
      title2: "decide.",
      body: "We translate insight into a strategy document the board can sign: positioning, narrative, channel mix, P&L. One page of decisions, not fifty pages of slides.",
    },
    {
      num: "03",
      title: "Deliver",
      title2: "measure.",
      body: "We execute with a curated team and AI-augmented operations. Weekly rituals, a single dashboard, and a review cadence tied to commercial outcomes.",
    },
  ];

  return (
    <section id="how" className="py-16 md:py-20">
      <div className="max-w-container mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-6 md:gap-12 pt-6 md:pt-8 pb-8 md:pb-10 border-t border-rule">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute md:pt-2">
            § 02 · How we work
          </div>
          <div>
            <h2 className="font-serif text-hero tracking-tightest">
              A senior partnership, <em className="italic text-accent">not an agency.</em>
            </h2>
            <p className="text-[16px] md:text-[18px] text-ink-2 leading-[1.5] max-w-[62ch] mt-5 md:mt-6">
              You meet the partners in the first call. The same partners lead
              the work. Three phases, measured in outcomes — not deliverables.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-ink mt-4">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`py-8 md:py-10 px-5 md:px-8 ${
                i < steps.length - 1
                  ? "border-b border-rule md:border-b-0 md:border-r md:border-rule"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] text-accent mb-5 md:mb-6">
                <span>{s.num}</span>
                <span className="flex-1 h-px bg-rule" />
              </div>
              <h3 className="font-serif text-[32px] md:text-[40px] leading-none tracking-tightest">
                {s.title} <em className="italic text-accent">{s.title2}</em>
              </h3>
              <p className="text-ink-2 text-[15px] leading-[1.55] mt-3 md:mt-4 max-w-[36ch]">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
