import Contact from "@/app/_components/hero/contact";
import Header from "@/app/_components/hero/header";
// import { PrismaClient } from "@prisma/client";
import Description from "@/app/_components/hero/description";
import Image from "next/image";
import HeroBackground from "../../_images/hero-background.jpg";

export async function Hero() {
  // const prisma = new PrismaClient();
  // const content = await prisma.main.findUnique({
  //   where: {
  //     id: "clr6u9ddt0000a0svjig9dg88",
  //   },
  // });

  return (
    <>
      <Image
        alt="Hero wallpaper"
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        src={HeroBackground}
        width={1920}
        height={1277}
      />
      <div className="relative z-20 flex justify-between flex-col p-4 md:p-12 bg-white/95 _bg-main/95 h-screen w-full md:w-1/2">
        {/* TODO: use srcSet */}
        <Header />
        <Description />
        <Contact />
      </div>
    </>
  );
}
