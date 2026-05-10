"use client";

import { motion } from "framer-motion";
import ContactForm from "../components/contact/ContactForm";

export default function ContactPage() {
  return (
    <section className="relative min-h-screen py-28 bg-black overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-indigo-600/30 blur-[160px]" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-blue-600/30 blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 text-blue-400 text-sm">
            Contact Us
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Let’s Build Something <br />
            <span className="text-blue-400">Remarkable</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-lg">
            Have a project in mind, a question, or just want to say hi? We’re
            always open to discussing ideas, collaborations, and opportunities.
          </p>

          <div className="mt-10 space-y-4 text-gray-400">
            <p>
              📧 <span className="text-white">hello@abtech.dev</span>
            </p>
            <p>
              📍 <span className="text-white">Remote / Global</span>
            </p>
            <p>
              ⏱️ <span className="text-white">Replies within 24 hours</span>
            </p>
          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
}
