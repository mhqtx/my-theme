import { useContent } from "@/app/_hooks/use-content";
import { Button } from "@/app/_components/button";

// TODO: Split into components
export function Services1() {
  const {
    services: { title, description, items },
  } = useContent();

  return (
    <div className="flex bg-[#f7f7f7] px-2 py-10 lg:py-10">
      <div className="container xl:flex xl:space-x-10">
        <div className="mb-10 xl:w-[35%]">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mb-4 mt-3 text-lg md:text-xl">{description}</p>
          <Button>Call us now</Button>
        </div>
        <div className="flex flex-wrap xl:w-[65%]">
          {items.map((item, index) => (
            <div
              key={index}
              className="mb-4 flex w-full flex-col rounded-xl pr-2 last:mb-0 md:w-1/2 lg:w-1/2"
            >
              <div className="flex items-center space-x-1">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black font-bold text-white">
                  {++index}
                </span>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
              {/* TODO: Create a component */}
              <div className="my-2 h-[1px] w-full bg-gradient-to-r from-black" />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
