'use client';

import { useEffect, useState } from 'react';
import ConfigsGrid from './ConfigsGrid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';

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

  if (loading) return <ConfigsGrid configs={[]} />;
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
