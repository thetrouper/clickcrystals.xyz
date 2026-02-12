'use client';

import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function GetStarted() {
  return (
    <section className="py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-slate-400 mb-8">
          Download ClickCrystals and join the community.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <GetClickCrystalsButton />
          <JoinDiscordButton />
        </div>
      </div>
    </section>
  );
}
