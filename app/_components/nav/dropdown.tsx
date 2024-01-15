"use client";

import { useEffect } from "react";

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
        className="fixed bg-black/90 left-0 w-full h-full z-40"
        onClick={onClose}
      />
      <div
        className="bg-hero-white flex items-center text-center justify-center fixed w-full h-[80%] z-40 flex-col"
        style={{
          backgroundSize: "40px 40px",
        }}
      >
        <div className="text-black">
          <h1 className="text-3xl font-bold mt-4">Browse:</h1>
          <div className="flex flex-col text-2xl mb-2 last:mb-0">
            <a href="#" onClick={onClose}>
              Home
            </a>
            <a href="#" onClick={onClose}>
              Who we are
            </a>
            <a href="#" onClick={onClose}>
              Social media content
            </a>
            <a href="#" onClick={onClose}>
              Location
            </a>
            <a href="#" onClick={onClose}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
