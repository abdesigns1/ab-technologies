"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import CallToAction from "../components/CallToAction";

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-500">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-linear-to-br from-blue-500/20 via-blue-500/20 to-blue-500/20 dark:from-blue-500/30 dark:via-blue-500/30 dark:to-blue-500/30 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-0 right-1/4 w-500px h-500px bg-linear-to-tl from-indigo-500/20 via-cyan-500/20 to-teal-500/20 dark:from-indigo-500/30 dark:via-cyan-500/30 dark:to-teal-500/30 rounded-full blur-3xl"
          />
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

        <motion.div
          style={{ opacity: headerOpacity }}
          className="relative z-10 max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm text-sm font-medium text-blue-600 dark:text-blue-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              About ABNIXX Tech
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-linear-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-zinc-100 dark:via-zinc-300 dark:to-zinc-100">
              Crafting Digital
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 dark:from-blue-400 dark:via-blue-400 dark:to-blue-400">
              Experiences That Matter
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            We're a digital-first agency obsessed with building products that
            don't just look good, they solve real problems, scale effortlessly,
            and create meaningful connections between brands and people.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-4"
          >
            {/* <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white dark:border-zinc-950 bg-linear-to-br from-blue-500 to-blue-300 flex items-center justify-center text-white font-bold"
                  style={{ zIndex: 10 - i }}
                >
                  {i}
                </div>
              ))}
            </div> */}
            {/* <div className="text-left">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                50+ Projects Delivered
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-500">
                Trusted by startups & enterprises
              </p>
            </div> */}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-zinc-300 dark:border-zinc-700 rounded-full p-1"
          >
            <motion.div className="w-1.5 h-1.5 bg-zinc-900 dark:bg-zinc-100 rounded-full mx-auto" />
          </motion.div>
        </motion.div>
      </section>

      {/* OUR STORY */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* TEXT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-4 block">
                Our Story
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Born from a belief that{" "}
                <span className="italic text-blue-600 dark:text-blue-400">
                  great design
                </span>{" "}
                drives business growth
              </h2>

              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  ABNIXX Tech started with a simple observation: too many
                  businesses were settling for digital products that looked good
                  but didn't perform. Beautiful interfaces with broken user
                  journeys. Websites that didn't convert. Apps that users
                  abandoned.
                </p>

                <p>
                  We knew there was a better way, one that married strategic
                  thinking, thoughtful design, and robust engineering. So we
                  built a team of people who care deeply about craft, obsess
                  over details, and measure success by real-world impact.
                </p>

                <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Today, we're proud to partner with ambitious teams who want to
                  build products that actually work.
                </p>
              </div>

              {/* STATS */}
              <div className="mt-10 grid grid-cols-3 gap-6">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* STOCK IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="relative py-32 px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-4 block">
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives Us Every Day
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
              These aren't just words on a wall—they're the principles that
              guide every decision, design, and line of code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Clarity Over Complexity",
                desc: "We believe the best solutions are often the simplest. We cut through noise and confusion to deliver experiences that just make sense.",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: "🚀",
                title: "Speed Meets Quality",
                desc: "Moving fast doesn't mean cutting corners. We ship quickly without sacrificing the craft and attention to detail that makes great products.",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: "💡",
                title: "Design with Intent",
                desc: "Every pixel, interaction, and animation exists for a reason. We don't design for awards—we design to solve problems and delight users.",
                color: "from-orange-500 to-red-500",
              },
              {
                icon: "🌱",
                title: "Built to Scale",
                desc: "Today's MVP is tomorrow's enterprise platform. We architect systems that grow with your ambitions, not against them.",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: "🤝",
                title: "Partnership Over Transactions",
                desc: "We don't just take briefs—we become an extension of your team. Your wins are our wins, and we're invested in your long-term success.",
                color: "from-indigo-500 to-purple-500",
              },
              {
                icon: "📈",
                title: "Impact Over Output",
                desc: "We measure success by outcomes, not deliverables. Beautiful mockups mean nothing if they don't move the needle for your business.",
                color: "from-pink-500 to-rose-500",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl -z-10"
                  style={{
                    background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  }}
                />
                <div className="h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center text-2xl mb-6 shadow-lg`}
                  >
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100">
                    {value.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-4 block">
              Our Process
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Bring Ideas to Life
            </h2>
          </motion.div>

          <div className="space-y-24">
            {[
              {
                num: "01",
                title: "Discovery & Strategy",
                desc: "We start by understanding your business, users, and goals. What problems are we solving? Who are we building for? What does success look like?",
                tags: ["Research", "User Interviews", "Competitive Analysis"],
              },
              {
                num: "02",
                title: "Design & Prototyping",
                desc: "We move fast from wireframes to high-fidelity prototypes, iterating based on feedback. Our designs aren't just pretty—they're grounded in strategy and data.",
                tags: ["UI/UX Design", "Prototyping", "User Testing"],
              },
              {
                num: "03",
                title: "Development & Testing",
                desc: "We build with modern tech stacks, clean architecture, and rigorous testing. Every feature is battle-tested before it ships.",
                tags: ["Frontend", "Backend", "QA & Testing"],
              },
              {
                num: "04",
                title: "Launch & Growth",
                desc: "Launch day is just the beginning. We monitor performance, gather user feedback, and continuously optimize for better results.",
                tags: ["Deployment", "Analytics", "Optimization"],
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-start gap-12"
              >
                <div className="flex-shrink-0">
                  <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-zinc-700">
                    {step.num}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM CULTURE */}
      {/* <section className="relative py-32 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase mb-4 block">
              Join Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We're Always Looking for Talented People
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10">
              If you're passionate about design, development, or digital
              strategy—and you thrive in a collaborative, fast-paced
              environment—we'd love to hear from you.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:shadow-2xl transition-shadow"
            >
              View Open Positions →
            </motion.button>
          </motion.div>
        </div>
      </section> */}

      {/* CTA */}
      <CallToAction />
    </main>
  );
}
