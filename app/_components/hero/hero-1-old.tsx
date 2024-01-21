"use client";

import Image from "next/image";

import { useContent } from "@/app/_hooks/use-content";
import { Button } from "@/app/_components/button";

import HeroBackground from "../../_images/hero-background-2.jpg";

export async function Hero1Old() {
  const { title, description, name } = useContent();

  return (
    <section className="flex h-screen w-full flex-col bg-hero-white bg-5 p-2 px-2 lg:p-12">
      <div className="container flex h-full">
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2 ">
          <div>
            <h1 className="text-3xl font-bold">
              {name}: {title}
            </h1>
            <p className="mb-4 mt-3 text-lg md:text-xl">{description}</p>
            <div className="mt-4 flex space-x-1">
              <Button>Call us</Button>
              <Button variant="secondary">Read more</Button>
            </div>
          </div>
        </div>
        <div className="hidden w-1/2 justify-center text-center lg:flex lg:items-center">
          <Image
            alt={`Welcome to ${name}`}
            className="w-[80%] rounded-xl"
            src={HeroBackground}
            width={800}
            height={533}
          />
        </div>
      </div>
    </section>
  );
}