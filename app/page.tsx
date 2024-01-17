import { Hero1 } from "@/app/_components/hero";
import { Gallery } from "@/app/_components/gallery";
import { Footer } from "@/app/_components/footer";
import Services from "@/app/_components/services";
import Location from "@/app/_components/location";
import { CallToAction } from "@/app/_components/call-to-action";

export default async function Home() {
  return (
    <>
      <Hero1 />
      <Services />
      <Gallery />
      <Location />
      <CallToAction />
      <Footer />
    </>
  );
}
