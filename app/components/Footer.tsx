"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-white/10 py-10 mb-16">
        <div className="flex whitespace-nowrap animate-marquee gap-20 text-3xl md:text-3xl font-extrabold tracking-[0.25em] text-gray-300 uppercase">
          <span>AB-TECH — BUILDING THE FUTURE</span>
          <span>DIGITAL • AI • WEB • UI/UX • BRANDING</span>
          <span>SCALABLE SOLUTIONS FOR MODERN BUSINESSES</span>
          <span>AB-TECH — BUILDING THE FUTURE</span>
          <span>DIGITAL • AI • WEB • UI/UX • BRANDING</span>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-size-60px_60px opacity-10" />

        {/* Glow */}
        <div className="absolute -top-32 left-1/3 w-420px h-420px bg-blue-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-420px h-420px bg-purple-600/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-extrabold tracking-tight">
              AB<span className="text-blue-500">-Tech</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-sm">
              We design and build intelligent digital experiences that help
              brands grow, scale, and dominate the future.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Navigation
            </h4>
            <ul className="space-y-3 text-lg font-medium">
              {["Home", "Services", "About", "Contact", "FAQs"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="transition neon-link hover:text-blue-400"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Let’s Build
            </h4>

            <p className="text-lg font-semibold">
              Ready to turn your idea into reality?
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-400 font-semibold hover:scale-105 transition-transform"
            >
              Start a Project →
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} AB-Tech. All rights reserved.</p>

          <p className="tracking-wide">Crafted with precision & code ⚡</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6"
          >
            {[
              { icon: X, href: "#" },
              { icon: Camera, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ y: -6, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-blue-500/40 hover:text-blue-400 transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
