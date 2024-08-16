'use client'

const mc_versions = [
  "1.21",
  "1.20.6",
  "1.20.5",
  "1.20.4",
  "1.20.3",
  "1.20.2",
  "1.20.1",
  "1.20",
  "1.19.4",
  "1.19.3",
  "1.19.2",
  "1.19.1",
]

const mod_versions = [
  '1.2.7',
  '1.2.6',
  '1.2.5',
  '1.2.4',
  '1.2.3',
  '1.2.2',
  '1.2.1',
  '1.2.0',
  '1.1.9',
  '1.1.8',
  '1.1.7',
  '1.1.6',
  '1.1.5'
]

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { getSupportedReleases } from "@/lib/getReleases";

import { useEffect, useState } from "react";

export default function DownloadBuilder() {
  const [mcVer, setMcVer] = useState<string>("");
  const [ccVer, setCcVer] = useState<string>("");
  const [supportedReleases, setSupportedReleases] = useState<any>([]);

  useEffect(() => {
    const update = async () => {
      setSupportedReleases(await getSupportedReleases());
    }
  
    return () => {
      update();
    }
  }, [])

  const [supported, setSupported] = useState<boolean>(false);
  const [latest, setLatest] = useState<boolean>(false);

  const handleMcVerChange = (value: string) => {
    setMcVer(value);
    
  }

  const handleCcVerChange = (value: string) => {
    setCcVer(value);
  }

  return (
    <div className="my-4">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">Build your download!</h2>
      <p className="text-gray-600 mb-4 max-w-4xl">
        Choose your minecraft version below, then select the ClickCrystals version (recommended to choose the newest and highest one) and your download will start!
      </p>
      <div className="flex gap-4">
        <Select value={mcVer} onValueChange={handleMcVerChange}>
          <SelectTrigger className="w-[200px] md:w-[280px]">
            <SelectValue placeholder="Choose Minecraft Version" />
          </SelectTrigger>
          <SelectContent>
            {mc_versions.map((mc_ver: string, i) => (
              <SelectItem value={mc_ver}>{mc_ver}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select value={ccVer} onValueChange={handleCcVerChange}>
          <SelectTrigger className="w-[200px] md:w-[280px]">
            <SelectValue placeholder="Choose ClickCrystals Version" />
          </SelectTrigger>
          <SelectContent>
            {mod_versions.map((mod_ver: string, i) => (
              <SelectItem value={mod_ver}>{mod_ver}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <p className="my-4 max-w-4xl text-sm">
        {supported ? (
          <>
            Your minecraft version is <span className="text-green-500 font-semibold">supported</span> by ClickCrystals!{" "}
            {latest ? (
              <>
                ClickCrystals is also getting the <span className="text-green-500 font-semibold">latest updates</span> for your version, which means that you are on the latest version and can enjoy the new features, bug fixes and patches!
              </>
            ) : (
                <>However, ClickCrystals is <span className="text-red-500 fontsemibold">not up-to-date</span> for your minecraft version, meaning that you cannot enjoy the new, latest features and might experience bugs. Upgrade your minecraft version and enjoy the new, latest features, bug fixes and patches from ClickCrystals!</>
            )}
          </>
        ) : (
            <>
              Your minecraft version is <span className="text-red-500 font-semibold">not supported</span> by ClickCrystals. Try upgrading your minecraft version!
            </>
        )}
      </p>
      <p className="my-4 max-w-4xl text-sm">
        {(supported && latest) && (
          <>
            ClickCrystals's <span className="text-green-500 font-semibold">latest</span> update is <span className="text-green-500 font-semibold">available</span> for your minecraft version!
          </>
        )}
        {(supported && !latest) && (
          <>
            ClickCrystals's latest update is <span className="text-red-500 font-semibold">not available</span> for your minecraft version, however here is a the most recent release that supports your version:
          </>
        )}
        {(!supported) && (
          <>
            ClickCrystals is <span className="text-red-500 font-semibold">not supported</span> for your minecraft version so there are no releases you can download.
          </>
        )}
      </p>
    </div>
  )
}