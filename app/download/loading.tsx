export default function Loading() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Download <span className="text-blue-400">ClickCrystals</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Official downloads are available on CurseForge, PlanetMC, Modrinth,
            and GitHub. Only download from these trusted sources.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 animate-pulse">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="h-16 bg-slate-800/50 rounded" />
            ))}
        </div>
        <div className="h-64 bg-slate-800/50 rounded animate-pulse" />
      </div>
    </main>
  );
}
