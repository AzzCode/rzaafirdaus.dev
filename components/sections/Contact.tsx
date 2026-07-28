import Link from "next/link";

import { profile } from "@/data/profile";

type ContactProps = {
  compact?: boolean;
};

export function Contact({ compact = false }: ContactProps) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/8 bg-[#070b18] px-5 py-20 sm:px-8 sm:py-24 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="absolute -right-24 top-0 size-72 rounded-full bg-blue-600/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 sm:p-10">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
            Contact
          </p>
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Mari membicarakan peluang dan kolaborasi yang relevan.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            {profile.availability}. Hubungi saya melalui email untuk percakapan
            profesional, kesempatan kerja, atau kolaborasi teknologi dan
            kreatif.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-blue-500"
              href={`mailto:${profile.email}`}
            >
              Kirim Email
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </a>
            {!compact ? (
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/12 bg-white/4 px-6 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/7"
                href="/resume"
              >
                Lihat Resume
              </Link>
            ) : null}
          </div>
        </div>

        <div className="grid gap-3">
          <div className="rounded-2xl border border-white/10 bg-[#0a1022] p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Email utama
            </p>
            <a
              className="mt-3 block break-all text-base font-semibold text-white transition-colors hover:text-blue-300"
              href={`mailto:${profile.email}`}
            >
              {profile.email}
            </a>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              Kanal terbaik untuk interview, kesempatan kerja, dan komunikasi
              formal.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0a1022] p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
              Professional links
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {profile.socialLinks.map((link) => (
                <a
                  key={link.label}
                  className="rounded-full border border-white/10 bg-white/4 px-4 py-2 text-sm font-semibold text-slate-300 transition-colors hover:border-blue-400/35 hover:text-white"
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <span aria-hidden="true" className="ml-1.5">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.045] p-6">
            <div className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="size-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.65)]"
              />
              <p className="text-sm font-semibold text-emerald-200">
                {profile.availability}
              </p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Berbasis di {profile.location}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
