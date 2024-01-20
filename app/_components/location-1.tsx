import { Button } from "@/app/_components/button";
import { useContent } from "@/app/_hooks/use-content";

export function Location1() {
  const { workingHours } = useContent();

  return (
    <div className="flex flex-col bg-white lg:flex-row">
      <div className="order-1 w-full p-2 lg:w-1/2 lg:p-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Get in touch</h2>
          <p className="mb-3 mt-3 text-lg md:text-xl">
            We are here to help. Wherever you are, Vercel Client Advisors will
            be delighted to assist you
          </p>

          <div className="mb-2">
            <h6 className="text-md mb-1 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-3 w-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <span>Location</span>
            </h6>
            <h6 className="text-md mb-1 flex items-start">
              <div className="flex flex-col">
                <span>Omladinskih brigada 72</span>
                <span className="text-black/50">Belgrade, Serbia</span>
                <span className="text-black/50">11000</span>
              </div>
            </h6>
          </div>

          <h6 className="text-md mb-1 flex items-start">
            <div className="flex flex-col">
              <span>+38128328412</span>
              <span className="text-black/50">Milan Hakaj</span>
            </div>
          </h6>

          <h6 className="text-md mb-2 flex items-start">
            <div className="flex flex-col">
              <span>milan.hakaj@mchnm.com</span>
              <span className="text-black/50">Milan Hakaj</span>
            </div>
          </h6>

          {Object.entries(workingHours).map(([key, value]) => (
            <p key={key}>
              <span className="capitalize">{key}</span> {value}
            </p>
          ))}

          <div className="mt-4 space-x-1">
            <Button>Get directions</Button>
            <Button>Call now</Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.858579285921!2d20.489992776238196!3d44.80407067107078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083f03126e3%3A0x6639fb364a2e1693!2sQuantox%20Technology!5e0!3m2!1sen!2srs!4v1705230179211!5m2!1sen!2srs"
          width="100%"
          height="100%"
          className="h-[450px] lg:h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
