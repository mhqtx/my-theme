// import { PrismaClient } from "@prisma/client";
import { Hero } from "@/app/_components/hero";
// import { Footer } from "@/app/_components/footer";

export default async function Home() {
  // const prisma = new PrismaClient();
  // const content = await prisma.main.findUnique({
  //   where: {
  //     id: "clr6u9ddt0000a0svjig9dg88",
  //   },
  // });

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{
        // TODO: srcSet with img
        background: `url(https://www.normareclamare.com/assets/images/background-home-01.jpg)`,
      }}
    >
      <Hero />
      {/* <Footer /> */}
    </div>
  );
}
