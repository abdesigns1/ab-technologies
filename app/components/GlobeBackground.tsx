"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AnimatedConnector from "./AnimatedConnector";

export default function GlobeBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div className="absolute inset-0 z-0 overflow-hidden transition-all duration-500">
      {/* Base background glow */}
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.16),transparent_35%),radial-gradient(circle_at_70%_30%,rgba(168,85,247,0.16),transparent_30%),linear-gradient(to_bottom,#020617,#030712)]"
            : "bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.16),transparent_35%),linear-gradient(to_bottom,#eff6ff,#ffffff)]"
        }`}
      />

      {/* Dotted globe */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain animate-[float_10s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('/images/world-dots.svg')",
          opacity: isDark ? 0.28 : 0.3,
          filter: isDark
            ? "invert(1) brightness(1.25) contrast(1.15) drop-shadow(0 0 18px rgba(96,165,250,0.22))"
            : "brightness(0.85) contrast(1.05)",
        }}
      />

      {/* Soft spotlight behind globe */}
      <div
        className={`absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
          isDark ? "bg-blue-500/10" : "bg-blue-300/20"
        }`}
      />

      {/* Animated connectors */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        <AnimatedConnector
          d="M200 260 Q500 60 820 210"
          color={isDark ? "#38bdf8" : "#2563eb"}
          opacity={isDark ? 0.55 : 0.28}
          strokeWidth={isDark ? 2.2 : 1.6}
        />
        <AnimatedConnector
          d="M180 320 Q460 420 760 300"
          color={isDark ? "#c084fc" : "#7c3aed"}
          opacity={isDark ? 0.5 : 0.25}
          strokeWidth={isDark ? 2.2 : 1.6}
        />
        <AnimatedConnector
          d="M340 160 Q540 260 720 120"
          color={isDark ? "#34d399" : "#059669"}
          opacity={isDark ? 0.42 : 0.23}
          strokeWidth={isDark ? 2 : 1.5}
        />
      </svg>

      {/* Dark edge vignette */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.72)_100%)]"
            : "bg-[radial-gradient(circle_at_center,transparent_40%,rgba(255,255,255,0.75)_100%)]"
        }`}
      />

      {/* Bottom fade */}
      <div
        className={`absolute inset-0 pointer-events-none ${
          isDark
            ? "bg-gradient-to-t from-[#020617] via-transparent to-transparent"
            : "bg-gradient-to-t from-white via-transparent to-transparent"
        }`}
      />
    </div>
  );
}
