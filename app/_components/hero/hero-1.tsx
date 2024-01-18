"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { useContent } from "@/app/_hooks/use-content";
import { Button } from "@/app/_components/button";

import HeroBackground from "../../_images/hero-background-2.jpg";

export async function Hero1() {
  const { title, description, ctaButton } = useContent();

  return (
    <>
      <div className="flex h-screen w-full flex-col bg-hero-white bg-5 p-2 px-2 lg:p-12">
        <div className="container flex h-full">
          <div className="flex h-full w-full flex-col items-center justify-center lg:w-1/2 ">
            <div>
              <h1 className="text-3xl font-bold">{title}</h1>
              <p className="mb-4 mt-3 text-lg md:text-xl">{description}</p>
              <Button>{ctaButton.text}</Button>
            </div>
          </div>
          <div className="hidden w-1/2 justify-center text-center lg:flex lg:items-center">
            <Image
              alt="{{brand}} hero image"
              className="w-[80%] rounded-xl"
              src={HeroBackground}
              width={800}
              height={533}
            />
          </div>
        </div>
      </div>
    </>
  );
}
