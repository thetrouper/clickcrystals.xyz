async function getGithubReleases(repoOwner, repoName) {
  const url = `https://api.github.com/repos/${repoOwner}/${repoName}/releases`;
  const response = await fetch(url);
  const releases = await response.json();
  return releases;
}

async function main() {
  const repoOwner = "ItziSpyder";
  const repoName = "ClickCrystals";
  const releases = await getGithubReleases(repoOwner, repoName);

  if (releases.length === 0) {
    console.error("No releases found.");
    return;
  }

  const latestRelease = releases[0];
  const versionsElement = document.getElementById("versions");

  if (!versionsElement) {
    console.error("Element with ID 'versions' not found.");
    return;
  }

  const releaseTitle = latestRelease.name || "Unnamed Release";
  const sourceCodeUrl = latestRelease.html_url;

  let asset1214Url = null;
  let asset1206Url = null;
  let asset1204Url = null;
  let asset1202Url = null;
  let asset120Url = null;

  latestRelease.assets.forEach(asset => {
    const assetName = asset.name;
    const assetDownloadUrl = asset.browser_download_url;

    if (assetName.includes("1.21")) {
      asset1214Url = assetDownloadUrl;
    } else if (assetName.includes("1.20.6")) {
      asset1206Url = assetDownloadUrl;
    } else if (assetName.includes("1.20.4")) {
      asset1204Url = assetDownloadUrl;
    } else if (assetName.includes("1.20.2")) {
      asset1202Url = assetDownloadUrl;
    } else if (assetName.includes("1.20")) {
      asset120Url = assetDownloadUrl;
    }
  });

  const elementToDelete = document.getElementById("delete");
  if (elementToDelete) {
    elementToDelete.remove();
  }

  versionsElement.innerHTML = `
    <tr class="download-top">
      <td>${releaseTitle}</td>
      <td>Current Latest version with all of the latest features</td>
      <td><a href="${sourceCodeUrl}" class="badge bg-secondary text-decoration-none">Source Code</a></td>
      <td><a href="${asset1214Url || '#'}" class="badge bg-secondary text-decoration-none">V1.21 Download</a></td>
      <td><a href="${asset1206Url || '#'}" class="badge bg-secondary text-decoration-none">V1.20.6 Download</a></td>
      <td><a href="${asset1204Url || '#'}" class="badge bg-secondary text-decoration-none">V1.20.4 Download</a></td>
      <td><a href="${asset1202Url || '#'}" class="badge bg-secondary text-decoration-none">V1.20.2 Download</a></td>
      <td><a href="${asset120Url || '#'}" class="badge bg-secondary text-decoration-none">V1.20 Download</a></td>
      <td>
        <a href="https://www.curseforge.com/minecraft/mc-mods/clickcrystals/files/all" class="badge bg-secondary text-decoration-none">CurseForge</a>
        <a href="https://www.planetminecraft.com/mod/clickcrystal/" class="badge bg-secondary text-decoration-none">PlanetMC</a>
      </td>
    </tr>
  ` + versionsElement.innerHTML;
}

main();
