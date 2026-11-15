import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClickCrystals - Help',
};

import FAQ from '@/components/Sections/faq/FAQ';

export default function Help() {
  return (
    <>
      <main className="my-12 mx-6 md:mx-24 text-[#F4F8FF]">
        <div className="py-0">
          <div className="text-center">
            <h1 className="text-[#F4F8FF] tracking-tight leading-[1.3] font-extrabold text-3xl lg:text-4xl">
              ClickCrystals <span className="text-[#61ADEC]">FAQ</span>
            </h1>
            <div className="flex flex-row justify-center w-full">
              <p className="text-[#F4F8FF]/70 font-normal max-w-4xl my-3">
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
