import { NextResponse } from 'next/server';

// /get route is now handled by app/get/route.ts

export async function middleware() {
  return NextResponse.next();
}
