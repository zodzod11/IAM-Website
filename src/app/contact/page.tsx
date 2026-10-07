import { SectionHeading } from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <div className="bg-base">
      <section className="mx-auto max-w-3xl px-4 md:px-8 py-16 md:py-24">
        <SectionHeading
          title="Request a Quote"
          subtitle="Tell us about your event, AV system, or training needs. We will follow up with a clear plan and a straightforward quote."
          alignment="center"
        />

        <div className="mt-10 surface-card rounded-lg p-6 md:p-8">
          <form className="flex flex-col gap-6">
            {/* ── Row: Name + Organization ──────────── */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded bg-base-alt border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-zinc-300 mb-2">
                  Organization
                </label>
                <input
                  id="organization"
                  type="text"
                  placeholder="Church, nonprofit, business, etc."
                  className="w-full px-4 py-3 rounded bg-base-alt border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* ── Row: Email + Phone ────────────────── */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="you@organization.org"
                  className="w-full px-4 py-3 rounded bg-base-alt border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded bg-base-alt border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* ── Project Type ──────────────────────── */}
            <div>
              <label htmlFor="projectType" className="block text-sm font-medium text-zinc-300 mb-2">
                Type of Project <span className="text-accent">*</span>
              </label>
              <select
                id="projectType"
                required
                className="w-full px-4 py-3 rounded bg-base-alt border border-border-dark text-white text-sm focus:outline-none focus:border-accent transition-colors"
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

            {/* ── Event Date ────────────────────────── */}
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-zinc-300 mb-2">
                  Project / Event Date
                </label>
                <input
                  id="eventDate"
                  type="date"
                  className="w-full px-4 py-3 rounded bg-base-alt border border-border-dark text-white text-sm focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="attendees" className="block text-sm font-medium text-zinc-300 mb-2">
                  Expected Attendance
                </label>
                <input
                  id="attendees"
                  type="number"
                  placeholder="Approximate guest count"
                  className="w-full px-4 py-3 rounded bg-base-alt border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>

            {/* ── Details ───────────────────────────── */}
            <div>
              <label htmlFor="details" className="block text-sm font-medium text-zinc-300 mb-2">
                Tell Us About Your Project <span className="text-accent">*</span>
              </label>
              <textarea
                id="details"
                required
                rows={5}
                placeholder="Describe your event, AV needs, or training goals. Include venue info, equipment you already have, and any specific requirements."
                className="w-full px-4 py-3 rounded bg-base-alt border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-y"
              />
            </div>

            {/* ── Submit ────────────────────────────── */}
            <button
              type="submit"
              className="w-full py-4 text-base font-medium rounded bg-accent text-white hover:bg-accent-hover transition-all duration-200"
            >
              Send Inquiry
            </button>
          </form>

          <p className="mt-6 text-xs text-zinc-500 text-center">
            We typically respond within 24&ndash;48 hours.
          </p>
        </div>
      </section>
    </div>
  );
}
