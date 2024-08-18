import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: "ClickCrystals - Editor",
}

const CCSEditor = dynamic(() => import('@/components/Sections/editor/Editor'), {
  ssr: false,
})

export default function EditorPage() {
  return (
    <div className="dark">
      <div className="min-h-screen bg-[#ffffff] text-black dark:bg-[#1e1e1e] dark:text-white">
        <CCSEditor />
      </div>
    </div >
  )
}