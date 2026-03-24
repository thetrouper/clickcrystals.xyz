export default function Loading() {
  return (
    <main className="my-12 mx-6 md:mx-24">
      <div className="mb-10">
        <div className="h-9 bg-slate-800/50 rounded w-48 animate-pulse mb-3" />
        <div className="h-4 bg-slate-800/50 rounded w-96 animate-pulse" />
      </div>
      <div className="space-y-12">
        {Array(3)
          .fill(null)
          .map((_, i) => (
            <div key={i}>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-5 bg-slate-800/50 rounded w-32 animate-pulse" />
                <div className="h-4 bg-slate-800/50 rounded w-16 animate-pulse" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {Array(3)
                  .fill(null)
                  .map((_, j) => (
                    <div
                      key={j}
                      className="bg-slate-900/50 rounded-lg p-4 animate-pulse shadow-[inset_0_1px_0_0_rgba(148,163,184,0.15)]"
                    >
                      <div className="h-4 bg-slate-700/50 rounded w-2/3 mb-2" />
                      <div className="h-3 bg-slate-800/50 rounded w-full mb-1" />
                      <div className="h-3 bg-slate-800/50 rounded w-4/5 mb-3" />
                      <div className="flex gap-3">
                        <div className="h-3 bg-slate-700/50 rounded w-12" />
                        <div className="h-3 bg-slate-700/50 rounded w-16" />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
