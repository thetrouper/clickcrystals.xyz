'use client';

import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_60%)] blur-2xl scale-110" />
        <img
          src="/textures/custom/player.png"
          alt="Crystal PvP"
          className="h-[500px] w-auto relative z-10"
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="max-w-4xl lg:pr-64">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20">
              Free & Open Source
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Crystal PvP Mod
              <br />
              <span className="text-slate-400">for Minecraft</span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              80+ modules, custom scripting, and precision hotkeys. Everything
              you need to dominate Crystal PvP.
            </p>

            <div className="flex flex-wrap gap-4">
              <GetClickCrystalsButton />
              <JoinDiscordButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
