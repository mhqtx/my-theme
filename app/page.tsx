import { ComponentPropsWithoutRef } from "react";

import { Hero1 } from "@/app/_components/hero/hero-1";
import { Gallery1 } from "@/app/_components/gallery-1";
import { Footer1 } from "@/app/_components/footer-1";
import { Services1 } from "@/app/_components/services";
import { CallToAction1 } from "@/app/_components/call-to-action-1";
import { Location1 } from "@/app/_components/location-1";
import { useContent } from "@/app/_hooks/use-content";
import { Button } from "@/app/_components/button";

export default async function Home() {
  const {
    // Hero
    title,
    description,
    name,

    // Gallery
    gallery,

    // Services
    services: { title: serviceTitle, text: serviceText, items: serviceItems },

    // Menu items
    menu: { items: menuItems },

    // Footer
    workingHours,
  } = useContent();

  return (
    <>
      <Hero1
        title={title}
        description={description}
        cta={
          <>
            <Button>Buy $29/month</Button>
            <Button variant="secondary">Read more</Button>
          </>
        }
        media={
          <video
            width="100%"
            height="288px"
            className="pointer-events-none rounded-xl"
            controls
            loop
            autoPlay
            muted
            playsInline
          >
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }
      />
      <Gallery1
        items={gallery.items}
        section1={{
          title: "Explore the Artistry",
          text: "Immerse yourself in a captivating visual journey through our Gallery, showcasing a curated collection of meticulously crafted web development projects. Uncover the seamless fusion of design and functionality in our horizontal image gallery, a testament to our passion for creating digital masterpieces",
        }}
        section2={{
          title: "Dive deeper into the narrative on our socials",
          text: "Embarking on a creative journey that transcends boundaries and explores the extraordinary. Join me on this exciting adventure, where passion meets innovation.",
        }}
      />
      <Services1
        title={serviceTitle}
        text={serviceText}
        cta={<Button>Call us</Button>}
        items={serviceItems}
      />
      <Location1 />
      <CallToAction1
        icon={<IconStack className="size-5" />}
        title={
          <>
            <span className="font-bold">One-Click Importable</span> Starter
            Sites
          </>
        }
        text="Blueprint comes with nine pre-configured demos that you may use as a
          starting point for your new blog or magazine. You may activate a demo
          on an existing website without importing dummy content too."
        cta={<Button>Request demo</Button>}
      />
      <Footer1
        title="Unlock Your Business Potential & Enjoy the Benefits of a Dynamic Online Presence"
        description="Empower your small business with a sleek online presence at a fraction of the cost. Budget-friendly, professional websites tailored for small businesses. Elevate your brand effortlessly in the digital world."
        brandName="Estro UI"
        workingHours={Object.entries(workingHours)}
        services={serviceItems}
        menu={menuItems}
        email="milan.hakaj@estroui.com"
        phone="+381629630157"
        address="Mihajla Pupina 69, Belgrade"
      />
    </>
  );
}

function IconStack(props: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
      />
    </svg>
  );
}
