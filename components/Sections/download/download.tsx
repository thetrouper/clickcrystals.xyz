import Image from 'next/image';
import dynamic from 'next/dynamic';

import modrinth from '@/public/icons/modrinth.svg';
import curseforge from '@/public/icons/curseforge.svg';
import planetmc from '@/public/icons/planetmc.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DownloadLink } from './DownloadLink';

const DownloadTable = dynamic(() => import('./DownloadTable'), {
  ssr: false,
  loading: () => <div className="h-64 bg-slate-800/50 rounded animate-pulse" />,
});

export default function Download() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 md:mb-4 tracking-tight">
            Download <span className="text-blue-500">ClickCrystals</span>
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Official downloads are available on CurseForge, PlanetMC, Modrinth,
            and GitHub. Only download from these trusted sources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 pt-4 md:pt-6">
          <DownloadLink
            link="https://www.curseforge.com/minecraft/mc-mods/clickcrystals"
            label="CurseForge"
            primary={true}
            icon={
              <Image src={curseforge} width={24} height={24} alt="CurseForge" />
            }
          />
          <DownloadLink
            link="https://github.com/clickcrystals-development/ClickCrystals/releases"
            label="GitHub"
            icon={<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />}
          />
          <DownloadLink
            link="https://modrinth.com/mod/clickcrystals"
            label="Modrinth"
            icon={
              <Image src={modrinth} width={24} height={24} alt="Modrinth" />
            }
          />
        </div>

        <DownloadTable />
      </div>
    </main>
  );
}
