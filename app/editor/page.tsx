import dynamic from 'next/dynamic'

const CCSEditor = dynamic(() => import('@/components/Sections/editor/Editor'), {
  ssr: false,
})

export default function EditorPage() {
  return (
    <>
      <CCSEditor />
    </>
  )
}