import prisma from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const configs = await prisma.config.findMany({
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
      orderBy: {
        createdAt: 'desc',
      },
    });

    const response = configs.map((config) => ({
      id: config.id.toString(),
      authorId: config.user.id.toString(),
      author: config.user.name,
      authorImage: config.user.avatar,
      name: config.title,
      description: config.description,
      categories: config.categories,
      contentsUrl: `${request.nextUrl.origin}/api/configs/${config.id}`,
    }));

    return NextResponse.json(response);
  } catch (error) {
    console.error('Error fetching configs:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
