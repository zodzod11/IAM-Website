import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church AV Training",
  description: "AV training, staffing, and support for churches. IAM helps churches build confident, self-sustaining AV ministries with training and development.",
};

import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  {
    icon: "🎓",
    title: "AV Training",
    desc: "Hands-on training for your existing team. Audio fundamentals, mixer operation, livestream, camera work, lighting, troubleshooting — taught at your church with your equipment.",
  },
  {
    icon: "👤",
    title: "Managed AV Support",
    desc: "Technical personnel to operate or support your services. Audio engineers, livestream operators, camera operators, and technical directors when you need them.",
  },
  {
    icon: "🔄",
    title: "Hybrid Development",
    desc: "IAM's strongest differentiator: we operate alongside your team while simultaneously training volunteers, developing leaders, and building long-term sustainability.",
  },
  {
    icon: "📋",
    title: "System Assessment",
    desc: "Evaluate your current AV system, identify gaps, recommend improvements, and create a roadmap that fits your budget and ministry goals.",
  },
] as const;

const AUDIENCES = [
  "Churches with Volunteer AV Teams",
  "Churches Installing New Systems",
  "Churches with Livestream Needs",
  "Churches Rebuilding Their AV Ministry",
  "Multi-Site & Growing Churches",
  "Churches Training New Leadership",
] as const;

const STEPS = [
  {
    number: "01",
    title: "Evaluate",
    description:
      "We visit your church, meet your team, assess your current system, and understand your goals, challenges, and budget.",
  },
  {
    number: "02",
    title: "Develop",
    description:
      "We create a plan tailored to your church — training curriculum, staffing schedule, system improvements, and documentation for sustainability.",
  },
  {
    number: "03",
    title: "Sustain",
    description:
      "We work alongside your team to build capability, confidence, and redundancy. The goal: a ministry that runs well, with or without us.",
  },
] as const;

export default function ChurchAV() {
  return (
    <>
      <ServiceHero
        title="Church AV Training & Support"
        tagline="Build an AV ministry that does not depend on one person. IAM helps churches develop confident teams, reliable systems, and sustainable processes."
        ctaLabel="Schedule a Consultation"
      />

      {/* ── What We Do ──────────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            title="What We Provide"
            subtitle="IAM solves the people + process + technology challenge that so many churches face."
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
                  <h3 className="text-xl font-semibold text-white">{f.title}</h3>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed">{f.desc}</p>
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
            subtitle="Churches that want their AV ministry to be a strength, not a source of stress."
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
        title="How Church AV Support Works"
        subtitle="A partnership designed to build your ministry's long-term capability."
        steps={STEPS}
      />

      {/* ── Pricing Context ─────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Investment
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Training and support are scoped to your church's specific needs,
            team size, and goals. We provide transparent pricing after
            understanding where you are and where you want to be.
          </p>
          <p className="mt-4 text-zinc-500">
            Whether you need a one-time training session or ongoing support,
            we will give you a clear picture of the investment before you
            commit.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Strengthen Your AV Team
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to strengthen your AV ministry?
              </h2>
              <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
                Tell us about your church, your team, and what you need help with.
              </p>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Schedule an AV Ministry Consultation
                </Button>
              </div>
            </div>
      </section>
    </>
  );
}
