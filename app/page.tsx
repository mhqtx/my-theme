// import { PrismaClient } from "@prisma/client";
import { Hero } from "@/app/_components/hero";
// import { Footer } from "@/app/_components/footer";
import HeroBackground from "./_images/hero-background.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "@/app/_components/swiper";
import { Gallery } from "@/app/_components/gallery";

export default async function Home() {
  // const prisma = new PrismaClient();
  // const content = await prisma.main.findUnique({
  //   where: {
  //     id: "clr6u9ddt0000a0svjig9dg88",
  //   },
  // });

  return (
    <>
      <Hero />
      <Gallery />
    </>
  );
}
