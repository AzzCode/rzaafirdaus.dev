import Image from "next/image";

import type { LeadershipExperience } from "@/types/experience";

type LeadershipCardProps = {
  leadership: LeadershipExperience;
};

export function LeadershipCard({ leadership }: LeadershipCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/9 bg-white/3">
      {leadership.gallery.length > 0 ? (
        <div className="grid gap-px bg-white/8 sm:grid-cols-2">
          {leadership.gallery.map((image) => (
            <div
              key={image.src}
              className="relative aspect-video overflow-hidden bg-[#050816]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : null}

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-blue-400 uppercase">
              {leadership.period}
            </p>
            <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {leadership.role}
            </h3>
            <p className="mt-2 text-sm font-semibold text-slate-500">
              {leadership.organization}
            </p>
          </div>

          {leadership.evidence.map((evidence) => (
            <a
              key={evidence.label}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-blue-400/30 hover:text-white"
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

        <p className="mt-6 max-w-4xl text-sm leading-7 text-slate-300 sm:text-base">
          {leadership.summary}
        </p>

        {leadership.metrics.length > 0 ? (
          <dl className="mt-7 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 sm:grid-cols-3">
            {leadership.metrics.map((metric) => (
              <div key={metric.label} className="bg-[#080d1c] p-5">
                <dt className="text-xs leading-5 text-slate-500">
                  {metric.label}
                </dt>
                <dd className="mt-2 text-2xl font-bold tracking-tight text-white">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-7 grid gap-7 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Tanggung Jawab
            </p>
            <ul className="mt-3 space-y-2">
              {leadership.responsibilities.map((responsibility) => (
                <li
                  key={responsibility}
                  className="flex gap-3 text-sm leading-6 text-slate-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1 shrink-0 rounded-full bg-blue-400"
                  />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Kompetensi
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {leadership.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs text-slate-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {leadership.scopeNote ? (
          <div className="mt-7 rounded-2xl border border-amber-300/12 bg-amber-300/5 p-4">
            <p className="text-xs font-semibold tracking-wider text-amber-200/70 uppercase">
              Catatan Ruang Lingkup
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {leadership.scopeNote}
            </p>
          </div>
        ) : null}
      </div>
    </article>
  );
}
