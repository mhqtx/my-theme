import Footer from "@/app/_components/footer";
import Brand from "@/app/_components/brand";
import HelloWorld from "@/app/_components/hello-world";

export default function Home() {
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{
        // TODO: srcSet with img
        background: `url(https://www.normareclamare.com/assets/images/background-home-01.jpg)`,
      }}
    >
      <main className="flex flex-col p-12 bg-main/95 h-screen w-full lg:w-1/2">
        <Brand />
        <div className="flex-1" />
        <HelloWorld />
        <div className="flex-1" />
        <Footer />
      </main>
    </div>
  );
}
