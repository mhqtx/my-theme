import Brand from "@/app/_components/hero/header";
import Socials from "@/app/_components/socials";
import { useContentHero } from "@/app/_content/hero";
import Image from "next/image";
import LogoWhite from "../../_images/vercel-white.png";

export function Footer() {
  // TODO: Change to useContent since it's all over the place the same...
  const { title, description } = useContentHero();

  return (
    <div className="w-full bg-black text-white p-2 lg:p-4">
      <div className="max-w-[1200px] mx-auto">
        <a
          className="pointer-events-none"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={LogoWhite}
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
        <div className="max-w-[400px] mb-4 mt-4">
          <h5 className="font-bold">{title}</h5>
          <p className="text-sm mt-2 mb-4">{description}</p>
        </div>
        {/* 
        <div className="max-w-[400px] mb-4 mt-4">
          <h5 className="font-bold">Belgrade</h5>
          <p className="text-sm">Krfska 26</p>
        </div> */}

        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.858579285921!2d20.489992776238196!3d44.80407067107078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083f03126e3%3A0x6639fb364a2e1693!2sQuantox%20Technology!5e0!3m2!1sen!2srs!4v1705230179211!5m2!1sen!2srs"
          width="30%"
          height="200"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}

        <div className="max-w-[400px] mb-4 mt-4">
          <Socials />
        </div>
      </div>
    </div>
  );
}
