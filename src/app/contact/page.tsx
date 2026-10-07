import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────── */}
      <section
        className="flex items-center justify-center min-h-[40vh] bg-base px-4"
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
            Request a Quote
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 md:text-xl leading-relaxed">
            Tell us about your event, AV system, or training needs. We will
            follow up with a clear plan and a straightforward quote.
          </p>
        </div>
      </section>

      {/* ── Form + Info ──────────────────────────── */}
      <section className="bg-base-alt">
        <div className="mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {/* ── Form ─────────────────────────────── */}
            <div className="md:col-span-2 surface-card rounded-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white mb-2">
                Tell Us About Your Project
              </h2>
              <p className="text-sm text-zinc-500 mb-6">
                All fields marked with <span className="text-accent">*</span> are required.
              </p>

              <form className="flex flex-col gap-5">
                {/* Row: Name + Organization */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1.5">
                      Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-zinc-300 mb-1.5">
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      placeholder="Church, nonprofit, business, etc."
                      className="w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                </div>

                {/* Row: Email + Phone */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1.5">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@organization.org"
                      className="w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-1.5">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-sm font-medium text-zinc-300 mb-1.5">
                    Type of Project <span className="text-accent">*</span>
                  </label>
                  <select
                    id="projectType"
                    required
                    className="w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                  >
                    <option value="">Select a project type…</option>
                    <option value="event">Event Production</option>
                    <option value="system">AV System</option>
                    <option value="training">Church AV Training</option>
                    <option value="staffing">Managed AV Support</option>
                    <option value="photo">Photography / Video</option>
                    <option value="consultation">Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Date + Attendance */}
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-zinc-300 mb-1.5">
                      Project / Event Date
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      className="w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="attendees" className="block text-sm font-medium text-zinc-300 mb-1.5">
                      Expected Attendance
                    </label>
                    <input
                      id="attendees"
                      type="number"
                      placeholder="Approximate guest count"
                      className="w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all"
                    />
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-zinc-300 mb-1.5">
                    Tell Us About Your Project <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="details"
                    required
                    rows={5}
                    placeholder="Describe your event, AV needs, or training goals. Include venue info, equipment you already have, and any specific requirements."
                    className="w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all resize-y"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 text-base font-medium rounded bg-accent text-white hover:bg-accent-hover transition-all duration-200"
                >
                  Send Inquiry
                </button>
              </form>

              <p className="mt-4 text-xs text-zinc-500 text-center">
                We typically respond within 24&ndash;48 hours.
              </p>
            </div>

            {/* ── Sidebar Info ────────────────────── */}
            <aside className="space-y-8">
              {/* Contact Info */}
              <div className="surface-card rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  Other Ways to Connect
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li>
                    <span className="block text-xs text-zinc-500 uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      href="mailto:hello@impactaudiomedia.com"
                      className="text-accent hover:underline"
                    >
                      hello@impactaudiomedia.com
                    </a>
                  </li>
                  <li>
                    <span className="block text-xs text-zinc-500 uppercase tracking-wider">
                      Service Area
                    </span>
                    <span>Greater Boston, Massachusetts &amp; New England</span>
                  </li>
                  <li>
                    <span className="block text-xs text-zinc-500 uppercase tracking-wider">
                      Response Time
                    </span>
                    <span>Within 24&ndash;48 hours</span>
                  </li>
                </ul>
              </div>

              {/* Testimonial placeholder */}
              <div className="surface-card rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">
                  What Our Clients Say
                </h3>
                <p className="text-sm text-zinc-400 italic leading-relaxed">
                  &ldquo;IAM handled the full production for our event — audio,
                  photo, lighting. Everything ran smoothly and they made
                  the whole process easy.&rdquo;
                </p>
                <p className="mt-3 text-xs text-zinc-500">
                  &mdash; Generations Birthday Event, Avon MA
                </p>
              </div>

              {/* Quick link */}
              <div className="surface-card rounded-lg p-6 text-center">
                <p className="text-sm text-zinc-400">
                  Prefer to call or email instead?
                </p>
                <div className="mt-4">
                  <Button href="mailto:hello@impactaudiomedia.com" variant="secondary" size="sm">
                    Send an Email
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
