import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('@/components/Sections/gallery/Gallery'), {
  ssr: false,
  loading: () => (
    <main className="mx-8 my-12 md:mx-24">
      <h1 className="text-center text-white tracking-tight leading-[1.3] mb-8 font-bold text-2xl md:text-3xl lg:text-4xl">
        ClickCrystals <span className="text-blue-500">Gallery</span>
      </h1>
      <div className="max-w-[1000px] mx-auto h-[500px] bg-slate-800/50 rounded-3xl animate-pulse mb-4" />
      <div className="flex flex-row justify-center mb-4">
        <p className="text-sm text-slate-400 font-medium mt-4 text-center">
          Swipe left or right to change slides.
        </p>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <div className="h-12 w-48 bg-slate-800/50 rounded animate-pulse" />
        <div className="h-12 w-48 bg-slate-800/50 rounded animate-pulse" />
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
