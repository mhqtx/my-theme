import { About1 } from "@component/about";
import { CallToAction1 } from "@component/call-to-action";
import { Footer1 } from "@component/footer-1";
import { Gallery1 } from "@component/gallery-1";
import { Services1 } from "@component/services";
import { Location1 } from "@component/location-1";
import { useContent } from "@hook/use-content";
import { Button } from "@component/button";
import Socials from "@component/socials";
import { Hero1 } from "@component/hero";

// async function getHeroData() {
//   const results = await fetch(
//     `${process.env.NEXT_PUBLIC_API_URL}/api/hero`,
//   ).then((x) => x.json());

//   return results;
// }

const ABOUT_SECTION_ID = "about";

export default async function Home() {
  const {
    hero,
    about,
    gallery,
    callToAction1,
    callToAction2,
    services: { title: serviceTitle, text: serviceText, items: serviceItems },
    menu: { items: menuItems },
    company,
    workingHours,
  } = useContent();

  return (
    <>
      <Hero1
        title={hero.title}
        description={hero.description}
        cta={
          <>
            <Button>
              <a href={hero.cta1.href}>{hero.cta1.text}</a>
            </Button>
            <Button variant="secondary">
              <a href={hero.cta2.href}>{hero.cta2.text}</a>
            </Button>
          </>
        }
        media={
          <video
            width="100%"
            height="288px"
            className="rounded-xl"
            loop
            autoPlay
            muted
            playsInline
          >
            <source src={hero.media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }
      />
      <About1
        id={ABOUT_SECTION_ID}
        title={about.title}
        description={about.description}
      />
      <Gallery1
        items={gallery.items}
        section1={{
          title: gallery.section1.title,
          text: gallery.section1.text,
        }}
        section2={{
          title: gallery.section2.title,
          text: gallery.section2.text,
        }}
      />
      <CallToAction1
        title={callToAction1.title}
        description={callToAction1.description}
        cta={<Socials />}
      />
      <Services1
        title={serviceTitle}
        text={serviceText}
        cta={<Button>Call us</Button>}
        items={serviceItems}
      />
      <Location1 />
      <CallToAction1
        icon={callToAction2.icon}
        title={callToAction2.title}
        description={callToAction2.description}
        cta={<Button>Request demo</Button>}
      />
      <Footer1
        title={hero.title}
        description={hero.description}
        brandName={company.brand}
        workingHours={Object.entries(workingHours)}
        services={serviceItems}
        menu={menuItems}
        email={company.email}
        phone={company.tel}
        address={company.address}
      />
    </>
  );
}
