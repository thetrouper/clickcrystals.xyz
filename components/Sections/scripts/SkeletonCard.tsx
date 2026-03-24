export default function SkeletonCard() {
  return (
    <div className="bg-slate-800/40 rounded-lg p-4 animate-pulse">
      <div className="h-4 bg-slate-800/50 rounded w-2/3 mb-3" />
      <div className="h-3 bg-slate-800/30 rounded w-1/3 mb-3" />
      <div className="h-3 bg-slate-800/40 rounded w-full" />
    </div>
  );
}
