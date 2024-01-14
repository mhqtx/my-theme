import Contact from "@/app/_components/hero/contact";
import Header from "@/app/_components/hero/header";
// import { PrismaClient } from "@prisma/client";
import Description from "@/app/_components/hero/description";
import Image from "next/image";
import HeroBackground from "../../_images/hero-background-2.jpg";

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
        className="relative flex justify-between flex-col p-2 lg:p-12 h-screen w-full lg:w-1/2"
        style={{
          backgroundImage: "radial-gradient(#a9a9a9 1px, #ffffff 1px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div className="w-10 h-[22px]" />
        <Description />
        <Contact />
      </div>
      <div className="relative hidden lg:flex lg:w-1/2">
        <Image
          alt="Hero wallpaper"
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={HeroBackground}
          width={1920}
          height={1277}
        />
      </div>
    </div>
  );
}
