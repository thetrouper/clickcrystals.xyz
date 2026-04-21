'use server';

const MODRINTH_PROJECT_ID = 'YDYPZdGj';

interface ModrinthVersion {
  id: string;
  version_number: string;
  name: string;
  game_versions: string[];
  downloads: number;
  files: { url: string; filename: string; primary: boolean }[];
  date_published: string;
}

export async function getModrinthParsedReleases(): Promise<{
  releases: Record<string, any>[];
  mcVersions: { field: string; headerName: string }[];
}> {
  const response = await fetch(
    `https://api.modrinth.com/v2/project/${MODRINTH_PROJECT_ID}/version`,
    {
      method: 'GET',
      next: { revalidate: 300 },
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch Modrinth versions: ${response.status}`);
  }

  const versions: ModrinthVersion[] = await response.json();

  const versionFieldMap = new Map<string, string>();

  const groups = new Map<
    string,
    {
      assets: Map<string, string>;
      totalDownloads: number;
      versionId: string;
    }
  >();

  for (const v of versions) {
    const dashIdx = v.version_number.indexOf('-');
    if (dashIdx === -1) continue;

    const modVersion = v.version_number.slice(dashIdx + 1);
    const primaryFile = v.files?.find((f) => f.primary) ?? v.files?.[0];
    if (!primaryFile) continue;

    if (!groups.has(modVersion)) {
      groups.set(modVersion, {
        assets: new Map(),
        totalDownloads: 0,
        versionId: v.id,
      });
    }

    const group = groups.get(modVersion)!;
    group.totalDownloads += v.downloads ?? 0;

    for (const gameVer of v.game_versions) {
      const field = gameVer.replaceAll('.', '');
      versionFieldMap.set(gameVer, field);
      if (!group.assets.has(field)) {
        group.assets.set(field, primaryFile.url);
      }
    }
  }

  let mappings: Record<string, string | null> = {};
  try {
    const resp = await fetch(
      'https://itzispyder.github.io/clickcrystals/info.json',
      { method: 'GET', next: { revalidate: 200 } },
    );
    const info = await resp.json();
    mappings = info['versionMappings'] ?? {};
  } catch {}

  for (const vk of Object.keys(mappings)) {
    if (!versionFieldMap.has(vk)) {
      versionFieldMap.set(vk, vk.replaceAll('.', ''));
    }
  }

  const allFields = Array.from(versionFieldMap.values());
  const releases: Record<string, any>[] = [];

  groups.forEach((group, modVersion) => {
    const release: Record<string, any> = {
      version: modVersion,
      code: `https://modrinth.com/mod/clickcrystals/version/${group.versionId}`,
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
