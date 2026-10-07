import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function Work() {
  return (
    <div className="bg-base">
      <section className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="Our Work"
          subtitle="Selected projects demonstrating IAM's production capabilities across event production, AV systems, and technical training."
          alignment="center"
        />

        <div className="mt-12 text-center">
          <p className="text-lg text-zinc-400">
            Case studies and project galleries coming soon as we complete
            and document more engagements.
          </p>
          <p className="mt-4 text-zinc-500">
            In the meantime, feel free to reach out and we can share relevant
            examples for your type of project.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Ask About Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
