"use client";

interface Props {
  onClose: () => void;
}

export default function Dropdown({ onClose }: Props) {
  return (
    <div
      className="bg-hero-white flex items-center text-center justify-center fixed w-full h-full z-40 flex-col"
      style={{
        backgroundSize: "40px 40px",
      }}
    >
      <div>
        <h1 className="text-3xl font-bold text-black mt-4">Browse:</h1>
        <div className="flex flex-col text-2xl mb-2 last:mb-0">
          <a href="#" onClick={onClose}>
            Home
          </a>
          <a href="#" onClick={onClose}>
            Who we are
          </a>
          <a href="#" onClick={onClose}>
            Social media content
          </a>
          <a href="#" onClick={onClose}>
            Location
          </a>
          <a href="#" onClick={onClose}>
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
