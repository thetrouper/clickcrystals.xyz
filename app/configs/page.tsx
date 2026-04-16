import { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Configs = dynamic(() => import('@/components/Sections/configs/Configs'), {
  ssr: false,
  loading: () => (
    <div className="mt-8">
      <div className="flex gap-4 mb-4 animate-pulse">
        <div className="h-10 bg-slate-800/50 rounded w-[200px] md:w-[280px]" />
        <div className="h-10 bg-slate-800/50 rounded flex-1" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 animate-pulse">
        {Array(6)
          .fill(null)
          .map((_, i) => (
            <div
              key={i}
              className="border border-slate-700/50 bg-slate-900/50 rounded-lg p-4"
            >
              <div className="h-4 bg-slate-700/50 rounded w-2/3 mb-3" />
              <div className="flex gap-2 mb-3">
                <div className="h-3 bg-slate-800/50 rounded w-16" />
                <div className="h-3 bg-slate-800/50 rounded w-12" />
              </div>
              <div className="h-3 bg-slate-800/50 rounded w-full mb-2" />
              <div className="h-3 bg-slate-800/50 rounded w-4/5" />
            </div>
          ))}
      </div>
    </div>
  ),
});

const ConfigsSkeleton = () => (
  <div className="mt-8">
    <div className="flex gap-4 mb-4 animate-pulse">
      <div className="h-10 bg-slate-800/50 rounded w-[200px] md:w-[280px]" />
      <div className="h-10 bg-slate-800/50 rounded flex-1" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 animate-pulse">
      {Array(6)
        .fill(null)
        .map((_, i) => (
          <div
            key={i}
            className="border border-slate-700/50 bg-slate-900/50 rounded-lg p-4"
          >
            <div className="h-4 bg-slate-700/50 rounded w-2/3 mb-3" />
            <div className="flex gap-2 mb-3">
              <div className="h-3 bg-slate-800/50 rounded w-16" />
              <div className="h-3 bg-slate-800/50 rounded w-12" />
            </div>
            <div className="h-3 bg-slate-800/50 rounded w-full mb-2" />
            <div className="h-3 bg-slate-800/50 rounded w-4/5" />
          </div>
        ))}
    </div>
  </div>
);

export const metadata: Metadata = {
  title: 'ClickCrystals - Configs Explorer',
};

export default function ScriptsArchive() {
  return (
    <main className="my-12 mx-6 md:mx-24">
      <div className="py-0">
        <div className="text-left">
          <h1 className="text-white tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl">
            ClickCrystals <span className="text-blue-500">Configs</span>
          </h1>
          <p className="text-slate-400 text-base md:text-lg max-w-3xl my-4">
            ClickCrystals Configs are used to import/export and share your
            ClickCrystals module, HUD and core settings with others. Here are
            some of our configs and you can also share your config by uploading
            here!
            <br />
            Need to explore scripts?{' '}
            <Link className="text-blue-500" href="/scripts">
              Scripts Archive
            </Link>
          </p>
        </div>
      </div>
      <Configs />
    </main>
  );
}
