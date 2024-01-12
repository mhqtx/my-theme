import { useContentHero } from "@/app/_content/hero";
import Image from "next/image";

export default function Contact() {
  const { socials, tel, owner } = useContentHero();

  return (
    <div className="flex mt-5 flex-col">
      <h6 className="font-bold text-base mb-2 text-black">Get in touch:</h6>
      <div className="flex space-x-1 flex-grow items-center ">
        {socials.map((icon) => (
          <a
            href={icon.href}
            key={icon.src}
            target="_blank"
            rel="noopener noreferrer"
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
        <div className="text-black/20 mx-4">|</div>
        <a
          href={`tel:${tel}`}
          className="shrink-0 rounded-full bg-black px-4 h-10 flex items-center justify-center text-white"
        >
          <span className="hidden sm:inline mr-2">{owner}</span>
          <span>{tel}</span>
        </a>
      </div>
    </div>
  );
}
