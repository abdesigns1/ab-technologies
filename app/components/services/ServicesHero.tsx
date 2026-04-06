"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function ServicesHero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/services-bg.jpg"
          alt="Services Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />

        {/* Overlay - adapts to theme */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isDark
              ? "bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/90"
              : "bg-gradient-to-b from-white/90 via-white/80 to-white/90"
          }`}
        />

        {/* Additional overlay for better text readability */}
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            isDark ? "bg-black/40" : "bg-white/20"
          }`}
        />
      </div>

      {/* Background Glow - Adjusted for theme */}
      <div
        className={`absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-500 ${
          isDark ? "bg-indigo-600/20" : "bg-indigo-400/30"
        }`}
      />
      <div
        className={`absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[160px] transition-colors duration-500 ${
          isDark ? "bg-blue-600/20" : "bg-blue-400/30"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Badge with theme support */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="inline-block"
        >
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm transition-colors duration-300 ${
              isDark
                ? "bg-blue-950/50 text-blue-400 border border-blue-800/50"
                : "bg-white/80 text-blue-600 border border-white/20"
            }`}
          >
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
          <span
            className={`block transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Building Digital Products
          </span>
          <span className="text-transparent bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text">
            That Scale & Convert
          </span>
        </motion.h1>

        {/* Description with theme support */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`mt-6 max-w-2xl mx-auto text-lg backdrop-blur-sm transition-colors duration-300 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          From strategy to execution, AB-Tech delivers modern web, UI/UX,
          branding, and e-commerce solutions for ambitious teams.
        </motion.p>

        {/* Optional: Add CTA buttons for better engagement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-700 to-blue-400 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-3 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 ${
              isDark
                ? "border border-gray-700 text-gray-300 hover:bg-gray-800/50"
                : "border border-gray-300 text-gray-700 hover:bg-white/80"
            }`}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`w-6 h-10 rounded-full border-2 flex justify-center backdrop-blur-sm ${
              isDark ? "border-gray-700" : "border-gray-300"
            }`}
          >
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`w-1.5 h-1.5 rounded-full mt-2 ${
                isDark ? "bg-gray-400" : "bg-gray-600"
              }`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
