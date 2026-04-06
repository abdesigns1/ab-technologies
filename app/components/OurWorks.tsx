"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const filters = ["All", "Web Apps", "UI/UX", "Branding"];

const projects = [
  {
    title: "CinemaFlix Platform",
    category: "Web Apps",
    desc: "A full-stack movie discovery & recommendation platform.",
    image: "/projects/cinemaflix.jpg",
  },
  {
    title: "CareBridge Health App",
    category: "UI/UX",
    desc: "A modern healthcare dashboard with AI assistance.",
    image: "/projects/carebridge.jpg",
  },
  {
    title: "AB-Tech Brand Identity",
    category: "Branding",
    desc: "Futuristic branding system for a tech-driven company.",
    image: "/projects/abtech-brand.jpg",
  },
  {
    title: "AgroLink Platform",
    category: "Web Apps",
    desc: "Connecting farmers directly to consumers with tech.",
    image: "/projects/agrolink.jpg",
  },
];

export default function OurWorks() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="relative py-32 bg-[#020617] overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-20 left-24 w-72 h-72 bg-blue-600/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-24 w-72 h-72 bg-indigo-600/20 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-blue-500 uppercase tracking-[0.35em] text-sm">
            Our Works
          </p>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Engineering Digital Products <br />
            <span className="text-blue-500 glow-blue">
              That Shape the Future
            </span>
          </h2>

          <p className="mt-6 text-gray-400">
            From scalable web applications to intuitive interfaces and bold
            brand identities — here’s a glimpse of what we build at AB-Tech.
          </p>
        </div>

        {/* Filters */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition
                ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white border-blue-500"
                    : "text-gray-400 border-white/10 hover:border-blue-500/40 hover:text-white"
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence>
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-3xl overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-500/40 transition"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-wider text-blue-400">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-sm">{project.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-blue-500 text-sm font-medium">
                    View Project
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
