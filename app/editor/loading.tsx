export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 animate-pulse">
      <div className="h-16 bg-slate-800/50" />
      <div className="flex h-[calc(100vh-4rem)]">
        <div className="flex-1 bg-slate-800/30" />
        <div className="w-96 bg-slate-900/50" />
      </div>
    </div>
  );
}
