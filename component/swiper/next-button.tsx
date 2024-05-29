import c from "clsx";

import { nextElClassName, navigationElClassName } from "@component/swiper";

export function NextButton() {
  return (
    <div className={nextElClassName}>
      <div
        className={c(
          // gradientElClassName,
          "right-0 bg-gradient-to-l max-sm:hidden",
        )}
      />
      <button
        aria-label="Arrow next"
        className={c(
          navigationElClassName,
          "right-2",
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-3 w-3 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}
