// import { PrismaClient } from "@prisma/client";
import { Hero } from "@/app/_components/hero";
// import { Footer } from "@/app/_components/footer";
import HeroBackground from "./_images/hero-background.jpg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "@/app/_components/swiper";
import { Gallery } from "@/app/_components/gallery";
import { Footer } from "@/app/_components/footer";

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
      <div className="flex flex-col md:flex-row">
        <div className="w-1/2">radnov reme</div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.858579285921!2d20.489992776238196!3d44.80407067107078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083f03126e3%3A0x6639fb364a2e1693!2sQuantox%20Technology!5e0!3m2!1sen!2srs!4v1705230179211!5m2!1sen!2srs"
          width="50%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer />
    </>
  );
}
