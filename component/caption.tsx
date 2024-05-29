interface Props {
  title: string;
  description: string;
}

export default function CaptionH2({ title, description }: Props) {
  return (
    <div className="px-2 py-5 lg:py-10 text-center mx-auto mb:5 text-white bg-black w-full">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="text-xl mt-1 mb-3">{description}</p>
    </div>
  );
}
