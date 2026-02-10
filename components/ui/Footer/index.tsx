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
    <footer className="w-full bg-slate-900 border-t border-slate-800 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            src="/icon.png"
            alt="ClickCrystals"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} ClickCrystals
          </span>
        </div>
        <div className="flex items-center gap-4">
          {[
            {
              icon: faDiscord,
              url: 'https://discord.gg/n9hfHNJVe6',
              label: 'Discord',
            },
            {
              icon: faGithub,
              url: 'https://github.com/clickcrystals-development/ClickCrystals',
              label: 'GitHub',
            },
            {
              icon: faYoutube,
              url: 'https://www.youtube.com/@itzispyder',
              label: 'YouTube',
            },
          ].map(({ icon, url, label }) => (
            <Link
              key={label}
              href={url}
              target="_blank"
              aria-label={label}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </Link>
          ))}
          {[
            {
              label: 'CurseForge',
              link: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
              icon: '/icons/curseforge.svg',
            },
            {
              label: 'Modrinth',
              link: 'https://modrinth.com/mod/clickcrystals',
              icon: '/icons/modrinth.svg',
            },
            {
              label: 'PlanetMC',
              link: 'https://www.planetminecraft.com/mod/clickcrystal/',
              icon: '/icons/planetmc.svg',
            },
          ].map(({ label, link, icon }) => (
            <Link
              key={label}
              href={link}
              target="_blank"
              aria-label={label}
              className="opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image src={icon} alt={label} width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
