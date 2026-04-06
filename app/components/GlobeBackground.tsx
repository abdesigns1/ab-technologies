"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import AnimatedConnector from "./AnimatedConnector";

export default function GlobeBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 z-0 transition-opacity duration-300">
      {/* Dotted Globe - properly adjusted for dark/light mode */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-contain animate-[float_10s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('/images/world-dots.svg')",
          opacity: isDark ? 0.15 : 0.25, // Increased for better visibility in both modes
          filter: isDark
            ? "brightness(1.4) contrast(1.2)"
            : "brightness(0.9) contrast(1.1)",
        }}
      />

      {/* Connectors with theme-based colors */}
      <svg
        viewBox="0 0 1000 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <AnimatedConnector
          d="M200 260 Q500 60 820 210"
          color={isDark ? "#60a5fa" : "#2563eb"} // Lighter blue for dark mode
          opacity={isDark ? 0.4 : 0.25}
          strokeWidth={isDark ? 2 : 1.5}
        />
        <AnimatedConnector
          d="M180 320 Q460 420 760 300"
          color={isDark ? "#c084fc" : "#7c3aed"} // Lighter purple for dark mode
          opacity={isDark ? 0.4 : 0.25}
          strokeWidth={isDark ? 2 : 1.5}
        />
        <AnimatedConnector
          d="M340 160 Q540 260 720 120"
          color={isDark ? "#34d399" : "#059669"} // Lighter green for dark mode
          opacity={isDark ? 0.4 : 0.25}
          strokeWidth={isDark ? 2 : 1.5}
        />
      </svg>

      {/* Gradient overlays that adapt to theme - fixed for better contrast */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${
          isDark
            ? "from-[#030712] via-[#030712]/50 to-transparent"
            : "from-blue-50/30 via-transparent to-transparent"
        } pointer-events-none`}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          isDark
            ? "from-[#030712] via-transparent to-[#030712]"
            : "from-blue-100/20 via-transparent to-blue-100/20"
        } opacity-30 pointer-events-none`}
      />

      {/* Additional subtle overlay for depth */}
      <div
        className={`absolute inset-0 ${
          isDark ? "bg-[#030712]/20" : "bg-white/10"
        } pointer-events-none`}
      />
    </div>
  );
}
