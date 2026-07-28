"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { CertificateCard } from "@/components/cards/CertificateCard";
import { certificateCategories } from "@/data/certificates";
import type {
  Certificate,
  CertificateCategory,
} from "@/types/certificate";

type CertificateGalleryProps = {
  certificates: readonly Certificate[];
  showFilters?: boolean;
};

type ActiveCategory = "All" | CertificateCategory;

export function CertificateGallery({
  certificates,
  showFilters = true,
}: CertificateGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<ActiveCategory>("All");
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastFocusedElementRef = useRef<HTMLElement | null>(null);

  const visibleCertificates = useMemo(() => {
    if (activeCategory === "All") {
      return certificates;
    }

    return certificates.filter(
      (certificate) => certificate.category === activeCategory,
    );
  }, [activeCategory, certificates]);

  useEffect(() => {
    if (!selectedCertificate) {
      return;
    }

    lastFocusedElementRef.current = document.activeElement as HTMLElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCertificate(null);
      }

      if (event.key === "Tab" && dialogRef.current) {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      lastFocusedElementRef.current?.focus();
    };
  }, [selectedCertificate]);

  return (
    <>
      {showFilters ? (
        <div
          className="mb-8 flex flex-wrap gap-2"
          aria-label="Filter kategori sertifikat"
        >
          {certificateCategories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                className={
                  isActive
                    ? "rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white"
                    : "rounded-full border border-white/9 bg-white/3 px-4 py-2 text-xs font-semibold text-slate-400 transition-colors hover:text-white"
                }
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
              >
                {category}
              </button>
            );
          })}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleCertificates.map((certificate) => (
          <CertificateCard
            key={certificate.id}
            certificate={certificate}
            onPreview={setSelectedCertificate}
          />
        ))}
      </div>

      {selectedCertificate ? (
        <div
          className="fixed inset-0 z-[100] grid place-items-center p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-dialog-title"
          aria-describedby="certificate-dialog-description"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedCertificate(null)}
            aria-label="Tutup preview sertifikat"
            tabIndex={-1}
          />

          <div
            ref={dialogRef}
            className="relative flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/12 bg-[#080d1c] shadow-2xl shadow-black/60"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/8 p-4 sm:p-5">
              <div>
                <p className="font-mono text-[0.62rem] tracking-[0.14em] text-blue-400 uppercase">
                  {selectedCertificate.category} / {selectedCertificate.date}
                </p>
                <h2
                  id="certificate-dialog-title"
                  className="mt-2 text-sm font-bold text-white sm:text-lg"
                >
                  {selectedCertificate.title}
                </h2>
                <p
                  id="certificate-dialog-description"
                  className="sr-only"
                >
                  Preview dokumen PDF sertifikat. Tekan Escape untuk menutup.
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  className="hidden rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white sm:inline-flex"
                  href={selectedCertificate.documentPath}
                  target="_blank"
                  rel="noreferrer"
                >
                  Buka PDF ↗
                </a>
                <button
                  ref={closeButtonRef}
                  type="button"
                  className="grid size-9 place-items-center rounded-lg border border-white/10 text-lg text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Tutup preview"
                >
                  ×
                </button>
              </div>
            </div>

            <iframe
              className="min-h-0 flex-1 bg-slate-100"
              src={`${selectedCertificate.documentPath}#toolbar=1&navpanes=0`}
              title={`Preview PDF ${selectedCertificate.title}`}
            />

            <a
              className="border-t border-white/8 px-4 py-3 text-center text-xs font-semibold text-blue-300 sm:hidden"
              href={selectedCertificate.documentPath}
              target="_blank"
              rel="noreferrer"
            >
              Buka PDF di tab baru ↗
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
