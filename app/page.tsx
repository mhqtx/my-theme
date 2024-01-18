import { Hero1 } from "@/app/_components/hero";
import { Gallery } from "@/app/_components/gallery";
import { Footer } from "@/app/_components/footer";
import { Services1 } from "@/app/_components/services-1";
import { CallToAction } from "@/app/_components/call-to-action";
import Location from "@/app/_components/location";

export default async function Home() {
  return (
    <>
      <Hero1 />
      <Services1 />
      <Location />
      <Gallery />
      <CallToAction />
      <Footer />
    </>
  );
}
