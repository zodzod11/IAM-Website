import { ServiceHero } from "@/components/sections/ServiceHero";
import { ServiceProcess } from "@/components/sections/ServiceProcess";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const FEATURES = [
  {
    icon: "🔊",
    title: "Audio",
    desc: "Live sound reinforcement, PA systems, wireless microphones, digital mixing, stage monitoring, and music playback — engineered for clarity and coverage.",
  },
  {
    icon: "🎥",
    title: "Video",
    desc: "Event video production, multi-camera recording, livestreaming, IMAG displays, and camera operation for events that need more than just audio.",
  },
  {
    icon: "📸",
    title: "Photography & Media",
    desc: "Event photography, portrait/backdrop photography, media capture, and social-media-ready content — styled to match your event.",
  },
  {
    icon: "💡",
    title: "Lighting",
    desc: "Basic event lighting, stage lighting, uplighting, and production lighting designed to fit the mood and scale of your event.",
  },
] as const;

const AUDIENCES = [
  "Churches & Faith Organizations",
  "Nonprofits & Community Groups",
  "Corporate Events & Conferences",
  "Banquets & Celebrations",
  "Fundraisers & Galas",
  "Private Events & Parties",
] as const;

const STEPS = [
  {
    number: "01",
    title: "Plan",
    description:
      "We learn about your event, venue, audience, and goals. We create a scope, equipment plan, and timeline tailored to your needs.",
  },
  {
    number: "02",
    title: "Execute",
    description:
      "Our team handles setup, soundcheck, and on-site production. You focus on your guests while we manage every technical detail.",
  },
  {
    number: "03",
    title: "Deliver",
    description:
      "Strike, equipment returns, and media delivery. We close out with a clear summary and make sure you have what you need afterward.",
  },
] as const;

export default function EventProduction() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <ServiceHero
        title="Event Production"
        tagline="Live sound, video, lighting, and media production for events that matter. IAM handles the technical production so you can focus on your guests."
        ctaLabel="Plan Your Event"
      />

      {/* ── What We Do ──────────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <SectionHeading
            title="What We Provide"
            subtitle="Every event is different. Here are the production capabilities we bring to yours."
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
            subtitle="Event production for organizations that value professional execution and a calm, prepared team."
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
        title="How Event Production Works"
        subtitle="A straightforward process from first conversation to event day."
        steps={STEPS}
      />

      {/* ── Pricing Context ─────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Investment
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Every event is scoped to your specific needs. Most single-room event
            productions range from <span className="text-accent font-semibold">$1,250 to $5,500</span>,
            depending on equipment, crew, and complexity.
          </p>
          <p className="mt-4 text-zinc-500">
            We provide a detailed, transparent quote after learning about your
            event — no surprises.
          </p>
          <div className="mt-10">
            <Button href="/contact" variant="primary" size="lg">
              Get an Event Quote
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Have an event coming up?
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Tell us about it. We will follow up with a plan and a quote tailored
            to your needs.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Start a Project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
