"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Cloud,
  Code2,
  Database,
  Layers,
  Palette,
  PenTool,
  Server,
  Smartphone,
} from "lucide-react";

const techStack = [
  {
    name: "Frontend",
    icon: Code2,
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    name: "Backend",
    icon: Server,
    tools: ["Node.js", "REST APIs", "Server Actions", "Auth"],
  },
  {
    name: "Mobile",
    icon: Smartphone,
    tools: ["React Native", "Expo", "PWA", "App integrations"],
  },
  {
    name: "Database",
    icon: Database,
    tools: ["PostgreSQL", "MongoDB", "Supabase", "Prisma"],
  },
  {
    name: "Cloud & Deploy",
    icon: Cloud,
    tools: ["Vercel", "AWS", "CI/CD", "Performance"],
  },
  {
    name: "Design",
    icon: PenTool,
    tools: ["Figma", "UI Systems", "Wireframes", "Prototypes"],
  },
  {
    name: "Brand & Visuals",
    icon: Palette,
    tools: ["Identity", "Motion", "Creative Direction", "Assets"],
  },
  {
    name: "Integrations",
    icon: Braces,
    tools: ["Payments", "Analytics", "CRMs", "Automation"],
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28 transition-colors duration-500 dark:bg-zinc-950">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />
      <div className="absolute -left-28 top-0 h-80 w-80 rounded-full bg-blue-200/60 blur-[130px] dark:bg-blue-700/20" />
      <div className="absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-cyan-200/50 blur-[130px] dark:bg-cyan-500/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300"
          >
            <Layers className="h-4 w-4" />
            Our Technology Stack
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-5 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white md:text-5xl"
          >
            Tools we use to build reliable digital products
          </motion.h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-zinc-300">
            From design systems to production deployment, we choose practical,
            scalable technologies that help teams launch faster and maintain
            with confidence.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;

            return (
              <motion.div
                key={stack.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group rounded-lg border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-950/5 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/10 dark:border-zinc-800 dark:bg-zinc-900/75 dark:shadow-black/20 dark:hover:border-blue-700"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-950/60 dark:text-blue-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950 dark:text-white">
                  {stack.name}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {stack.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 dark:border-zinc-700 dark:bg-zinc-950/60 dark:text-zinc-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
