"use client";

import c from "clsx";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({ children, className, variant = "primary" }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={c(
        "inline-flex h-6 items-center space-x-1 truncate rounded-full px-2 font-medium",
        {
          "bg-black text-white": variant === "primary",
          "border border-black bg-white text-black": variant === "secondary",
        },
        className,
      )}
      // TODO: Add action
    >
      {children}
    </motion.button>
  );
}
