import { Hero1 } from "@/app/_components/hero";
import { Gallery1 } from "@/app/_components/gallery-1";
import { Footer } from "@/app/_components/footer";
import { Services1 } from "@/app/_components/services-1";
import { CallToAction1 } from "@/app/_components/call-to-action-1";
import { Location1 } from "@/app/_components/location-1";
import { Location2 } from "@/app/_components/location-2";

export default async function Home() {
  return (
    <>
      <Hero1 />
      <Services1 />
      <Gallery1 />
      <CallToAction1 />
      {/* <Location2 /> */}
      <Location1 />
      <Footer />
    </>
  );
}
