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
      <CCSEditor defaultCode={null} />
    </div>
  );
}
