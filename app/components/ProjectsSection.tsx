"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Project {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  imageAlt: string;
  timeline: string;
  service: string;
  kickoff: string;
  accent: string;
  projectUrl: string;
}

// ─── Projects Data ────────────────────────────────────────────────────────────
const projects: Project[] = [
  {
    id: "Scent AI",
    number: "01",
    name: "Scent AI",
    description:
      "Scent AI is an AI-Powered Perfume E-commerce Project where the AI assistant interacts with users, asks about their scent preferences (floral, woody, fresh, etc.), and recommends perfumes tailored to their personality and taste. ",
    image: "/images/scentai.jpg",
    imageAlt: "Scent AI project – abstract digital art with glowing shapes",
    timeline: "5 Weeks",
    service: "Web and AI Design",
    kickoff: "March 5, 2026",
    accent: "#FFD700",
    projectUrl: "https://scent-ai-eta.vercel.app/",
  },
  {
    id: "Mobile Banking UI Design",
    number: "02",
    name: "Mobile Banking UI Design",
    description:
      "This Mobile Banking app is designed to help ease transaction accross all banking platform and also to sold the problem of slow transaction, this app helps users to spend on budget and have archieve a good financial goal.",
    image: "/images/Banking 2.png",
    imageAlt: "Mobile Banking UI Design project",
    timeline: "3 Weeks",
    service: "UI/UX Design",
    kickoff: "Sep 24, 2024",
    accent: "#50C878",
    projectUrl:
      "https://www.behance.net/gallery/185078707/Mobile-Banking-User-Interface",
  },
  {
    id: "AIMEN Online",
    number: "03",
    name: "AIMEN Online",
    description:
      "Africa-Israel Media Network, AIMEN is a project that seeks to bridge gap, bolster the good relationships between the continent and Israel through accurate reportage, advocacy, exchanges between relevant media organizations between the two sides.",
    image: "/images/aimen1.jpg",
    imageAlt: "AIMEN Online project",
    timeline: "4 Weeks",
    service: "Website Design and Development",
    kickoff: "September, 2025",
    accent: "#0041BA",
    projectUrl: "https://aimen.online/",
  },
];

// ─── Arrow Icon ───────────────────────────────────────────────────────────────
const ArrowIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 16 16" fill="none">
    <path
      d="M3 13 L13 3 M13 3 H6 M13 3 V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// ─── Meta Pill ────────────────────────────────────────────────────────────────
const MetaPill = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-400 dark:text-zinc-500">
      {label}
    </span>
    <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
      {value}
    </span>
  </div>
);

// ─── Project Card ─────────────────────────────────────────────────────────────
interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
}

