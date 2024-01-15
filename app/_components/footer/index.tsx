import { useContentHero } from "@/app/_content/hero";
import { About } from "@/app/_components/footer/about";
import LogoWhite from "../../_images/vercel-white.png";
import Image from "next/image";

export function Footer() {
  // TODO: Change to useContent since it's all over the place the same...
  const { title, description, owner, tel, email } = useContentHero();

  return (
    <div
      className="w-full bg-black text-white p-2 lg:p-4"
      style={{
        backgroundImage: "radial-gradient(rgb(40 39 39) 1px, rgb(0, 0, 0) 1px)",
        backgroundSize: "40px 40px",
      }}
    >
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
      </div>
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row lg:space-x-4">
        <About />
        <div className="max-w-[400px] mb-4 mt-4">
          <h5 className="font-bold mb-2">Links</h5>
          <div className="flex flex-col lg:flex-row lg:space-x-2">
            <p className="text-sm underline">Intro</p>
            <p className="text-sm underline">Who we are</p>
            <p className="text-sm underline">Gallery</p>
            <p className="text-sm underline">Location</p>
            <p className="text-sm underline">Contact form</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1200px] mx-auto">
        <small className="text-white">
          © {new Date().getFullYear()} Michelangelo Hanimi, all rights reserved
          | Powered by
          <span className="italic underline">Vercel.com</span>
        </small>
      </div>
    </div>
  );
}
