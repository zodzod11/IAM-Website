import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const PROJECTS = [
  {
    title: "Birthday Celebration — Avon, MA",
    client: "Private Event",
    date: "September 2026",
    services: ["Audio", "Photography", "360 Booth", "Lighting"],
    description:
      "Full-event production for a 100-guest celebration. IAM provided PA setup, wireless microphones, music playback, backdrop photography, 360 photo booth operation, and room uplighting.",
    image: null,
  },
] as const;

export default function Work() {
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
            Our Work
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
            Real projects showing how IAM brings together audio, video, lighting,
            and media production for organizations across New England.
          </p>
        </div>
      </section>

      {/* ── Project Grid ─────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          {PROJECTS.length > 0 ? (
            <div className="space-y-8">
              {PROJECTS.map((project) => (
                <article
                  key={project.title}
                  className="surface-card rounded-lg overflow-hidden"
                >
                  {/* ── Image ───────────────────────────── */}
                  <div className="aspect-video bg-base-alt flex items-center justify-center">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center py-16">
                        <p className="text-4xl text-zinc-500">📸</p>
                        <p className="mt-3 text-sm text-zinc-600">
                          Project photo coming soon
                        </p>
                      </div>
                    )}
                  </div>

                  {/* ── Info ─────────────────────────────── */}
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-accent/10 text-accent"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <h2 className="text-2xl font-bold text-white">
                        {project.title}
                      </h2>
                      <span className="text-xs text-zinc-500">{project.date}</span>
                    </div>

                    <p className="text-sm text-zinc-500">{project.client}</p>
                    <p className="mt-4 text-base text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <SectionHeading
                title="Projects Coming Soon"
                subtitle="We are documenting our work as we complete engagements. Check back soon for case studies and project galleries."
                alignment="center"
              />
              <div className="mt-10">
                <Button href="/contact" variant="primary" size="lg">
                  Ask About Our Work
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="bg-base">
        <div className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
            Want to see work relevant to your project?
          </h2>
          <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
            Contact us and we can share examples and references specific to
            your event type or industry.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Request Examples
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
