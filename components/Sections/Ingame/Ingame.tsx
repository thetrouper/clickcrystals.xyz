'use client';

import Image from 'next/image';
import cc from '@/public/cc-home.png';
import {
  GetClickCrystalsButton,
  MoreScreenshotsButton,
} from '@/components/ui/buttons/all';

export default function Ingame() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <Image
            src={cc}
            alt="ClickCrystals Client Menu"
            className="rounded-lg w-full"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        </div>

        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything You Need, <span className="text-blue-400">Built-In</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Modules, scripting IDE, configs, renders, capes, and more. Try it
            once and you will wonder how you played without it.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <GetClickCrystalsButton />
            <MoreScreenshotsButton />
          </div>
        </div>
      </div>
    </section>
  );
}
