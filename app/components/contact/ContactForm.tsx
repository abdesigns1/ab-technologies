"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, MessageSquare, Phone, User } from "lucide-react";

const inputBaseClass =
  "mt-2 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 shadow-sm shadow-slate-950/5 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-800 dark:bg-zinc-950/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-blue-400";

export default function ContactForm() {
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

      <form className="relative space-y-5">
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
              className={inputBaseClass}
            />
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
            className={inputBaseClass}
          />
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
            className={`${inputBaseClass} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:shadow-blue-950/40 dark:focus:ring-offset-zinc-900"
        >
          <span className="relative z-10">Send Message</span>
          <ArrowRight className="relative z-10 h-5 w-5 transition group-hover:translate-x-1" />
          <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-500 opacity-0 transition group-hover:opacity-100" />
        </button>
      </form>
    </motion.div>
  );
}
