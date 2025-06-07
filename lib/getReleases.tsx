'use server';

type Assets = {
  '1211': null | React.ReactElement;
  '121': null | React.ReactElement;
  '1206': null | React.ReactElement;
  '1205': null | React.ReactElement;
  '1204': null | React.ReactElement;
  '1203': null | React.ReactElement;
  '1202': null | React.ReactElement;
  '1201': null | React.ReactElement;
  '120': null | React.ReactElement;
  '1194': null | React.ReactElement;
  '1193': null | React.ReactElement;
  '1192': null | React.ReactElement;
  '1191': null | React.ReactElement;
  '119': null | React.ReactElement;
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
    return releases.slice(
      0,
      releases.findIndex((r: any) => r.name === 'Release 1.20.2-1.1.4'),
    );
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
    'https://itzispyder.github.io/clickcrystals/info',
    {
      method: 'GET',
      next: { revalidate: 200 },
    },
  );

  const info = JSON.parse(await response.text());

  return info['versionMappings'];
}

export async function getParsedReleases() {
  try {
    const releases = await getReleases(100);
    const parsedReleases = releases.map((release: any) => {
      let releaseName = release.name.replace('Release ', '');

      let downloads = 0;
      let assetsData: Assets = {
        '1211': null,
        '121': null,
        '1206': null,
        '1205': null,
        '1204': null,
        '1203': null,
        '1202': null,
        '1201': null,
        '120': null,
        '1194': null,
        '1193': null,
        '1192': null,
        '1191': null,
        '119': null,
      };

      release.assets.forEach((asset: any) => {
        downloads += asset.download_count;

        let assetName = asset.name;
        let assetURL = asset.browser_download_url;

        if (assetName.includes('1.21.1')) {
          assetsData['1211'] = assetURL;
        } else if (assetName.includes('1.21')) {
          assetsData['121'] = assetURL;
        } else if (assetName.includes('1.20.6')) {
          assetsData['1206'] = assetURL;
        } else if (assetName.includes('1.20.5')) {
          assetsData['1205'] = assetURL;
        } else if (assetName.includes('1.20.4')) {
          assetsData['1204'] = assetURL;
        } else if (assetName.includes('1.20.3')) {
          assetsData['1203'] = assetURL;
        } else if (assetName.includes('1.20.2')) {
          assetsData['1202'] = assetURL;
        } else if (assetName.includes('1.20.1')) {
          assetsData['1201'] = assetURL;
        } else if (assetName.includes('1.20')) {
          assetsData['120'] = assetURL;
        } else if (assetName.includes('1.19.4')) {
          assetsData['1194'] = assetURL;
        } else if (assetName.includes('1.19.3')) {
          assetsData['1193'] = assetURL;
        } else if (assetName.includes('1.19.2')) {
          assetsData['1192'] = assetURL;
        } else if (assetName.includes('1.19.1')) {
          assetsData['1191'] = assetURL;
        } else if (assetName.includes('1.19')) {
          assetsData['119'] = assetURL;
        }
      });

      return {
        version: releaseName,
        code: release.html_url,
        downloads: downloads,
        ...assetsData,
      };
    });

    const mappings = await getCCMappings();

    Object.entries(mappings).forEach(([key, value]: any) => {
      const version = key.replaceAll('.', '');
      const mappedVersion =
        typeof value === 'string' ? value.replaceAll('.', '') : null;

      if (mappedVersion !== null && mappings[version] !== mappedVersion) {
        parsedReleases[0][version] = parsedReleases[0][mappedVersion];
      }
    });

    return parsedReleases;
  } catch (err) {
    throw new Error('Failed to fetch from API' + err);
  }
}
