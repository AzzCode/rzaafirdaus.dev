"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-screen place-items-center bg-[#050816] px-5 py-20 text-center">
      <div className="max-w-xl rounded-[2rem] border border-white/10 bg-[#0a1022] p-8 sm:p-12">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
          Something went wrong
        </p>
        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Halaman belum dapat ditampilkan.
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-400 sm:text-base">
          Terjadi kendala saat memuat konten. Silakan coba kembali atau buka
          homepage.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            type="button"
            className="min-h-11 rounded-xl bg-blue-600 px-5 text-sm font-bold text-white transition-colors hover:bg-blue-500"
            onClick={reset}
          >
            Coba Lagi
          </button>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/12 px-5 text-sm font-bold text-white transition-colors hover:bg-white/5"
            href="/"
          >
            Buka Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
