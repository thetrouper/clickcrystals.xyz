'use client';

import { motion } from 'framer-motion';
import { memo, useEffect, useRef, useState } from 'react';

function useCountUp(end: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startVal = Math.floor(end * 0.85);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setCount(Math.floor(startVal + p * (end - startVal)));
            if (p < 1) requestAnimationFrame(tick);
            else setCount(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return { count, ref };
}

const items = [
  { metric: 'Staff Members', value: 20 },
  { metric: 'Years Active', value: 2 },
];

const ProgressClient = memo(function ProgressClient({
  downloads,
}: {
  downloads: number;
}) {
  const progress = [{ metric: 'Downloads', value: downloads }, ...items];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      {progress.map((item, index) => (
        <motion.div
          key={index}
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <CountItem value={item.value} />
          <p className="text-slate-300 text-base uppercase tracking-wider">
            {item.metric}
          </p>
        </motion.div>
      ))}
    </div>
  );
});

function CountItem({ value }: { value: number }) {
  const { count, ref } = useCountUp(value, 1800);
  return (
    <div ref={ref} className="text-3xl md:text-5xl font-bold text-white mb-2">
      {count.toLocaleString()}
      <span className="text-blue-400">+</span>
    </div>
  );
}

export default ProgressClient;
