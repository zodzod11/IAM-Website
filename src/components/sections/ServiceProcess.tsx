import { SectionHeading } from "@/components/ui/SectionHeading";

type Step = {
  number: string;
  title: string;
  description: string;
};

type ServiceProcessProps = {
  title?: string;
  subtitle?: string;
  steps: readonly Step[];
};

/**
 * Three-step process section used on service pages.
 * Each step has a number, title, and description.
 */
export function ServiceProcess({
  title = "How It Works",
  subtitle,
  steps,
}: ServiceProcessProps) {
  return (
    <section className="bg-base-alt">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          alignment="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="surface-card rounded-lg p-6 md:p-8 text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-accent/10 text-accent text-xl font-bold">
                {step.number}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-base text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
