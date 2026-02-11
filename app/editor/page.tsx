import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Loading from './loading';

const CCSEditor = dynamic(() => import('@/components/Sections/editor/Editor'), {
  ssr: false,
  loading: () => <Loading />,
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
