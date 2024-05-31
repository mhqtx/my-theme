import { useContent } from "@hook/use-content";
import { Button } from "@component/button";

export function Location1() {
  const { workingHours } = useContent();

  return (
    <div
      id="location1"
      className="animation-reveal flex flex-col bg-white lg:flex-row"
    >
      <div className="order-1 w-full lg:w-1/2">
        <div className="container-half p-2 lg:mx-0 lg:p-10 lg:px-10">
          <div className="mb-10">
            <h2 className="text-3xl font-bold">Get in touch</h2>
            <p className="mb-3 mt-3 text-lg md:text-xl">
              We are here to help. Wherever you are, Vercel Client Advisors will
              be delighted to assist you
            </p>
            <div className="mb-4">
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
                  <span>Belgrade, Serbia</span>
                  <span>11000</span>
                </div>
              </h6>
            </div>

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
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <span>Working hours</span>
            </h6>
            {Object.entries(workingHours).map(([key, value]) => (
              <p key={key}>
                <span className="capitalize">{key}</span> {value}
              </p>
            ))}

            <h6 className="text-md mt-4 flex space-x-0.5">
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
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                />
              </svg>
              <span>Contact</span>
            </h6>

            <h6 className="text-md flex items-start">
              <div className="flex flex-col">
                <span>+38128328412 - Milan</span>
                <span>+38124825443 - Sneźana</span>
              </div>
            </h6>

            <div className="mt-4 flex items-center space-x-1">
              <Button>Get directions</Button>
              <Button variant="secondary">Call us</Button>
            </div>
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
