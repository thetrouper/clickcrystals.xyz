"use client"

import { DropLink } from "./DropLink"
import { NavLink } from "./NavLink"

const downloadDropdown = [
  {
    "label": "Official",
    "url": "/download",
  },
  {
    "label": "PlanetMinecraft",
    "url": "https://www.planetminecraft.com/mod/clickcrystal/",
    "seperate": true
  },
  {
    "label": "CurseForge",
    "url": "https://www.curseforge.com/minecraft/mc-mods/clickcrystals"
  },
  {
    "label": "GitHub Releases",
    "url": "https://github.com/clickcrystals-development/ClickCrystals/releases"
  },
  {
    "label": "Modrinth",
    "url": "https://modrinth.com/mod/clickcrystals",
    "seperate": true
  }
]

const moreDropdown = [
  {
    "label": "Help",
    "url": "https://clickcrystals.xyz/faq.html"
  },
  {
    "label": "Gallery",
    "url": "https://clickcrystals.xyz/gallery.html"
  },
  // {
  //   "label": "Tools",
  //   "url": "#"
  // },
  {
    "label": "Other Projects",
    "url": "https://clickcrystals.xyz/projects.html",
    "seperate": true
  },
]

export const links = [
  <NavLink label="Home" url="/" key={0} />,
  <DropLink label="Download" links={downloadDropdown} url="/download" key={1} />,
  <NavLink label="Wiki" url="https://bit.ly/ccs-wiki" key={2} />,
  <DropLink label="More" links={moreDropdown} url="#" key={3} />
]

export const Nav = () => {
  return (
    <>
      <nav className="w-full md:w-auto text-slate-200 h-[calc(100vh-72px)] hidden items-center md:flex md:h-auto md:mx-5 md:overflow-visible overflow-y-auto">
        <ul className="w-full md:w-auto flex flex-col md:flex-row md:pt-0 md:self-center md:text-base pt-8 text-xl">
          {links}
        </ul>
      </nav>
    </>
  )
}
