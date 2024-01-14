import { useContentHero } from "@/app/_content/hero";
import Image from "next/image";

export default function Socials() {
  const { socials } = useContentHero();

  return (
    <div className="flex space-x-0.5 items-center">
      {socials.map((icon) => (
        <a
          href={icon.href}
          key={icon.src}
          target="_blank"
          rel="noopener noreferrer"
          // TODO: Use twMerge
          className="shrink-0 rounded-full w-10 h-10 flex items-center justify-center bg-black"
        >
          <Image
            alt={icon.alt}
            className="text-white"
            src={icon.src}
            width={24}
            height={24}
          />
        </a>
      ))}
    </div>
  );
}
