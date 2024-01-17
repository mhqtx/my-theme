import Brand from "@/app/_components/hero/header";
import Socials from "@/app/_components/socials";
import { useContent } from "@/app/_hooks/use-content";
import Image from "next/image";
import LogoWhite from "../../_images/vercel-white.png";
import { Phone } from "@/app/_icons";

export function About() {
  // TODO: Change to useContent since it's all over the place the same...
  const { title, description, owner, tel, email } = useContent();

  return (
    <div className="max-w-[400px] w-full">
      <div className="max-w-[400px] mb-4 mt-4">
        <h5 className="font-bold">{title}</h5>
        <p className="text-sm mt-2 mb-4">{description}</p>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.858579285921!2d20.489992776238196!3d44.80407067107078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083f03126e3%3A0x6639fb364a2e1693!2sQuantox%20Technology!5e0!3m2!1sen!2srs!4v1705230179211!5m2!1sen!2srs"
        width="100%"
        height="200"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="max-w-[400px] mt-4">
        <h5 className="font-bold">Belgrade, Serbia</h5>
        <div className="text-sm flex space-x-1">
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

      <div className="max-w-[400px] mb-4">
        <div className="text-sm flex space-x-1">
          <Image
            alt=""
            className="text-white"
            src={Phone}
            width={16}
            height={16}
          />
          <span>{tel}</span>
        </div>
        <div className="text-sm flex space-x-1">
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

      <div className="max-w-[400px] mb-4 mt-4">
        {" "}
        <h5 className="font-bold mb-1">Connect with us</h5>
        <Socials iconWrapperClassName="bg-[#2b2b2b]" />
      </div>
    </div>
  );
}
