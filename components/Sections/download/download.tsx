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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Download <span className="text-blue-400">ClickCrystals</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Official downloads are available on CurseForge, PlanetMC, Modrinth,
            and GitHub. Only download from these trusted sources.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <DownloadLink
            link="https://www.curseforge.com/minecraft/mc-mods/clickcrystals"
            label="CurseForge"
            className="bg-[#f16436] hover:bg-[#df582c] border-2 border-[#ff7547]"
            icon={
              <Image src={curseforge} width={24} height={24} alt="CurseForge" />
            }
          />
          <DownloadLink
            link="https://planetminecraft.com/mod/clickcrystal"
            label="PlanetMC"
            className="bg-[#1f86a0] hover:bg-[#126377] border-2 border-[#2697b3]"
            icon={
              <Image src={planetmc} width={24} height={24} alt="PlanetMC" />
            }
          />
          <DownloadLink
            link="https://modrinth.com/mod/clickcrystals"
            label="Modrinth"
            className="bg-[#39a822] hover:bg-[#2d8a1a] border-2 border-[#3eb326]"
            icon={
              <Image src={modrinth} width={24} height={24} alt="Modrinth" />
            }
          />
          <DownloadLink
            link="https://github.com/clickcrystals-development/ClickCrystals/releases"
            label="GitHub"
            className="bg-[#202529] hover:bg-[#181b1f] border-2 border-[#3c444b]"
            icon={<FontAwesomeIcon icon={faGithub} className="w-6 h-6" />}
          />
        </div>

        <DownloadTable />
      </div>
    </main>
  );
}
