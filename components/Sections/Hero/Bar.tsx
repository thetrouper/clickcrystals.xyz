'use client';

import { motion, useTransform } from 'framer-motion';

export function Bar({
  baseHeight,
  index,
  scrollYProgress,
}: {
  baseHeight: number;
  index: number;
  scrollYProgress: any;
}) {
  const scaleY = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <motion.div
      style={{ flex: '1', height: '100%', scaleY, transformOrigin: 'bottom' }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgb(37,99,235), transparent)',
          transformOrigin: 'bottom',
          animation: `pulseBar 2s ease-in-out infinite alternate`,
          animationDelay: `${index * 0.1}s`,
          // @ts-ignore
          '--base': baseHeight / 100,
        }}
      />
    </motion.div>
  );
}
