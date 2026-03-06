import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Scripts = dynamic(() => import('@/components/Sections/scripts/Scripts'), {
  ssr: false,
  loading: () => (
    <div>
      <div className="flex gap-4 mb-4">
        <div className="h-10 bg-slate-800/50 rounded w-[200px] md:w-[280px] animate-pulse">
          <div className="h-full bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 animate-shimmer" />
        </div>
        <div className="h-10 bg-slate-800/50 rounded flex-1 animate-pulse">
          <div className="h-full bg-gradient-to-r from-slate-800/50 via-slate-700/50 to-slate-800/50 animate-shimmer" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="h-[200px] bg-slate-800/50 rounded p-4 space-y-3"
            >
              <div className="h-6 bg-slate-700/50 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-slate-700/50 rounded w-full animate-pulse" />
              <div className="h-4 bg-slate-700/50 rounded w-5/6 animate-pulse" />
              <div className="flex gap-2 mt-4">
                <div className="h-6 bg-emerald-900/30 rounded w-16 animate-pulse" />
                <div className="h-6 bg-slate-700/50 rounded w-20 animate-pulse" />
              </div>
            </div>
          ))}
      </div>
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'ClickCrystals - Scripts Archive',
};

export default function ScriptsArchive() {
  return (
    <>
      <main className="my-12 mx-6 md:mx-24">
        <div className="py-0">
          <div className="text-left">
            <h1 className="text-white tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl">
              ClickCrystals{' '}
              <span className="text-blue-500">Script Archive</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl my-4">
              Here are several ClickCrystals&apos;s working scripts that you
              might like. If you want your script to be added here, please
              contact a moderator on our Discord Guild.
            </p>
          </div>
        </div>
        <Scripts />
      </main>
    </>
  );
}
