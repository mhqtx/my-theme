import Brand from "@/app/_components/hero/header";
import { HelloWorldForm } from "@/app/admin/_components/hello-world-form";

export default async function AdminPage() {
  return (
    <div className="flex">
      <aside className="bg-white w-1/3">
        <Brand />
      </aside>
      <main className="flex flex-grow flex-col p-12 bg-gray/95 _bg-main/95 h-screen w-full md:w-1/2">
        <HelloWorldForm />
      </main>
    </div>
  );
}
