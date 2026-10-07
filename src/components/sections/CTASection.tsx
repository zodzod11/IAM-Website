import { Button } from "@/components/ui/Button";

/**
 * Pre-footer CTA — full-width dark section that captures visitors
 * at peak interest before they leave the page.
 */
export function CTASection() {
  return (
    <section className="bg-base">
      <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Ready to make an impact?
        </h2>
        <p className="mt-6 text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          Tell us about your event, AV system, or training needs.
          We&rsquo;ll follow up with a clear plan and a straightforward quote.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact" variant="primary" size="lg">
            Request a Consultation
          </Button>
          <Button href="mailto:hello@impactaudiomedia.com" variant="ghost" size="lg">
            hello@impactaudiomedia.com
          </Button>
        </div>
      </div>
    </section>
  );
}
