import { Button } from "@/app/_components/button";

// TODO: Tidy up everything, use proper html tags, split into components, use data from content hook
export function CallToAction() {
  return (
    <div className="w-full bg-[#fafafa] p-2 lg:p-10">
      <div className="container text-center lg:w-1/2">
        <span className="mx-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-3xl font-bold text-white">
          2
        </span>

        <h1 className="mt-2 space-x-1 text-3xl">
          <span className="font-bold">One-Click Importable</span> Starter Sites
        </h1>

        <p className="mb-4 mt-3 text-lg md:text-xl">
          Blueprint comes with nine pre-configured demos that you may use as a
          starting point for your new blog or magazine. You may activate a demo
          on an existing website without importing dummy content too.
        </p>

        <Button>Request one</Button>
      </div>
    </div>
  );
}
