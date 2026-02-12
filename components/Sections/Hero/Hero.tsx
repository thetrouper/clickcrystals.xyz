'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function Hero() {
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      left: number;
      top: number;
      duration: number;
      delay: number;
    }>
  >([]);

  useEffect(() => {
    setParticles(
      [...Array(20)].map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 3 + Math.random() * 2,
        delay: Math.random() * 2,
      })),
    );
  }, []);
  return (
    <section className="min-h-screen flex items-center py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />

      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}

      <motion.div
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.2),transparent_60%)] blur-2xl scale-110" />
        <img
          src="/textures/custom/player.png"
          alt="Crystal PvP"
          className="h-[500px] w-auto relative z-10"
        />
      </motion.div>

      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="max-w-4xl lg:pr-64">
            <motion.div
              className="inline-block px-4 py-1.5 mb-8 text-xs sm:text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full border border-blue-400/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Free & Open Source
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Crystal PvP Mod
              <br />
              <span className="text-slate-400">for Minecraft</span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-slate-300 mb-10 sm:mb-12 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              80+ modules, custom scripting, and precision hotkeys. Everything
              you need to dominate Crystal PvP.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
