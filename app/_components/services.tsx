import { twMerge } from "tailwind-merge";
import { useContentHero } from "@/app/_content/hero";
import Image from "next/image";

interface Props {
  iconWrapperClassName?: string;
}

export default function Services({ iconWrapperClassName }: Props) {
  const { socials } = useContentHero();

  return (
    <div className="flex space-x-0.5 flex-wrap px-2 py-12">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((icon, index) => (
        <div key={index} className="flex w-1/6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            // TODO: Use twMerge
            className={twMerge(
              "shrink-0 rounded-full w-10 h-10 flex items-center justify-center bg-black",
              iconWrapperClassName
            )}
          >
            <span className="text-bold text-white">{++index}</span>
          </a>
          <div>
            <h6 className="font-bold text-lg">Service</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel id at
              laborum quas quis iusto eaque voluptate, culpa asperiores...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
