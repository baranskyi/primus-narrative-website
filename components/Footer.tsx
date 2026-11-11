import { Logo } from "./Logo";

const practice = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How we work" },
  { href: "#partners", label: "Partners" },
  { href: "#location", label: "Dubai" },
];

export function Footer() {
  const year = new Date().getFullYear();
  const link = "my-1 block text-[14.5px] hover:text-burgundy";
  return (
    <footer className="border-t border-line pt-14 pb-[34px]">
      <div className="wrap">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" aria-label="Primus Narrative — home" className="mb-3.5 inline-block">
              <Logo />
            </a>
            <p className="text-[14.5px] text-taupe">
              Strategic marketing, public &amp; corporate communications, and
              digital growth. Dubai — Meydan Free Zone.
            </p>
          </div>

          <div>
            <span className="label">Office</span>
            <p className="mt-2 text-[14.5px]">
              Meydan Free Zone
              <br />
              Nad Al Sheba
              <br />
              Dubai, UAE
            </p>
          </div>

          <div>
            <span className="label">Contact</span>
            <a href="mailto:info@primusnarrative.com" className={`${link} mt-2`}>
              info@primusnarrative.com
            </a>
            <a href="#contact" className={link}>
              Start a conversation
            </a>
          </div>

          <div>
            <span className="label">Practice</span>
            <div className="mt-2">
              {practice.map((p) => (
                <a key={p.href} href={p.href} className={link}>
                  {p.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-11 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-label uppercase tracking-[0.14em] text-taupe">
          <span>© {year} Primus Narrative L.L.C-FZ — All rights reserved</span>
          <span>Made in Dubai · Meydan Free Zone</span>
        </div>
      </div>
    </footer>
  );
}
