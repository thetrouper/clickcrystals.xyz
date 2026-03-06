import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const CCSEditor = dynamic(() => import('@/components/Sections/editor/Editor'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'ClickCrystals - CCS Playground',
};

export default function EditorPage() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-950 text-white">
        <CCSEditor defaultCode={null} />
      </div>
    </div>
  );
}
