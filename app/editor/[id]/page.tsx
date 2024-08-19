import dynamic from 'next/dynamic'

const CCSEditor = dynamic(() => import('@/components/Sections/editor/Editor'), {
  ssr: false,
})

const EditorPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className="dark">
      <div className="min-h-screen bg-[#ffffff] text-black dark:bg-[#1e1e1e] dark:text-white">
        <CCSEditor codeId={params.id} />
      </div>
    </div>
  )
}

export default EditorPage;