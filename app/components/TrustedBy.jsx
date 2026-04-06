"use client";

import Image from "next/image";

const logos = [
  { name: "Google", src: "/logos/Google Logotype.svg" },
  { name: "GitHub", src: "/logos/Github.svg" },
  { name: "Square Cash", src: "/logos/SquareCash.svg" },
  { name: "Venmo", src: "/logos/Venmo.svg" },
  { name: "Slack", src: "/logos/Slack Logotype.svg" },
];

export default function TrustedBy() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 py-10 mb-16">
      {/*<section className="relative py-10 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black"> */}
      {/* Glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-600px h-600px blur-[160px] rounded-full" />
      </div>

      <div className="relative container-app">
        <div className="glass px-10 py-5">
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
            Join over <span className="text-blue-400">1,000+</span> Companies We
            Have Partnered and Worked With
          </h2>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex gap-16 animate-logo-scroll hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[160px] opacity-70 hover:opacity-100 transition"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={60}
                    className="object-contain grayscale hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
