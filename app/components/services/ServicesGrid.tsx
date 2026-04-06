"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Website Development",
    description:
      "We prioritize transparency and prompt updates at every stage, ensuring you're never left in the dark.",
    cta: "Learn More",
    image: "/images/desktop-mockup.png",
    gradient: "from-purple-900/80 to-black",
  },
  {
    title: "UI/UX Design",
    description:
      "Our strategies are designed to boost visibility, drive conversions, and accelerate your business growth.",
    cta: "Get Started",
    image: "/images/UI-UX-1.png",
    gradient: "from-slate-800 to-slate-900",
  },
  {
    title: "Mobile App Development",
    description:
      "Our strategies are designed to boost visibility, drive conversions, and accelerate your business growth.",
    cta: "Get Started",
    image: "/images/mobile app.png",
    gradient: "from-slate-800 to-slate-900",
  },
  {
    title: "Branding & Identity",
    description:
      "We prioritize transparency and prompt updates at every stage, ensuring you're never left in the dark.",
    cta: "Learn More",
    image: "/images/desktop-mockup.png",
    gradient: "from-purple-900/80 to-black",
  },
];

export default function Services() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          What We <span className="text-blue-500">Offer</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          High-impact digital solutions designed for speed, clarity, and growth.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`relative rounded-3xl overflow-hidden bg-linear-to-br ${service.gradient}
            border border-white/10 shadow-2xl`}
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center p-10">
              {/* Text */}
              <div>
                <h3 className="text-3xl font-bold text-blue-300 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-8">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full
                  bg-blue-500 hover:bg-blue-600 transition font-medium text-white"
                >
                  {service.cta}
                </Link>
              </div>

              {/* Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="relative flex justify-center"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  width={420}
                  height={320}
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
