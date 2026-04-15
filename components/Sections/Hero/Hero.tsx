'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

const numBars = 13;

const calculateHeight = (index: number, total: number) => {
  const position = index / (total - 1);
  const distanceFromCenter = Math.abs(position - 0.5);
  return (
    Math.round((30 + 70 * Math.pow(distanceFromCenter * 2, 1.2)) * 10000) /
    10000
  );
};

export default function Hero() {
  const collapseRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [visibleBars, setVisibleBars] = useState(numBars);

  const { scrollYProgress } = useScroll();

  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

  useEffect(() => {
    const update = () => {
      const count = Math.floor(window.innerWidth / 120);
      // keep it odd so arch is symmetric
      setVisibleBars(count % 2 === 0 ? count - 1 : count);
    };
    update();
    window.addEventListener('resize', update);
    setReady(true);
    const unsub = scrollYProgress.on('change', (v: number) => {
      if (collapseRef.current) {
        const scale = Math.max(0, 1 - v / 0.4);
        collapseRef.current.style.transform = `scaleY(${scale})`;
        // pause animation while scrolling to prevent set behaviour
        collapseRef.current
          .querySelectorAll<HTMLElement>('.hero-bar')
          .forEach((el) => {
            el.style.animationPlayState = 'paused';
          });
        clearTimeout((collapseRef.current as any)._resumeTimer);
        (collapseRef.current as any)._resumeTimer = setTimeout(() => {
          collapseRef.current
            ?.querySelectorAll<HTMLElement>('.hero-bar')
            .forEach((el) => {
              el.style.animationPlayState = 'running';
            });
        }, 150);
      }
    });
    return () => {
      window.removeEventListener('resize', update);
      unsub();
    };
  }, [scrollYProgress]);

  return (
    <div className="relative h-[200vh]">
      <div
        className="relative sticky top-0 h-screen overflow-hidden"
        style={{ backgroundColor: 'rgb(5,5,5)' }}
      >
        <style>{`
          @keyframes pulseBar {
            0% { transform: scaleY(var(--initial-scale)); }
            100% { transform: scaleY(calc(var(--initial-scale) * 0.75)); }
          }
        `}</style>

        {/* Collapse wrapper */}
        <div
          ref={collapseRef}
          className="absolute inset-0 z-0 overflow-hidden"
          style={{
            transformOrigin: 'bottom',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        >
          <div
            className="flex h-full"
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              width: '100%',
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
                    transform: `scaleY(${height / 100})`,
                    transformOrigin: 'bottom',
                    transition: 'none',
                    animation: `pulseBar 2s ease-in-out infinite alternate`,
                    animationDelay: `${(index / visibleBars) * 2}s`,
                    boxSizing: 'border-box',
                    // @ts-ignore
                    '--initial-scale': height / 100,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Content */}
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
