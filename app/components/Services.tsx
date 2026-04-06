"use client";

import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: string;
}

// ─── Services Data (Unsplash real images) ─────────────────────────────────────
const services: Service[] = [
  {
    id: "web-design",
    number: "01",
    title: "Web Design",
    description:
      "Modern responsive websites designed to scale with growing businesses and evolving product needs.",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=680&q=80&auto=format&fit=crop",
    imageAlt:
      "Web design workspace with monitor showing a clean website layout",
    accent: "blue",
  },
  {
    id: "uiux",
    number: "02",
    title: "UI/UX Design",
    description:
      "User-focused interfaces designed for clarity, flow, and everyday usability across every touchpoint.",
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=680&q=80&auto=format&fit=crop",
    imageAlt: "UX designer sketching wireframes and user flows on paper",
    accent: "violet",
  },
  {
    id: "landing-pages",
    number: "03",
    title: "Landing Pages",
    description:
      "High-converting pages crafted to capture attention and drive action from the very first scroll.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=680&q=80&auto=format&fit=crop",
    imageAlt: "Analytics dashboard on a laptop showing conversion metrics",
    accent: "emerald",
  },
  {
    id: "product-design",
    number: "04",
    title: "Product Design",
    description:
      "End-to-end product design focused on usability, growth, and design system consistency.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=680&q=80&auto=format&fit=crop",
    imageAlt: "Product designer working on a mobile app interface on tablet",
    accent: "amber",
  },
  {
    id: "content-strategy",
    number: "05",
    title: "Content Strategy",
    description:
      "Content plans structured to guide messaging, clarity, and sustained audience engagement.",
    image:
      "https://images.unsplash.com/photo-1512314889357-e157c22f938d?w=680&q=80&auto=format&fit=crop",
    imageAlt:
      "Content planning session with sticky notes and strategy documents",
    accent: "rose",
  },
  {
    id: "framer-dev",
    number: "06",
    title: "Framer Development",
    description:
      "Pixel-perfect Framer builds with smooth motion, clean structure, and zero-compromise quality.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=680&q=80&auto=format&fit=crop",
    imageAlt: "Developer coding a web application on a dark screen setup",
    accent: "cyan",
  },
];

// ─── Accent maps ──────────────────────────────────────────────────────────────
const glowMap: Record<string, string> = {
  blue: "group-hover:shadow-[0_8px_40px_-8px_rgba(59,130,246,0.4)] dark:group-hover:shadow-[0_8px_48px_-8px_rgba(59,130,246,0.5)]",
  violet:
    "group-hover:shadow-[0_8px_40px_-8px_rgba(139,92,246,0.4)] dark:group-hover:shadow-[0_8px_48px_-8px_rgba(139,92,246,0.5)]",
  emerald:
    "group-hover:shadow-[0_8px_40px_-8px_rgba(16,185,129,0.4)] dark:group-hover:shadow-[0_8px_48px_-8px_rgba(16,185,129,0.5)]",
  amber:
    "group-hover:shadow-[0_8px_40px_-8px_rgba(245,158,11,0.4)] dark:group-hover:shadow-[0_8px_48px_-8px_rgba(245,158,11,0.5)]",
  rose: "group-hover:shadow-[0_8px_40px_-8px_rgba(244,63,94,0.4)] dark:group-hover:shadow-[0_8px_48px_-8px_rgba(244,63,94,0.5)]",
  cyan: "group-hover:shadow-[0_8px_40px_-8px_rgba(6,182,212,0.4)] dark:group-hover:shadow-[0_8px_48px_-8px_rgba(6,182,212,0.5)]",
};

const borderMap: Record<string, string> = {
  blue: "group-hover:border-blue-400/60 dark:group-hover:border-blue-500/60",
  violet:
    "group-hover:border-violet-400/60 dark:group-hover:border-violet-500/60",
  emerald:
    "group-hover:border-emerald-400/60 dark:group-hover:border-emerald-500/60",
  amber: "group-hover:border-amber-400/60 dark:group-hover:border-amber-500/60",
  rose: "group-hover:border-rose-400/60 dark:group-hover:border-rose-500/60",
  cyan: "group-hover:border-cyan-400/60 dark:group-hover:border-cyan-500/60",
};

const overlayMap: Record<string, string> = {
  blue: "from-blue-600/30 to-blue-900/20",
  violet: "from-violet-600/30 to-violet-900/20",
  emerald: "from-emerald-600/30 to-emerald-900/20",
  amber: "from-amber-600/30 to-amber-900/20",
  rose: "from-rose-600/30 to-rose-900/20",
  cyan: "from-cyan-600/30 to-cyan-900/20",
};

