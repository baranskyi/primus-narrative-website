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
      <div className="bg-cream p-6 text-ink sm:p-9" role="status">
        <span className="label">Received</span>
        <h3 className="mt-3.5 text-h3">
          Thank you. <b>One of the partners</b> will be in touch within one
          business day.
        </h3>
        <p className="mt-5">
          If your request is urgent, email{" "}
          <a
            href="mailto:info@primusnarrative.com"
            className="text-burgundy underline underline-offset-4"
          >
            info@primusnarrative.com
          </a>{" "}
          directly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn btn-ghost mt-6"
        >
          Send another message <span aria-hidden>→</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="bg-cream p-6 text-ink sm:p-9">
      <div className="grid gap-x-4 sm:grid-cols-2">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field label="Work email" name="email" type="email" required autoComplete="email" />
        <Field label="Company" name="company" required autoComplete="organization" />
        <Field label="Website or LinkedIn" name="website" autoComplete="url" />
        <Select label="Service of interest" name="service" options={serviceOptions} />
        <Select label="Indicative budget" name="budget" options={budgetOptions} />
      </div>

      <div className="mb-4">
        <label className="label mb-1.5 block" htmlFor="f-message">
          Tell us about the work *
        </label>
        <textarea
          id="f-message"
          name="message"
          required
          className="field-input min-h-[120px] resize-y"
        />
      </div>

      <label className="mt-1.5 mb-5 flex gap-2.5 text-small">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-burgundy" />
        <span>
          I agree that Primus Narrative may contact me about my enquiry in line
          with its privacy practices.
        </span>
      </label>

      <button type="submit" disabled={status === "submitting"} className="btn btn-primary disabled:opacity-60">
        {status === "submitting" ? "Sending…" : "Send enquiry"} <span aria-hidden>→</span>
      </button>

      {status === "error" && error && (
        <p role="alert" className="mt-4 border border-burgundy bg-white px-4 py-3 text-small text-burgundy">
          {error}
        </p>
      )}

      <p className="mt-3.5 text-[13px] text-taupe">
        We read every message and reply within one business day. All enquiries
        are confidential.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  const id = `f-${name}`;
  return (
    <div className="mb-4">
      <label className="label mb-1.5 block" htmlFor={id}>
        {label}
        {required && " *"}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="field-input"
      />
    </div>
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
  const id = `f-${name}`;
  return (
    <div className="mb-4">
      <label className="label mb-1.5 block" htmlFor={id}>
        {label}
      </label>
      <select id={id} name={name} defaultValue="" className="field-input">
        <option value="">Select one…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
