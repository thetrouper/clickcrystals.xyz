'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleBars, setVisibleBars] = useState(7);
  const [ready, setReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Text fades out early
  const textOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.35], [0, -20]);

  // Bars scale down from top (collapse downward)
  const barsScaleY = useTransform(scrollYProgress, [0.2, 1], [1, 0]);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const distanceFromCenter = Math.abs(position - 0.5);
    return 30 + 70 * Math.pow(distanceFromCenter * 2, 1.2);
  };

  useEffect(() => {
    const update = () => {
      const count = Math.floor(window.innerWidth / 120);
      setVisibleBars(Math.max(5, count % 2 === 0 ? count - 1 : count));
    };
    update();
    setReady(true);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      <div
        className="sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: 'rgb(5,5,5)' }}
      >
        <style>{`
          @keyframes pulseBar {
            0%   { transform: scaleY(var(--initial-scale)); }
            100% { transform: scaleY(calc(var(--initial-scale) * 0.82)); }
          }
          @keyframes barEntry {
            from { transform: scaleY(0); opacity: 0; }
            to   { transform: scaleY(var(--initial-scale)); opacity: 1; }
          }
          .hero-bar { transition: filter 0.2s ease; }
          .hero-bar:hover { filter: brightness(2); }
        `}</style>

        {/* Bars — collapse downward on scroll */}
        <motion.div
          className="absolute inset-0 z-0 overflow-hidden flex"
          style={{
            transformOrigin: 'bottom',
            scaleY: barsScaleY,
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        >
          {Array.from({ length: visibleBars }).map((_, index) => {
            const height = calculateHeight(index, visibleBars);
            return (
              <div
                key={index}
                className="hero-bar"
                style={{
                  flex: `1 0 calc(100% / ${visibleBars})`,
                  maxWidth: `calc(100% / ${visibleBars})`,
                  height: '100%',
                  background:
                    'linear-gradient(to top, rgb(37,99,235), rgb(5,5,5))',
                  transformOrigin: 'bottom',
                  animation: `barEntry 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.06}s both, pulseBar 3.5s ease-in-out 0s infinite alternate`,
                  // @ts-ignore
                  '--initial-scale': Math.round((height / 100) * 10000) / 10000,
                }}
              />
            );
          })}
        </motion.div>

        {/* Text — fades out */}
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
