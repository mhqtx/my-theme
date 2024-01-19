"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "@/app/_components/swiper";
import Socials from "@/app/_components/socials";
import { useContent } from "@/app/_hooks/use-content";

import GalleryImg from "../../_images/gallery/gallery-1.png";

export function Gallery1() {
  const { gallery } = useContent();

  return (
    <div className="px-2 py-10">
      <div className="container">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold">Explore the Artistry</h2>
          <p className="mt-3 text-lg md:text-xl">
            Immerse yourself in a captivating visual journey through our
            Gallery, showcasing a curated collection of meticulously crafted web
            development projects. Uncover the seamless fusion of design and
            functionality in our horizontal image gallery, a testament to our
            passion for creating digital masterpieces
          </p>
        </div>
      </div>

      <Swiper className="my-4 lg:my-8">
        {gallery.items.map((item, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <div className="relative h-[467px] w-[275px] rounded-xl bg-red-50">
              <Image
                alt="Hero wallpaper"
                className="h-full w-full rounded-xl  object-cover"
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
        <h5 className="mb-1 font-bold">Connect with us</h5>
        <Socials />
      </div>
    </div>
  );
}
