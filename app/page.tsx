import Image from "next/image";

import { Hero1 } from "@/app/_components/hero/hero-1";
import { Gallery1 } from "@/app/_components/gallery-1";
import { Footer } from "@/app/_components/footer";
import { Services1 } from "@/app/_components/services-1";
import { CallToAction1 } from "@/app/_components/call-to-action-1";
import { Location1 } from "@/app/_components/location-1";
import { useContent } from "@/app/_hooks/use-content";
import { Button } from "@/app/_components/button";

export default async function Home() {
  const { title, description, name } = useContent();

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
      <Gallery1 />
      <Services1 />
      <Location1 />
      <CallToAction1 />
      <Footer />
    </>
  );
}
