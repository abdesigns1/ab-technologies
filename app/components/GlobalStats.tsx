"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import GlobeBackground from "./GlobeBackground";
import { useEffect, useState } from "react";

const stats = [
  { value: 1700, suffix: "+", label: "Companies" },
  { value: 100, suffix: "%", label: "Positive Feedback" },
  { value: 99000, suffix: "+", label: "Active Users" },
  { value: 60000, suffix: "+", label: "Contributors" },
];

export default function GlobalStats() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-36 overflow-hidden bg-linear-to-b from-blue-50 via-white to-gray-50 dark:from-[#020617] dark:via-[#020617] dark:to-black transition-colors duration-300">
      <GlobeBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Sub heading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-600 dark:text-blue-500 uppercase tracking-[0.3em] text-sm"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-600/30 dark:border-blue-500/30 bg-blue-50/50 dark:bg-transparent text-blue-600 dark:text-blue-400 text-sm backdrop-blur-sm">
            🌎 Worldwide Experience
          </span>
        </motion.p>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-5 text-4xl md:text-6xl font-bold text-gray-900 dark:text-white"
        >
          We Engineer Technology <br />
          <span className="text-blue-600 dark:text-blue-500 glow-blue">
            Users Truly Trust
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-400"
        >
          AB-Tech delivers secure, scalable and intelligent digital solutions —
          empowering users and businesses across the globe.
        </motion.p>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-14">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-blue-400/20 dark:bg-blue-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Stat Number */}
                <h3 className="relative text-4xl md:text-5xl font-extrabold bg-linear-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 bg-clip-text text-transparent">
                  <CountUp
                    end={stat.value}
                    duration={3}
                    separator=","
                    enableScrollSpy
                    scrollSpyDelay={100}
                  />
                  {stat.suffix}
                </h3>
              </div>

              {/* Stat Label */}
              <p className="mt-3 text-gray-600 dark:text-gray-400 uppercase tracking-wide text-sm font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Decorative bottom gradient line */}
        <div className="mt-24 h-px bg-linear-to-r from-transparent via-blue-600/30 dark:via-blue-500/30 to-transparent" />
      </div>
    </section>
  );
}
