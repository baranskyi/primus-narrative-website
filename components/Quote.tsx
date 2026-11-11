export function Quote() {
  return (
    <section className="relative overflow-hidden bg-burgundy py-section text-cream">
      <div aria-hidden className="absolute inset-y-0 left-0 w-3 bg-ice" />
      <div className="wrap">
        <blockquote className="max-w-[1000px] font-serif text-[clamp(34px,4.6vw,60px)] font-medium leading-[1.08]">
          Strategy is useless if it remains on paper. We build the{" "}
          <b>systems</b> that make good strategy actually <b>happen.</b>
        </blockquote>
        <span className="label mt-[34px] block text-ice">
          The partners · Primus Narrative · Dubai
        </span>
      </div>
    </section>
  );
}
