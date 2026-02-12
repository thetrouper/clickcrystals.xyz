'use client';

import {
  ExploreScriptsButton,
  GetClickCrystalsButton,
} from '@/components/ui/buttons/all';

export default function CCS() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Meet <span className="text-emerald-400">ClickScript</span>
        </h2>
        <p className="text-xl text-slate-300 mb-6 leading-relaxed">
          Create custom modules and macros with our intuitive scripting
          language. Use the in-game editor to build, debug, and run scripts
          instantly.
        </p>
        <p className="text-lg text-slate-400 mb-10">
          Access community scripts or create your own. Killauras, macros, and
          more—all proven to work.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <GetClickCrystalsButton name="Script Editor" link="/editor" />
          <ExploreScriptsButton />
        </div>
      </div>
    </section>
  );
}
