import Contact from "@/app/_components/socials";
import Header from "@/app/_components/hero/header";
// import { PrismaClient } from "@prisma/client";
import Description from "@/app/_components/hero/description";
import Image from "next/image";
import HeroBackground from "../../_images/hero-background-2.jpg";
import Socials from "@/app/_components/socials";

export async function Hero() {
  // const prisma = new PrismaClient();
  // const content = await prisma.main.findUnique({
  //   where: {
  //     id: "clr6u9ddt0000a0svjig9dg88",
  //   },
  // });

  return (
    <div className="flex">
      <div
        className="relative px-2 py-5 lg:py-10 flex justify-between flex-col p-2 lg:p-12 h-screen w-full"
        style={{
          backgroundImage: "radial-gradient(#a9a9a9 1px, #ffffff 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="container h-full flex">
          <div className="w-full h-full justify-between flex flex-col lg:w-1/2 ">
            <div />
            <Description />
            {/* <Socials /> */}
            <div />
          </div>
          <div className="hidden lg:flex lg:items-center w-1/2 text-center justify-center">
            <Image
              alt="Hero wallpaper"
              className="rounded-xl w-[80%] rotate-50 mb-5"
              src={HeroBackground}
              width={450}
              height={250}
            />
          </div>
        </div>
      </div>
      {/* <div className="relative hidden lg:flex lg:w-1/2">
        <Image
          alt="Hero wallpaper"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={HeroBackground}
          width={1920}
          height={1277}
        />
        <div
          // TODO: Make bg-pattern for other items...
          className="absolute top-0 left-0 w-full h-full bg-hero-dark"
          style={{
            backgroundSize: "40px 40px",
          }}
        />
      </div> */}
    </div>
  );
}
