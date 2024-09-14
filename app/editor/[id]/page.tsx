import { loadCode } from '@/lib/scripts';
import { Metadata } from 'next';
import dynamic from 'next/dynamic'
import { redirect } from 'next/navigation';

const CCSEditor = dynamic(() => import('@/components/Sections/editor/Editor'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: "ClickCrystals - CCS Playground",
}

const EditorPage = async ({ params }: { params: { id: string } }) => {
  try {
    const query = await loadCode(params.id);

    if (query.success) {
      return (
        <div className="dark">
          <div className="min-h-screen bg-[#ffffff] text-black dark:bg-[#1e1e1e] dark:text-white">
            <CCSEditor defaultCode={query.code} />
          </div>
        </div>
      )
    } else {
      return redirect("/editor?error=not_found")
    }
  } catch (error: any) {
    return redirect("/editor?error=not_found")
  }
}

export default EditorPage;
