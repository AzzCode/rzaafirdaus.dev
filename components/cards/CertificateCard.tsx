import Image from "next/image";

import type { Certificate } from "@/types/certificate";

type CertificateCardProps = {
  certificate: Certificate;
  onPreview: (certificate: Certificate) => void;
};

export function CertificateCard({
  certificate,
  onPreview,
}: CertificateCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/9 bg-white/3 transition-colors hover:border-blue-400/25">
      <button
        type="button"
        className="block w-full cursor-zoom-in text-left"
        onClick={() => onPreview(certificate)}
        aria-label={`Preview sertifikat ${certificate.title}`}
      >
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8 bg-slate-100 p-3">
          <Image
            src={certificate.thumbnail}
            alt={`Thumbnail ${certificate.title}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain transition-transform duration-500 group-hover:scale-[1.025]"
          />
          <span className="absolute right-3 bottom-3 rounded-full border border-white/15 bg-[#050816]/80 px-3 py-1.5 text-[0.65rem] font-semibold text-white backdrop-blur-md">
            Preview PDF
          </span>
        </div>

        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-4 font-mono text-[0.62rem] tracking-[0.12em] uppercase">
            <span className="text-blue-400">{certificate.category}</span>
            <span className="text-slate-600">{certificate.date}</span>
          </div>
          <h3 className="mt-4 text-lg font-bold leading-7 text-white">
            {certificate.title}
          </h3>
          <p className="mt-2 text-xs leading-5 font-medium text-slate-500">
            {certificate.issuer}
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-400">
            {certificate.summary}
          </p>

          {certificate.privacyNote ? (
            <p className="mt-4 rounded-xl border border-emerald-400/10 bg-emerald-400/5 px-3 py-2 text-xs leading-5 text-emerald-200/70">
              {certificate.privacyNote}
            </p>
          ) : null}
        </div>
      </button>
    </article>
  );
}
