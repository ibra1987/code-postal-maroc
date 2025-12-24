// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Redirect /provinces/* to /provinces-postales/*
  if (pathname.startsWith('/provinces/')) {
    const slug = pathname.replace('/provinces/', '')
    const url = new URL(`/provinces-postales/${slug}`, request.url)
    return NextResponse.redirect(url, 301)
  }
  
  // Redirect anything starting with /codes to homepage
  if (pathname.startsWith('/codes')) {
    return NextResponse.redirect(new URL('/', request.url), 301)
  }
  
  // Continue normally for other routes
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/provinces/:path*',
    '/codes/:path*',
  ],
}