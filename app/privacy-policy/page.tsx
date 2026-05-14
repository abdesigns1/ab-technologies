import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ABNIXX Tech",
  description:
    "Learn how ABNIXX Tech collects, uses, protects, and handles information shared through our website and project enquiries.",
};

const policySections = [
  {
    title: "Information We Collect",
    body: [
      "We may collect information you choose to share with us, including your name, email address, phone number, company details, project requirements, and messages submitted through our contact forms.",
      "We may also collect basic technical information such as device type, browser type, pages visited, referring pages, and general usage data to help us understand and improve the website experience.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "We use your information to respond to enquiries, discuss potential projects, provide requested services, improve our website, manage client relationships, and communicate about relevant ABNIXX Tech services.",
      "We do not sell your personal information. We only use it for legitimate business purposes connected to your interaction with ABNIXX Tech.",
    ],
  },
  {
    title: "Project And Client Information",
    body: [
      "When you share project details, brand materials, files, requirements, or business information with us, we treat that information as confidential and use it only to evaluate, plan, deliver, or support the requested work.",
      "If a project requires additional confidentiality terms, those terms can be documented separately in a proposal, statement of work, or non-disclosure agreement.",
    ],
  },
  {
    title: "Cookies And Analytics",
    body: [
      "Our website may use cookies or similar technologies to keep the site functional, understand page performance, and improve user experience.",
      "You can control cookies through your browser settings. Some website features may not work as intended if cookies are disabled.",
    ],
  },
  {
    title: "Information Sharing",
    body: [
      "We may share information with trusted service providers who help us operate our website, communicate with users, manage projects, or deliver services. These providers are expected to protect the information they process.",
      "We may also disclose information if required by law, legal process, security needs, or to protect the rights and safety of ABNIXX Tech, our clients, or others.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We use reasonable technical and organizational measures to protect information from unauthorized access, misuse, loss, or disclosure.",
      "No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we work to handle information responsibly.",
    ],
  },
  {
    title: "Your Choices",
    body: [
      "You may contact us to request access, correction, or deletion of personal information you have shared with us, subject to any legal or business recordkeeping requirements.",
      "You may also ask us to stop sending non-essential communications.",
    ],
  },
  {
    title: "Policy Updates",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will update the date on this page so visitors can review the latest version.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-zinc-950 dark:text-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      <div className="absolute -top-28 left-10 h-80 w-80 rounded-full bg-blue-200/60 blur-[130px] dark:bg-blue-700/20" />
      <div className="absolute right-0 top-72 h-80 w-80 rounded-full bg-cyan-200/40 blur-[130px] dark:bg-cyan-500/10" />

      <section className="relative mx-auto max-w-4xl px-6 pb-24 pt-36 sm:pt-40 lg:pb-32">
        <span className="inline-flex rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300">
          Privacy Policy
        </span>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl">
          How we protect the information you share with us
        </h1>

        <p className="mt-5 text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
          This Privacy Policy explains how ABNIXX Tech collects, uses, and
          protects information when you visit our website, contact us, or work
          with us on digital products and technology services.
        </p>

        <div className="mt-8 rounded-lg border border-slate-200 bg-white/80 p-5 text-sm text-slate-600 shadow-sm shadow-slate-950/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
          <p className="text-sm text-slate-600 dark:text-zinc-300">
            Last updated: May 14, 2026
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {policySections.map((section) => (
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
            Contact Us
          </h2>
          <p className="mt-3 text-base leading-8 text-slate-600 dark:text-zinc-300">
            For privacy questions or requests, contact us through our{" "}
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
