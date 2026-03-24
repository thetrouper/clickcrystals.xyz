import { redirect } from 'next/navigation';
import { getLatestLink } from '@/lib/getLatest';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClickCrystals - Download',
};

export default async function Get() {
  const link = await getLatestLink();

  if (link) {
    redirect(link);
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <Image
          src="/textures/diamond.png"
          alt=""
          width={64}
          height={64}
          className="mx-auto mb-6 opacity-80"
          style={{ imageRendering: 'pixelated' }}
        />
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
          Instant Download
        </h1>
        <p className="text-base text-slate-400 mb-8 max-w-sm mx-auto">
          Could not fetch the latest release automatically. Download directly
          from GitHub instead.
        </p>
        <Link
          href="https://github.com/clickcrystals-development/ClickCrystals/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-base border border-blue-700 shadow-[inset_0_1px_0_0_rgba(96,165,250,0.3)]"
        >
          Download Latest
        </Link>
      </div>
    </main>
  );
}
