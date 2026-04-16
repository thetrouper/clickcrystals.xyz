'use server';

const CURSEFORGE_PROJECT_ID = 946253;
const CURSEFORGE_API_KEY =
  '$2a$10$Sfn.ovCOUBg24FD1sBI/fe2cuWc2p/o6o7tVpWtNcnfDcyfjaqxTC';

interface CurseForgeFile {
  id: number;
  displayName: string;
  fileName: string;
  downloadUrl: string;
  downloadCount: number;
  gameVersions: string[];
  fileDate: string;
}

interface CurseForgePagination {
  index: number;
  pageSize: number;
  resultCount: number;
  totalCount: number;
}

async function fetchAllFiles(): Promise<CurseForgeFile[]> {
  const allFiles: CurseForgeFile[] = [];
  let index = 0;
  const pageSize = 50;

  while (true) {
    const response = await fetch(
      `https://api.curseforge.com/v1/mods/${CURSEFORGE_PROJECT_ID}/files?pageSize=${pageSize}&index=${index}`,
      {
        method: 'GET',
        next: { revalidate: 300 },
        headers: {
          Accept: 'application/json',
          'x-api-key': CURSEFORGE_API_KEY,
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch CurseForge files: ${response.status}`);
    }

    const json = await response.json();
    const files: CurseForgeFile[] = json.data;
    const pagination: CurseForgePagination = json.pagination;

    allFiles.push(...files);

    if (index + pagination.resultCount >= pagination.totalCount) break;
    index += pageSize;
  }

  return allFiles;
}

/**
 * Extract the mod version from a CurseForge file's displayName.
 * Patterns: "ClickCrystals-1.21.11-1.3.9.jar" -> "1.3.9"
 *           "v1.20-1.2.0" -> "1.2.0"
 */
function extractModVersion(displayName: string): string {
  const cleaned = displayName.replace(/\.jar$/i, '');
  const parts = cleaned.split('-');
  return parts[parts.length - 1];
}

/**
 * Filter gameVersions to only include MC version strings (e.g. "1.21.11", "26.1"),
 * excluding "Client", "Fabric", and snapshot versions.
 */
function extractMcVersions(gameVersions: string[]): string[] {
  return gameVersions.filter(
    (v) =>
      v !== 'Client' &&
      v !== 'Fabric' &&
      !v.includes('Snapshot'),
  );
}

export async function getCurseForgeParsedReleases(): Promise<{
  releases: Record<string, any>[];
  mcVersions: { field: string; headerName: string }[];
}> {
  const files = await fetchAllFiles();

  const versionFieldMap = new Map<string, string>();

  // Group files by mod version
  const groups = new Map<
    string,
    {
      assets: Map<string, string>; // field key -> download URL
      totalDownloads: number;
      firstFileId: number;
    }
  >();

  for (const file of files) {
    const modVersion = extractModVersion(file.displayName);
    const mcVersions = extractMcVersions(file.gameVersions);

    if (!groups.has(modVersion)) {
      groups.set(modVersion, {
        assets: new Map(),
        totalDownloads: 0,
        firstFileId: file.id,
      });
    }

    const group = groups.get(modVersion)!;
    group.totalDownloads += file.downloadCount;

    for (const mcVer of mcVersions) {
      const field = mcVer.replaceAll('.', '');
      versionFieldMap.set(mcVer, field);
      if (!group.assets.has(field)) {
        group.assets.set(field, file.downloadUrl);
      }
    }
  }

  // Fetch CC version mappings
  let mappings: Record<string, string | null> = {};
  try {
    const resp = await fetch(
      'https://itzispyder.github.io/clickcrystals/info.json',
      { method: 'GET', next: { revalidate: 200 } },
    );
    const info = await resp.json();
    mappings = info['versionMappings'] ?? {};
  } catch {
    // Continue without mappings
  }

  // Register mapping versions in field map
  for (const vk of Object.keys(mappings)) {
    if (!versionFieldMap.has(vk)) {
      versionFieldMap.set(vk, vk.replaceAll('.', ''));
    }
  }

  // Build releases
  const allFields = Array.from(versionFieldMap.values());
  const releases: Record<string, any>[] = [];

  groups.forEach((group, modVersion) => {
    const release: Record<string, any> = {
      version: modVersion,
      code: `https://www.curseforge.com/minecraft/mc-mods/clickcrystals/files/${group.firstFileId}`,
      downloads: group.totalDownloads,
    };

    allFields.forEach((field) => {
      release[field] = null;
    });

    group.assets.forEach((url, field) => {
      release[field] = url;
    });

    releases.push(release);
  });

  // Apply version mappings
  for (const [versionKey, mappedVersion] of Object.entries(mappings)) {
    const key = versionKey.replaceAll('.', '');
    const mappedKey =
      typeof mappedVersion === 'string'
        ? mappedVersion.replaceAll('.', '')
        : null;

    for (const release of releases) {
      if (mappedKey && release[mappedKey] && !release[key]) {
        release[key] = release[mappedKey];
      } else if (mappedVersion === null) {
        release[key] = null;
      }
    }
  }

  // Build column defs from fields that have data
  const fieldsWithData = new Set<string>();
  for (const release of releases) {
    for (const [key, val] of Object.entries(release)) {
      if (!['version', 'code', 'downloads'].includes(key) && val != null) {
        fieldsWithData.add(key);
      }
    }
  }

  const fieldToDisplay = new Map<string, string>();
  versionFieldMap.forEach((field, ver) => {
    if (!fieldToDisplay.has(field)) {
      fieldToDisplay.set(field, ver);
    }
  });

  const mcVersions = Array.from(fieldsWithData)
    .filter((field) => fieldToDisplay.has(field))
    .map((field) => ({ field, headerName: fieldToDisplay.get(field)! }))
    .sort((a, b) => {
      const pA = a.headerName.split('.').map(Number);
      const pB = b.headerName.split('.').map(Number);
      for (let i = 0; i < Math.max(pA.length, pB.length); i++) {
        const diff = (pB[i] ?? 0) - (pA[i] ?? 0);
        if (diff !== 0) return diff;
      }
      return 0;
    });

  return { releases, mcVersions };
}
