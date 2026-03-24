import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Scripts = dynamic(() => import('@/components/Sections/scripts/Scripts'), {
  ssr: false,
  loading: () => (
    <div>
      <div className="flex gap-4 mb-4">
        <div className="h-10 bg-slate-800/50 rounded w-[200px] md:w-[280px] animate-pulse" />
        <div className="h-10 bg-slate-800/50 rounded flex-1 animate-pulse" />
      </div>
      <div className="h-5 w-32 bg-slate-800/50 rounded mb-3 animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(15)
          .fill(null)
          .map((_, i) => (
            <div key={i} className="bg-slate-800/40 rounded-lg p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="h-4 bg-slate-700/50 rounded w-2/3 animate-pulse" />
              </div>
              <div className="flex gap-2 mb-3">
                <div className="h-3 bg-slate-800/50 rounded w-16 animate-pulse" />
                <div className="h-3 bg-slate-800/50 rounded w-12 animate-pulse" />
              </div>
              <div className="h-3 bg-slate-800/50 rounded w-full animate-pulse mb-2" />
              <div className="h-3 bg-slate-800/50 rounded w-4/5 animate-pulse" />
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
