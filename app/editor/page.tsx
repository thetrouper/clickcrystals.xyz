import { Metadata } from 'next'
import dynamic from 'next/dynamic'

const CCSEditor = dynamic(() => import('@/components/Sections/editor/Editor'), {
  ssr: false,
})

export const metadata: Metadata = {
  title: "ClickCrystals - CCS Playground",
}

export default function EditorPage() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-[#ffffff] text-black dark:bg-[#1e1e1e] dark:text-white">
        <CCSEditor defaultCode={null} />
      </div>
    </div>
  )
}
