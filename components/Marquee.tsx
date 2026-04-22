export function Marquee() {
  const labels = [
    "Strategy",
    "Communications",
    "Brand Governance",
    "Public Affairs",
    "Performance",
    "Content & Editorial",
    "AI Operations",
    "Crisis",
    "Narrative",
    "Reputation",
  ];
  return (
    <section
      aria-label="Capabilities"
      className="py-12 border-y border-rule overflow-hidden"
    >
      <div className="max-w-container mx-auto px-8 flex items-center gap-14 flex-wrap">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute whitespace-nowrap">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 pulse"
            aria-hidden
          />
          What we do
        </div>
        <div className="flex-1 overflow-hidden">
          <div className="marquee-track flex whitespace-nowrap gap-14 font-serif text-[26px] text-ink-2">
            {[...labels, ...labels].map((l, i) => (
              <span key={i} className="flex items-center gap-14 opacity-80">
                {l}
                <span className="text-accent not-italic text-lg">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
