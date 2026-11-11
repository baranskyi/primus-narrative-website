export function Location() {
  return (
    <section id="location" className="pb-section">
      <div className="wrap grid items-start gap-7 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
        <div>
          <span className="label">04 · Location</span>
          <h2 className="mt-3.5 mb-[22px] text-h2">
            Dubai. <b>Meydan Free Zone.</b>
          </h2>
          <p className="text-taupe">
            Primus Narrative is registered and operates from the Meydan Free
            Zone in Dubai — a jurisdiction designed for international
            professional services firms, with 100% foreign ownership and full
            repatriation of capital and profits.
          </p>
        </div>

        {/* Ice block: burgundy text only (approved pair, 9.5:1). */}
        <div className="grid gap-[22px] bg-ice p-[34px] sm:grid-cols-2">
          <div>
            <span className="label mb-2 block">Office</span>
            <p className="text-burgundy">
              Meydan Grandstand
              <br />
              Nad Al Sheba
              <br />
              Dubai, UAE
            </p>
          </div>
          <div>
            <span className="label mb-2 block">Hours</span>
            <p className="text-burgundy">
              Mon — Fri
              <br />
              10:00 — 18:00 GST
              <br />
              Weekends by appointment
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
