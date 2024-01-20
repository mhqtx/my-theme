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
              <div className="mt-4 flex space-x-1">
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  <span>Call us</span>
                </Button>
                <Button variant="secondary">Read more</Button>
              </div>
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
