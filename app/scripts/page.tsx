import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import SkeletonCard from '@/components/Sections/scripts/SkeletonCard';

const Scripts = dynamic(() => import('@/components/Sections/scripts/Scripts'), {
  ssr: false,
  loading: () => (
    <div>
      <div className="flex gap-4 mb-4">
        <div
          className="h-10 rounded w-[200px] md:w-[280px]"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        />
        <div
          className="h-10 rounded flex-1"
          style={{ background: 'rgba(255,255,255,0.04)' }}
        />
      </div>
      <div
        className="h-5 w-32 rounded mb-3"
        style={{ background: 'rgba(255,255,255,0.04)' }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array(12)
          .fill(null)
          .map((_, i) => (
            <SkeletonCard key={i} />
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
      <main
        className="my-12 mx-6 md:mx-24"
        style={{ background: 'rgb(7,10,20)' }}
      >
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
