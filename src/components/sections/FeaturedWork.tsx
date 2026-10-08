import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const PROJECTS = [
  {
    title: "Birthday Celebration — Avon, MA",
    client: "Private Event",
    services: ["Audio", "Photography", "360 Booth", "Lighting"],
    description:
      "Full-event production for a 100-guest celebration including PA setup, wireless microphones, music playback, backdrop photography, 360 photo booth, and room uplighting.",
    image: null, // Placeholder until a web-ready image is provided
  },
] as const;

/**
 * Featured Work — showcases real IAM projects with photos and details.
 * Designed to grow as more projects are completed and documented.
 */
export function FeaturedWork() {
  return (
    <section className="bg-base-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="Recent Work"
          subtitle="Real projects showing how IAM brings together audio, video, lighting, and media production."
          alignment="center"
        />

        <div className="mt-10 space-y-8">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="surface-card rounded-lg overflow-hidden"
            >
              {/* ── Image Placeholder ────────────────── */}
              <div className="aspect-video bg-base-alt flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center py-12">
                    <p className="text-sm text-zinc-500">📸</p>
                    <p className="mt-2 text-xs text-zinc-600">
                      Photo coming soon
                    </p>
                  </div>
                )}
              </div>

              {/* ── Project Info ─────────────────────── */}
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold text-zinc-900">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-500 mt-1">{project.client}</p>
                <p className="mt-3 text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-zinc-500">
            More case studies and project galleries are being documented.
          </p>
          <div className="mt-6">
            <Button href="/work" variant="secondary">
              View All Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
