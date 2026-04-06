"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ServicesCTA() {
  return (
    <section className="py-32 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold text-white"
      >
        Ready to Build Something Amazing?
      </motion.h2>

      <p className="mt-4 text-gray-300 max-w-xl mx-auto">
        Let’s turn your idea into a high-impact digital product.
      </p>

      <Link
        href="/contact"
        className="inline-block mt-8 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition"
      >
        Start Your Project →
      </Link>
    </section>
  );
}
