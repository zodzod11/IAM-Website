import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ServicesOverview() {
  return (
    <div className="bg-base">
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="Our Services"
          subtitle="Event production, AV systems, and technical training — IAM delivers professional audio, video, lighting, and media solutions for organizations across New England."
          alignment="center"
        />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* ── Card 1: Events ─────────────────────── */}
          <a
            href="/services/events"
            className="surface-card rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white">Event Production</h3>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Live sound, video, lighting, and media production for events that matter.
              From conferences to celebrations, IAM handles the technical production
              so you can focus on your guests.
            </p>
            <span className="mt-6 block text-sm font-medium text-accent">
              Learn more →
            </span>
          </a>

          {/* ── Card 2: Systems ────────────────────── */}
          <a
            href="/services/systems"
            className="surface-card rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white">AV Systems</h3>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Professional AV consultation, system design, installation, and tuning.
              IAM helps organizations build reliable, well-designed technical systems
              that serve their mission.
            </p>
            <span className="mt-6 block text-sm font-medium text-accent">
              Learn more →
            </span>
          </a>

          {/* ── Card 3: Church AV ──────────────────── */}
          <a
            href="/services/church-av"
            className="surface-card rounded-lg p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="text-2xl font-bold text-white">Church AV Training</h3>
            <p className="mt-4 text-zinc-400 leading-relaxed">
              Training, staffing, and systems that help churches build confident,
              self-sustaining AV ministries. IAM solves the people + process +
              technology challenge.
            </p>
            <span className="mt-6 block text-sm font-medium text-accent">
              Learn more →
            </span>
          </a>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-zinc-400">
            Not sure which service fits your needs? Tell us about your project.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
