"use client";

import { useState } from "react";

export function Notify() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    // TODO: Add bg color as soon as user scrolls down
    <>
      <div className="fixed bottom-0 left-0 z-30 flex w-full items-center justify-between border-b border-black/20 bg-black px-2 py-1 text-white transition-all">
        <div className="container">
          <div className="flex items-center justify-between space-x-1">
            <p className="text-sm font-medium">
              NEW YEAR NEW SKILLS! | Learn to design custom fonts with Dribbble
              co-founder Dan Cederholm | Jan 23, 2024
            </p>
            <button onClick={() => setShow(false)} className="h-4 w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-2 w-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
