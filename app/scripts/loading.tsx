export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="flex gap-4 mb-4">
        <div className="h-10 bg-slate-800/30 rounded w-[200px] md:w-[280px]" />
        <div className="h-10 bg-slate-800/30 rounded flex-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="border border-slate-800 bg-slate-900/30 rounded-lg p-4"
            >
              <div className="h-4 bg-slate-800/50 rounded w-2/3 mb-3" />
              <div className="h-3 bg-slate-800/30 rounded w-1/3 mb-3" />
              <div className="h-3 bg-slate-800/40 rounded w-full" />
            </div>
          ))}
      </div>
    </div>
  );
}
