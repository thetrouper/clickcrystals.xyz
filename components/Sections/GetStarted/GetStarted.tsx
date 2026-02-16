'use client';

import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function GetStarted() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-800/50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
          Ready to Get Started?
        </h2>
        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          Join thousands of players dominating Crystal PvP.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
          <GetClickCrystalsButton />
          <JoinDiscordButton />
        </div>
      </div>
    </section>
  );
}
