"use client";

import { useState, useEffect } from "react";
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

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
    <nav className="sticky top-0 z-40 backdrop-blur-md bg-[rgba(243,239,231,0.82)] border-b border-rule">
      <div className="max-w-container mx-auto px-5 md:px-8 h-16 grid grid-cols-[auto_1fr_auto] items-center">
        {/* Left: desktop nav | mobile menu button */}
        <div className="flex items-center gap-6 justify-self-start">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -ml-2 border border-transparent hover:border-ink transition-colors"
          >
            <span className="sr-only">Menu</span>
            <span className="relative block w-5 h-[11px]">
              <span className="absolute inset-x-0 top-0 h-px bg-ink" />
              <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-ink" />
              <span className="absolute inset-x-0 bottom-0 h-px bg-ink" />
            </span>
          </button>
          <ul className="hidden md:flex gap-6 text-sm">
            {links.slice(0, 3).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="py-1 text-ink hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Center: logo */}
        <a
          href="#top"
          className="justify-self-center px-3 py-1 hover:opacity-80 transition-opacity"
          aria-label="Primus Narrative — home"
        >
          <Logo size="md" />
        </a>

        {/* Right: remaining nav + CTA */}
        <div className="justify-self-end flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm">
            {links.slice(3).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="py-1 text-ink hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 bg-ink text-bone border border-ink px-3.5 md:px-4 py-2 md:py-2.5 text-[13px] md:text-sm font-medium hover:bg-accent hover:border-accent hover:text-white transition-colors whitespace-nowrap"
          >
            Brief <span className="hidden md:inline">the partners</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </nav>

      {/* Mobile drawer — outside <nav> to escape its stacking context */}
      <div
        className={`fixed inset-0 z-[100] md:hidden ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-ink/60 transition-opacity duration-300 z-0 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute left-0 top-0 bottom-0 w-[86%] max-w-sm bg-bone border-r border-ink flex flex-col transition-transform duration-300 z-10 shadow-[0_0_40px_rgba(0,0,0,0.25)] ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-5 h-16 border-b border-rule">
            <Logo size="sm" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="w-10 h-10 -mr-2 inline-flex items-center justify-center hover:text-accent"
            >
              <span className="relative block w-4 h-4">
                <span className="absolute inset-0 rotate-45 top-1/2 -translate-y-1/2 h-px bg-current" />
                <span className="absolute inset-0 -rotate-45 top-1/2 -translate-y-1/2 h-px bg-current" />
              </span>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-5">
            <ul className="space-y-0 border-t border-rule">
              {links.map((l, i) => (
                <li
                  key={l.href}
                  className="border-b border-rule"
                  style={{ animationDelay: `${i * 40}ms` }}
                >
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between py-4 font-serif text-[28px] tracking-tight hover:text-accent transition-colors"
                  >
                    {l.label}
                    <span
                      aria-hidden
                      className="font-mono text-[11px] text-mute tracking-[0.14em]"
                    >
                      0{i + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-accent text-white px-4 py-3.5 text-sm font-medium"
            >
              Start a conversation <span aria-hidden>→</span>
            </a>
          </nav>

          <div className="border-t border-rule px-5 py-4 font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
            Dubai · Meydan Free Zone
          </div>
        </aside>
      </div>
    </>
  );
}
