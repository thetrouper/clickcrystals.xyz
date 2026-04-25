import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const FAQ = dynamic(() => import('@/components/Sections/faq/FAQ'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col lg:flex-row lg:justify-between mx-0 lg:mx-4 mt-8 gap-4">
      {[0, 1].map((col) => (
        <div key={col} className="w-full lg:w-1/2 lg:mx-4 space-y-4">
          {Array(4)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="h-16 rounded"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              />
            ))}
        </div>
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
      <main
        className="my-12 mx-6 md:mx-24"
        style={{ background: 'rgb(7,10,20)' }}
      >
        <div className="py-0">
          <div className="text-center">
            <h1 className="text-white tracking-tight leading-[1.3] font-extrabold text-3xl lg:text-5xl">
              ClickCrystals <span className="text-blue-500">FAQ</span>
            </h1>
            <div className="flex flex-row justify-center w-full">
              <p className="text-slate-400 text-lg font-normal max-w-4xl my-4">
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
