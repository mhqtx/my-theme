export default function Footer() {
  return (
    <div className="flex mt-5 lg:flex-row flex-col">
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
      <div className="mt-2 lg:mt-0">
        <h6 className="font-bold text-lg">Belgrade, Serbia</h6>
        <p className="text-sm">Krfska 26, Zvezdara</p>
      </div>
    </div>
  );
}
