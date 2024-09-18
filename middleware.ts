import { NextResponse } from 'next/server';
import { getLatestLink } from './lib/getLatest';

export async function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname === '/get') {
    return NextResponse.redirect(await getLatestLink());
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/get'],
};
