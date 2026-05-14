"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  // ✅ Auto-open first FAQ
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative py-32 bg-slate-950 text-white overflow-hidden">
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      {/* Background Glows */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />
      <div className="absolute top-1/2 -right-40 w-[500px] h-[500px] bg-blue-500/20 blur-[140px] rounded-full" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full border border-white/10 bg-white/5 text-sm tracking-wide">
            FAQs
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Everything you need to know about working with ABNIXX Tech and how
            we deliver cutting-edge digital solutions.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`
                  rounded-2xl border backdrop-blur-xl transition-all duration-300
                  ${
                    isOpen
                      ? "border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.25)]"
                      : "border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_35px_rgba(99,102,241,0.25)]"
                  }
                  bg-white/5
                `}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>

                  <span className="ml-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-blue-400" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
