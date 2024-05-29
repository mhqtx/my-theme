"use client";

import c from "clsx";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";

import Dropdown from "@component/nav/dropdown";
import { useContent } from "@hook/use-content";

// TODO: Use https://eu.louisvuitton.com/eng-e1/point-of-sale/austria/louis-vuitton-vienne
export default function Nav() {
  const ref = useRef<HTMLDivElement>(null);
  const { owner, tel } = useContent();
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
        className="fixed left-0 top-0 z-40 h-[2px] w-full bg-black"
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
          `fixed left-0 top-0 z-30 flex h-6 w-full items-center justify-between border-b border-black/20 bg-white px-2 text-right transition-all`,
          {
            "bg-white p-2": isScrolledDown,
          },
        )}
        style={{
          boxShadow: isScrolledDown
            ? "0 6px 13px -4px rgba(0,0,0,.1)"
            : undefined,
        }}
      >
        <div className="container flex w-full items-center justify-between">
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
            {/* <div className="hidden sm:flex">
              <Socials />
            </div> */}
            {/* <span className="mx-2 hidden text-black/10 sm:flex">|</span> */}
            <button
              onClick={() => setIsDropdownOpened((prev) => !prev)}
              className="flex h-5 items-center justify-center space-x-1 font-bold text-black"
            >
              {isDropdownOpened ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-3 w-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
