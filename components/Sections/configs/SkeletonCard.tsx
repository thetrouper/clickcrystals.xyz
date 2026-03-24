export default function SkeletonCard() {
  return (
    <div className="border-2 border-slate-700/50 bg-slate-800/40 rounded-lg p-5 flex flex-col h-full animate-pulse">
      <div className="flex-grow space-y-3">
        <div className="h-4 bg-slate-700/50 rounded w-2/3" />
        <div className="flex gap-2">
          <div className="h-5 bg-slate-700/50 rounded w-16" />
          <div className="h-5 bg-slate-700/50 rounded w-12" />
        </div>
        <div className="h-3 bg-slate-800/50 rounded w-full" />
        <div className="h-3 bg-slate-800/50 rounded w-4/5" />
        <div className="flex items-center gap-2 pt-2">
          <div className="w-5 h-5 bg-slate-700/50 rounded-full" />
          <div className="h-3 bg-slate-700/50 rounded w-24" />
        </div>
      </div>
      <div className="h-9 bg-slate-700/50 rounded mt-4" />
    </div>
  );
}
