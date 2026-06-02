import { Resend } from "resend";

export const runtime = "nodejs";

type ProjectIntakePayload = {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  companyName?: string;
  website?: string;
  role?: string;
  projectType?: string;
  projectStage?: string;
  services?: string[];
  projectSummary?: string;
  primaryGoals?: string;
  targetUsers?: string;
  keyFeatures?: string;
  integrations?: string;
  referenceLinks?: string;
  budgetRange?: string;
  timeline?: string;
  launchDate?: string;
  decisionMakers?: string;
  hasBrandAssets?: string;
  additionalNotes?: string;
  acceptedTerms?: boolean;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function sanitizeList(value: unknown) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatMultiline(value: string) {
  return escapeHtml(value || "Not provided").replace(/\n/g, "<br />");
}

function validatePayload(payload: ProjectIntakePayload) {
  const fullName = sanitize(payload.fullName);
  const email = sanitize(payload.email);
  const phoneNumber = sanitize(payload.phoneNumber);
  const companyName = sanitize(payload.companyName);
  const website = sanitize(payload.website);
  const role = sanitize(payload.role);
  const projectType = sanitize(payload.projectType);
  const projectStage = sanitize(payload.projectStage);
  const services = sanitizeList(payload.services);
  const projectSummary = sanitize(payload.projectSummary);
  const primaryGoals = sanitize(payload.primaryGoals);
  const targetUsers = sanitize(payload.targetUsers);
  const keyFeatures = sanitize(payload.keyFeatures);
  const integrations = sanitize(payload.integrations);
  const referenceLinks = sanitize(payload.referenceLinks);
  const budgetRange = sanitize(payload.budgetRange);
  const timeline = sanitize(payload.timeline);
  const launchDate = sanitize(payload.launchDate);
  const decisionMakers = sanitize(payload.decisionMakers);
  const hasBrandAssets = sanitize(payload.hasBrandAssets);
  const additionalNotes = sanitize(payload.additionalNotes);
  const acceptedTerms = payload.acceptedTerms === true;

  if (!fullName) {
    return { error: "Full name is required." };
  }

  if (!email || !emailPattern.test(email)) {
    return { error: "A valid email address is required." };
  }

  if (!projectType) {
    return { error: "Project type is required." };
  }

  if (services.length === 0) {
    return { error: "Please choose at least one service." };
  }

  if (projectSummary.length < 20) {
    return { error: "Project summary must be at least 20 characters." };
  }

  if (primaryGoals.length < 15) {
    return { error: "Primary goals must be at least 15 characters." };
  }

  if (keyFeatures.length < 15) {
    return { error: "Key features must be at least 15 characters." };
  }

  if (!budgetRange) {
    return { error: "Budget range is required." };
  }

  if (!timeline) {
    return { error: "Timeline is required." };
  }

  if (!acceptedTerms) {
    return { error: "Terms acceptance is required." };
  }

  return {
    data: {
      fullName,
      email,
      phoneNumber,
      companyName,
      website,
      role,
      projectType,
      projectStage,
      services,
      projectSummary,
      primaryGoals,
      targetUsers,
      keyFeatures,
      integrations,
      referenceLinks,
      budgetRange,
      timeline,
      launchDate,
      decisionMakers,
      hasBrandAssets,
      additionalNotes,
      acceptedTerms,
    },
  };
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const resendFromEmail = process.env.RESEND_FROM_EMAIL;
  const projectIntakeToEmail =
    process.env.PROJECT_INTAKE_TO_EMAIL || process.env.CONTACT_TO_EMAIL;

  if (!resendApiKey || !resendFromEmail || !projectIntakeToEmail) {
    return Response.json(
      { error: "Project intake email service is not configured yet." },
      { status: 500 },
    );
  }

  let payload: ProjectIntakePayload;

  try {
    payload = (await request.json()) as ProjectIntakePayload;
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const validation = validatePayload(payload);

  if ("error" in validation) {
    return Response.json({ error: validation.error }, { status: 400 });
  }

  const data = validation.data;
  const resend = new Resend(resendApiKey);
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  const textRows = [
    "New project intake submission",
    "",
    `Name: ${data.fullName}`,
    `Email: ${data.email}`,
    `Phone: ${data.phoneNumber || "Not provided"}`,
    `Company: ${data.companyName || "Not provided"}`,
    `Website: ${data.website || "Not provided"}`,
    `Role: ${data.role || "Not provided"}`,
    "",
    `Project type: ${data.projectType}`,
    `Project stage: ${data.projectStage || "Not provided"}`,
    `Services: ${data.services.join(", ")}`,
    `Budget: ${data.budgetRange}`,
    `Timeline: ${data.timeline}`,
    `Target launch date: ${data.launchDate || "Not provided"}`,
    `Brand assets: ${data.hasBrandAssets || "Not provided"}`,
    `Decision makers: ${data.decisionMakers || "Not provided"}`,
    `Accepted terms: ${data.acceptedTerms ? "Yes" : "No"}`,
    `Submitted: ${submittedAt}`,
    "",
    "Project summary:",
    data.projectSummary,
    "",
    "Primary goals:",
    data.primaryGoals,
    "",
    "Target users:",
    data.targetUsers || "Not provided",
    "",
    "Key features:",
    data.keyFeatures,
    "",
    "Integrations:",
    data.integrations || "Not provided",
    "",
    "Reference links:",
    data.referenceLinks || "Not provided",
    "",
    "Additional notes:",
    data.additionalNotes || "Not provided",
  ];

  const { error } = await resend.emails.send({
    from: resendFromEmail,
    to: projectIntakeToEmail,
    replyTo: data.email,
    subject: `New project brief from ${data.fullName}`,
    text: textRows.join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; color: #111827; line-height: 1.6;">
        <h2 style="margin: 0 0 16px;">New project intake submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(data.fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(data.phoneNumber || "Not provided")}</p>
        <p><strong>Company:</strong> ${escapeHtml(data.companyName || "Not provided")}</p>
        <p><strong>Website:</strong> ${escapeHtml(data.website || "Not provided")}</p>
        <p><strong>Role:</strong> ${escapeHtml(data.role || "Not provided")}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <p><strong>Project type:</strong> ${escapeHtml(data.projectType)}</p>
        <p><strong>Project stage:</strong> ${escapeHtml(data.projectStage || "Not provided")}</p>
        <p><strong>Services:</strong> ${escapeHtml(data.services.join(", "))}</p>
        <p><strong>Budget:</strong> ${escapeHtml(data.budgetRange)}</p>
        <p><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>
        <p><strong>Target launch date:</strong> ${escapeHtml(data.launchDate || "Not provided")}</p>
        <p><strong>Brand assets:</strong> ${escapeHtml(data.hasBrandAssets || "Not provided")}</p>
        <p><strong>Decision makers:</strong> ${formatMultiline(data.decisionMakers)}</p>
        <p><strong>Accepted terms:</strong> ${data.acceptedTerms ? "Yes" : "No"}</p>
        <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
        <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
        <h3 style="margin: 0 0 8px;">Project summary</h3>
        <p>${formatMultiline(data.projectSummary)}</p>
        <h3 style="margin: 24px 0 8px;">Primary goals</h3>
        <p>${formatMultiline(data.primaryGoals)}</p>
        <h3 style="margin: 24px 0 8px;">Target users</h3>
        <p>${formatMultiline(data.targetUsers)}</p>
        <h3 style="margin: 24px 0 8px;">Key features</h3>
        <p>${formatMultiline(data.keyFeatures)}</p>
        <h3 style="margin: 24px 0 8px;">Integrations</h3>
        <p>${formatMultiline(data.integrations)}</p>
        <h3 style="margin: 24px 0 8px;">Reference links</h3>
        <p>${formatMultiline(data.referenceLinks)}</p>
        <h3 style="margin: 24px 0 8px;">Additional notes</h3>
        <p>${formatMultiline(data.additionalNotes)}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend project intake email failed", {
      name: error.name,
      message: error.message,
    });

    return Response.json(
      { error: "Unable to send your project brief right now." },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
