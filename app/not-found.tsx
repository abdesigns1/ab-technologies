import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home, Mail, Search, Sparkles } from "lucide-react";

const quickLinks = [
  {
    label: "Explore Services",
    href: "/services",
    description: "See how ABNIXX Tech can help you build and scale.",
  },
  {
    label: "Meet the Team",
    href: "/about",
    description: "Learn what drives our product and engineering work.",
  },
  {
    label: "Start a Project",
    href: "/contact",
    description: "Tell us what you are building and where you need support.",
  },
];

export default function NotFound() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-white px-6 pt-32 text-zinc-950 transition-colors duration-500 dark:bg-zinc-950 dark:text-white sm:pt-36">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/tech-bg-poster.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white dark:from-zinc-950 dark:via-zinc-950/90 dark:to-zinc-950" />
      </div>

      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px] sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute bottom-10 right-0 -z-10 h-80 w-80 rounded-full bg-cyan-400/15 blur-[140px]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:56px_56px] dark:bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)]" />

      <section className="mx-auto flex w-full max-w-7xl flex-col items-center pb-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-300">
          <Search className="h-4 w-4" aria-hidden="true" />
          Page not found
        </span>

        <div className="relative mt-8">
          <p className="select-none text-[7rem] font-black leading-none tracking-normal text-zinc-100 dark:text-white/5 sm:text-[11rem] md:text-[14rem]">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles
              className="h-16 w-16 text-blue-500 drop-shadow-[0_0_24px_rgba(59,130,246,0.45)] sm:h-20 sm:w-20"
              aria-hidden="true"
            />
          </div>
        </div>

        <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight tracking-normal text-zinc-950 dark:text-white sm:text-5xl md:text-6xl">
          This page wandered outside the build scope.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-zinc-600 dark:text-zinc-300 sm:text-lg">
          The link may be outdated, moved, or typed incorrectly. Let&apos;s get
          you back to a working route.
        </p>

        <div className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-zinc-950"
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white/70 px-6 py-3 font-semibold text-zinc-800 backdrop-blur transition hover:border-blue-400 hover:text-blue-600 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:border-blue-500 dark:hover:text-blue-300"
          >
            <Mail className="h-5 w-5" aria-hidden="true" />
            Contact Us
          </Link>
        </div>

        <div className="mt-16 grid w-full gap-4 text-left md:grid-cols-3">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-lg border border-zinc-200 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-950/5 dark:border-zinc-800 dark:bg-zinc-900/70 dark:hover:border-blue-700 dark:hover:shadow-blue-950/20"
            >
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-zinc-950 dark:text-white">
                  {item.label}
                </h2>
                <ArrowLeft
                  className="h-5 w-5 rotate-180 text-blue-500 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
