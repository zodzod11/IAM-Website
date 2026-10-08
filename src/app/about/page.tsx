import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Impact - Audio & Media helps organizations communicate and create experiences through better audio, video, and media. Serving New England.",
};

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const VALUES = [
  {
    icon: "🎯",
    title: "Preparation Before Performance",
    desc: "We plan, test, and rehearse so that when it matters, everything works. Preparation is the foundation of every IAM engagement.",
  },
  {
    icon: "🤝",
    title: "Reliability Over Hype",
    desc: "We show up when we say we will, with the right gear and the right team. Consistency builds trust.",
  },
  {
    icon: "📏",
    title: "Right-Sized Solutions",
    desc: "Every client gets the production that fits their event and budget — not more than they need, not less than they deserve.",
  },
  {
    icon: "📈",
    title: "Built to Last",
    desc: "IAM is being built as a real company with systems, standards, and a team — not a freelance operation dependent on one person.",
  },
] as const;

const TEAM = [
  {
    name: "Zack",
    role: "Director of Business Operations",
    bio: "Systems, finance, planning, pricing, client coordination, and business development. Building IAM into a scalable company that delivers consistently.",
  },
  {
    name: "Williadji Cadet",
    role: "Event Operations",
    bio: "Venue access, logistics, staffing, setup coordination, on-site execution, and crew management. Turns plans into functioning event days.",
  },
  {
    name: "Phaedra Saint Fleur",
    role: "Technical Lead",
    bio: "Technical standards, equipment architecture, system design, signal flow, and technical execution. Ensures every production is technically sound.",
  },
] as const;

export default function About() {
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
            About IAM
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
            We exist to help organizations communicate and create experiences
            through better audio, video, and media.
          </p>
        </div>
      </section>

      {/* ── Story ────────────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            title="Our Story"
            subtitle="Why IAM exists and what we are building."
            alignment="center"
          />
          <div className="mt-10 space-y-6 text-zinc-300 leading-relaxed text-lg">
            <p>
              IAM was built from the belief that great production should be
              accessible to the organizations that need it — churches, nonprofits,
              community groups, and businesses — not just those with large budgets
              or in-house technical teams.
            </p>
            <p>
              Our team brings together experience in live event production, AV
              system design and installation, and church technical ministry. We
              understand the technology, but we also understand the people and
              organizations using it.
            </p>
            <p>
              We serve Greater Boston, Massachusetts, and New England — and we are
              built to grow as a real company with systems, standards, and a team
              that can deliver consistently.
            </p>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            title="Our Values"
            subtitle="The principles that guide how we work with clients and build this company."
            alignment="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="surface-card rounded-lg p-6 md:p-8 transition-all duration-200 hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{v.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{v.title}</h3>
                </div>
                <p className="text-base text-zinc-400 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            title="Team"
            subtitle="IAM brings together business operations, event logistics, and technical leadership."
            alignment="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="surface-card rounded-lg p-6 md:p-8"
              >
                {/* Photo placeholder */}
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-accent/10 text-accent text-2xl mb-4">
                  <span>{member.name[0]}</span>
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-sm text-zinc-500 mt-1">{member.role}</p>
                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-zinc-500">
            Team photos coming soon.
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Want to work with us?
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            We would love to hear about your project. Tell us what you need.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
