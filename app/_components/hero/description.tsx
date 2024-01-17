"use client";

import { useContent } from "@/app/_hooks/use-content";

export default function Description() {
  const { title, description, link } = useContent();

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold text-black">{title}</h1>
      <p className="text-lg md:text-xl mt-3 mb-4 text-black">{description}</p>
      <a
        href={link.href}
        target="_blank"
        className="text-xl  text-black font-semibold w-fit space-x-1"
      >
        <span>{link.text}</span>
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </a>
    </div>
  );
}
