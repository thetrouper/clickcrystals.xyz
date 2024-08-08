'use server'

import { getReleases } from "./getReleases";

interface GitHubAsset {
  download_count: number;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export async function getGitHubDownloads(): Promise<number> {
  const releases: GitHubRelease[] = await getReleases();
  const downloads = releases.reduce(
    (acc: number, release: GitHubRelease) =>
      acc + release.assets.reduce(
        (sum: number, asset: GitHubAsset) => sum + asset.download_count,
        0
      ),
    0
  );
  return downloads;
}

export async function getModrinthDownloads(): Promise<number>{
  const mod = await fetch("https://api.modrinth.com/v2/project/clickcrystals");
  const data = await mod.json();
  return data.downloads;
}

export async function getCurseForgeDownloads(): Promise<number> {
  const headers = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "x-api-key": "$2a$10$Sfn.ovCOUBg24FD1sBI/fe2cuWc2p/o6o7tVpWtNcnfDcyfjaqxTC",
      // this token is just giving access to API and its free and not used by anyone
      // no worries if its leaked.
    },
  }
  const mod = await fetch("https://api.curseforge.com/v1/mods/946253", headers);
  const data = await mod.json();
  return data.data.downloadCount;
}