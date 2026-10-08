import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Impact - Audio & Media collects, uses, and protects your personal information.",
};

export default function Privacy() {
  return (
    <section
      className="bg-base"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0.03) 0%, transparent 65%)",
      }}
    >
      <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-zinc-500">Last updated: October 2026</p>

        <div className="mt-10 space-y-8 text-zinc-300 leading-relaxed text-base">
          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Information We Collect</h2>
            <p>
              When you submit a contact form on our website, we collect:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-400">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your phone number (if provided)</li>
              <li>Your organization name (if provided)</li>
              <li>Details about your project or inquiry</li>
              <li>Event date and attendance information (if provided)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">How We Use Your Information</h2>
            <p>
              We use the information you provide solely to:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-zinc-400">
              <li>Respond to your inquiry</li>
              <li>Provide a quote or proposal for services</li>
              <li>Communicate about your project or event</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Sharing</h2>
            <p>
              We do not sell, rent, or share your personal information with third
              parties for their marketing purposes. Form submissions are processed
              through Resend (resend.com) for email delivery.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Data Retention</h2>
            <p>
              We retain form submission data for as long as needed to respond to
              your inquiry and provide services. To request deletion, email
              hello@impactaudiomedia.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Your Rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information at any time by emailing
              hello@impactaudiomedia.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Changes</h2>
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For questions about this policy, contact us at{" "}
              <a href="mailto:hello@impactaudiomedia.com" className="text-accent hover:underline">
                hello@impactaudiomedia.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
