'use server'

import { getReleases } from "./getReleases";
import { load } from 'cheerio';

interface GitHubAsset {
  download_count: number;
}

interface GitHubRelease {
  assets: GitHubAsset[];
}

export async function getGitHubDownloads(): Promise<number> {
  const releases: GitHubRelease[] = await getReleases(100);
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

export async function getModrinthDownloads(): Promise<number> {
  const mod = await fetch("https://api.modrinth.com/v2/project/clickcrystals", {
    next: { revalidate: 300 },
  });
  const data = await mod.json();
  return data.downloads;
}

export async function getCurseForgeDownloads(): Promise<number> {
  const mod = await fetch("https://api.curseforge.com/v1/mods/946253", {
    method: "GET",
    next: { revalidate: 300 },
    headers: {
      Accept: "application/json",
      "x-api-key": "$2a$10$Sfn.ovCOUBg24FD1sBI/fe2cuWc2p/o6o7tVpWtNcnfDcyfjaqxTC",
      // this token is just giving access to API and its free and not used by anyone
      // no worries if its leaked.
    },
  });
  const data = await mod.json();
  return data.data.downloadCount;
}

export async function getPlanetMCDownloads(): Promise<number> {
  const response = await fetch('https://www.planetminecraft.com/mod/clickcrystal/', {
    next: { revalidate: 300 },
  });
  const body = await response.text();

  const $ = load(body);
  const downloadText = $('#resource-info > ul > li:nth-child(2) > span:nth-child(1)').text();
  const downloads = parseInt(downloadText.replace(/,/g, ''), 10);

  return downloads;
}

export async function getTotalDownloads(): Promise<number> {
  const [githubDls, modrinthDls, curseforgeDls, planetMcDls] = await Promise.all([
    getGitHubDownloads(),
    getModrinthDownloads(),
    getCurseForgeDownloads(),
    getPlanetMCDownloads()
  ])

  return githubDls + modrinthDls + curseforgeDls + planetMcDls;
}