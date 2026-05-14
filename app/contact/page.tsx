"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import ContactForm from "../components/contact/ContactForm";

const contactHighlights = [
  {
    icon: Mail,
    label: "Email us",
    value: "hello@abtech.dev",
    note: "For projects, partnerships, and general enquiries.",
  },
  {
    icon: MapPin,
    label: "Work with us",
    value: "Remote / Global",
    note: "We collaborate with teams across time zones.",
  },
  {
    icon: Clock,
    label: "Response time",
    value: "Within 24 hours",
    note: "You will hear back from a real person quickly.",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-zinc-950 dark:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      <div className="absolute -top-32 left-0 h-[420px] w-[420px] rounded-full bg-blue-200/60 blur-[140px] dark:bg-blue-700/20" />
      <div className="absolute right-0 top-40 h-[360px] w-[360px] rounded-full bg-cyan-200/50 blur-[130px] dark:bg-cyan-500/10" />
      <div className="absolute bottom-0 left-1/3 h-[340px] w-[340px] rounded-full bg-violet-200/45 blur-[140px] dark:bg-violet-700/10" />

      <section className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-36 sm:pt-40 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <span className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm shadow-blue-950/5 backdrop-blur dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300">
            <MessageCircle className="h-4 w-4" />
            Contact Us
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 bg-clip-text text-transparent dark:from-blue-300 dark:via-blue-400 dark:to-blue-300">
              remarkable
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
            Have a project in mind, a question, or just want to say hi? We’re
            open to ideas, collaborations, and thoughtful technology
            partnerships.
          </p>

          <div className="mt-10 grid gap-4">
            {contactHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="group flex gap-4 rounded-lg border border-slate-200 bg-white/80 p-4 shadow-sm shadow-slate-950/5 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10 dark:border-zinc-800 dark:bg-zinc-900/70 dark:shadow-black/20 dark:hover:border-blue-700"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/60 dark:text-blue-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-slate-500 dark:text-zinc-400">
                      {item.label}
                    </span>
                    <span className="mt-1 block font-semibold text-slate-950 dark:text-white">
                      {item.value}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-500 dark:text-zinc-400">
                      {item.note}
                    </span>
                  </span>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50/80 p-4 text-sm text-emerald-900 dark:border-emerald-900/50 dark:bg-emerald-950/30 dark:text-emerald-200">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" />
            <p className="text-sm leading-6 text-emerald-900 dark:text-emerald-200">
              Your message stays private and goes directly to our team.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:pt-12"
        >
          <ContactForm />
        </motion.div>
      </section>
    </main>
  );
}
