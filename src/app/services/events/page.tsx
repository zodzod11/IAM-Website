import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function EventProduction() {
  return (
    <div className="bg-base">
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="Event Production"
          subtitle="Live sound, video, lighting, and media production for churches, nonprofits, corporate events, and celebrations across New England."
          alignment="left"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white">Audio</h3>
            <p className="mt-3 text-zinc-400">
              Live sound reinforcement, PA systems, wireless microphones, digital mixing,
              stage monitoring, music playback, and professional sound engineering.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Video</h3>
            <p className="mt-3 text-zinc-400">
              Event video production, multi-camera recording, livestreaming, IMAG displays,
              event recap videos, and camera operation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Photography & Media</h3>
            <p className="mt-3 text-zinc-400">
              Event photography, portrait/backdrop photography, media capture,
              and social-media-ready content for your event.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Lighting</h3>
            <p className="mt-3 text-zinc-400">
              Basic event lighting, stage lighting, uplighting, and production lighting
              — designed to fit the mood and scale of your event.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-zinc-400">
            Ready to plan your event? Tell us what you need.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Plan Your Event
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
