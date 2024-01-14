"use client";

import { useContentHero } from "@/app/_content/hero";

export default function Description() {
  const { title, description, link } = useContentHero();

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <p className="text-lg md:text-xl mt-3 mb-3 text-black">{description}</p>
      <a
        href={link.href}
        target="_blank"
        className="text-lg md:text-xl text-black font-semibold mt-3 w-fit space-x-1"
      >
        <span>{link.text}</span>
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </a>
    </div>
  );
}
