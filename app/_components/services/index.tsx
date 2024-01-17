import { useContent } from "@/app/_hooks/use-content";
import CaptionH2 from "@/app/_components/caption";

export default function Services() {
  const {
    services: { title, description, items },
  } = useContent();

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
                  className="flex w-full flex-col lg:w-1/3 mb-4 last:mb-0 text-black lg:p-2 rounded-xl"
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
