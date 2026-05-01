import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const prisma = (await import('@/lib/db')).default;
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
    return NextResponse.json(configs);
  } catch (error) {
    return NextResponse.json([]);
  }
}
