import NewConfigCard from "./NewConfig";
import ConfigCard from "./ConfigCard";
import prisma from "@/lib/db";

export default async function Configs() {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">
      <NewConfigCard />

      {configs.map((config) => (
        <ConfigCard key={config.id} config={config} />
      ))}
    </div>
  );
}
