"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Brain,
  Code2,
  Smartphone,
  Sparkles,
  ArrowRight,
  Zap,
  Palette,
  TrendingUp,
} from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  gradient: string;
  iconBg: string;
}

const WhatWeOffer = () => {
  const services: ServiceCard[] = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Advanced Software Development",
      description:
        "We build intelligent systems using machine learning, automation, enterprise software, and conversational AI, engineered to optimize workflows and power smarter decision-making.",
      features: [
        "Machine Learning & AI",
        "Enterprise Software",
        "Process Automation",
        "Conversational AI",
      ],
      link: "/services",
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      iconBg: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Website & App Development",
      description:
        "From UI/UX design to full-stack development, we create custom websites, mobile apps, and scalable digital platforms with seamless integrations and cloud support.",
      features: [
        "UI/UX Design",
        "Full-Stack Development",
        "Mobile Apps (iOS & Android)",
        "Cloud Infrastructure",
      ],
      link: "/services",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      iconBg: "from-purple-500 to-pink-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Branding & Digital Marketing",
      description:
        "We craft brand identities, compelling content, and high-impact marketing campaigns that drive engagement, boost visibility, and convert audiences into loyal customers.",
      features: [
        "Brand Identity Design",
        "Content Strategy",
        "Digital Campaigns",
        "Social Media Marketing",
      ],
      link: "/services",
      gradient: "from-orange-500 via-amber-500 to-yellow-500",
      iconBg: "from-orange-500 to-amber-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950 overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-orange-500/10 via-yellow-500/10 to-green-500/10 dark:from-orange-500/20 dark:via-yellow-500/20 dark:to-green-500/20 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
              What we offer
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 leading-tight">
            Innovative Services.{" "}
            <span className="block md:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400">
              Real-World Results.
            </span>
          </h2>

          <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            From AI-powered solutions to stunning digital experiences, we
            deliver services that transform businesses and drive measurable
            growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              //   variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${service.gradient} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`}
              />

              {/* Card Content */}
              <div className="relative h-full bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 dark:opacity-10">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${service.gradient} rounded-full blur-2xl`}
                  />
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative mb-6"
                >
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transition-shadow duration-500`}
                  >
                    {service.icon}
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-zinc-900">
                    <Zap className="w-3 h-3 text-white" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300"
                    >
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${service.iconBg} flex items-center justify-center mt-0.5`}
                      >
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <Link
                  href={service.link}
                  className="group/link inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                </Link>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300 hover:scale-105"
            >
              <span>View All Services</span>
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 rounded-xl font-semibold border-2 border-zinc-200 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-500 transition-all duration-300"
            >
              <span>Schedule a Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-500">
            Trusted by 500+ companies worldwide • 4.9★ rating
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
