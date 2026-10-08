import { NextRequest, NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  projectType: string;
  eventDate?: string;
  attendees?: string;
  details: string;
};

function validate(body: Record<string, unknown>): body is ContactPayload {
  if (typeof body.name !== "string" || body.name.trim().length === 0) return false;
  if (typeof body.email !== "string" || !body.email.includes("@")) return false;
  if (typeof body.projectType !== "string" || body.projectType.length === 0)
    return false;
  if (typeof body.details !== "string" || body.details.trim().length < 10)
    return false;
  return true;
}

function formatSubmission(data: ContactPayload): string {
  return [
    `Name: ${data.name}`,
    `Organization: ${data.organization || "—"}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Project Type: ${data.projectType}`,
    `Event Date: ${data.eventDate || "—"}`,
    `Attendance: ${data.attendees || "—"}`,
    `---`,
    data.details,
  ].join("\n");
}

/**
 * POST /api/contact
 *
 * Accepts JSON contact form submissions. Validates the payload,
 * attempts to send via Resend if configured, otherwise logs to
 * console. Returns JSON with success/error status.
 */
export async function POST(request: NextRequest) {
  try {
    const body: Record<string, unknown> = await request.json();

    if (!validate(body)) {
      return NextResponse.json(
        { error: "Please fill in all required fields (name, email, project type, and details)." },
        { status: 400 },
      );
    }

    const data = body as ContactPayload;

    // ── Log the submission ──────────────────────────
    console.log("=== Contact Form Submission ===");
    console.log(formatSubmission(data));
    console.log("================================");

    // ── Send via Resend (if configured) ─────────────
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "IAM Website <onboarding@resend.dev>",
            to: ["hello@impactaudiomedia.com"],
            subject: `New Inquiry: ${data.projectType} — ${data.name}`,
            text: formatSubmission(data),
          }),
        });

        if (!res.ok) {
          console.error("Resend API error:", await res.text());
        } else {
          console.log("Email sent via Resend");
        }
      } catch (err) {
        console.error("Failed to send via Resend:", err);
      }
    } else {
      console.log("RESEND_API_KEY not set — submission logged to console only.");
      console.log("To enable email, add RESEND_API_KEY to your .env file.");
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again or email us directly at hello@impactaudiomedia.com." },
      { status: 500 },
    );
  }
}
