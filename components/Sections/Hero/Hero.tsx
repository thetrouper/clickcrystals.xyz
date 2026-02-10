'use client';

import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
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

          <div className="hidden lg:flex justify-center">
            <img
              src="/textures/custom/player.png"
              alt="Crystal PvP"
              className="h-[450px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
