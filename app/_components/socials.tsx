import { twMerge } from "tailwind-merge";
import { useContentHero } from "@/app/_content/hero";
import Image from "next/image";

interface Props {
  iconWrapperClassName?: string;
}

export default function Socials({ iconWrapperClassName }: Props) {
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
          className={twMerge(
            "shrink-0 rounded-full w-5 h-5 flex items-center justify-center bg-black",
            iconWrapperClassName
          )}
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
