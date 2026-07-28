import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups, stackItems } from "@/data/skills";
import type { StackCategory } from "@/types/skill";

const categoryStyles: Record<StackCategory, string> = {
  "Core Practice": "border-blue-400/20 bg-blue-500/8 text-blue-300",
  "Applied Research":
    "border-violet-400/20 bg-violet-500/8 text-violet-300",
  "Portfolio Stack":
    "border-emerald-400/20 bg-emerald-500/8 text-emerald-300",
  "Training Exposure":
    "border-amber-300/20 bg-amber-300/8 text-amber-200",
};

export function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-[#050816] px-5 py-24 sm:px-8 sm:py-30 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="02"
          eyebrow="Skills & Stack"
          title="Kemampuan disajikan bersama konteks penggunaannya."
          description="Skill inti, pengalaman riset, teknologi yang digunakan untuk portfolio, dan materi pelatihan dipisahkan agar tingkat pengalaman tetap transparan."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.id}
              className="rounded-2xl border border-white/9 bg-white/3 p-6"
            >
              <h3 className="text-lg font-bold text-white">{group.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-500">
                {group.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/8 bg-[#080d1c] px-3 py-1.5 text-xs leading-5 text-slate-300"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-14">
          <div className="flex flex-col gap-3 border-b border-white/8 pb-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs tracking-[0.16em] text-blue-400 uppercase">
                Technology Context
              </p>
              <h3 className="mt-3 text-2xl font-bold tracking-tight text-white">
                Stack, tools, and learning exposure
              </h3>
            </div>
            <p className="max-w-xl text-xs leading-5 text-slate-500">
              “Portfolio Stack” menjelaskan teknologi website ini, bukan klaim
              pengalaman kerja profesional.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {stackItems.map((item) => (
              <article
                key={item.name}
                className="rounded-2xl border border-white/8 bg-white/3 p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="grid min-h-10 min-w-10 place-items-center rounded-xl border border-white/10 bg-[#080d1c] px-2 font-mono text-[0.65rem] font-bold text-white">
                    {item.shortLabel}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[0.58rem] font-semibold tracking-wider uppercase ${categoryStyles[item.category]}`}
                  >
                    {item.category}
                  </span>
                </div>
                <h4 className="mt-5 font-bold text-white">{item.name}</h4>
                <p className="mt-2 text-xs leading-5 text-slate-500">
                  {item.context}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
