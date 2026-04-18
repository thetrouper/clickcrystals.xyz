'use server';

export async function getReleases(total: number = 30) {
  try {
    const headers = process.env.GITHUB_PAT
      ? { Authorization: `Bearer ${process.env.GITHUB_PAT}` }
      : undefined;
    const response = await fetch(
      `https://api.github.com/repos/ItziSpyder/ClickCrystals/releases?per_page=${total}`,
      { method: 'GET', headers, next: { revalidate: 300 } },
    );
    const releases = await response.json();
    const fixedReleases = releases.map((r: any) =>
      r.name === 'Release 1.2' ? { ...r, name: 'Release 1.2.0' } : r,
    );
    return fixedReleases;
    // return fixedReleases.slice(
    //   0,
    //   fixedReleases.findIndex((r: any) => r.name === 'Release 1.20.2-1.1.4'),
    // );
  } catch {
    throw new Error('Failed to fetch from API');
  }
}

/* 
Last updated: 2025-07-06
  {'1.21.5': '1.21.5', 
  '1.21.4': null, 
  '1.21.3': null, 
  '1.21.2': null, 
  '1.21.1': '1.21', 
  '1.21': '1.21', 
  '1.20.6': '1.20.6', 
  '1.20.5': null, 
  '1.20.4': '1.20.4', 
  '1.20.3': '1.20.4', 
  '1.20.2': '1.20.2', 
  '1.20.1': '1.20', 
  '1.20': '1.20'} 

  This means that builds of the mod for 1.20 are also intended to be used for 1.20.1.
  x: x means the x mod's build for minecraft versions x is intended to be used for the x version
  x: y means the y version's build is intended to be used for the x version of the game
  x: null means that the x version of minecraft is not supported by the mod
  This is used to map the mod's builds to the minecraft versions without duplicating the builds.
  e.g. 1.20 builds are intended to be used in 1.20 itself as well as 1.20.1 (1.20: 1.20 and 1.20.1: 1.20)
*/
async function getCCMappings() {
  const response = await fetch(
    'https://itzispyder.github.io/clickcrystals/info.json',
    {
      method: 'GET',
      next: { revalidate: 200 },
    },
  );

  const info = await response.json();

  return info['versionMappings'];
}

export async function getParsedReleases(): Promise<{
  releases: Record<string, any>[];
  mcVersions: { field: string; headerName: string }[];
}> {
  try {
    const releases = await getReleases(100);

    // Track all discovered MC versions dynamically
    const versionFieldMap = new Map<string, string>(); // mcVersion -> field key

    const parsedReleases = releases.map((release: any) => {
      const releaseName = release.name.replace('Release ', '');

      let downloads = 0;
      const assets: Record<string, string | null> = {};

      release.assets.forEach((asset: any) => {
        downloads += asset.download_count;

        const assetName: string = asset.name;
        const assetURL: string = asset.browser_download_url;

        // Only process .jar files
        if (!assetName.toLowerCase().endsWith('.jar')) return;

        // Extract MC version from asset name
        // Pattern: ClickCrystals-{mcVersion}-{modVersion}.jar
        const base = assetName.replace(/\.jar$/i, '');
        const prefix = 'ClickCrystals-';
        if (!base.startsWith(prefix)) return;

        const rest = base.slice(prefix.length);
        // The suffix is "-{modVersion}" where modVersion = releaseName
        const suffix = `-${releaseName}`;
        if (!rest.endsWith(suffix)) return;

        const mcVersion = rest.slice(0, -suffix.length);
        if (!mcVersion) return;

        const field = mcVersion.replaceAll('.', '');
        versionFieldMap.set(mcVersion, field);

        if (!assets[field]) {
          assets[field] = assetURL;
        }
      });

      return {
        version: releaseName,
        code: release.html_url,
        downloads,
        ...assets,
      };
    });

    const mappings = await getCCMappings();

    // Register mapping versions in field map
    for (const vk of Object.keys(mappings)) {
      if (!versionFieldMap.has(vk)) {
        versionFieldMap.set(vk, vk.replaceAll('.', ''));
      }
    }

    // Ensure all releases have all discovered fields
    const allFields = Array.from(versionFieldMap.values());
    for (const release of parsedReleases) {
      for (const field of allFields) {
        if (!(field in release)) {
          release[field] = null;
        }
      }
    }

    // Apply version mappings
    Object.entries(mappings).forEach(([versionKey, mappedVersion]) => {
      const key = versionKey.replaceAll('.', '');
      const mappedKey =
        typeof mappedVersion === 'string'
          ? mappedVersion.replaceAll('.', '')
          : null;

      parsedReleases.forEach((release: any) => {
        if (mappedKey && release[mappedKey] && !release[key]) {
          release[key] = release[mappedKey];
        } else if (!mappedKey) {
          release[key] = null;
        }
      });
    });

    // Build column defs from fields that have data in at least one release
    const fieldsWithData = new Set<string>();
    for (const release of parsedReleases) {
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

    return { releases: parsedReleases, mcVersions };
  } catch (err) {
    throw new Error('Failed to fetch from API' + err);
  }
}
