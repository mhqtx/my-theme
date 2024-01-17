import { HelloWorldForm } from "@/app/admin/_components/hello-world-form";

export default async function AdminPage() {
  return (
    <div className="flex">
      <aside className="w-1/3 bg-white">{/* <Brand /> */}</aside>
      <main className="bg-gray/95 _bg-main/95 flex h-screen w-full flex-grow flex-col p-12 md:w-1/2">
        <HelloWorldForm />
      </main>
    </div>
  );
}
