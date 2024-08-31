import NewConfigCard from "./NewConfig";
import prisma from "@/lib/db";
import ConfigCard from "./ConfigCard";

export default async function ConfigsGrid() {
  const configs = await prisma.config.findMany({
    select: {
      id: true,
      title: true,
      description: true,
      author: true,
      avatar: true,
      categories: true,
      config: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return (
    <>
      <NewConfigCard />

      {configs.map((config) => (
        <ConfigCard key={config.id} config={config} />
      ))}
    </>
  )
}
