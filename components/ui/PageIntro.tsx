type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageIntro({ eyebrow, title, description }: PageIntroProps) {
  return (
    <header className="relative overflow-hidden border-b border-white/8 px-5 pb-18 pt-34 sm:px-8 sm:pb-24 sm:pt-40 lg:px-10">
      <div
        aria-hidden="true"
        className="hero-grid pointer-events-none absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="absolute -right-20 top-0 -z-10 size-80 rounded-full bg-blue-600/12 blur-3xl"
      />
      <div className="mx-auto max-w-7xl">
        <p className="font-mono text-xs font-semibold tracking-[0.2em] text-blue-400 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.045em] text-balance text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      </div>
    </header>
  );
}
