import { Button } from "@/app/_components/button";

// TODO: Tidy up everything, use proper html tags, split into components, use data from content hook
export function CallToAction1() {
  return (
    <section className="w-full bg-[#f7f7f7] px-2 py-10">
      <div className="container text-center lg:w-1/2">
        <span className="mx-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3"
            />
          </svg>
        </span>
        <h2 className="mt-2 space-x-1 text-3xl">
          <span className="font-bold">One-Click Importable</span> Starter Sites
        </h2>
        <p className="mb-4 mt-3 text-lg md:text-xl">
          Blueprint comes with nine pre-configured demos that you may use as a
          starting point for your new blog or magazine. You may activate a demo
          on an existing website without importing dummy content too.
        </p>
        <Button>Request one</Button>
      </div>
    </section>
  );
}
