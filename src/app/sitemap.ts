import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/seo'

export const dynamic = 'force-static'
export const revalidate = false

const ROUTES: string[] = [
  '/',
  '/committee/',
  '/speakers/',
  '/calls/',
  '/program/',
  '/attend/',
  '/contact/',
  '/sponsors/',
  '/awards/',
  '/information/',
  '/information/important-dates/',
  '/information/paper-kit-guidelines/',
  '/information/paper-submission/',
  '/information/tutorial-submission/',
  '/information/project-dissemination/',
  '/information/student-session/',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  
  // Define priority and changeFrequency for different route types
  const getRouteMetadata = (route: string) => {
    // Homepage has highest priority
    if (route === '/') {
      return { priority: 1.0, changeFrequency: 'weekly' as const }
    }
    // Main navigation pages
    if (['/committee/', '/speakers/', '/calls/', '/program/', '/attend/'].includes(route)) {
      return { priority: 0.8, changeFrequency: 'monthly' as const }
    }
    // Information pages (may change more frequently)
    if (route.startsWith('/information/')) {
      return { priority: 0.7, changeFrequency: 'monthly' as const }
    }
    // Other pages
    return { priority: 0.6, changeFrequency: 'monthly' as const }
  }
  
  return ROUTES.map((route) => {
    const metadata = getRouteMetadata(route)
    return {
      url: absoluteUrl(route),
      lastModified,
      changeFrequency: metadata.changeFrequency,
      priority: metadata.priority,
    }
  })
}

