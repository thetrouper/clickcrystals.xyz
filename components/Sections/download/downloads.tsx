'use client'

interface DownloadState {
  github: string | number | JSX.Element;
  modrinth: string | number | JSX.Element;
  planetMC: string | number | JSX.Element;
  curseforge: string | number | JSX.Element;
  total: string | number | JSX.Element;
}

import { getCurseForgeDownloads, getGitHubDownloads, getModrinthDownloads, getPlanetMCDownloads } from "@/lib/getDownloads";
import { parseNumber } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Downloads() {
  const [github, setGithub] = useState<DownloadState['github']>(<i>fetching...</i>);
  const [modrinth, setModrinth] = useState<DownloadState['modrinth']>(<i>fetching...</i>);
  const [planetMC, setPlanetMC] = useState<DownloadState['planetMC']>(<i>fetching...</i>);
  const [curseforge, setCurseforge] = useState<DownloadState['curseforge']>(<i>fetching...</i>);
  const [total, setTotal] = useState<DownloadState['total']>(<i>counting...</i>);

  useEffect(() => {
    const fetchData = async () => {
      const [githubDls, modrinthDls, curseforgeDls, planetMcDls] = await Promise.all([
        getGitHubDownloads(),
        getModrinthDownloads(),
        getCurseForgeDownloads(),
        getPlanetMCDownloads()
      ]);

      setGithub(parseNumber(githubDls));
      setModrinth(parseNumber(modrinthDls));
      setPlanetMC(parseNumber(planetMcDls))
      setCurseforge(parseNumber(curseforgeDls));
      setTotal(parseNumber(githubDls + modrinthDls + curseforgeDls + planetMcDls));
    }

    fetchData();
  }, [])

  return (
    <div className="text-gray-700 text-sm mb-4">
      Modrinth: {modrinth}<br />
      CurseForge: {curseforge}<br />
      PlanetMC: {planetMC}<br />
      GitHub: {github}<br />
      <span className="font-semibold">Total</span>: {total}
    </div>
  )
}
