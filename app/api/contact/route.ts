import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  fullName?: string;
  phoneNumber?: string;
  email?: string;
  projectType?: string;
  message?: string;
  acceptedTerms?: boolean;
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

function validatePayload(payload: ContactPayload) {
  const fullName = sanitize(payload.fullName);
  const phoneNumber = sanitize(payload.phoneNumber);
  const email = sanitize(payload.email);
  const projectType = sanitize(payload.projectType);
  const message = sanitize(payload.message);
  const acceptedTerms = payload.acceptedTerms === true;

  if (!fullName) {
    return { error: "Full name is required." };
  }

  if (!email || !emailPattern.test(email)) {
    return { error: "A valid email address is required." };
  }

  if (!message || message.length < 10) {
    return { error: "Message must be at least 10 characters." };
  }

  if (!acceptedTerms) {
    return { error: "Terms acceptance is required." };
  }

  return {
    data: {
      fullName,
      phoneNumber,
      email,
      projectType,
      message,
      acceptedTerms,
    },
  };
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;

  if (!resendApiKey || !contactToEmail || !resendFromEmail) {
    return Response.json(
      { error: "Contact email service is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validation = validatePayload(payload);

  if ("error" in validation) {
    return Response.json({ error: validation.error }, { status: 400 });
  }

  const { fullName, phoneNumber, email, projectType, message, acceptedTerms } =
    validation.data;
  const resend = new Resend(resendApiKey);
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const { error } = await resend.emails.send({
    from: resendFromEmail,
    to: contactToEmail,
    replyTo: email,
    subject: `New contact enquiry from ${fullName}`,
    text: [
      "New contact form submission",
      "",
      `Name: ${fullName}`,
      `Email: ${email}`,
      `Phone: ${phoneNumber || "Not provided"}`,
      `Project type: ${projectType || "Not provided"}`,
      `Accepted terms: ${acceptedTerms ? "Yes" : "No"}`,
      `Submitted: ${submittedAt}`,
      "",
      "Message:",
      message,
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phoneNumber || "Not provided")}</p>
        <p><strong>Project type:</strong> ${escapeHtml(projectType || "Not provided")}</p>
        <p><strong>Accepted terms:</strong> ${acceptedTerms ? "Yes" : "No"}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p>${safeMessage}</p>
      </div>
    `,
  });

  if (error) {
    return Response.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
