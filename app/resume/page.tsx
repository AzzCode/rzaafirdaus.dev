import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PageIntro } from "@/components/ui/PageIntro";
import { experiences } from "@/data/experience";
import { leadershipExperiences } from "@/data/leadership";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { researchProjects } from "@/data/research";
import { resumeFacts } from "@/data/resume";
import { skillGroups } from "@/data/skills";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata(
  "Online Resume",
  "Resume online Reza Firdaus yang merangkum pendidikan, software project, penelitian, pengalaman, kepemimpinan, dan keahlian.",
  "/resume",
);

export default function ResumePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main id="main-content">
        <PageIntro
          eyebrow="Online Resume"
          title="A concise record of work, research, and responsibility."
          description="Ringkasan profesional yang terhubung dengan studi kasus, bukti kegiatan, dan CV versi PDF."
        />

        <section className="bg-[#050816] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
              <aside className="space-y-6">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1022] p-7">
                  <p className="text-xs font-semibold tracking-[0.16em] text-blue-400 uppercase">
                    Profile
                  </p>
                  <h2 className="mt-4 text-2xl font-bold text-white">
                    {profile.name}
                  </h2>
                  <p className="mt-2 text-base font-medium text-blue-300">
                    {profile.headline}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-slate-400">
                    {profile.summary}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      className="inline-flex min-h-11 items-center justify-center rounded-xl bg-blue-600 px-5 text-sm font-bold text-white transition-colors hover:bg-blue-500"
                      href={profile.cvPath}
                      download
                    >
                      Download CV PDF
                    </a>
                    <a
                      className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-5 text-sm font-bold text-white transition-colors hover:bg-white/5"
                      href={`mailto:${profile.email}`}
                    >
                      Hubungi via Email
                    </a>
                  </div>
                </div>

                <div className="grid gap-3">
                  {resumeFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-2xl border border-white/8 bg-white/[0.025] p-5"
                    >
                      <p className="text-xs font-medium text-slate-500">
                        {fact.label}
                      </p>
                      <p className="mt-2 font-semibold text-white">
                        {fact.value}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        {fact.detail}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-[#0a1022] p-7">
                  <h2 className="text-lg font-bold text-white">Keahlian</h2>
                  <div className="mt-5 space-y-6">
                    {skillGroups.map((group) => (
                      <div key={group.id}>
                        <h3 className="text-sm font-semibold text-blue-300">
                          {group.title}
                        </h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/8 bg-white/4 px-3 py-1.5 text-xs text-slate-300"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>

              <div className="space-y-10">
                <ResumeSection
                  eyebrow="Software Development"
                  title="Project"
                  items={projects.map((project) => ({
                    title: project.title,
                    meta: `${project.period} · ${project.role}`,
                    description: project.summary,
                    bullets: project.contributions,
                  }))}
                />

                <ResumeSection
                  eyebrow="Applied Research"
                  title="Penelitian"
                  items={researchProjects.map((research) => ({
                    title: research.title,
                    meta: `${research.period} · ${research.role}`,
                    description: research.summary,
                    bullets: research.contributions,
                  }))}
                />

                <ResumeSection
                  eyebrow="Professional & Creative"
                  title="Pengalaman"
                  items={experiences.map((experience) => ({
                    title: `${experience.role} — ${experience.organization}`,
                    meta: `${experience.period} · ${experience.location}`,
                    description: experience.summary,
                    bullets: experience.highlights,
                  }))}
                />

                <ResumeSection
                  eyebrow="Leadership"
                  title="Organisasi"
                  items={leadershipExperiences.map((experience) => ({
                    title: `${experience.role} — ${experience.organization}`,
                    meta: experience.period,
                    description: experience.summary,
                    bullets: experience.responsibilities,
                  }))}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

type ResumeItem = {
  title: string;
  meta: string;
  description: string;
  bullets: readonly string[];
};

type ResumeSectionProps = {
  eyebrow: string;
  title: string;
  items: readonly ResumeItem[];
};

function ResumeSection({ eyebrow, title, items }: ResumeSectionProps) {
  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-6 sm:p-8">
      <p className="font-mono text-xs font-semibold tracking-[0.16em] text-blue-400 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h2>
      <div className="mt-7 space-y-8">
        {items.map((item) => (
          <article
            key={`${item.title}-${item.meta}`}
            className="border-t border-white/8 pt-7 first:border-0 first:pt-0"
          >
            <h3 className="text-lg font-bold text-white">{item.title}</h3>
            <p className="mt-2 text-xs font-semibold tracking-wide text-blue-300 uppercase">
              {item.meta}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              {item.description}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span aria-hidden="true" className="text-blue-400">
                    •
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
