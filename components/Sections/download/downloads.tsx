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
import { motion } from "framer-motion";
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
    }

    fetchData();
  }, [])

  return (
    <div className="text-gray-700 text-sm mb-4">
      <span className="font-semibold">ClickCrystals has been officially downloaded about
        {" "}
        <motion.span
          className="font-medium bg-[linear-gradient(to_right,#711f73,#65551d,#6b891d,#174965,#1b6969,#511553)] [background-size:200%] bg-clip-text text-transparent"
          animate={{
            backgroundPositionX: "200%"
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
          }}
        >{total}</motion.span>
        {" "}times!</span>
      <br />
      <span className="text-xs">
        Modrinth: {modrinth}<br />
        CurseForge: {curseforge}<br />
        GitHub: {github}<br />
        PlanetMC: {planetMC}
      </span>
    </div>
  )
}
