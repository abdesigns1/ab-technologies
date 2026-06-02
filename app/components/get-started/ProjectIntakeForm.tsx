"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ClipboardList,
  Layers3,
  Loader2,
  Send,
  UserRound,
} from "lucide-react";

const inputBaseClass =
  "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm shadow-slate-950/5 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-blue-400";

const checkboxClass =
  "h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-blue-500 dark:border-zinc-700";

const serviceOptions = [
  "Website design",
  "Web application",
  "Mobile application",
  "UI/UX design",
  "AI automation",
  "Brand identity",
  "E-commerce",
  "Maintenance",
];

const stepMeta = [
  {
    title: "Contact",
    eyebrow: "Step 1",
    icon: UserRound,
  },
  {
    title: "Project",
    eyebrow: "Step 2",
    icon: BriefcaseBusiness,
  },
  {
    title: "Scope",
    eyebrow: "Step 3",
    icon: Layers3,
  },
  {
    title: "Timeline",
    eyebrow: "Step 4",
    icon: CalendarDays,
  },
  {
    title: "Review",
    eyebrow: "Step 5",
    icon: ClipboardList,
  },
];

type FormFields = {
  fullName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  website: string;
  role: string;
  projectType: string;
  projectStage: string;
  services: string[];
  projectSummary: string;
  primaryGoals: string;
  targetUsers: string;
  keyFeatures: string;
  integrations: string;
  referenceLinks: string;
  budgetRange: string;
  timeline: string;
  launchDate: string;
  decisionMakers: string;
  hasBrandAssets: string;
  additionalNotes: string;
  acceptedTerms: boolean;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialFormFields: FormFields = {
  fullName: "",
  email: "",
  phoneNumber: "",
  companyName: "",
  website: "",
  role: "",
  projectType: "",
  projectStage: "",
  services: [],
  projectSummary: "",
  primaryGoals: "",
  targetUsers: "",
  keyFeatures: "",
  integrations: "",
  referenceLinks: "",
  budgetRange: "",
  timeline: "",
  launchDate: "",
  decisionMakers: "",
  hasBrandAssets: "",
  additionalNotes: "",
  acceptedTerms: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ProjectIntakeForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formFields, setFormFields] = useState<FormFields>(initialFormFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const progress = useMemo(
    () => Math.round(((currentStep + 1) / stepMeta.length) * 100),
    [currentStep],
  );

  const updateField = (
    field: keyof FormFields,
    value: string | boolean | string[],
  ) => {
    setFormFields((currentFields) => ({
      ...currentFields,
      [field]: value,
    }));
    setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: undefined,
    }));
    setSubmitStatus("idle");
    setSubmitMessage("");
  };

  const toggleService = (service: string) => {
    const nextServices = formFields.services.includes(service)
      ? formFields.services.filter((item) => item !== service)
      : [...formFields.services, service];

    updateField("services", nextServices);
  };

  const validateStep = (step: number) => {
    const nextErrors: FormErrors = {};

    if (step === 0) {
      if (!formFields.fullName.trim()) {
        nextErrors.fullName = "Please enter your full name.";
      }

      if (!formFields.email.trim()) {
        nextErrors.email = "Please enter your email address.";
      } else if (!emailPattern.test(formFields.email.trim())) {
        nextErrors.email = "Please enter a valid email address.";
      }
    }

    if (step === 1) {
      if (!formFields.projectType.trim()) {
        nextErrors.projectType = "Please select a project type.";
      }

      if (formFields.services.length === 0) {
        nextErrors.services = "Please choose at least one service.";
      }

      if (formFields.projectSummary.trim().length < 20) {
        nextErrors.projectSummary =
          "Please describe the project in at least 20 characters.";
      }
    }

    if (step === 2) {
      if (formFields.primaryGoals.trim().length < 15) {
        nextErrors.primaryGoals =
          "Please add at least one clear project goal.";
      }

      if (formFields.keyFeatures.trim().length < 15) {
        nextErrors.keyFeatures =
          "Please list the main features or pages you need.";
      }
    }

    if (step === 3) {
      if (!formFields.budgetRange.trim()) {
        nextErrors.budgetRange = "Please select a budget range.";
      }

      if (!formFields.timeline.trim()) {
        nextErrors.timeline = "Please select a preferred timeline.";
      }
    }

    if (step === 4 && !formFields.acceptedTerms) {
      nextErrors.acceptedTerms =
        "Please accept the terms and privacy policy before submitting.";
    }

    return nextErrors;
  };

  const goToNextStep = () => {
    const validationErrors = validateStep(currentStep);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setCurrentStep((step) => Math.min(step + 1, stepMeta.length - 1));
  };

  const goToPreviousStep = () => {
    setErrors({});
    setCurrentStep((step) => Math.max(step - 1, 0));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const allErrors = stepMeta.reduce<FormErrors>(
      (nextErrors, _step, index) => ({
        ...nextErrors,
        ...validateStep(index),
      }),
      {},
    );

    setErrors(allErrors);

    if (Object.keys(allErrors).length > 0) {
      const firstInvalidStep = stepMeta.findIndex(
        (_step, index) => Object.keys(validateStep(index)).length > 0,
      );
      setCurrentStep(firstInvalidStep >= 0 ? firstInvalidStep : currentStep);
      return;
    }

    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/project-intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFields),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your project brief.");
      }

      setSubmitStatus("success");
      setSubmitMessage(
        "Thanks. Your project brief has been sent to our team.",
      );
      setFormFields(initialFormFields);
      setCurrentStep(0);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your project brief right now.",
      );
    }
  };

  const currentStepMeta = stepMeta[currentStep];
  const StepIcon = currentStepMeta.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="rounded-lg border border-slate-200 bg-white/90 p-5 shadow-2xl shadow-slate-950/10 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/85 dark:shadow-black/30 sm:p-7"
    >
      <div className="mb-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              {currentStepMeta.eyebrow}
            </span>
            <h2 className="mt-2 flex items-center gap-3 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                <StepIcon className="h-5 w-5" />
              </span>
              {currentStepMeta.title}
            </h2>
          </div>
          <span className="text-sm font-semibold text-slate-500 dark:text-zinc-400">
            {progress}% complete
          </span>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-zinc-800">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="mt-5 grid grid-cols-5 gap-2">
          {stepMeta.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === currentStep;
            const isComplete = index < currentStep;

            return (
              <button
                key={step.title}
                type="button"
                onClick={() => {
                  if (index <= currentStep) {
                    setCurrentStep(index);
                    setErrors({});
                  }
                }}
                className={`flex min-h-11 items-center justify-center rounded-lg border text-xs font-semibold transition ${
                  isActive
                    ? "border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950/50 dark:text-blue-200"
                    : isComplete
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200"
                      : "border-slate-200 bg-slate-50 text-slate-400 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-500"
                }`}
                aria-label={step.title}
              >
                {isComplete ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Icon className="h-4 w-4" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {currentStep === 0 && (
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                id="full-name"
                label="Full name"
                value={formFields.fullName}
                onChange={(value) => updateField("fullName", value)}
                error={errors.fullName}
                placeholder="John Doe"
              />
              <TextField
                id="email-address"
                label="Email address"
                type="email"
                value={formFields.email}
                onChange={(value) => updateField("email", value)}
                error={errors.email}
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                id="phone-number"
                label="Phone number"
                type="tel"
                value={formFields.phoneNumber}
                onChange={(value) => updateField("phoneNumber", value)}
                placeholder="+1 234 567 890"
              />
              <TextField
                id="company-name"
                label="Company name"
                value={formFields.companyName}
                onChange={(value) => updateField("companyName", value)}
                placeholder="Company or organization"
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                id="website"
                label="Current website"
                value={formFields.website}
                onChange={(value) => updateField("website", value)}
                placeholder="https://example.com"
              />
              <TextField
                id="role"
                label="Your role"
                value={formFields.role}
                onChange={(value) => updateField("role", value)}
                placeholder="Founder, manager, product lead..."
              />
            </div>
          </div>
        )}

        {currentStep === 1 && (
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                id="project-type"
                label="Project type"
                value={formFields.projectType}
                onChange={(value) => updateField("projectType", value)}
                error={errors.projectType}
                options={[
                  "New build",
                  "Redesign",
                  "Feature expansion",
                  "Automation",
                  "Consulting",
                  "Maintenance",
                ]}
              />
              <SelectField
                id="project-stage"
                label="Project stage"
                value={formFields.projectStage}
                onChange={(value) => updateField("projectStage", value)}
                options={[
                  "Idea stage",
                  "Requirements ready",
                  "Designs ready",
                  "Existing product",
                  "Not sure yet",
                ]}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-zinc-300">
                Services needed
              </label>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {serviceOptions.map((service) => (
                  <label
                    key={service}
                    className="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50/80 p-3 text-sm font-medium text-slate-700 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300"
                  >
                    <input
                      type="checkbox"
                      checked={formFields.services.includes(service)}
                      onChange={() => toggleService(service)}
                      className={checkboxClass}
                    />
                    {service}
                  </label>
                ))}
              </div>
              <FieldError id="services-error" message={errors.services} />
            </div>

            <TextareaField
              id="project-summary"
              label="Project summary"
              value={formFields.projectSummary}
              onChange={(value) => updateField("projectSummary", value)}
              error={errors.projectSummary}
              placeholder="What are you trying to build or improve?"
            />
          </div>
        )}

        {currentStep === 2 && (
          <div className="space-y-5">
            <TextareaField
              id="primary-goals"
              label="Primary goals"
              value={formFields.primaryGoals}
              onChange={(value) => updateField("primaryGoals", value)}
              error={errors.primaryGoals}
              placeholder="Example: increase bookings, launch MVP, automate internal workflow..."
            />
            <TextareaField
              id="target-users"
              label="Target users or audience"
              value={formFields.targetUsers}
              onChange={(value) => updateField("targetUsers", value)}
              placeholder="Who will use this product or website?"
            />
            <TextareaField
              id="key-features"
              label="Key features or pages"
              value={formFields.keyFeatures}
              onChange={(value) => updateField("keyFeatures", value)}
              error={errors.keyFeatures}
              placeholder="List must-have features, pages, dashboards, forms, payments, accounts..."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              <TextareaField
                id="integrations"
                label="Integrations"
                value={formFields.integrations}
                onChange={(value) => updateField("integrations", value)}
                placeholder="Stripe, Paystack, CRM, Google, APIs..."
              />
              <TextareaField
                id="reference-links"
                label="Reference links"
                value={formFields.referenceLinks}
                onChange={(value) => updateField("referenceLinks", value)}
                placeholder="Competitors, inspiration, docs, design links..."
              />
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                id="budget-range"
                label="Budget range"
                value={formFields.budgetRange}
                onChange={(value) => updateField("budgetRange", value)}
                error={errors.budgetRange}
                options={[
                  "Under $1,000",
                  "$1,000 - $3,000",
                  "$3,000 - $7,500",
                  "$7,500 - $15,000",
                  "$15,000+",
                  "Not sure yet",
                ]}
              />
              <SelectField
                id="timeline"
                label="Preferred timeline"
                value={formFields.timeline}
                onChange={(value) => updateField("timeline", value)}
                error={errors.timeline}
                options={[
                  "ASAP",
                  "2 - 4 weeks",
                  "1 - 3 months",
                  "3 - 6 months",
                  "Flexible",
                ]}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <TextField
                id="launch-date"
                label="Target launch date"
                type="date"
                value={formFields.launchDate}
                onChange={(value) => updateField("launchDate", value)}
              />
              <SelectField
                id="has-brand-assets"
                label="Brand assets ready?"
                value={formFields.hasBrandAssets}
                onChange={(value) => updateField("hasBrandAssets", value)}
                options={[
                  "Yes, ready",
                  "Partially ready",
                  "No, we need help",
                  "Not sure",
                ]}
              />
            </div>

            <TextareaField
              id="decision-makers"
              label="Decision makers and approval process"
              value={formFields.decisionMakers}
              onChange={(value) => updateField("decisionMakers", value)}
              placeholder="Who should be involved in estimates, approvals, and kickoff?"
            />
          </div>
        )}

        {currentStep === 4 && (
          <div className="space-y-5">
            <TextareaField
              id="additional-notes"
              label="Anything else we should know?"
              value={formFields.additionalNotes}
              onChange={(value) => updateField("additionalNotes", value)}
              placeholder="Risks, constraints, must-haves, preferences, or questions."
            />

            <div className="rounded-lg border border-slate-200 bg-slate-50/80 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
              <h3 className="text-base font-semibold text-slate-950 dark:text-white">
                Brief summary
              </h3>
              <dl className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-zinc-300 sm:grid-cols-2">
                <SummaryItem label="Name" value={formFields.fullName} />
                <SummaryItem label="Email" value={formFields.email} />
                <SummaryItem label="Project type" value={formFields.projectType} />
                <SummaryItem
                  label="Services"
                  value={
                    formFields.services.length
                      ? formFields.services.join(", ")
                      : ""
                  }
                />
                <SummaryItem label="Budget" value={formFields.budgetRange} />
                <SummaryItem label="Timeline" value={formFields.timeline} />
              </dl>
            </div>

            <div>
              <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-zinc-300">
                <input
                  id="accepted-terms"
                  name="acceptedTerms"
                  type="checkbox"
                  checked={formFields.acceptedTerms}
                  onChange={(event) =>
                    updateField("acceptedTerms", event.target.checked)
                  }
                  className={`${checkboxClass} mt-1`}
                  aria-invalid={Boolean(errors.acceptedTerms)}
                  aria-describedby={
                    errors.acceptedTerms ? "accepted-terms-error" : undefined
                  }
                />
                <span>
                  I agree to ABNIXX Tech&apos;s{" "}
                  <Link
                    href="/terms-of-service"
                    className="font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
                  >
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              <FieldError
                id="accepted-terms-error"
                message={errors.acceptedTerms}
              />
            </div>
          </div>
        )}

        {submitStatus === "success" && (
          <StatusMessage type="success" message={submitMessage} />
        )}

        {submitStatus === "error" && (
          <StatusMessage type="error" message={submitMessage} />
        )}

        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={goToPreviousStep}
            disabled={currentStep === 0 || submitStatus === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-blue-700 dark:hover:text-blue-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          {currentStep < stepMeta.length - 1 ? (
            <button
              type="button"
              onClick={goToNextStep}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:shadow-blue-950/40 dark:focus:ring-offset-zinc-900"
            >
              Continue
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitStatus === "submitting"}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 dark:shadow-blue-950/40 dark:focus:ring-offset-zinc-900"
            >
              {submitStatus === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Submit project brief
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </motion.div>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-zinc-300"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputBaseClass}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  onChange,
  error,
  options,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  options: string[];
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-zinc-300"
      >
        {label}
      </label>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={inputBaseClass}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function TextareaField({
  id,
  label,
  value,
  onChange,
  error,
  placeholder,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="text-sm font-medium text-slate-700 dark:text-zinc-300"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={4}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${inputBaseClass} resize-y`}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p
      id={id}
      className="mt-2 flex items-center gap-2 text-xs text-red-600 dark:text-red-400"
    >
      <AlertCircle className="h-3.5 w-3.5" />
      {message}
    </p>
  );
}

function StatusMessage({
  type,
  message,
}: {
  type: "success" | "error";
  message: string;
}) {
  const isSuccess = type === "success";
  const Icon = isSuccess ? CheckCircle2 : AlertCircle;

  return (
    <div
      className={`mt-6 flex items-start gap-3 rounded-lg border p-4 text-sm ${
        isSuccess
          ? "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200"
          : "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200"
      }`}
    >
      <Icon className="mt-0.5 h-5 w-5 shrink-0" />
      <p
        className={`text-sm leading-6 ${
          isSuccess
            ? "text-emerald-900 dark:text-emerald-200"
            : "text-red-900 dark:text-red-200"
        }`}
      >
        {message}
      </p>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400 dark:text-zinc-500">
        {label}
      </dt>
      <dd className="mt-1 font-medium text-slate-800 dark:text-zinc-100">
        {value || "Not provided"}
      </dd>
    </div>
  );
}
