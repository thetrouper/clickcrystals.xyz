import { Metadata } from 'next';

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'ClickCrystals - Other Projects',
};

import Projects from '@/components/Sections/projects/Projects';

export default function OtherProjects() {
  return (
    <main className="my-12 mx-6 md:mx-24">
      <div className="mb-10">
        <h1 className="text-white tracking-tight leading-[1.3] font-bold text-2xl md:text-3xl lg:text-4xl">
          Other <span className="text-blue-500">Projects</span>
        </h1>
        <p className="text-slate-400 font-normal max-w-4xl mt-3">
          Here is a list of some of our, ClickCrystals&apos;s staff projects and
          our official projects.
        </p>
        <div className="flex items-center gap-3 mt-2">
          <p className="text-slate-500 text-sm">3 authors</p>
          <div className="flex -space-x-2">
            <Image
              src="https://github.com/itzispyder.png"
              alt="ImproperIssues"
              width={24}
              height={24}
              className="rounded-full ring-2 ring-slate-900 bg-slate-800"
            />
            <Image
              src="https://github.com/thetrouper.png"
              alt="TheTrouper"
              width={24}
              height={24}
              className="rounded-full ring-2 ring-slate-900 bg-slate-800"
            />
            <Image
              src="https://github.com/I-No-oNe.png"
              alt="I-No-oNe"
              width={24}
              height={24}
              className="rounded-full ring-2 ring-slate-900 bg-slate-800"
            />
          </div>
        </div>
      </div>
      <Projects />
    </main>
  );
}
