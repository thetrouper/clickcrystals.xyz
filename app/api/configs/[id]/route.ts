import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

// GET /api/configs/[id]
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const config = await prisma.config.findUnique({
    where: {
      id: parseInt(id, 10),
    },
    select: {
      id: true,
      title: true,
      description: true,
      categories: true,
      config: true,
      user: {
        select: {
          id: true,
          name: true,
          avatar: true,
        },
      },
    },
  });

  if (!config) {
    return NextResponse.json({ error: 'Config not found' }, { status: 404 });
  }

  const response = {
    ...(typeof config.config === 'object' ? config.config : {}),
    id: config.id.toString(),
    authorId: config.user.id.toString(),
    author: config.user.name,
    authorImage: config.user.avatar,
    name: config.title,
    description: config.description,
    categories: config.categories,
  };

  return NextResponse.json(response);
}
