import prisma from '@/lib/db';
import ConfigsGrid from './ConfigsGrid';

export default async function Configs() {
  if (!process.env.POSTGRES_PRISMA_URL) {
    return <ConfigsGrid configs={[]} />;
  }

  const configs = await prisma.config.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      categories: true,
      config: true,
      user: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return <ConfigsGrid configs={configs} />;
}
