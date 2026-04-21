import Download from '@/components/Sections/download/download';
import { getModrinthParsedReleases } from '@/lib/getModrinthReleases';
import { getCurseForgeParsedReleases } from '@/lib/getCurseForgeReleases';
import { getParsedReleases } from '@/lib/getReleases';
import { Metadata } from 'next';

export const revalidate = 300;

export const metadata: Metadata = {
  title: 'ClickCrystals - Download',
  description:
    'Download ClickCrystals and experience its whole set of ultimate features. Downloading ClickCrystals is a click-to-go process, so why not do it now?',
};

async function fetchSource<T>(fn: () => Promise<T>): Promise<T | null> {
  try {
    return await fn();
  } catch {
    return null;
  }
}

export default async function download() {
  const [modrinth, curseforge, github] = await Promise.all([
    fetchSource(async () => {
      const r = await getModrinthParsedReleases();
      return { rows: r.releases, mcVersions: r.mcVersions };
    }),
    fetchSource(async () => {
      const r = await getCurseForgeParsedReleases();
      return { rows: r.releases, mcVersions: r.mcVersions };
    }),
    fetchSource(async () => {
      const r = await getParsedReleases();
      return { rows: r.releases, mcVersions: r.mcVersions };
    }),
  ]);

  return <Download initialData={{ modrinth, curseforge, github }} />;
}
