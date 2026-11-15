import { NextAuthProvider } from '@/lib/provider';
import Configs from '@/components/Sections/configs/Configs';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ClickCrystals - Configs Explorer',
};

export default function ScriptsArchive() {
  return (
    <NextAuthProvider>
      <main className="my-12 mx-6 md:mx-24 text-[#F4F8FF]">
        <div className="py-0">
          <div className="text-left">
            <h1 className="text-[#F4F8FF] tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
              ClickCrystals{' '}
              <span className="text-[#61ADEC]">Configs Explorer</span>
            </h1>
            <p className="text-[#F4F8FF]/70 font-normal max-w-4xl mt-3 mb-6">
              ClickCrystals Configs are used to import/export and share your
              ClickCrystals module, HUD and core settings with others. Here are
              some of our configs and you can also share your config by
              uploading here!
              <br />
              Need to explore scripts?{' '}
              <Link className="text-[#61ADEC]" href="/scripts">
                Scripts Archive
              </Link>
            </p>
          </div>
        </div>
        <Configs />
      </main>
    </NextAuthProvider>
  );
}
