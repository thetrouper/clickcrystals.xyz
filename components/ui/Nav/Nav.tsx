'use client';

import { DropLink } from './DropLink';
import { NavLink } from './NavLink';
import {
  Download,
  History,
  BookOpen,
  HelpCircle,
  MonitorPlay,
  Layers,
  Github,
} from 'lucide-react';

const downloadDropdown = [
  {
    label: 'Download Latest',
    url: '/get',
    description: 'Download the latest version now',
    icon: Download,
    primary: true,
  },
  {
    label: 'Browse Versions',
    url: '/download',
    description: 'Pick from all past releases',
    icon: History,
  },
  {
    label: 'CurseForge',
    url: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
    description: 'Install via CurseForge',
    iconImg: '/icons/curseforge.svg',
    separate: true,
  },
  {
    label: 'GitHub',
    url: 'https://github.com/clickcrystals-development/ClickCrystals/releases',
    description: 'View all releases on GitHub',
    icon: Github,
  },
  {
    label: 'Modrinth',
    url: 'https://modrinth.com/mod/clickcrystals',
    description: 'Install via Modrinth',
    iconImg: '/icons/modrinth.svg',
  },
];

const moreDropdown = [
  {
    label: 'Help',
    url: '/help',
    icon: HelpCircle,
    description: 'Guides & troubleshooting',
  },
  {
    label: 'Config Library',
    url: '/configs',
    icon: BookOpen,
  },
  {
    label: 'Preview',
    url: '/gallery',
    icon: MonitorPlay,
    separate: true,
  },
  {
    label: 'Projects',
    url: '/projects',
    icon: Layers,
  },
];

export const getLinks = (onLinkClick?: () => void) => [
  <NavLink label="Home" url="/" key={0} onLinkClick={onLinkClick} />,
  <DropLink
    label="Download"
    links={downloadDropdown}
    url="/download"
    key={1}
    onLinkClick={onLinkClick}
  />,
  <NavLink label="Scripts" url="/scripts" key={2} onLinkClick={onLinkClick} />,
  <NavLink label="Editor" url="/editor" key={3} onLinkClick={onLinkClick} />,
  <NavLink
    label="Wiki"
    url="https://bit.ly/ccs-wiki"
    key={4}
    target="_blank"
    onLinkClick={onLinkClick}
  />,
  <DropLink
    label="More"
    links={moreDropdown}
    url="#"
    key={5}
    onLinkClick={onLinkClick}
  />,
];

export const links = getLinks();

export const Nav = () => {
  return (
    <>
      <nav className="w-full md:w-auto text-slate-200 h-[calc(100vh-72px)] hidden items-center md:flex md:h-auto md:mx-5 md:overflow-visible overflow-y-auto">
        <ul className="w-full md:w-auto flex flex-col md:flex-row md:pt-0 md:self-center md:text-base pt-8 text-xl">
          {links}
        </ul>
      </nav>
    </>
  );
};
