import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('@/components/Sections/gallery/Gallery'), {
  ssr: false,
  loading: () => (
    <main className="py-12 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            ClickCrystals <span className="text-blue-400">Gallery</span>
          </h1>
        </div>
        <div className="max-w-5xl mx-auto h-[500px] bg-slate-800/50 rounded-xl animate-pulse mb-10" />
        <div className="flex flex-row gap-4 justify-center">
          <div className="h-12 w-48 bg-slate-800/50 rounded-xl animate-pulse" />
          <div className="h-12 w-48 bg-slate-800/50 rounded-xl animate-pulse" />
        </div>
      </div>
    </main>
  ),
});

export const metadata: Metadata = {
  title: 'ClickCrystals - Gallery',
};

export default function GalleryPage() {
  return <Gallery />;
}