function ProjectCard({ project, index, total }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0–1 how much next card has scrolled over this
  const [hovered, setHovered] = useState(false);

  // Each card is sticky; we track how far we've scrolled within its "slot"
  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      // How far the card top is above viewport top (positive = scrolled past)
      const scrolledPast = -rect.top;
      const cardHeight = rect.height;
      const p = Math.min(Math.max(scrolledPast / cardHeight, 0), 1);
      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLastCard = index === total - 1;

  // Scale & opacity as the card gets "buried"
  const scale = isLastCard ? 1 : 1 - progress * 0.04 * (total - index);
  const opacity = isLastCard ? 1 : 1 - progress * 0.3;
  // Slight upward drift as it gets stacked under
  const translateY = isLastCard ? 0 : -progress * 24;
  const isExternalProjectUrl = /^https?:\/\//.test(project.projectUrl);

  return (
    <div
      ref={cardRef}
      className="sticky top-0 flex items-start justify-center"
      // Each card starts at top: 0, but offset by its index so they visually stack
      style={{ paddingTop: `${index * 12}px` }}
    >
      <div
        className="w-full max-w-6xl mx-auto transition-[transform,opacity] duration-100 will-change-transform"
        style={{
          transform: `scale(${scale}) translateY(${translateY}px)`,
          opacity,
          transformOrigin: "top center",
        }}
      >
        {/* ── Card shell ────────────────────────────────────── */}
        <div
          className="relative overflow-hidden rounded-3xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white dark:bg-zinc-900 shadow-xl dark:shadow-zinc-950/60 transition-all duration-500 cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Accent glow top edge */}
          <div
            className="absolute top-0 left-0 right-0 h-0.5 transition-opacity duration-500"
            style={{
              background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
              opacity: hovered ? 1 : 0.4,
            }}
          />

          <div className="flex flex-col lg:flex-row">
            {/* ── Image panel ───────────────────────────────── */}
            <div className="relative w-full lg:w-[55%] aspect-16/10 lg:aspect-auto lg:min-h-420px overflow-hidden shrink-0">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Bottom scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-white/0 dark:lg:to-zinc-900/0" />

              {/* Number — floating on image */}
              <div className="absolute top-6 left-6">
                <span
                  className="text-5xl font-black tracking-tighter leading-none select-none"
                  style={{ color: `${project.accent}cc` }}
                >
                  {project.number}
                </span>
              </div>
            </div>

            {/* ── Content panel ─────────────────────────────── */}
            <div className="flex flex-col justify-between p-8 lg:p-12 lg:w-[45%]">
              <div>
                {/* Project name */}
                <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-base leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-sm">
                  {project.description}
                </p>

                {/* Divider */}
                <div
                  className="mt-8 mb-8 h-px w-full transition-all duration-500"
                  style={{
                    background: `linear-gradient(90deg, ${project.accent}40, transparent)`,
                  }}
                />

                {/* Meta grid */}
                <div className="grid grid-cols-3 gap-4">
                  <MetaPill label="Timeline" value={project.timeline} />
                  <MetaPill label="Service" value={project.service} />
                  <MetaPill label="Kickoff" value={project.kickoff} />
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Link
                  href={project.projectUrl}
                  target={isExternalProjectUrl ? "_blank" : undefined}
                  rel={isExternalProjectUrl ? "noreferrer" : undefined}
                  className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 border"
                  style={{
                    borderColor: `${project.accent}60`,
                    color: hovered ? "#fff" : project.accent,
                    background: hovered ? project.accent : "transparent",
                  }}
                  aria-label={`View ${project.name} project`}
                >
                  View project
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{
                      background: hovered
                        ? "rgba(255,255,255,0.2)"
                        : `${project.accent}18`,
                    }}
                  >
                    <ArrowIcon className="w-3 h-3 transition-transform duration-300 group-hover/btn:rotate-45" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        /* Smooth scroll behaviour */
        html { scroll-behavior: smooth; }

        /* Sticky stacking: each card occupies 100vh of scroll space */
        .project-scroll-slot {
          height: 100vh;
        }

        @keyframes fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up {
          animation: fade-up 0.7s ease both;
        }
        .fade-up-delay-1 { animation-delay: 0.1s; }
        .fade-up-delay-2 { animation-delay: 0.2s; }
        .fade-up-delay-3 { animation-delay: 0.3s; }
      `}</style>

      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500 antialiased">
        {/* ── Section header (non-sticky) ─────────────────── */}
        <section className="relative px-4 sm:px-6 lg:px-8 pt-24 pb-16 overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-indigo-100/40 dark:bg-indigo-900/10 blur-3xl" />
            <div className="absolute top-10 right-1/4 w-72 h-72 rounded-full bg-amber-100/30 dark:bg-amber-900/10 blur-3xl" />
          </div>

          <div ref={headerRef} className="relative max-w-6xl mx-auto">
            {/* Label */}
            <div
              className={`inline-flex items-center gap-2 mb-5 ${headerVisible ? "fade-up" : "opacity-0"}`}
            >
              <span className="w-6 h-px bg-zinc-400 dark:bg-zinc-600" />
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-zinc-500 dark:text-zinc-400">
                our projects
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className={`text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 max-w-xl ${
                  headerVisible ? "fade-up fade-up-delay-1" : "opacity-0"
                }`}
              >
                Selected projects{" "}
                <span className="relative inline-block">
                  crafted
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full" />
                </span>{" "}
                with purpose
              </h2>

              <p
                className={`text-base text-zinc-500 dark:text-zinc-400 max-w-xs leading-relaxed lg:text-right ${
                  headerVisible ? "fade-up fade-up-delay-2" : "opacity-0"
                }`}
              >
                Thoughtfully designed products, websites, and brand experiences
                built for modern, fast-growing teams.
              </p>
            </div>
          </div>
        </section>

        {/* ── Scroll stacking cards ───────────────────────── */}
        {/*
          Strategy: wrap each card in a 100vh-tall div so the browser
          allocates scroll space per card, then make the inner card sticky.
          As user scrolls, later cards slide up over earlier ones.
        */}
        <div className="relative px-4 sm:px-6 lg:px-8 pb-32">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-scroll-slot"
              style={{
                // Last card doesn't need a full vh of scroll room
                height: index === projects.length - 1 ? "auto" : "100vh",
                // Slightly less for earlier cards so stacking feels natural
                minHeight: index === projects.length - 1 ? "auto" : "560px",
              }}
            >
              <ProjectCard
                project={project}
                index={index}
                total={projects.length}
              />
            </div>
          ))}
        </div>

        {/* ── Footer CTA ─────────────────────────────────── */}
        {/* <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/60 backdrop-blur-sm">
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Want to see more work?
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
                Browse the full portfolio or book a call to discuss your
                project.
              </p>
            </div>
            <button className="shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:scale-105 hover:shadow-lg hover:shadow-zinc-900/20 dark:hover:shadow-white/20 active:scale-95">
              View all projects
              <ArrowIcon className="w-4 h-4" />
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}
