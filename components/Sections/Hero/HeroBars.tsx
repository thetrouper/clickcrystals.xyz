'use client';

import { useEffect, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

function getInitialBars() {
  if (typeof window === 'undefined') return 9;
  const count = Math.floor(window.innerWidth / 120);
  return Math.max(5, count % 2 === 0 ? count - 1 : count);
}

export default function HeroBars({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [visibleBars, setVisibleBars] = useState(getInitialBars);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
    layoutEffect: false,
  });

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
    let timer: ReturnType<typeof setTimeout>;
    const debounced = () => {
      clearTimeout(timer);
      timer = setTimeout(update, 200);
    };
    window.addEventListener('resize', debounced);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', debounced);
    };
  }, []);

  const center = Math.floor(visibleBars / 2);
  const entryDuration = 0.55;
  const maxStagger = center * 0.05;
  const pulseDelay = entryDuration + maxStagger + 0.1;

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden flex"
      suppressHydrationWarning
      style={{
        transformOrigin: 'bottom',
        scaleY: barsScaleY,
        willChange: 'transform',
      }}
    >
      {Array.from({ length: visibleBars }).map((_, index) => {
        const height = calculateHeight(index, visibleBars);
        const distFromCenter = Math.abs(index - center);
        const stagger = distFromCenter * 0.05;
        return (
          <div
            key={index}
            className="hero-bar"
            style={{
              flex: `1 0 calc(100% / ${visibleBars})`,
              maxWidth: `calc(100% / ${visibleBars} + 1px)`,
              height: '100%',
              background:
                'linear-gradient(to top, rgb(37,99,235), rgb(7,10,20))',
              transformOrigin: 'bottom',
              willChange: 'transform',
              animation: `barEntry ${entryDuration}s cubic-bezier(0.16, 1, 0.3, 1) ${stagger}s both, pulseBar 3.5s ease-in-out ${pulseDelay + stagger * 0.5}s infinite alternate`,
              // @ts-ignore
              '--initial-scale': Math.round((height / 100) * 10000) / 10000,
            }}
          />
        );
      })}
    </motion.div>
  );
}
