"use client";

import "swiper/css";
import "swiper/css/navigation";
import * as Swjs from "swiper/react";
import { PropsWithChildren } from "react";
import { Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import { PrevButton } from "./prev-button";
import { NextButton } from "./next-button";

export const nextElClassName = "arrow-next";
export const prevElClassName = "arrow-prev";
export const navigationElClassName = "absolute top-1/2 -translate-y-1/2 z-10";
export const gradientElClassName =
  "pointer-events-none w-1/4 h-full absolute top-0 z-10 from-black to-transparent";

interface Props extends PropsWithChildren<SwiperOptions> {
  className?: string;
}

function Swiper({ children, className, ...rest }: Props) {
  return (
    <Swjs.Swiper
      className={`relative ${className}`}
      modules={[Navigation]}
      navigation={{
        disabledClass: "hidden",
        nextEl: `.${nextElClassName}`,
        prevEl: `.${prevElClassName}`,
      }}
      slidesPerView="auto"
      spaceBetween={24}
      {...rest}
    >
      <PrevButton />
      {children}
      <NextButton />
    </Swjs.Swiper>
  );
}
const SwiperSlide = Swjs.SwiperSlide;
export { Swiper, SwiperSlide };
