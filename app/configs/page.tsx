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
      <main className="my-12 mx-6 md:mx-24">
        <div className="py-0">
          <div className="text-left">
            <h1 className="text-white tracking-tight font-bold text-3xl md:text-4xl lg:text-5xl">
              ClickCrystals{' '}
              <span className="text-blue-500">Configs Explorer</span>
            </h1>
            <p className="text-slate-400 text-base md:text-lg max-w-3xl my-4">
              ClickCrystals Configs are used to import/export and share your
              ClickCrystals module, HUD and core settings with others. Here are
              some of our configs and you can also share your config by
              uploading here!
              <br />
              Need to explore scripts?{' '}
              <Link className="text-blue-500" href="/scripts">
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
