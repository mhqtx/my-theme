"use client";

import HeroBackground from "../../_images/hero-background.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "@/app/_components/swiper";

export function Gallery() {
  return (
    <div className="text-center bg-black px-4 py-16">
      <div className="text-center text-white max-w-[50%] mx-auto">
        <h1 className="text-3xl font-bold">What we do</h1>
        <p className="text-lg md:text-xl mt-3 mb-6 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolore
          quod soluta.
        </p>
      </div>
      <Swiper className="my-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <SwiperSlide key={item} className="!w-fit">
            <div className="relative w-[275px] h-[467px] bg-red-50">
              <Image
                alt="Hero wallpaper"
                className="w-full h-full object-cover"
                src={HeroBackground}
                width={600}
                height={200}
              />
              <div
                className="p-2 text-white text-left absolute bottom-0 w-full backdrop-blur-md"
                style={{
                  textShadow: "0.5px 0.5px 0.5px black",
                }}
              >
                <h6 className="font-medium">T-Shirts</h6>
                <p className=" text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  dolore quod soluta.
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="p-2 right-0 mx-auto z-20 bg-white text-black w-fit font-medium mt-8 space-x-2">
        <span>See more on Instagram</span>
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </button>
    </div>
  );
}
