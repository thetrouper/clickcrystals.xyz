'use server'

type Assets = {
  v121: null | React.ReactElement;
  v1206: null | React.ReactElement;
  v1205: null | React.ReactElement;
  v1204: null | React.ReactElement;
  v1203: null | React.ReactElement;
  v1202: null | React.ReactElement;
  v1201: null | React.ReactElement;
  v120: null | React.ReactElement;
  v1904: null | React.ReactElement;
  v1903: null | React.ReactElement;
  v1902: null | React.ReactElement;
  v1901: null | React.ReactElement;
  v19: null | React.ReactElement;
}

export async function getReleases(total: number = 30) {
  try {
    const headers = process.env.GITHUB_PAT ? {
      "Authorization": `Bearer ${process.env.GITHUB_PAT}`
    } : undefined;

    const response = await fetch(`https://api.github.com/repos/ItziSpyder/ClickCrystals/releases?per_page=${total}`, {
      method: "GET",
      headers: headers,
      next: { revalidate: 300 }
    });
    const releases = await response.json();
    return releases;
  } catch (err) {
    throw new Error("Failed to fetch from API");
  }
}

export async function getParsedReleases() {
  try {
    const releases = await getReleases(100);
    const parsedReleases = releases.map((release: any) => {
      let releaseName = release.name.replace("Release ", "");

      let downloads = 0;
      let assetsData: Assets = {
        v121: null,
        v1206: null,
        v1205: null,
        v1204: null,
        v1203: null,
        v1202: null,
        v1201: null,
        v120: null,
        v1904: null,
        v1903: null,
        v1902: null,
        v1901: null,
        v19: null,
      };

      release.assets.forEach((asset: any) => {
        downloads += asset.download_count;

        let assetName = asset.name
        let assetURL = asset.browser_download_url;

        if (assetName.includes("1.21")) {
          assetsData['v121'] = assetURL
        } else if (assetName.includes("1.20.6")) {
          assetsData['v1206'] = assetURL
        } else if (assetName.includes("1.20.5")) {
          assetsData['v1205'] = assetURL
        } else if (assetName.includes("1.20.4")) {
          assetsData['v1204'] = assetURL
        } else if (assetName.includes("1.20.3")) {
          assetsData['v1203'] = assetURL
        } else if (assetName.includes("1.20.2")) {
          assetsData['v1202'] = assetURL
        } else if (assetName.includes("1.20.1")) {
          assetsData['v1201'] = assetURL
        } else if (assetName.includes("1.20")) {
          assetsData['v120'] = assetURL
        } else if (assetName.includes("1.19.4")) {
          assetsData['v1904'] = assetURL
        } else if (assetName.includes("1.19.3")) {
          assetsData['v1903'] = assetURL
        } else if (assetName.includes("1.19.2")) {
          assetsData['v1902'] = assetURL
        } else if (assetName.includes("1.19.1")) {
          assetsData['v1901'] = assetURL
        } else if (assetName.includes("1.19")) {
          assetsData['v19'] = assetURL
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
