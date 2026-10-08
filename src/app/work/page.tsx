import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Portfolio of event production, AV system, and church training projects from Impact - Audio & Media across New England.",
};

const PROJECTS = [
  {
    title: "Birthday Celebration — Avon, MA",
    client: "Private Event",
    date: "September 2026",
    services: ["Audio", "Photography", "360 Booth", "Lighting"],
    description:
      "Full-event production for a 100-guest celebration. IAM provided PA setup, wireless microphones, music playback, backdrop photography, 360 photo booth operation, and room uplighting.",
    image: "/images/events/generations-event.jpg",
    alt: "IAM event production setup with lighting and backdrop",
  },
] as const;

export default function Work() {
  return (
    <>
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

      <section className="bg-base-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <div className="space-y-8">
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
                    <h2 className="text-2xl font-bold text-zinc-900">
                      {project.title}
                    </h2>
                    <span className="text-xs text-zinc-500">{project.date}</span>
                  </div>

                  <p className="text-sm text-zinc-500">{project.client}</p>
                  <p className="mt-4 text-base text-zinc-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
