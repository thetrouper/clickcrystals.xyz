import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('@/components/Sections/faq/FAQ'), {
  ssr: false,
  loading: () => (
    <div className="max-w-3xl mx-auto space-y-4 mt-8">
      {Array(8).fill(null).map((_, i) => (
        <div key={i} className="h-16 bg-slate-800/50 rounded animate-pulse" />
      ))}
    </div>
  ),
});

export const metadata: Metadata = {
  title: 'ClickCrystals - Help',
};


export default function Help() {
  return (
    <>
      <main className="my-12 mx-6 md:mx-24">
        <div className="py-0">
          <div className="text-center">
            <h1 className="text-white tracking-tight leading-[1.3] font-bold text-3xl lg:text-4xl">
              ClickCrystals <span className="text-blue-500">FAQ</span>
            </h1>
            <div className="flex flex-row justify-center w-full">
              <p className="text-slate-400 font-normal max-w-4xl my-3">
                Have some questions with ClickCrystals? Read out our FAQs here.
                Still have a question that is not here? Join our discord server
                and mention a support staff with your question and they&apos;ll
                get your answer solved on the way!
              </p>
            </div>
          </div>
        </div>
        <FAQ />
      </main>
    </>
  );
}
