// Make sure this is the latest supported minecraft version by ClickCrystals
// Like 1.21.1, however remove the dots.
const latestMc = '1218';

import { getParsedReleases } from '@/lib/getReleases';

export async function getLatestLink() {
  try {
    const resp = await getParsedReleases();
    const link = resp[0]['latestMc'];

    return link;
  } catch (err) {
    return null;
  }
}
