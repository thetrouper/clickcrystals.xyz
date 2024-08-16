'use server'

type Assets = {
  v121: null | React.ReactElement;
  v1206: null | React.ReactElement;
  v1204: null | React.ReactElement;
  v1202: null | React.ReactElement;
  v120: null | React.ReactElement;
}

type ParsedRelease = {
  version: string;
  code: string;
  downloads: number;
  v121: null | string;
  v1206: null | string;
  v1204: null | string;
  v1202: null | string;
  v120: null | string;
}

export async function getReleases() {
  try {
    const headers = process.env.GITHUB_PAT ? {
      "Authorization": `Bearer ${process.env.GITHUB_PAT}`
    } : undefined;

    const response = await fetch("https://api.github.com/repos/ItziSpyder/ClickCrystals/releases", {
      method: "GET",
      headers: headers,
      cache: 'force-cache',
    });
    const releases = await response.json();
    return releases;
  } catch (err) {
    throw new Error("Failed to fetch from API");
  }
}

export async function getSupportedReleases() {
  const releases = await getParsedReleases();
  const supported = releases.map((release: ParsedRelease) => {
    let supports = {
      v121: false,
      v1206: false,
      v1204: false,
      v1202: false,
      v120: false
    }
    if (release['v121'] != null) {
      supports['v121'] = true;
    } else {
      if (release['v1206'] != null) {
        supports['v1206'] = true;
      } else { 
        if (release['v1204'] != null) {
          supports['v1204'] = true;
        } else { 
          if (release['v1202'] != null) {
            supports['v1202'] = true;
          } else { 
            if (release['v120'] != null) {
              supports['v120'] = true;
            }
          }
        }
      }
    }

    return {
      version: release.version,
      ...supports,
    }

  })
  return supported
}

export async function getParsedReleases() {
  try {
    const releases = await getReleases();
    const parsedReleases = releases.map((release: any) => {
      let releaseName = release.name.replace("Release ", "");
      let downloads = 0;
      let assetsData: Assets = {
        v121: null,
        v1206: null,
        v1204: null,
        v1202: null,
        v120: null,
      };

      release.assets.forEach((asset: any) => {
        downloads += asset.download_count;
        
        let assetName = asset.name
        let assetURL = asset.browser_download_url;

        if (assetName.includes("1.21")) {
          assetsData['v121'] = assetURL
        } else if (assetName.includes("1.20.6")) {
          assetsData['v1206'] = assetURL
        } else if (assetName.includes("1.20.4")) {
          assetsData['v1204'] = assetURL
        } else if (assetName.includes("1.20.2")) {
          assetsData['v1202'] = assetURL
        } else if (assetName.includes("1.20")) {
          assetsData['v120'] = assetURL
        }
      });

      return {
        version: releaseName,
        code: release.html_url,
        downloads: downloads,
        ...assetsData,
      };
    });

    return parsedReleases;
  } catch (err) {
    throw new Error("Failed to fetch from API");
  }
}
