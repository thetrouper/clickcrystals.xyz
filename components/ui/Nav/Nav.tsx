'use client';

import { DropLink } from './DropLink';
import { NavLink } from './NavLink';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faDownload,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import { CircleHelp, Sliders, MonitorPlay, Code2 } from 'lucide-react';

const downloadDropdown = [
  {
    label: 'Latest',
    url: '/get',
    primary: true,
    iconType: 'fa' as const,
    icon: faDownload,
  },
  {
    label: 'Versions',
    url: '/download',
    iconType: 'fa' as const,
    icon: faClockRotateLeft,
  },
  {
    label: 'CurseForge',
    url: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
    external: true,
    separate: true,
    iconType: 'img' as const,
    iconSrc: '/icons/curseforge.svg',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/clickcrystals-development/ClickCrystals/releases',
    external: true,
    iconType: 'fa' as const,
    icon: faGithub,
  },
  {
    label: 'Modrinth',
    url: 'https://modrinth.com/mod/clickcrystals',
    external: true,
    iconType: 'img' as const,
    iconSrc: '/icons/modrinth.svg',
  },
];

const moreDropdown = [
  {
    label: 'Help',
    url: '/help',
    iconType: 'lucide' as const,
    icon: CircleHelp,
  },
  {
    label: 'Configs',
    url: '/configs',
    iconType: 'lucide' as const,
    icon: Sliders,
  },
  {
    label: 'Preview',
    url: '/gallery',
    iconType: 'lucide' as const,
    icon: MonitorPlay,
  },
  {
    label: 'Projects',
    url: '/projects',
    iconType: 'lucide' as const,
    icon: Code2,
  },
];

export const links = [
  <DropLink
    label="Download"
    links={downloadDropdown}
    url="/download"
    key={1}
  />,
  <NavLink label="Scripts" url="/scripts" key={2} />,
  <NavLink label="Editor" url="/editor" key={3} />,
  <NavLink
    label="Wiki"
    url="https://bit.ly/ccs-wiki"
    key={4}
    target="_blank"
  />,
  <DropLink label="More" links={moreDropdown} url="#" key={5} align="right" />,
];

export const Nav = () => {
  return (
    <>
      <nav className="w-full md:w-auto text-slate-200 h-[calc(100vh-72px)] hidden items-center md:flex md:h-auto md:mx-5 overflow-visible">
        <ul className="w-full md:w-auto flex flex-col md:flex-row md:pt-0 md:self-center md:text-base pt-8 text-xl overflow-visible">
          {links}
        </ul>
      </nav>
    </>
  );
};
