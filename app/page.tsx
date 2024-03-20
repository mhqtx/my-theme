import { ComponentPropsWithoutRef } from "react";

import { Hero1 } from "@/app/_components/hero";
import { About1 } from "@/app/_components/about";
import { CallToAction1 } from "@/app/_components/call-to-action";
import { Footer1 } from "@/app/_components/footer-1";
import { Gallery1 } from "@/app/_components/gallery-1";
import { Services1 } from "@/app/_components/services";
import { Location1 } from "@/app/_components/location-1";
import { useContent } from "@/app/_hooks/use-content";
import { Button } from "@/app/_components/button";
import Socials from "@/app/_components/socials";

// TODO: List
// 1. Nav dropdown font size, separator, phone?
// 2. Background effects on absolutely positioned div
// 3. Gallery, for v1 turn off video and use only images with slick instead of swiper (try to use scrollable content slider)
// 4. For cta component, let user define max width (it's too wide for the socials)
// 5. For services, add like a banner photo on top and remove cta
// 6. Contact, just captions make big
// 7. Reorganize footer, make some more spaces
export default async function Home() {
  const {
    // Hero
    title,
    description,
    name,

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
        title="Ostvari pun potencijal prisustva na mreži i unapredi svoje poslovanje na viši nivo"
        description="Elegantne i jednostavne teme. Unapred pripremljene i prilagođene za mala preduzeća. Kreirane od strane vrhunskih veb programera uz upotrebu najnovijih tehnologija. Dizajnirane s ljubavlju. Pristupačne za svakog."
        cta={
          <>
            <div className="flex flex-col items-center">
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <span>Želim ovu temu</span>
              </Button>
              <span className="mt-1 text-center text-xs font-medium">
                Već od 899 RSD / mesečno.
                <br />
                Otkaži bilo kada.
              </span>
            </div>
            <Button variant="secondary">Pročitaj više</Button>
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
            <source src="/assets/videos/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        }
      />
      <About1
        title="Tailored Websites. Customized Solutions. Pixel-perfect design."
        description={
          <>
            <p>
              True Luxury Villas has been our passion since 2002. What started
              with a few excellent villas and chalets quickly grew to a sizeable
              portfolio. Always keeping one important rule: only we decide which
              Villa goes up and meets the standards of our curation.
            </p>
            <p>
              Standards which have influenced the industry at a notable scale.
              Nobody can just list their villa with us or book a spot. All
              properties are completely visited, vetted, categorised and
              documented.
            </p>
            <p>
              If a villa has made it into our portfolio it has accomplished a
              milestone. But the most important part is what happens when you
              arrive and when you actually stay there. In other words: The
              Service on site.
            </p>
            <p>
              Your perfect Villa Holiday is our mission - nothing else. Contact
              us at any time through one of the many different channels on
              offer.
            </p>
            <p>Villa goes up and meets the standards of our curation.</p>
          </>
        }
      />
      <Gallery1
        items={[
          {
            title:
              "Join Alex in the seamless journey through our platform, making waves of user satisfaction! 🚤:",
            src: "/assets/videos/gallery/item-1.mp4",
            type: "video",
          },
          {
            title: "Turning clicks into magic effortlessly! 🎮",
            src: "/assets/videos/gallery/item-2.mp4",
            type: "video",
          },
          {
            title: "Making waves of user satisfaction! 🚤",
            src: "/assets/videos/gallery/item-3.mp4",
            type: "video",
          },
          {
            title: "Conquering complexity with ease! 💻",
            src: "/assets/videos/gallery/item-4.mp4",
            type: "video",
          },
          {
            title: "Crafting visually stunning experiences! 🎨",
            src: "/assets/videos/gallery/item-5.mp4",
            type: "video",
          },
          {
            title: "Navigating with ease and excitement 🏄‍♂️",
            src: "/assets/videos/gallery/item-6.mp4",
            type: "video",
          },
          {
            title: "Navigating with ease and excitement 🏄‍♂️",
            src: "/assets/videos/gallery/item-7.mp4",
            type: "video",
          },
        ]}
        section1={{
          title: "Web Wonders: A Showcase of Our Digital Craftsmanship",
          text: "Immerse yourself in a captivating visual journey through our Gallery, showcasing a curated collection of meticulously crafted web development projects. Uncover the seamless fusion of design and functionality in our horizontal image gallery, a testament to our passion for creating digital masterpieces",
        }}
        section2={{
          title: "Dive deeper into the narrative on our socials",
          text: "Embarking on a creative journey that transcends boundaries and explores the extraordinary. Join me on this exciting adventure, where passion meets innovation.",
        }}
      />
      <CallToAction1
        title={
          <strong className="font-bold">
            Unleash the Power of Our Social Presence
          </strong>
        }
        text="Dive into our digital realm! Follow, like, and stay connected with us on our social networks. Explore the latest updates, behind-the-scenes, and vibrant conversations."
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
