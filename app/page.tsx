// import { PrismaClient } from "@prisma/client";
import { Hero } from "@/app/_components/hero";
import { Gallery } from "@/app/_components/gallery";
import { Footer } from "@/app/_components/footer";
import Services from "@/app/_components/services";
import Location from "@/app/_components/location";

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
      <Services />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
}
