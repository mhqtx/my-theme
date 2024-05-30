import { Instagram, Phone, Stack, Viber, Whatsapp } from "@icon";

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
    callToAction1: {
      title: (
        <strong className="font-bold">
          Unleash the Power of Our Social Presence
        </strong>
      ),
      description:
        "Dive into our digital realm! Follow, like, and stay connected with us on our social networks. Explore the latest updates, behind-the-scenes, and vibrant conversations.",
    },
    callToAction2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
          />
        </svg>
      ),
      title: (
        <>
          <span className="font-bold">One-Click Importable</span> Starter Sites
        </>
      ),
      description:
        "Blueprint comes with nine pre-configured demos that you may use as a starting point for your new blog or magazine. You may activate a demo on an existing website without importing dummy content too.",
    },
    gallery: {
      section1: {
        title: "Web Wonders: A Showcase of Our Digital Craftsmanship",
        text: "Immerse yourself in a captivating visual journey through our Gallery, showcasing a curated collection of meticulously crafted web development projects. Uncover the seamless fusion of design and functionality in our horizontal image gallery, a testament to our passion for creating digital masterpieces",
      },
      section2: {
        title: "Dive deeper into the narrative on our socials",
        text: "Embarking on a creative journey that transcends boundaries and explores the extraordinary. Join me on this exciting adventure, where passion meets innovation.",
      },
      items: [
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
      ],
    },
    about: {
      title: "Tailored Websites. Customized Solutions. Pixel-perfect design.",
      description: (
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
            arrive and when you actually stay there. In other words: The Service
            on site.
          </p>
          <p>
            Your perfect Villa Holiday is our mission - nothing else. Contact us
            at any time through one of the many different channels on offer.
          </p>
          <p>Villa goes up and meets the standards of our curation.</p>
        </>
      ),
    },
    name: "Estro",
    hero: {
      title: "Transform Your Vision into a Stunning Website with Strive",
      description:
        "Empower your small business with a sleek online presence at a fraction of the cost. Budget-friendly, professional websites tailored for small businesses. Elevate your brand effortlessly in the digital world.",
      cta1: {
        text: "Message us",
        href: "mailto:milan.hakaj@gmail.com",
      },
      cta2: {
        text: "Read more",
        href: "#about",
      },
      media: {
        src: "/assets/videos/hero.mp4",
      },
    },
    ctaButton: {
      text: "Read more",
      href: "https://letmegooglethat.com/?q=why+do+I+need+a+website+for+my+business%3F",
    },
    socials: [
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
    company: {
      brand: "Estro UI",
      address: "Mihajla Pupina 69, Belgrade",
      tel: "381629630157",
      owner: "Milan Hakaj",
      email: "milan.hakaj@gmail.com",
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
        {
          text: "Home",
          href: "hero1",
        },
        { text: "Services", href: "services1" },
        { text: "Social media content", href: "gallery1" },
        { text: "Location", href: "location1" },
      ],
    },
  };
}
