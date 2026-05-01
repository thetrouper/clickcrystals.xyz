'use client';

interface DownloadState {
  github: string | number | JSX.Element;
  modrinth: string | number | JSX.Element;
  planetMC: string | number | JSX.Element;
  curseforge: string | number | JSX.Element;
  total: string | number | JSX.Element;
}

import {
  getCurseForgeDownloads,
  getGitHubDownloads,
  getModrinthDownloads,
  getPlanetMCDownloads,
} from '@/lib/getDownloads';
import { parseNumber } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const platforms = [
  { key: 'curseforge', label: 'CurseForge', color: 'rgba(249,115,22,0.8)' },
  { key: 'modrinth', label: 'Modrinth', color: 'rgba(34,197,94,0.8)' },
  { key: 'github', label: 'GitHub', color: 'rgba(148,163,184,0.8)' },
  { key: 'planetmc', label: 'PlanetMC', color: 'rgba(99,102,241,0.8)' },
];

export default function Downloads() {
  const [nums, setNums] = useState<Record<string, number>>({
    curseforge: 0,
    modrinth: 0,
    github: 0,
    planetmc: 0,
  });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      getCurseForgeDownloads(),
      getModrinthDownloads(),
      getGitHubDownloads(),
      getPlanetMCDownloads(),
    ]).then(([cf, mo, gh, pm]) => {
      setNums({ curseforge: cf, modrinth: mo, github: gh, planetmc: pm });
      setLoaded(true);
    });
  }, []);

  const total = Object.values(nums).reduce((a, b) => a + b, 0);

  return (
    <SkeletonTheme
      baseColor="rgba(255,255,255,0.04)"
      highlightColor="rgba(255,255,255,0.08)"
    >
      <div className="mb-10">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-[0.25em] text-slate-600 font-semibold mb-3">
            Total Downloads
          </p>
          {loaded ? (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl font-bold text-white"
              style={{ letterSpacing: '-0.04em' }}
            >
              {parseNumber(total)}
              <span className="text-blue-500 ml-1">+</span>
            </motion.p>
          ) : (
            <Skeleton height={56} width={192} borderRadius={12} />
          )}
        </div>

        <div className="relative flex h-1.5 rounded-full overflow-hidden mb-6 gap-px">
          <div
            className="absolute inset-0 rounded-full"
            style={{ background: 'rgba(255,255,255,0.04)' }}
          />
          {loaded ? (
            platforms.map((p) => {
              const pct = total > 0 ? (nums[p.key] / total) * 100 : 25;
              return (
                <motion.div
                  key={p.key}
                  initial={{ width: 0 }}
                  animate={{ width: `${pct}%` }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3,
                  }}
                  style={{ background: p.color, minWidth: 4 }}
                />
              );
            })
          ) : (
            <Skeleton
              height={6}
              borderRadius={999}
              containerClassName="w-full"
            />
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((p, i) => (
            <motion.div
              key={p.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.07 }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: p.color }}
                />
                <p className="text-slate-500 text-[10px] uppercase tracking-[0.15em]">
                  {p.label}
                </p>
              </div>
              <p
                className="text-white font-semibold text-base"
                style={{ letterSpacing: '-0.02em' }}
              >
                {loaded ? (
                  parseNumber(nums[p.key])
                ) : (
                  <Skeleton width={64} height={20} borderRadius={4} />
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SkeletonTheme>
  );
}
