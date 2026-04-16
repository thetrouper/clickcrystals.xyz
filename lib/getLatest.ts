// Make sure this is the latest supported minecraft version by ClickCrystals
// Like 1.21.1, however remove the dots.
const latestMc = '2612';

import { getParsedReleases } from '@/lib/getReleases';

export async function getLatestLink() {
  try {
    const { releases } = await getParsedReleases();
    const link = releases[0][latestMc];

    return link;
  } catch (err) {
    return null;
  }
}
