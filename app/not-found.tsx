import Link from "next/link";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>
      <Navbar />
      <main
        id="main-content"
        className="relative grid min-h-[82vh] place-items-center overflow-hidden px-5 pb-20 pt-32 text-center sm:px-8"
      >
        <div
          aria-hidden="true"
          className="hero-grid pointer-events-none absolute inset-0 -z-20"
        />
        <div
          aria-hidden="true"
          className="absolute top-1/4 -z-10 size-80 rounded-full bg-blue-600/12 blur-3xl"
        />
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-semibold tracking-[0.2em] text-blue-400 uppercase">
            Error 404
          </p>
          <h1 className="mt-5 text-5xl font-black tracking-[-0.05em] text-white sm:text-7xl">
            Halaman tidak ditemukan.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400">
            Alamat yang kamu buka tidak tersedia atau sudah berubah. Kembali ke
            halaman utama untuk melanjutkan eksplorasi portofolio.
          </p>
          <Link
            className="mt-9 inline-flex min-h-12 items-center justify-center rounded-xl bg-blue-600 px-6 text-sm font-bold text-white transition-colors hover:bg-blue-500"
            href="/"
          >
            Kembali ke Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
