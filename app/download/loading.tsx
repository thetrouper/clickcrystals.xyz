export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 py-20 md:py-32">
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <div className="h-10 md:h-12 bg-slate-800/50 rounded w-2/3 mx-auto mb-3 md:mb-4 animate-pulse" />
          <div className="h-4 md:h-5 bg-slate-800/50 rounded w-3/4 mx-auto animate-pulse" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pt-4 md:pt-6 animate-pulse">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="h-14 bg-slate-800/50 rounded" />
            ))}
        </div>
        <div className="h-64 bg-slate-800/50 rounded animate-pulse" />
      </div>
    </main>
  );
}
