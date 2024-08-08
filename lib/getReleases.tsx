'use server'

type Assets = {
  v121: null | React.ReactElement;
  v1206: null | React.ReactElement;
  v1204: null | React.ReactElement;
  v1202: null | React.ReactElement;
  v120: null | React.ReactElement;
}

export async function getReleases() {
  try {
    const headers = process.env.GITHUB_PAT ? {
      "Authorization": `Bearer ${process.env.GITHUB_PAT}`
    } : undefined;

    const options = {
      method: "GET",
      headers: headers
    };

    const response = await fetch("https://api.github.com/repos/ItziSpyder/ClickCrystals/releases", options);
    const releases = await response.json();
    return releases;
  } catch (err) {
    throw new Error("Failed to fetch from API");
  }
}

export async function getParsedReleases() {
  try {
    const releases = await getReleases();
    const parsedReleases = releases.map((release: any) => {
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
        
        let assetName = asset.name;
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
        version: release.name,
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
