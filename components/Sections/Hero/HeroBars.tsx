'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function HeroBars({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const [visibleBars, setVisibleBars] = useState(0);
  const [ready, setReady] = useState(false);

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
      const isMobile = window.innerWidth < 640;
      const divisor = isMobile ? 80 : 120;
      const count = Math.floor(window.innerWidth / divisor);
      setVisibleBars(Math.max(5, count % 2 === 0 ? count - 1 : count));
    };
    update();
    setReady(true);
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

  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden flex"
      style={{
        transformOrigin: 'bottom',
        scaleY: barsScaleY,
        opacity: ready ? 1 : 0,
        transition: 'opacity 0.3s',
        willChange: 'transform',
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
              maxWidth: `calc(100% / ${visibleBars} + 1px)`,
              height: '100%',
              background:
                'linear-gradient(to top, rgb(37,99,235), rgb(7,10,20))',
              transformOrigin: 'bottom',
              willChange: 'transform',
              animation: `barEntry 0.6s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.04}s both, pulseBar 3.5s ease-in-out 0s infinite alternate`,
              // @ts-ignore
              '--initial-scale': Math.round((height / 100) * 10000) / 10000,
            }}
          />
        );
      })}
    </motion.div>
  );
}
