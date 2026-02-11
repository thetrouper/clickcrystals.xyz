'use client';

import { useLoading } from './LoadingProvider';

export function LoadingOverlay() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99998] bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950">
      <main className="my-12 mx-6 md:mx-24">
        <div className="py-0">
          <div className="text-left">
            <div className="h-12 bg-gradient-to-r from-slate-800/30 via-slate-700/40 to-slate-800/30 rounded w-2/3 mb-4 animate-shimmer bg-[length:200%_100%]" />
            <div className="h-6 bg-gradient-to-r from-slate-800/30 via-slate-700/40 to-slate-800/30 rounded w-full max-w-3xl mb-2 animate-shimmer bg-[length:200%_100%]" />
            <div className="h-6 bg-gradient-to-r from-slate-800/30 via-slate-700/40 to-slate-800/30 rounded w-3/4 max-w-3xl animate-shimmer bg-[length:200%_100%]" />
          </div>
        </div>
        <div className="mt-8">
          <div className="flex gap-4 mb-4">
            <div className="h-10 bg-gradient-to-r from-slate-800/30 via-slate-700/40 to-slate-800/30 rounded w-[200px] md:w-[280px] animate-shimmer bg-[length:200%_100%]" />
            <div className="h-10 bg-gradient-to-r from-slate-800/30 via-slate-700/40 to-slate-800/30 rounded flex-1 animate-shimmer bg-[length:200%_100%]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {Array(6).fill(null).map((_, i) => (
              <div key={i} className="border border-slate-800 bg-gradient-to-r from-slate-900/30 via-slate-800/40 to-slate-900/30 rounded-lg p-4 animate-shimmer bg-[length:200%_100%]">
                <div className="h-4 bg-slate-800/50 rounded w-2/3 mb-3" />
                <div className="h-3 bg-slate-800/30 rounded w-1/3 mb-3" />
                <div className="h-3 bg-slate-800/40 rounded w-full" />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
