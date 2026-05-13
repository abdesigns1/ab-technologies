"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const heroSlides = [
  {
    src: "/images/Hero Image.png",
    alt: "AI product interface preview",
  },
  {
    src: "/images/Lady laptop.png",
    alt: "Digital product dashboard preview",
  },
  {
    src: "/images/AI2.png",
    alt: "UI and UX design preview",
  },
  {
    src: "/images/desktop-mockup.png",
    alt: "Desktop software mockup preview",
  },
  {
    src: "/images/mobile app.png",
    alt: "Mobile application preview",
  },
];

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % heroSlides.length);
    }, 3500);

    return () => window.clearInterval(slideTimer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 pt-45 lg:pt-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-800px h-800px bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-600px h-600px bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to ABNIXX Tech</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6">
              Building Inteligent
              <span className="block text-transparent bg-linear-to-r from-blue-600 to-blue-300 bg-clip-text">
                Digital Experiences
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              ABNIXX Tech delivers scalable software solutions, modern web
              platforms, and AI-powered products that help businesses innovate
              faster.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/get-started"
                className="group inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/demo"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 px-8 py-4 rounded-xl font-semibold border border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-600 transition-colors"
              >
                Explore Solutions
              </Link>
            </div>
          </div>

          {/* Right Content - Standalone Image */}
          <div className="relative lg:block">
            <div
              className="relative h-[400px] w-full md:h-[500px] lg:h-[550px]"
              aria-live="polite"
            >
              {heroSlides.map((slide, index) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-contain object-center drop-shadow-2xl transition-all duration-1000 ease-out ${
                    activeSlide === index
                      ? "scale-100 opacity-100"
                      : "scale-95 opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
