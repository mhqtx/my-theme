import Brand from "@/app/_components/hero/header";

export function Footer() {
  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-[1200px] mx-auto">
        <Brand />
        <div className="max-w-[400px]">
          <h5 className="font-bold">Good afternoon!</h5>
          <p className="text-sm mt-3">
            Empower your small business with a sleek online presence at a
            fraction of the cost. Budget-friendly, professional websites
            tailored for small businesses. Elevate your brand effortlessly in
            the digital world.
          </p>

          <ul className="text-sm mt-5 [&>li]:my-2">
            <li>
              <a href="tel:381629630157">+381629630157</a>
              <span>Milan Hakaj</span>
            </li>
            <li>milan.hakaj@gmail.com</li>
            <li>
              <span>Belgrade</span>
              <span>Krfska 26, Zvezdara</span>
            </li>
            <li>Milan Hakaj</li>
            <li>Milan Hakaj</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
