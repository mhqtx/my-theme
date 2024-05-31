"use client";

import { useEffect } from "react";

import { useContent } from "@hook/use-content";
import Socials from "@component/socials";

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
    <div className="fixed right-0 top-6 z-40 flex h-full w-full flex-col items-end overflow-scroll bg-white/[98] p-2">
      <div className="container h-full">
        <div className="flex size-full items-center justify-center text-center text-black">
          <div>
            <h5 className="mb-2 font-bold">Explore</h5>
            <div className="mb-4 flex flex-col">
              {menuItems.map((item) => (
                <a
                  href={item.href}
                  key={item.text}
                  className="mb-0.5 w-full text-sm hover:text-[#fe8484]"
                  onClick={onClose}
                >
                  {item.text}
                </a>
              ))}
            </div>
            <Socials />
          </div>
        </div>
      </div>
    </div>
  );
}
