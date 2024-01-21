import Image from "next/image";

import { useContent } from "@/app/_hooks/use-content";
import { LogoWhite } from "@/app/_components/logo/logo-white";
import { Phone } from "@/app/_icons";
import Socials from "@/app/_components/socials";

// TODO: Tidy up everything, use proper html tags, split into components, use data from content hook
export function Footer() {
  // TODO: Change to useContent since it's all over the place the same...
  const {
    title,
    description,
    owner,
    tel,
    email,
    workingHours,
    services: { items: serviceItems },
    menu: { items: menuItems },
  } = useContent();

  return (
    // TODO: Define paddings
    <div className="w-full bg-black bg-hero-dark bg-5 p-2 text-white lg:p-4">
      <div className="container">
        <LogoWhite />
        <div className="mt-4 flex w-full flex-col lg:flex-row">
          <div className="w-full max-w-[400px]">
            <h5 className="font-bold">{title}</h5>
            <p className="mb-4 mt-2 text-sm">{description}</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.858579285921!2d20.489992776238196!3d44.80407067107078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083f03126e3%3A0x6639fb364a2e1693!2sQuantox%20Technology!5e0!3m2!1sen!2srs!4v1705230179211!5m2!1sen!2srs"
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="mt-4 max-w-[400px]">
              <div className="flex space-x-1 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-2 w-2"
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
                <div className="flex flex-col">
                  <span>Belgrade, Serbia</span>
                  <span>Krfska 26</span>
                </div>
              </div>
            </div>

            <div className="mb-4 max-w-[400px]">
              <div className="flex items-center space-x-1 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-2 w-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
                <span>{tel}</span>
              </div>
              <div className="flex items-center space-x-1 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-2 w-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span>{email}</span>
              </div>
            </div>

            <div className="mb-4 mt-4 max-w-[400px]">
              <h5 className="mb-1 font-bold">Connect with us</h5>
              <Socials iconWrapperClassName="bg-[#2b2b2b]" />
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-[calc(100%-400px)] lg:flex-row  lg:[&>div]:mx-3">
            <div className="mb-4 mt-4 max-w-[400px] lg:mt-0">
              <h5 className="mb-2 font-bold">Contact</h5>
              <div className="flex flex-col">
                {serviceItems.map((item) => (
                  <p key={item.title} className="mb-0.5 w-full text-sm">
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            <div className="mb-4 mt-4 max-w-[400px] lg:mt-0">
              <h5 className="mb-2 font-bold">Services</h5>
              <div className="flex flex-col">
                {serviceItems.map((item) => (
                  <p key={item.title} className="mb-0.5 w-full text-sm">
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            <div className="mb-4 mt-4 max-w-[400px]  lg:mt-0">
              <h5 className="mb-2 font-bold">Working hours</h5>
              <div className="flex flex-col">
                {Object.entries(workingHours).map(([key, value]) => (
                  <p key={key} className="mb-0.5 w-full space-x-1 text-sm ">
                    <span className="capitalize">{key}</span>
                    <small className="bg-white text-black">{value}</small>
                  </p>
                ))}
              </div>
            </div>
            <div className="mb-4 mt-4 max-w-[400px] lg:mt-0">
              <h5 className="mb-2 font-bold">Links</h5>
              <div className="flex flex-col">
                {menuItems.map((item) => (
                  <p key={item} className="mb-0.5 w-full text-sm">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <small className="text-white">
            © {new Date().getFullYear()} Michelangelo Hanimi, all rights
            reserved | Powered by
            <span className="italic underline">Vercel.com</span>
          </small>
        </div>
      </div>
    </div>
  );
}
