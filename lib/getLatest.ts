import { getParsedReleases } from '@/lib/getReleases';
import { getModrinthParsedReleases } from '@/lib/getModrinthReleases';
import { getCurseForgeParsedReleases } from '@/lib/getCurseForgeReleases';

interface SourceResult {
  releases: Record<string, any>[];
  mcVersions: { field: string; headerName: string }[];
}

export async function getLatestLink(): Promise<string | null> {
  const [modrinth, curseforge, github] = await Promise.all([
    safeCall(getModrinthParsedReleases),
    safeCall(getCurseForgeParsedReleases),
    safeCall(async () => {
      const r = await getParsedReleases();
      return r;
    }),
  ]);

  const sources: (SourceResult | null)[] = [modrinth, curseforge, github];

  for (const source of sources) {
    if (!source || source.releases.length === 0) continue;

    const latestRelease = source.releases[0];
    for (const col of source.mcVersions) {
      const url = latestRelease[col.field];
      if (url && typeof url === 'string') {
        return url;
      }
    }
  }

  return null;
}

async function safeCall<T>(fn: () => Promise<T>): Promise<T | null> {
  try {
    return await fn();
  } catch {
    return null;
  }
}
