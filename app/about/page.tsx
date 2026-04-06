"use client";

import { motion } from "framer-motion";
import CallToAction from "../components/CallToAction";

export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO */}
      <section className="relative py-50 px-6 max-w-7xl mx-auto">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/30 blur-[160px]" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 text-blue-400 text-sm">
            About Us
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            We Build Digital Products <br />
            That <span className="text-blue-400">Actually Work</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg">
            AB-Tech is a digital-first agency focused on crafting scalable,
            user-centered experiences that help businesses grow with clarity and
            confidence.
          </p>
        </motion.div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-10 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-gray-400 leading-relaxed">
            We are a team of designers, developers, and problem-solvers who
            believe great products are built at the intersection of design,
            technology, and strategy.
            <br />
            <br />
            From startups to growing businesses, we partner closely with our
            clients to turn ideas into impactful digital experiences.
          </p>
        </motion.div>

        {/* Visual Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
        >
          <div className="h-64 rounded-xl bg-linear-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center text-gray-300">
            🚀 Design • Code • Strategy
          </div>
        </motion.div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          What We Believe In
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Clarity First",
              desc: "We simplify complex problems into clear, actionable solutions.",
            },
            {
              title: "Design with Purpose",
              desc: "Every pixel and interaction serves a real user need.",
            },
            {
              title: "Build for Scale",
              desc: "We engineer products that grow with your business.",
            },
            {
              title: "Build for Scale",
              desc: "We engineer products that grow with your business.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-indigo-500/40 transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CallToAction />
    </main>
  );
}
