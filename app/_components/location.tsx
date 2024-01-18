import { Button } from "@/app/_components/button";
import { useContent } from "@/app/_hooks/use-content";

export default async function Location() {
  const { workingHours } = useContent();

  return (
    <div className="flex flex-col bg-white lg:flex-row">
      <div className="order-1 w-full p-2 lg:w-1/2 lg:p-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Location</h2>
          <div className="my-2 h-[1px] w-full bg-gradient-to-r from-black" />
          <p className="mt-1 text-lg md:text-xl">Belgrade, Serbia</p>
          <p className="mb-4 text-lg md:text-xl">Krfska 26</p>
          <Button>Get directions</Button>
          <div className="mt-4">
            <h2 className="text-3xl font-bold">Working hours</h2>
            <div className="my-2 h-[1px] w-full bg-gradient-to-r from-black" />
            <div className="mb-4">
              {Object.entries(workingHours).map(([key, value]) => (
                <p key={key}>
                  <span className="font-bold capitalize">{key}</span> {value}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h2 className="text-3xl font-bold">Contact</h2>
            <div className="my-2 h-[1px] w-full bg-gradient-to-r from-black" />
            <div className="mb-4 mt-2">
              <p>+381629630157 - Milan</p>
            </div>
            <Button>Call now</Button>
          </div>
        </div>
      </div>
      <div className="lg-w-1/2 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2830.858579285921!2d20.489992776238196!3d44.80407067107078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7083f03126e3%3A0x6639fb364a2e1693!2sQuantox%20Technology!5e0!3m2!1sen!2srs!4v1705230179211!5m2!1sen!2srs"
          width="100%"
          height="100%"
          className="h-[450px] lg:h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
