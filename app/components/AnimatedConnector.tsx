"use client";

import { motion } from "framer-motion";

interface AnimatedConnectorProps {
  d: string;
  color: string;
  opacity: number;
  strokeWidth?: number;
}

export default function AnimatedConnector({
  d,
  color,
  opacity,
  strokeWidth = 1.5,
}: AnimatedConnectorProps) {
  return (
    <motion.path
      d={d}
      stroke={color}
      strokeWidth={strokeWidth}
      fill="none"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: opacity }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        filter: `drop-shadow(0 0 4px ${color})`,
      }}
    />
  );
}

// "use client";

// import { motion } from "framer-motion";

// export default function AnimatedConnector({ d }: { d: string }) {
//   return (
//     <motion.path
//       d={d}
//       fill="none"
//       stroke="rgba(59,130,246,0.7)"
//       strokeWidth="1.2"
//       strokeDasharray="5 6"
//       initial={{ pathLength: 0 }}
//       animate={{ pathLength: 1 }}
//       transition={{
//         duration: 3,
//         repeat: Infinity,
//         ease: "easeInOut",
//       }}
//     />
//   );
// }
