"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl"
    >
      {/* Glow border */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-indigo-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition pointer-events-none" />

      <form className="relative space-y-6">
        <div>
          <label className="text-sm text-gray-400">Full Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-500 transition"
          />
        </div>
        <div>
          <label className="text-sm text-gray-400">Phone Number</label>
          <input
            type="text"
            placeholder="Phone Number"
            className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-500 transition"
          />
        </div>
        <div>
          <label className="text-sm text-gray-400">Email Address</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-500 transition"
          />
        </div>

        <div>
          <label className="text-sm text-gray-400">Message</label>
          <textarea
            rows={5}
            placeholder="Tell us about your project..."
            className="mt-2 w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white outline-none focus:border-blue-500 transition resize-none"
          />
        </div>

        <button
          type="submit"
          className="group relative w-full overflow-hidden rounded-lg bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-500"
        >
          <span className="relative z-10">Send Message</span>
          <span className="absolute inset-0 bg-linear-to-r from-indigo-400 to-purple-500 opacity-0 group-hover:opacity-100 transition" />
        </button>
      </form>
    </motion.div>
  );
}
