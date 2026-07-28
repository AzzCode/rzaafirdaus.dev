import type { ResearchProject } from "@/types/portfolio";

import { ProjectVisual } from "@/components/ui/ProjectVisual";

type ResearchCardProps = {
  research: ResearchProject;
};

export function ResearchCard({ research }: ResearchCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.75rem] border border-white/9 bg-white/3 transition-colors hover:border-blue-400/25">
      <ProjectVisual variant={research.visual} />
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-4 font-mono text-[0.65rem] tracking-[0.14em] uppercase">
          <span className="text-blue-400">{research.field}</span>
          <span className="text-slate-500">{research.period}</span>
        </div>
        <h3 className="mt-5 text-xl font-bold leading-8 tracking-tight text-white sm:text-2xl">
          {research.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-500">
          {research.role}
        </p>
        <p className="mt-5 text-sm leading-7 text-slate-300">
          {research.summary}
        </p>

        <div className="mt-6 rounded-2xl border border-white/8 bg-[#080d1c] p-4">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
            Tujuan
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {research.objective}
          </p>
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
            Kontribusi
          </p>
          <ul className="mt-3 space-y-2">
            {research.contributions.map((contribution) => (
              <li
                key={contribution}
                className="flex gap-3 text-sm leading-6 text-slate-400"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 size-1 shrink-0 rounded-full bg-blue-400"
                />
                {contribution}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {research.focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-white/9 bg-white/3 px-3 py-1.5 text-xs text-slate-300"
            >
              {area}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
            Fokus Pembelajaran
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {research.learning.join(" · ")}
          </p>
        </div>

        <div className="mt-7 border-t border-white/8 pt-6">
          {research.links.map((link) => (
            <a
              key={link.label}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 transition-colors hover:text-blue-200"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
