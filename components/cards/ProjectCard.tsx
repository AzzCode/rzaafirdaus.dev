import type { Project } from "@/types/portfolio";

import { ProjectVisual } from "@/components/ui/ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/9 bg-white/3 transition-colors hover:border-blue-400/25">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <ProjectVisual variant={project.visual} />

        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3 font-mono text-[0.65rem] tracking-[0.14em] uppercase">
            <span className="text-blue-400">{project.category}</span>
            <span className="text-slate-700">/</span>
            <span className="text-slate-500">{project.period}</span>
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-medium text-slate-500">
            {project.role}
          </p>
          <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
            {project.summary}
          </p>

          <div className="mt-6">
            <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Kontribusi
            </p>
            <ul className="mt-3 space-y-2">
              {project.contributions.map((contribution) => (
                <li
                  key={contribution}
                  className="flex gap-3 text-sm leading-6 text-slate-400"
                >
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-blue-400" />
                  {contribution}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/9 bg-white/3 px-3 py-1.5 text-xs text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-white/8 pt-6">
            {project.links.map((link) => (
              <a
                key={link.label}
                className={
                  link.kind === "demo"
                    ? "inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
                    : "inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:border-white/20 hover:text-white"
                }
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
      </div>

      <div className="grid gap-px border-t border-white/8 bg-white/8 sm:grid-cols-2">
        <div className="bg-[#080d1c] p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
            Tantangan
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {project.challenge}
          </p>
        </div>
        <div className="bg-[#080d1c] p-5 sm:p-6">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
            Fokus Pembelajaran
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {project.learning.join(" · ")}
          </p>
        </div>
      </div>
    </article>
  );
}
