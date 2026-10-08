import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Event production, AV systems, and church AV training for organizations across New England. Professional audio, video, lighting, and media solutions.",
};

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ServicesOverview() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section
        className="flex items-center justify-center min-h-[50vh] bg-base px-4"
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
            Our Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
            Event production, AV systems, and technical training — IAM delivers
            professional audio, video, lighting, and media solutions for
            organizations across New England.
          </p>
        </div>
      </section>

      {/* ── Service Cards ────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            title="Choose Your Path"
            subtitle="Three service divisions built around how organizations need help with audio, video, and media."
            alignment="center"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {/* ── Card 1: Events ──────────────────────── */}
            <a
              href="/services/events"
              className="surface-card rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🎤</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">Event Production</h2>
                  <p className="text-sm text-zinc-500">Live events</p>
                </div>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Live sound, video, lighting, and media production for
                events that matter. From conferences to celebrations,
                IAM handles the technical production.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["Audio", "Video", "Photography", "Lighting"].map((tag) => (
                  <li
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-6 block text-sm font-medium text-accent">
                Learn more →
              </span>
            </a>

            {/* ── Card 2: Systems ─────────────────────── */}
            <a
              href="/services/systems"
              className="surface-card rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">🔧</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">AV Systems</h2>
                  <p className="text-sm text-zinc-500">Design &amp; installation</p>
                </div>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Professional AV consultation, system design, installation,
                and optimization. IAM helps organizations build reliable
                technical systems that serve their mission.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["Consultation", "Design", "Installation", "Training"].map((tag) => (
                  <li
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-6 block text-sm font-medium text-accent">
                Learn more →
              </span>
            </a>

            {/* ── Card 3: Church AV ───────────────────── */}
            <a
              href="/services/church-av"
              className="surface-card rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">⛪</span>
                <div>
                  <h2 className="text-2xl font-bold text-white">Church AV Training</h2>
                  <p className="text-sm text-zinc-500">Ministry support</p>
                </div>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed">
                Training, staffing, and systems that help churches build
                confident, self-sustaining AV ministries. IAM solves the
                people + process + technology challenge.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {["Training", "Support", "Assessment", "Development"].map((tag) => (
                  <li
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <span className="mt-6 block text-sm font-medium text-accent">
                Learn more →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Not sure which service fits?
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Tell us about your project and we will point you in the right direction.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
