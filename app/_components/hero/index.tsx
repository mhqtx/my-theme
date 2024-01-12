import Contact from "@/app/_components/hero/contact";
import Header from "@/app/_components/hero/header";
// import { PrismaClient } from "@prisma/client";
import Description from "@/app/_components/hero/description";

export async function Hero() {
  // const prisma = new PrismaClient();
  // const content = await prisma.main.findUnique({
  //   where: {
  //     id: "clr6u9ddt0000a0svjig9dg88",
  //   },
  // });

  return (
    <div className="flex justify-between flex-col p-12 bg-white/95 _bg-main/95 h-screen w-full lg:w-1/2">
      <Header />
      <Description />
      <Contact />
    </div>
  );
}
