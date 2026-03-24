export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="flex flex-wrap gap-2 md:gap-3 pt-4 px-4 md:px-8 pb-4 items-center justify-between border-b border-slate-800/50">
        <div className="flex gap-2 md:gap-3">
          <div className="h-9 w-20 bg-slate-800/50 rounded-lg animate-pulse" />
          <div className="h-9 w-20 bg-slate-800/50 rounded-lg animate-pulse" />
        </div>
        <div className="flex gap-2 md:gap-3">
          <div className="h-9 w-24 bg-slate-800/50 rounded-lg animate-pulse" />
          <div className="h-9 w-20 bg-slate-800/50 rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row h-screen bg-[#1e1e1e]">
        <div className="flex-1 h-1/2 lg:h-full p-4 space-y-3">
          {Array(12)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-4 bg-slate-800/50 rounded animate-pulse"
                style={{ width: `${60 + ((i * 17) % 40)}%` }}
              />
            ))}
        </div>
        <div className="flex-1 h-1/2 lg:h-full border-t lg:border-t-0 lg:border-l border-slate-800/50 p-4 space-y-3">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-4 bg-slate-800/30 rounded animate-pulse"
                style={{ width: `${50 + ((i * 23) % 40)}%` }}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
