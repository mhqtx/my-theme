import { Hamburger } from "@/app/_icons";
import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex justify-between w-full">
      <a
        className="pointer-events-none flex place-items-center"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
      </a>

      <button>
        <Image
          src={Hamburger}
          alt="Vercel Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
      </button>
    </div>
  );
}
