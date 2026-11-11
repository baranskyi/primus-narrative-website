export function Studio() {
  const steps = [
    {
      num: "01",
      title: "Diagnose.",
      title2: "Listen.",
      body: "We start every engagement with a structured diagnosis — leadership interviews, commercial review, brand audit. No recommendations before we understand the business.",
    },
    {
      num: "02",
      title: "Design.",
      title2: "Decide.",
      body: "We translate insight into a strategy document the board can sign: positioning, narrative, channel mix, P&L. One page of decisions, not fifty pages of slides.",
    },
    {
      num: "03",
      title: "Deliver.",
      title2: "Measure.",
      body: "We execute with a curated team and AI-augmented operations. Weekly rituals, a single dashboard, and a review cadence tied to commercial outcomes.",
    },
  ];

  return (
    <section id="how" className="pb-section">
      <div className="wrap">
        <span className="label">02 · How we work</span>
        <h2 className="mt-3.5 mb-[22px] text-h2">
          A senior partnership, <b>not an agency.</b>
        </h2>
        <p className="mb-11 max-w-[640px] text-taupe">
          You meet the partners in the first call. The same partners lead the
          work. Three phases, measured in outcomes — not deliverables.
        </p>

        <div className="grid border-t-1.5 border-burgundy md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className={`pt-[30px] pb-2.5 md:pr-7 ${
                i > 0 ? "border-t border-line md:border-t-0 md:border-l md:pl-7" : ""
              }`}
            >
              <div className="font-serif text-[56px] font-medium leading-none text-burgundy">
                {s.num}
              </div>
              <h3 className="my-3 text-h3">
                {s.title} <b>{s.title2}</b>
              </h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
