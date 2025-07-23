import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiscord,
  faGithub,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 border-t border-blue-600 py-10 px-6 flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="ClickCrystals"
            width={40}
            height={40}
            className="rounded-lg shadow"
          />
          <span className="text-white font-extrabold text-xl tracking-tight">
            ClickCrystals
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            {
              icon: faDiscord,
              url: 'https://discord.gg/zg3ge9VTgr',
              label: 'Discord',
              color: 'blue-600',
            },
            {
              icon: faYoutube,
              url: 'https://www.youtube.com/@itzispyder',
              label: 'YouTube',
              color: 'red-600',
            },
            {
              icon: faGithub,
              url: 'https://github.com/clickcrystals-development/ClickCrystals',
              label: 'GitHub',
              color: 'slate-800',
            },
          ].map(({ icon, url, label, color }) => (
            <Link
              key={label}
              href={url}
              target="_blank"
              aria-label={label}
              className={`text-${color} bg-white w-9 h-9 flex items-center justify-center rounded-full hover:opacity-80 shadow transition`}
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </Link>
          ))}
          {[
            {
              color: '[#f16436]',
              label: 'CurseForge',
              link: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
              icon: '/icons/curseforge.svg',
            },
            {
              color: '[#1f86a0]',
              label: 'PlanetMC',
              link: 'https://www.planetminecraft.com/mod/clickcrystal/',
              icon: '/icons/planetmc.svg',
            },
            {
              color: '[#39a822]',
              label: 'Modrinth',
              link: 'https://modrinth.com/mod/clickcrystals',
              icon: '/icons/modrinth.svg',
            },
          ].map(({ color, label, link, icon }) => (
            <Link
              key={label}
              href={link}
              target="_blank"
              aria-label={label}
              className={`text-white bg-${color} w-9 h-9 flex items-center justify-center rounded-full hover:opacity-80 shadow transition`}
            >
              <Image
                src={icon}
                alt={label}
                width={24}
                height={24}
                className="size-6 md:size-5"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-1 md:gap-3 text-blue-200 text-xs text-center md:text-left">
        <span>
          Website made by{' '}
          <Link
            target="_blank"
            href="https://ashish.top"
            className="text-white"
          >
            Ashish Agarwal
          </Link>
        </span>
        <span className="hidden md:inline">|</span>
        <span>
          &copy; {new Date().getFullYear()} ClickCrystals. Not affiliated with
          Mojang or Microsoft.
        </span>
      </div>
    </footer>
  );
}
