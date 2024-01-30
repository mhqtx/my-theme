import { ReactNode } from "react";

interface Props {
  title: string;
  text: string;
  items: any[];
  cta: ReactNode;
}

export function Services1({ title, text, items, cta }: Props) {
  return (
    <div className="bg-foreground-primary flex px-2 py-10 lg:py-10">
      <div className="container">
        <div className="xl:flex xl:space-x-10">
          <div className="mb-10 xl:w-[35%]">
            {/* TODO: Add photo here? */}
            <h2 className="text-3xl font-bold">{title}</h2>
            <p className="mb-4 mt-3 text-lg md:text-xl">{text}</p>
            <div>{cta}</div>
          </div>
          <div className="flex flex-wrap xl:w-[65%]">
            {items.map((item, index) => (
              <div
                key={index}
                className="mb-4 flex w-full flex-col rounded-xl pr-2 last:mb-0 md:w-1/2 lg:w-1/2"
              >
                <div className="flex items-center space-x-1">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary font-bold text-secondary">
                    {++index}
                  </span>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                </div>
                <div className="my-2 h-[1px] w-full bg-gradient-to-r from-primary" />
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
