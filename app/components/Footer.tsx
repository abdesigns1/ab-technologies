"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQs", href: "/faqs" },
];

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [newsletterMessage, setNewsletterMessage] = useState("");

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = newsletterEmail.trim();

    if (!email) {
      setNewsletterError("Please enter your email address.");
      setNewsletterStatus("idle");
      setNewsletterMessage("");
      return;
    }

    if (!emailPattern.test(email)) {
      setNewsletterError("Please enter a valid email address.");
      setNewsletterStatus("idle");
      setNewsletterMessage("");
      return;
    }

    setNewsletterError("");
    setNewsletterStatus("submitting");
    setNewsletterMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Unable to subscribe right now.");
      }

      setNewsletterStatus("success");
      setNewsletterMessage("Thanks for subscribing. You're on the list.");
      setNewsletterEmail("");
    } catch (error) {
      setNewsletterStatus("error");
      setNewsletterMessage(
        error instanceof Error
          ? error.message
          : "Unable to subscribe right now.",
      );
    }
  };

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Marquee */}
      <div className="relative overflow-hidden border-y border-white/10 py-10 mb-16">
        <div className="flex whitespace-nowrap animate-marquee gap-20 text-3xl md:text-3xl font-extrabold tracking-[0.25em] text-gray-300 uppercase">
          <span>AB-TECH — BUILDING THE FUTURE</span>
          <span>DIGITAL • AI • WEB • UI/UX • BRANDING</span>
          <span>SCALABLE SOLUTIONS FOR MODERN BUSINESSES</span>
          <span>AB-TECH — BUILDING THE FUTURE</span>
          <span>DIGITAL • AI • WEB • UI/UX • BRANDING</span>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-size-60px_60px opacity-10" />

        {/* Glow */}
        <div className="absolute -top-32 left-1/3 w-420px h-420px bg-blue-600/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-420px h-420px bg-purple-600/20 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="inline-block"
              aria-label="ABNIXX Tech home"
            >
              <Image
                src="/ABNIXX%20Logo%20Frame%20222.png"
                alt="ABNIXX Tech"
                width={1723}
                height={466}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-gray-400 max-w-sm">
              We design and build intelligent digital experiences that help
              brands grow, scale, and dominate the future.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Navigation
            </h4>
            <ul className="space-y-3 text-lg font-medium">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition neon-link hover:text-blue-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Newsletter
              </h4>
              <p className="mt-3 text-sm leading-6 text-gray-400">
                Get practical notes on design, AI, web products, and digital
                growth.
              </p>
              <form
                className="mt-5 flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row"
                onSubmit={handleNewsletterSubmit}
                noValidate
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={newsletterEmail}
                  onChange={(event) => {
                    setNewsletterEmail(event.target.value);
                    setNewsletterError("");
                    setNewsletterStatus("idle");
                    setNewsletterMessage("");
                  }}
                  aria-invalid={Boolean(newsletterError)}
                  aria-describedby={
                    newsletterError ? "footer-email-error" : undefined
                  }
                  className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                  type="submit"
                  disabled={newsletterStatus === "submitting"}
                  className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-blue-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {newsletterStatus === "submitting"
                    ? "Subscribing..."
                    : "Subscribe"}
                </button>
              </form>
              {newsletterError && (
                <p
                  id="footer-email-error"
                  className="mt-3 flex items-center gap-2 text-xs text-red-300"
                >
                  <AlertCircle className="h-3.5 w-3.5" />
                  {newsletterError}
                </p>
              )}
              {newsletterStatus === "success" && (
                <p className="mt-3 flex items-center gap-2 text-xs text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {newsletterMessage}
                </p>
              )}
              {newsletterStatus === "error" && (
                <p className="mt-3 flex items-center gap-2 text-xs text-red-300">
                  <AlertCircle className="h-3.5 w-3.5" />
                  {newsletterMessage}
                </p>
              )}
            </div>

            <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
              Let’s Build
            </h4>

            <p className="text-lg font-semibold">
              Ready to turn your idea into reality?
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-blue-400 font-semibold hover:scale-105 transition-transform"
            >
              Start a Project →
            </Link>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-white/10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ABNIXX Tech. All rights reserved.</p>

          <p className="tracking-wide">
            <Link href="/privacy-policy" className="hover:text-blue-400">
              Privacy Policy
            </Link>
            |{" "}
            <Link href="/terms-of-service" className="hover:text-blue-400">
              Terms of Service
            </Link>
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex gap-6"
          >
            {[
              { icon: BsInstagram, href: "#" },
              { icon: BsTwitter, href: "#" },
              { icon: BsWhatsapp, href: "#" },
              { icon: BsFacebook, href: "#" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                whileHover={{ y: -6, scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-blue-500/40 hover:text-blue-400 transition"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
