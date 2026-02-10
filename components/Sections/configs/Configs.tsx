'use client';

import { useEffect, useState } from 'react';
import ConfigsGrid from './ConfigsGrid';

export default function Configs() {
  const [configs, setConfigs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/configs')
      .then(res => res.json())
      .then(data => {
        setConfigs(data);
        setLoading(false);
      })
      .catch(() => {
        setConfigs([]);
        setLoading(false);
      });
  }, []);

  if (loading) return <ConfigsGrid configs={[]} />;
  return <ConfigsGrid configs={configs} />;
}
