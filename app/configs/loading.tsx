export default function Loading() {
  return (
    <div className="mt-8 animate-pulse">
      <div className="flex gap-4 mb-4">
        <div className="h-10 bg-slate-800/50 rounded w-[200px] md:w-[280px]" />
        <div className="h-10 bg-slate-800/50 rounded flex-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Array(6).fill(null).map((_, i) => (
          <div key={i} className="h-[200px] bg-slate-800/50 rounded" />
        ))}
      </div>
    </div>
  );
}
