"use client";

import { motion } from "framer-motion";
import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={clsx(variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
