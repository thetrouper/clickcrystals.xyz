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
    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 md:p-6 mb-8 max-w-4xl transition-colors duration-300">
      <div className="mb-8">
        <div className="font-extrabold text-2xl md:text-3xl text-blue-400 mb-2">
          {total}
        </div>
        <p className="text-base text-slate-300">
          Total official downloads across all platforms
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8 text-sm">
        <div>
          <div className="text-slate-400 text-sm uppercase tracking-wider mb-1.5 font-normal">
            CurseForge
          </div>
          <div className="text-slate-100 font-bold text-base">
            {typeof curseforge === 'object' && curseforge.type === 'i' ? (
              <div className="h-5 w-16 bg-slate-700/50 rounded animate-pulse"></div>
            ) : (
              curseforge
            )}
          </div>
        </div>
        <div>
          <div className="text-slate-400 text-sm uppercase tracking-wider mb-1.5 font-normal">
            Modrinth
          </div>
          <div className="text-slate-100 font-bold text-base">
            {typeof modrinth === 'object' && modrinth.type === 'i' ? (
              <div className="h-5 w-16 bg-slate-700/50 rounded animate-pulse"></div>
            ) : (
              modrinth
            )}
          </div>
        </div>
        <div>
          <div className="text-slate-400 text-sm uppercase tracking-wider mb-1.5 font-normal">
            GitHub
          </div>
          <div className="text-slate-100 font-bold text-base">
            {typeof github === 'object' && github.type === 'i' ? (
              <div className="h-5 w-16 bg-slate-700/50 rounded animate-pulse"></div>
            ) : (
              github
            )}
          </div>
        </div>
        <div>
          <div className="text-slate-400 text-sm uppercase tracking-wider mb-1.5 font-normal">
            PlanetMC
          </div>
          <div className="text-slate-100 font-bold text-base">
            {typeof planetMC === 'object' && planetMC.type === 'i' ? (
              <div className="h-5 w-16 bg-slate-700/50 rounded animate-pulse"></div>
            ) : (
              planetMC
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
