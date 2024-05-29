import c from "clsx";

import { prevElClassName, navigationElClassName } from "@component/swiper";

export function PrevButton() {
  return (
    <div className={prevElClassName}>
      <div
        className={c(
          // gradientElClassName,
          "left-0 bg-gradient-to-r max-sm:hidden",
        )}
      />
      <button
        aria-label="Arrow prev"
        className={c(
          navigationElClassName,
          "left-1",
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </svg>
      </button>
    </div>
  );
}
