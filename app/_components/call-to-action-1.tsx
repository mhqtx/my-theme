import { ReactNode } from "react";

interface Props {
  text: string | ReactNode;
  title: string | ReactNode;
  cta: ReactNode;
  icon: ReactNode;
}

export function CallToAction1({ text, title, cta, icon }: Props) {
  return (
    <section className="bg-grays-1 w-full px-2 py-10">
      <div className="container text-center lg:w-1/2">
        <span className="mx-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
          {icon}
        </span>
        <h2 className="mt-2 space-x-1 text-3xl">{title}</h2>
        <p className="mb-4 mt-3 text-lg md:text-xl">{text}</p>
        {cta}
      </div>
    </section>
  );
}
