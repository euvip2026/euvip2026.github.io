import type { MetadataRoute } from 'next'

import { absoluteUrl } from '@/lib/seo'

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
  return ROUTES.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
  }))
}

