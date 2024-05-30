import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  description: string | ReactNode;
  title: string | ReactNode;
  cta: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function CallToAction1({
  description,
  title,
  cta,
  icon,
  className,
}: Props) {
  return (
    <section
      id="callToAction1"
      className={twMerge("w-full bg-foreground-accent-1 px-2 py-10", className)}
    >
      <div className="container text-center lg:w-1/2">
        {icon && (
          <span className="mx-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-3xl font-bold text-secondary text-white">
            {icon}
          </span>
        )}
        <h2 className="mt-2 space-x-1 text-3xl">{title}</h2>
        <p className="mb-4 mt-3 text-lg md:text-xl">{description}</p>
        <div>{cta}</div>
      </div>
    </section>
  );
}
