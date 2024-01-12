"use client";

import { TypeAnimation } from "react-type-animation";

export default function Description() {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">Good afternoon!</h1>
      <p className="text-xl mt-3 mb-6 min-h-[140px]">
        <TypeAnimation
          sequence={[
            "Empower your small business with a sleek online presence at a fraction of the cost. Budget-friendly, professional websites tailored for small businesses. Elevate your brand effortlessly in the digital world.",
            400,
          ]}
          repeat={Infinity}
          speed={70}
        />
      </p>
      <button className="text-xl font-semibold mt-3 w-fit space-x-1">
        <span>Learn more</span>
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </button>
    </div>
  );
}
