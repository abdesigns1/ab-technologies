"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border bg-white text-sm text-slate-600 mb-4">
          😊 Our Testimonials
        </span>
        <h2 className="text-4xl font-extrabold text-slate-900">
          User Reviews and Feedback
        </h2>
        <p className="mt-4 text-slate-500">
          See how AB-Tech has transformed digital experiences through the voices
          of our clients.
        </p>
      </div>

      {/* Carousel Wrapper */}
      <div className="relative">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-32 bg-linear-to-r from-slate-50 to-transparent" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-32 bg-linear-to-l from-slate-50 to-transparent" />

        {/* Carousel */}
        <motion.div
          className="flex gap-5"
          animate={{ x: ["0%", "-50%"] }}
          whileHover={{ animationPlayState: "paused" }}
          transition={{
            duration: 40,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
