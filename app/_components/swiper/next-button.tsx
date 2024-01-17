import c from "clsx";
import Image from "next/image";

import {
  nextElClassName,
  gradientElClassName,
  navigationElClassName,
} from "@/app/_components/swiper";

export function NextButton() {
  return (
    <div className={nextElClassName}>
      <div
        className={c(
          gradientElClassName,
          "right-0 bg-gradient-to-l max-sm:hidden",
        )}
      />
      <button
        aria-label="Arrow next"
        className={c(navigationElClassName, "right-1")}
      >
        <Image
          alt=""
          height={12}
          //   TODO: FIX
          src="arrow-right.svg"
          width={12}
        />
      </button>
    </div>
  );
}
