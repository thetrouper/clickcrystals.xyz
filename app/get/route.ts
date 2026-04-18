import { NextResponse } from 'next/server';
import { getLatestLink } from '@/lib/getLatest';

export const revalidate = 7200; // 2 hours

export async function GET() {
  const link = await getLatestLink();

  if (!link) {
    return NextResponse.redirect(
      'https://modrinth.com/mod/clickcrystals',
      302,
    );
  }

  return new NextResponse(null, {
    status: 302,
    headers: {
      Location: link,
      'Cache-Control': 'public, s-maxage=7200, stale-while-revalidate=3600',
    },
  });
}
