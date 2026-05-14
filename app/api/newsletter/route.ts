import { Resend } from "resend";

export const runtime = "nodejs";

type NewsletterPayload = {
  email?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const newsletterToEmail =
    process.env.NEWSLETTER_TO_EMAIL || process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !resendFromEmail || !newsletterToEmail) {
    return Response.json(
      { error: "Newsletter email service is not configured yet." },
      { status: 500 },
    );
  }

  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const email = sanitize(payload.email);

  if (!email || !emailPattern.test(email)) {
    return Response.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const resend = new Resend(resendApiKey);
  const subscribedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const { error } = await resend.emails.send({
    from: resendFromEmail,
    to: newsletterToEmail,
    replyTo: email,
    subject: "New newsletter subscription",
    text: [
      "New newsletter subscription",
      "",
      `Email: ${email}`,
      `Subscribed: ${subscribedAt}`,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">New newsletter subscription</h2>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subscribed:</strong> ${escapeHtml(subscribedAt)}</p>
      </div>
    `,
  });

  if (error) {
    return Response.json(
      { error: "Unable to subscribe right now." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
