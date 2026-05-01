'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import dynamic from 'next/dynamic';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

const HeroBars = dynamic(() => import('./HeroBars'), { ssr: false });

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -20]);

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: 'rgb(7,10,20)' }}
      >
        <HeroBars containerRef={containerRef} />

        <motion.div
          className="relative z-[2] h-full flex flex-col items-center justify-center text-center px-4"
          style={{
            opacity: textOpacity,
            y: textY,
            willChange: 'opacity, transform',
          }}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="flex flex-col items-center"
          >
            <motion.h1
              variants={fadeUp}
              className="font-bold text-white mb-6 leading-tight"
              style={{ fontSize: 'clamp(2.25rem, 7vw + 1rem, 5rem)' }}
            >
              Crystal PvP Mod
              <br />
              <span className="text-slate-400">for Minecraft</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-slate-300 mb-10 max-w-xl mx-auto"
            >
              100+ modules, custom scripting engine, and precision hotkeys —
              everything you need to dominate Crystal PvP.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <GetClickCrystalsButton />
              <JoinDiscordButton />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
