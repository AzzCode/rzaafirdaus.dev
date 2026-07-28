import { navigation, profile } from "@/data/profile";

const linkStyles =
  "text-sm font-medium text-slate-300 transition-colors hover:text-white";

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#050816]/75 backdrop-blur-xl">
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a
          href="#main-content"
          className="group flex items-center gap-3"
          aria-label={`${profile.name}, kembali ke bagian utama`}
        >
          <span className="grid size-9 place-items-center rounded-xl border border-blue-400/25 bg-blue-500/10 font-mono text-xs font-bold tracking-wider text-blue-300 transition-colors group-hover:border-blue-400/45 group-hover:bg-blue-500/15">
            {profile.initials}
          </span>
          <span className="text-sm font-semibold tracking-tight text-white sm:text-base">
            {profile.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <a key={item.href} className={linkStyles} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            className="rounded-full border border-white/12 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-blue-400/45 hover:bg-blue-500/10"
            href={profile.cvPath}
            download
          >
            Download CV
          </a>
        </div>

        <details className="group relative sm:hidden">
          <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl border border-white/12 bg-white/5 text-white [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Buka navigasi</span>
            <span className="flex w-4 flex-col gap-1">
              <span className="h-px w-full bg-current transition-transform group-open:translate-y-1 group-open:rotate-45" />
              <span className="h-px w-full bg-current transition-opacity group-open:opacity-0" />
              <span className="h-px w-full bg-current transition-transform group-open:-translate-y-1 group-open:-rotate-45" />
            </span>
          </summary>
          <div className="absolute right-0 top-13 w-56 rounded-2xl border border-white/10 bg-[#0a1022]/98 p-2 shadow-2xl shadow-black/40 backdrop-blur-xl">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-1 block rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-500"
              href={profile.cvPath}
              download
            >
              Download CV
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}
