import { SectionHeading } from "@/components/ui/SectionHeading";

const DIFFERENTIATORS = [
  {
    icon: "🔧",
    title: "We Understand the Whole System",
    description:
      "Technology, workflow, and people — not just equipment. IAM looks at the complete picture so nothing gets missed.",
  },
  {
    icon: "🎯",
    title: "Built Around Your Needs",
    description:
      "No cookie-cutter packages. Every event and every system is planned for your specific situation, budget, and goals.",
  },
  {
    icon: "✅",
    title: "Reliable Execution",
    description:
      "Preparation, planning, and clear communication before the event means calm, professional execution when it matters.",
  },
  {
    icon: "📚",
    title: "Training That Sticks",
    description:
      "We don't just install and leave. IAM trains your team, documents your system, and helps you build long-term capability.",
  },
] as const;

/**
 * Why IAM — 2x2 differentiator grid answering "Why not someone else?"
 */
export function WhyIAM() {
  return (
    <section className="bg-base">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="Why IAM?"
          subtitle="Great experiences require more than great equipment. Here's what makes our approach different."
          alignment="center"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 md:gap-8">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.title}
              className="surface-card rounded-lg p-6 md:p-8 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-base text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="/about"
            className="text-sm font-medium text-accent hover:underline"
          >
            More about our approach →
          </a>
        </div>
      </div>
    </section>
  );
}
