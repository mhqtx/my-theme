"use client";

import { useEffect } from "react";
import Image from "next/image";

import { Hamburger } from "@/app/_icons";
import { useContent } from "@/app/_hooks/use-content";

interface Props {
  onClose: () => void;
}

// TODO: Improve logic :=)
export default function Dropdown({ onClose }: Props) {
  const {
    menu: { items: menuItems },
    services: { items: serviceItems },
    workingHours,
  } = useContent();

  useEffect(() => {
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      <div
        className="fixed left-0 z-0 size-full bg-black/90"
        onClick={onClose}
      />
      <div className="fixed right-0 top-6 z-40 flex h-full w-full flex-col items-end overflow-scroll bg-white p-2 lg:h-[70%]">
        <div className="container">
          <div className="w-full text-black">
            <div>
              <h5 className="mb-2 font-bold">Services</h5>
              <div className="flex flex-col">
                {serviceItems.map((item) => (
                  <p key={item.title} className="mb-0.5 w-full text-sm">
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            <div>
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
            <h1 className="mt-4 text-3xl font-bold">Browse:</h1>
            <div className="mb-2 flex flex-col text-2xl last:mb-0">
              {menuItems.map((item) => (
                <a
                  key={item}
                  className="hover:text-[#fe8484]"
                  href="#"
                  onClick={onClose}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
