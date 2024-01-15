import { twMerge } from "tailwind-merge";
import { useContentHero } from "@/app/_content/hero";
import Image from "next/image";
import CaptionH2 from "@/app/_components/caption";

interface Props {
  iconWrapperClassName?: string;
}

export default function Services({ iconWrapperClassName }: Props) {
  const {
    services: { title, description, items },
  } = useContentHero();

  return (
    <>
      <CaptionH2 title={title} description={description} />
      <div className="bg-[#f7f7f7] px-2 py-5 lg:py-10 flex">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            {items.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex w-full flex-col lg:w-1/3 mb-2 last:mb-0 lg:pr-4 text-black p-2 rounded-xl "
                >
                  <div className="flex items-center space-x-1">
                    <span className="shrink-0 rounded-full w-5 h-5 font-bold text-white flex items-center justify-center bg-black">
                      {++index}
                    </span>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <div className="h-[1px] w-full bg-gradient-to-r from-black my-2" />
                  <p className="">{item.description}</p>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
