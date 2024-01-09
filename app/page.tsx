import Footer from "@/app/_components/footer";
import Brand from "@/app/_components/brand";
import HelloWorld from "@/app/_components/hello-world";
import { PrismaClient } from "@prisma/client";

export default async function Home() {
  const prisma = new PrismaClient();
  const content = await prisma.main.findUnique({
    where: {
      id: "clr6u9ddt0000a0svjig9dg88",
    },
  });

  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{
        // TODO: srcSet with img
        background: `url(https://www.normareclamare.com/assets/images/background-home-01.jpg)`,
      }}
    >
      <main className="flex flex-col p-12 bg-main/95 h-screen w-full lg:w-1/2">
        <Brand />
        <div className="flex-1" />
        <HelloWorld title={content?.title} description={content?.description} />
        <div className="flex-1" />
        <Footer city={content?.city} address={content?.address} />
      </main>
    </div>
  );
}
