import { useContentHero } from "@/app/_content/hero";
import { About } from "@/app/_components/footer/about";
import LogoWhite from "../../_images/vercel-white.png";
import Image from "next/image";
import Socials from "@/app/_components/socials";

export function Footer() {
  // TODO: Change to useContent since it's all over the place the same...
  const {
    title,
    description,
    owner,
    tel,
    email,
    workingHours,
    services: { items: serviceItems },
    menu: { items: menuItems },
  } = useContentHero();

  return (
    <div
      className="w-full bg-black text-white p-2 lg:p-4"
      style={{
        backgroundImage: "radial-gradient(rgb(40 39 39) 1px, rgb(0, 0, 0) 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      <div className="container">
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
      <div className="container flex flex-col lg:flex-row lg:space-x-4">
        <About />
        <div className="bg-reds-100 flex flex-col lg:flex-row w-full lg:[&>div]:mx-3">
          <div className="max-w-[400px] mb-4 mt-4">
            <h5 className="font-bold mb-2">Services</h5>
            <div className="flex flex-col">
              {serviceItems.map((item) => (
                <p key={item.title} className="text-sm mb-0.5 w-full">
                  {item.title}
                </p>
              ))}
            </div>
          </div>
          <div className="max-w-[400px] mb-4 mt-4">
            <h5 className="font-bold mb-2">Working hours</h5>
            <div className="flex flex-col">
              {Object.entries(workingHours).map(([key, value]) => (
                <p key={key} className="text-sm mb-0.5 w-full space-x-1 ">
                  <span className="capitalize">{key}</span>
                  <small className="bg-white text-black">{value}</small>
                </p>
              ))}
            </div>
          </div>
          <div className="max-w-[400px] mb-4 mt-4">
            <h5 className="font-bold mb-2">Links</h5>
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <p key={item} className="text-sm mb-0.5 w-full">
                  {item}
                </p>
              ))}
            </div>
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
