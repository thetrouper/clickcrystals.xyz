import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('@/components/Sections/gallery/Gallery'), {
  ssr: false,
  loading: () => (
    <div
      className="max-w-5xl mx-auto h-[500px] rounded-xl mb-10"
      style={{ background: 'rgba(255,255,255,0.03)' }}
    />
  ),
});

export const metadata: Metadata = {
  title: 'ClickCrystals - Preview',
};

export default function GalleryPage() {
  return (
    <main
      className="py-12 md:py-24 px-4 md:px-8"
      style={{ background: 'rgb(7,10,20)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            ClickCrystals <span className="text-blue-500">Preview</span>
          </h1>
        </div>
        <Gallery />
      </div>
    </main>
  );
}
