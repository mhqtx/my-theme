import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

import { Hero1 } from "@/app/_components/hero/hero-1";
import { Gallery1 } from "@/app/_components/gallery-1";
import { Footer } from "@/app/_components/footer";
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
  } = useContent();

  return (
    <>
      <Hero1
        title={title}
        description={description}
        name={name}
        cta={
          <>
            <Button>Call us</Button>
            <Button variant="secondary">Read more</Button>
          </>
        }
        media={
          // TODO: Place a very short video from /_videos dir
          <Image
            alt={`Welcome to ${name}`}
            className="w-[80%] rounded-xl"
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800&h=533&dpr=2"
            width={800}
            height={533}
          />
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
      <Footer />
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
