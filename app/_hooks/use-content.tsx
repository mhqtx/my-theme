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
    name: "Estro",
    title: "Digital Elegance for your Business",
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
    gallery: {
      items: [
        {
          img: "https://randomwordgenerator.com/img/picture-generator/55e2dd474a50b10ff3d8992cc12c30771037dbf85254794e70267cdd9444_640.jpg",
          title: "Embracing the sunset vibes 🌅",
        },
        {
          img: "https://example.com/image2.jpg",
          title: "Weekend adventures in full swing! 🚀",
        },
        {
          img: "https://example.com/image3.jpg",
          title: "Coffee and contemplation at my favorite spot ☕",
        },
        {
          img: "https://example.com/image4.jpg",
          title: "Lost in the beauty of nature 🌳",
        },
        {
          img: "https://example.com/image5.jpg",
          title: "Chasing dreams under city lights 🌃",
        },
        {
          img: "https://example.com/image6.jpg",
          title: "Cozy vibes with a good book 📚",
        },
        {
          img: "https://example.com/image7.jpg",
          title: "Exploring hidden gems in the city 🏙️",
        },
        {
          img: "https://example.com/image8.jpg",
          title: "Homemade delights for a perfect evening 🍲",
        },
        {
          img: "https://example.com/image9.jpg",
          title: "Art and inspiration collide on canvas 🎨",
        },
        {
          img: "https://example.com/image10.jpg",
          title: "Sunrise yoga for a mindful start to the day 🧘‍♂️",
        },
        {
          img: "https://example.com/image11.jpg",
          title: "Dive into the colors of a bustling street market 🎉",
        },
        {
          img: "https://example.com/image12.jpg",
          title: "Sundays are for self-care and smiles 😊",
        },
      ],
    },
    services: {
      text: "In today's fast-paced digital landscape, unlocking your business potential begins with establishing a compelling online presence. Our mission is to empower your small business by offering you more than just a website – we provide the key to a dynamic and flourishing online identity.",
      title:
        "Unlock Your Business Potential: Enjoy the Benefits of a Dynamic Online Presence",
      items: [
        {
          title: "Cost-Efficiency",
          text: "Propel your business forward affordably with our unbeatable value, providing budget-friendly solutions for a professional website tailored specifically for small businesses.",
        },
        {
          title: "Strategic brand elevation",
          text: "Elevate your brand effortlessly in the digital world. Showcase your products and services with a sleek online presence that leaves a lasting impression on your audience",
        },
        {
          title: "Tailored for success",
          text: "Our websites are crafted specifically for small businesses, ensuring a perfect fit for your unique needs. Experience the power of a tailored online platform that aligns seamlessly with your brand identity",
        },
        {
          title: "User-friendly interfaces",
          text: "Navigate the digital landscape with ease. Our websites are designed with a user-friendly interface, providing a seamless experience for both you and your customers",
        },

        {
          title: "Visibility & Reach",
          text: "Expand your reach and enhance your visibility. With our online solutions, you can tap into a wider audience and connect with potential customers, giving your business the exposure it deserves",
        },
        {
          title: "Fulltime support",
          text: "Propel your business forward affordably with our unbeatable value, providing budget-friendly solutions for a professional website tailored specifically for small businesses.",
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
