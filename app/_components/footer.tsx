interface Props {
  city: string | undefined;
  address: string | undefined;
}

export default function Footer({ city, address }: Props) {
  return (
    <div className="flex mt-5 flex-col">
      <div className="mb-2">
        <h6 className="font-bold text-base">{city}</h6>
        <p className="text-sm">{address}</p>
      </div>
      <div className="flex space-x-1 flex-grow">
        <div className="rounded-full bg-black w-10 h-10 flex items-center justify-center text-white">
          B
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
    </div>
  );
}
