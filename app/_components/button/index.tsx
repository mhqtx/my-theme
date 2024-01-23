"use client";

import c from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface Props extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  className,
  variant = "primary",
  ...rest
}: Props) {
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
      {...rest}
    >
      {children}
    </motion.button>
  );
}
