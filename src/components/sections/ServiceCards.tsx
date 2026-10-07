import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Three service division cards — the primary way visitors self-identify
 * which IAM service matches their needs.
 */
export function ServiceCards() {
  return (
    <section className="bg-base-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="What We Do"
          subtitle="Three service divisions built around how organizations need help with audio, video, and media."
          alignment="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {/* ── Card 1: Events ─────────────────────── */}
          <Card
            title="Event Production"
            description="Live sound, video, lighting, and media production for events that matter. From conferences to celebrations, IAM handles the technical production so you can focus on your guests."
            href="/services/events"
          />

          {/* ── Card 2: Systems ────────────────────── */}
          <Card
            title="AV Systems"
            description="Professional AV consultation, system design, installation, and optimization. IAM helps organizations build reliable technical systems that serve their mission."
            href="/services/systems"
          />

          {/* ── Card 3: Church AV ──────────────────── */}
          <Card
            title="Church AV Training & Support"
            description="Training, staffing, and systems that help churches build confident, self-sustaining AV ministries. IAM solves the people + process + technology challenge."
            href="/services/church-av"
          />
        </div>

        <div className="mt-10 text-center">
          <p className="text-zinc-500 text-sm">
            Not sure which fits? <a href="/contact" className="text-accent hover:underline">Tell us about your project.</a>
          </p>
        </div>
      </div>
    </section>
  );
}
