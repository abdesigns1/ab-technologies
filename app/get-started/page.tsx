import { ClipboardCheck, FileText, MailCheck, Sparkles } from "lucide-react";
import ProjectIntakeForm from "../components/get-started/ProjectIntakeForm";

const intakeHighlights = [
  {
    icon: ClipboardCheck,
    label: "Structured brief",
    text: "Tell us the business context, scope, budget, and timeline in one place.",
  },
  {
    icon: FileText,
    label: "Clear next steps",
    text: "Your answers help us prepare a useful response before the first call.",
  },
  {
    icon: MailCheck,
    label: "Sent privately",
    text: "Your project details go directly to the ABNIXX Tech team by email.",
  },
];

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-500 dark:bg-zinc-950 dark:text-white">
      <section className="relative overflow-hidden px-6 pb-24 pt-36 sm:pt-40 lg:pb-32">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
        <div className="absolute inset-x-0 top-0 h-56 bg-linear-to-b from-blue-100/70 to-transparent dark:from-blue-950/30" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
          <div className="lg:sticky lg:top-32 lg:h-fit">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm shadow-slate-950/5 dark:border-blue-900/60 dark:bg-zinc-900/80 dark:text-blue-300">
              <Sparkles className="h-4 w-4" />
              Start Your Project
            </span>

            <h1 className="mt-6 max-w-2xl text-4xl font-extrabold leading-tight tracking-normal text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Tell us what you want to build.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 dark:text-zinc-300 sm:text-lg">
              Complete this short project intake so we can understand your
              goals, recommend the right approach, and respond with useful
              direction.
            </p>

            <div className="mt-10 grid gap-4">
              {intakeHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex gap-4 rounded-lg border border-slate-200 bg-white/85 p-4 shadow-sm shadow-slate-950/5 dark:border-zinc-800 dark:bg-zinc-900/75"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-slate-950 dark:text-white">
                        {item.label}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-500 dark:text-zinc-400">
                        {item.text}
                      </span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <ProjectIntakeForm />
        </div>
      </section>
    </main>
  );
}
