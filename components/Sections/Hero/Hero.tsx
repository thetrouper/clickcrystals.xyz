'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

const HeroBars = dynamic(() => import('./HeroBars'), { ssr: false });

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -20]);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: 'rgb(7,10,20)' }}
      >
        <HeroBars containerRef={containerRef} />

        <motion.div
          className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4"
          style={{ opacity: textOpacity, y: textY }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Crystal PvP Mod
            <br />
            <span className="text-slate-400">for Minecraft</span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 mb-10 max-w-xl mx-auto">
            100+ modules, custom scripting engine, and precision hotkeys —
            everything you need to dominate Crystal PvP.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <GetClickCrystalsButton />
            <JoinDiscordButton />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
