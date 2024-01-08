import Image from "next/image";

export default function Home() {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{
        background: `url(https://www.normareclamare.com/assets/images/background-home-01.jpg)`,
      }}
    >
      <main className="flex flex-col p-12 bg-[#faf0e6]/95 h-screen w-1/2">
        <a
          className="pointer-events-none mb-4 flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
        <div className="flex-1" />
        <div className="flex flex-col">
          <h1 className="text-[48px] font-bold leading-[1.33]">
            Good afternoon!
          </h1>
          <p className="text-3xl my-2">
            Empower your small business with a sleek online presence at a
            fraction of the cost. Budget-friendly, professional websites
            tailored for small businesses. Elevate your brand effortlessly in
            the digital world.
          </p>
          <button className="text-2xl font-semibold mt-3 w-fit">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </button>
        </div>
        <div className="flex-1" />
        <div className="flex mt-5">
          <div className="flex space-x-1 flex-grow">
            <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center text-white">
              A
            </div>
            <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center text-white">
              F
            </div>
            <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center text-white">
              D
            </div>
            <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center text-white">
              Y
            </div>
          </div>
          <div>
            <h6 className="font-bold">Belgrade, Serbia</h6>
            <p className="text-sm">Krfska 26, Zvezdara</p>
          </div>
        </div>
      </main>
    </div>
  );
}
