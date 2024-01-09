interface Props {
  description: string | undefined;
  title: string | undefined;
}

export default async function HelloWorld({ description, title }: Props) {
  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-xl mt-3 mb-6">{description}</p>
      <button className="text-xl font-semibold mt-3 w-fit space-x-1">
        <span>Learn</span>
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </button>
    </div>
  );
}
