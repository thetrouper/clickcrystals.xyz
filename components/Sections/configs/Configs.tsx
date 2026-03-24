'use client';

import { useEffect, useState } from 'react';
import ConfigsGrid from './ConfigsGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import SkeletonCard from './SkeletonCard';

export default function Configs() {
  const [configs, setConfigs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/configs')
      .then((res) => res.json())
      .then((data) => {
        setConfigs(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="mt-8">
        <div className="flex gap-4 mb-4 animate-pulse">
          <div className="h-10 bg-slate-800/50 rounded w-[200px] md:w-[280px]" />
          <div className="h-10 bg-slate-800/50 rounded flex-1" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Array(6)
            .fill(null)
            .map((_, i) => (
              <SkeletonCard key={i} />
            ))}
        </div>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col text-center py-16 gap-3">
        <FontAwesomeIcon
          icon={faXmarkCircle}
          className="size-8 text-red-500 mx-auto"
        />
        <h2 className="text-2xl font-semibold text-gray-600 tracking-tight">
          Failed to load configs
        </h2>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Something went wrong while loading configs. Please try again later or
          contact us on Discord.
        </p>
      </div>
    );
  return <ConfigsGrid configs={configs} />;
}
