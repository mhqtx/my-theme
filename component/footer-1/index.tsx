import Socials from "@component/socials";

interface Props {
  title: string;
  description: string;
  services: any[];
  workingHours: any[];
  brandName: string;
  menu: any[];
  email: string;
  phone: string;
  address: string;
}

export function Footer1({
  title,
  description,
  services,
  address,
  workingHours,
  menu,
  email,
  phone,
  brandName,
}: Props) {
  return (
    <footer className="w-full bg-primary px-2 py-2 text-sm text-secondary lg:py-10">
      <div className="container">
        <div className="flex w-full flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
          <section className="w-full lg:max-w-[400px]">
            <h5 className="mb-1 font-bold">{title}</h5>
            <p className="mb-2">{description}</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.858579285921!2d20.489992776238196!3d44.80407067107078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083f03126e3%3A0x6639fb364a2e1693!2sQuantox%20Technology!5e0!3m2!1sen!2srs!4v1705230179211!5m2!1sen!2srs"
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <address className="my-2 flex flex-col not-italic">
              <strong>{brandName}</strong>
              <span>{address}</span>
              <span>{email}</span>
              <span>{phone}</span>
            </address>
            <div>
              <h5 className="mb-0.5 font-medium">Connect with us</h5>
              <Socials iconWrapperClassName="bg-grays-2" />
            </div>
          </section>
          <div className="flex w-full flex-col space-y-2 lg:w-[calc(100%-400px)] lg:flex-row lg:space-x-2 lg:space-y-0">
            <section className="w-full lg:mt-0 lg:w-1/3">
              <h4 className="mb-2 font-bold">Services</h4>
              <ul className="flex flex-col">
                {services.map((item) => (
                  <li key={item.title} className="mb-0.5 w-full">
                    {item.title}
                  </li>
                ))}
              </ul>
            </section>
            <section className="w-fulllg:mt-0 lg:w-1/3">
              <h4 className="mb-2 font-bold">Working hours</h4>
              <ul className="flex flex-col">
                {workingHours.map(([key, value]) => (
                  <li key={key} className="mb-0.5 w-full space-x-1">
                    <span className="capitalize">{key}</span>
                    <small className="bg-white text-black">{value}</small>
                  </li>
                ))}
              </ul>
            </section>
            <section className="w-full lg:mt-0 lg:w-1/3">
              <h4 className="mb-2 font-bold">Links</h4>
              <ul className="flex flex-col">
                {menu.map((item) => (
                  <li key={item} className="mb-0.5 w-full">
                    <a href="#">{item}</a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
        <div className="mt-2 w-full">
          <p className="space-x-0.5 text-white">
            <span>
              © {new Date().getFullYear()} Estro UI, all rights reserved |
            </span>
            <span>Powered by</span>
            <span className="underline">estro-ui.com</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
