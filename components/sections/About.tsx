import { profile } from "@/data/profile";

const focusAreas = [
  "Software development berbasis Laravel",
  "Data, machine learning, computer vision, dan GIS",
  "Leadership, project coordination, dan dokumentasi",
];

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-white/8 bg-[#080d1c] px-5 py-24 sm:px-8 sm:py-30 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
        <div>
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
            01 / About
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Fondasi teknis,
            <span className="block text-slate-500">perspektif lintas disiplin.</span>
          </h2>
        </div>

        <div>
          <div className="space-y-5">
            {profile.about.map((paragraph) => (
              <p
                key={paragraph}
                className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <ul className="mt-9 grid gap-3 sm:grid-cols-3">
            {focusAreas.map((area, index) => (
              <li
                key={area}
                className="rounded-2xl border border-white/8 bg-white/3 p-4 text-sm leading-6 text-slate-400"
              >
                <span className="mb-3 block font-mono text-xs text-blue-400">
                  0{index + 1}
                </span>
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
