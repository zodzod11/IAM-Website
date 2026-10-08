import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AV Systems",
  description: "Professional AV consultation, system design, installation, and optimization for organizations that need reliable technical systems.",
};

import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  {
    icon: "🔍",
    title: "Consultation & Assessment",
    desc: "Existing system evaluations, needs analysis, equipment recommendations, and a clear improvement plan tailored to your organization's goals and budget.",
  },
  {
    icon: "📐",
    title: "System Design",
    desc: "Complete audio, video, livestream, camera, display, and control system design with detailed specifications, signal flow, and integration planning.",
  },
  {
    icon: "🔧",
    title: "Professional Installation",
    desc: "Speakers, mixers, wireless systems, cameras, displays, projectors, cabling, racks, and streaming infrastructure — installed clean and reliable.",
  },
  {
    icon: "🎛️",
    title: "Configuration & Training",
    desc: "System tuning, DSP configuration, gain structure, mixer programming, documentation, and hands-on training so your team can operate with confidence.",
  },
] as const;

const AUDIENCES = [
  "Churches Upgrading AV",
  "Nonprofits & Community Centers",
  "Schools & Educational Spaces",
  "Conference Centers",
  "Venues & Event Spaces",
  "Organizations Building New Spaces",
] as const;

const STEPS = [
  {
    number: "01",
    title: "Assess",
    description:
      "We visit your space, evaluate your current system (or plans for a new one), and understand your needs, budget, and timeline.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a detailed system design with equipment specifications, signal flow, integration plan, and a transparent cost breakdown.",
  },
  {
    number: "03",
    title: "Build & Train",
    description:
      "Professional installation, system tuning, documentation, and team training. You get a system that works and a team that knows how to use it.",
  },
] as const;

export default function AVSystems() {
  return (
    <>
      <ServiceHero
        title="AV Systems"
        tagline="Professional AV consultation, design, installation, and optimization for organizations that need reliable, well-engineered technical systems."
        ctaLabel="Request a Site Assessment"
      />

      {/* ── What We Do ──────────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            title="What We Provide"
            subtitle="End-to-end AV services from assessment through training."
            alignment="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="surface-card rounded-lg p-6 md:p-8 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{f.icon}</span>
                  <h3 className="text-xl font-semibold text-zinc-900">{f.title}</h3>
                </div>
                <p className="text-base text-zinc-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who This Is For ──────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            title="Who We Serve"
            subtitle="Organizations that need professional AV systems designed and built by people who understand both technology and mission."
            alignment="center"
          />
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            {AUDIENCES.map((a) => (
              <span
                key={a}
                className="px-5 py-2.5 text-sm font-medium rounded-full border border-border-dark bg-base-alt text-zinc-300 hover:border-accent hover:text-white transition-all duration-200"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────── */}
      <ServiceProcess
        title="How AV System Projects Work"
        subtitle="A structured approach from assessment to a system your team can operate."
        steps={STEPS}
      />

      {/* ── Pricing Context ─────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Investment
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            AV system projects vary widely based on scope, space, and equipment
            requirements. We provide a detailed proposal after an initial
            assessment — no hidden fees or surprises.
          </p>
          <p className="mt-4 text-zinc-500">
            Every proposal includes equipment, labor, configuration,
            documentation, and training so you see the full picture.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Start an AV Project
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Ready to improve your AV system?
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Let us assess your current setup and recommend a path forward.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Request a Site Assessment
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
