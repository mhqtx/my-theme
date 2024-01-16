export default async function Location() {
  return (
    <div className="flex flex-col lg:flex-row text-black">
      <div
        className="w-full lg:w-1/2 p-2 lg:p-10 lg:order-1"
        style={{
          backgroundImage: "radial-gradient(#a9a9a9 1px, #ffffff 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <h6 className="font-bold text-xl">Location</h6>
        <div className="h-[1px] w-full bg-gradient-to-r from-black my-2" />
        <div className="max-w-[400px] mb-2 mt-4">
          <h5 className="font-bold">Belgrade, Serbia</h5>
          <p className="text-sm">Krfska 26</p>
        </div>
        {/* TODO: Add CTAs */}
        <p>
          <span className="font-bold">+381629630157</span> - Milan
        </p>
        <p>
          <span className="font-bold">+381629630157</span> - Neshka
        </p>
        {/* <Socials /> */}
        <h6 className="font-bold text-xl mt-4">Working hours</h6>
        <div className="h-[1px] w-full bg-gradient-to-r from-black my-2" />
        <p>
          <span className="font-bold">Monday</span> 10:00 / 19:00
        </p>
        <p>
          <span className="font-bold">Tuesday</span> 10:00 / 19:00
        </p>
        <p>
          <span className="font-bold">Wednesday</span> 10:00 / 19:00
        </p>
        <p>
          <span className="font-bold">Thursday</span> 10:00 / 19:00
        </p>
        <p>
          <span className="font-bold">Friday</span> 10:00 / 19:00
        </p>
        <p>
          <span className="font-bold">Saturday</span> 10:00 / 18:00
        </p>
        <p>
          <span className="font-bold">Sunday</span> /
        </p>
      </div>
      <div className="w-full lg-w-1/2">
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
