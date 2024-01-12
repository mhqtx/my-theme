import { Instagram, Viber, Whatsapp } from "@/app/_icons";
import Image from "next/image";

const icons = [
  {
    src: Instagram,
    alt: "Instagram",
  },
  {
    alt: "Whatsapp",
    src: Whatsapp,
  },
  {
    alt: "Viber",
    src: Viber,
  },
];

export default function Contact() {
  return (
    <div className="flex mt-5 flex-col">
      <h6 className="font-bold text-base mb-2">Get in touch:</h6>
      <div className="flex space-x-1 flex-grow items-center ">
        {icons.map((icon) => (
          <div
            key={icon.src}
            className="rounded-full w-10 h-10 flex items-center justify-center text-white bg-black"
          >
            <Image
              alt={icon.alt}
              className="text-white"
              src={icon.src}
              width={24}
              height={24}
            />
          </div>
        ))}
        <div className="text-black/20 mx-4">|</div>
        <a
          href="tel:+381629630157"
          className="rounded-full bg-black px-4 h-10 flex items-center justify-center text-white"
        >
          MILAN +38169630157
        </a>
      </div>
    </div>
  );
}
