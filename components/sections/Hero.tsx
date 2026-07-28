import Image from "next/image";

import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden px-5 pb-20 pt-30 sm:px-8 sm:pt-36 lg:px-10 lg:pb-24">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="hero-orb pointer-events-none absolute -right-32 top-24 -z-10 size-96 rounded-full bg-blue-600/18"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-80 rounded-full bg-indigo-600/10 blur-3xl"
      />

      <div className="mx-auto grid min-h-[calc(100vh-11rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <div className="reveal-up inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/8 px-3 py-1.5 text-xs font-semibold tracking-wide text-blue-300 uppercase">
            <span
              aria-hidden="true"
              className="size-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]"
            />
            {profile.eyebrow}
          </div>

          <h1 className="reveal-up reveal-up-delay-1 mt-6 max-w-4xl text-5xl leading-[0.98] font-black tracking-[-0.055em] text-balance text-white sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            {profile.headline}
            <span className="block bg-linear-to-r from-blue-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              building with purpose.
            </span>
          </h1>

          <p className="reveal-up reveal-up-delay-2 mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            {profile.summary}
          </p>

          <div
            className="reveal-up reveal-up-delay-2 mt-6 flex flex-wrap gap-2"
            aria-label="Bidang fokus"
          >
            {profile.disciplines.map((discipline) => (
              <span
                key={discipline}
                className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {discipline}
              </span>
            ))}
          </div>

          <div className="reveal-up reveal-up-delay-3 mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
              href="#projects"
            >
              Explore Projects
              <span aria-hidden="true" className="ml-2">
                ↓
              </span>
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/12 bg-white/4 px-6 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/7"
              href={profile.cvPath}
              download
            >
              Download CV
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center px-4 text-sm font-semibold text-slate-400 transition-colors hover:text-white"
              href={profile.socialLinks[0].href}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span aria-hidden="true" className="ml-1.5">
                ↗
              </span>
            </a>
          </div>

          <dl className="reveal-up reveal-up-delay-3 mt-12 grid max-w-xl grid-cols-3 gap-3 border-t border-white/8 pt-7">
            {profile.metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-xs leading-5 text-slate-500">
                  {metric.label}
                </dt>
                <dd className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal-up reveal-up-delay-2 relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -inset-8 -z-10 rounded-full bg-blue-600/15 blur-3xl"
          />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/5 p-2 shadow-2xl shadow-black/35">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.55rem] bg-[#11182b]">
              <Image
                src={profile.portrait}
                alt={`Foto profesional ${profile.name}`}
                fill
                priority
                sizes="(max-width: 1024px) 448px, 42vw"
                className="object-cover object-[center_22%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-[#050816] via-transparent to-blue-950/10"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/12 bg-[#070b16]/75 p-4 backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-white">
                      {profile.name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {profile.location}
                    </p>
                  </div>
                  <span className="mt-1 size-2.5 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.65)]" />
                </div>
                <p className="mt-3 border-t border-white/8 pt-3 text-xs leading-5 text-slate-300">
                  {profile.availability}
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 top-10 hidden rounded-2xl border border-white/10 bg-[#0a1022]/80 px-4 py-3 shadow-xl shadow-black/25 backdrop-blur-xl sm:block">
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-blue-300 uppercase">
              Current focus
            </p>
            <p className="mt-1 text-sm font-semibold text-white">
              Software & Applied AI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
