"use client";

import { useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#how", label: "How we work" },
  { href: "#partners", label: "Partners" },
  { href: "#location", label: "Dubai" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[rgba(244,239,231,0.94)] backdrop-blur-[8px]">
      <nav className="wrap relative flex h-[72px] items-center justify-between" aria-label="Main">
        <a href="#top" aria-label="Primus Narrative — home">
          <Logo />
        </a>

        <ul className="hidden lg:flex gap-[30px]">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[15px] hover:text-burgundy transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn btn-primary hidden lg:inline-flex px-4 py-2.5 text-[14px]">
          Brief the partners <span aria-hidden>→</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu"
          className="lg:hidden border-1.5 border-burgundy px-3 py-2 text-[14px] font-medium text-burgundy"
        >
          {open ? "Close" : "Menu"}
        </button>

        <ul
          id="menu"
          className={`${open ? "flex" : "hidden"} lg:hidden absolute inset-x-0 top-[72px] flex-col border-b border-line bg-cream px-gutter pt-2 pb-[18px]`}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-[17px] hover:text-burgundy"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary">
              Brief the partners <span aria-hidden>→</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
