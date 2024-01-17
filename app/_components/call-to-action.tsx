import { useContentHero } from "@/app/_content/hero";
import { About } from "@/app/_components/footer/about";
import LogoWhite from "../../_images/vercel-white.png";
import Image from "next/image";
import Socials from "@/app/_components/socials";

// TODO: Tidy up everything, use proper html tags, split into components, use data from content hook
export function CallToAction() {
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
    <div className="w-full bg-yellow-100 text-white p-2 lg:p-6">
      <div className="container">CTA1 | CTA2</div>
    </div>
  );
}
