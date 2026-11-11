const stats = [
  { num: "15+", label: "Years at senior brand & comms level" },
  { num: "32M+", label: "Users on products we’ve led" },
];

export function Hero() {
  return (
    <section>
      <div className="wrap grid py-[clamp(64px,9vw,120px)] lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
        <div>
          <span className="label">
            Dubai · Meydan Free Zone — Strategy, communications &amp; growth
          </span>
          <h1 className="mt-[22px] mb-9 text-display">
            Strategy.
            <br />
            <b>Narrative.</b>
            <br />
            Growth.
          </h1>
          <p className="max-w-[560px] text-[19px]">
            Primus Narrative is a Dubai consultancy for founders, boards and
            CMOs. We design and <b>operate</b> marketing strategy, public and
            corporate communications, and digital growth — senior-led,
            AI-augmented, measured in revenue.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3.5">
            <a href="#contact" className="btn btn-primary">
              Start a conversation <span aria-hidden>→</span>
            </a>
            <a href="#services" className="btn btn-ghost">
              Explore services <span aria-hidden>↓</span>
            </a>
          </div>
        </div>

        {/* Key figures under a burgundy hairline; stacked in the right column on desktop. */}
        <div className="mt-16 flex flex-wrap gap-7 md:gap-14 lg:mt-0 lg:w-[360px] lg:flex-col lg:gap-10">
          {stats.map((s) => (
            <div key={s.num} className="min-w-[200px] border-t-1.5 border-burgundy pt-3">
              <div className="font-serif text-[52px] font-medium leading-none text-burgundy md:text-[64px]">
                {s.num}
              </div>
              <span className="label mt-2 block text-taupe">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
