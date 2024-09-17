import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClickCrystals - Other Projects',
};

import Projects from '@/components/Sections/projects/Projects';

export default function OtherProjects() {
  return (
    <>
      <main className="my-12 mx-6 md:mx-24">
        <div className="py-0">
          <div className="text-left">
            <h1 className="text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
              Other <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-gray-500 font-normal max-w-4xl my-3">
              Here is a list of some of our, ClickCrystals&apos;s staff projects
              and our official projects.
            </p>
          </div>
        </div>
        <Projects />
      </main>
    </>
  );
}
