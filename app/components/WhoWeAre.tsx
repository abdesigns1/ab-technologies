"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Sparkles,
  Layers,
  Eye,
  ArrowBigDown,
  TargetIcon,
} from "lucide-react";

export default function WhoWeAre() {
  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-500 uppercase tracking-[0.3em] text-sm">
            <span className="inline-block mb-4 px-4 py-1 rounded-full border border-blue-500/30 text-blue-400 text-sm">
              🚀 Who we are
            </span>
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Building the Future <br />
            <span className="text-blue-500 glow-blue">
              One Intelligent Solution at a Time
            </span>
          </h2>

          <p className="mt-8 text-gray-400 leading-relaxed max-w-xl">
            At <span className="text-white font-semibold">AB-Tech</span>, we are
            a forward-thinking technology company driven by innovation,
            precision, and purpose.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            We design and engineer scalable digital solutions, intuitive user
            experiences, and intelligent systems that help businesses evolve in
            a fast-changing digital world.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed max-w-xl">
            Our approach blends human-centered design, cutting-edge engineering,
            and futuristic thinking ensuring every solution is future-ready.
          </p>
        </motion.div>

        {/* VISUAL SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-6">
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/50 transition"
              >
                <item.icon className="w-8 h-8 text-blue-500 mb-4 group-hover:rotate-6 transition" />
                <h4 className="text-white font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: Eye,
    title: "Vision:",
    desc: "Building innovative digital solutions that drive growth and create impact.",
  },
  {
    icon: TargetIcon,
    title: "Mission:",
    desc: "To deliver user-focused design and technology solutions that help brands succeed in the digital world.",
  },
  {
    icon: Layers,
    title: "Core Values:",
    desc: "Innovation • Quality • Integrity • Collaboration • Growth • Reliability",
  },
  {
    icon: Cpu,
    title: "Future-Ready Systems",
    desc: "Engineered for growth, security, and long-term success.",
  },
];
