"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";

const inputBaseClass =
  "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm shadow-slate-950/5 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-blue-400";

type FormFields = {
  fullName: string;
  phoneNumber: string;
  email: string;
  projectType: string;
  message: string;
  acceptedTerms: boolean;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

const initialFormFields: FormFields = {
  fullName: "",
  phoneNumber: "",
  email: "",
  projectType: "",
  message: "",
  acceptedTerms: false,
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [formFields, setFormFields] = useState<FormFields>(initialFormFields);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formFields.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formFields.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(formFields.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formFields.message.trim()) {
      nextErrors.message = "Please tell us a little about your project.";
    } else if (formFields.message.trim().length < 10) {
      nextErrors.message = "Please add at least 10 characters.";
    }

    if (!formFields.acceptedTerms) {
      nextErrors.acceptedTerms =
        "Please accept the terms and conditions before submitting.";
    }

    return nextErrors;
  };

  const updateField = (
    field: keyof FormFields,
    value: string | boolean,
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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitStatus("idle");
      return;
    }

    setSubmitStatus("submitting");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formFields),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message.");
      }

      setSubmitStatus("success");
      setSubmitMessage(
        "Thanks. Your message has been sent, and we will get back to you soon.",
      );
      setFormFields(initialFormFields);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error
          ? error.message
          : "Unable to send your message right now.",
      );
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-lg border border-slate-200 bg-white/85 p-6 shadow-2xl shadow-slate-950/10 backdrop-blur-xl transition-colors duration-500 dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-black/30 sm:p-8"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-blue-100 blur-3xl dark:bg-blue-600/10" />

      <div className="relative mb-8">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Start a conversation
        </span>
        <h2 className="mt-3 text-2xl font-bold text-slate-950 dark:text-white sm:text-3xl">
          Tell us what you need
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-zinc-400">
          Share a few details and we&apos;ll help shape the next step.
        </p>
      </div>

      <form className="relative space-y-5" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="full-name"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-zinc-300"
            >
              <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Full Name
            </label>
            <input
              id="full-name"
              name="fullName"
              type="text"
              placeholder="John Doe"
              value={formFields.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? "full-name-error" : undefined}
              className={inputBaseClass}
            />
            {errors.fullName && (
              <p
                id="full-name-error"
                className="mt-2 flex items-center gap-2 text-xs text-red-600 dark:text-red-400"
              >
                <AlertCircle className="h-3.5 w-3.5" />
                {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone-number"
              className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-zinc-300"
            >
              <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              Phone Number
            </label>
            <input
              id="phone-number"
              name="phoneNumber"
              type="tel"
              placeholder="+1 234 567 890"
              value={formFields.phoneNumber}
              onChange={(event) =>
                updateField("phoneNumber", event.target.value)
              }
              className={inputBaseClass}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email-address"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-zinc-300"
          >
            <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Email Address
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            placeholder="you@example.com"
            value={formFields.email}
            onChange={(event) => updateField("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-address-error" : undefined}
            className={inputBaseClass}
          />
          {errors.email && (
            <p
              id="email-address-error"
              className="mt-2 flex items-center gap-2 text-xs text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="project-type"
            className="text-sm font-medium text-slate-700 dark:text-zinc-300"
          >
            What can we help with?
          </label>
          <input
            id="project-type"
            name="projectType"
            type="text"
            placeholder="Web app, mobile app, AI solution, UI/UX..."
            value={formFields.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
            className={inputBaseClass}
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-zinc-300"
          >
            <MessageSquare className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your project, goals, timeline, or question."
            value={formFields.message}
            onChange={(event) => updateField("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className={`${inputBaseClass} resize-none`}
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-2 flex items-center gap-2 text-xs text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.message}
            </p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50/80 p-4 text-sm leading-6 text-slate-600 dark:border-zinc-800 dark:bg-zinc-950/40 dark:text-zinc-300">
            <input
              id="accepted-terms"
              name="acceptedTerms"
              type="checkbox"
              checked={formFields.acceptedTerms}
              onChange={(event) =>
                updateField("acceptedTerms", event.target.checked)
              }
              aria-invalid={Boolean(errors.acceptedTerms)}
              aria-describedby={
                errors.acceptedTerms ? "accepted-terms-error" : undefined
              }
              className="mt-1 h-4 w-4 shrink-0 rounded border-slate-300 text-blue-600 accent-blue-600 focus:ring-blue-500 dark:border-zinc-700"
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
          {errors.acceptedTerms && (
            <p
              id="accepted-terms-error"
              className="mt-2 flex items-center gap-2 text-xs text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-3.5 w-3.5" />
              {errors.acceptedTerms}
            </p>
          )}
        </div>

        {submitStatus === "success" && (
          <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm leading-6 text-emerald-900 dark:text-emerald-200">
              {submitMessage}
            </p>
          </div>
        )}

        {submitStatus === "error" && (
          <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-900 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-200">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm leading-6 text-red-900 dark:text-red-200">
              {submitMessage}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={submitStatus === "submitting"}
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 dark:shadow-blue-950/40 dark:focus:ring-offset-zinc-900"
        >
          <span className="relative z-10">
            {submitStatus === "submitting" ? "Sending..." : "Send Message"}
          </span>
          <ArrowRight className="relative z-10 h-5 w-5 transition group-hover:translate-x-1" />
          <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-500 opacity-0 transition group-hover:opacity-100" />
        </button>
      </form>
    </motion.div>
  );
}
