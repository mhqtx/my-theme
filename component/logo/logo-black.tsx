import Image from "next/image";

import Logo from "../../_images/vercel-white.png";

export function LogoBlack() {
  return (
    <a
      className="pointer-events-none"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={Logo}
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </a>
  );
}
