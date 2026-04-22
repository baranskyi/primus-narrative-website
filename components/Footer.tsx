export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-12 font-mono text-[11px] tracking-[0.08em] uppercase text-mute">
      <div className="max-w-container mx-auto px-8">
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8 pb-10 border-b border-rule">
          <div>
            <div className="font-serif text-[22px] tracking-tight text-ink normal-case tracking-normal">
              Pr<em className="italic text-accent">i</em>mus ·{" "}
              <span className="italic">Narrative</span>
            </div>
            <p className="mt-3 text-mute normal-case tracking-normal text-[13px] max-w-sm leading-relaxed">
              Strategic marketing, public &amp; corporate communications, and
              digital growth. Dubai — Meydan Free Zone.
            </p>
          </div>

          <div>
            <h4 className="text-ink font-medium mb-4">Office</h4>
            <p className="normal-case tracking-normal text-[13px] text-mute leading-relaxed">
              Meydan Free Zone <br />
              Nad Al Sheba <br />
              Dubai, UAE
            </p>
          </div>

          <div>
            <h4 className="text-ink font-medium mb-4">Contact</h4>
            <ul className="space-y-1.5 normal-case tracking-normal text-[13px]">
              <li>
                <a
                  href="mailto:hello@primusnarrative.com"
                  className="text-mute hover:text-accent"
                >
                  hello@primusnarrative.com
                </a>
              </li>
              <li>
                <a href="#contact" className="text-mute hover:text-accent">
                  Start a conversation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-medium mb-4">Partners</h4>
            <ul className="space-y-1.5 normal-case tracking-normal text-[13px]">
              <li>
                <a
                  href="https://www.linkedin.com/in/baranskiy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mute hover:text-accent"
                >
                  Slava Baranskyi ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anna-pavlova-08001731/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mute hover:text-accent"
                >
                  Anna Pavlova ↗
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-ink font-medium mb-4">Practice</h4>
            <ul className="space-y-1.5 normal-case tracking-normal text-[13px]">
              <li>
                <a href="#services" className="text-mute hover:text-accent">
                  Services
                </a>
              </li>
              <li>
                <a href="#how" className="text-mute hover:text-accent">
                  How we work
                </a>
              </li>
              <li>
                <a href="#location" className="text-mute hover:text-accent">
                  Dubai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between pt-6 flex-wrap gap-3">
          <span>© {year} Primus Narrative FZ-LLC — all rights reserved.</span>
          <span>Made in Dubai · Meydan Free Zone</span>
        </div>
      </div>
    </footer>
  );
}
