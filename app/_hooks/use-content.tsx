import { Instagram, Phone, Viber, Whatsapp } from "@/app/_icons";

export function useContent() {
  return {
    workingHours: {
      monday: "10 - 19h",
      tuesday: "10 - 19h",
      wednesday: "10 - 19h",
      thursday: "10 - 19h",
      friday: "10 - 19h",
      saturday: "10 - 19h",
      sunday: "/",
    },
    title: "Web UI & Design",
    description:
      "Empower your small business with a sleek online presence at a fraction of the cost. Budget-friendly, professional websites tailored for small businesses. Elevate your brand effortlessly in the digital world.",
    ctaButton: {
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
        "In today's fast-paced digital landscape, unlocking your business potential begins with establishing a compelling online presence. Our mission is to empower your small business by offering you more than just a website – we provide the key to a dynamic and flourishing online identity.",
      title:
        "Unlock Your Business Potential: Enjoy the Benefits of a Dynamic Online Presence",
      items: [
        {
          title: "Cost-Efficiency",
          description:
            "Propel your business forward affordably with our unbeatable value, providing budget-friendly solutions for a professional website tailored specifically for small businesses.",
        },
        {
          title: "Strategic brand elevation",
          description:
            "Elevate your brand effortlessly in the digital world. Showcase your products and services with a sleek online presence that leaves a lasting impression on your audience",
        },
        {
          title: "Tailored for success",
          description:
            "Our websites are crafted specifically for small businesses, ensuring a perfect fit for your unique needs. Experience the power of a tailored online platform that aligns seamlessly with your brand identity",
        },
        {
          title: "User-friendly interfaces",
          description:
            "Navigate the digital landscape with ease. Our websites are designed with a user-friendly interface, providing a seamless experience for both you and your customers",
        },

        {
          title: "Visibility & Reach",
          description:
            "Expand your reach and enhance your visibility. With our online solutions, you can tap into a wider audience and connect with potential customers, giving your business the exposure it deserves",
        },
        {
          title: "Fulltime support",
          description:
            "Propel your business forward affordably with our unbeatable value, providing budget-friendly solutions for a professional website tailored specifically for small businesses.",
        },
      ],
    },
    menu: {
      items: [
        "Home",
        "Services",
        "Social media content",
        "Location",
        "Contact",
      ],
    },
  };
}
