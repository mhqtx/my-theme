"use client";

import { useEffect } from "react";
import Image from "next/image";

import { Hamburger } from "@/app/_icons";
import { useContent } from "@/app/_hooks/use-content";

interface Props {
  onClose: () => void;
}

// TODO: Improve logic :=)
export default function Dropdown({ onClose }: Props) {
  const {
    menu: { items: menuItems },
  } = useContent();

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-0 z-40 h-full w-full bg-black/90"
        onClick={onClose}
      />
      <div className="fixed right-0 z-40 flex h-full w-full flex-col items-end bg-white p-2 lg:w-1/3">
        <button onClick={onClose} className="flex items-center space-x-1">
          <span className="font-bold">Close</span>
          <Image
            src={Hamburger}
            alt="Vercel Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
        </button>
        <div className="w-full text-black">
          <h1 className="mt-4 text-3xl font-bold">Browse:</h1>
          <div className="mb-2 flex flex-col text-2xl last:mb-0">
            {menuItems.map((item) => (
              <a
                key={item}
                className="hover:text-[#fe8484]"
                href="#"
                onClick={onClose}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
