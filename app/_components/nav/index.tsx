"use client";

import c from "clsx";

import { useContentHero } from "@/app/_content/hero";
import { Hamburger, Phone } from "@/app/_icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Dropdown from "@/app/_components/nav/dropdown";
import { motion, useScroll } from "framer-motion";

// TODO: Use https://eu.louisvuitton.com/eng-e1/point-of-sale/austria/louis-vuitton-vienne
export default function Nav() {
  const ref = useRef<HTMLDivElement>(null);
  const { owner, tel } = useContentHero();
  const { scrollYProgress } = useScroll();

  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isDropdownOpened, setIsDropdownOpened] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setIsScrolledDown(window.scrollY !== 0);
    };
  }, []);

  return (
    // TODO: Add bg color as soon as user scrolls down
    <>
      <motion.div
        className="fixed left-0 top-0 w-full h-[2px] bg-black z-40"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: 0,
        }}
      />
      {isDropdownOpened && (
        <Dropdown onClose={() => setIsDropdownOpened(false)} />
      )}
      <div
        ref={ref}
        className={c(
          `border-b border-black/20 bg-white transition-all	z-30 fixed top-0 items-center flex justify-between left-0 w-full text-right px-2 py-2`,
          {
            "bg-white p-2": isScrolledDown,
            // "lg:px-6 lg:py-6": !isScrolledDown,
          }
        )}
        style={{
          boxShadow: isScrolledDown
            ? "0 6px 13px -4px rgba(0,0,0,.1)"
            : undefined,
        }}
      >
        <a
          className="pointer-events-none"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
        <div className="flex items-center">
          <button
            onClick={() => setIsDropdownOpened((prev) => !prev)}
            className="flex space-x-1 items-center"
          >
            <span className="font-bold">Menu</span>
            <Image
              src={Hamburger}
              alt="Vercel Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
      </div>
    </>
  );
}
