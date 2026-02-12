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
              hoverColor: 'hover:text-[#5865F2]',
            },
            {
              icon: faGithub,
              url: 'https://github.com/clickcrystals-development/ClickCrystals',
              label: 'GitHub',
              hoverColor: 'hover:text-white',
            },
            {
              icon: faYoutube,
              url: 'https://www.youtube.com/@itzispyder',
              label: 'YouTube',
              hoverColor: 'hover:text-[#FF0000]',
            },
          ].map(({ icon, url, label, hoverColor }) => (
            <Link
              key={label}
              href={url}
              target="_blank"
              aria-label={label}
              className={`text-slate-400 transition-colors inline-flex items-center justify-center w-5 h-5 ${hoverColor}`}
            >
              <FontAwesomeIcon icon={icon} className="w-5 h-5" />
            </Link>
          ))}
          {[
            {
              label: 'CurseForge',
              link: 'https://www.curseforge.com/minecraft/mc-mods/clickcrystals',
              icon: '/icons/curseforge.svg',
              hoverClass:
                'hover:[filter:brightness(0)_saturate(100%)_invert(55%)_sepia(93%)_saturate(4062%)_hue-rotate(3deg)_brightness(104%)_contrast(101%)]',
            },
            {
              label: 'Modrinth',
              link: 'https://modrinth.com/mod/clickcrystals',
              icon: '/icons/modrinth.svg',
              hoverClass: 'hover:brightness-110 hover:saturate-150',
            },
            {
              label: 'PlanetMC',
              link: 'https://www.planetminecraft.com/mod/clickcrystal/',
              icon: '/icons/planetmc.svg',
              hoverClass: 'hover:brightness-110 hover:saturate-150',
            },
          ].map(({ label, link, icon, hoverClass }) => (
            <Link
              key={label}
              href={link}
              target="_blank"
              aria-label={label}
              className="opacity-60 hover:opacity-100 transition-opacity inline-flex items-center justify-center w-5 h-5"
            >
              <Image
                src={icon}
                alt={label}
                width={20}
                height={20}
                className={`transition-all ${hoverClass}`}
                style={{ display: 'block' }}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
