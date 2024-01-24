"use client";

import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { motion } from "framer-motion";

import { useContent } from "@/app/_hooks/use-content";

interface Props {
  iconWrapperClassName?: string;
}

export default function Socials({ iconWrapperClassName }: Props) {
  const { socials } = useContent();

  return (
    <div className="inline-flex items-center space-x-0.5">
      {socials.map((icon) => (
        // TODO: Check reduce bundle size:https://www.framer.com/motion/guide-reduce-bundle-size/
        <motion.a
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          href={icon.href}
          key={icon.src}
          target="_blank"
          rel="noopener noreferrer"
          // TODO: Use twMerge
          className={twMerge(
            "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black",
            iconWrapperClassName,
          )}
        >
          <Image
            alt={icon.alt}
            className="text-white"
            src={icon.src}
            width={24}
            height={24}
          />
        </motion.a>
      ))}
    </div>
  );
}
