export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto space-y-4 animate-pulse">
      {Array(8)
        .fill(null)
        .map((_, i) => (
          <div key={i} className="h-16 bg-slate-800/50 rounded" />
        ))}
    </div>
  );
}
