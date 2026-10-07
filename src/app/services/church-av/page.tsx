import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function ChurchAV() {
  return (
    <div className="bg-base">
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="Church AV Training & Support"
          subtitle="Build an AV ministry that doesn't depend on one person. IAM helps churches develop confident teams, reliable systems, and sustainable processes."
          alignment="left"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-xl font-semibold text-white">AV Training</h3>
            <p className="mt-3 text-zinc-400">
              Hands-on training for your existing AV team. Audio fundamentals, mixer
              operation, livestream, camera work, lighting, troubleshooting, and
              service preparation — taught at your church with your equipment.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Managed AV Support</h3>
            <p className="mt-3 text-zinc-400">
              Technical personnel to operate or support your services. Audio engineers,
              livestream operators, camera operators, and technical directors —
              available when you need them.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">Hybrid Development</h3>
            <p className="mt-3 text-zinc-400">
              IAM's strongest differentiator: we help operate your AV ministry while
              simultaneously training volunteers, developing leaders, creating
              documentation, and building long-term sustainability.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">System Assessment</h3>
            <p className="mt-3 text-zinc-400">
              Evaluate your current AV system, identify gaps, recommend improvements,
              and create a roadmap that fits your budget and ministry goals.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-zinc-400">
            Strengthen your AV ministry. Let's talk about where you are and where you want to be.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Schedule an AV Ministry Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
