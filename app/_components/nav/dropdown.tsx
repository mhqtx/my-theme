"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Hamburger } from "@/app/_icons";

interface Props {
  onClose: () => void;
}

// TODO: Improve logic :=)
export default function Dropdown({ onClose }: Props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      <div
        className="fixed bg-black/90 left-0 h-full w-full z-40"
        onClick={onClose}
      />
      <div className="bg-white flex p-2 items-end right-0 fixed w-full lg:w-1/3 h-full z-40 flex-col">
        <button onClick={onClose} className="flex space-x-1 items-center">
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
        <div className="text-black text-right">
          <h1 className="text-3xl font-bold mt-4">Browse:</h1>
          <div className="flex flex-col text-2xl mb-2 last:mb-0">
            {[
              "Home",
              "Services",
              "Social media content",
              "Location",
              "Contact",
            ].map((item) => (
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
