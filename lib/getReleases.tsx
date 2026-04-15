'use server';

type Assets = {
  '12111': null | string;
  '12110': null | string;
  '1219': null | string;
  '1218': null | string;
  '1217': null | string;
  '1216': null | string;
  '1215': null | string;
  '1214': null | string;
  '1211': null | string;
  '121': null | string;
  '1206': null | string;
  '1204': null | string;
  '1202': null | string;
  '1201': null | string;
  '120': null | string;
  '1194': null | string;
};

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
    return releases.map((r: any) =>
      r.name === 'Release 1.2' ? { ...r, name: 'Release 1.2.0' } : r,
    );
  } catch {
    throw new Error('Failed to fetch from API');
  }
}

async function getCCMappings() {
  const response = await fetch(
    'https://itzispyder.github.io/clickcrystals/info.json',
    { method: 'GET', next: { revalidate: 200 } },
  );
  const info = await response.json();
  return info['versionMappings'];
}

async function getModrinthVersionMap(): Promise<Record<string, string>> {
  try {
    const response = await fetch(
      'https://api.modrinth.com/v2/project/clickcrystals/version',
      { method: 'GET', next: { revalidate: 300 } },
    );
    const versions = await response.json();
    const map: Record<string, string> = {};
    for (const version of versions) {
      const file =
        version.files?.find((f: any) => f.primary) ?? version.files?.[0];
      if (!file) continue;
      for (const mcVersion of version.game_versions ?? []) {
        const key = mcVersion.replaceAll('.', '');
        if (!map[key]) map[key] = file.url;
      }
    }
    return map;
  } catch {
    return {};
  }
}

export async function getParsedReleases() {
  try {
    const [releases, modrinthMap, mappings] = await Promise.all([
      getReleases(100),
      getModrinthVersionMap(),
      getCCMappings(),
    ]);

    const parsedReleases = releases.map((release: any) => {
      let releaseName = release.name.replace('Release ', '');
      let downloads = 0;
      let assetsData: Assets = {
        '12111': null,
        '12110': null,
        '1219': null,
        '1218': null,
        '1217': null,
        '1216': null,
        '1215': null,
        '1214': null,
        '1211': null,
        '121': null,
        '1206': null,
        '1204': null,
        '1202': null,
        '1201': null,
        '120': null,
        '1194': null,
      };

      release.assets.forEach((asset: any) => {
        downloads += asset.download_count;
        const assetName = asset.name;
        const githubURL = asset.browser_download_url;

        const versionKeys: [string, string][] = [
          ['1.21.11', '12111'],
          ['1.21.10', '12110'],
          ['1.21.9', '1219'],
          ['1.21.8', '1218'],
          ['1.21.7', '1217'],
          ['1.21.6', '1216'],
          ['1.21.5', '1215'],
          ['1.21.4', '1214'],
          ['1.21.1', '1211'],
          ['1.21', '121'],
          ['1.20.6', '1206'],
          ['1.20.4', '1204'],
          ['1.20.2', '1202'],
          ['1.20.1', '1201'],
          ['1.20', '120'],
          ['1.19.4', '1194'],
        ];

        for (const [mcVer, key] of versionKeys) {
          if (assetName.includes(mcVer)) {
            assetsData[key as keyof Assets] = modrinthMap[key] ?? githubURL;
            break;
          }
        }
      });

      return {
        version: releaseName,
        code: release.html_url,
        downloads,
        ...assetsData,
      };
    });

    Object.entries(mappings).forEach(([versionKey, mappedVersion]) => {
      const key = versionKey.replaceAll('.', '');
      const mappedKey =
        typeof mappedVersion === 'string'
          ? mappedVersion.replaceAll('.', '')
          : null;

      parsedReleases.forEach((release: any) => {
        if (mappedKey && release[mappedKey] && !release[key]) {
          release[key] = modrinthMap[key] ?? release[mappedKey];
        } else if (!mappedKey && !release[key]) {
          release[key] = null;
        }
      });
    });

    return parsedReleases;
  } catch (err) {
    throw new Error('Failed to fetch from API' + err);
  }
}
