import c from "clsx";
import Image from "next/image";

import {
  prevElClassName,
  gradientElClassName,
  navigationElClassName,
} from "@/app/_components/swiper";

export function PrevButton() {
  return (
    <div className={prevElClassName}>
      <div
        className={c(
          gradientElClassName,
          "left-0 bg-gradient-to-r max-sm:hidden",
        )}
      />
      <button
        aria-label="Arrow prev"
        className={c(navigationElClassName, "left-1")}
      >
        <Image
          alt=""
          className="rotate-180"
          height={12}
          //   TODO: FIX
          src="arrow-right.svg"
          width={12}
        />
      </button>
    </div>
  );
}
