import { ReactNode } from "react";

interface Props {
  title: string;
  description: string;
  cta: ReactNode;
  media: ReactNode;
}

export function Hero1({ title, description, cta, media }: Props) {
  return (
    <section className="bg-foreground flex h-screen w-full flex-col bg-5 p-2 px-2 lg:p-12">
      <div className="container flex h-full">
        <div className="flex w-full flex-col items-center justify-center lg:w-1/2 lg:pr-4 xl:pr-8">
          <div>
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="mb-4 mt-3 text-lg md:text-xl">{description}</p>
            <div className="mt-4 flex space-x-1">{cta}</div>
          </div>
        </div>
        <div className="hidden w-1/2 justify-center text-center lg:flex lg:items-center">
          {media}
        </div>
      </div>
    </section>
  );
}
