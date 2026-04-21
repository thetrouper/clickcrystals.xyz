'use client';

import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { getTotalDownloads } from '@/lib/getDownloads';
import { useEffect, useState } from 'react';

export default function Progress() {
  const [downloads, setDownloads] = useState<number | null>(null);

  const progress = [
    { metric: 'Downloads', value: downloads },
    { metric: 'Staff Members', value: 20 },
    { metric: 'Years Active', value: 2 },
  ];

  useEffect(() => {
    getTotalDownloads().then(setDownloads);
  }, []);

  return (
    <section
      className="relative py-16 md:py-28"
      style={{ background: 'rgb(7,10,20)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent)',
        }}
      />
      <div className="max-w-7xl mx-auto px-8">
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
                {item.value === null ? (
                  <span className="text-slate-600">—</span>
                ) : (
                  <>
                    <CountUp
                      start={0}
                      end={item.value}
                      duration={2.5}
                      separator=","
                    />
                    <span className="text-blue-400">+</span>
                  </>
                )}
              </div>
              <p className="text-slate-300 text-base uppercase tracking-wider">
                {item.metric}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
