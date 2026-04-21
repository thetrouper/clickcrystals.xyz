'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const items = [
  { metric: 'Staff Members', value: 20 },
  { metric: 'Years Active', value: 2 },
];

export default function ProgressClient({ downloads }: { downloads: number }) {
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
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="text-3xl md:text-5xl font-bold text-white mb-2">
            <CountUp start={0} end={item.value} duration={2.5} separator="," />
            <span className="text-blue-400">+</span>
          </div>
          <p className="text-slate-300 text-base uppercase tracking-wider">
            {item.metric}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
