"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "@/app/_components/swiper";
import Socials from "@/app/_components/socials";

import Gallery1 from "../../_images/gallery/gallery-1.png";

export function Gallery() {
  return (
    <div className="bg-black px-4 py-16 text-center">
      <Swiper className="my-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <div className="relative h-[467px] w-[275px] rounded-xl  bg-red-50">
              <Image
                alt="Hero wallpaper"
                className="h-full w-full rounded-xl  object-cover"
                src={Gallery1}
                width={600}
                height={200}
              />
              <div
                className="absolute bottom-0 w-full p-2 text-left text-white backdrop-blur-md"
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
      <div className="right-0 z-20 mx-auto mt-8 w-fit p-2 font-medium text-white">
        <span className="mb-2">Seek for more content on:</span>
        <Socials iconWrapperClassName="bg-[#2b2b2b]" />
      </div>
    </div>
  );
}
