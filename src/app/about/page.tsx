import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function About() {
  return (
    <div className="bg-base">
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="About IAM"
          subtitle="Impact - Audio & Media exists to help organizations communicate and create experiences through better audio, video, and media."
          alignment="center"
        />

        <div className="mt-12 max-w-3xl mx-auto space-y-8 text-zinc-300 leading-relaxed text-lg">
          <p>
            IAM was built from the belief that great production should be accessible
            to the organizations that need it — churches, nonprofits, community
            groups, and businesses — not just those with large budgets or in-house
            technical teams.
          </p>
          <p>
            Our team brings together experience in live event production, AV system
            design and installation, and church technical ministry. We understand
            the technology, but we also understand the people and organizations
            using it.
          </p>
          <p>
            We serve Greater Boston, Massachusetts, and New England — and we are
            built to grow as a real company with systems, standards, and a team
            that can deliver consistently.
          </p>
        </div>

        {/* ── Team ────────────────────────────────── */}
        <div className="mt-16">
          <SectionHeading
            title="Team"
            subtitle="IAM's active core team brings together business operations, event logistics, and technical leadership."
            alignment="center"
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            <div className="surface-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">Zack</h3>
              <p className="text-sm text-zinc-500 mt-1">Director of Business Operations</p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Systems, finance, planning, pricing, client coordination, and business development.
              </p>
            </div>
            <div className="surface-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">Williadji Cadet</h3>
              <p className="text-sm text-zinc-500 mt-1">Event Operations</p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Venue access, logistics, staffing, setup coordination, on-site execution, and crew management.
              </p>
            </div>
            <div className="surface-card rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white">Phaedra Saint Fleur</h3>
              <p className="text-sm text-zinc-500 mt-1">Technical Lead</p>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Technical standards, equipment architecture, system design, signal flow, and technical execution.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-zinc-400">
            Want to work with us? We would love to hear about your project.
          </p>
          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
