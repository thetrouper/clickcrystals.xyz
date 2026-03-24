export default function SkeletonCard() {
  return (
    <div className="border border-slate-800 bg-gradient-to-r from-slate-900/30 via-slate-800/40 to-slate-900/30 rounded-lg p-4 animate-shimmer bg-[length:200%_100%]">
      <div className="h-4 bg-slate-800/50 rounded w-2/3 mb-3" />
      <div className="h-3 bg-slate-800/30 rounded w-1/3 mb-3" />
      <div className="h-3 bg-slate-800/40 rounded w-full" />
    </div>
  );
}
