"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white text-zinc-900 transition-colors duration-500 dark:bg-zinc-950 dark:text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={100}
        />

        {/* Overlay - adapts to theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/95 transition-colors duration-500 dark:from-zinc-950/90 dark:via-zinc-950/80 dark:to-zinc-950/95" />

        {/* Additional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20 transition-colors duration-500 dark:bg-black/40" />
      </div>

      {/* Background Glow - Adjusted for theme */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-400/25 blur-[160px] transition-colors duration-500 dark:bg-blue-600/20" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-cyan-300/25 blur-[160px] transition-colors duration-500 dark:bg-blue-600/20" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge with theme support */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-600 backdrop-blur-sm transition-colors duration-300 dark:border-blue-800/50 dark:bg-blue-950/50 dark:text-blue-400">
            <Sparkles className="w-4 h-4" />
            Our Services
          </span>
        </motion.div>

        {/* Heading with theme support */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          <span className="block text-zinc-900 transition-colors duration-300 dark:text-white">
            Building Digital Products
          </span>
          <span className="bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent dark:from-blue-400 dark:to-cyan-300">
            That Scale & Convert
          </span>
        </motion.h1>

        {/* Description with theme support */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-zinc-700 backdrop-blur-sm transition-colors duration-300 dark:text-zinc-300"
        >
          From strategy to execution, ABNIXX Tech delivers modern web, UI/UX,
          branding, and e-commerce solutions for ambitious teams.
        </motion.p>

        {/* Optional: Add CTA buttons for better engagement */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow-lg shadow-blue-900/20 transition-all duration-300 hover:shadow-xl dark:from-blue-600 dark:to-cyan-500 dark:shadow-blue-950/40"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl border border-zinc-300 font-semibold text-zinc-700 backdrop-blur-sm transition-all duration-300 hover:bg-white/80 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800/50"
          >
            Learn More
          </motion.button>
        </motion.div> */}

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-zinc-300 flex justify-center backdrop-blur-sm dark:border-zinc-700"
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full mt-2 bg-zinc-600 dark:bg-zinc-400"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
