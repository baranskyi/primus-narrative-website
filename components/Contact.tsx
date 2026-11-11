import { ContactForm } from "./ContactForm";

export function Contact() {
  return (
    <section id="contact" className="bg-burgundy py-section text-cream">
      <div className="wrap grid gap-7 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <span className="label text-ice">05 · Contact</span>
          <h2 className="mt-3.5 mb-[22px] text-h2 text-cream">
            Tell us what <b>you&rsquo;re building.</b>
          </h2>
          <p>
            Every enquiry is read by a founding partner. If there is a fit,
            we&rsquo;ll propose a 45-minute briefing call — no decks, no pitch,
            just a conversation about the work.
          </p>
          <dl className="mt-[30px]">
            <dt className="label mt-[18px] text-ice">Email</dt>
            <dd className="mt-1.5">
              <a
                href="mailto:info@primusnarrative.com"
                className="underline underline-offset-4 hover:no-underline"
              >
                info@primusnarrative.com
              </a>
            </dd>
            <dt className="label mt-[18px] text-ice">Office</dt>
            <dd className="mt-1.5">Meydan Free Zone, Dubai, UAE</dd>
            <dt className="label mt-[18px] text-ice">Status</dt>
            <dd className="mt-1.5">Currently accepting new engagements</dd>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
