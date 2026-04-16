import { getParsedReleases } from '@/lib/getReleases';
import { getModrinthParsedReleases } from '@/lib/getModrinthReleases';
import { getCurseForgeParsedReleases } from '@/lib/getCurseForgeReleases';

interface SourceResult {
  releases: Record<string, any>[];
  mcVersions: { field: string; headerName: string }[];
}

/**
 * Get the latest download link auto-detected from all sources.
 * Priority: Modrinth > CurseForge > GitHub.
 * Picks the latest mod version's asset for the highest MC version available.
 */
export async function getLatestLink(): Promise<string | null> {
  // Fetch all sources in parallel, tolerating failures
  const [modrinth, curseforge, github] = await Promise.all([
    safeCall(getModrinthParsedReleases),
    safeCall(getCurseForgeParsedReleases),
    safeCall(async () => {
      const r = await getParsedReleases();
      return r;
    }),
  ]);

  // Priority order: Modrinth > CurseForge > GitHub
  const sources: (SourceResult | null)[] = [modrinth, curseforge, github];

  for (const source of sources) {
    if (!source || source.releases.length === 0) continue;

    const latestRelease = source.releases[0];
    // mcVersions are sorted highest-first, pick the first one that has a non-null asset
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
