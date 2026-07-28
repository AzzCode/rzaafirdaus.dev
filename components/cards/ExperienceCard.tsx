import Image from "next/image";

import type { Experience } from "@/types/experience";

type ExperienceCardProps = {
  experience: Experience;
  index: number;
};

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <article className="relative grid gap-5 border-t border-white/8 py-8 first:border-t-0 first:pt-0 lg:grid-cols-[8rem_1fr] lg:gap-10">
      <div>
        <p className="font-mono text-xs text-blue-400">0{index + 1}</p>
        <p className="mt-2 text-xs leading-5 text-slate-500">
          {experience.period}
        </p>
      </div>

      <div
        className={
          experience.image
            ? "grid gap-7 xl:grid-cols-[1fr_16rem]"
            : undefined
        }
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-blue-400/18 bg-blue-500/8 px-2.5 py-1 text-[0.65rem] font-semibold tracking-wider text-blue-300 uppercase">
              {experience.category}
            </span>
            <span className="text-xs text-slate-600">
              {experience.location}
            </span>
          </div>

          <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
            {experience.role}
          </h3>
          <p className="mt-1 text-sm font-semibold text-slate-400">
            {experience.organization}
          </p>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
            {experience.summary}
          </p>

          <ul className="mt-5 space-y-2">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex max-w-3xl gap-3 text-sm leading-6 text-slate-400"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-full bg-blue-400"
                />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-2">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs text-slate-400"
              >
                {skill}
              </span>
            ))}
          </div>

          {experience.evidence.length > 0 ? (
            <div className="mt-6">
              {experience.evidence.map((evidence) => (
                <a
                  key={evidence.label}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
                  href={evidence.href}
                  target="_blank"
                  rel="noreferrer"
                  title={evidence.note}
                >
                  {evidence.label}
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>

        {experience.image ? (
          <div className="relative min-h-72 overflow-hidden rounded-2xl border border-white/10 bg-[#080d1c] xl:min-h-full">
            <Image
              src={experience.image.src}
              alt={experience.image.alt}
              fill
              sizes="(max-width: 1280px) 100vw, 256px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-[#050816]/70 via-transparent to-transparent"
            />
          </div>
        ) : null}
      </div>
    </article>
  );
}
