"use client";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import { Button } from "@component/button";

type Section = { title: string; text: string };

interface Props {
  section1: Section;
  section2: Section;
  items: any[];
}

export function Gallery1({ section1, section2, items }: Props) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToScroll: 1,
    variableWidth: true,
    cssEase: "linear",
    autoplaySpeed: 0,
    speed: 10000,
    pauseOnHover: false,
    // slidesToShow: 1,
  };

  return (
    <section id="gallery1" className="bg-foreground-primary py-10">
      <div className="animation-reveal container px-2">
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold">{section1.title}</h2>
          <p className="mt-3 text-lg md:text-xl">{section1.text}</p>
        </div>
      </div>

      <Slider {...settings} className="my-4 w-full">
        {items.map((item, index) => (
          <div
            className="relative mx-2 h-[489px] w-[275px] overflow-hidden rounded-xl bg-red-50"
            key={index}
          >
            <video
              width="100%"
              height="100%"
              className={`pointer-esvents-none rounded-xl video-${index}`}
              loop
              muted
              preload="metadata"
              playsInline
            >
              <source src={item.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute top-0 w-full rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-black/50 to-transparent p-2 pb-[50%] text-left text-white">
              <h6 className="font-medium">{item.title}</h6>
            </div>
          </div>
        ))}
      </Slider>

      {/* <Swiper className="my-4 lg:my-8">
        {items.map((item, index) => (
          <SwiperSlide key={index} className="!w-fit">
            <div className="relative h-[489px] w-[275px] overflow-hidden rounded-xl bg-red-50">
              {item.type === "image" ? (
                <Image
                  alt="Hero wallpaper"
                  className="h-full w-full rounded-xl object-cover"
                  // TODO: Replace img
                  src={item.src}
                  width={600}
                  height={200}
                />
              ) : (
                // TODO: Fix height
                <video
                  width="100%"
                  height="100%"
                  className={`pointer-esvents-none rounded-xl video-${index}`}
                  loop
                  muted
                  preload="metadata"
                  playsInline
                >
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <button
                className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white play-button-${index}`}
                onClick={() => {
                  // TODO: Improve!!
                  const video = document.getElementsByClassName(
                    `video-${index}`,
                  )[0] as HTMLVideoElement;
                  const playButton = document.getElementsByClassName(
                    `play-button-${index}`,
                  )[0] as HTMLButtonElement;
                  video.play();

                  playButton.classList.add("hidden");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute top-0 w-full rounded-tl-xl rounded-tr-xl bg-gradient-to-b from-black/50 to-transparent p-2 pb-[50%] text-left text-white">
                <h6 className="font-medium">{item.title}</h6>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}

      <div className="container px-2">
        <div className="lg:w-1/2">
          <h3 className="mb-1 text-2xl font-bold">{section2.title}</h3>
          <p className="mb-3">{section2.text}</p>
          <Button>Inquire</Button>
        </div>
      </div>
    </section>
  );
}
