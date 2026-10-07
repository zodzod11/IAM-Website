import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function AVSystems() {
  return (
    <div className="bg-base">
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="AV Systems"
          subtitle="Professional AV consultation, design, installation, and optimization for organizations that need reliable, well-engineered technical systems."
          alignment="left"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white">Consultation</h3>
            <p className="mt-3 text-zinc-400">
              Existing system assessments, needs evaluations, equipment recommendations,
              and technical improvement plans tailored to your organization and budget.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">System Design</h3>
            <p className="mt-3 text-zinc-400">
              Audio, video, livestream, camera, display, and control system design
              with detailed equipment specifications and signal flow planning.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Installation</h3>
            <p className="mt-3 text-zinc-400">
              Professional installation of speakers, mixers, wireless systems, cameras,
              displays, projectors, cabling, racks, and streaming infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Configuration & Training</h3>
            <p className="mt-3 text-zinc-400">
              System tuning, mixer/DSP configuration, gain structure, documentation,
              and hands-on training so your team can operate the system with confidence.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-zinc-400">
            Interested in improving your AV infrastructure?
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Request a Site Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
