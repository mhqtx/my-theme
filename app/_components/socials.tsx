"use client";

import { twMerge } from "tailwind-merge";
import { useContent } from "@/app/_hooks/use-content";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  iconWrapperClassName?: string;
}

export default function Socials({ iconWrapperClassName }: Props) {
  const { socials } = useContent();

  return (
    <div className="flex space-x-0.5 items-center">
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
            "shrink-0 rounded-full w-5 h-5 flex items-center justify-center bg-black",
            iconWrapperClassName
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
