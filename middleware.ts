import { NextResponse } from 'next/server';
import { getLatestLink } from './lib/getLatest';

export async function middleware(request: Request) {
  const url = new URL(request.url);

  if (url.pathname === '/get') {
    const link = await getLatestLink();
    if (link) {
      try {
        const redirectUrl = new URL(link);
        if (redirectUrl.hostname === 'github.com') {
          return NextResponse.redirect(link);
        }
      } catch {
        // Invalid URL, fall through to home redirect
      }
    }
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/get'],
};
