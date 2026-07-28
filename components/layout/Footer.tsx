import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#050816] px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-500">
            © 2026. Dibangun sebagai portofolio profesional.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a
            className="text-sm text-slate-400 transition-colors hover:text-white"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
          {profile.socialLinks.map((link) => (
            <a
              key={link.label}
              className="text-sm text-slate-400 transition-colors hover:text-white"
              href={link.href}
              target="_blank"
              rel="noreferrer"
            >
              {link.label}
            </a>
          ))}
          <a
            className="text-sm text-slate-400 transition-colors hover:text-white"
            href="#main-content"
          >
            Kembali ke atas ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
