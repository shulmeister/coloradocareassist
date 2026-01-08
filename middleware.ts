import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const proto = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');
  
  // Production check: Heroku sets x-forwarded-proto.
  // We assume production if not localhost.
  const isDev = hostname.includes('localhost') || hostname.includes('127.0.0.1');
  const isHttp = proto === 'http';
  const isWww = hostname.startsWith('www.');

  // 1. Redirect WWW -> Apex
  if (isWww) {
    url.hostname = hostname.replace(/^www\./, '');
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  // 2. Enforce HTTPS (non-dev only)
  if (!isDev && isHttp) {
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Skip Next.js internals and static files
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
