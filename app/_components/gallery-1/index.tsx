"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "@/app/_components/swiper";
import Socials from "@/app/_components/socials";

import GalleryImg from "../../_images/gallery/gallery-1.png";

type Section = { title: string; text: string };

interface Props {
  section1: Section;
  section2: Section;
  items: any[];
}

export function Gallery1({ section1, section2, items }: Props) {
  return (
    <section className="bg-grays-1 px-2 py-10">
      <div className="container">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold">{section1.title}</h2>
          <p className="mt-3 text-lg md:text-xl">{section1.text}</p>
        </div>
      </div>

      <Swiper className="my-4 lg:my-8">
        {items.map((item, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <div className="relative h-[467px] w-[275px] rounded-xl bg-red-50">
              <Image
                alt="Hero wallpaper"
                className="h-full w-full rounded-xl object-cover"
                // TODO: Replace img
                src={GalleryImg}
                width={600}
                height={200}
              />
              <div className="absolute top-0 w-full rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-black/50 to-transparent p-2 pb-[50%] text-left text-white">
                <h6 className="font-medium">{item.title}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="container">
        <div className="lg:w-1/2">
          <h3 className="mb-1 text-2xl font-bold">{section2.title}</h3>
          <p className="mb-3">{section2.text}</p>
          <Socials />
        </div>
      </div>
    </section>
  );
}
