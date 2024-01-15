import { Instagram, Phone, Viber, Whatsapp } from "@/app/_icons";

export function useContentHero() {
  return {
    title: "Design & Fashion",
    description:
      "Empower your small business with a sleek online presence at a fraction of the cost. Budget-friendly, professional websites tailored for small businesses. Elevate your brand effortlessly in the digital world.",
    link: {
      text: "Read more",
      href: "https://letmegooglethat.com/?q=why+do+I+need+a+website+for+my+business%3F",
    },
    socials: [
      {
        src: Instagram,
        alt: "Instagram",
        href: "http://www.instagram.com/hilan.makaj",
      },
      {
        alt: "Whatsapp",
        src: Whatsapp,
        href: "https://api.whatsapp.com/send?phone=+381629630157",
      },
      {
        alt: "Viber",
        src: Viber,
        href: "viber://add?number=+381629630157",
      },
      {
        alt: "Telephone",
        src: Phone,
        href: "tel:+381629630157",
      },
    ],
    tel: "381629630157",
    owner: "Milan Hakaj",
    email: "milan.hakaj@gmail.com",
    services: {
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
      title: "Who we are",
      items: [
        {
          title: "Code Reviews",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
        {
          title: "Pull request",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
        {
          title: "Design requirements",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
        {
          title: "Assessments",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
        {
          title: "Flyers",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
        {
          title: "Posters",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
        {
          title: "Business cards",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
        {
          title: "Parallel coding",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
        {
          title: "Code Reviews",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus expedite.",
        },
      ],
    },
  };
}
