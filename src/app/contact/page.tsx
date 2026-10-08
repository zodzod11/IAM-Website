import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote for event production, AV systems, or church AV training. IAM serves organizations across New England.",
};

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";

export default function Contact() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section
        className="flex items-center justify-center min-h-[40vh] bg-base px-4"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 65%)",
        }}
      >
        <div className="max-w-4xl text-center">
          <p className="text-sm font-medium text-zinc-500 mb-4 tracking-wider uppercase">
            Impact - Audio &amp; Media
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Request a Quote
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
            Tell us about your event, AV system, or training needs. We will
            follow up with a clear plan and a straightforward quote.
          </p>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {/* ── Form ─────────────────────────────── */}
            <div className="md:col-span-2 surface-card rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-sm text-zinc-500 mb-6">
                All fields marked with <span className="text-accent">*</span> are required.
              </p>

              <ContactForm />
            </div>

            {/* ── Sidebar ──────────────────────────── */}
            <aside className="space-y-8">
              <div className="surface-card rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Other Ways to Connect
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li>
                    <span className="block text-xs text-zinc-500 uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      href="mailto:hello@impactaudiomedia.com"
                      className="text-accent hover:underline"
                    >
                      hello@impactaudiomedia.com
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs text-zinc-500 uppercase tracking-wider">
                      Service Area
                    </span>
                    <span>Greater Boston, Massachusetts &amp; New England</span>
                  </li>
                  <li>
                    <span className="block text-xs text-zinc-500 uppercase tracking-wider">
                      Response Time
                    </span>
                    <span>Within 24&ndash;48 hours</span>
                  </li>
                </ul>
              </div>

              <div className="surface-card rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What Our Clients Say
                </h3>
                <p className="text-sm text-zinc-400 italic leading-relaxed">
                  &ldquo;IAM handled the full production for our event &mdash; audio,
                  photo, lighting. Everything ran smoothly and they made
                  the whole process easy.&rdquo;
                </p>
                <p className="mt-3 text-xs text-zinc-500">
                  &mdash; Generations Birthday Event, Avon MA
                </p>
              </div>

              <div className="surface-card rounded-lg p-6 text-center">
                <p className="text-sm text-zinc-400">
                  Prefer to call or email instead?
                </p>
                <div className="mt-4">
                  <Button href="mailto:hello@impactaudiomedia.com" variant="secondary" size="sm">
                    Send an Email
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
