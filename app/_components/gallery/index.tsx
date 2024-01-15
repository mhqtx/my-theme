"use client";

import HeroBackground from "../../_images/hero-background.jpg";
import Gallery1 from "../../_images/gallery/gallery-1.png";

import Image from "next/image";
import { Swiper, SwiperSlide } from "@/app/_components/swiper";
import Socials from "@/app/_components/socials";

export function Gallery() {
  return (
    <div className="text-center bg-black px-4 py-16">
      <Swiper className="my-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <div className="relative w-[275px] h-[467px] bg-red-50  rounded-xl">
              <Image
                alt="Hero wallpaper"
                className="w-full h-full object-cover  rounded-xl"
                src={Gallery1}
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
      <div className="p-2 right-0 mx-auto z-20 text-white w-fit font-medium mt-8">
        <span className="mb-2">Seek for more content on:</span>
        <Socials iconWrapperClassName="bg-[#2b2b2b]" />
      </div>
    </div>
  );
}