const barGradientMap: Record<string, string> = {
  blue: "from-blue-500 to-indigo-500",
  violet: "from-violet-500 to-purple-500",
  emerald: "from-emerald-500 to-teal-500",
  amber: "from-amber-500 to-orange-500",
  rose: "from-rose-500 to-pink-500",
  cyan: "from-cyan-500 to-blue-500",
};

// ─── Service Card ─────────────────────────────────────────────────────────────
interface ServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const delay = index * 110;

  return (
    <div
      className={`group relative transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-14"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={[
          "relative overflow-hidden rounded-2xl border transition-all duration-500 cursor-pointer",
          "bg-white dark:bg-zinc-900",
          "border-zinc-200/80 dark:border-zinc-800/80",
          borderMap[service.accent],
          glowMap[service.accent],
          "hover:-translate-y-2 hover:scale-[1.015]",
        ].join(" ")}
      >
        {/* Top shimmer line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-200 dark:via-zinc-700 to-transparent group-hover:via-white/80 dark:group-hover:via-zinc-400 transition-all duration-500 z-10" />

        {/* ── Image block ───────────────────────────────────── */}
        <div className="relative w-full aspect-[16/10] overflow-hidden">
          {/* Skeleton shimmer while loading */}
          {!imgLoaded && (
            <div className="absolute inset-0 animate-pulse bg-zinc-100 dark:bg-zinc-800" />
          )}

          {/* Real photo */}
          <img
            src={service.image}
            alt={service.imageAlt}
            onLoad={() => setImgLoaded(true)}
            className={[
              "w-full h-full object-cover transition-all duration-700",
              "group-hover:scale-105",
              imgLoaded ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />

          {/* Permanent bottom gradient for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

          {/* Accent colour overlay on hover */}
          <div
            className={[
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
              `bg-gradient-to-br ${overlayMap[service.accent]}`,
            ].join(" ")}
          />

          {/* Number badge — bottom-left of image */}
          <div className="absolute bottom-3 left-4 z-10">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors duration-300">
              {service.number}
            </span>
          </div>

          {/* Arrow badge — bottom-right of image */}
          <div className="absolute bottom-3 right-4 z-10">
            <div className="w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/25 group-hover:rotate-45 group-hover:scale-110">
              <svg
                className="w-3 h-3 text-white"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 12 L12 2 M12 2 H5 M12 2 V9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* ── Text block ────────────────────────────────────── */}
        <div className="p-5">
          <h3 className="text-base font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1.5 transition-colors duration-300">
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
            {service.description}
          </p>
        </div>

        {/* Bottom accent bar slides in on hover */}
        <div
          className={[
            "absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 ease-out rounded-b-2xl",
            `bg-gradient-to-r ${barGradientMap[service.accent]}`,
          ].join(" ")}
        />
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ServicesSection() {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.04); opacity: 0.18; }
        }
        .pulse-ring { animation: pulse-ring 5s ease-in-out infinite; }
      `}</style>

      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 antialiased">
        {/* Dark mode toggle */}

        <section
          ref={sectionRef}
          id="services"
          className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pulse-ring bg-zinc-300 dark:bg-zinc-700" />
            <div className="absolute -top-20 -right-24 w-80 h-80 rounded-full bg-violet-100/50 dark:bg-violet-900/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-24 w-80 h-80 rounded-full bg-blue-100/50 dark:bg-blue-900/10 blur-3xl" />
            <svg
              className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="dots"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="1" cy="1" r="1" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)" />
            </svg>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* ── Header ─────────────────────────────────────── */}
            <div ref={headerRef} className="mb-16">
              <div
                className={`inline-flex items-center gap-2 mb-5 transition-all duration-700 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-600" />
                <span className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-400">
                  our services
                </span>
              </div>

              <h2
                className={`text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-2xl transition-all duration-700 delay-100 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                High-impact design{" "}
                <span className="relative inline-block">
                  services
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
                </span>{" "}
                on demand
              </h2>

              <p
                className={`mt-5 text-base text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              >
                High-impact design solutions delivered on-demand, helping
                startups and growing teams move faster with confidence.
              </p>
            </div>

            {/* ── Cards grid ─────────────────────────────────── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* ── Bottom CTA ─────────────────────────────────── */}
            <div
              className={`mt-14 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl transition-all duration-700 delay-[750ms] border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                  Ready to get started?
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Book a free discovery call and let's build something
                  exceptional together.
                </p>
              </div>
              <button className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-white/20 active:scale-95">
                Explore all services
                <svg className="w-4 h-4" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 12 L12 2 M12 2 H5 M12 2 V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
