export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="h-10 bg-slate-800/50 rounded w-1/3 mb-6" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(9)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="h-64 bg-slate-800/50 rounded" />
          ))}
      </div>
    </div>
  );
}
