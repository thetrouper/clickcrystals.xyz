'use client';

import { motion } from 'framer-motion';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center py-12 md:py-16 px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)] -z-10" />

      <motion.div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-[60%]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)] blur-3xl" />
        <img
          src="/textures/custom/player.png"
          alt="Crystal PvP"
          className="h-[450px] w-auto relative z-10"
        />
      </motion.div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="lg:pr-64">
            <motion.div
              className="hidden md:inline-block px-5 py-2.5 mb-8 text-sm font-medium text-blue-400/80 bg-blue-400/5 rounded-full border border-blue-400/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Free & Open Source
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Crystal PvP Mod
              <br />
              <span className="text-slate-400">for Minecraft</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-slate-300 mb-8 md:mb-12 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              80+ modules, custom scripting engine, and precision hotkeys —
              everything you need to dominate Crystal PvP.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GetClickCrystalsButton />
              <JoinDiscordButton />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
