import dynamic from 'next/dynamic'

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