"use client";

import { useState } from "react";

type FormState = "idle" | "submitting" | "success" | "error";

type FormData = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  projectType: string;
  eventDate: string;
  attendees: string;
  details: string;
  honeypot: string; // Hidden anti-spam field
};

const INITIAL_DATA: FormData = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  projectType: "",
  eventDate: "",
  attendees: "",
  details: "",
  honeypot: "",
};

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

type FieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, required, error, children }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-zinc-300 mb-1.5">
        {label}
        {required && <span className="text-accent"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-accent">{error}</p>
      )}
    </div>
  );
}

const INPUT_CLASS =
  "w-full px-4 py-3 rounded bg-base border border-border-dark text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all";

/**
 * Client-side contact form with controlled inputs, inline validation,
 * honeypot spam protection, and async submission to /api/contact.
 */
export function ContactForm() {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function updateField(field: keyof FormData, value: string) {
    setData((prev) => ({ ...prev, [field]: value }));
    // Clear field error on change
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate(): boolean {
    const errors: Partial<Record<keyof FormData, string>> = {};

    if (!data.name.trim()) errors.name = "Name is required";
    if (!data.email.trim() || !data.email.includes("@")) errors.email = "Valid email is required";
    if (!data.projectType) errors.projectType = "Select a project type";
    if (data.details.trim().length < 10) errors.details = "Please include at least a brief description";

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) return;

    setState("submitting");

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
      setData(INITIAL_DATA);
    } catch {
      setState("error");
      setErrorMessage("Could not reach the server. Please email us directly at hello@impactaudiomedia.com.");
    }
  }

  if (state === "success") {
    return (
      <div className="surface-card rounded-lg p-8 text-center">
        <div className="text-5xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-white">Thanks for reaching out!</h2>
        <p className="mt-4 text-lg text-zinc-400">
          We&rsquo;ve received your inquiry and typically respond within
          24&ndash;48 hours.
        </p>
        <p className="mt-4 text-zinc-500">
          In the meantime, feel free to email us directly at{" "}
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
    );
  }

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
      {/* ── Honeypot — hidden from real users, visible to bots ── */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="honeypot">Do not fill this field</label>
        <input
          id="honeypot"
          name="honeypot"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={data.honeypot}
          onChange={(e) => updateField("honeypot", e.target.value)}
        />
      </div>

      {/* Row: Name + Organization */}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" required error={fieldErrors.name}>
          <input
            type="text"
            required
            placeholder="Your name"
            value={data.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={INPUT_CLASS}
          />
        </Field>
        <Field label="Organization">
          <input
            type="text"
            placeholder="Church, nonprofit, business, etc."
            value={data.organization}
            onChange={(e) => updateField("organization", e.target.value)}
            className={INPUT_CLASS}
          />
        </Field>
      </div>

      {/* Row: Email + Phone */}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Email" required error={fieldErrors.email}>
          <input
            type="email"
            required
            placeholder="you@organization.org"
            value={data.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={INPUT_CLASS}
          />
        </Field>
        <Field label="Phone">
          <input
            type="tel"
            placeholder="(555) 123-4567"
            value={data.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={INPUT_CLASS}
          />
        </Field>
      </div>

      {/* Project Type */}
      <Field label="Type of Project" required error={fieldErrors.projectType}>
        <select
          required
          value={data.projectType}
          onChange={(e) => updateField("projectType", e.target.value)}
          className={INPUT_CLASS}
        >
          {PROJECT_TYPES.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </Field>

      {/* Date + Attendance */}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Project / Event Date">
          <input
            type="date"
            value={data.eventDate}
            onChange={(e) => updateField("eventDate", e.target.value)}
            className={INPUT_CLASS}
          />
        </Field>
        <Field label="Expected Attendance">
          <input
            type="number"
            placeholder="Approximate guest count"
            value={data.attendees}
            onChange={(e) => updateField("attendees", e.target.value)}
            className={INPUT_CLASS}
          />
        </Field>
      </div>

      {/* Details */}
      <Field label="Tell Us About Your Project" required error={fieldErrors.details}>
        <textarea
          required
          rows={5}
          placeholder="Describe your event, AV needs, or training goals. Include venue info, equipment you already have, and any specific requirements."
          value={data.details}
          onChange={(e) => updateField("details", e.target.value)}
          className={`${INPUT_CLASS} resize-y`}
        />
      </Field>

      {/* Error banner */}
      {state === "error" && (
        <div className="rounded-lg bg-accent/10 border border-accent/30 px-4 py-3 text-sm text-accent">
          {errorMessage}
        </div>
      )}

      {/* Privacy note */}
      <p className="text-xs text-zinc-600">
        By submitting this form, you agree that IAM may contact you regarding your inquiry.
        Your information will not be shared with third parties. See our{" "}
        <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>.
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 text-base font-medium rounded bg-accent text-white hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {state === "submitting" ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
