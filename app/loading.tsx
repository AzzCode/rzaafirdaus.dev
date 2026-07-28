export default function Loading() {
  return (
    <main
      className="min-h-screen bg-[#050816] px-5 pb-20 pt-32 sm:px-8 lg:px-10"
      aria-busy="true"
      aria-live="polite"
    >
      <p className="sr-only">Memuat halaman portofolio...</p>
      <div className="mx-auto max-w-7xl">
        <div className="loading-shimmer h-5 w-36 rounded-full bg-white/8" />
        <div className="loading-shimmer mt-7 h-14 max-w-3xl rounded-2xl bg-white/8 sm:h-20" />
        <div className="loading-shimmer mt-4 h-14 max-w-2xl rounded-2xl bg-white/5" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="loading-shimmer h-64 rounded-[1.75rem] bg-white/5" />
          <div className="loading-shimmer h-64 rounded-[1.75rem] bg-white/5" />
        </div>
      </div>
    </main>
  );
}
