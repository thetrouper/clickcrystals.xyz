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

export default function Downloads() {
  const [github, setGithub] = useState<DownloadState['github']>(
    <i>fetching...</i>,
  );
  const [modrinth, setModrinth] = useState<DownloadState['modrinth']>(
    <i>fetching...</i>,
  );
  const [planetMC, setPlanetMC] = useState<DownloadState['planetMC']>(
    <i>fetching...</i>,
  );
  const [curseforge, setCurseforge] = useState<DownloadState['curseforge']>(
    <i>fetching...</i>,
  );
  const [total, setTotal] = useState<DownloadState['total']>(
    <i>counting...</i>,
  );

  useEffect(() => {
    const fetchData = async () => {
      const [githubDls, modrinthDls, curseforgeDls, planetMcDls] =
        await Promise.all([
          getGitHubDownloads(),
          getModrinthDownloads(),
          getCurseForgeDownloads(),
          getPlanetMCDownloads(),
        ]);

      setGithub(parseNumber(githubDls));
      setModrinth(parseNumber(modrinthDls));
      setPlanetMC(parseNumber(planetMcDls));
      setCurseforge(parseNumber(curseforgeDls));
      setTotal(
        parseNumber(githubDls + modrinthDls + curseforgeDls + planetMcDls),
      );

      if (githubDls === 0) {
        setGithub(<i className="text-red-500">failed to fetch</i>);
      }
      if (modrinthDls === 0) {
        setModrinth(<i className="text-red-500">failed to fetch</i>);
      }
      if (planetMcDls === 0) {
        setPlanetMC(<i className="text-red-500">failed to fetch</i>);
      }
      if (curseforgeDls === 0) {
        setCurseforge(<i className="text-red-500">failed to fetch</i>);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 mb-8">
      <p className="text-lg text-slate-200 mb-4">
        ClickCrystals has been officially downloaded{' '}
        <motion.span
          className="font-bold text-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
          animate={{
            backgroundPositionX: ['0%', '200%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ backgroundSize: '200%' }}
        >
          {total}
        </motion.span>{' '}
        times!
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">
            Modrinth
          </div>
          <div className="text-slate-200 font-medium">{modrinth}</div>
        </div>
        <div>
          <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">
            CurseForge
          </div>
          <div className="text-slate-200 font-medium">{curseforge}</div>
        </div>
        <div>
          <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">
            GitHub
          </div>
          <div className="text-slate-200 font-medium">{github}</div>
        </div>
        <div>
          <div className="text-slate-500 text-xs uppercase tracking-wide mb-1">
            PlanetMC
          </div>
          <div className="text-slate-200 font-medium">{planetMC}</div>
        </div>
      </div>
    </div>
  );
}
