"use client";

import HeroBackground from "../../_images/hero-background.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "@/app/_components/swiper";

export function Gallery() {
  return (
    <div className="text-center bg-black p-12">
      <Swiper>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <SwiperSlide key={item} className="!w-fit">
            <div className="relative w-[275px] h-[467px] bg-red-50">
              <Image
                alt="Hero wallpaper"
                className="w-full h-full absolute object-cover"
                src={HeroBackground}
                width={600}
                height={200}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="p-4 right-0 mx-auto z-20 bg-white text-black w-fit font-medium mt-8 space-x-2">
        <span>See more on Instagram</span>
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </button>
    </div>
  );
}
