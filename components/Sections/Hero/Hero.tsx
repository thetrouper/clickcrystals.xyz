'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function Hero() {
  const collapseRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visibleBars, setVisibleBars] = useState(7);

  const { scrollYProgress } = useScroll();

  // Text fades later — more reading time
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0.05, 0.2], [0, -40]);

  const calculateHeight = (index: number, total: number) => {
    const position = index / (total - 1);
    const maxHeight = 100;
    const minHeight = 30;
    const center = 0.5;
    const distanceFromCenter = Math.abs(position - center);
    const heightPercentage = Math.pow(distanceFromCenter * 2, 1.2);
    return minHeight + (maxHeight - minHeight) * heightPercentage;
  };

  useEffect(() => {
    const update = () => {
      const count = Math.floor(window.innerWidth / 120);
      setVisibleBars(Math.max(5, count % 2 === 0 ? count - 1 : count));
    };
    update();
    window.addEventListener('resize', update);
    setReady(true);

    // Lerped collapse with opacity fade
    let currentScale = 1;
    let currentOpacity = 1;
    let rafId: number;

    const tick = () => {
      const v = scrollYProgress.get();
      const divisor = window.innerWidth < 640 ? 0.4 : 0.4;
      const targetScale = Math.max(0, 1 - v / divisor);
      const targetOpacity = Math.max(0, 1 - (v / divisor) * 1.4);

      // Lerp both scale and opacity
      currentScale += (targetScale - currentScale) * 0.08;
      currentOpacity += (targetOpacity - currentOpacity) * 0.08;

      if (collapseRef.current) {
        collapseRef.current.style.transform = `scaleY(${currentScale})`;
        collapseRef.current.style.opacity = String(currentOpacity);
      }

      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', update);
      cancelAnimationFrame(rafId);
    };
  }, [scrollYProgress]);

  return (
    <div className="relative h-[250vh] md:h-[200vh]">
      <div
        className="relative sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: 'rgb(5,5,5)' }}
      >
        <style>{`
          @keyframes pulseBar {
            0% { transform: scaleY(var(--initial-scale)); }
            100% { transform: scaleY(calc(var(--initial-scale) * 0.82)); }
          }
          @keyframes barEntry {
            from { transform: scaleY(0); opacity: 0; }
            to   { transform: scaleY(var(--initial-scale)); opacity: 1; }
          }
          .hero-bar {
            transition: filter 0.2s ease;
          }
          .hero-bar:hover {
            filter: brightness(2);
          }
        `}</style>

        <div
          ref={collapseRef}
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            transformOrigin: 'bottom',
            transform: 'scaleY(1)',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.3s',
            willChange: 'transform',
          }}
        >
          <div
            className="flex h-full"
            style={{
              width: '100%',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
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
                    outline: '1px solid rgba(0, 0, 0, 0)',
                    boxSizing: 'border-box',
                    // Entry animation runs once, then pulse takes over
                    animation: `barEntry 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.06}s both, pulseBar 3.5s ease-in-out 0s infinite alternate`,
                    // @ts-ignore
                    '--initial-scale':
                      Math.round((height / 100) * 10000) / 10000,
                  }}
                />
              );
            })}
          </div>
        </div>

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
