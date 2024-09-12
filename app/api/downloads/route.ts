import { getGitHubDownloads, getModrinthDownloads, getPlanetMCDownloads, getCurseForgeDownloads } from "@/lib/getDownloads";
import { NextResponse } from "next/server";

export async function GET(request: any) {
  const [github, modrinth, planetmc, curseforge] = await Promise.all([
    getGitHubDownloads(),
    getModrinthDownloads(),
    getPlanetMCDownloads(),
    getCurseForgeDownloads()
  ]);

  if (typeof github === 'number' && typeof modrinth === 'number' && typeof planetmc === 'number' && typeof curseforge === 'number') {
    const total = github + modrinth + planetmc + curseforge;
    return NextResponse.json({
      downloads: {
        github,
        modrinth,
        planetmc,
        curseforge,
        total,
      }
    }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Server-side error during fetching of downloads" }, { status: 500 });
  }
}
