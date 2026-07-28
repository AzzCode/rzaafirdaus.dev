type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  link?: {
    label: string;
    href: string;
  };
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  link,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 flex flex-col gap-6 border-b border-white/8 pb-8 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
          {index} / {eyebrow}
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
          {title}
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          {description}
        </p>
      </div>

      {link ? (
        <Link
          className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-white"
          href={link.href}
        >
          {link.label}
          <span aria-hidden="true">↗</span>
        </Link>
      ) : null}
    </div>
  );
}
import Link from "next/link";
