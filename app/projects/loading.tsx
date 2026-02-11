export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6).fill(null).map((_, i) => (
          <div key={i} className="h-48 bg-slate-800/50 rounded" />
        ))}
      </div>
    </div>
  );
}
