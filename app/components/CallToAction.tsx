"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

export default function CallToAction() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/CTA Image.png" // Replace with your image path
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#020617]/70 via-[#020617]/75 to-[#020617]/70" />
      </div>

      {/* Glow Effects - Adjusted opacity for better visibility with background */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[160px] z-10" />
      <div className="absolute bottom-0 right-32 w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-[140px] z-10" />

      <div className="relative z-20 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-16 text-center"
        >
          {/* Caption */}
          <p className="flex items-center justify-center gap-2 text-blue-500 uppercase tracking-[0.35em] text-sm">
            <Sparkles className="w-4 h-4" />
            Ready to Build the Future?
          </p>

          {/* Headline */}
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Let&apos;s Turn Your Idea <br />
            <span className="text-blue-500 glow-blue">
              Into Intelligent Technology
            </span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            Whether you&apos;re launching a product, scaling a platform, or
            reimagining your digital presence, ABNIXX Tech is ready to engineer
            solutions that move you ahead.
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
            >
              Start a Project
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition backdrop-blur-sm"
            >
              View Our Services
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
