import type { ProjectVisual as ProjectVisualType } from "@/types/portfolio";

type ProjectVisualProps = {
  variant: ProjectVisualType;
};

function SoftwareVisual() {
  return (
    <div className="absolute inset-5 overflow-hidden rounded-2xl border border-white/10 bg-[#080d1c] shadow-2xl shadow-black/30 sm:inset-7">
      <div className="flex h-10 items-center gap-1.5 border-b border-white/8 px-4">
        <span className="size-2 rounded-full bg-red-400/60" />
        <span className="size-2 rounded-full bg-amber-300/60" />
        <span className="size-2 rounded-full bg-emerald-400/60" />
        <span className="ml-3 h-4 w-2/5 rounded-full bg-white/5" />
        <span className="ml-auto font-mono text-[0.48rem] tracking-wider text-slate-600">
          UI CONCEPT
        </span>
      </div>
      <div className="grid h-[calc(100%-2.5rem)] grid-cols-[4.5rem_1fr]">
        <div className="border-r border-white/8 p-3">
          <div className="h-6 rounded-lg bg-blue-500/18" />
          <div className="mt-3 space-y-2">
            <div className="h-2 rounded-full bg-white/6" />
            <div className="h-2 w-4/5 rounded-full bg-white/6" />
            <div className="h-2 w-3/5 rounded-full bg-white/6" />
          </div>
        </div>
        <div className="p-4">
          <div className="h-3 w-2/5 rounded-full bg-white/14" />
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div className="h-14 rounded-xl border border-blue-400/12 bg-blue-500/8" />
            <div className="h-14 rounded-xl border border-white/8 bg-white/4" />
            <div className="h-14 rounded-xl border border-white/8 bg-white/4" />
          </div>
          <div className="mt-3 h-20 rounded-xl border border-white/8 bg-white/3 p-3">
            <div className="h-2 w-4/5 rounded-full bg-white/8" />
            <div className="mt-2 h-2 w-3/5 rounded-full bg-white/6" />
            <div className="mt-4 h-5 w-16 rounded-md bg-blue-500/30" />
          </div>
        </div>
      </div>
    </div>
  );
}

function RoadVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-y-0 left-1/2 w-3/5 -translate-x-1/2 -skew-x-6 bg-slate-800/80">
        <div className="absolute inset-y-0 left-1/2 w-px border-l border-dashed border-amber-200/45" />
        <div className="absolute left-[22%] top-[22%] h-10 w-16 rounded border border-blue-400 bg-blue-500/12">
          <span className="absolute -top-4 left-0 font-mono text-[0.5rem] text-blue-300">
            DAMAGE
          </span>
        </div>
        <div className="absolute bottom-[18%] right-[17%] h-8 w-12 rounded border border-sky-300 bg-sky-400/10" />
      </div>
      <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-[#050816]/70 px-3 py-2 font-mono text-[0.6rem] tracking-wider text-blue-300 backdrop-blur-md">
        VISUAL DATA + GIS
      </div>
      <div className="absolute inset-x-5 bottom-5 h-1 overflow-hidden rounded-full bg-white/6">
        <div className="h-full w-2/3 rounded-full bg-linear-to-r from-blue-500 to-sky-300" />
      </div>
    </div>
  );
}

function SafetyVisual() {
  return (
    <div className="absolute inset-5 rounded-2xl border border-white/10 bg-[#080d1c]/90 p-4 sm:inset-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.6rem] tracking-wider text-blue-300">
          PPE MONITORING
        </span>
        <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
      </div>
      <div className="relative mt-4 grid h-[calc(100%-2rem)] place-items-center overflow-hidden rounded-xl border border-white/8 bg-blue-950/18">
        <div className="absolute inset-x-0 top-1/3 h-px bg-blue-400/12" />
        <div className="absolute inset-y-0 left-1/3 w-px bg-blue-400/12" />
        <div className="absolute inset-y-0 right-1/3 w-px bg-blue-400/12" />
        <div className="relative h-3/5 w-2/5 rounded-[45%_45%_28%_28%] border border-blue-400/60 bg-blue-500/8">
          <div className="absolute -left-3 -top-4 h-10 w-[calc(100%+1.5rem)] rounded-t-full border border-amber-300/60 bg-amber-300/10" />
          <div className="absolute -right-8 top-1/3 rounded border border-emerald-400/40 bg-[#050816]/80 px-2 py-1 font-mono text-[0.5rem] text-emerald-300">
            APD
          </div>
        </div>
        <div className="absolute inset-x-3 bottom-3 flex gap-2">
          {["HELMET", "VEST", "STATUS"].map((label) => (
            <div
              key={label}
              className="flex-1 rounded-md border border-white/8 bg-black/20 px-2 py-1.5 text-center font-mono text-[0.48rem] text-slate-400"
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ variant }: ProjectVisualProps) {
  return (
    <div
      aria-hidden="true"
      className="relative min-h-64 overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_45%),linear-gradient(145deg,#0b1328,#050816)] sm:min-h-80"
    >
      {variant === "software" ? <SoftwareVisual /> : null}
      {variant === "road" ? <RoadVisual /> : null}
      {variant === "safety" ? <SafetyVisual /> : null}
    </div>
  );
}
