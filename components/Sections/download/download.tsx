import Image from "next/image"

import modrinth from "@/public/icons/modrinth.svg"
import curseforge from "@/public/icons/curseforge.svg"
import planetmc from "@/public/icons/planetmc.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DownloadLink } from "./DownloadLink"
import DownloadTable from "./DownloadTable"

export default function Download() {
  return (
    <section className="my-12 mx-6 md:mx-24">
      <div className="py-0 ">
        <div className="place-self-center">
          <h1 className="text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl">
            Download <span className="text-blue-600">ClickCrystals</span>
          </h1>
          <p className="text-gray-500 font-normal max-w-4xl my-3">
            Our official downloads are available on CurseForge, PlanetMC and GitHub. ClickCrystals has been discontinued on Modrinth. Please refrain from downloading ClickCrystals from any other website other than listed here.
          </p>
          <div className="flex flex-row gap-2">
            <DownloadLink link="https://www.curseforge.com/minecraft/mc-mods/clickcrystals" label="CurseForge" className="border-[#ff7547] bg-[#f16436] hover:bg-[#df582c]" icon={<Image src={curseforge} width={24} height={24} alt="CurseForge" className="size-6 md:size-5" />} />
            <DownloadLink link="https://planetminecraft.com/mod/clickcrystal" label="PlanetMC" className="border-[#2697b3] bg-[#1f86a0] hover:bg-[#126377]" icon={<Image src={planetmc} width={24} height={24} alt="PlanetMC" className="size-6 md:size-5" />} />
            <DownloadLink link="https://modrinth.com/mod/clickcrystals" label="Modrinth" className="border-[#3eb326] bg-[#39a822] hover:bg-[#2d8a1a]" icon={<Image src={modrinth} width={24} height={24} alt="Modrinth" className="size-6 md:size-5" />} />
            <DownloadLink link="https://github.com/clickcrystals-development/ClickCrystals/releases" label="GitHub" className="border-[#3c444b] bg-[#202529] hover:bg-[#181b1f]" icon={<FontAwesomeIcon icon={faGithub} className="size-6 md:size-5" />} />
          </div>
          <DownloadTable />
        </div>
      </div>
    </section>
  )
}