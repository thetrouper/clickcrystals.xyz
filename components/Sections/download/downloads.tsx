interface DownloadState {
  github: string | number | JSX.Element;
  modrinth: string | number | JSX.Element;
  curseforge: string | number | JSX.Element;
  total: string | number | JSX.Element;
}

'use client'

import { getCurseForgeDownloads, getGitHubDownloads, getModrinthDownloads } from "@/lib/getDownloads";
import { parseNumber } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function Downloads() {
  const [github, setGithub] = useState<DownloadState['github']>(<i>fetching...</i>);
  const [modrinth, setModrinth] = useState<DownloadState['modrinth']>(<i>fetching...</i>);
  const [curseforge, setCurseforge] = useState<DownloadState['curseforge']>(<i>fetching...</i>);
  const [total, setTotal] = useState<DownloadState['total']>(<i>counting...</i>);

  useEffect(() => {
    const fetchData = async () => {
      const [githubDls, modrinthDls, curseforgeDls] = await Promise.all([
        getGitHubDownloads(),
        getModrinthDownloads(),
        getCurseForgeDownloads()
      ]);

      setGithub(parseNumber(githubDls));
      setModrinth(parseNumber(modrinthDls));
      setCurseforge(parseNumber(curseforgeDls));
      setTotal(parseNumber(githubDls + modrinthDls + curseforgeDls));
    }

    fetchData();
  }, [])

  return (
    <>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-gray-700">Download Statistics</h2>
      <p className="text-gray-600 mb-4">
        This table shows all the versions of ClickCrystals with their total download count and link to download. Also showing the total downloads from all sources:
      </p>
      <div className="text-gray-700 text-sm mb-4">
        Modrinth: {modrinth}<br />
        CurseForge: {curseforge}<br />
        GitHub: {github}<br />
        <span className="font-semibold">Total</span>: {total}
      </div>
    </>
  )
}
