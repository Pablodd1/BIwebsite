import { NextResponse } from 'next/server';
 
let locales = ['en', 'es']
 
// Get the preferred locale, similar to the above or using a library
function getLocale(request) { 
  // Check if locale is in pathname
  const pathname = request.nextUrl.pathname
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (pathnameLocale) return pathnameLocale
  
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage.split(',')[0].split('-')[0]
    if (locales.includes(preferredLocale)) {
      return preferredLocale
    }
  }
  
  // Default to English
  return 'en'
}
 
export function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
 
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    
    // Handle root path specially
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }
    
    // For other paths, add locale prefix
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, favicon, etc)
    '/((?!_next|api|favicon|robots|sitemap|manifest|.*\\..*).*)',
  ],
}