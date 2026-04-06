"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const techStack = [
  { name: "React", logo: "/tech/react.svg" },
  { name: "Next.js", logo: "/tech/nextjs.svg" },
  { name: "TypeScript", logo: "/tech/typescript.svg" },
  { name: "Tailwind CSS", logo: "/tech/tailwind.svg" },
  { name: "Node.js", logo: "/tech/node.svg" },
  { name: "MongoDB", logo: "/tech/mongodb.svg" },
  { name: "PostgreSQL", logo: "/tech/postgres.svg" },
  { name: "Figma", logo: "/tech/figma.svg" },
  { name: "AWS", logo: "/tech/aws.svg" },
  { name: "Vercel", logo: "/tech/vercel.svg" },
];

export default function TechStack() {
  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-indigo-600/30 blur-[140px]" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-purple-600/30 blur-[140px]" />

      {/* Header */}
      <div className="relative max-w-4xl mx-auto text-center mb-16 px-6">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 text-indigo-400 text-sm"
        >
          Our Tech Stack
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-white"
        >
          Technologies We Build With
        </motion.h2>

        <p className="mt-4 text-gray-400">
          We use proven, scalable, and future-ready technologies to build
          high-performing digital products.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        <motion.div
          className="flex gap-16 py-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center min-w-[120px]"
            >
              <div className="relative w-16 h-16 mb-3 grayscale group-hover:grayscale-0 transition">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs text-gray-400 group-hover:text-indigo-400 transition">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
