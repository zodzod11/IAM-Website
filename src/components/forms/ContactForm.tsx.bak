"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

const PROJECT_TYPES = [
  { value: "", label: "Select a project type…" },
  { value: "event", label: "Event Production" },
  { value: "system", label: "AV System" },
  { value: "training", label: "Church AV Training" },
  { value: "staffing", label: "Managed AV Support" },
  { value: "photo", label: "Photography / Video" },
  { value: "consultation", label: "Consultation" },
  { value: "other", label: "Other" },
] as const;

/**
 * Client-side contact form with async submission to /api/contact.
 * Shows inline validation errors, submitting state, and success message.
 */
export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = {
      name: (form.querySelector("#name") as HTMLInputElement).value,
      organization: (form.querySelector("#organization") as HTMLInputElement).value,
      email: (form.querySelector("#email") as HTMLInputElement).value,
      phone: (form.querySelector("#phone") as HTMLInputElement).value,
      projectType: (form.querySelector("#projectType") as HTMLSelectElement).value,
      eventDate: (form.querySelector("#eventDate") as HTMLInputElement).value,
      attendees: (form.querySelector("#attendees") as HTMLInputElement).value,
      details: (form.querySelector("#details") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setState("error");
        setErrorMessage(json.error || "Something went wrong. Please try again.");
        return;
      }

      setState("success");
      form.reset();
    } catch {
      setState("error");
      setErrorMessage("Could not reach the server. Please email us directly at hello@impactaudiomedia.com.");
    }
  }

  return (
    <>
      {state === "success" ? (
        /* ── Success Message ─────────────────────────── */
        <div className="surface-card rounded-lg p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-white">Thanks for reaching out!</h2>
          <p className="mt-4 text-lg text-zinc-400">
            We&rsquo;ve received your inquiry and typically respond within
            24&ndash;48 hours.
          </p>
          <p className="mt-4 text-zinc-500">
            In the meantime, feel free to email us directly at
            <a href="mailto:hello@impactaudiomedia.com" className="text-accent hover:underline">
              hello@impactaudiomedia.com
            </a>
          </p>
          <button
            type="button"
            onClick={() => setState("idle")}
            className="mt-8 inline-flex items-center px-6 py-3 text-sm font-medium rounded bg-accent/20 text-accent hover:bg-accent/30 transition-all"
          >
            Submit another inquiry
          </button>
        </div>
      ) : (
        /* ── Form ────────────────────────────────────── */
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
              {PROJECT_TYPES.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
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

          {/* Error */}
          {state === "error" && (
            <div className="rounded-lg bg-accent/10 border border-accent/30 px-4 py-3 text-sm text-accent">
              {errorMessage}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={state === "submitting"}
            className="w-full py-4 text-base font-medium rounded bg-accent text-white hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            {state === "submitting" ? "Sending…" : "Send Inquiry"}
          </button>
        </form>
      )}
    </>
  );
}
