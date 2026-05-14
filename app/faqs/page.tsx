import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircleQuestion } from "lucide-react";
import FAQ from "../components/FAQ";

export const metadata: Metadata = {
  title: "FAQs | ABNIXX Tech",
  description:
    "Find answers to common questions about ABNIXX Tech services, project timelines, process, and how to get started.",
};

export default function FAQsPage() {
  return (
    <main className="bg-white text-zinc-950 transition-colors duration-500 dark:bg-slate-950 dark:text-white">
      <section className="relative min-h-[62vh] overflow-hidden px-6 pb-20 pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0d_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0d_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
        <div className="absolute -top-32 left-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/15 blur-[140px] dark:bg-blue-500/20" />
        <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-cyan-400/15 blur-[120px] dark:bg-cyan-500/15" />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-blue-200">
            <MessageCircleQuestion className="h-4 w-4" />
            FAQs
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-7xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-gray-300">
            Everything you need to know about working with ABNIXX Tech, from
            timelines and services to our process for building scalable digital
            solutions.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Start a Conversation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <FAQ />
    </main>
  );
}
