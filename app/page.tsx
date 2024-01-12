// import { PrismaClient } from "@prisma/client";
import { Hero } from "@/app/_components/hero";
// import { Footer } from "@/app/_components/footer";
import HeroBackground from "./_images/hero-background.jpg";
import Image from "next/image";

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
      {/* TODO: use srcSet */}
      <Image
        alt="Hero wallpaper"
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        src={HeroBackground}
        width={1920}
        height={1277}
      />
    </>
  );
}
