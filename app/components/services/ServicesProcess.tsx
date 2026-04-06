"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    desc: "We understand your goals, users, and challenges.",
  },
  {
    title: "Design",
    desc: "We craft clean, modern, conversion-focused designs.",
  },
  { title: "Build", desc: "We develop scalable, high-performance solutions." },
  {
    title: "Launch",
    desc: "We test, deploy, and support your product growth.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          How We Work
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
            >
              <span className="text-indigo-400 font-bold text-lg">
                0{i + 1}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
