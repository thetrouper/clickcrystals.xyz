'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <section className="py-12 flex items-center">
      <div className="py-6 px-4 flex flex-row justify-center w-full">
        <div className="px-0 md:px-6">
          <h1 className="text-center text-gray-600 tracking-tight leading-[1.3] font-extrabold text-3xl md:text-4xl lg:text-5xl my-6">
            You're <span className="text-blue-500">3</span> clicks away from{' '}
            <span className="text-blue-500">success</span>.{' '}
            <br className="max-sm:hidden" />
            It's free, It's here. <br className="md:hidden" />
            Get{' '}
            <span className="relative">
              <span className="italic bg-gradient-to-br from-blue-400 to-blue-500 bg-clip-text text-transparent">
                ClickCrystals
              </span>{' '}
              <span
                className="-z-10 pointer-events-none select-none absolute right-1 italic bg-gradient-to-br from-blue-500/30 to-blue-500/30 bg-clip-text text-transparent"
                aria-hidden="true"
              >
                ClickCrystals
              </span>{' '}
              <span
                className="-z-20 pointer-events-none select-none absolute right-2 italic bg-gradient-to-br from-blue-50/25 to-blue-500/25 bg-clip-text text-transparent"
                aria-hidden="true"
              >
                ClickCrystals
              </span>{' '}
              <span
                className="-z-30 pointer-events-none select-none absolute right-3 italic bg-gradient-to-br from-blue-500/10 to-blue-500/10 bg-clip-text text-transparent"
                aria-hidden="true"
              >
                ClickCrystals
              </span>
            </span>
            .
          </h1>
          <div className="w-full flex flex-row justify-center">
            <p className="text-gray-500 font-normal m-0 text-center max-w-3xl">
              With built-in modules, ClickScript, and an online library for easy
              script downloads, ClickCrystals offers comprehensive customization
              options. Join our thriving community today. Experience high level
              gameplay with the ultimate Minecraft mod.
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center my-4">
            <Container tapScale={0.95}>
              <Link
                href="/download"
                className="ring-[#737679] btn border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white font-semibold px-6 px-5.5 py-2.5 shadow-none text-sm"
              >
                Get ClickCrystals!
              </Link>
            </Container>
            <Container tapScale={0.95}>
              <Link
                href="https://discord.gg/zg3ge9VTgr"
                className="ring-[#4287f5] btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] font-semibold px-6 px-5.5 py-2.5 shadow-none text-white text-sm"
              >
                Join us now!
              </Link>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
