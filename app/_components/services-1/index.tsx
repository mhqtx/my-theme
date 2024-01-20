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
          {/* TODO: Add photo here? */}
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="mb-4 mt-3 text-lg md:text-xl">{description}</p>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>Call us</span>
          </Button>
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
