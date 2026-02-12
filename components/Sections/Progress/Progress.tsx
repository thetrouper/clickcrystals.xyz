'use client';

import CountUp from 'react-countup';
import { getTotalDownloads } from '@/lib/getDownloads';
import { useEffect, useState } from 'react';

export default function Progress() {
  const [downloads, setDownloads] = useState(0);

  const progress = [
    {
      metric: 'Downloads',
      value: downloads,
    },
    {
      metric: 'Staff Members',
      value: 20,
    },
    {
      metric: 'Years Active',
      value: 2,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const totalDownloads = await getTotalDownloads();
      setDownloads(totalDownloads);
    };

    fetchData();
  }, []);

  return (
    <section className="py-24 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {progress.map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-white mb-3">
                <CountUp
                  start={0}
                  end={item.value}
                  duration={2.5}
                  separator=","
                />
                +
              </div>
              <p className="text-slate-400 text-sm uppercase tracking-wide">
                {item.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
