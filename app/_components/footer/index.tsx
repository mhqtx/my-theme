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
              <h5 className="font-bold">Belgrade, Serbia</h5>
              <div className="flex space-x-1 text-sm">
                <Image
                  alt=""
                  className="text-white"
                  src={Phone}
                  width={16}
                  height={16}
                />
                <span>Krfska 26</span>
              </div>
            </div>

            <div className="mb-4 max-w-[400px]">
              <div className="flex space-x-1 text-sm">
                <Image
                  alt=""
                  className="text-white"
                  src={Phone}
                  width={16}
                  height={16}
                />
                <span>{tel}</span>
              </div>
              <div className="flex space-x-1 text-sm">
                <Image
                  alt=""
                  className="text-white"
                  src={Phone}
                  width={16}
                  height={16}
                />
                <span>{email}</span>
              </div>
            </div>

            <div className="mb-4 mt-4 max-w-[400px]">
              <h5 className="mb-1 font-bold">Connect with us</h5>
              <Socials iconWrapperClassName="bg-[#2b2b2b]" />
            </div>
          </div>
          <div className="flex w-full flex-col lg:w-[calc(100%-400px)] lg:flex-row  lg:[&>div]:mx-3">
            <div className="mb-4 mt-4 max-w-[400px]">
              <h5 className="mb-2 font-bold">Services</h5>
              <div className="flex flex-col">
                {serviceItems.map((item) => (
                  <p key={item.title} className="mb-0.5 w-full text-sm">
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            <div className="mb-4 mt-4 max-w-[400px]">
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
            <div className="mb-4 mt-4 max-w-[400px]">
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
