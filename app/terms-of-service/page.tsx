import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ABNIXX Tech",
  description:
    "Review the terms that apply when using the ABNIXX Tech website or engaging our digital product and technology services.",
};

const termsSections = [
  {
    title: "Use Of This Website",
    body: [
      "You may use this website to learn about ABNIXX Tech, explore our services, contact our team, and request project discussions.",
      "You agree not to misuse the website, attempt unauthorized access, disrupt site functionality, submit harmful content, or use the website in a way that violates applicable laws.",
    ],
  },
  {
    title: "Our Services",
    body: [
      "ABNIXX Tech provides digital services that may include web design, UI/UX design, mobile app development, software development, brand-focused digital experiences, consulting, and related technology support.",
      "Specific project scope, deliverables, timelines, fees, revisions, ownership terms, and support responsibilities should be agreed separately in a proposal, invoice, agreement, or statement of work.",
    ],
  },
  {
    title: "Enquiries And Project Discussions",
    body: [
      "Submitting a contact form or project enquiry does not create a client relationship by itself. A client relationship begins when both parties agree to project terms in writing.",
      "Please make sure the information you submit is accurate and that you have permission to share any project, company, or third-party materials you provide.",
    ],
  },
  {
    title: "Payments And Project Terms",
    body: [
      "Payment schedules, deposits, milestones, refund terms, and late payment rules will be defined in the relevant project agreement or invoice.",
      "Unless otherwise agreed, work may be paused if required information, approvals, or payments are delayed.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "ABNIXX Tech retains rights to pre-existing tools, methods, frameworks, templates, processes, and know-how used to deliver services.",
      "Client ownership of final deliverables, source files, or project assets will be handled according to the written project terms. You remain responsible for ensuring you have rights to any content, media, trademarks, or materials you provide to us.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Projects may depend on third-party tools, hosting providers, APIs, plugins, software, payment processors, analytics services, or content platforms.",
      "Those third-party services are governed by their own terms and policies. ABNIXX Tech is not responsible for outages, changes, fees, or failures caused by third-party providers.",
    ],
  },
  {
    title: "No Guaranteed Results",
    body: [
      "We work to deliver thoughtful, high-quality digital experiences, but we do not guarantee specific business outcomes such as revenue, rankings, traffic, conversions, funding, or market adoption.",
      "Results can depend on many factors outside our control, including market conditions, business operations, product-market fit, advertising spend, and customer behavior.",
    ],
  },
  {
    title: "Limitation Of Liability",
    body: [
      "To the fullest extent permitted by law, ABNIXX Tech will not be liable for indirect, incidental, consequential, special, or punitive damages arising from use of the website or services.",
      "Any liability connected to paid project work will be limited according to the written agreement for that project, where applicable.",
    ],
  },
  {
    title: "Changes To These Terms",
    body: [
      "We may update these Terms of Service from time to time. The latest version will be posted on this page with an updated date.",
      "Continued use of the website after updates means you accept the revised terms.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-zinc-950 dark:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-blue-200/60 blur-[130px] dark:bg-blue-700/20" />
      <div className="absolute right-0 top-72 h-80 w-80 rounded-full bg-violet-200/45 blur-[130px] dark:bg-violet-700/10" />

      <section className="relative mx-auto max-w-4xl px-6 pb-24 pt-36 sm:pt-40 lg:pb-32">
        <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300">
          Terms of Service
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
          Terms for using our website and working with ABNIXX Tech
        </h1>

        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
          These Terms of Service explain the basic rules that apply when you use
          this website, contact ABNIXX Tech, or engage us for digital product
          and technology services.
        </p>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white/80 p-5 text-sm text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
          <p className="text-sm text-slate-600 dark:text-zinc-300">
            Last updated: May 14, 2026
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {termsSections.map((section) => (
            <section
              key={section.title}
              className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-950/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/75 dark:shadow-black/20 sm:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-950 dark:text-white">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-slate-600 dark:text-zinc-300"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-blue-200 bg-blue-50/80 p-6 dark:border-blue-900/50 dark:bg-blue-950/30">
          <h2 className="text-xl font-bold text-slate-950 dark:text-white">
            Questions About These Terms?
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-600 dark:text-zinc-300">
            Reach us through the{" "}
            <Link
              href="/contact"
              className="font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
            >
              contact page
            </Link>{" "}
            or email hello@abtech.dev.
          </p>
        </div>
      </section>
    </main>
  );
}
