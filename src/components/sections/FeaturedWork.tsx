import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const PROJECTS = [
  {
    title: "Birthday Celebration — Avon, MA",
    client: "Private Event",
    services: ["Audio", "Photography", "360 Booth", "Lighting"],
    description:
      "Full-event production for a 100-guest celebration including PA setup, wireless microphones, music playback, backdrop photography, 360 photo booth, and room uplighting.",
    image: "/images/events/generations-event.jpg",
    alt: "IAM event production setup with lighting and backdrop",
  },
] as const;

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
              <div className="aspect-video bg-base-alt relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>

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
