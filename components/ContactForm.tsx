"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Marketing Strategy",
  "Public & Corporate Communications",
  "Digital Growth & Performance",
  "AI-Powered Marketing Operations",
  "Brand & Editorial",
  "Board & Founder Advisory",
  "Not sure yet — let's talk",
];

const budgetOptions = [
  "< $25k project",
  "$25k – $75k project",
  "$75k – $200k engagement",
  "Retainer / advisory",
  "Prefer to discuss",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-ink bg-paper p-8 md:p-10">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
          Received
        </div>
        <h3 className="font-serif text-[34px] leading-[1.05] tracking-tightest mt-4">
          Thank you. <em className="italic text-accent">One of the partners</em>{" "}
          will be in touch within one business day.
        </h3>
        <p className="text-ink-2 text-[15px] mt-5">
          If your request is urgent, email{" "}
          <a
            href="mailto:hello@primusnarrative.com"
            className="underline underline-offset-4 hover:text-accent"
          >
            hello@primusnarrative.com
          </a>{" "}
          directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-[11px] uppercase tracking-[0.14em] underline underline-offset-4 hover:text-accent"
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border border-ink bg-paper p-6 md:p-10 grid md:grid-cols-2 gap-5"
    >
      <Field label="Your name" name="name" required />
      <Field label="Work email" name="email" type="email" required />
      <Field label="Company" name="company" required />
      <Field label="Website or LinkedIn" name="website" placeholder="optional" />
      <Select label="Service of interest" name="service" options={serviceOptions} />
      <Select label="Indicative budget" name="budget" options={budgetOptions} />

      <label className="md:col-span-2 flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
          Tell us about the work <span className="text-accent">*</span>
        </span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What are you trying to achieve, and by when?"
          className="border border-rule bg-bone px-4 py-3 font-sans text-[15px] text-ink placeholder:text-mute/70 focus:outline-none focus:border-ink transition-colors"
        />
      </label>

      <label className="md:col-span-2 flex items-start gap-3 text-[13px] text-mute">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 accent-[#f73298]"
        />
        <span>
          I agree that Primus Narrative may contact me about my enquiry in line
          with its privacy practices.
        </span>
      </label>

      <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-rule">
        <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-mute max-w-md">
          We read every message and reply within one business day. All enquiries
          are confidential.
        </p>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 bg-ink text-bone border border-ink px-5 py-2.5 text-sm font-medium hover:bg-accent hover:border-accent hover:text-white transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send enquiry"}
          <span aria-hidden>→</span>
        </button>
      </div>

      {status === "error" && error && (
        <p
          role="alert"
          className="md:col-span-2 text-[13px] text-accent-ink border border-accent/40 bg-accent/5 px-4 py-3 font-mono"
        >
          {error}
        </p>
      )}
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
        {label}
        {required && <span className="text-accent"> *</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="border border-rule bg-bone px-4 py-3 font-sans text-[15px] text-ink placeholder:text-mute/70 focus:outline-none focus:border-ink transition-colors"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mute">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="border border-rule bg-bone px-4 py-3 font-sans text-[15px] text-ink focus:outline-none focus:border-ink transition-colors"
      >
        <option value="" disabled>
          Select one…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
