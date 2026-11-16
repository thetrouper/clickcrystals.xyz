'use client';

import { Container } from '@/components/ui/Container';
import Link from 'next/link';

export default function GetStarted() {
  return (
    <section className="py-12 flex items-center bg-[radial-gradient(ellipse_150%_100%_at_bottom_right,#12366A,#0D1830_100%)]">
      <div className="py-6 px-4 flex flex-row justify-center w-full">
        <div className="px-0 md:px-6">
          <h1 className="text-center text-[#F4F8FF] tracking-tight leading-[1.3] font-extrabold text-3xl md:text-4xl lg:text-5xl my-6">
            You're <span className="text-[#61ADEC]">3</span> clicks away from{' '}
            <span className="text-[#61ADEC]">success</span>.{' '}
            <br className="max-sm:hidden" />
            It's free, It's here. <br className="md:hidden" />
            Get{' '}
            <span className="relative">
              <span className="italic bg-gradient-to-br from-[#61ADEC] to-[#276CB0] bg-clip-text text-transparent">
                ClickCrystals
              </span>{' '}
              <span
                className="-z-10 pointer-events-none select-none absolute right-1 italic bg-gradient-to-br from-[#276CB0]/30 to-[#276CB0]/30 bg-clip-text text-transparent"
                aria-hidden="true"
              >
                ClickCrystals
              </span>{' '}
              <span
                className="-z-20 pointer-events-none select-none absolute right-2 italic bg-gradient-to-br from-[#61ADEC]/25 to-[#276CB0]/25 bg-clip-text text-transparent"
                aria-hidden="true"
              >
                ClickCrystals
              </span>{' '}
              <span
                className="-z-30 pointer-events-none select-none absolute right-3 italic bg-gradient-to-br from-[#276CB0]/10 to-[#276CB0]/10 bg-clip-text text-transparent"
                aria-hidden="true"
              >
                ClickCrystals
              </span>
            </span>
            .
          </h1>
          <div className="w-full flex flex-row justify-center">
            <p className="text-[#F4F8FF]/70 font-normal m-0 text-center max-w-3xl">
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
                className="bg-[#276CB0]/20 hover:bg-[#276CB0]/40 text-[#F4F8FF] font-semibold px-6 py-2.5 rounded-lg text-sm transition-colors duration-150"
              >
                Get ClickCrystals!
              </Link>
            </Container>
          </div>
        </div>
      </div>
    </section>
  );
}
