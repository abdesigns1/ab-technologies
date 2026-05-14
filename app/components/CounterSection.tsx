"use client";

import { useState } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  {
    value: 30,
    suffix: "+",
    label: "Projects Built",
    description: "Websites, dashboards, AI tools, and full-stack apps.",
  },
  {
    value: 4,
    suffix: "+",
    label: "Years and still counting",
    description: "Web development, UI/UX, and digital product design.",
  },
  {
    value: 15,
    suffix: "+",
    label: "Tech Tools Used",
    description: "React, Next.js, Tailwind, Supabase, MongoDB, Node.js.",
  },
  {
    value: 10,
    suffix: "+",
    label: "Industries Explored",
    description: "HealthTech, e-commerce, SaaS, Web3, and business tech.",
  },
];

export default function CounterSection() {
  const [startCount, setStartCount] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#030712] px-5 py-24 text-white">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.2),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_30%)]" />

      <motion.div
        className="relative mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.7 }}
        onViewportEnter={() => setStartCount(true)}
      >
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Our Impact
          </p>

          <h2 className="text-4xl font-semibold md:text-6xl">
            Building Digital Solutions With Real Experience.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:border-blue-400/60"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <h3 className="mb-4 text-5xl font-bold md:text-6xl">
                {startCount ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </h3>

              <p className="mb-2 text-lg font-semibold">{stat.label}</p>

              <p className="text-sm leading-6 text-white/60">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
