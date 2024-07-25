const dls = [0, 0, 0];

function parseNumber(num) {
  const ranges = [
    { value: 1e9, suffix: "b" },
    { value: 1e6, suffix: "m" },
    { value: 1e3, suffix: "k" },
  ];

  for (let i = 0; i < ranges.length; i++) {
    if (num >= ranges[i].value) {
      let roundedNum = (num / ranges[i].value).toFixed(2);
      if (roundedNum % 1 !== 0) {
        roundedNum = roundedNum.replace(/\.?0+$/, "");
      }
      return `${roundedNum}${ranges[i].suffix}`;
    }
  }
  return num.toString();
}

async function getTotalGitHubCount() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/ItziSpyder/ClickCrystals/releases`,
    );
    const releases = await response.json();

    let totalDownloadCount = 0;

    releases.forEach((release) => {
      release.assets.forEach((asset) => {
        totalDownloadCount += asset.download_count;
      });
    });

    dls[0] = totalDownloadCount;
    return parseNumber(totalDownloadCount);
  } catch (error) {
    return null;
  }
}

getTotalGitHubCount().then((downls) => {
  if (downls === null) {
    document.getElementById("githubDls").innerHTML = "Error fetching downloads";
    return;
  }
  document.getElementById("githubDls").innerHTML = downls;
  document.getElementById("totalDls").innerHTML = parseNumber(
    dls.reduce((a, b) => a + b, 0),
  );
});

fetch("https://api.modrinth.com/v2/project/clickcrystals")
  .then((response) => response.json())
  .then((data) => {
    dls[1] = data.downloads;
    document.getElementById("modrinthDls").innerHTML = parseNumber(
      data.downloads,
    );
    document.getElementById("totalDls").innerHTML = parseNumber(
      dls.reduce((a, b) => a + b, 0),
    );
  })
  .catch((error) => {
    document.getElementById("modrinthDls").innerHTML =
      "Error fetching downloads";
  });

fetch("https://api.curseforge.com/v1/mods/946253", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "x-api-key": "$2a$10$j9gT3w9JneeY6v49CpLj3uRDocQO/wgL0h6XAyiaOQ7q3K.gR8NUe",
  },
})
  .then((response) => response.json())
  .then((data) => {
    dls[2] = data.data.downloadCount;
    console.log(data);
    document.getElementById("curseforgeDls").innerHTML = parseNumber(
      data.data.downloadCount,
    );
    document.getElementById("totalDls").innerHTML = parseNumber(
      dls.reduce((a, b) => a + b, 0),
    );
  })
  .catch((error) => {
    document.getElementById("curseforgeDls").innerHTML =
      "Error fetching downloads";
    document.getElementById("totalDls").innerHTML = parseNumber(
      dls.reduce((a, b) => a + b, 0),
    );
  });

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

  if (!document.getElementById("versions")) {
    console.error("Element with ID 'versions' not found.");
    return;
  }

  console.log(releases);

  for (let i = 0; i < releases.length; i++) {
    console.log(releases[i]);
    const releaseTitle = releases[i].name || "Unnamed Release";
    const sourceCodeUrl = releases[i].html_url;

    let asset1214Url = null;
    let asset1206Url = null;
    let asset1204Url = null;
    let asset1202Url = null;
    let asset120Url = null;
    let downloads = 0;

    releases[i].assets.forEach((asset) => {
      downloads += asset.download_count;
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
    document.getElementById("versions").innerHTML += `
      <tr>
        <td>${releaseTitle}</td>
        <td><a href="${sourceCodeUrl}" class="badge bg-secondary text-decoration-none">Source Code</a></td>
        <td><a href="${asset1214Url || "#"}" class="badge bg-secondary text-decoration-none">${asset1214Url ? "V1.21 Download" : ""}</a></td>
        <td><a href="${asset1206Url || "#"}" class="badge bg-secondary text-decoration-none">${asset1206Url ? "V1.20.6 Download" : ""}</a></td>
        <td><a href="${asset1204Url || "#"}" class="badge bg-secondary text-decoration-none">${asset1204Url ? "V1.20.4 Download" : ""}</a></td>
        <td><a href="${asset1202Url || "#"}" class="badge bg-secondary text-decoration-none">${asset1202Url ? "V1.20.2 Download" : ""}</a></td>
        <td><a href="${asset120Url || "#"}" class="badge bg-secondary text-decoration-none">${asset120Url ? "V1.20 Download" : ""}</a></td>
        <td>${parseNumber(downloads)}</td>
      </tr>
    `;
  }
}

main();
