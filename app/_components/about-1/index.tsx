"use client";

import c from "clsx";
import { useState } from "react";

import { Button } from "@/app/_components/button";

interface Props {
  title: string;
  description: React.ReactNode;
}

export function About1({ title, description }: Props) {
  const [textExpanded, setTextExpanded] = useState(false);

  return (
    <section className="bg-[#d9fff1] px-2 py-10">
      <div className="container">
        <h2 className="mb-3 text-3xl font-bold lg:w-1/2">{title}</h2>
        <div
          className={c("relative gap-x-8 overflow-hidden lg:columns-2", {
            "h-[180px] lg:h-auto": !textExpanded,
          })}
        >
          <div className="mb-2 space-y-2 text-lg">{description}</div>
          {!textExpanded && (
            <>
              <div className="absolute bottom-0 left-0 h-[180px] w-full bg-gradient-to-t from-[#d9fff1] to-transparent lg:hidden"></div>
            </>
          )}
        </div>
        <Button
          onClick={() => setTextExpanded((prev) => !prev)}
          className="lg:hidden"
        >
          {textExpanded ? "Read less" : "Read more"}
        </Button>
      </div>
    </section>
  );
}
