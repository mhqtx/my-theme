"use client";

import { motion } from "framer-motion";
import { ComponentPropsWithoutRef, ReactNode } from "react";

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

export function Button({ children }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className="h-6 rounded-full bg-black px-2 font-medium text-white"
      // TODO: Add action
    >
      {children}
    </motion.button>
  );
}
